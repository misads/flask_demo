(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('秀屿区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"350305","properties":{"name":"秀屿区","cp":[119.105494,25.31836],"childNum":27},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@@@BB@@B@@@@A@@AA@@A@@@@B"],["@@@@@@@@@AB@@@@@@A@A@@A@@@@@A@@@@@@B@@@B@@@@@@BB"],["@@@@@@B@@@@@B@B@@@@A@@@@@@@A@@@@A@@@A@@@AB@@@@@B"],["@@AD@@@@A@@@AB@@BBB@B@BA@AB@AA@AA@@@"],["@@@@@@DBB@B@B@@A@@@AA@@@A@A@A@A@@B@@"],["@@@B@@B@@@B@@BB@@@B@@@B@@A@@@@@A@@@AA@@@A@@@A@@@A@@@AB@@@@"],["@@@BB@BB@@B@@B@@@@@BB@BA@@@@@A@@@@@A@@@@B@@AAA@@@@A@@@A@@@C@A@A@@@@BB@"],["@@@B@@@@@B@@B@@@@B@@BB@@@A@@@@BA@BDB@@@@BA@@B@@@BA@A@A@AA@A@ABA@A@@@A@C@"],["@@@@@@DBFADABA@@AAAAE@CBAB@B@B"],["@@@@BBBB@@@BB@@B@B@@ABBB@@B@@ABC@@BA@@@A@A@@AA@@@A@@@AAAA@@@A@ABAD"],["@@D@B@B@@@D@B@D@B@B@@A@@@A@AA@@@@@AAA@C@@@ABA@CBA@ABA@A@A@A@@B@BB@B@B@BA"],["@@A@@@A@@BA@C@ABAB@BBBB@@@B@@AB@@@@BBBB@B@BADABA@C@@AAA@C@"],["@@AAB@@AB@@A@A@@A@@@A@AB@@@BA@@B@@A@@@@B@DBDBBB@@@B@BB@@B@B@BA@A@@@@@A@@@@AA@A@@@AA@A@A@"],["@@B@B@BBB@B@B@FBB@BA@@@A@AA@AAA@@@AA@AA@@ACA@BA@@AAA@@@@ABBB@@@B@@@@@BA@@BA@EDA@@@@B@@@@B@D@BA"],["@@AAAAACACA@C@A@@B@@BBABAD@DBBFDB@B@@AB@B@BA@C"],["@@ABAB@BBBBABB@BBD@BB@F@B@@A@@AA@@@AB@B@D@B@@@AAAA@@@@BA@@@A@@@AA@A@@A@@A@AB@@AB@@A@C@AAA@"],["@@@B@DBBD@D@BA@A@A@A@A@AB@B@B@@@@A@C@@BA@@@AA@A@ABAB@@AA@@ABAB@@A@@AA@A@@BAD@BBB"],["@@@@@@AAAAA@@@A@@AA@A@@D@BB@@B@B@@BB@B@@A@@@A@@BABBB@@B@DAB@@@B@@@B@B@@@@B@@@BB@@AB@BA@@@@@ABA@@@@AA@@BAA@@AA@@CA@ABA@"],["@@@B@D@@AA@@A@@BA@A@A@@B@B@@BBA@@B@BBB@@@B@B@@BD@BB@BBBA@@@AAABAB@@A@C@ABAB@@@BBB@B@BAA@AC@AA@A@BAA@A@@@AA@AA@"],["@@@B@@BBDBBA@@BA@@B@@@B@B@@@B@BA@@@AA@@@@A@@B@@A@@@AA@@A@@A@@AABAAA@@@C@A@EBABAB@BBBB@B@@B"],["@@MFKFCD@D@BB@D@DAFCHCHADA@A@CAAC@"],["@@ABA@A@@B@BBD@B@@ABA@A@AB@B@B@@BBB@JL@@B@@A@AAA@A@A@@B@B@BBBA@@@A@A@ACAAA@A@AAA@A@C@AA@"],["@@EBGFEFCF@B@DDBD@FAFCDEDG@CAAAA"],["@@A@C@AAA@ABED@BBB@B@BAB@BDBBBB@B@@B@B@@B@BABAHCBA@C@CGE"],["@@@BD@B@@A@AD@BBB@@ABAAADADA@AAA@C@ABAB@@C@@C@A@A@CBA@AAA@@@ABCA@AA@A@ABA@C@A@@BBDB@ABABBBBBFB@B@@BBBD@B"],["@@L@BDB@BHDFB@BABEBAB@DBB@BABCD@FBFHHDJ@FAFABC@CECA@AABABCBAAACCEAIACBE@ADCBCAACAABCDKAA@AG@EDCC@CDEHIBC@A@AA@AA@ABCB@@@@AEACAGAE@C@EBGACAEACCC@A@AB@DBB@BADCDGFIBEBAB@B@B@BA@AB@B@DBDBB@BA@KDC@C@CBCBIDCAC@ABCDABCBGDGDGBA@OBI@IBIDAJCJDJFFBFCFKL@D@HDDD@JED@DADDBHDHDDD@D@FAB@BB@HBJFHFBFADCDEBIAECA@CBAFCFBBBABBDDBD@FAHCDEAQ@KBC@CDIJEH@FBDA@ABE@ADCNCNEFA"],["@@AACAAE@C@E@EBCBCBABC@@AAAAAAAC@ABA@AD@D@DB@AB@@C@G@@AA@@C@AAA@@A@@AA@A@AAAA@@@A@AA@@@A@AACCC@AAAAA@CCM@CA@AAA@A@AA@ABABCBC@AAC@@C@CACBA@A@@D@D@DBFAB@B@D@B@BC@CB@BABCDCBC@C@ABAB@@@BBB@BD@B@BB@@@BADADCBODCDKHAB@@@BBBDBF@D@BAJAJCDAD@DBDDDD@B@B@@@B@@ADAD@BGHAD@BAB@@@BABABAB@BBB@@BBBBB@D@B@B@@BBBDFBFBBDBD@BBBBBBBDDBBBD@F@F@B@FBDB@D@BADCBEDG@uDsBMQSFMJEDGNMFEBA@ABCDEDIRCJ@LAJBL@DAD@FBDBLDDBDDBB@D@BADCJCRCJBHJLRDFBJBH@D@HAJBDDHFFFB@DBDCBIPEFADIAMAGADQCCC@iIC@GCC@EACAEEIEECCAC@C@CBABC@A@CAEAA@C@@BAD@DBH@BIJGHEF@BADBFDHHJFD@DBD@F@FBJHHBF@@BD@DDBFABADCDCBC@CBA@@BAD@DALDBBBDBBDDDH@BNBJCBADAF@D@B@@@@@@@IB@@@@DLFA@@DADLEB@@@@FR@BFV@B@F@BAB@@@@@@@@A@CBA@A@A@@B@@@@@B@@CBA@@@A@@@ABA@@@@B@B@@@@@@A@AAA@A@@@@BA@@BB@@B@@@B@B@@@B@B@@@@@B@@AB@@@B@@@BB@@@BA@@B@@B@@@B@B@@B@@@B@B@@@@B@AB@@B@@B@@@@BB@@@B@@A@@@B@@A@@BB@@AB@@@B@@@@@B@@A@BB@@@B@@@AB@B@B@@ABAB@@A@A@A@@BA@@@@@ABBB@@A@@@ABA@@@@@BB@@@@@B@@@@BB@@@@D@B@@@@@BB@@B@D@@@B@BA@@@@@@@@B@@B@B@@@B@@B@@B@@@@B@@B@@@@CBB@@@B@@B@B@@@@A@@BB@@@@DB@@@@A@@@@B@@@BBB@B@@@@B@B@@@BA@@@A@@B@@A@@B@@@@@B@B@B@@@B@@B@@@@@@BB@D@BB@@@ABB@@@@BB@@B@@@DAB@@@B@@@BB@B@AB@BA@B@@B@@@B@@@BB@@@@@C@@@@BB@@@A@@BAB@@@@A@@@@@@@@@@BA@@@@@@@@@A@@@@@AB@B@BB@ABB@AB@@BB@B@@@@AB@@A@@@@DB@BDBDB@@B@@@B@@@@@BA@A@AB@@@B@@@@@@@B@B@@@BB@@@@@@@A@@BBDB@@@B@@B@@@@AB@@@@ABA@@BA@@BC@@@A@@@@B@@@@AB@BAB@B@B@@@B@@A@@@@@@BA@@BAB@@@B@@B@@@@BCB@@@@@B@@@B@B@@@@@@A@@@@@AB@A@@A@@@@@A@A@A@@@A@@@AB@@A@@B@BAB@@@@@B@@@@@@BBA@@@@@@@@@B@@BA@@@B@@@@BB@@@A@@B@@B@@@@@ABB@A@@B@B@B@B@B@B@@AB@@@D@D@@@BB@ABA@@B@@AB@@@@A@@@@@@BABA@@B@B@BA@AB@BAB@@A@@@A@C@A@@@@@@B@@A@@@@BA@@B@@@BA@@BA@B@@B@@@DA@ABB@@@AB@@@DA@AB@BA@@A@@@@A@AB@@A@@B@BB@@BA@@A@@A@@@@BA@@@@@A@@BA@@B@@@@@BA@@BA@A@@B@@B@@@@@AB@@AB@@@@AD@@AAA@@B@@A@@AA@@B@AA@@@@@A@A@@AA@@BA@A@@@@B@@@B@@@B@@@@B@@B@@@@@BB@@@@B@@@BDBB@@@BB@@@@@BA@@@BB@@@@@@@BB@@@@@A@A@@@@@AD@@A@@B@BA@@BBRBL@^BF@P@@BRTFVB@DB@DBFAJ@FAH@BBDD@F@HALEHCHAJ@JBJBDBB@B@F@HADABABA@CBA@ALOBABEDEFELKNKNMDCDCDAJADAD@DABBB@B@B@B@BABABABA@ANEHAB@F@DBHDDBB@D@@@B@@A@AACCCAE@CAG@CBG@E@AAACCYIIEIAK@KBE@GACE@IEAGBC@EBEDABEBGBKEC@ABCDE@C@C@AAAC@ABCDE@CAC@EDEBE@CBGDKJMNEBCBA@A@AA@AAA@EAAACCEICCAAA@C@@@AB@BA@CAIEGEGECCAC@AACC@CAAAEAC@AB@B@B@D@BA@CB@B@B@BBBBD@BABEBkTIFEBWCCAGEKGICIAK@E@EBE@CBABABCBABEBGDEDEJQNQLGJCHBLAHEDMCEGACAAACA@AAA@C@AAA@@AAAAA@C@A@A@@AA@@AAAAA@@A@C@AAA@@AAA@CB@C@CJUDEDCBABCB@B@B@FBB@DADADCBABAB@BAD@BBB@D@BABABABC@AAE@A@EEC@@AAA@ABAA@@@ABCFCBABADAB@D@B@BBBBBDD@@@N@FCDG@GAG@E@EAIBG@EI[AC@K@GACAAC@A@A@AA@CAAAAA@AACACAA@"]],"encodeOffsets":[[[122434,25772]],[[122143,25765]],[[121933,25635]],[[122231,25718]],[[122423,25772]],[[122389,25759]],[[122461,25821]],[[122480,25849]],[[122266,25758]],[[122350,25860]],[[122474,25841]],[[122516,25833]],[[122134,25957]],[[121906,25704]],[[122128,25963]],[[122463,25792]],[[122449,25855]],[[122446,25869]],[[122237,25718]],[[122461,25848]],[[122240,25932]],[[122209,25915]],[[122329,25582]],[[121884,25776]],[[122388,25886]],[[122404,25807]],[[122003,25686]]]}}],"UTF8Encoding":true});}));