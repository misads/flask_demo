# encoding=utf-8
import os

from flask import current_app as app, Blueprint, jsonify, render_template, abort, send_file, session, request, redirect
from app import utils
from app.models import db, Users, Cache
from passlib.hash import bcrypt_sha256
from app.utils import ratelimit
import random

auth = Blueprint('auth', __name__)


@auth.route('/send_sms', methods=['POST'])
@ratelimit(method="POST", limit=1, interval=60)
def send_sms():
    phone = request.form['phone']

    if not phone or not utils.check_phone_format(phone):
        return jsonify(['invalid phone'])

    captcha = ''
    for i in range(6):
        captcha += str(random.randint(0, 9))
    # captcha = '412313'
    user_q = Users.query.filter_by(phone=phone).first()
    if user_q:
        return jsonify(['这个手机号已经被注册了。'])

    timestamp = utils.get_time_stamp()
    captcha_q = Cache.query.filter_by(key=phone).first()
    if captcha_q:
        captcha_q.value = captcha
        captcha_q.time_stamp = timestamp
    else:
        new_cache = Cache(phone, captcha, timestamp)
        new_cache.comment = 'captcha'
        db.session.add(new_cache)
    db.session.commit()
    utils.send_sms(phone, captcha)

    return jsonify([])


@auth.route('/register', methods=['POST'])
def register():
    username = request.form['username']
    phone = request.form['phone']
    captcha = request.form['captcha']
    password = request.form['password']

    errors = []
    if not username:
        errors.append('Username can not be empty.')
    if not phone:
        errors.append('Phone can not be empty.')
    if not captcha:
        errors.append('Captcha can not be empty.')
    if not password:
        errors.append('Password can not be empty.')

    if len(errors) > 0:
        return jsonify(errors)

    username = username.strip()
    phone = phone.strip()

    forbidden_list = ['admin', 'root', 'system', 'username', 'name', 'team', 'user']

    name_too_short = 0 < len(username) < 3
    name_empty = len(username) == 0
    name_too_long = len(username) > 16
    invalid_name = username in forbidden_list
    invalid_phone = not utils.check_phone_format(phone)
    invalid_username = utils.check_phone_format(username)
    username_existed = Users.query.add_columns('name', 'id').filter_by(name=username).first()
    phone_existed = Users.query.add_columns('phone', 'id').filter_by(phone=phone).first()
    pass_too_short = 0 < len(password) < 5
    pass_too_long = len(password) > 128

    errors = []
    errors_info = {
        'Username can not be shorter than 3 characters.': name_too_short,
        'Username can not be empty.': name_empty,
        'Username can not be longer than 16 characters.': name_too_long,
        'Illegal username.': invalid_name,
        'Username can not be phone format.': invalid_username,
        'Invalid phone.': invalid_phone,
        'Username has been taken.': username_existed,
        'This phone number has been registered.': phone_existed,
        'Password can not be shorter than 5 characters.': pass_too_short,
        'Password can not be longer than 128 characters.': pass_too_long,
    }
    for msg in errors_info:
        if errors_info[msg]:
            errors.append(msg)

    if len(errors) > 0:
        return jsonify(errors)

    c_q = Cache.query.filter_by(key=phone, comment='captcha').first()
    if not c_q or c_q.value != captcha:
        return jsonify(['短信验证码错误'])
    timestamp = utils.get_time_stamp()

    if int(timestamp) - int(c_q.time_stamp) > 600:
        return jsonify(['短信验证码超时，请重新获取'])

    with app.app_context():
        user = Users(username, phone, password)
        db.session.add(user)
        db.session.commit()
        db.session.flush()

        session['username'] = user.name
        session['id'] = user.id
        session['admin'] = user.admin
        session['nonce'] = utils.sha512(os.urandom(10))

    return jsonify([])


@auth.route('/login', methods=['GET'])
def login_page():
    if utils.authed():
        return render_template('index.html')
    return render_template('index.html', login=True)


@auth.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    errors = []
    if not username:
        errors.append('Username can not be empty.')
    if not password:
        errors.append('Password can not be empty.')

    if len(errors) > 0:
        return jsonify(errors)

    if utils.check_phone_format(username) is True:
        user = Users.query.filter_by(phone=username).first()
    else:
        user = Users.query.filter_by(name=username).first()

    if user:
        if bcrypt_sha256.verify(password, user.password):
            try:
                session.regenerate()  # NO SESSION FIXATION FOR YOU
            except:
                pass  # TODO: Some session objects don't implement regenerate :(

            session['username'] = user.name
            session['id'] = user.id
            session['admin'] = user.admin
            session['nonce'] = utils.sha512(os.urandom(10))
            db.session.close()
        else:
            return jsonify(['Invalid password.'])
    else:
        return jsonify(['Username not existed.'])

    return jsonify([])


@auth.route('/logout')
def logout():
    if utils.authed():
        session.clear()
    return jsonify([])
