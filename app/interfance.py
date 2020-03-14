# coding=utf-8
import datetime
import os
import random
import time

from flask import current_app as app, Blueprint, jsonify, render_template, abort, send_file, session, request, redirect
from flask.helpers import safe_join
from app import utils
from pyecharts import Scatter3D
from pyecharts import Kline, Line, Overlap

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


def line_chart(date, values, title='Graph 1', today=None, tomorrow=None):
    # date = date[:-13]
    # values = values[:-13]
    # date, values, rates = utils.get_k_line(code)
    # kline = Kline("%s (%s)" % (name, code), width=1200, height=600)
    scale = 30. / max(45, len(date)) * 100
    limit = slice(-30, None)
    # utils.color_print(scale, 3)
    if today is not None:
        try:
            values.append(round(values[-1] * (1+float(today)/100.), 3))
            date.append(utils.get_local_time(int(utils.get_time_stamp())))
        except:
            pass

    if tomorrow is not None:
        try:
            values.append(round(values[-1] * (1 + float(tomorrow) / 100.), 3))
            date.append(utils.get_local_time(int(utils.get_time_stamp())+3600*24))
        except:
            pass

    moving = values[0]
    ema = [moving]

    ave5 = [values[i] for i in range(4)]
    for i in range(4, len(values)):
        ave5.append(sum(values[i-4: i+1])/5)

    ave5 = [round(i, 3) for i in ave5]

    for i in range(1, len(values)):
        moving = 0.9 * moving + 0.1 * values[i]
        ema.append(moving)

    offset = [0.6+10*(values[i] - ave5[i]) / ave5[i] for i in range(len(values))]

    offset = [round(i, 2) for i in offset]

    ema = [round(i, 3) for i in ema]

    def level(v, a, e, v_, a_):
        if a < e:
            if v < a:
                return u'0-1'
            elif v >= a and v > e:  # 上超均线
                return u'(建仓) 4-5成仓, (加仓) 6成仓, (减仓) 5'
            else:
                return u'(加仓) 3成仓, (减仓) 2'
        else:
            if v < e:
                return u'不超过5'
            elif v >= e and v < a:
                return u'6-7'
            else:
                if v_ < a_ and v >= a:  # 上穿均线
                    return u'9'
                else:
                    return u'9-7(获利后逐渐高抛)'

    relu = lambda x: max(0, x)

    def advanced_level(values, ave5, ema):
        l = len(values)
        ans = [0. for i in range(l)]
        buyin = [0. for i in range(l)]
        bad = False
        for i in range(1, l):
            v, a, e = values[i], ave5[i], ema[i]
            v_, a_ = values[i-1], ave5[i-1]

            if (v - v_) / v_ * 100. > 2.8 and (v > a or v > e):
                bad = False

            if a < e:
                if v < a:
                    if ans[i-1] <= 0.2:
                        ans[i] = ans[i-1]
                    else:
                        ans[i] = 0.
                else:
                    max_30 = max(values[relu(i-30): i])
                    rate_max_30 = (v - max_30) / max_30 * 100.

                    if rate_max_30 < -42:
                        ans[i] = max(ans[i-1], 0.3)
                    elif rate_max_30 < -35:
                        ans[i] = max(ans[i-1], 0.25)
                    elif rate_max_30 < -28:
                        ans[i] = max(ans[i-1], 0.2)
                    elif rate_max_30 < -21:
                        ans[i] = max(ans[i-1], 0.15)
                    elif rate_max_30 < -14:
                        ans[i] = max(ans[i-1], 0.1)
                    elif rate_max_30 < -7:
                        ans[i] = max(ans[i-1], 0.05)
                    else:
                        ans[i] = max(ans[i-1], 0.)
                    if ans[i] > ans[i-1]:
                        buyin[i] = ans[i] - ans[i-1]

            else:

                if (v - v_) / v_ * 100. < -3 and v < a:  # 一天跌3%
                    ans[i] = min(ans[i - 1], 0.3)
                    bad = True
                elif (v - v_) / v_ * 100. < -2.8 and v < a:  # 对于成长性不用这个 对于医药等蓝筹或广发等稳定型的才用
                    ans[i] = min(ans[i - 1], 0.4)
                    bad = True
                else:
                    ema_rate = (ema[i] - ema[i-1]) / ema[i-1] * 100
                    if -0.25 < ema_rate < 0.25:
                        if ans[i-1] <= 0.3:
                            ans[i] = 0.3
                        else:
                            ans[i] = ans[i-1]  # ema平坦不能贸然操作

                    else:

                        if v < e:
                            ans[i] = 0.5
                        elif v >= e and v < a:
                            ans[i] = .65
                        else:
                            if v_ < a_ and v >= a:  # 上穿均线
                                min_30 = min(values[relu(i - 30): i])
                                rate_min_30 = (v - min_30) / min_30 * 100.
                                if ans[i-1] >= 0.65:
                                    ans[i] = ans[i-1]
                                else:
                                    if rate_min_30 > 15:
                                        ans[i] = 0.75
                                    elif rate_min_30 > 7:
                                        ans[i] = 0.8
                                    else:
                                        ans[i] = 0.83
                            else:
                                if ans[i-1] <= 0.3:
                                    ans[i] = max(0.3, ans[i-1] * 2)
                                elif ans[i-1] <= 0.6:
                                    ans[i] = 0.65
                                else:
                                    ans[i] = ans[i-1]
                                    if ans[i] > 0.65:
                                        min_30 = min(values[relu(i - 30): i])
                                        rate_min_30 = (v - min_30) / min_30 * 100.
                                        if rate_min_30 > 50:
                                            ans[i] = min(ans[i - 1], 0.6)
                                        elif rate_min_30 > 35:
                                            ans[i] = min(ans[i - 1], 0.65)
                                        elif rate_min_30 > 24:
                                            ans[i] = min(ans[i - 1], 0.7)
                                        elif rate_min_30 > 15:
                                            ans[i] = min(ans[i - 1], 0.75)
                                        elif rate_min_30 > 7:
                                            ans[i] = min(ans[i - 1], 0.8)


            s = sum(buyin[relu(i-7): i])
            if s > 0:
                ans[i] = max(ans[i], s)  # 7天内有买入不减仓

            if bad:
                if ans[i] > 0.3 and ans[i - 1] < 0.3 and a > e:
                    ans[i] = 0.3
                else:
                    ans[i] = min(ans[i], ans[i-1])  # 走坏不加仓
            # else:
            #     if (v - v_) / v_ < -0.03:
            #         return u'5'
            #     if v < e:
            #         return u'不超过5'
            #     elif v >= e and v < a:
            #         return u'6-7'
            #     else:
            #         if v_ < a_ and v >= a:  # 上穿均线
            #             return u'9'
            #         else:
            #             return u'9-7(获利后逐渐高抛)'

        return ans

    op = ['?', '?', u'保持不动', '']

    op[0] = level(values[-2], ave5[-2], ema[-2], values[-3], ave5[-3])
    op[1] = level(values[-1], ave5[-1], ema[-1], values[-2], ave5[-2])

    offset_s = sorted(offset[-121:-1])
    cut = int(len(offset_s)*0.05)

    if '1' in op[1] or '2' in op[1] or '3' in op[1] or '4' in op[1]:
        high = offset_s[-cut]
        low = offset_s[cut]

    elif '6' in op[1] or '7' in op[1] or '8' in op[1] or '9' in op[1]:
        high = offset_s[-cut]
        low = offset_s[cut]
    else:
        high = offset_s[-cut]
        low = offset_s[cut]

    if offset[-1] > high:
        op[2] = u'局部高点'
    elif offset[-1] < low:
        op[2] = u'局部低点'

    rate = (values[-1] - values[-2]) / values[-2] * 100
    if rate > 3:
        op[2] = u'买入'
    elif rate < -3:
        op[2] = u'卖出'

    max_7 = max(values[-8: -1])
    rate_max_7 = (values[-1] - max_7) / max_7 * 100

    if rate_max_7 < -10:
        op[2] = u'低吸'

    ema_rate = (ema[-1] - ema[-2]) / ema[-2] * 100
    ema_rate_1 = (ema[-2] - ema[-3]) / ema[-3] * 100
    if -0.25 < ema_rate < 0.25:
        if '9' in op[1]:
            op[1] = u'不宜贸然操作 6-7'
    if -0.25 < ema_rate_1 < 0.25:
        if '9' in op[0]:
            op[0] = u'不宜贸然操作 6-7'

    op[3] = '(%s %s)' % (low, high)
    def get_level(l):
        if '10' in l:
            return 1.
        if '0' in l:
            return 0
        if '1' in l:
            return .6

        if '2' in l:
            return .2

        if '3' in l:
            return .3  # 居然越高越好

        if '4' in l:  # 1-3
            return .4  # 居然越高越好
        if '5' in l:
            return .5
        if '6' in l:
            return .6
        if '7' in l:
            return .7  # # 居然越高越好
        if '8' in l:
            return .8  # 7-10 牛市时9很有作用
        if '9' in l:
            return .9  # 7-10 牛市时9很有作用
    #
    #
    #
    # levels = [get_level(level(values[i], ave5[i], ema[i], values[i-1], ave5[i-1])) for i in range(1, len(values))]
    # levels = [0.] + levels

    levels = advanced_level(values, ave5, ema)
    levels = [round(i, 2) for i in levels]
    # l_now = 0
    # balance = 1000000.
    # share = 0.
    # for i in range(1, len(values)):
    #     li = levels[i]
    #     vi = values[i]
    #     if li > l_now:
    #         money = balance * (li - l_now) / (10-l_now)
    #         share += money / vi
    #         balance -= money
    #         l_now = li
    #     elif li < l_now:
    #         dshare = share * (l_now - li) / l_now
    #         share -= dshare
    #         balance += dshare * vi
    #         l_now = li



    # op[3] = u'(%.2f = %.2f + %.2f 无操作: %.2f)' % (balance + share*values[-1], balance, share*values[-1], 1000000. / values[0] * values[-1])

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
        label_color=['#3C505E', '#D48265', '#6CA5F8', '#F8CF47', '#9DC764'],
    )

    line.add(
        "EMA",
        date,
        ema,
        yaxis_min='dataMin',
        is_label_show=False,
        yaxis_type='value',
        is_datazoom_extra_show=False,
        datazoom_extra_range=[90, 100],
        datazoom_extra_type='both',
        is_smooth=True,
        mark_point=["max", "min"],
        is_datazoom_show=True,
        datazoom_type='both',
        datazoom_range=[100-scale, 100],
        line_width=2,
        label_text_size=15,
        label_emphasis_textsize=15,
        is_random=False,
        label_color=['#3C505E', '#D48265', '#6CA5F8', '#F8CF47', '#9DC764'],
    )

    line.add(
        "5日均线",
        date,
        ave5,
        yaxis_min='dataMin',
        is_label_show=False,
        yaxis_type='value',
        is_datazoom_extra_show=False,
        datazoom_extra_range=[90, 100],
        datazoom_extra_type='both',
        is_smooth=True,
        mark_point=["max", "min"],
        is_datazoom_show=True,
        datazoom_type='both',
        datazoom_range=[100-scale, 100],
        line_width=2,
        label_text_size=15,
        label_emphasis_textsize=15,
        is_random=False,
        label_color=['#3C505E', '#D48265', '#6CA5F8', '#F8CF47', '#9DC764'],
    )

    # line.add(
    #     "乖离率",
    #     date,
    #     offset,
    #     yaxis_min='dataMin',
    #     is_label_show=False,
    #     yaxis_type='value',
    #     is_datazoom_extra_show=False,
    #     datazoom_extra_range=[90, 100],
    #     datazoom_extra_type='both',
    #     is_smooth=True,
    #     mark_point=["max", "min"],
    #     is_datazoom_show=True,
    #     datazoom_type='both',
    #     datazoom_range=[100-scale, 100],
    #     line_width=2,
    #     label_text_size=15,
    #     label_emphasis_textsize=15,
    #     is_random=False,
    #     label_color=['#3C505E', '#D48265', '#6CA5F8', '#9DC764', '#F8CF47'],
    # )
    # line.add(
    #     "仓位",
    #     date,
    #     levels,
    #     yaxis_min='dataMin',
    #     is_label_show=False,
    #     yaxis_type='value',
    #     is_datazoom_extra_show=False,
    #     datazoom_extra_range=[90, 100],
    #     datazoom_extra_type='both',
    #     is_smooth=True,
    #     mark_point=["max", "min"],
    #     is_datazoom_show=True,
    #     datazoom_type='both',
    #     datazoom_range=[100-scale, 100],
    #     line_width=2,
    #     label_text_size=15,
    #     label_emphasis_textsize=15,
    #     yaxis_index=1,
    #     is_add_yaxis=True,
    #     is_random=False,
    #     label_color=['#3C505E', '#D48265', '#6CA5F8', '#9DC764', '#F8CF47'],
    # )
    cangwei = Line(title, width=1000, height=500)
    cangwei.add(
        "仓位",
        date,
        levels,
        yaxis_min=0,
        yaxis_max=1.,
        is_label_show=False,
        yaxis_type='value',
        is_datazoom_extra_show=False,
        datazoom_extra_range=[90, 100],
        datazoom_extra_type='both',
        is_smooth=True,
        mark_point=["max", "min"],
        is_datazoom_show=True,
        datazoom_type='both',
        datazoom_range=[100-scale, 100],
        line_width=2,
        label_text_size=15,
        label_emphasis_textsize=15,
        yaxis_index=1,
        is_add_yaxis=True,
        is_random=False,
        label_color=['#F8CF47'],
    )

    overlap = Overlap(title, width=1000, height=500)
    overlap.add(line)
    overlap.add(cangwei, is_add_yaxis=True, yaxis_index=1)

    return overlap, op