(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('南区', {"type":"FeatureCollection","features":[{"id":"810004","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@JBJAHBLCPAJCJDPCLOJM@IBAFBBA@CE@AAE@AAFIBQBADAFECCBEA@GFCAYBABIRC@QEGEACBEHMACECQACFE`A@GCK@AFFHADMJBBF@BB@FBHCFI@KLEBCAGWAAQDGCGJQHOPOHS`KLN@LDJAHETUDIJ@HDxCZD"],["@@ACCBFB"],["@@D@@ACCCB@CC@CFBDJA"],["@@BA@AG@@B@BF@"],["@@DABAGCADADBBDA"],["@@BAEBD@"]],"encodeOffsets":[[[116946,22787]],[[116886,22776]],[[116934,22767]],[[117006,22758]],[[116932,22748]],[[116970,22738]]]},"properties":{"cp":[114.160023,22.245811],"name":"南区","childNum":6}}],"UTF8Encoding":true});}));