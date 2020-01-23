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

from app.models import db, Fund, Favourite, History, Theme

interfance = Blueprint('interfance', __name__)


@interfance.route('/test')
def test():
    overall = []
    codes = ['1.000001',
             '0.399001',
             '0.399006',
             '0.399005',
             '1.000300',
             '1.000016',
             '1.000003',
             '1.000002']

    for code in codes:
        name, today, trend, rate = utils.get_overall(code)
        overall.append([name, today, trend, rate])

    return jsonify(overall)


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