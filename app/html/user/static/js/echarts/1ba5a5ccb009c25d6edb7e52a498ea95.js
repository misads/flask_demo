(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('清河县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"130534","properties":{"name":"清河县","cp":[115.667208,37.039991],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@IBI@I@E@C@ABOEIEAACACAAA@@GCMGA@CAMCWF@@E@@DADA@A@A@AAAAAACBC@CCACEAEAA@CAIBC@M@KDCBKDCBGBCBCBC@KFIDAHCNBD@DADCBC@A@EBG@KF@@AF@@CR@D@B@BBH@BCBC@AA@@C@AEG@@@EBAGAEI@EFI@C@ADAFAACNBH@DBJ@@@DC@@D@@GBA@@BDPB@D@@@@FFDLPFL@@@BBB@@HNDFBDVRBB@J@FAFADAF@D@@FJJH@@DDLJBB@@FBHDB@HFBBXBF@BBJBFAXAB@BAJAB@JCB@H@J@B@JBHBFBDBRJPLDDDP@DCL@@BL@@@HTHTFDBD@LBPBHBF@PDNLCNAFGNLHB@VDHBLFLFFDDBHBDMDWBC@A@G@GDKBEBIBAFMB@LIFCBADCXGHCFAHCDA@@@@FAB@DCB@@@@@HCFAFCLMHGBC@@FMBEB@FM@@@ABEDEJUCAEACCCACCCCA@ECGCCA@AA@@AAAAA@A@C@AAAACACAA@AA@AAA@A@@@CA@BA@C@A@A@A@@@@@AA@@@ABABG@A@A@@@AAA@@A@A@A@A@@A@A@ABABA@@A@@A@A@AA@AACAC@CAAAA@AAAA@@A@A@E@ABA@@@A@@A@@AAAAAAAAAA@AAAAAA@ECAACC@@@AA@@ABE@@@AB@@AFAB@FADA@@BABA@AA@C@CA@@@@@C@A@@@A@A@AB@@@@A@A@@@@@@@AB@B@B@@@@@@@BB@@BBBDBB@@@@DA@@BABA@ABC@A@@@ACECIEGAEAAACAAAAAAAAEACAAA@@A@@A@@AEA@AC@@A@@@A@@BA@@@@BABA@@@@@ABAAC@A@AA@@@@@AAA@@@@@A@A@@BA@A@@B@BA@AB@@@@AB@@AA@@@@AA@AAA@@AIFA@EBE@C@ABQH@BQJMD"],"encodeOffsets":[[118501,37830]]}}],"UTF8Encoding":true});}));