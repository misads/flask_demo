(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('绥德县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"610826","properties":{"name":"绥德县","cp":[110.263362,37.50294],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AB@@C@A@AAA@@@@@@@@A@A@@AAA@A@@A@@@@CA@@AA@AAC@@@@A@CD@B@@AB@BCB@BAB@@@B@B@@A@@@@ACAA@C@@@AA@@@AA@A@A@@@@A@@@@A@@A@@@@@@A@@@@A@@@@A@@@@A@@@@@A@@A@@@C@@@A@AB@@@BA@AB@@@@@@AA@@@@@@A@AB@@EBA@ABA@ABAB@@C@CBAB@@A@@@@@@@@BA@@B@DA@@@CD@@AB@@@@@@@@A@@@@@A@@@@@A@A@A@@@C@@AAAA@@A@@A@ABA@@@@A@@AA@A@@@@A@@@@@@AA@@@A@@@EAA@@@A@EBGB@@AAAA@BA@@BA@A@@ACCA@@AAC@A@A@A@A@@@@A@EB@@ABCB@@@@AB@B@@C@@@A@@BA@@B@@@B@DAB@@CB@@@@A@@@A@@@@BA@ABA@@@@B@BA@ABCBA@C@@@A@A@@@AAAAAAA@@@@@@@@F@DB@@@A@@BA@@@A@A@A@@@@B@@B@@B@@@@A@A@A@@@ABB@@B@BB@A@@@@BA@@@AAEAACA@@B@B@B@BB@@B@@@@@@DD@@@@A@@@A@A@A@E@A@@@CBA@@@A@@@A@A@A@A@@@@@@BB@@B@@@BB@ADA@@@@BA@@@BB@@@@@B@B@@@B@@@B@@AB@@A@@@@@AAA@@@@BA@A@AB@@@@AAEC@@A@@@@BAD@D@BA@@D@@A@C@@@A@A@@BA@@BAB@BA@AB@@@B@B@@@BA@A@@@A@@AAA@@@A@@@A@@@ABA@@A@E@ABA@AAA@@@@C@A@@BC@@BA@@@@BABE@A@AA@A@A@A@CA@@A@@BA@E@CAC@@A@AAC@@@A@@@C@@AA@@A@CBA@ABA@@A@@@@A@@@AB@@A@@@A@A@@@@@@@@@@AB@@@@@@@C@@@@AA@@A@@@A@@@ABA@@A@A@@AAAAA@@@@A@@@A@ABAB@@A@@@EA@@@@ABA@A@C@A@@@@A@@@AAAA@A@AAA@A@@A@@B@@@@@@@@@AA@@B@B@@@B@@@BA@@@@@A@@AAA@A@@@A@@@@@DDB@@@A@C@A@ADAD@@A@@@@@@B@@@@@BAB@@@@AB@@@B@@BB@@B@@DAB@BBBA@@B@@A@@@@@@@BBB@@B@BBB@@BBB@@@B@@AB@@@B@@B@@@B@@A@@BAD@@AB@B@@@@@@@B@@@@@BB@B@B@BBBB@@B@AB@@@BBB@@BB@BBBB@@D@BB@BBJDB@B@B@BBB@@B@B@@@@ABA@AA@AA@@@A@A@ABA@A@AD@B@B@@C@@B@@@B@BBB@@B@@@D@@@@@ABA@ABABABCBA@@@@B@BB@@@B@@@BADB@@B@B@@@B@B@@@BB@@BBB@BBD@B@@@BD@@BB@@BD@@B@@BD@B@@@B@@B@@@@B@@@@@@B@@@B@@@@B@@@B@BB@BAB@B@B@@@@B@@B@BAD@@@B@B@B@B@@AB@@A@@@@A@@AAA@@@@@@BABCF@B@@@@DB@@@@AB@BABA@@A@BA@A@A@ABABABAB@@@A@@AB@@@@@B@@A@A@CAA@AAA@A@AB@@AB@@C@A@GAA@@@@@@@@B@@ABCBA@@@@BA@@BABA@@@@@A@C@@A@@@A@@A@@@AB@@A@@@@A@@@A@@@@C@A@C@@@CBA@@@@A@A@A@@@@C@CACA@@A@A@CAAA@@BABA@AA@@AA@AA@@@ABA@AA@@@@@AB@@CB@@A@C@A@A@A@AB@@A@@A@@AAA@AAABAAA@@AA@A@@@ABA@@@A@@AAAAAA@@@A@A@ABA@@@@AAA@@@@A@@@A@@@CC@@A@A@C@@A@@@AA@CACCC@AAA@A@@@AAAAA@@B@@AB@@@D@B@@@@@B@B@@EBCDA@@AA@@@@@ABAB@@@D@B@@@B@@@BCD@@A@A@@@AB@@A@@BABA@ABAD@BAB@@@@@@A@AAA@AB@@A@@@A@@@A@@BAA@@A@CAB@@@@A@A@A@A@@A@@@@@A@AAACA@@@CA@@AA@@A@@C@A@ABAAA@@BCBA@@@AA@A@@A@A@@AAA@@@@@@@AB@@ABA@@@A@@@@@AA@A@@@@@A@A@@@@CA@@AA@@A@A@@@A@ABABA@A@@B@@ABADCD@@@D@@A@B@AD@@@@@@@B@@ABB@@@AB@@@B@@A@@B@@AB@B@@@B@@A@@@@B@@@B@B@BBB@@BDBBB@@B@D@@@@A@@@AA@@A@@@A@AB@B@D@@ADAB@BCDAB@B@@AB@BA@@B@B@B@@AD@@@@@@@B@@@B@@@@@B@@@B@@@B@B@@@@@B@@AB@@C@@BAB@F@BBDBBHBFDB@B@B@@@B@@B@B@DAF@D@@@BA@GFABCDADAB@@A@CAA@KA@@ACA@CB@@EA@@A@@@@@ABC@ABC@CBA@@@EF@@@@@DAB@BA@@@CBE@A@A@@B@BB@@BDD@@ADB@@@BB@@@BADAB@B@B@@B@@@BAB@B@B@B@D@D@@ABABCB@BAB@BB@@@B@BAB@@@@BBBB@@AB@@@@B@@@B@B@FADAB@FCB@D@@@@@@BCBABCFAB@@B@@@BB@@B@@@BA@@@CBCDA@A@@@@BB@B@@BBBF@@@BDB@@BBB@HAB@@@@@@BAB@B@B@@@B@BB@@BBBDBBB@B@BAF@B@@@B@B@B@@@B@@@B@@A@@@@BB@@BB@@B@@@B@@@@BB@BB@@B@BBB@@@B@B@BAB@@@@B@BB@@B@ABAD@BA@@B@@@B@B@@@@@B@@AB@@ABABAB@@A@AB@@@B@B@BAB@BA@A@A@A@A@A@@BA@@@@@ABAB@BAB@DAB@@@BC@@B@@@BA@@B@@BB@B@BAB@@B@B@@@@@@B@@AD@BA@@@@BD@@@@@@@@BAB@@A@@@@BA@@@DB@@@@A@AB@@AB@@B@AB@B@@@@@B@@@D@BBD@@BB@@@@BAB@@@BB@@@@@BBB@B@@@B@DBB@@@B@@@@@@A@@D@B@@BB@B@@@B@@A@AB@@@@@B@@@B@B@B@@@BBB@B@B@B@@AB@@@BB@@BAB@@ABCB@@@B@B@BBD@@ABCD@@BB@@@@@BBB@@CB@BA@CB@@A@BH@@@B@@@@ABA@AB@B@@@B@@@@@@@B@BA@@DA@@B@@@@DBBB@@@@@B@@A@@@@@@A@@A@@@@@AB@@@A@@@@A@@@@@@B@B@@@@BB@@B@B@B@B@B@@@@@AB@@@B@@@@BAD@@@@B@B@BAD@B@BA@@@@BA@@@BD@@@BB@D@@@B@@@@B@DA@AD@B@B@@@@@BC@A@@@@B@@BD@@BB@B@@BB@BAB@B@@BBDFBB@@BBB@BBB@B@D@@BB@B@@@DBB@@BB@@BA@@BCDADA@@@@B@D@B@D@@@@CB@@DBB@D@B@B@@@B@B@@@@@@@@@B@@@B@DBF@B@B@@@@B@B@@B@@@D@B@@@BA@@B@B@B@BAB@B@@@DAB@B@B@@ABA@@D@@@B@B@B@BBBB@BF@@@B@BBBB@@@B@@@B@B@BB@BD@BB@@@B@@AB@BC@@B@@@D@DB@@@@B@@ABA@A@@@@DA@@B@BC@@FABADAD@B@@ABC@@BABABA@ABAB@@@@@@C@@B@@@BA@@@AA@@AB@@A@@B@BA@@@A@@@AB@D@B@@@BA@A@@@AA@BA@ADADABA@ABC@@BABAD@@ABABAB@B@@@BA@@BA@@B@DA@@@@B@BAB@BAD@@@B@@@B@DC@@@@DB@BB@B@B@BB@@@B@@@B@BAB@@@B@B@@BB@@B@DBB@BBB@@@BBBBBB@@@B@BBDBD@B@@@@@B@@DA@@B@BA@@F@@BB@B@BBDB@@BBB@@@@@@BAB@@AB@B@B@@@BAB@DA@@BA@@B@@DDB@@BB@BBB@BA@@DBBB@@@B@@@B@BB@@BBBB@BBD@D@B@DBBBBBFBDBB@DA@@DAB@@ABAFE@ABAB@@AFB@@@BB@D@@@BC@@BAB@BAJ@BA@@B@BBB@BB@B@DB@@B@@B@B@FBHBHD@BB@DD@@BB@BBBBBBB@BB@FAB@BBJBB@D@F@BABABA@@@A@@@A@@@A@A@ABA@A@ABE@@BA@AB@BAB@DC@AB@@@FB@@@ADCBADCBAB@@A@@BAB@B@B@B@DBBBB@@BBBB@BBBBDBBBD@DBFBFBHBDBDDFFFDBBBB@D@B@B@BAD@@@B@@B@@@AB@@@@BB@@@@B@@B@@AB@B@@A@@@@BB@@@@B@@@BABBBBB@BBBBD@BB@@@FABA@@B@BB@@BDB@BBBBBB@BD@B@B@BB@@DDD@DBBAB@DBBBBB@@B@BB@@@BBA@@B@@@@AB@D@B@@ABB@@@@B@@AB@BB@@B@@@@@B@B@BD@@B@@@@@BB@@@@@B@@@@HDB@B@@@B@FB@@@DBB@@@BBA@@@@B@BBB@@@B@@A@A@ABAB@F@@@@@@B@@B@@@@@B@B@@@@@B@@@@B@B@@@@@@B@@@@B@@B@@@H@B@B@@B@@@A@C@AB@@A@@@@@A@@@@D@@@BABA@ABC@A@A@ABAB@@ADBB@B@BAB@@@@A@@AAAA@@@@@AB@DA@@@@@EAAAA@@@AAABACA@A@@B@@@@A@BBB@@B@@@@@@BA@@@BB@@BB@BBD@@@@@@@E@E@@D@DB@BA@@B@@@B@B@B@@HA@@B@@@B@B@@@B@@@DB@D@BB@@@B@B@B@DD@@@@@ABA@@@AB@@AB@B@B@DD@@B@@ABAD@BA@@BA@A@ADEB@BC@@BA@@BAB@@@@A@@@@@AB@@AB@AAC@@@@CAE@A@@@ABA@@B@@AB@DE@@@@@@@CAA@@@CAA@A@ABC@@@@@CBA@@BADADABABA@@@CBA@ABAB@B@BAB@@AB@B@B@BBB@DBB@B@@@B@@@B@B@@@@@@A@@CACC@A@C@C@A@A@@@C@@@AB@@AB@@AD@@@@@@@A@@@@A@@@A@@B@@@B@B@B@@A@@@@@@@EB@@C@@@A@A@@@AA@@@AA@EAAAA@A@AAA@A@ABA@@@ABABA@A@@@A@@B@D@@@BBBBB@@@DBBDBBBBB@@BB@D@D@B@B@B@@@BABA@@B@B@FB@@BABABA@ABAB@@@AAAA@@A@@A@@BAB@@AB@@A@@@A@@@A@@@@@ABABA@@BAD@@@B@@B@@@D@@@B@@B@ABBB@@@B@@BAB@B@@BB@B@B@@@@B@@@@@@DB@@@B@@B@@@@A@_@AA@A@A@A@E@A@E@EAE@A@A@C@@AA@@AAA@CAE@@BA@@FCD@@A@A@C@@@C@A@A@@@@@A@A@@B@@A@@B@BAB@@ABA@@B@@@@@B@@@@@@@B@@AB@@AB@@@@A@@@AB@@A@A@@@A@A@@@@@@@@A@A@A@A@C@@@A@A@A@C@C@AAABC@@@A@@A@A@A@C@@@A@C@A@@FAB@B@B@B@@@@AB@@@BA@@B@@A@@BAB@@@@E@@BCDI@@@AB@BA@@BABA@@BA@AFCBC@@@A@@A@CAA@BA@@@A@ABA@ABA@ABA@@DABAFAB@B@BA@@BA@A@CBCDA@@@@A@@@@@@@@AB@@A@@@AAA@AAC@A@AA@@@@@CDCBAD@@@@@@A@@AAE@@DABCBA@@@A@ABC@AAA@A@@@A@@@AB@DA@A@A@A@@BAJCHE@AFCBC@@@A@@@A@@@AB@D@@@BAB@BA@C@@@AA@AA@A@@@CAC@@A@@@@@@@@@A@@BA@@@@@@@AA@@@@@@A@@@@B@@@@ABEBA@@@@@A@A@@@A@@@A@A@@@@@CAC@@AAB@@CAAAC@E@AAA@ABA@@@@ADE@CBC@@@@@AAC@ABCBAB@D@BA@@B@@@@A@@@A@@@@@@@A@@@@BA@@B@AA@@@A@@@A@@@@@@@@@@@@AA@@B@@@AA@@B@AA@@@@@@@@@A@@A@@@BAAA@@B@@@@@@AA@B@@@@@@AB@@@@@@@@BB@@AB@@B@AB@@BBA@B@AB@@@BB@@BAB@BAD@D@F@D@B@B@B@@@B@B@@@B@B@BABB@A@@@@DCBAB@B@B@@@@A@A@@BBBAA@@@@AB@@@B@BA@AA@@A@@@A@AB@@@B@@@@@@A@CA@E@GAKCCCCACIAUCK@@CGEKEIAI@C@EAK@@BUFIBC@@NKVE@@ZCF@N@PC@@ZG@@HCB@@A@AB@@CBAAGCK@@IMKEKE@@GCAE@E@@DIHIHGFE@I@GCEICEA@@OBM@G@AAECCEAC@@CBA@A@AA@@CBCBC@@@@B@B@D@BB@@BB@@B@@D@@BBB@@@B@@@@BBBB@@@@@B@BAB@@@BAD@B@@@@@@@BABAB@BABABCDAB@BAB@@@@A@@B@B@BBHB@@B@B@@A@ABA@@@@A@A@@A@@@CA@AA@@@A@CDC@@BA@C@C@C@@@AAAA@@@@A@@B@@@@@@A@@@@@@@@@A@@@AA@@@A@@@BA@A@@@A@@@AAA@@@@A@@@A@@@@AAA@CA@@@C@A@@@@A@CB@@@B@B@@A@@@C@@@@B@@BBB@@@@B@@@@A@C@A@@@A@@B@@BB@BA@@@@B@B@@@@A@@AA@@@@B@@@DBB@@@@C@@B@@@B@@@B@@BBBBB@@@BBBB@DBB@@DB@@BD@@@BA@@@@AAA@@A@@@@@A@@@@BA@@@ACC@@@@@@BB@BB@@A@@@A@@@BB@BA@@@ABA@@B@@A@@@AB@B@BA@ABABABAB@@AAAA@@@@AB@@@@AA@AA@C@C@@@AA@@@A@@CDA@A@@@A@@B@@@@A@@@A@@@A@@BA@@@@@@A@@@AA@@@A@C@@@B@BCA@@@ABABA@@@A@@@CA@@C@@AAAAA@AA@@@@@@A@A@@BA@@@@@A@A@@@ABC@A@A@@B@B@@@@@BB@@@@B@@@@ABC@A@@@C@@@@B@DB@@BB@BBAB@BAD@D@@@D@@@B@B@@@@@CB@@@B@BBB@BDB@BBB@B@@B@@@B@BCB@@A@@@AB@@ABC@@@@C@@@@A@A@C@@@A@@@@A@@BA@@@A@@@@@BA@@@@AA@@@A@@@@B@@@@@@@@A@@AAA@AA@@AA@@@C@A@ABA@@@A@@@@A@CBA@@@@AAA@@A@@@A@@@@B@@A@@A@A@A@C@@@@C@A@A@CBA@A@A@A@@@AAA@A@AB@@AA@@B@@AA@@@C@AA@@@@@C@@@@A@@@AB@AA@@@A@@@@@A@CAA@A@CA@A@@@C@A@A@@@ACCA@AC@A@@AAAA@@@@AA@@@AAB@@@@ADABCD@@A@@@A@@AAAACAAA@AA@A@AA@B@@A@@@@A@@@A@A@A@ABCBA@@AA@A@@@@@@B@@BB@@@B@@@@A@@@AB@@AB@@@@@BB@A@AB@B@B@@@@B@B@@@@@@B@D@B@B@D@B@@B@@B@@@DAB@BEBABA@AB@@"],"encodeOffsets":[[113161,38198]]}}],"UTF8Encoding":true});}));