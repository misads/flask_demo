# coding=utf-8
from app.models import db, Users
from flask import session
from app.models import db, Fund, History, Favourite
import requests
from .misc_utils import *
import json


def authed():
    return bool(session.get('id', False))


def get_fund_list():
    f_q = Fund.query.all()
    return [i.id for i in f_q]


def get_overall(code='1.000001'):

    t = get_time_stamp() + '289'
    url = 'http://push2.eastmoney.com/api/qt/stock/trends2/get?secid=%s&fields1=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13&fields2=f51,f52,f53,f54,f55,f56,f57,f58&' % code + \
          'ut=e1e6871893c6386c5ff6967026016627&iscr=0&cb=cb_%s_25356354&isqhquote=&cb_%s_25356354=cb_%s_25356354'% (t, t, t)

    try:
        response = requests.get(url)
    except:
        return [], [], [], []

    if response.status_code == 200:
        text = response.text
        pattern = '"name":"(.*?)"'
        name = re.findall(pattern, text)[0]

        pattern = '"preClose":(.*?),'
        pre = re.findall(pattern, text)[0]
        pattern = '"trends":\[(.*?)\]'
        worth_list = re.findall(pattern, text)[0]
        worth_list = json.loads('[%s]' % worth_list)
        today = worth_list[-1].split(',')[2]
        trend = round(float(today) - float(pre), 2)
        rate = round((float(today)-float(pre))/float(pre) * 100, 2)
        return name, today, trend, rate
    else:
        return [], [], [], []


def get_k_line(code):
    url = 'http://fund.eastmoney.com/pingzhongdata/%s.js' % code

    try:
        response = requests.get(url)
    except:
        return [], [], []

    if response.status_code == 200:
        text = response.text
        pattern = 'fS_name = "(.*?)"'
        name = re.findall(pattern, text)[0]

        pattern = 'var Data_netWorthTrend = \[(.*?)\]'
        worth_list = re.findall(pattern, text)[0]

        worth_list = json.loads('[%s]' % worth_list)

        worth = dict()
        worth_values = []
        date_list = []
        k_values = []
        rates = []
        # for i in range(len(worth_list)-1, -1, -1):
        for i in range(len(worth_list)):

            x = worth_list[i]
            worth[get_local_time(int(x['x']) // 1000)] = x['y']
            value = x['y']

            worth_values.append(value)
            date_list.append(get_local_time(int(x['x']) // 1000))
            if i == 0:
                start = value
            else:
                start = worth_list[i - 1]['y']

            rates.append(round((value - start) / start * 100, 2))
            line = [start, value, min(start, value), max(start, value)]
            k_values.append(line)

        return date_list, worth_values, rates

    else:
        return [], [], []


def updata_value():
    has = set()
    fund_list = get_fund_list()
    for i in range(1, 42):
        print(i)
        t = get_time_stamp() + '289'
        url = 'http://fund.eastmoney.com/Data/Fund_JJJZ_Data.aspx?t=1&lx=1&letter=&gsid=&text=&sort=zdf,desc&page=%d,200&dt=%s&atfc=&onlySale=0' % (
            i, t)
        response = requests.get(url)
        text = response.text
        pattern = 'datas:(.*?]])'
        data = re.findall(pattern, text)[0]
        data = json.loads(data)

        for k in data:
            index = k[0]
            name = k[1]
            today = k[3]
            yesterday = k[5]
            rate = k[8]

            if index in fund_list and index not in has:
                f_q = Fund.query.filter_by(id=index).first()
                if f_q:
                    f_q.value_today = today
                    f_q.value_yesterday = yesterday
                    f_q.rate = rate

                has.add(index)

                # csv_writer.writerow(line)

        time.sleep(.1)

    db.session.commit()


def get_chance():
    chance = {}
    uid = session['id']
    d_q = History.query.join(Fund).join(Favourite).filter(Favourite.uid == uid, History.key.in_(['max_7', 'max_30'])).all()
    for i in d_q:
        rate = float(i.value)

        if rate < -2:
            if i.fid not in chance:
                chance[i.fid] = 0.

            chance[i.fid] = min(rate, chance[i.fid])

    return chance


def get_top():
    top = []
    uid = session['id']
    d_q = History.query.join(Fund).join(Favourite).filter(Favourite.uid == uid, History.key.in_(['max_7', 'max_30'])).all()
    for i in d_q:
        rate = float(i.value)

        if rate > -0.3:
            if i.fid not in top:
                top.append(i.fid)
        else:
            if i.fid in top:
                top.remove(i.fid)

    return top