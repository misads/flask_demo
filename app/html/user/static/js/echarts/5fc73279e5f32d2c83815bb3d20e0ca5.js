(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('贵池区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"341702","properties":{"name":"贵池区","cp":[117.567264,30.687219],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@TFRLHBJD@B@BA@@@@B@BB@@BB@B@@@B@B@BBB@BBD@JBFCDBB@B@@BBDJBBDDBANDDHD@FABBBBBBBDB@@BBBABADAF@DADEDEBGBE@CAACABCDCDE@C@I@KDEJCBCBGECCAICACGCCCAAACBGHALBNHH@HCBEACEEAAQIIC@CKIFG@AAGEDIDG@G@EAECEEACAA@@CECGCEOIG@EC@EAACAE@EAEEG@GCAC@E@@BEDEH@FA@@DE@CEECC@A@EAACCEAG@ACACAC@CDAAGWBDReK@@kDGHGPBB@BABEDEDA@@D@B@B@@@@BBB@BBD@CLAB@B@B@B@B@@@@@BD@@@@@DBB@BBB@BB@BB@BDDB@B@DHBJHFDDDDDHFHHFFFHDHFJFFBLDJBNBB@B@FDL@LBDBF"],["@@BH@BEHLJ@DJDRJBBFFBDAFGDG@MGKAGBAHBDBBDDHDBDJDDBFDAHADIDCF@L@J@DCFCDADDBBB@DAFAHCFCFCBE@CBABABAA@@CAAAAAAABA@EGCCCBMCAACIAAC@AA@A@CAEDIAC@AAA@AAA@A@@@A@A@@AA@@A@A@@B@@A@AICGAQKSEDJFJBLBJ@P@D@DAH@@CJAHABCFEFCFIHADCDMJIJEJAL@H`PPFHDdPFDPH^RLHPHPHRDPFPFFBNFZFVDjDNADADCBADADAPEB@VETCLAL@HAF@J@J@D@J@B@D@B@DBHBHFDBFB@BBBBBDFDD@BDDBDBD@DBBBD@BBDBBBB@BBDBJBJ@@FBBFHDbNJDXLLDTHbNbJLDNDVFBJBRBBBD@B@NDNJNLJHZT@CAM@@@ACE@CAABAFBJ@L@J@B@FBD@DDNJBBHFFDBFB@B@BA@ABCBAJBB@BABC@EDEBC@GAA@CAAAAEACA@C@ABADADABADAF@@A@A@ABAAAACCC@A@@@A@AB@BAB@NBN@B@FBJBB@B@BAB@@A@A@@@CAACIAA@A@AB@BAJ@NAB@B@@B@@BB@D@B@B@@BB@@B@B@@ABA@@@ABAA@AEAA@ABC@ABA@@BAB@@C@AAC@A@@BA@@@A@C@@@@AC@@@AB@@AD@BA@@@@@A@AA@AAA@CAACA@@AA@@@A@A@@AAA@A@@@A@@D@B@B@B@@@@A@@A@AA@A@A@@@@B@@@B@D@D@B@@A@A@@@AB@B@@@@ABA@@B@DABABA@@@B@@@B@@@BB@B@B@D@BAB@BAB@BADADABABABA@ABABA@@BA@C@@@ABADADC@@@@CA@A@@@@@@BA@AA@@ABA@@@@@A@A@E@@AB@@A@AA@@@A@AAA@@@GAGAGCEAAECEECEEECEEEGCECEAE@KAG@IBE@E@CBGAGACACAGCCACCEGAE@@AGBGACACEEEECE@@GICCCICCCCCEEGCEGEECGEEA@@@@AA@@AA@C@@AAA@@ACAA@C@@@@A@@@A@CAA@@@@EAA@AAAAA@@@GACAC@AA@@AA@ACA@A@@@ADABEBAA@@A@@@A@ABA@CDABA@@@@C@A@A@CCCA@@@@@A@@@A@@@@@@@A@@@A@@@AB@BAB@AE@A@@@ABA@@AA@@@G@@D@FB@@BB@BBB@BBB@@@@FA@@@A@A@@B@@B@BB@BAB@@AB@@A@A@@@ACAAAB@A@@A@@B@@A@@BA@@DB@@BC@@BAB@@@@A@ADA@A@@@C@@@AB@@@BAA@@A@A@@D@BA@@A@CAAC@A@ADE@@@@A@@A@AACB@BBBB@@BB@@@@BA@@DEFI@@B@@@B@@A@@B@@@@A@@@AB@BAB@@@DAD@@AB@BAB@@@B@@@BABBJCB@B@FBFDB@B@B@@@B@@@@ABA@@@CB@@ABAFABALELEREJAFCDAJCFCDEBE@EBICGEGAGAGAEAIBE@KBG@A@KAK@K@IAI@GAIAEAECECEAEAGACEKGIGEEGGGKAI@EDCDI@CAA@ACCECBQ@KDEDIFGFGDE@AAAA@@@A@A@@BA@@A@A@@C@@A@@AAAACAECACAAA@C@@BCB@@A@AA@@@@@AA@@@AA@@AA@@@G@GAEAGAAAE@A@@CBA@AFABADCDABCBAB@@@@AACAA@A@@B@@A@@@A@@@@A@A@A@@BA@ABA@A@A@AA@E@CBA@ABAB@B@@@@A@@@@D@@@B@D@DABAB@AI@AB@BA@@@AB@@@B@@@BADA@@@A@@AA@CAA@@BA@A@@@AA@A@A@@@A@@@@AC@C@A@A@@@@C@ABA@A@@AA@@A@ABADBD@@ABA@CB@AA@@@@@ABA@ABABEBC@A@@B@BBD@BBF@@A@AAA@CAA@AB@@A@@BA@AD@B@BABC@@@ABA@CAA@A@C@AB@@BH@BEDGF@@A@C@A@EAA@A@A@A@@@C@EAA@A@A@A@A@C@A@@@A@A@A@A@@@CAA@A@@@A@A@C@EA@@@@AAA@@@A@@BAB@@A@A@A@@@ABABA@@@@F@BAB@@C@ABC@CDA@E@ABADAD@B@@C@A@G@C@ABA@A@E@A@A@A@@@@ABABG@@CAECCAA@EAKAGECCA@A@CBABA@@@@@CAA@A@A@GBKBGHINCFCLEPCLAHAJ@HAJCFEBG@KEKEIEOK@@BAAA@@AAA@CA@A@@@@C@@AA@AACA@@AC@CAA@A@@@ADE@A@@AACBA@ABA@@@AAAA@A@AAAC@AAA@A@A@AA@AABA@CBA@C@ABA@A@@@A@CBCBA@A@@BA@ADA@@BA@A@@@ABABC@QBQCOEMGKEMCMAA@AB@@@BB@@BAB@BCBA@@DA@@B@@CA@@A@AA@@@@@ACA@@AA@@E@AAA@@@A@@@@@A@@@A@C@@@AA@@ABA@@B@BABAD@@A@@BA@@D@B@@AD@@ABA@@@AB@@@B@B@B@@ADA@@B@DA@CBABAB@@@@CAAA@@@AB@@@@AAB@A@@A@@A@@C@@BA@@@@BBB@@@BBB@@@@A@ABAAE@A@AACCAAA@EAA@AACCAACACAAACAAAC@AAAAAACAEAAA@@@@DABA@A@CB@@@BAB@B@@@@@@@@A@@CA@A@@AAA@@@@A@@@@BA@@@ACAAAM@OBKAA@IAM@M@GDCNCFEDM@ICQEOCI@E@EDEJAJ@LCJGJA@CFCHBDDFBD@F@@CDCDCF@HAH@H@JDFDFHDFDBF@HCFIDKBC@E@KAE@GAMAMCQ@IBEBGDCDCJAB@B@D@FFHFDDDHFHDDBFBDDNNFFBD@BAF@L@B@BD@HBDBBB@BBDBBB@B@D@BADADAB@H@B@BA@@BAAA@ACA@AA@@A@A@@B@@AD@B@DBFBBBD@B@F@@AFBLBB@DB@BHOHGlC@@fLCQXABHFBJ@J@HAJEJEF@FBPJJFFD@DKLAHBF@BFFHB@@JBDDDJDJDFDBNBBDDFDF@J@HAHAH@BCF"]],"encodeOffsets":[[[120060,31277]],[[120139,31223]]]}}],"UTF8Encoding":true});}));