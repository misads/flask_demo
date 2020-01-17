(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('龙川县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"441622","properties":{"name":"龙川县","cp":[115.259871,24.100066],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EDGDMDMNEFCDGFCDGHAJCD@BCBCBEAEBEBCD@B@BIFCF@B@FGHAFBBBF@D@@EFA@AB@DABEBC@CJ@BCH@H@BB@D@H@RDNFHDDB@@D@DBHFHF@@JBHCBCDBFFJFHDHAB@FADAD@DBBDDDDHBDBB@BBH@DBDDBDDJDHBJ@D@D@DBBBF@F@B@DBH@B@@@DADCDCDCFCFAH@HB@@FBFAH@DCFCLGFEFEFAD@DDBFAH@HAHBJ@BBDFHFJBFDHB@@@@@@@B@BABABAHAHBFDB@@@HLPVLFLAVOFAFCJGJEDCBAD@DCDCDABAHAH@HBBBD@JAHCBADADABGDG@CBCFAHABCBAHED@@@FA@A@CCCAAAA@@FGHCDCB@@@@A@EBGBCBAF@F@FB@@B@D@BB@@B@B@BADABA@CACACAEACAA@@@ABABABADADA@@B@BAB@@A@A@AB@BAB@B@B@BAD@B@BAB@@AB@BADAFADADAB@@@@@BA@@@A@A@C@C@AAC@A@C@ABA@CBABC@ABA@ABA@CAE@@@C@C@AAA@@@A@A@@@A@ABA@A@AABC@AAMCACAAEAK@MCCAGGEAAA@@@A@A@E@A@A@ECCAACEGECCEGAC@A@CDGBEDE@IBEDE@A@ACAAAECE@C@EAA@CAEAA@@A@@BAB@@A@@B@B@B@@@@@BA@@AA@@BCB@@AAAA@CAABEDABA@A@@@@@A@A@C@A@A@@@AA@@BCBG@@ACBABEDC@A@EAA@AAC@CBABGDEBA@ABG@ECGAACC@EBAFCDC@A@C@ABG@A@A@AFEFAL@D@HBJ@FAHAH@FAB@BAB@DC@CBCBCDADDFDJBHAB@BAAE@AACAC@@AA@A@A@ABE@@@AB@@@DBB@B@B@B@@AB@@@BB@@@@@B@F@B@DDBD@D@DABBD@B@B@BCDCBE@GAE@A@A@ABCD@F@FBDBDBDBDABA@CCCCCAAAABCBACECCEAECC@CACEAC@A@EBC@C@AFCFADABC@CBE@KAKEICECCGIAAECA@A@ABA@AAGCA@AAAGACAA@G@ABGAECGAEAGDG@CAE@@@EBCDA@EAEAA@ADCFABADABA@AAAAADC@ADCBCBAAE@ADAHADA@C@C@CACEACA@CBCBAJADCFCBC@A@A@AAABABABABCACACCCAC@CBEFEBCDCBAFAB@D@@@BABC@O@C@ACCA@A@CBE@C@CAC@@E@EA@C@C@CAACAC@CBCF@@AB@@C@A@GAKAK@GEEIACBCDCFA@AAACCECCEAGAEAA@AAACAEAG@ABGBCD@D@B@BCBE@@@AACBAC@CBCBCDC@A@CAA@@D@BC@CDABEBA@CFEFAFCDC@G@AAA@CC@@A@A@@@@ABCACB@B@DABG@@BCBAACACAA@AACBCDCDAB@AEAC@ABADCFADEBCBEBCA@A@A@EBC@C@AA@C@A@AFAH@F@DA@I@GBA@@DCD@D@DADC@CAC@ABADEFE@A@AEECECCAECAC@CBABE@G@C@A@EDADAD@F@F@BABCBCJAJCJABABCCAE@CAAEAE@GDA@EFAHDJBBBBBD@DCBCBC@E@CAA@EEGGACCEFC@@EAC@CBA@@@C@AAAAAACBADABABA@A@@A@A@A@AAAA@A@A@AABA@CBAFGDG@A@CCACAGCECCC@C@E@EAC@CCC@AAE@CAEACAAC@EAC@CAACCE@CHEFEDOBAFCFCFEFGDADABADA@E@C@CBC@EACAC@CAA@CBCDCDABA@C@E@AAE@A@ABABCDAECECBCDABC@CBCBA@AACAADC@C@CAA@CBCBCCAEA@AECECEAAAA@A@C@AAAECE@CC@CBADABE@C@ABAAE@C@@@ECCABC@ABCA@AC@ADEB@@AA@A@CCAA@CAAECAAACBCB@@AAC@GBAB@@ACABE@AAABCB@CGBCCCE@EA@@@AACEAFCBC@AA@A@CA@@@CAADCAC@ABAAC@ACACBABC@A@A@EC@CAA@GBA@CAA@@CAA@@ACAC@@A@C@CBC@ABABCBABCACEAC@C@G@IC@BABCBA@EBABCBCDA@IDGBEB@BCBC@ABAD@B@B@B@B@BBB@FABCBA@A@AACD@BAB@@CB@B@BCBAD@BA@ABABADAFC@@DAB@BC@CDEBAB@D@FBBBB@B@@@BA@C@@BAAC@ABC@CAAAEBA@AB@D@BABABEB@BBBADABC@EB@BCBCBBDBDDBBB@D@BEBCCG@@DED@BBBBB@DCBADA@AAABE@E@A@ABC@ABA@@BBB@BABCDABA@C@@AAA@@CCCA@C@C@A@ACB@@EBC@C@A@AAADCBABAAAAAA@AEAABA@ABCAA@A@CCC@ACCAC@@AAAAAA@@BBBBB@BABC@AAA@AD@D@@A@A@AAA@@AA@ABA@@BC@BB@BAB@@A@A@CBAB@B@BAA@@ABA@AAABAB@B@@AB@@EAC@A@@B@DBB@B@@AD@BDB@B@DBBBABBDBBB@@A@@BAD@@BDDBB@B@@@DD@B@D@B@B@BAAA@A@ADA@C@CAC@AAAAA@ABABADA@CB@@@BCBA@@BADC@AB@D@@@BA@CBCB@@@B@DABA@CACBA@C@@BAB@DBDFFABEH@@@BDBD@FA@@FBFBDABABEDEDCDCDBD@D@DAD@DBBDDFADAD@@EDCBAD@BADEDKF@@ADA@ADADAFABADABABCDADAF@F@DABEBGAGBGBCDADAH@JABA@A@A@CAC@BHBH@D@FCBABCBCBA@@D@B@DBBB@DDDDDD@DA@ABEDEFCFAH@B@D@HBD@BCACACECCAC@CCCAAC@AAI@I@IAICECE@GAEDAB@DAHA@CDA@CD@BBBBDDBDDBDDDBF@HBF@DBBDBDBFDFDBBBB@F@H@H@HDH@FBDBBHDFBHDBBBBDDBBBDB@B@B@BADADAD@DDBBBDBDDBFBH@FBD@DBDBDAD@BABAF@D@DBB@DADADAFA@@DADBBB@@FDFDB@BBB@D@BBBDBBBBDBBDDBBF@BBDBBDDFBF@HBB@F@H@H@L@DHJNHNBHDBDBBDBDBDDBFBDB@@@N@JCFABBF@B@D@BABAB@BCBE@CBEACBIHIHEBC@G@E@EACBABABBBBB@BBBAB@F@D@F@B@D@@@B@B@DADCBA@C@EBCBCDAD@D@BDBBDAD@FAB@DADAD@@@DBD@D@B@BABA@CBA@AB@@@B@BBBDDFDBFFDF@F@F@DBBBBBB@BBBADFDFFFHHDHBJBL@B@D@DBBBDABA@AB@DBD@F@FAD@H@FBDDBF@F@@B@D@F@BBBB@B@HBFDHDFFBBBBCBABCFCD@D@HA@@BEBCB@F@F@B@BABBDB@D@DADAB@B@ABADABABEDEDEFAFCFAHAB@B@B@@@@B@BBDBBBDB@BBBBBDBBBD@BBBDBHBH@DABCFEBCBC@GBCDCD@D@DBDD@D@D@BBBB@FAB@BCBAB@BDBF@LALCDBBBCDABABCBGDKDKFGFCHCB@B@@@HAB@DABIHBDBDF@FABDDFDFDDB@FBBBBBD@DBJ@D@D@BBB@BF@FAJAJ@FBBFH@BDBDFFLFBNFJFFFFB@B@@CFAB@BMFGFA@"],"encodeOffsets":[[118028,25217]]}}],"UTF8Encoding":true});}));