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
from app.utils import authed_only

views = Blueprint('views', __name__)


@views.route('/')
@views.route('/index')
def index():
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

    hot = utils.get_hot('D', limit=99999, area='industry')  # 29
    return render_template('index.html', overall=overall, hot=hot)
    # response = {'strangers': []}
    # s_q = Strangers.query.all()
    # for row in s_q:
    #     response['strangers'].append(row.time)
    # return jsonify(response)


@views.route('/hot')
def hot():
    ans = {}
    tags = ['D', 'Z', 'Y', '3Y', '6Y', 'N']
    for tag in tags:
        hot = utils.get_hot(tag)
        ans[tag] = hot
    return render_template('hot.html', hot=ans, url='/hot')


@views.route('/all')
def view_all():
    d_q = Fund.query.limit(200).all()
    if utils.authed():
        uid = session['id']
        fav_q = Fund.query.join(Favourite).filter(Favourite.uid == uid).all()
        fav_list = [i.id for i in fav_q]
    else:
        fav_list = []
    last_update = utils.get_last_update()
    return render_template('fund.html', url='/all', data=d_q, last_update=last_update, fav_list=fav_list)


@views.route('/favourite')
def favourite():
    # d_q = Fund.query.all()
    if not utils.authed():
        return redirect('/login')

    uid = session['id']

    w_q = Wealth.query.filter_by(uid=uid, type='balance').first()
    balance = w_q.share if w_q else 0.00

    d_q = Fund.query.join(Favourite).filter(Favourite.uid == uid).all()
    fav_list = [i.id for i in d_q]

    his_q = History.query.filter(History.fid.in_(fav_list)).all()
    his_dict = {}
    for i in fav_list:
        line = {}
        for j in his_q:
            if j.fid == i:
                line[j.key] = [j.value, j.date if j.date else '']

        his_dict[i] = line

    fav_q = Favourite.query.filter_by(uid=uid).all()
    fav_dict = {}

    tag = request.args.get('tag')

    for i in fav_q:
        g = i.group
        if not tag:
            tag = g
        if g in fav_dict:
            fav_dict[g].append(i.fid)
        else:
            fav_dict[g] = [i.fid]

    chance = utils.get_chance()
    top = utils.get_top()
    last_update = utils.get_last_update()
    # return jsonify(his_dict)
    return render_template('favourite.html', url='/favourite', data=d_q, fav_dict=fav_dict,
                           his_dict=his_dict, chance=chance, top=top, tag=tag, balance='%.2f' % balance,
                           last_update=last_update, q=u'自选基金')


@views.route('/standing')
def standing():
    if utils.authed():
        uid = session['id']
        fav_q = Fund.query.join(Favourite).filter(Favourite.uid == uid).all()
        fav_list = [i.id for i in fav_q]
    else:
        fav_list = []

    asc = request.args.get('asc')
    if asc:
        d_q = db.session.query(Fund).filter(Fund.rate.like('-%')).order_by(Fund.rate.desc(), Fund.id)
        q = u'跌幅排行'
        asc = True
    else:
        d_q = db.session.query(Fund).filter(Fund.rate != '').order_by(Fund.rate.desc(), Fund.id)
        q = u'涨幅排行'
        asc = False

    d_q = d_q.limit(200).all()
    last_update = utils.get_last_update()
    return render_template('fund.html', url='/standing', data=d_q, fav_list=fav_list, q=q,
                           last_update=last_update, asc=asc)


@views.route('/fund')
def fund():
    if utils.authed():
        uid = session['id']
        fav_q = Fund.query.join(Favourite).filter(Favourite.uid == uid).all()
        fav_list = [i.id for i in fav_q]
    else:
        fav_list = []

    q = request.args.get('q')
    if q:
        theme_q = Theme.query.filter_by(name=q).first()
        if theme_q:
            theme = utils.get_theme(theme_q.link)
            d_q = db.session.query(Fund).filter(Fund.id.in_(theme))
        elif len(q) == 6 and q.isdigit():
            d_q = db.session.query(Fund).filter(Fund.id == q)
        else:
            d_q = db.session.query(Fund).filter(Fund.name.like('%' + q + '%'))

        d_q = d_q.limit(500).all()
    else:
        d_q = Fund.query.limit(500).all()
    last_update = utils.get_last_update()
    return render_template('fund.html', url='/fund', data=d_q, fav_list=fav_list, last_update=last_update, q=q)


@views.route('/wealth')
@authed_only
def wealth():
    uid = session.get('id')

    w_q = Wealth.query.filter_by(uid=uid, type='balance').first()
    balance = w_q.share if w_q else 0.00
    property = balance

    w_q = Wealth.query.filter_by(uid=uid, type='fund').all()
    fund_list = [i.fid for i in w_q]
    fund_q = Fund.query.filter(Fund.id.in_(fund_list)).all()
    fund_dict = {i.id: i for i in fund_q}

    data = []
    for i in w_q:
        gain = i.share * (float(fund_dict[i.fid].value_today) - i.cost)
        cost_all = i.cost * i.share
        amount = float(fund_dict[i.fid].value_today) * i.share
        line = {'id': i.fid,
                'name': fund_dict[i.fid].name,
                'value_today': fund_dict[i.fid].value_today,
                'amount': '%.2f' % amount,
                'cost': i.cost,
                'rate': fund_dict[i.fid].rate,
                'gain': '%.2f' % gain,
                'gain_rate': '%.2f' % (gain / cost_all * 100)
                }
        data.append(line)
        property += amount

    last_update = utils.get_last_update()
    return render_template('wealth.html', url='/wealth', balance='%.2f' % balance, property='%.2f' % property,
                           data=data, last_update=last_update)


