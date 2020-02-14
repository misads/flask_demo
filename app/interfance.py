# coding=utf-8
import datetime
import os
import random
import time

from flask import current_app as app, Blueprint, jsonify, render_template, abort, send_file, session, request, redirect
from flask.helpers import safe_join
from app import utils
from pyecharts import Scatter3D
from pyecharts import Kline, Line

from app.models import db, Fund, Favourite, History, Theme, Wealth, Trade

interfance = Blueprint('interfance', __name__)


@interfance.route('/test')
def test():
    time_stamp = utils.get_time_stamp()
    ans = utils.get_value('320007', time_stamp)

    return jsonify(ans)


@interfance.route('/update')
def update():
    utils.updata_value()
    utils.set_config('last_update', utils.get_time_stamp())
    return jsonify(['ok'])


@interfance.route('/update_hot')
def update_hot():
    utils.update_hot()
    utils.set_config('last_update_hot', utils.get_time_stamp())
    return jsonify(['ok'])


@interfance.route('/new')
def get_new():
    return jsonify(utils.get_new())


@interfance.route('/mystar')
def mystar():
    if not utils.authed():
        return jsonify(['login first'])
    uid = session['id']
    fav_q = Favourite.query.filter_by(uid=uid).all()
    fav_q = [i.fid for i in fav_q]
    return jsonify(fav_q)


@interfance.route('/star')
def star():
    if not utils.authed():
        return jsonify(['login first'])
    requests = request.args
    if 'id' not in requests:
        return jsonify(['failed'])

    fid = requests['id']
    f_q = Fund.query.filter_by(id=fid).first()
    if not f_q:
        return jsonify(['invalid fund id'])

    uid = session['id']
    fav_q = Favourite.query.filter_by(uid=uid, fid=fid).first()
    if fav_q:
        return jsonify(['already stared'])

    new_star = Favourite(uid, fid)
    db.session.add(new_star)
    db.session.commit()

    return jsonify(['succeed'])


@interfance.route('/unstar')
def unstar():
    if not utils.authed():
        return jsonify(['login first'])
    requests = request.args
    if 'id' not in requests:
        return jsonify(['failed'])

    fid = requests['id']

    uid = session['id']
    fav_q = Favourite.query.filter_by(uid=uid, fid=fid).first()
    if not fav_q:
        return jsonify(['not stared'])

    db.session.delete(fav_q)
    db.session.delete(fav_q)
    db.session.commit()
    return jsonify(['succeed'])


@interfance.route('/buy', methods=['POST'])
def buy():
    if not utils.authed():
        return jsonify(['login first'])

    uid = session['id']
    money = request.form['money']
    fid = request.form['fid']
    if not money or not fid:
        return jsonify([u'金额不能为空'])

    balance = utils.get_balance()
    try:
        money = round(float(money), 2)
    except:
        return jsonify([u'请输出正确的金额'])

    if money > balance:
        return jsonify([u'余额不足'])

    w_q = Wealth.query.filter_by(uid=uid, type='balance').first()
    w_q.share -= money

    time_stamp = utils.get_time_stamp()
    share = money
    cost = 1
    new_trade = Trade(uid, fid, share, 'request', cost, cost, time_stamp)
    db.session.add(new_trade)

    db.session.commit()

    return jsonify([])


@interfance.route('/undo', methods=['POST'])
def undo():
    if not utils.authed():
        return jsonify(['login first'])

    uid = session['id']
    id = request.form['id']

    if not id or not id.isdigit():
        return jsonify([u'交易不存在'])

    id = int(id)

    t_q = Trade.query.filter_by(uid=uid, id=id).first()
    if t_q.type != 'request':
        return jsonify([u'无法撤回，请刷新'])

    money = t_q.share
    db.session.delete(t_q)

    w_q = Wealth.query.filter_by(uid=uid, type='balance').first()
    w_q.share += money

    db.session.commit()

    return jsonify([])


@interfance.route('/confirm', methods=['POST'])
def confirm():
    if not utils.authed():
        return jsonify(['login first'])

    uid = session['id']
    id = request.form['id']

    if not id or not id.isdigit():
        return jsonify([u'交易不存在'])

    id = int(id)

    t_q = Trade.query.filter_by(uid=uid, id=id).first()
    if t_q.type != 'confirm':
        return jsonify([u'无法确认，请刷新'])

    cost = utils.get_value(t_q.fid, t_q.time_stamp)
    if not cost:
        return jsonify([u'无法确认，请明天重试'])
    t_q.cost = cost
    t_q.share = t_q.share / cost

    t_q.type = 'buy'

    new_fund = Wealth(uid, t_q.fid, t_q.share, cost, 'fund')
    db.session.add(new_fund)

    db.session.commit()

    return jsonify([])


@interfance.route('/change_group', methods=['POST'])
def change_group():
    if not utils.authed():
        return jsonify(['login first'])

    uid = session['id']
    group_name = request.form['group_name']
    fid = request.form['group_fid']
    if not group_name or not fid:
        return jsonify(['param lost'])

    fav_q = Favourite.query.filter_by(uid=uid, fid=fid).first()
    if not fav_q:
        return jsonify(['not starred yet'])

    fav_q.group = group_name
    db.session.commit()
    return jsonify([])


def line_chart(date, values, title='Graph 1'):
    # date, values, rates = utils.get_k_line(code)
    # kline = Kline("%s (%s)" % (name, code), width=1200, height=600)
    scale = 30. / max(45, len(date)) * 100
    limit = slice(-30, None)
    # utils.color_print(scale, 3)

    line = Line(title, width=1000, height=500)
    line.add(
        "净值",
        date,
        values,
        yaxis_min='dataMin',
        is_label_show=True,
        yaxis_type='value',
        is_datazoom_extra_show=False,
        datazoom_extra_range=[90, 100],
        datazoom_extra_type='both',
        is_smooth=True,
        mark_point=["max", "min"],
        is_datazoom_show=True,
        datazoom_type='both',
        datazoom_range=[100-scale, 100],
        line_width=3,
        label_text_size=15,
        label_emphasis_textsize=15,
        is_random=False,
        label_color=['#3C505E', '#D48265'],
    )

    return line