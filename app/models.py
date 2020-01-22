# coding=utf-8
# encoding=utf-8

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from passlib.hash import bcrypt_sha256
from app.utils import get_time_stamp

app = Flask(__name__)
app.config.from_object('app.config.Config')
db = SQLAlchemy()  # type: SQLAlchemy


class Theme(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128))
    link = db.Column(db.String(128))

    def __init__(self, name, link):
        self.name = name
        self.link = link


class History(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fid = db.Column(db.String(32), db.ForeignKey('fund.id'))
    key = db.Column(db.String(128))
    value = db.Column(db.String(32))
    date = db.Column(db.String(32))

    def __init__(self, fid, key, value):
        self.fid = fid
        self.key = key
        self.value = value


class Favourite(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    uid = db.Column(db.Integer, db.ForeignKey('users.id'))
    fid = db.Column(db.String(32), db.ForeignKey('fund.id'))
    group = db.Column(db.String(128))

    def __init__(self, uid, fid):
        self.uid = uid
        self.fid = fid


class Fund(db.Model):
    id = db.Column(db.String(32), primary_key=True)
    name = db.Column(db.String(128))
    fee = db.Column(db.String(32))
    value_today = db.Column(db.String(32))
    value_yesterday = db.Column(db.String(32))
    rate = db.Column(db.String(32))

    def __init__(self, id, name, fee):
        self.id = id
        self.name = name
        self.fee = fee

    def __repr__(self):
        return "<Pages route {0}>".format(self.route)


class Cache(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    key = db.Column(db.String(128))
    value = db.Column(db.String(128))
    time_stamp = db.Column(db.String(32))
    comment = db.Column(db.String(128))

    def __init__(self, key, value, time_stamp):
        self.key = key
        self.value = value
        self.time_stamp = time_stamp

    def __repr__(self):
        return "<Pages route {0}>".format(self.route)


class Configs(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(32))
    value = db.Column(db.String(128))
    comment = db.Column(db.String(128))

    def __init__(self, name, value):
        self.name = name
        self.value = value

    def __repr__(self):
        return "<Pages route {0}>".format(self.route)


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), unique=True)
    phone = db.Column(db.String(128), unique=True)
    password = db.Column(db.String(128))
    website = db.Column(db.String(128))
    nickname = db.Column(db.String(128))
    number = db.Column(db.String(32))
    team = db.Column(db.Integer)  # 外键
    extra_info = db.Column(db.String(32))
    banned = db.Column(db.Boolean, default=False)
    verified = db.Column(db.Boolean, default=False)
    admin = db.Column(db.Boolean, default=False)
    join_time = db.Column(db.String(32), default=get_time_stamp())

    def __init__(self, name, phone, password):
        self.name = name
        self.phone = phone
        self.password = bcrypt_sha256.encrypt(str(password))

    def __repr__(self):
        return '<user %r>' % self.name

