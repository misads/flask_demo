(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('临渭区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"610502","properties":{"name":"临渭区","cp":[109.510175,34.499314],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@AA@@AAAAAAEA@AA@AA@@@@A@A@A@A@EBA@ABA@CB@@@@@@@@A@@@A@@@@@A@@@@@@@@@BA@@A@@B@@@@CAA@@@A@AB@A@@@@@@@@@@AA@@@@@@@AA@A@@@@@AAE@AB@@@@AB@@AB@@@@@@B@@B@@@@@DA@@AA@@BAB@@@@@BB@@@@BABBB@@AB@@@@AC@@C@@@@BA@@@@@@@BA@@AA@@AB@@A@@@AB@BA@@@@B@@A@@@@@@A@@@@BA@AA@A@A@@@E@EBA@A@CDAB@ABA@@@@@@A@A@@@@@A@A@@B@B@@@@A@@AA@@BA@@@@@@@@@BB@B@@B@@@B@@@@B@@A@ABA@@B@B@@AB@BAB@B@@CHAB@@A@@@@@@@@B@B@BABA@DBABAAA@BB@BA@A@A@AAAB@@A@@B@@ABB@@DA@@@A@BFA@@A@CA@@BAABD@D@@AA@AA@@AA@AAA@BBC@A@AB@@ABA@G@C@@@CB@@A@@@@@A@@@BB@@@@@@B@ABA@@B@@@@@@BB@BB@@BA@@@@@@@@B@@@@@BB@@@@@@@@BA@B@@@@@@B@@@@B@@B@@A@B@@B@B@@A@@@@B@@A@@@ABA@@@A@@@BB@@@@@B@@@B@@A@@@@@@@ABB@@@@B@@@@A@@@@@@B@@@@@@B@@@AB@@@@A@@@@@@@@@@BB@A@@@@B@@@@@@@@ABB@B@@B@@@@@@@B@@@@AB@@B@A@@BA@B@@B@@@@@B@@@@BB@@A@A@@@@B@@@@@@B@@@B@B@A@@B@@A@@B@@B@B@@@@@@@@@AB@@@@@@B@@B@@@@@@@@A@@@@@@B@@@@BB@@B@@@@B@B@@@BA@@@@@DB@@@@A@@@@B@@@@@B@@@@@BB@@@@@A@@@@B@@B@@@B@@BB@@@AB@@@@BB@@@@@B@@@@@@@@BB@BBB@@A@@@@@@@@@A@BB@@@BA@@@@@@@A@@@@@@@@B@@A@@@B@@@@B@@A@@@@D@@B@@@@B@@@@@@A@BB@@@B@@B@@BB@@@B@ABB@AB@@@@@B@@B@@@B@BD@@@@@B@B@@@BA@A@@B@@BB@@B@B@@B@@@@ABBDA@A@@@@BA@@@B@B@B@@@@@@@@BB@@BA@A@@@@B@@BBBB@@B@@@@B@B@B@@B@@@@B@B@@A@@@@@A@A@@@@A@@@@A@@@@@@B@@@@AB@@@BB@@BA@@B@@@B@@@@@@D@B@@@B@@BA@A@AB@@AB@@B@@@@@@@A@@B@@A@C@C@CBC@C@GB@@BB@DEB@B@BBB@BB@@B@@@B@D@DAB@BCDA@@BA@A@A@CBC@A@@@@B@@@@@@A@@@A@@@@@A@A@A@@B@@ABA@@BABABABAB@F@DBB@BBB@B@@ADA@@@@BA@AB@@BB@@B@BBB@@@@BAB@BCB@BA@@B@@BH@BAB@@ABA@ADA@ABA@@@@BBD@BD@@BBFE@@CA@@A@@ADABAB@@@@AA@@@@@B@@@BA@@@CB@@ABA@E@E@CAAB@@@B@B@@@@BBAB@@@@A@A@@BD@AB@@@@A@@@@A@@A@A@A@@A@@@@@@@@AB@B@@AA@@BAA@A@@@@@A@@@@@@@@D@BBBAH@@@@AD@@D@@@@B@B@@A@@FFFBB@BBBBBCB@BBD@@D@F@@B@D@DB@@@B@B@H@B@@@HA@B@@BDAB@BBBC@@@@DCBACEB@C@@@@A@A@@B@BKBAE@@@F@@AE@@@E@B@DA@@C@@@DA@BJ@DBD@@BBA@@@@DG@@CA@@DB@BH@@A@BFA@@B@B@@AC@DA@ABB@@B@@@@@B@@A@@B@@@B@@@@B@B@@@B@@@@@A@@@@BABB@@@@@BA@@B@BBBBBAB@BB@@@@A@A@@@B@B@D@B@D@HBBBF@HBD@B@@@DBFBBBBBBBFF@BBA@GDB@BADFBDB@@BEJ@@FB@@CB@@HB@@GD@AH@BB@BI@@AJ@@F@BG@@B@AHHB@H@B@@AD@B@@@HCA@FAF@F@@@FCA@DCAAFA@@FD@AFC@AHAJ@FB@@DABB@@FC@@BAJC@ADI@AFA@@FF@@F@@B@@F@BB@@BD@@B@BA@B@@F@@@D@@BB@BADB@@@@@@DG@@FA@AF@@BB@DA@@BABA@@@@@@BE@@@@B@DB@@B@DF@ALD@@DAHA@AH@D@@A@AL@B@DE@@F@F@@D@@B@DFBF@F@@B@D@@KAAFC@@@@D@LB@AH@FC@@F@FH@AFF@BCB@B@F@ABB@AJE@@BADA@AD@@A@@@A@K@@FEA@F@D@BHB@@@B@B@BAFE@@DE@@BA@@D@@@@@B@DB@ALA@ALA@@FD@@FBBL@@@@@@D@B@@PB@@B@H@@@@CB@P@BB@@B@@@@DA@BBB@@@@C@@BB@B@@B@B@DDF@JB@@B@BB@BB@@@@DBBTFFB@C@A@@B@B@@@@B@D@@B@@C@@H@B@@D@@@B@@B@@@@D@BD@@@@@AF@BB@@@@BH@@@@A@@L@HB@@@@@A@@B@@@BC@A@@F@@@BC@@H@@@B@@B@@B@@AB@AB@BBB@ABC@@@@@@@@B@@@@@B@BBBED@@FB@@EPB@EJ@@@BCB@@AB@@@@@@ABC@B@DF@@CB@AB@BB@@@@CD@@@@FB@@I@AF@LBAD@@B@@CD@BEA@BEC@@C@E@@B@@AH@AFD@@DH@@CBB@ABG@EB@BBBEF@@FH@@@@@BC@ARB@AF@@CDB@E@@D@BENB@FF@@EH@@AD@B@PB@@@DB@ABHB@BAFI@@F@@AD@BA@@@@FF@D@B@B@@@HB@EJ@JB@FD@ALPB@DD@D@@DB@@D@BF@@FTBAFB@@@@CBA@@@CAA@@BA@@BCB@@@@@NBD@@F@@BE@I@ABAB@JBBCD@BEFB@D@@D@@CD@F@AFH@@D@BHBF@@ED@@EF@@A@AN@LB@@D@@@@@D@FB@FJ@@@JB@FF@@C@AD@@F@@DBH@AFF@@B@FB@@FD@@F@@F@@@@ENB@A@@B@@CNB@A@@AA@@AA@A@A@@BA@@B@@@@@@@BB@@@B@@@@B@@@B@@A@C@CBCA@G@EAA@@AA@@B@@A@@A@@@@@A@@B@@@@@AE@A@AAA@A@C@AA@@A@@@@F@BEDB@C@A@AA@BE@C@A@C@AEA@CGAA@A@@B@BA@@@@A@AA@AA@A@A@@@@@CAA@A@@@C@A@@BB@@@D@@@@@@@ABC@C@AE@A@BA@A@A@@AA@CACA@A@@ECIAEAECKEU@@AC@AACAC@A@CA@@AA@@A@@@AA@@A@@@A@@@@@@DA@@@@AA@@AC@A@CAA@A@@AA@@AA@@@@@@A@@@@B@D@@@@A@@@@@@A@@@A@AAA@@C@A@@@A@@AC@C@A@BA@AB@B@FBF@@@@AA@C@@@A@AA@@@A@AA@@ED@B@@@B@@@@A@A@@B@@@@B@BB@B@@@B@@AA@@@@A@@@A@@B@@A@@@@AAA@@@@AB@@@@@B@@@BA@@@A@@@A@A@@@@@@A@@@AD@@@@@A@@@A@A@@A@@A@@@A@@@@C@A@@@@AB@@@@@BA@@B@@@@A@A@@@@A@C@A@A@@AB@@@B@B@B@@@@A@@@A@@@AA@A@E@@A@@@@@@@@D@B@B@BA@@@@BEBB@A@@@AC@C@@@@AA@@@AAC@A@@@@@@A@@BA@AA@@@@@@A@@BA@@B@F@D@@@@@@C@G@@@@A@@B@B@@AAAA@@@A@A@@@A@@AAAA@@@@A@AA@@@@@E@@@ABEA@B@@@B@B@B@@B@@B@@C@C@@A@@A@C@A@@@@A@A@@@@A@@@A@E@@B@BA@@@AB@B@@@@A@A@C@@@A@@@A@@AA@AA@@@@@@@C@AAA@@ACAEEAC@@@A@AGAAAA@CBEBEBC@A@A@IEC@@BA@AB@B@BABABA@@@A@AACAEAAAE@A@A@EACACAA@@@A@CDC@A@GAE@GCGE@AAA@ABAB@BAFABABABA@E@ACECCEGAA@CAA@@EAEEAC@AAA@ABA@CBCBC@C@@@AB@BC@@BA@@@AA@AAAA@@@A@@DAB@@@BAAA@@A@AA@@@C@@@A@@B@@A@CB@@AB@@AB@@A@ABA@A@@@@@A@@@A@ABA@@@ABA@@@CAA@@@@@A@@@@B@@A@@@A@@B@@@@@@C@AAC@C@@@A@@@AA@@@A@A@A@A@A@CA@@A@@B@@@@A@A@B@@@A@@@AA@@A@@B@@@@@@AA@@A@@@@@@B@@@@@@A@@@@@A@@AA@@@AA@@@A@@@AB@@A@@@@@AA@A@@@@@@AB@@A@@@@@AA@@A@@@@@A@@A@A@ABAB@@A@@A@@@@AA@@@AAA@A@@@AAA@@BC@AA@@AAA@A@A@A@@BA@@@AAA@@@AB@BCB@@AA@AA@@BA@@@A@@AAAB@A@@ACA@AC@@BA@A@@@@A@AA@@@A@CB@@@@A@@@C@@A@AA@@@@@C@@@@BA@@@@BA@A@C@@AA@@AAA@@AA@@A@@BC@A@@A@AC@CA@@C@A@G@A@@@AAA@AAABE@A@@BC@@BA@A@@BA@@DA@@@@@A@CAA@A@@@A@@@@B@BA@@@A@@A@@ACA@A@@@@B@@@@@B@@AB@@@@A@C@A@AA@@@@A@A@CBABA@@BA@@BC@ADCDC@A@@B@BABA@@BABCDE@A@ABCBABA@@D@@@BB@@@@B@BA@@B@B@B@@A@AAA@A@@BA@A@@A@@@@AB@@@@@AA@@@@@@@@B@B@@@@A@@@@A@@@@@BABB@A@@@@AA@A@@BCBADCB@@ABA@@@A@C@A@A@@@@@CBA@A@@@@AA@@A@@@CB@@A@A@E@@@@ABA@@@@@AAC@A@A@@@A@A@@@A@@ECAACCAC@@BCDABABA@@BBB@BBDB@@@BBH@BAFBB@BDBHD@@@@@@BAA@AACE@A@@BAB@BA@@@A@@AA@A@@@AD@B@BA@@@A@@BCB@D@DAD@BBB@BA@@D@BA@@DABAB@BAB@DAFCDC@ABA@A@CB@@ABEBC@A@@AC@AA@@A@A@A@@BC@A@A@@@ACA@@@ABCBEBA@@@CBA@ABA@ABA@A@@BA@A@ABAB@BC@A@@FA@@BA@CB@@EA@@@CAAACA@@@@AACA@@A@A@A@C@A@@@CAA@C@A@ABA@@BA@CBCD@@@BA@ABABC@CBA@A@A@C@AAA@@@AAC@A@@@AAC@AAAA@@AA@@AA@@AAA@EBC@@@A@A@A@ABA@CBC@ABA@@BC@ABABABAB@@A@A@ABEBA@A@ABE@ABA@AB@@ABCB@@ABA@C@@@CBA@A@EDA@AB@@A@@@A@@@A@@@@BAB@BA@A@@@C@AB@@CAC@A@@AA@A@@@A@ABA@A@@BA@ABA@A@@@"],"encodeOffsets":[[112190,35086]]}}],"UTF8Encoding":true});}));