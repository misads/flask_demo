# encoding=utf-8
import math

from pyecharts import Graph
from flask import current_app as app, Blueprint, jsonify, render_template, abort, send_file, session, request, redirect

from app import utils
import random
import pickle

WEEK_DAYS = ['一', '二', '三', '四', '五', '六', '日']
WEATHERS = ['晴', '多云', '阴', '小雨', '中雨', '大雨', '雷阵雨']

interface = Blueprint('interface', __name__)


def decode_weather(code):
    if '/' in code:
        s = code.split('/')
        return '%s转%s' % (WEATHERS[int(s[0])], WEATHERS[int(s[1])])
    else:
        return WEATHERS[int(code)]


# def analyze(data):
#     operating_modes = {
#         'made_ice': {
#             'refrigerator_energy': ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '23:00']
#
#         }
#
#
#
#
#     }
#     refrigerator_energy = data['refrigerator_energy']
#     glycol_pump_energy = data['glycol_pump_energy']
#     time_stamp = data['time_stamp']


# data是i时刻的数据dataset[i]，data_one_hour_age是一小时前的数据
# 返回一个tuple，即(当前的工况，错误结点的集合)
# 需求文档：http://www.ynlab.top/projects/ebuild/docs/#/demand
# 接口文档：http://www.ynlab.top/projects/ebuild/docs/#/interface
def analyse_operating_mode(data, data_one_hour_ago=None):
    time_stamp = data['time_stamp']

    refrigerator_energy = data['refrigerator_energy']
    glycol_pump_energy = data['glycol_pump_energy']
    cooling_pump_energy = data['cooling_pump_energy']
    ice_bath_inlet_temp = data['ice_bath_inlet_temp']

    a, b, c, d = refrigerator_energy > 800, glycol_pump_energy > 190, cooling_pump_energy > 165, ice_bath_inlet_temp < 0
    if a and b and c and d:
        return '冰槽蓄冰工况', set()

    if a or b or c or d:
        error_nodes = set()
        dict = {'refrigerator_energy': a, 'glycol_pump_energy': b, 'cooling_pump_energy': c, 'ice_bath_inlet_temp': d}
        for d in dict:
            if not dict[d]:
                error_nodes.add(d)
        if len(error_nodes) > 1:
            return '未知工况', set()

        # 冰槽入口温度的延迟
        return '存在异常结点', error_nodes

    return '未知工况', set()


f = open('app/dataset_py2.pkl', 'rb')
dataset = pickle.load(f)
f.close()
ii = 0


@interface.route('/change_style')
def change_style():
    session['style'] = (session['style'] + 1) % 3
    return redirect('/g')


@interface.route('/reset')
def reset():
    session['i'] = 0
    return redirect('/g')


@interface.route('/next_hour')
def next_hour():
    session['i'] = (session['i'] + 1) % (24 * 58)
    return redirect('/g')


@interface.route('/last_hour')
def last_hour():
    session['i'] -= 1
    if session['i'] < 0:
        session['i'] = 24 * 58 - 1
    return redirect('/g')


@interface.route('/next_day')
def next_day():
    session['i'] = (session['i'] + 24) % (24 * 58)
    session['i'] = session['i'] // 24 * 24
    return redirect('/g')


@interface.route('/last_day')
def last_day():
    session['i'] -= 24
    if session['i'] < 0:
        session['i'] = 24 * 57
    session['i'] = session['i'] // 24 * 24
    return redirect('/g')


locations = [
    (62, 0),
    (195, 400),
    (313, 311),
    (237, 127),
    (168, 366),
    (470, 261),  # 5
    (200, 145),
    (342, 422),
    (191, 187),
    (437, 68),
    (270, 77),  # 10
    (122, 2),
    (418, 105),
    (179, 295),
    (97, 422),
    (75, 252),  # 15
    (378, 194),
    (359, 383),
    (242, 268),
    (510, 153),
    (288, 3),  # 20
    (489, 349),
    (488, 390),
    (39, 274),
    (426, 239),
    (253, 243),  # 25
    (37, 106),
    (170, 118),
    (97, 188),
]

show_styles = ['none', 'force', 'circular']


