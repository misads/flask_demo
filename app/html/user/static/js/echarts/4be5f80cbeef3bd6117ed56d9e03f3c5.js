(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('永嘉县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"330324","properties":{"name":"永嘉县","cp":[120.692025,28.153607],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@A@@A@@@@@@@A@A@@@@@@@@A@@@AA@@@A@@@@AA@@@@@@@A@@@@@A@A@@ACAAA@@A@IFKDMDABC@EBEBG@CBA@C@C@C@A@IACAC@EACAEDEDCBEBGBMDG@A@IBE@GBE@E@A@EAC@E@A@@@C@A@A@C@I@M@A@ABA@@@A@@@C@@BA@ABA@A@C@A@I@EAA@C@AAE@C@CA@@A@A@CAC@AAC@A@ABGBABA@A@ABGDCBABCBAD@D@@AD@D@@@B@B@D@@@BAD@@AH@H@@@BBF@DBBBBBDBDBB@B@B@D@DAD@BABAB@B@DCFAHA@@DABAD@BCF@BCBABABCBEBA@A@C@EAC@A@EAAAA@CBA@A@AB@@ABAHAJ@J@B@B@B@B@B@BAFBD@D@@@BABABCDEBC@CBA@C@C@C@E@A@E@AAKAGACACAGAA@C@EAE@@@A@E@EBABEBABEBA@@B@@ABABCDC@ABC@C@A@C@ABA@A@A@A@A@A@AAAAAAAEAA@A@A@AA@@@A@A@A@CBEDCDCBABEJCFABCDEDABABA@CBC@A@EAEAA@A@E@C@E@ABA@DD@BBBB@@B@@A@@B@@CB@@@@@B@@@@@@@@@B@B@BAB@@A@A@A@@@@@@@@B@@ADAB@B@B@BB@@@@B@@@BA@@B@@@@@@BBB@B@@@@@BB@@@@@@B@@BB@@@@BB@@BB@@@BBB@B@B@B@@@BBD@@@B@@@@@BB@@@B@@@B@@@B@@AB@BAB@B@@@B@@@BBB@@@@@@@BA@@B@@@@@AAA@A@@A@@@@@@@A@@B@@@@@@@@A@BB@B@@@B@@A@A@@@@@@A@@@@@B@@A@@@@@@@@@B@@@@@AA@B@@@A@@@@@@@@@@@@A@@@@@@@@@AA@@@@@@@A@B@@@B@@@B@B@@@@@@@@@A@@@@C@@@@@B@@@CB@@ABA@@@@@@@@@A@A@@@@A@@AA@BA@@B@@@@AA@@@@@BBB@@@B@@@BA@@BB@@@@B@@A@@@@@@@@@@@BB@B@@B@@@@@@BB@B@B@@B@@@B@BA@BBAB@@A@AB@@BF@@A@@@@@@@@A@A@@ADA@@@@@A@@@A@BA@@AA@@@@@@@B@@@@@@@@A@@@@@@B@@@@@B@@A@@@A@@@A@@B@@@@@@@@@AA@@BA@@B@@@@@BB@@@B@@@B@B@B@@AB@@@B@@@@@BA@BDBB@BBB@@@@@AA@@@@@AAA@@B@@@@@@CDA@@@BB@@@AA@@B@@@@@@@@@@@@BB@B@@@@AB@AAB@@@@@@@@@B@B@@@@@@@@@@B@@A@@B@@@@@B@@@@@@@B@@@@@@@@@@BB@@B@@@A@@@@@@B@@B@@@@@A@@B@@B@BA@@@@@BA@@@@B@@@@@@@@B@@@@@@@@@BB@@@A@@@@@B@ABB@@A@@@@@@B@@@B@@@@@@@@@@B@@@@B@@@@@@@B@@@@@B@@@@@@B@@@@@@@AB@@@@@@B@@@BA@@@@@@B@@@@@@@B@@@@@@BB@B@@@BB@@@B@@@@@@A@@@@@@B@B@@B@@BB@B@@@BBBABB@@@B@@@BA@@BAB@B@B@@@BAB@B@@@B@@AB@@AB@@@@A@ABC@AAA@@BA@@@A@@@@@A@@BA@@@A@@@@B@@@@@B@B@@A@@B@@AB@@@@@B@@@B@@B@BB@@@BB@@@@B@D@@BBB@@@@@@B@@@B@BB@AB@B@@@B@@@B@@@@@B@B@B@@@@@BA@@@@@@BA@@BB@@B@@@B@@@@@@@@AB@@@@CA@B@@@B@@@@AB@BB@@@@B@@@@@B@@AB@@@@ADCB@@@B@B@@@BA@ABB@ABBB@B@@A@@DBB@@AB@@AB@@@B@@@B@@AB@B@@@@BB@@A@@BA@@@A@AB@ACDA@A@A@@@A@AB@@A@@@A@A@AB@@@B@@A@AB@@@BA@@BAB@@@@@@@BA@@@@@@@AB@@B@@BA@@BA@@@A@@@A@A@C@A@A@@@@@@@@@AB@BA@CAABAA@@A@@@A@CBABABA@AB@B@@@BB@@B@@@@A@@B@@A@@@@B@B@BBB@@@@@B@@@B@@@BA@@A@@@@@@@@A@@@@@AA@@@@@@A@BB@@@@A@@@A@A@@BA@@ACBA@AAA@@@AAEAA@AB@@ABA@@@@B@@A@@B@@CA@@@@A@@@@@@@@BA@@@@@@@A@@@@@A@@@@B@@AB@@@B@@B@@@B@BBB@B@@@@@B@@@@B@@@@B@@@A@B@@@@@B@DB@B@@@@B@@B@@@BDB@@BDB@@B@B@@AB@B@D@@@B@@@B@@@@A@@B@@@B@@@@BB@@BBB@@@BB@B@@@@@@@@A@A@@@@@@@AB@@@@A@@@AB@@@@A@@AC@A@@@@DB@@B@@BBB@BBB@A@@BABA@A@A@@@AB@BA@A@@@A@A@A@@@C@A@A@@@A@@@A@A@CBA@@@@B@@@BAB@@A@@AAB@@AA@B@B@BBB@@@B@@@B@BAB@@@B@@@B@@@B@@@B@B@@@@@BB@@@BBB@@@B@BBB@@@@BBB@@@@B@@B@@@B@B@@BBB@@@B@AB@B@@@@CBA@@@@@AA@@A@AB@BA@@@@BA@@@@@ABABA@@B@B@@@BA@@B@@@B@@B@@@@B@@@@@@@@@@AB@BA@@@@B@@@@@B@@@@B@@@@B@@@@@BB@B@@@B@BBB@B@@BB@@B@BB@AB@@@@A@@@@BA@@@@B@@@BB@@B@D@BAB@BB@@@@B@@@B@B@@@BB@@@@@B@@BBB@@@@B@@B@@B@@@BB@@@@@@@AB@@AB@BA@@B@BBBA@@B@@@@@BB@@BAB@B@@@@BB@@@B@@AB@@A@@@@@@B@@AB@@@B@@@B@@@@@@@BA@@@@@AB@@@B@@@@@B@@@B@@A@@@@@A@@@AAAAABA@@@A@@@@@@B@BA@@@@@@BC@@@@BA@@B@B@@@@A@@@A@@B@B@@@@CB@D@@B@@@@@@@B@@@B@@@B@@B@@B@B@@@@@B@@@B@@@@@BB@A@B@@@@BB@@B@@BB@@@B@@@B@@BBB@@BA@@B@@@BAB@@@@BB@@@@@B@@@B@@@B@B@@@B@@@DA@A@@B@@@BA@@@@B@@AB@@@B@@ABC@@@@BAB@@@@AB@@@@@B@@A@@BB@@@@B@@@B@@AB@@B@@B@@@@BB@@@@B@@B@@B@@@@B@@BB@@@@@BB@@@B@@B@@B@@B@@B@@@BB@@@@BA@@A@@A@@B@@B@@@@B@@@B@B@@@AB@BAB@@BB@B@B@@BB@@@@@B@@@B@@@@A@@B@@@B@@A@BB@@B@@B@@@@@@@B@B@@ABB@@@@B@@@B@B@@BBBB@BBA@@B@@@@A@A@@B@@A@@AA@@@@@A@@@@@A@@@@BA@@BAB@B@B@@@@ABAA@BA@@BC@@@AB@B@B@@@BB@B@@BBBB@B@@@@@BB@@B@@@@@@@B@@@B@@A@@@@@A@@@CB@B@@@DDB@B@BBBB@BA@@@@@@B@@@@@@@BA@@@@B@@@@@@@@@BA@@@A@@@@@@B@@@@@B@@@B@@@BBA@@@@B@@A@@@C@@B@B@@@@A@BB@@@@@B@@@B@@@B@@@@BB@@BA@@B@B@BB@@B@@D@@BA@BB@B@@@@@@@B@@B@@B@@B@@@@@BB@@@@@@@ABB@@@A@@BAA@BB@@B@@A@@@A@B@A@@B@@@@@B@@A@@@@@A@@B@BB@@@@@@B@@@@@@@B@@ABAB@@A@@@@@@B@BBB@@@@BA@@@@B@@@@B@@D@@@@B@@@B@@B@@B@@@@@BA@@@@@@@@BA@@@@B@@@@@@ABC@@@@@BBB@@@@@@@@B@@A@@BB@@@@AB@@B@@B@@@@BBBBB@BBA@@@B@@B@@@@@@@@B@@@@@B@@@B@ABB@@@@@B@@AB@@AB@@@B@@@B@@@B@@BA@@@@@DB@@@@@BA@@@@@@@@@B@@B@@@AB@@@BB@BB@@A@@@@@@BA@@@@@@@A@@@@B@@@@B@BB@@BA@@B@@@B@B@B@B@BB@@@BA@@B@@B@BD@B@@@F@@ADA@@B@@@B@@@BB@@B@@@B@@DD@@@BB@@B@@@B@@@@@BB@CB@B@BAB@@@@A@@B@@@@@@@BA@@@@@@@@B@B@B@B@@@@BB@@@@@BA@@BAB@@AB@B@@@@BB@@@A@@BC@A@B@A@BBB@@@@@AB@@@BB@@A@BB@@B@B@@B@@@@BB@B@@@@B@@@B@@@BA@@B@@@@@B@@@B@@@@@@D@B@@@B@BB@@B@B@@@B@@@B@@@@@B@@B@BBB@@BB@@@B@BAB@@@B@@@B@BB@@B@@@B@BBB@@@B@@@B@@@B@@@B@@@B@BB@@D@B@BA@@B@B@@B@@B@BB@@B@@ABB@AB@@AB@@@@@@A@@B@@@@A@@BAB@@@BA@@B@BA@@@@B@@@B@@@@F@@D@@B@@BADABAB@@@BA@@BA@BB@@@BA@@@@@@BA@@A@@@BA@@@@@A@@BA@@@@@A@AB@@@B@BA@CB@BC@AB@@@@@BAAA@@AA@@@@@AA@@@@@BA@ADA@@@@BABA@@@@B@@@B@@A@@@@B@@@@ABBBAD@BB@@BB@@@@B@@@@@@@@@DAB@BAB@@A@@@@B@@ABABA@@@B@@B@BB@@BBB@@@@@@A@@@C@@BA@@B@@@@A@ABA@@BAB@@A@@BB@@B@BA@@@@@@B@B@@@B@@AB@@AB@@@B@B@@@@AB@@ABAB@@A@AB@@A@@B@@A@@@@@AB@@AB@BABAA@@A@@B@B@@@B@B@@BB@B@BB@@B@@@@@B@B@@@@@BA@AB@B@@AAA@AB@@@B@@A@@@@@@B@BB@BB@BB@@B@@@@@BA@@D@@@@B@@@B@@BBBBB@@B@B@@B@@@B@B@@@B@B@@@@A@@BA@@@@@@B@BA@BBA@@@@@A@A@@B@BA@@BA@@B@B@B@@@@@BB@@@@BBBB@A@@B@@@D@@@B@@@B@@AB@@@@@B@ABB@@BB@B@B@@@B@@@@@B@BB@@B@@@@AB@@@@@@@B@@@@B@@@AB@@@@@B@B@@@@@BABBB@B@B@@@@@B@BBBAB@@@BAB@B@@@@@B@DB@@@@B@@A@BB@B@@@@@@B@@@BB@@@BBB@@@ABAB@@@@@B@D@@B@@@@B@@@@@B@@AB@@@@BF@@@@AB@@AB@BA@@@A@@@@B@@@B@BB@@@A@@@AB@@AB@B@B@@B@BBB@@@@@@@BB@B@BB@@@@@BB@@B@@@@BB@@BB@@@B@B@@A@@@@BA@@@A@@B@@@B@B@B@@@BA@@@A@@@ABB@A@@B@@AB@@@@B@BB@@@BBB@@B@@B@B@@@FB@@B@@B@@CB@@BB@@A@@@@@@B@D@@BBA@@@@BABCBB@@@AB@@A@@BA@@@ABABAB@@@@A@BB@@@@AB@@B@@BB@@ABBB@@@@@F@B@@B@B@@B@B@@@BBB@@BBB@@B@BB@@@@BA@@@@B@B@D@B@@AB@@AB@@A@@B@B@B@BA@@BAD@@@B@@@@BB@B@B@@@BB@@@@@B@@D@BAB@D@B@DBBAB@B@@@@@@@B@@BB@@@A@B@@@B@B@@@@B@B@@BB@@@B@@A@ABABA@@@BBB@@B@@B@@@@B@@BA@A@ABAB@B@@@@@B@@@BA@@DB@@@@BB@@AB@BBB@@B@@AB@@@BBB@A@@B@@@@@B@@@BBB@@@@@@EB@@@@@@@B@BBBB@@@@BB@@DBB@@A@AB@B@@@B@@@@@B@B@@B@B@@@B@B@@A@@@A@@@AB@BA@@BB@@@BB@@B@B@B@B@@ABAB@@@@B@@@@@B@B@@AB@@@BA@@@@B@B@BA@@@@B@@A@@B@@AB@@@BA@@@AB@B@B@@@@AB@@@B@B@BB@@B@@@@@B@@AB@BABB@@B@BB@@B@BB@@@@@BB@@@@@BB@@@B@@B@@@AB@B@@@@B@B@B@B@@@D@@@BBB@@@@@BA@@@@B@B@B@@@@@B@BA@@DA@A@@@A@@@A@@A@@@B@BABB@@B@@@B@@AB@B@@AB@@@AC@@@AA@@@BAA@@A@AA@@@@AB@@@@A@@@ABA@@BA@AA@@AA@@@B@@@B@B@@@@@B@@@B@@@BBB@@BB@B@B@B@B@B@BBB@@@@@@A@@BABA@@B@@AB@@@@@@@BA@@BA@@B@@@B@BB@@@@@B@@B@@@BB@@@AB@B@B@@AB@@@@@@A@@@@@AB@@A@A@A@@@@B@@@B@@@B@@A@@D@@@B@@@@A@@BBB@BBBB@B@@BB@@DB@@@@@@@@BA@@BA@@@A@A@A@@AA@@@@@@@@@A@A@@@A@@@A@BA@AC@A@@@@@A@@BABABAB@@A@@B@BBB@@A@AB@B@B@DAB@@@BAB@B@@@BBB@BABAB@@@BBB@DABAD@BABA@@@A@A@ABA@@@@@A@@@A@@@@@A@A@@@ABA@@B@@@BA@@BA@A@@@ABA@@B@BAB@@@BA@@A@@@B@@A@@BA@@@@@@@B@@@@@B@A@@B@@@B@@@@@@AB@@@@@@@@@@@BA@@@@@A@@@@@AB@@@@A@@@@@@@@AA@A@@A@@A@@@@@A@@@@A@@@@@AA@@@A@A@@@@A@@@@A@@@A@@@A@@@@A@@@@@@@@@A@@@@@A@@@A@@@@@@@@BA@@@@@@@AA@@@@@@@@@@@A@@@@A@@@@@@A@@@@@@@@@A@@@@@@B@B@@@B@@@@@A@@@@@@A@@@@@@@A@@A@@A@@@@@@@@@A@@@A@@@@@@@@@@@A@@@@@@A@@@B@@A@@@@@@@@@@@A@@@@@@@@@@@@@@B@@B@@@@@@@@@@@@@@BA@@@@@@@@@@@@B@@A@@BA@@@@@@@@@A@@@@B@@@@@@A@@@@B@@@@A@@@@@@@@B@@@B@B@BB@@@A@@@@@@B@@@@@@A@@@@@@@@B@@A@@@@@AB@B@BA@@FBB@BB@@B@@@D@@@@A@@B@@CB@DA@@@@@@@A@@@@B@BA@@@@@C@A@@@C@@AABA@EB@BC@@BABA@@D@@@@@BC@@BA@@@A@@@@B@@AD@D@B@BAB@@@@@@@@@B@BA@@@A@@B@@@@B@@B@@@B@@@@@BA@@BBB@BBB@@@@@BA@@@@D@@@@A@@AA@A@@D@@ABA@@@@B@@@D@DBBBB@B@@@@@B@B@BBD@@@FB@@B@B@BBB@BB@@@@@BBBBB@D@@DD@@@@FBBBBBDB@@@DDBBB@@@@D@@@BBB@B@DB@@@AB@B@B@B@@AB@B@B@@AB@@@@B@@@@BAB@BB@A@@D@DCB@@@BAB@BB@@B@@A@@@@@AB@@AB@B@@B@@@B@@B@@B@@@@BB@@@B@@@BA@@BC@@D@@@B@@BBB@B@BBB@B@@BB@@BBA@@@A@AB@@@@@@A@@@A@AAAAA@ABA@@AE@@@A@@@AA@A@@A@@@AAA@@BA@A@@B@BA@@@@B@@@@@@CBABA@A@ABA@@BA@@@A@@@@@AB@@A@@BAB@B@@BB@BAB@B@BA@@@A@@@@A@@@A@AC@@@B@@A@@AAAB@@@BAB@@@@ABA@@@B@@B@@@@C@A@@A@@CA@BA@@@AAA@@@@A@@A@@A@A@@@BA@A@@@@@@B@B@B@@@@@B@B@@@@@B@@@BB@@@@@AB@B@@@B@@A@A@A@A@E@@@@@@@A@AB@@A@@@A@@B@BC@@AAB@@A@@B@@A@AB@@A@@@A@@@@AA@@@@A@@@@@@@A@@@@@@C@@AA@@@AA@@@AA@AA@@@@@@BBB@@@@@@@BA@@A@@@@@B@@@@@AA@@@@@@@@B@@CA@A@@@@@A@AB@@@@AA@@A@@AB@@@@@@@@@@@@A@@@@@@@A@@B@@A@A@@@A@@@A@@@@@A@A@BAA@@@A@@@BA@@A@@A@@AA@@A@@@AA@@@C@AACA@@@@AA@@A@@A@B@@@@@@@BAB@A@@@A@@@A@@@@A@@@@@AA@B@@@BA@@DA@@B@B@@A@B@@B@@@@@@AB@@B@AB@@@@@@@B@@AAC@@@@AAA@@@@@@A@@@@AA@A@@@@@AA@@@A@@@@@AA@@@A@@B@B@@@@@AAA@A@@@@@@A@@BA@A@@@A@@@A@@@A@@B@BAB@@@@ABBB@@@@@@A@@B@BB@@@@B@@A@@B@B@@@BC@@@A@@@@@@B@@@B@@@BB@BB@B@@@B@BB@@@@BAB@@BB@B@B@BB@@@@BA@@@AB@@A@ABA@@@@@A@AA@@@A@A@@A@@BC@@A@@A@AA@@AA@AA@@AA@@A@@@@AB@@@@AB@BAB@@ABA@@@@A@@AA@AA@@@@A@A@A@AAA@AA@@@AA@A@A@@@@AA@@@@AAA@@A@@@@@AA@@AAAAA@@@A@A@@@A@A@A@@@@@@A@A@C@AAA@AAAA@@A@@@A@@B@B@B@@ABB@A@@@AB@@@B@@@@@B@@@B@@AB@B@@@@@@A@C@@@@@@@A@@@@@A@@@@B@@A@@AAA@@@@@@@@A@@@@@AA@A@@@@A@@A@@@@@@AA@@@@@A@@@@A@A@@@@@A@@A@AA@@A@@@A@@@@A@@DA@@@@@AA@A@A@A@@@@A@@@@BABA@@@@@AB@A@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@A@@@@@@@@@A@A@@@@@A@@@@@@@@@@@@@@@@BAA@@@@A@@@@@@B@@@A@@@@@@@@A@@BA@@BA@@@A@@@@@@AA@@@@A@BA@@AA@@@AA@@@@@A@@B@B@@@@@@AB@@@A@@AAA@@AA@@@A@@@@@@A@@@A@@@BB@@A@@@@@@AA@@BA@@@@@A@@@AAA@A@@@A@@@@@A@@@@@A@@@@A@@@@C@@B@@@@@AA@@B@@CAAAA@AAE@@@A@@B@B@B@@@@@@AB@@DDB@AF@@@@BB@@AB@@@BA@@@AB@@@@@@A@AB@@AB@@A@@@A@@@A@A@A@@@A@A@@BA@A@@@@@A@A@A@@A@@AAA@@@A@A@@@A@@@@@A@@@C@@@A@@@@@@AB@AA@@AAAACA@@@AA@AA@@@@AAA@@A@A@@@A@@@ABAB@@CA@A@@@@@A@@AA@A@A@@@@@A@@A@@@@@A@@A@@@A@@@@A@@BA@@B@@@@AA@AA@@@@@AB@@@@@@A@@@@@@B@@@@A@@DB@@B@@@DBBB@@DB@B@@@A@@@A@A@AAA@@@AB@@@@@@@@@@@B@@@@A@A@A@@@@B@BA@AD@BA@@@@@A@@@@B@BC@@B@@@BA@@DA@@@@AA@@@A@@BA@A@@@@A@@@@@AA@@AAB@AA@AAAA@@@@A@@A@@@@A@@B@@AB@@A@@@@@@@@@AB@@@@@AAA@@@@CA@@@B@BAB@@@@@BB@@@@B@B@B@B@B@B@@A@AA@@A@@A@@A@@@@@@@AA@@@@A@@@@@@@@@A@@@@@A@A@@@@@AA@@@@A@A@@@A@@B@@A@@@AB@AA@A@@AA@@@AA@@@@AD@BA@AB@@A@A@@@A@AA@@ABA@A@@@@BA@@@A@@@@AA@@@A@A@@AA@@@@AAAA@A@@B@@@@A@@AAA@A@@@A@C@@A@@AAA@AAAA@@@@@@@@A@@@AA@@A@@@@@A@A@A@@@@@A@@A@@@@C@@A@@A@@A@A@A@@@AB@@@@A@@@@@AA@@A@@A@@A@@@ABA@AB@@@BADBB@@@@@@BB@@@@@@@@B@@@@BB@@B@@BB@@@B@@@@@@A@@@@B@B@B@@B@A@@@@A@@@BC@@A@@@BA@@BB@@BB@@@@B@B@@@B@BA@@@@@A@@B@@BB@@@A@@@BBB@@@@@BB@@B@@AB@@A@@@AA@@A@@A@@@AAA@A@@A@@@@AC@@@@@AB@@A@@AAACB@@@@@@A@@BA@@AA@@@A@@@A@@@A@A@AA@@@A@B@@@@@B@@@AABABB@@@@@A@@@A@A@@@@A@@@@AA@AA@B@@A@@@AAA@@AA@A@@@A@@@A@@AA@@@@@A@@@A@CA@@@AA@A@C@AAA@@AA@A@@A@@@@@A@@@A@@@@@@@A@@@AA@@@@A@@@A@@@@@@@@@A@@@@@AB@@ABA@@A@@@AAA@ABA@@@AA@@@@B@@AB@@@@@@@@@A@@A@@@@A@@@@@A@@@@@@@A@@@@@@@@@A@A@@A@@@@@@AA@BA@@A@@@@@@@@A@@@@@@@@@@@@B@@@@A@@@A@@AA@AAA@CAA@@@@A@A@A@@B@DAB@@@D@BB@@@@B@B@@@@AA@@@BCB@@@AA@AA@@@@AA@C@@@@A@@@@@@AA@@@@@@@@B@@@AAA@@AB@B@@AB@@@@AA@AAA@@@@A@@A@@@@@AA@@A@@@@AA@@@@@@AB@@@AA@A@@A@CA@@AA@@AC@@@A@@@@@AAA@@@@@@A@@@C@@@A@A@@@@BA@@@@@A@A@@@AA@A@@AA@@A@AAA@AA@@@A@@B@@@B@BA@@@A@@@@AA@A@@A@@@A@@A@@B@@@BA@@B@B@@A@@AC@@@@C@A@AAAAA@@@@AA@@@A@@A@ADAB@@AA@@AB@@AA@AA@@A@@AA@B@AAAA@@BA@@@A@@@@@@B@@@@@@@A@@A@@@@@@B@@@@A@@A@@@@A@A@A@A@@BA@A@AA@@B@@@@A@@ACA@@@AA@A@@@@@A@@@@@A@@@A@@AA@@@@A@@@@@@@A@@@@@AA@@@@@AA@@AA@A@@A@AA@@@@@A@@@@@@AA@@@@@@@A@@BA@@@@@A@BA@@@@@A@BA@@@@AAB@AA@AB@@@@@@A@@@@@AA@@@@@AA@@A@A@@AB@@@B@B@@AA@@@@@A@@@@@@@B@@A@@C@@A@@@@@@@@BA@@A@A@@A@@A@@@AA@@@A@@@A@@@@@A@@@A@@A@A@@A@@A@@A@@BA@@@AB@@AA@AAAB@@@A@@@A@@@@@A@@@@@A@A@@BA@@@@@@@ABAB@@A@AAA@AB@@BB@@@@@B@@@B@@B@@@@@@@@@@@BA@@@@@@B@@@@@B@@@BB@@B@@@@@@@@@A@A@@@A@@B@@A@@B@@@@@BB@@@@B@@@B@B@B@BA@@@@BA@AB@@B@@@@@@@@B@@A@@B@B@B@@ABA@@@AA@@@E@@@ABA@@@A@A@AA@@C@A@@@AAA@@@AAAA@@A@AB@@A@@@B@@A@@A@@@B@@A@@@@B@@@A@@@@AB@@@BB@@@@@A@A@@@@@@B@@@@@@A@@@A@AA@@@@BA@@A@@BA@A@A@@@A@A@@A@@C@AD@@@@A@@@@@AA@@@@BA@@@AA@@AA@A@@D@@@B@@@@@@A@@@@C@@@@@@AB@@@A@@@@@A@@A@@@A@@@@@@BA@@@@A@@A@BA@@BAB@B@@AA@@@A@A@@AA@@C@@@@A@@@@BA@@BA@@@AA@AA@@@@@@@A@@@@@A@@A@@@@A@@BA@@@@@@AA@A@@A@@@A@BAA@@@@@@@@@@AA@@@@A@@B@@@@AB@@@B@B@@@@A@AA@@@A@A@@@@@A@@@@A@@A@@@@@A@@@@@@@@B@B@@A@@@@A@A@@@@@A@@@A@@@A@@@AA@@@DA@@A@B@AA@@@@"],"encodeOffsets":[[123697,28692]]}}],"UTF8Encoding":true});}));