DEBUG_MODE = False


@views.route('/trade')
@authed_only
def trade():
    uid = session.get('id')

    w_q = Wealth.query.filter_by(uid=uid, type='balance').first()
    balance = w_q.share if w_q else 0.00
    property = balance

    data = None

    if not DEBUG_MODE:
        d_q = Trade.query.filter_by(uid=uid).filter(Trade.type.in_(['pending', 'request'])).all()

        for i in d_q:
            status = utils.check_time(i.time_stamp)
            i.type = status
            # if status == 'confirm':
            #    i.share = i.share / i.cost

        db.session.commit()

    d_q = db.session.query(Trade).filter(Trade.uid == uid).order_by(Trade.time_stamp.desc(), Trade.id).all()

    fund_list = [i.fid for i in d_q]
    fund_q = Fund.query.filter(Fund.id.in_(fund_list)).all()
    fund_dict = {i.id: i for i in fund_q}

    data = []
    status = {
        'request': u'申请买入',
        'pending': u'等待中',
        'confirm': u'确认份额',
        'buy': u'买入',
        'sell': u'卖出'
    }
    for i in d_q:
        value_today = fund_dict[i.fid].value_today
        hold_gain = i.share * (float(value_today) - i.cost)
        cost_all = i.share * i.cost
        hold_rate = hold_gain / cost_all * 100
        sell_gain = i.share * (i.value - i.cost) if i.type == 'sell' else 0.
        sell_rate = (i.value - i.cost) / i.cost * 100 if i.type == 'sell' else 0.
        amount = float(fund_dict[i.fid].value_today) * i.share if i.type not in ['pending', 'request', 'confirm'] else i.share

        line = {'id': i.id,
                'fid': i.fid,
                'name': fund_dict[i.fid].name,
                'value_today': value_today,
                'rate': fund_dict[i.fid].rate,
                'share': '%.2f' % i.share,
                'cost': '%.4f' % i.cost,
                'value': '%.4f' % i.value if i.type == 'sell' else None,
                'hold_gain': '%.2f' % hold_gain if i.type != 'sell' else None,
                'hold_rate': '%.2f' % hold_rate if i.type != 'sell' else None,
                'sell_gain': '%.2f' % sell_gain if i.type == 'sell' else None,
                'sell_rate': '%.2f' % sell_rate if i.type == 'sell' else None,
                'amount': '%.2f' % amount,
                'status': status[i.type],
                'time': utils.get_time_str(i.time_stamp),
                }
        data.append(line)

    last_update = utils.get_last_update()
    return render_template('trade.html', url='/trade', balance='%.2f' % balance,
                           data=data, last_update=last_update)


@views.route('/pay')
def pay():
    return render_template('pay.html', url='/pay')


# REMOTE_HOST = "https://pyecharts.github.io/assets/js/"
REMOTE_HOST = "/html/user/static/js/echarts"


@views.route('/detail')
def detail():
    id = request.args.get('id')
    today_predict = request.args.get('today')
    if not id:
        return render_template('echart.html')

    def update_history(fid, key, value, date=None):
        his_q = History.query.filter_by(fid=fid, key=key).first()
        if his_q:
            his_q.value = value
            if date is not None:
                his_q.date = date
        else:
            new_his = History(fid=id, key=key, value=value)
            if date is not None:
                new_his.date = date
            db.session.add(new_his)

    f_q = Fund.query.filter_by(id=id).first()
    if f_q:
        date, values, rates = utils.get_k_line(id)
        limit = 15

        details = list(zip(date[:-limit - 1:-1], values[:-limit - 1:-1], rates[:-limit - 1:-1]))

        today = values[-1]
        compares = []
        # return jsonify(details)
        for i in [7, 30, 60, 90, 365]:
            yestoday = max(values[-i:])
            c_high = round((today - yestoday) / yestoday * 100, 2)

            yestoday = min(values[-i:])
            c_low = round((today - yestoday) / yestoday * 100, 2)
            compares.append([i, c_high, c_low])

            key = 'max_' + str(i)
            value = c_high
            update_history(id, key, value)

            key = 'min_' + str(i)
            value = c_low
            update_history(id, key, value)

        for i in range(limit):
            dt = date[-i - 1]

            key = 'value_' + str(i)
            value = values[-i - 1]
            update_history(id, key, value, dt)

            key = 'rate_' + str(i)
            value = rates[-i - 1]
            update_history(id, key, value, dt)

        db.session.commit()

        from app.interfance import line_chart
        kline = line_chart(date, values, "%s (%s)" % (f_q.name, id), today_predict)
        return render_template('echart.html', url='/detail', myechart=kline.render_embed(),
                               host=REMOTE_HOST,
                               script_list=kline.get_js_dependencies(),
                               details=details,
                               compares=compares,
                               q=f_q.name)
    else:
        return render_template('echart.html')


@views.route('/html/user/static/<path:path>')
def static_route(path):
    filename = safe_join(app.root_path, 'html', 'user', 'static', path)
    if os.path.isfile(filename):
        return send_file(filename)
    else:
        abort(404)