def get_graph():  # circular force none
    show_style = show_styles[session['style']]
    relation = utils.load_yml('app/relation_north.yml')

    # len(dataset)  # 16704
    # 几点的
    day = 1
    hour = 8
    ii = session['i']
    data = dataset[12 * 24 * (day - 1) + 12 * ii]

    time = data['time_stamp'] + ' 星期%s' % WEEK_DAYS[int(data['week_day'])]

    # analyze(data)

    def get_value(node):
        if show_style == 'circular':
            return 0

        if node == 'outdoor_env_weather':
            return decode_weather(data[node])
        return data[node] if node in data and str(data[node]) != 'nan' else 'Nan'

    op_mode, error_nodes = analyse_operating_mode(data)

    def get_category(node):
        category = relation[node]['category']
        if node in error_nodes:
            return 4

        if 'active' in relation[node] and (str(data[node]) == 'nan' or float(data[node]) < relation[node]['active']):
            return 3

        return category

    def get_size(node):
        if 'importance' in relation[node]:
            return relation[node]['importance']
        else:
            return 15

    nodes_count = len(relation)
    nodes_a_line = int(math.sqrt(nodes_count)) + 1

    nodes = [{"name": relation[node]['label'], "symbolSize": get_size(node),  # "draggable": "True",
              "value": get_value(node),
              "category": get_category(node)
              } for i, node in enumerate(relation)]

    if show_style == 'none':
        for i, node in enumerate(nodes):
            node['x'] = (i % nodes_a_line) * 400
            node['y'] = (i // nodes_a_line) * 400

    elif show_style == 'force':
        for i, node in enumerate(nodes):
            loc = locations[i]
            node['x'] = loc[0] * 1.5
            node['y'] = loc[1] * 1.5

    categories = [{'name': '温度'},
                  {'name': '流量'},
                  {'name': '能耗'},
                  {'name': '未开启'},
                  {'name': '异常'}]

    links = []

    # 计算每个结点的度 用于规划每条线的长度
    degree = {relation[i]['label']: 0 for i in relation}

    for i in relation:
        cur = relation[i]['label']
        parents = relation[i]['parents']
        for parent in parents:
            degree[cur] += 1
            degree[relation[parent]['label']] += 1

    for i in relation:
        cur = relation[i]['label']
        parents = relation[i]['parents']
        for parent in parents:
            d = min(degree[cur], degree[relation[parent]['label']])  # 取一条边连接的两个结点中较小的度
            length = 1000 // d  # - random.randint(-100, 100)
            links.append({"source": relation[parent]['label'], "target": cur, "value": length})

    label_color = ['#334553', '#B34038', '#E57F3A']
    label_color = ['#5cb85c', '#337ab7', '#f0ad4e', '#dc3545']  # success warning danger
    label_color = ['#5cb85c', '#337ab7', '#f0ad4e', '#bbbbbb', '#dc3545']
    line_color = '#353A3F'  # 黑
    # line_color = '#555A5F'  # 黑
    # for i in range(len(nodes)-1):
    #         links.append({"source": nodes[i].get('name'), "target": nodes[i+1].get('name')})

    if not time:
        time = utils.get_time_str(utils.get_time_stamp())
    graph = Graph("智能建筑 | 实时监控", subtitle="%s\n当前工况：%s" % (time, op_mode),
                  width=920, height=700, subtitle_text_size=14)
    # def xxx(g: Chart):
    #     g.get_options()

    # nodes = [{"name": "结点%d" % i, "symbolSize": 15, "draggable": "True", "category": i % 4, "value":10} for i in range(30)]
    # [utils.color_print(i['value'], 3) for i in nodes]
    # links = []
    # for i in nodes:
    #     for j in nodes:
    #         links.append({"source": i.get('name'), "target": j.get('name'), "value": 20})

    # graph.add(
    #     "",
    #     nodes,
    #     links,
    #     categories,
    #     is_label_show=True,
    #     graph_repulsion=8000,
    #     graph_layout="circular",
    #     line_curve=0.2,
    #     label_text_color=None,
    # )


    if show_style == 'circular':
        graph.add("楼A", nodes, links, categories,
                  graph_layout="circular",
                  graph_repulsion=0,
                  is_label_show=True,
                  is_legend_show=True,
                  label_pos="right",
                  graph_edge_symbol=['', 'arrow'],
                  graph_edge_symbolsize=7,
                  label_text_color=None,
                  line_color=line_color,
                  line_opacity=0.65,
                  label_text_size=13,
                  line_curve=0.2,
                  label_emphasis_textsize=13,
                  is_random=False,
                  label_color=label_color,
                  label_formatter='{b}')

    if show_style == 'force':
        graph.add("楼A", nodes, links, categories,
                  graph_layout="force",
                  is_label_show=True,
                  graph_edge_length=[50, 200],
                  graph_repulsion=3,
                  graph_gravity=0.001,
                  is_legend_show=True,
                  label_pos="right",
                  line_curve=0.2,
                  graph_edge_symbol=['', 'arrow'],
                  graph_edge_symbolsize=7,
                  label_text_color=None,
                  line_color=line_color,
                  line_opacity=0.75,
                  label_text_size=13,
                  label_emphasis_textsize=13,
                  is_random=False,
                  label_color=label_color,
                  label_formatter='{b}\n{c}')

    if show_style == 'none':
        graph.add("楼A", nodes, links, categories,
                  graph_layout="none",
                  is_label_show=True,
                  # graph_edge_length=[50, 300],
                  # graph_repulsion=3,
                  is_legend_show=True,
                  label_pos="bottom",
                  line_curve=0.1,
                  graph_edge_symbol=['', 'arrow'],
                  graph_edge_symbolsize=7,
                  label_text_color=None,
                  line_color=line_color,
                  line_opacity=0.65,
                  label_text_size=13,
                  label_emphasis_textsize=13,
                  is_random=False,
                  label_color=label_color,
                  label_formatter='{b}\n{c}')
    return graph
