(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('太康县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"411627","properties":{"name":"太康县","cp":[114.837888,34.064463],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@@@@AA@@@AA@AA@@@@A@@@A@@@@CDCB@@ABC@A@EBEFEBABC@@@ABABA@CI@@@AA@@@A@@A@BA@@AA@C@@@@@@AC@@@A@@C@@C@@BA@C@@@A@@BG@@@@C@@E@@@@A@@G@@@@A@@BEACA@@A@@CB@A@@CBAB@@@BBBGB@B@@@@@@@@B@@B@B@@@@A@@B@@@B@@@@@BA@@@BB@@@@A@CBAE@@AE@@AB@@@@AB@@BD@@@@A@@BE@@AA@@@@AC@@DE@@@A@A@@@A@@@@C@A@@A@@@@B@B@@@B@@@AA@@@A@@AC@@@@@@@@A@@@A@@@@@@@C@@@@A@AAAA@@@AA@@A@A@@@@@A@AA@@B@@@F@@@@@B@@@@C@@@@AA@@@A@BBABC@ABCA@BA@AA@@@@A@A@@@A@@@@@EA@BA@@@@BA@@@@A@AA@C@@@CA@@@@@@A@@@@BAA@@A@@@@B@@@@C@@B@@E@@BA@A@@@AAA@G@@@A@A@@B@@A@@@C@@AA@@AA@@@@A@A@A@@K@AEEI@@E@@@@AA@@@ABCBBDB@@@DL@@A@@@AB@AAB@@C@@@IB@@@@A@@@AE@AA@AC@@@@EB@@@AA@O@I@E@E@@@@@@@A@@CA@A@A@@@AHAB@BA@@@AF@B@BI@@@AA@@@@@B@H@@WBB@@@@F@BB@@F@@E@A@A@@@@@C@BBE@E@@BA@C@A@@@@BA@@@@@@BC@@BA@@@@FEB@@@FGB@AAB@@@@@B@@A@A@GB@BE@@@A@@@@BA@@DB@@BD@@@@@@BA@@D@@@DC@@J@@DABAB@B@B@@D@@D@@AD@@@@@@J@@@HA@@BC@GAA@@@@DA@@@@D@@OBC@C@A@@BAH@@ABA@@@@A@AIB@@@G@@O@QBI@@@A@ED@@A@ALA@CB@@@@E@@DE@@DA@@FC@@AA@@FA@ABAB@@@@KA@GE@@CA@@AA@@CA@@AC@@EA@@C@@G@AE@@EBE@@@@@@@CB@@G@@FC@@@@BC@@B@BG@A@@D@@@@@@@D@@@@B@@H@@A@@@@@A@CBA@@B@@E@@@@@MB@@@B@D@VB@@DD@@@@B@DBB@J@BH@AJJ@@LAD@ND@@FD@@BJ@@CJB@L@@@D@@DABHABB@@@AJA@AB@@AF@@@BCV@@@@ABBB@@C@@@@FAAGF@AC@@@@@I@ADC@@DA@@@A@@DODAA@@A@@@@@E@BAA@@A@@@E@@@CE@@@EA@CA@@BC@A@@A@@@@EAG@@@IA@B@FAF@BABAHAD@B@B@@@DBB@B@B@@AJ@F@@HDPHF@DBB@@@@B@B@B@B@@A@ABABABAB@B@@@DABAD@@CHA@CFA@@BG@A@@@AB@@ABBBA@BB@@@@CF@F@@@BD@@DBF@H@F@@DP@@H@@@BB@@@BD@FA@DD@@AB@BF@D@DG@@BB@BTB@D@@@H@@@DAB@@@@@@AF@@@A@@EF@@AD@ACJ@@@@@H@@@D@@HJ@AL@@DAB@@@BA@@@BB@@@@@D@@@B@@@D@@B@@@@B@@@@@@FD@B@BAJB@@@@B@@AD@@@D@@BD@@@@DD@A@NB@AB@@@@BD@BAD@ADB@@C@@@D@BA@@D@B@DB@@F@BCA@DE@@@@JA@AD@@A@@@C@@@@@@D@@A@A@@@A@@B@B@DA@ADHC@BADH@@@BB@D@D@@C@BLCBABKACD@D@@D@@BH@@BB@@B@@@B@BA@AB@F@@@DA@@BA@A@@@CBCD@@@B@@B@@@BB@@@@@B@@BD@D@BBB@DD@@@AD@@H@@BD@@BD@@@@F@@B@@BF@@@D@@D@@F@@BB@@D@@D@@BC@@BJ@@AB@@AH@@@BA@CHG@@BCDA@ABAB@@@B@BABA@@FA@B@@@BD@@AB@@B@@@@@BD@@BB@@B@@@C@@D@@@D@@BB@@BB@@@H@BABBB@@@B@B@@E@ABAA@@A@@@AB@@AB@@AB@D@@@@BF@@A@ABBB@DA@@@DB@@B@@@DD@@@@AF@@@B@@ADB@@D@@@JAD@B@@AF@@A@@@AF@@AB@@ED@@DB@@DB@@@BA@B@@DA@A@@B@@ID@BCA@@CA@@@A@CB@@A@@@A@@DCB@@@AB@@A@@ACC@@@HA@@@AA@@C@@B@@CB@@CB@@D@@@FB@@E@@F@@CD@@A@@B@@B@@@AB@@DH@@AD@@BD@@@@B@@@@@@@BD@@HABH@HFBA@AB@@@B@@B@@B@@A@@B@@@@@D@@DH@@@B@@BD@@@B@BBB@D@B@@BD@@B@BB@@B@@@AB@@D@@@@@DA@@B@@C@BBC@A@@BCAA@@@A@@@@@@D@DH@@BB@@DD@@FF@@@@@H@@@D@@C@@B@@DD@BB@A@@B@@BH@B@AA@@D@ABB@B@@FD@@B@@D@FD@@B@@@H@@@@AB@@A@@B@@@B@@BD@@@J@@@F@@AH@@AF@@BB@@A@@@AB@@@@DB@@BB@@@@BF@@@F@@BA@@B@@B@@@D@@D@@@B@@B@@A@DB@@@D@@BH@@@@DB@@DB@@@@DAB@BC@A@@@@@@F@B@B@@BB@DA@@D@@B@@@B@@F@@@@B@@@@AB@@@H@BEJ@@ABAD@@A@@@CB@B@@ADBD@F@D@@C@@AA@A@@D@@CB@@AH@@A@@@C@@B@H@D@H@@@F@@@F@@EJ@@@B@@ET@F@@@B@@F@@@@@DB@@HA@@B@@@DA@@D@@@B@@D@@B@D@B@@@@C@@AA@@@C@@D@BXAF@@GJB@@B@@@D@@AF@@B@BD@VA@@D@D@@E@@@CC@@A@@NA@@@GA@@GDA@A@ACE@@B@F@@B@@@BB@@F@@@@F@@BB@@BD@D@BCB@@CB@@A@A@@B@@AD@@C@@BA@@@@@@B@F@@AB@@CB@@AB@@@@BFA@BB@@BD@@BA@A@BD@@@B@B@BBA@BA@@B@@@@B@@B@BB@BB@@@FB@D@@@@EB@@BBA@AB@@AF@@A@@@B@@@AB@@AHAA@CGAA@@A@BCA@@@@ABB@CB@BBDA@BDABBB@BDB@@DHCCGA@@A@@@A@@@GD@@@B@@@@@B@@BB@B@@BA@BB@@BBB@AAD@BDD@@HB@@ADA@CD@@AB@@B@@@@D@@ABA@@B@@DDA@D@B@AFADA@BB@B@@DDA@@BA@DHAD@@CB@@EB@B@D@HMFO@C@@B@D@@ABAJ@@A@AJCB@F@HBFB@@@CFABBNABDDA@AB@@@B@@A@@@B@@@CB@@@@@@@D@@BD@@@@AB@@A@CBAD@@AD@@ED@@BF@@GD@B@@EB@BCB@@@B@B@B@DDFDD@BBD@B@@@DCAA@@@AB@AGGBAC@@EBAAGBAGB@@AB@@BF@@DHAAG@AB@@AB@B@@AE@@CC@AC@@C@@CDA@DF@@GD@@@D@@EB@@BB@@DLI@D@@H@BC@CC@@G@A@E@@@C@@A@@CJ@@ACABCC@@AB@@AD@@AE@@A@@@@D@@AIB@EA@@CA@@BA@@AC@@A@@@A@@@AB@@EA@@@A@@@@@@CA@@A@CD@AG@A@@AC@CB@@@@@@G@@A@@CA@@BA@@AA@@@A@@AC@@@C@@A@@@AB@@AD@@A@@@C@@@A@@@@B@@B@@@BB@@ED@@@@@@@B@B@@G@@@@@AA@@A@@@AA@@@B@@A@@BC@@@A@@@AD@@@@@@I@@C@@@A@@@C@@AA@@B@@@@@@A@@@C@@CC@@@A@@AD@@@B@@C@@@@@@@C@B@A@A@C@@@ED@@AB@@@BAAA@@ABA@@A@@@@@@@@FAAAB@@AA@@C@@B@@CA@ACA@@BC@@CACB@BB@@@A@@@@@BBAB@@AB@@A@@@CA@@AA@@C@@AAF@@@B@@@B@@@@@@AH@FA@@@AB@@CH@@@BAFCBC@@@A@@AAB@@@@CB@AAA@A@@A@A@@@ACAC@@EA@BACC@AAA@ACAAAAEAAAE@CAA@AAA@@@AEB@DA@@@EB@DC@@C@@@@@@@AA@@BAA@AA@@E@@@C@@_DC@M@K@C@C@C@AAC@@@@OZ@BC@@BA@CACCB@AB@@CB@AAC@@E@@@@@AC@@@AA@AA@@A@@@@@CA@@B@@@@A@@@E@@C@@@@AA@CA@@@C@@@@@@C@@@CA@@C@@GB@CG@@CAB@@@A@AA@@C@@@CF@@EB@B@BABAA@AG@@A@@AA@@DA@@AC@@E@@@FAA@A@C@@@@B@AEB@@I@@@@@@@AB@@A@A@@E@@A@@AAA@DD@BA@@AA@A@E@@BC@@A@@A@@A@A@ADACAA@@A@@@C@@@@@@@@DAD@@GA@C@@@D@@AB@@@@@@@@@@A@@@@@@B@@AB@BAB@@BB@@CF@BBB@@BB@BB@@B@@BD@@CFC@@FA@CEB@GA@ACB@ACA@@AB@@A@@A@AA@@@@@@@AGBUBK@G@K@A@E@AAGECAAAA@@@@@A@CB@@AB@BA@@@E@@DE@@@C@@A@@@AA@@@@GB@@E@@@CA@@AF@@A@@AEE@@AA@@C@@E@A@@B@@A@@A@@A@A@@@@A@A@AA@@A@@B@@@@C@@AAA@C@G@A@ABCBC@@@@B@@@BA@@@C@@AE@@CA@AA@@A@@C@AA@@AABADA@@BAB@@@BA@DB@@A@@@E@@D@@@@@@AD@@I@@H@@@@@@A@@@@CA@@@@@A@@B@B@@B@@DB@@BABA@E@@@@AA@G@@@@@C@@AA@@AC@@B@@@B@B@@B@@BIB@CE@@@AA@@A@@@@@"],"encodeOffsets":[[117697,34727]]}}],"UTF8Encoding":true});}));