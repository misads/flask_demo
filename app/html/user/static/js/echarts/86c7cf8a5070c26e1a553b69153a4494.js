(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('凤县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"610330","properties":{"name":"凤县","cp":[106.515803,33.91091],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@@A@AB@B@@A@@@A@@@ABA@@@AB@@@B@@@B@@@B@@CBA@AFE@AB@@AB@@ABCAA@@ACAAB@AC@AA@C@A@E@AB@@AAA@C@A@AA@@A@@A@@AA@A@@@AA@C@CAA@@A@@@A@EAC@A@@AAAA@A@@ABA@@A@ACAA@@A@A@@@@AA@ABA@@BA@@B@@@@A@A@A@A@CAC@AAA@A@A@A@A@A@@AAA@AAA@@A@@AAA@@BA@AB@BA@@A@@A@@@CA@@@@AA@@AAC@AC@@C@C@@ACA@A@C@AA@@AAA@A@ACBE@E@ABA@A@CBABAB@@ADA@CBA@@@@BA@BDDB@DAFAFBF@HAD@DDB@BCNCJAJAHEH@@ELCDCHGHCJCHELEFCJGJGL@FEHIHGDKFE@G@C@EBI@G@K@IDMFGD@@CJAFBBBFDFBFBHBF@JAF@HBH@BBF@F@H@F@HAFAFCHAFCBADGDE@IDEDGF@BAFBHDJFJBJBH@@@HHFFFFDHDHFLDFHAF@JABAFCHEH@@CFIFCB@BABAB@B@DAB@B@D@BABA@A@A@A@C@A@AB@BAB@BAB@BAB@BA@A@CAC@@A@@@A@@B@FA@@B@@AAA@@AAA@AAEAAA@@ABA@@@A@@@@A@AB@@AB@B@B@BA@@@@@AC@CAQEI@I@K@EBCDADABCD@FAJBJ@B@LABADAFADABAB@@ABCD@B@DHD@BFBD@BB@@DBBBBB@BBBDBDDDBDDBBBFDDDB@@DBFDBBBDDJDFHFDHHDHFDHFDDFHJBBBDDHDL@H@F@HAFCHAHCHCJ@JAJDHFHFFJDBBDBJHHHHFHJDD@@BHBH@HAJ@JAHCH@JALAJ@HDBHBB@HDHBJAL@H@H@L@L@JD@@B@DA@@B@B@BBB@DAB@@B@DBDHLDH@B@@B@B@@@@@B@AB@BLN@BFJBBB@DB@B@BBB@FBDCFCDCFCFCFAHAFCJAL@HENAHALAJAJCLCJAJ@FCFEJCJEFIHGFGBGBGCCCECCCEECACCAAMCGAMDAFAF@@@FBHDHFFFHHJHJHLDHB@FFDHJFJ@HAD@HCFAJCJ@LADALAJAHAFEDGDMFSFGHANADALD@@HDFDFDHDJBJAD@DCFCFEBCDCDCHC@AFAJ@D@HAFDHBFDHFDDFHDHBFDFBFBH@@BDDHFHFHDDLK@@B@F@B@B@@AB@FCDAB@B@@AB@@A@@DAB@D@B@@BB@B@D@@@DABABABA@AB@B@B@FBFDB@@@FDD@@@BD@F@B@B@B@BDB@@@DBB@@B@@@@BB@@BB@B@B@@@DBBBBBDD@@A@BB@B@@BF@B@@BB@@B@B@@@BAB@@@DA@@BA@@DAB@BBB@BAB@@@B@@@B@BB@D@@DB@@@@BABABABA@@B@BB@@D@B@D@B@@@B@B@@A@ABAB@BABABAB@@A@@@@BB@@B@B@@@D@@@BBB@B@@@B@@@D@D@D@B@BBB@@@B@@@B@H@B@@@B@@@@@@A@A@@@ABCBA@ADCBAB@@@D@BBB@B@@@B@@A@@FCFCB@@@@ABA@A@@BABAB@BA@@BBBBDBB@BB@B@@B@@@BAB@@A@@@AB@B@BA@@B@@@@@@B@B@B@BBBBB@@@BA@@B@B@@@B@@B@@@AD@@BB@B@B@@@B@@@B@@@B@@D@BBB@D@@@BADABAB@B@B@BBD@@@DABAB@@@B@B@DBBBD@@@D@@@@@BABBDBD@@BD@@AD@DA@AB@@ABA@A@@@A@@BABA@@D@B@B@HAB@DA@@DA@@@AB@@@AA@@@A@@BADABABAB@BCB@@@B@B@B@BABAB@BA@AAC@@BC@A@@@A@C@AAC@ABA@A@AAA@@@@BA@A@A@A@@AA@A@A@A@@BA@A@@BCBA@@BA@AB@B@B@B@D@D@B@BBB@@BF@D@FAF@B@FCBAB@@@B@B@FB@@BABCB@B@@@BAB@DAF@DA@ABA@@B@@AB@BA@@B@@A@@BA@@@A@@AA@@@@@@D@BB@@B@@AD@@@D@FAD@@@BA@@B@DA@@@ABA@A@@@A@@@@@@BA@A@A@A@@BA@@@ABAB@AC@CB@@A@A@@@ABA@@B@@A@@@AB@@C@AB@@@BAB@BAB@@@FBD@D@B@B@B@DAB@B@@@@C@@AA@A@A@A@AAA@A@AA@@ABC@C@ABAB@@A@@@AB@BA@@@A@A@@BAB@B@DAB@@@@A@@@AAAAA@CAA@A@@B@BA@@B@@A@@BA@@@@@A@@DABA@@B@HDB@FBB@@@B@BAFG@A@A@AB@@A@A@@BA@@BA@@@AA@@C@@@A@@@A@AAC@@AAAC@A@A@AB@@@D@B@D@D@B@BABA@AB@@AD@B@@AB@B@@@B@@@B@BA@@FADA@ABABABABABC@@@A@AAA@CBA@A@ABA@ABA@@@A@ADE@@@C@ABABCDC@A@ABA@@BABABAB@@ABA@@@E@A@A@A@@@A@C@@@AAA@@@A@AAAAA@@@A@@@A@@AAAAAA@ABA@A@A@@BA@AB@@A@A@A@A@AAA@@@A@@@A@A@@AA@@BEAA@A@A@ABA@A@@AAAC@@@A@AA@A@AA@@@AA@@@CA@A@A@@@@@ABA@A@A@A@@@AAAAC@AAABAB@@@BC@A@@@CBABABABABC@ABA@A@@DEBABADA@@DADA@ABABA@ABA@@@ABAB@@@@AB@@AAA@@@AAA@ABABABA@@BAB@BA@AB@@@@@@@@AA@BA@@@A@@@@@A@@BA@@@A@@@@@@@AB@@@@A@A@@BA@@AA@A@@BAA@@@@A@@@@@@B@@A@@@@@A@A@@@@@@@A@@@A@AB@@A@@BA@ABAB@@ABAB@@ABB@AB@@A@@AAA@@AC@C@C@@@AAA@@@A@A@A@ABA@A@ABAA@@A@C@@BAAA@CBCAA@ABABC@AAAB@@A@@@A@CC@@C@AAA@@@@AAA@@AA@@A@AAC@C@AAA@CBAA@AAA@@CC@ACC@@CA@A@@@AB@@A@@AA@ABA@@@A@AB@@@B@BA@@BB@@D@D@@@@BD@BB@@@@BBB@@BDBB@B@B@@@BA@AB@BAHA@@B@BB@@B@A@@BB@@@BB@@B@@@AB@@B@B@@BB@@@B@BBBB@@D@@B@@BB@@@@@BB@@@B@@BB@@BB@FCB@BA@BB@@@@@BB@@BBB@@@B@B@@@BAB@@@BAB@@@AA@@B@A@AAE@AA@@AAA@@AC@@@CA@A@@AAEEA@AACACA@ACA@AACAA@@A@ACA@CCAA@A@@@A@AA@@AAA@AAA@@@@C@C@@@AA@AC@@@ACA@AB@@@@A@ABA@A@@@A@C@EA@@GA@A@@CAA@AA@@@AB@@A@@@ABA@A@@@AA@AAA@@A@@A@@@@A@@AC@@CA@@@CB@@AA@@CBADA@AB@@A@ABA@@B@@@BA@AB@B@@A@@@@CC@AAA@AAA@@AA@AC@CBA@A@CA@@ABA@A@A@AA@@AAAC@@A@@AA@C@AAA@ACAA@@AA@A@@@@@A@@@@FC@AB@@A@A@AAA@A@A@AAAB@@A@A@C@CAA@@AC@A@@A@@AEAAAAA@@@@@A@@@@BABCBA@@BA@A@@ACBA@ABAB@@ABA@CA@@AFCBA@@@@@AACAC@AA@@@BABCBA@AA@AA@@@AB@BC@ABE@A@@@AAA@@@@@CAAC@AA@@@@@BA@@BABC@@@A@@@@@CCCA@AAA@A@AAABAA@AC@CA@@@ED@@E@C@A@C@A@@@A@A@A@A@A@EBA@C@@@@BABA@C@A@AAA@A@AA@BA@CB@BADABCFCAC@@@AB@@A@@@C@A@ABABGDCBABCBA@@BABA@AB@@A@A@@BAB@@GDE@CAABC@@BAB@B@B@B@B@B@BABCBA@@@C@@@@@ABA@ABCBA@C@CAA@ABABA@@BAB@B@@@B@B@BABA@ABA@@@AAA@@@@@AB@@@BB@@B@@AB@@ABA@EB@BABA@@@AB@B@D@B@@AB@@AB@@A@@@AAA@@@@BA@A@C@@AC@@A@@@@AAA@@@@BAB@@A@A@AACC@@ABA@ABAB@@AB@@CB@@A@BDB@BD@@B@BBADABA@AB@BA@@B@@@B@@@B@@C@@@C@AAEBA@@@AB@@ABA@@BA@CB@@A@A@CFAB@B@B@@@@@B@@CA@@AB@@@D@@@@AB@@@B@@AB@@AB@@@@A@CA@@@B@@A@A@@ACAACA@BA@A@@@ABC@AAA@AAC@@BA@@DA@@@@@@AA@@AA@AA@@@@A@C@A@@AC@A@@BCAA@@@AA@@@ACAAAAAACAAAAAAAA@@CA@@@@@AC@A@A@@ACAA@E@@@AABC@CBAB@@A@A@A@A@C@E@ABCBA@@@@@ABA@AB@BA@@@@@@A@@@ABA@@@AA@@C@@AAACAAAA@AAEAA@AA@AA@AAA@AAA@C@ABA@CAC@@AABC@A@A@AAA@CCC@@B@@ABA@CBA@A@@BAB@@C@ABAA@@@@@CB@@AA@@@AB@@@@CA@AAA@@AA@BAAABA@A@A@@BB@@B@B@@@B@BA@A@A@A@A@@DA@@BC@C@@@A@A@A@A@ABC@A@@C@@A@@@C@@CE@A@@AA@A@AB@BA@A@@@A@A@@AAA@@A@@@A@@@A@A@A@@AC@@CCACA@@@@@AA@@ACAC@AAA@A@ABG@A@A@@BAB@B@D@@AAC@C@@AAAA@ABA@EAE@AAABA@ABCD@BABA@CAAAA@A@AAA@CAA@A@@C@A@@A@A@@BAB@@A@@ACAAA@E@AAA@C@C@A@C@A@EBA@@@EB@@CBAB@@A@ABA@AAA@A@AB@@AB@@ABA@CB@@ABA@@BEBEBCBA@A@CB@@C@@@CAA@EBE@CBC@CDC@@@A@C@I@C@ABA@A@CAA@CBGD@@C@IBABGBA@CB@@A@@@AAA@A@@@ABA@@BABABA@A@A@E@A@GD@@AAC@@@AAB@BC@@BC@@@@B@B@B@D@DADA@@@ABA@@@AB@@@B@D@BBB@DA@@@@BA@C@C@A@@BABCDADABABC@@BADC@@AAC@@AAAAACAA@CB@AA@@@C@@@CCA@CAAA@AAA@@@@A@C@A@C@AAA@AAA@A@IC@AC@A@@@AB@@AB@@@BCAA@A@@@@@A@@@AAABA@@@C@@@A@A@A@AAAB@@A@@@CCA@A@A@A@@@A@AA"],"encodeOffsets":[[109203,34468]]}}],"UTF8Encoding":true});}));