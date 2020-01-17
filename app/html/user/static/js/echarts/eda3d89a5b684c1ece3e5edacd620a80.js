(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('天台县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"331023","properties":{"name":"天台县","cp":[121.006595,29.144064],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@A@A@A@@BABA@@@@A@@AA@@@@ABA@A@A@@A@@A@@@@AA@@@@B@@@BAAA@@@@@@B@@@@A@@@@@@@A@@@@B@@@@@@A@@@A@@@AA@@@@A@@@A@A@@AAA@@@A@@A@A@A@@@@@A@@@@@@AA@A@@@@@AD@@@BAC@@@A@@@A@@AA@@BC@@@@@A@A@@AA@A@AA@@AAAAAAAAAAAC@@@A@@AA@A@@A@@A@@@@@@A@A@A@A@@AA@@@@BA@@A@@B@@@@@B@BA@@@A@A@@@@A@A@@@A@@@@C@@@@AAA@@AAA@@@A@@@A@@AA@@@@@@@@@@AAA@@B@@A@@@BA@@B@@A@@AA@@@@A@A@@@@A@@@A@@@@DC@@D@@AB@@@@@@@CC@@@@@@@AAB@A@@@A@@@@A@@AA@@@@A@@A@@AA@@@A@@A@A@AA@@@@@A@@A@@@A@@A@@@AAAAA@@A@A@@A@AA@A@A@@@C@A@A@A@C@@AA@@C@@A@@@A@@@A@@AA@@@@@@@@AA@@AA@@@A@@A@A@@@A@@@@A@@A@A@@@AB@@A@@@@@C@@@A@@@A@@@@@ABBB@@@B@B@B@@A@@@@@@A@@AA@@A@A@AA@@@@@A@@@@A@@@@@A@A@@@AA@BA@A@@@@@@@A@@@A@@@A@@BAA@@AB@BABB@@BB@@BAB@BAB@@@BB@BDA@A@@B@@BB@@@B@@ABAB@B@B@@C@A@@@@@AAC@@@A@@@@@A@@@A@@@@B@@CBA@@BAAABA@@@@@A@@@@B@@@B@@AA@@A@@@AA@AAAA@AAA@@A@@@A@@@A@@A@@AAAA@@@@@AB@BAB@B@B@BAB@@C@@BAB@BA@@@@B@@AB@@A@@AA@AAA@CA@@@A@@A@@@A@A@A@@AA@@@@AA@A@ABA@@@AA@@ABA@CA@@ABA@A@AB@@@B@@ABCB@@@@BDB@@BB@@B@@A@@B@B@@AB@@@BA@AB@@AA@@A@A@C@@@AB@@@@A@@BA@@@C@@@@@CBA@@@AB@@AB@@A@A@@@CBA@A@A@@@AA@@A@@BA@@BA@@@@@@B@@@B@@@BA@AB@@AA@@A@A@A@AA@BA@@@AAA@@@A@A@@A@A@AA@@@@@A@A@AAC@@A@A@@@@A@AA@@AA@@@@@AA@@A@AA@BAAA@@A@@AAA@@BA@AAA@@@C@@@AA@AA@@AA@AAAA@@@AA@C@A@A@@A@A@ECA@@@C@@AA@AA@A@@@A@AA@@@A@A@@BAA@@@@A@@@A@@AA@@@A@@@A@@AA@CA@CAAA@A@@@@@A@@@@@A@@@A@@AA@@@A@A@@AA@@A@@ABA@@AA@A@A@@@AB@B@@AB@BA@@@@BABBBBB@@CBA@@@A@@@A@@@A@A@@@A@@@@B@@AB@BADA@AA@@A@A@@@@@@A@@A@A@AB@@ABC@AA@AA@@@A@A@A@C@@@A@@B@B@BA@@B@@@@AA@BA@@@@@AAAAA@@@C@@@C@A@CB@@A@AAC@@@AB@@@@AB@@AB@@A@AA@@@@@A@@AA@@@A@@@@A@A@AAA@A@C@@@A@@@AA@@@@A@AB@@AB@@@BA@@B@@A@@BAAABA@@B@@@@@@@B@@A@A@AB@@AA@@ABAA@@@A@@@@AA@@AB@@CBAA@@A@@A@@AAA@A@A@@@ACAA@C@@AA@@AA@@@C@@BA@@AAA@@@CCAA@A@@@@@A@@AAAA@A@A@@AA@@@@A@A@A@AA@@A@A@@AA@@@AA@@A@@@A@@@@@A@AA@AA@@@A@A@@A@@A@@@@@A@@B@@ABA@@@A@AAA@A@@@AAA@@B@AA@AB@AA@A@@@AAA@A@@BA@@@A@@@@@ACAA@@@AA@@@A@@@A@A@@@AAA@@@AA@@A@A@@AA@@@@AA@AAAA@AA@AAAAAA@@AA@@AAAA@@@A@C@@@A@@CC@@@AA@AA@A@@@AA@@@@@C@AA@@@@A@ECA@@AA@A@A@@A@@A@@@A@A@AA@@@AA@@AA@AAA@AAAAA@A@A@@@AA@@@AA@@A@@@A@@AABA@@@AA@@@@AA@@AB@@AA@@ACA@A@A@@@@AAA@A@@AAA@@AA@@EBA@A@@@A@AACA@@AB@@A@AAC@@B@@CA@@@@@BAB@@@B@@@@@@A@@B@@AB@@@@A@@@ABA@@@@B@@@@@@@@A@BB@@AB@@A@@AAB@@AA@@@A@BAB@@@@A@@BA@@@@@A@@@A@@@A@AAA@@@AB@@A@@@A@A@@@@B@@A@@B@@AB@@@BAB@@@B@BA@@B@@AB@@A@@@@BA@AB@@CAA@A@@DAB@B@BA@@B@@@B@BB@@@@B@@@B@@@DB@@@ABA@@@@B@B@BA@A@@@A@@@AB@B@@@@BB@@@B@@ABAD@B@@A@@@@@ACA@@@A@@@A@A@@@C@A@@B@@AA@@AA@AA@@@@@@@A@@@AA@@A@@@@@@B@B@@@BA@@CAAA@AA@@AAA@@A@@AA@@AA@@@@BAA@@AB@AA@A@@@@C@@@A@AA@@@@A@@@@@@@A@A@@@A@@@@BAB@@@B@@@BA@@@@BA@@@@@ABA@@A@@AA@@A@@AAA@@@AA@@@A@@AA@@@@AC@@A@@A@@@@@@@A@A@AAA@@@ABA@@AE@ABA@A@@AA@EAAAABB@@@@BAB@B@@@@BBB@@@B@@@B@FBD@@@@B@@DB@@@B@@@B@@@DA@@BBBA@@@AB@@A@AB@D@@A@@A@@@@ABABAD@@BB@@@B@@BB@@@@@BB@A@@B@@@@@B@@B@B@@B@B@@@BB@@BBB@@B@BB@@@@@B@B@BA@@BA@@@@@@B@B@@@@@@AB@@A@@@@A@@@@A@@@@A@@AA@@@@@@@A@@@@@@A@ABA@@@@B@@@BBB@@A@@B@@@@@BB@@B@@@B@@BB@@B@@B@B@@B@@B@@@@BD@B@BA@EA@@A@A@@B@@AB@BA@@@BD@@@BA@@C@@A@@@A@@@@@@B@@@B@@@D@BBA@@@@@@ABDB@@ABAD@@@@@@AA@@BAA@@@EA@BA@@@A@AAAA@A@@@A@@@A@@B@@A@@@A@A@@@A@@A@A@@@@A@@B@BA@AAAC@@AB@@@@@@AC@@@A@A@@B@@A@@BAB@@@B@@@@A@@@AD@@@@@@AB@@A@A@@@@B@@@B@B@@AB@@@DBB@@ABAB@B@B@@@B@@AB@@@@A@@@@@@@@@@B@@BBB@@@@A@@@@B@BA@@BA@A@@@@@B@@DBB@@@@BB@@@@@@B@@BDA@@BA@@BA@@@A@AB@@ABC@@@ABABCB@@@B@@B@B@BA@@BAB@B@B@@@@@@@@B@@@B@@@B@@ABA@B@B@@BB@D@B@@@DB@@@@A@@BABB@@BB@BB@@A@@B@@@@AB@B@B@BB@@@BBBB@B@D@B@B@B@@B@@BAD@B@@A@@@ABAB@B@@ABA@@@@@AB@@ABABABA@@BA@@B@@@B@@@B@B@@@@@BBB@B@@@@@@@BBA@@BB@@BB@@@@BB@ABBB@@BBBB@B@BB@@BABBB@B@D@@@@@@B@@BB@BB@@BB@@B@@B@@B@BB@BBB@B@BBAB@@B@@ABB@@@@B@@@@@@@BBB@A@@@@@CB@@@@@@AD@BB@BBBB@BBB@B@@@BB@AB@@BB@@BA@@B@@@@AB@@@@A@ABA@@BA@@@@@AB@D@@@DBB@BB@AB@AA@@@A@@@BB@@@B@B@B@@A@@BBB@B@@@BB@B@@@BB@BB@@@@@B@BBB@@@@BB@@@BAB@@@BAB@B@@A@A@AB@AE@C@@@A@@B@B@@@BA@@B@@@@A@A@@@@A@AAB@B@@A@A@A@@@@@AB@B@D@@@@AAA@@@AAAB@AA@@ACAA@@A@@@@A@@B@@@D@B@@@@@BA@@B@@@B@@@@@@@@E@ABAA@B@@A@@BB@@B@@B@B@@@@@@B@@ABABA@@BA@@B@B@BB@@@@@@B@BBD@@@@@@B@@@B@B@@@B@D@@@B@@@@@@BAB@@@@@B@@B@@BBBB@@B@@@@AB@BD@@@B@@@BBBB@@@B@@AB@@@@AA@@AB@@@B@@B@@@B@@@B@B@BB@@@@D@@BBBBABBB@BB@@@BB@B@BB@@B@@@B@@@@B@@BB@@B@@@AB@BB@DBB@@@BB@@B@@BB@@@@B@@B@@ABB@@BB@@@@@B@@B@@@BB@@B@B@@@@@@@@B@DB@@B@@ABB@ABBB@B@B@@BBB@B@B@B@BB@@B@BB@@@@@B@@@@B@@B@@@B@@ABA@@B@@AB@BA@@BDABA@@@A@@BA@@@@@BBB@B@@@@BB@@@DB@@@B@@@@@@@@@@@@@@@@@@A@@@A@@BA@@B@@@BCBA@@@@@@BB@@BB@@B@BBBB@@@@@@@BA@@@@B@@@@A@@B@@@@A@@BA@@B@@@@AB@B@@@@BBA@@@@BB@BBB@@@B@B@@B@@BB@@A@ABA@@@@D@@@@@B@@B@B@B@@B@B@@B@B@@@B@B@@@@A@@B@@B@@@BB@AB@@A@@@@@@@BB@BB@@BAB@B@@A@A@@B@@B@@BBA@BB@@@BBB@@@@@B@B@B@B@@@B@B@@BB@@BBBB@@BD@@B@@@BD@@@@BB@@@B@BBD@BB@BB@@@BB@@BABB@@B@@A@@@A@AB@@@B@B@B@B@B@@@@A@@@ABA@ABAFBB@BB@@@@@AB@B@@@@@BB@@B@@@B@DB@@B@@BB@@@BBBBB@@@BBBBB@@@B@@@@ABB@@B@@@@B@@@BB@@@BB@@BDB@B@@@@B@@@@@@@@B@@B@B@@@@@BBD@@B@@@B@@@@BBB@@@BB@B@@@@B@@B@@DB@@@B@@@@@B@@B@@B@B@@AB@@B@ABB@@B@@@BA@@BABA@@@AB@@A@@@A@@B@BC@@@@@@@AAABA@@@@B@B@@@BAD@@@BABB@A@@@@B@@BB@@@@BB@@@@AB@B@DCBA@@BABA@@@@B@B@@@@B@@B@BBD@B@B@@@BB@@@@A@@BB@@B@@@B@@@@@B@@DB@@@BB@@B@@@B@@AB@@@B@@B@B@@@@@@BA@ABABAB@@D@D@B@@@@BEDAA@@AB@@A@CF@@BB@@ABAB@@@B@@A@@BBB@BB@BB@@BB@@@B@BDABB@BB@@@B@B@@AB@@BB@@@BB@ABBBBB@@B@@@@@B@D@B@BAD@BABBB@@@@@@@B@@B@@@@@BB@@@@@@@@@BBBAB@BA@@@B@BB@@@B@B@@BB@B@@BBB@BB@@BB@B@@B@@BBB@@@@B@@A@@@A@@@ABA@@@@@@BBB@@@@@BB@@@BD@AB@B@@@@@@@@@@B@@@@@B@@@A@@@@A@@@AB@B@@A@@B@@@BA@@B@@@@@BB@@@@@@@AB@@@@A@@@@B@@A@@@@@@@A@@@A@@@@@@A@@@@A@@@@@A@A@ABB@@BA@@@BBAB@@@@@B@@@BB@AB@BA@@@@BB@@BB@B@@B@@@@@@@BAB@B@B@@@@BB@BC@@B@B@@A@@@AB@A@BA@@@CBAB@BA@@@BB@B@@@@D@B@B@@BB@@@B@@@@@B@@@B@@@@D@BAB@B@BB@@@B@B@B@@BBB@@BBB@@@B@BBB@@@@DA@@B@@@@ABAB@@@B@@BB@@@@@@B@@ABB@AB@BB@BAB@@A@@@D@@@@B@BB@@@@BB@B@BBB@@BB@@ABAB@B@@@B@@BB@@B@@@@@@@B@@D@BB@AB@@@@BB@@BABAB@@B@@@@B@@@@@B@@@BBBA@@B@@@@A@@B@@A@@BA@A@@AAA@@@AA@@AA@A@@@ABAB@B@DA@@BA@@B@@@@@BB@@@@@BB@B@@@@@D@BABB@@BBB@@BABAB@@B@@BD@F@B@DD@@AB@BA@@BA@@BA@@B@@@B@@B@B@B@@@B@B@B@@@@A@@@@BAB@BBB@D@DB@C@@B@@@BB@@BBDB@@@@BAB@@AB@@C@@@@B@@@B@@@@A@@BA@@BA@A@@AA@A@@@ABAAA@@B@BAB@B@BBB@DABBB@B@@@BBD@@@B@BAB@@@BB@@BB@@B@B@@BBBDB@@BB@@ADB@B@@@@@B@BB@@@@@B@B@@@@@@@@B@AB@@BB@@@B@@@@A@@B@@B@@B@@D@@@@A@@B@BB@@@@@BBA@@BAD@BA@@@@@@B@@@B@B@D@B@BA@@BBB@B@@@B@B@@@BAB@@@B@@A@A@@@AB@B@@AB@@AD@BA@B@B@@@@@BDB@@@@B@B@B@BB@@@@BADA@@@@DABBB@B@@@@@BA@ADAAC@@@A@@A@@@@A@@@A@@D@@@@@@@@@B@@@BA@@A@@A@@@@AABA@@BABAB@@@B@BAD@B@B@@AB@@@B@@@B@D@B@@@BB@@BBBB@@@BBB@@@B@B@D@@BBAB@B@@@B@@B@BD@@BB@B@@@BC@@B@@ADAB@B@B@B@B@@@B@@@B@@@B@@@@@BBB@@@@DBBB@@@@B@@B@@@BB@@BB@@@B@D@D@@@B@@@B@@@D@@@B@B@BAB@@AB@@@B@@@B@BAB@B@@A@AB@B@@ADAB@@AB@B@B@@BB@BB@@BA@@B@@B@@B@@B@BB@@@BB@@@BBB@BB@@BB@@B@@BBB@BDB@@BB@B@@@@A@A@@@AA@@@AA@@@A@A@@A@@A@A@A@A@@@@@AAC@AB@@A@A@@@A@@@A@@@AD@B@BA@@BA@@B@B@@AB@@@B@@@@@B@B@@@@B@@@@BD@@@@B@@@@B@@@@@@@@B@FB@@@BB@@@@@B@@@@@BABAB@@@@@BA@@@AB@@AB@@@@@@@B@BAB@B@B@@@B@@@@@@AA@@@@AA@@@@A@@@@A@@@@@@@A@C@A@@A@A@@BABEBC@@@@@@DBHDBB@@B@@@BAB@BC@@BA@AACAA@A@A@@@@@AB@@A@@A@AAA@ECA@AAAA@@@@A@@@A@@@A@@@A@@@@@A@@A@@ACACC@@ACAEC@@B@@AB@AA@@BA@@BB@A@@BAA@@@@@A@@@@AA@@@@@@A@@B@@@@@B@@@AA@@A@@A@@@@A@@@@@@A@AA@@@@AAA@A@A@A@@A@BAAA@@BCBA@@BC@A@@@@D@@@@@BA@@A@@@@A@@B@@@B@@A@@A@@@A@@@@A@C@AAA@@A@@@A@@BB@A@@@@B@@AA@@@B@@AB@@A@AB@@A@A@A@@@A@AA@@A@@@@AB@@A@C@AAAA@AA@A@AB@@@AABC@AA@AA@@AA@@AABAB@B@B@B@B@D@@AB@@AAAAABA@@@A@A@@AA@@@@B@BAB@AA@A@@BA@A@A@AA@@@@@@BA@@@A@@BA@ABA@@@@@@@@A@@B@@ABA@A@ABA@C@@AA@A@@B@@A@AB@@AB@@A@@ACAABAA@@AA@AA@AAA@A@A@@@@@A@@@A@A@@B@B@BAB@@@B@B@DC@@@@BAB@@@BB@@DBB@B@D@B@B@@AB@@@@@B@@@B@B@@@D@@AB@BA@BB@@@@BB@@@@BB@@@B@@@@@@@B@BA@@@@@@@AB@@@B@B@@@@@B@@@BB@@@BB@B@@BBA@@@@@@B@B@B@B@@B@@@BB@@@B@@@@@B@BA@A@B@@@B@@B@@BB@@BB@@@BA@BB@@@@@B@B@@AB@@@AA@@@A@@@@@@AA@@@A@@A@@AB@B@B@BAB@@@@@B@@@B@@@@@@A@@A@@AB@@@@A@A@@BA@@BAB@@@@@BA@@@@D@BA@@B@B@AA@C@@AA@A@C@@BA@@A@@A@A@@AA@A@A@A@AB@@@@@@A@@@AD@BA@AB@@AB@B@@AB@@@B@@A@@DA@@BA@@@AB@@@BA@A@@@@@@@AB@@@@@B@@AB@@@@@@@@@BAB@@@BA@@@@@A@A@A@@AA@@@A@@@@@@@@@@BA@@@@B@@@BABA@@BAB@@@BB@@B@@@@@BA@@@@B@@@@@@@@AB@B@BAB@@@AAAC@AA@AAA@A@@@AA@@AA@@BA@A@@@AD@BA@@@@BA@@@A@AA@@@@@@A@@AA@@B@A@@A@@A@@@@ABC@@@A@A@A@EA@@@A@@CAA@A@@@AB@@A@@BA@@@AB@A@@@C@AA@A@@A@@@"],"encodeOffsets":[[124165,29819]]}}],"UTF8Encoding":true});}));