(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('乐平市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"360281","properties":{"name":"乐平市","cp":[117.151796,28.97844],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AACACAAA@@AA@A@@EC@@@A@@@A@C@@@AAA@C@@@AA@A@CBAA@@ABA@@@AB@@@BAB@@EA@A@@AA@AAACACCA@@@AB@@AAC@A@A@A@A@@@AB@@AB@@A@@B@B@@ABA@@@A@BB@@@@ABA@@B@@@BB@@BB@@B@@@BA@@B@@BB@B@@@@ABB@BB@@@@@B@@A@@@AB@BA@@@@@B@@@B@@@@@@BA@A@@BA@@D@BA@A@A@A@C@@AAA@BA@@@BB@B@@BB@@BAB@@@B@B@@@@B@@@@@BA@AB@@AAAAAAA@@@@@@B@B@A@@@A@A@@@@@@@@CB@@C@@BAB@B@B@BA@@@A@A@A@@@A@@@@A@@AA@@@@A@@@@@@@A@EA@@AB@@AAAAA@AA@@@@@AA@@@@@@@@@AB@@@AAA@@@AAA@@@@ABAAA@@@@@ABA@AB@@@B@B@@@BA@ABA@A@EB@@@A@ACD@@@A@ABA@@@@AA@@@A@@@@@@AA@@@A@@AB@@@@A@@@@@@@C@@@@@A@A@A@@@@BABADAB@DA@ABCD@@AB@@CAA@AB@B@B@B@B@@B@B@B@B@B@@@@@@@ABAB@B@@B@@B@@@B@BAAA@AA@@BA@@@AA@@AA@@@@BA@A@@B@@@BBBABB@@@@@@@@@@@B@@B@@@@@@@@@D@@@B@B@@BBB@@@@@@F@@A@@B@B@BA@A@C@@@@BA@AB@@@AA@@B@@@@@@@@@@A@BBA@@@@@A@A@@@@B@@AB@@AB@BA@A@ABAB@BA@@@@A@@A@@@A@@A@@AA@AA@@@@A@@@@@@@@AC@@@A@AA@@@@@@@@BA@@@AA@@@@AB@@A@@@BB@@@@BA@@@@@@@B@@B@@@@@@@@@@@A@@@A@@@@@@B@@@B@@@D@@@BA@@B@@@@A@@A@@@@@A@@ABA@CBAB@@@B@@@B@@@@BA@@B@@@@@@@AB@@@@@B@@BABBA@@@@BA@@@A@@@A@@@@@A@@AA@@@A@AA@A@@A@@B@@@B@@B@@BB@BBB@@B@@@@@@B@D@@B@@@@@F@@BB@BAB@B@D@B@BA@@AA@C@@@A@@@BA@@@@BA@A@@@@A@C@@@AB@@@@AA@@B@@A@@@@@@AAA@@@A@@@@C@@A@@CB@@@B@A@AAAAB@@B@@B@D@@@@@@@@@A@@@A@@A@@A@A@A@@@@@AAAA@A@@@@B@@@@@@@A@@@AA@A@@@@@@@B@@@B@@@@@@@@@@@BA@@C@@@A@@@CA@@A@AA@@@A@@AAB@@A@A@@@AB@@A@@@@@@@@BB@@BB@@A@@@@BA@AB@@@@B@B@B@@A@CB@@B@@B@@BBB@@@@@@BBB@@@@@BA@ABBB@B@@A@BBDB@@ABABCB@B@@ABA@A@@B@@AB@@A@@@AAA@AAAA@@A@@@ABCBA@A@E@CA@@C@@BA@@B@@@@@B@BAB@@A@@@@@@AB@@@@@AA@@@@@@AB@BAA@B@@@@AAC@@@@AA@@@@AB@A@@A@@@@A@@@@@@BA@@@AB@@AB@@@B@@AB@@@B@@@@@B@@@@@@@D@@@BAAAB@B@@D@@BABA@@@@@@@@@A@@AA@@@AB@@A@A@AA@@@@CB@@CB@@A@@B@@@@C@AB@@@AAAA@AAA@A@@BCB@@@@A@@@A@@@@@@A@AB@@@@@@@@@FC@A@@@@AACB@AA@ABA@@BAD@@AA@@@@@@@@B@@@@A@AB@@AA@@B@@@@A@AB@@AA@@B@@@BA@@@@@@@@A@AB@@@@AAB@AA@@@@BAA@AA@@@BC@@B@@AC@@BA@@@@@A@@A@@B@AA@AA@@@@A@@B@AA@A@@@@B@@BB@@AD@@@@BBB@@B@@@@@@@B@@E@@DABAB@@@B@BA@@@@@CBBBB@@BA@@@@@@@@A@@@@@BA@@@@@@@@@@@@B@@AB@BA@@B@A@@@AB@@A@@AA@@@@@B@@@@@B@@A@@@@A@@@A@@@@@B@B@@@@A@@@@A@@@@@B@@@@@B@@@@@@A@@@BBB@@@ABB@A@@@@@A@@BB@AB@@@@B@@@B@@@A@@@AB@B@@@@@@A@@BA@B@@@@@AB@@@@B@@A@@B@@@@@@B@@AB@@AB@@B@@@B@@@ABABA@@B@@AB@BA@ABCB@@@@C@@@@@@A@@A@@@B@@AA@@@@@@@@@@@B@@@AAA@@B@BAB@@A@AA@@@BB@@BA@@B@D@@@B@@A@C@A@@@@B@B@C@@A@A@@@@@@@AA@BAD@B@@A@@AC@@BA@@@@@@@B@@@@@D@@@@@A@A@@BB@@@@@B@@@BA@A@@BB@@@@B@@@@@@@@@@@@BA@A@@B@@@@@@BB@@@@@@@B@@@@@@@BAB@@@@BCA@AAA@@@A@@B@BBBBB@@B@@B@@@B@D@@@@A@@@@A@A@@@@A@@@A@ABA@A@AB@@@B@@@@B@@BB@B@@@@B@@@@CAC@@@A@A@C@C@@@@BAB@B@D@@A@@@@BB@@@B@@B@@@@A@@@@@@B@B@@B@@@@A@@B@@B@@@@ABA@@@@@@@@@@@A@@@@@@@@B@@@@AA@@@@A@@B@@A@@A@@AA@@@@AAA@A@@A@@BA@@AA@@@A@@D@@@@@AA@@@@CB@@A@@@@@@@A@@BA@AB@@BB@@@@@@ABAB@BA@CAC@@@@B@D@B@BBF@D@BBB@@@@@BAB@@ABA@A@@@A@@A@AAEBAA@@@@A@@A@@@A@CD@@ABEB@@@@AB@BBB@BBB@BEBC@@BBB@B@D@@@B@D@B@@@B@@AB@B@B@@@@A@AB@@A@@B@BABA@@BA@@B@@@@@B@A@@@B@@B@@B@@@B@@DDDDDBB@@@@@BB@@B@@@@@@@@BB@BB@B@@@@B@@@B@@B@@A@AB@@B@@@@BA@@@@AA@@@@BB@A@B@B@@B@@B@@@B@@@@@AB@@BB@@B@@B@@@BBD@BAB@BB@BF@@BB@BB@@B@@@@BBB@@@AB@@@B@@A@@@DB@@BDB@BB@B@B@@@B@@@@@BA@@B@@@@B@@@B@@B@@@@B@@@B@@@@@@@@@BA@@B@@B@@AB@B@@B@B@@@@AB@BA@@B@@@@@@@@A@@AA@@@@DABABB@@@@@B@B@@B@@@B@@@BBB@@@BB@@BB@@@@BBA@@@ABA@@BB@@@@@@@B@B@@@@@DABB@@@A@@@@B@@B@@@B@@A@@A@BA@@B@@BB@ABB@@@@B@@@@@@B@B@@ABB@@@@@B@@BBB@@@@C@BB@@@BDB@@@@@@@@A@@@A@@@@A@@AB@@@@A@@BBBBD@@A@@BCB@@@B@@@@BB@B@@B@@B@@@A@@@@B@@B@@@@@BBB@B@@BBBBB@@BB@@B@@@@A@@@@B@B@@B@@B@@@@A@@@@AA@@@C@@@@@@B@BBB@B@@@@B@@@A@@BBB@@A@A@@B@@A@@@@@@B@@@@D@@B@@A@AB@@@@BD@@BB@@@@B@@@@BBB@@@@@@@@@B@@@@@B@BA@@@B@@@@B@B@@B@@@@@@B@B@BB@@@B@@@BAB@@A@@BB@AB@@@AA@@BA@@B@@B@@@B@@B@@@@B@@BAD@@@@@@BB@@@@ABA@A@BB@@BB@@@B@@@@@BA@A@@@@BBB@BBDBBBB@@@DAB@@@B@BB@@@@AB@@@@@BB@BAAD@BA@@BAB@DAB@B@@BB@B@@AD@@@@@@AB@AA@ABA@@@AB@@@@A@A@A@@DA@@B@@@@AA@@@@A@AD@@AB@@A@@@BB@B@@@@DABA@@B@AB@@@BB@B@@A@B@@@B@@B@@B@@@BB@B@@B@AAB@@@@@B@B@@@B@@A@@B@@@B@BB@@@@@@A@@B@@ABA@@BB@@@@@B@@@@D@@@@@@@@BB@@@B@B@B@B@B@DB@@BB@D@BBB@@@@B@@@@@@@A@BBDB@@@@B@@@B@A@BB@AD@@@@AB@B@B@@B@@BB@B@@@BA@@@@B@@@B@@A@@@@B@@@@BBBB@@@@BB@@A@@BAB@@@@A@A@@@AB@B@B@@AB@B@@AB@@@B@B@@@B@@@@A@@@@@@BA@@B@@BBB@@@@@CB@@A@@D@@@@AB@@@B@BAD@B@@@D@BAB@@BBA@@B@BBB@@BDA@@@@@@B@@B@@B@@@@@@@BBB@B@@@@@B@@BB@B@@@B@@BB@@@B@D@@@@BA@@ABBA@@B@@A@@@@B@@@@A@@B@@@@@B@BAB@@A@A@@@A@@BA@@DB@@@@@B@@@BAB@@@@B@BB@BB@@@@@B@@B@@@BBBA@@DA@@BBB@@B@@@@@B@BB@@B@BB@ADA@@B@@@@AB@@@BAB@BA@@@A@@BB@@@D@BB@B@B@@@@B@B@@CB@BAB@@@BA@ABAB@@@@ABAB@@@@BB@@B@@@BB@@@@B@@@DBB@B@@@@DA@@@BB@BB@@B@@@B@@@B@@@B@@B@B@@@@AB@@@BA@CDA@A@@BCB@@A@@B@@A@@@A@@@AAC@@@@ABA@@C@@@@@A@@B@@@@A@A@AB@@@@B@@@DBBBBBBBBB@@@@CB@BABB@AB@@AB@BA@ABA@@BA@@@@BA@@@@B@@@@@B@@BB@@@@@BAB@@B@ABB@@@B@@B@@@B@@B@@ZN@B@B@B@B@@@@@@@BA@@B@@@D@@@B@BA@@B@B@@BB@@B@@@@@BB@B@@BBB@@@DB@BBB@B@B@B@@@B@@@B@@@B@B@BCB@B@@@@BB@@@@@BB@@BBD@D@@AB@BBB@@B@@@B@@AB@B@BA@@@A@@@A@@@ADABA@@DCB@D@@A@B@@B@@@B@BAB@B@@@@@@B@@@@@B@@B@@@B@B@@AB@@@B@@@B@@@@AB@@AB@@@BB@@B@@@B@BAD@B@@@BA@@B@@@@A@@A@@@@@@A@@B@@@@@@@@B@@@@@@B@@@A@@@BB@AB@@@@@B@@@BA@@BA@A@@B@B@@@@B@@@@@@B@B@@@A@@BA@@@@BD@B@B@@@B@@@@@@@B@@@@BB@@@@AB@@BB@BB@B@@@BA@@B@B@@@@B@B@B@@@@@@B@@B@B@B@@@@BAB@B@B@@@D@@ABABBB@@@B@@B@@B@@@@BB@B@@@B@@@BA@@BAB@@@@BB@@B@@@@@@B@@BB@@@B@@B@@@@@@BB@@@@@@BB@@@@B@@@B@B@@B@@BA@@@@@ABAB@B@ABB@@@@@@B@@@B@@B@@AB@B@B@@@B@@@@ABB@@@@@B@@A@@DDBB@@BB@@@@@@@@B@@B@@@@@B@@@@@@@@A@@@BB@@@@AB@@@B@@B@@@@@@B@@BBB@B@@@B@@@@@B@@@@@B@@B@@B@@@@@@@@B@@B@@@@@BA@@@AB@@A@@@@@@AA@AAA@@@ABA@@@A@A@@A@@A@@@@@@@AB@BABABA@@B@@A@@BA@@BA@@@A@@@ABA@A@@@A@@@AA@@A@@@@@@BABA@A@AB@@@BC@ADC@ABA@@@A@A@A@A@@B@@@BA@C@ABEB@B@BBB@@@B@B@@@@BFBDBBAA@@AA@@A@@@@B@B@@ABA@@@@@@BA@BB@B@@@BBB@BAB@@B@@@@BB@B@@B@ABADC@@@AB@@@B@@@BBB@@@BBB@@DB@@BD@@@B@B@BBB@@B@BBBBBBBBD@FBB@BBFB@BD@@@BB@@B@DBBBBBBBDB@BDBB@BD@@BBBBBBB@@D@@B@B@@@DBB@@BB@@@HF@@@BD@BB@BB@@@BB@@B@B@B@D@@B@@B@@BB@B@@BBB@@B@@@@BBB@@@@@@BBB@B@@@@B@@BBB@@@BBB@@BB@@@@BBB@@BB@@B@@B@@@@B@@@BB@@@@@B@@@@B@@BB@@@DB@@@@B@BAB@@AB@@B@B@@B@@@@A@A@ABA@AB@@ABA@A@AB@@@@B@@@B@@B@B@B@@@@B@AB@@@@@D@@BBBB@@B@@@@@B@@@B@B@@D@B@B@B@B@BA@@@@@ABAAAB@@@@A@BBA@C@@@@@C@@@AAA@@@AB@@@@C@@@AB@@AB@@@B@AAB@@@BCBA@@@A@@BAB@BCB@BACCB@@AB@BA@A@AB@@@@B@@@@DB@BB@BDB@@@BBB@@@B@@@DA@@@BB@BB@@@@B@@AB@@@B@B@@BF@B@B@BBBB@@@BB@@B@@B@@AB@@AB@@A@@@AAA@@@@@@@A@@@@AA@@@@@@B@@A@@@@B@@AB@BA@@@AB@@BB@BAB@@@@C@@@A@@@@BA@@@@B@@A@A@@@AA@@A@@@A@A@@BA@AB@@@@C@A@@@@@A@ABA@A@A@@AAA@@@A@@@@A@@AAB@AA@@BA@@B@@A@@BA@AB@@@B@@B@@@AB@@A@A@@B@@@B@B@@@BA@@B@@@B@@A@@BA@@@A@@@@BAB@@@BAB@DAB@B@@@B@@@@@B@B@@@@@B@@@B@@AD@B@B@BA@@@@@A@@@A@@BABA@@BA@@BAB@@@@A@@BAB@B@@@B@B@@@B@BBBA@A@@@@B@@BB@BB@AB@@@@@BA@@B@@A@@B@@@B@@@B@DB@@@B@B@@@B@@@B@BB@BB@B@B@B@BBB@BB@@B@D@@@BA@BBABBB@B@@BBB@@@@@B@@@BBB@BAB@B@@@B@B@B@@@B@B@BADBBA@AB@@@BABCBA@@@@D@@@DD@@BBB@BB@@@BBB@@@@@BB@@@B@@@@B@@B@@@BB@@B@BB@@B@@@BB@@BB@@@@D@@@B@B@B@BA@@BBB@B@D@@BB@B@B@B@BADA@@@A@A@@@ABA@A@@@@@A@@@@@A@@@C@@@@A@A@@@@A@@@AB@@AAC@A@A@@BAAA@C@@@AAACAAA@A@AA@A@A@AA@@@@@@@A@A@@@@@A@A@AAAA@BA@@BA@@@AA@@@A@@A@@AA@@A@@@AA@@@@@AB@@@BA@@@A@AB@@AB@@@@@@AB@@@DA@AB@@ABAD@@@@AA@@A@A@@@A@AAAB@@A@CB@@@BB@@@@B@@A@@BBB@@A@@B@BA@@B@@A@@@AB@@@@@B@@AB@@BB@@A@@B@@@@@@@@BB@BB@@B@@@@B@@@@@@DD@@@AB@BB@@B@@@@@@A@A@@@A@AB@@@@A@A@@@AB@@@@@@A@@@A@@AA@@@A@@@@AB@@A@@@AA@AAAE@@AA@@@BC@@@AA@@A@@@@@@@A@A@@BA@@@A@@@@AB@@@@A@AA@@A@A@@AC@@@AA@@@@@@BA@AB@B@@@@A@@@A@@AA@@BA@@@A@@AA@@BA@@@A@A@@@@B@@@@ADBB@@@@@@A@@@@A@@A@A@@B@@@B@B@B@@@@@B@@@@@@@B@B@@A@@@AB@@@@AA@@@@A@@@@@A@@@@B@@A@@@A@@BA@@BA@@BA@@@@B@D@BA@AB@@@B@@AB@@A@A@AA@@AA@A@@A@@A@A@AB@@@AAAA@A@@@A@@B@@CA@@A@@BC@@BA@@@A@A@@AA@AA@A@@@A@@@C@A@@@@@@A@C@@@AA@@AAA@A@CA@@@A@A@@@A@@B@BABCA@@@@A@A@@@@AB@@A@AA@A@AA@A@@@A@A@@@A@BA@@BA@@B@BADA@@@ADA@@A@B@AAA@@C@AA@@@A@C@C@A@@@@A@A@A@@AA@@@@C@A@AAAA@@@@A@BAA@@@@AB@@@BA@B@@@A@@@@BA@A@@@A@@@@BA@@AC@@@A@@AA@@B@@A@@B@@@B@BB@@B@B@B@@ABAB@@ABAB@@@@A@@@A@@@AAA@@@@@AAAAE@@@@BAB@@@@AB@@@B@BA@@D@@@@@@A@@AA@@@@@A@AA@@@@AA@@BCBA@@@@@@@AA@@AA@AA@@AAA@@@@A@ABA@A@@@@AAB@A@@@@A@AA@@AB@@@A@@BABA@@@@@@@@A@@@@BAA@@@@@A@@A@@@AA@@BAB@@@@AA@AA@BA@@@@@A@@@@@@BA@@@@@@@A@@@AB@@@@@AA@@@A@@@@@A@@@A@A@AAC@@@@@AA@@AAA@A@@@A@@BAAA@@@@@@AA@AA@@@A@@BAB@B@B@@ABA@@B@@AB@@@@@B@BA@@@@@A@@B@@@B@@A@@@@B@@@@A@@BABA@@B@@@BA@@B@BBB@B@@B@@B@@@@@@@BBB@@@B@@@@@@B@@B@@@BB@@B@BA@A@@BBBA@@@@B@B@@@@@B@@A@ABA@@BA@@B@@A@@BA@@B@B@@@AAAE@A@A@@BG@A@A@A@@BA@@@@B@@@B@B@@@FA@@@@AA@@@A@@BA@A@AA@@@@A@@D@BABA@@B@B@B@BAB@@@BA@@@AB@@@B@@@@@@@@@BABA@@BC@@AAB@@AA@@AA@@@@AB@@ABA@@B@@AB@@@@@@A@A@@D@@@@@B@@BBB@@@@@B@@@@@@B@@A@@@@B@@B@@B@B@BA@@B@@@B@@@AA@A@@@A@BB@@B@ABA@@@@@@A@@C@@@A@@BA@@@A@@@@B@@@@@@@@@@BB@@@@@@@@@BB@@DA@@B@@@@@@@BB@@@@@AB@@A@@@@@AB@@@@A@@@@A@AA@@CB@@AAA@C@@A@A@@AC@@D@@@@@@@@A@@D@B@@@@@B@BBDCDA@@@A@A@@B@BA@@B@B@@A@@@@B@BAB@B@B@B@@@F@@@@@B@@@@BB@@BB@BAB@B@BAB@@AB@@AB@@A@@AA@@A@@@@A@@CA@@A@A@@A@@AA@@AA@AA@@A@@@@@ABA@@BA@@@@@@@A@@@A@@@@@@@A@@B@@A@@@@@@AA@@@@@A@@@CA@@@@AAA@A@C@@AA@A@@@@@A@ABC@@@@AA@CA@AA@@A@@@A@@@@@AA@A@A@@@A@@A@@@@A@@@B@@AAB@AA@@@A@C@@@@@@@@AA@@AA@@A@@@AA@@A@@@@A@@@CAABA@A@@@A@@@ABAB@BAB@BA@@B@@A@@@@@@@@@A@@@A@A@@A@@@@@AA@@@@@A@@BA@@@@A@@A@@B@@A@@AA@@B@@A@@CA@A@@B@@AAA@A@@@@@@B@BBB@@B@@@AB@@A@@AA@@@AAA@@@@@A@A@A@@@A@@@A@A@@@A@@B@@@B@@@@@@B@@A@@@@B@B@@B@B@@@B@@@D@@A@@@AB@AABA@A@C@@A@@AA@@A@@@AA@@AA@A@@@@@@@@@A@@@@@A@@@AB@B@@@BA@@@@@A@@BAB@@@@@@A@@@A@@@AD@@@@AAA@@@A@AA@@@@@AA@@@@BA@@@@@AAA@@@@@@@@@A@A@@@@AA@@@A@@@A@A@@@@@@BBBA@AAA@@@@AAAAA@@@@@@@@AB@@@@AA@@A@B@@B@@@BB@DB@@@B@@@B@B@BA@@@A@@@A@@B@@@B@@@B@@B@@@@B@@@@AAAC@@A@@@@B@@BB@@BB@@AB@@@@A@A@@@@@@B@@@B@B@@@@AB@@AB@@A@@@@B@@BB@@A@@BA@@A@@C@@@A@@B@AA@@@@@A@@@C@@@@@@B@B@@A@@@@A@@AA@@A@@@@A@@A@AB@@@A@@@@@BA@A@@@AB@@@BB@@@@@@@@@A@@@AB@@A@@@A@A@@@A@@B@@@@C@C@A@@AA@@@A@@@A@@BA@AA@@@B@@A@@AA@@BA@A@@@@@AAA@@@AA@@@@A@@@A@@B@BAB@@@@AB@AA@@B@@@B@@@@AB@@A@@@A@@@@@A@@@AB@@AB@@A@@AA@@@A@@B@@A@@B@@@B@BA@AB@@BB@@CB@@A@@A@@@A@@@@@A@@A@@@ABAB@@AAA@AAA@@@AAA@@@@@@ACC@@A@A@@@A@AA@@A@ABAB@@A@@@@@@@@AA@@@@AA@@@@@@@A@@@@B@@A@@AA@@@@@A@@@A@@@AA@@@@AB@@A@A@A@@AA@@AA@@A@@@@B@BAB@@AB@@AA@A@@@@@A@@@@@A@@ACACAA@@@A@@AA@ABA@@@AAA@@@@@A@@@C@A@A@@@CBAB@@A@@D@@ABA@A@AA@@C@A@AB@@A@@BA@@@@@@@AA@@@C@@A@@A@AA@@A@ABA@@@AB@@A@@A@BA@@A@AA@@@@@A@@@A@A@@@@@AB@@A@AB@@ABAB@B@@@@@DB@@@@@@@@BA@@BA@@@@@CB@@AB@@@B@BA@@@@@@AAAA@@AAAA@@@@AAA@@A@@D@@@@@@A@@@@BA@@@A@@@A@@AA@@@@@A@@@A@A@A@@@A@@@A@@@@@@B@B@@@@ABA@@@@@@@@ACA@@A@@@@@@@@A@@@@@A@CBC@@@C@A@C@EA@AA@@@@@A@@BAA@@@@@A@A@@@CBA@A@A@AA@CC@@CA@@A@@@ABABA@@@A@A@A@AA@@@@@C@AB@@AA@CC@@AAA@@@A@AB@@A@A@AAEBA@EDA@AB@@AB@B@@@@ABA@ABAD@@CCC@C@C@C@C@A@@@@@@C@A@@AA@@A@A@CB@@AB@@BB@@@@A@A@A@A@CC@AA@@A@@AAB@@AAA@A@AAA@@A@@@@@C@C@@@AAB@AA@@AAC@@@A@E@EA@@ABA@@@A@A@@@@A@A@@CEAC@A@A@AACA@@A@AAA@@@AA@AAA@@A@AABE@@@AAAACA@@AA@@EB@@"],"encodeOffsets":[[120100,29430]]}}],"UTF8Encoding":true});}));