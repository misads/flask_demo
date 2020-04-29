(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('石门县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"430726","properties":{"name":"石门县","cp":[111.380014,29.584292],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BABAHAB@HAD@B@FBBAB@DA@C@EAGAACCCACACAACACAAA@AAAA@@A@A@@BA@CBCBABA@ABA@ABA@@@AB@@AB@BAB@B@BABALADA@ADA@ABEBCBAHADCBC@ECCA@CACAAA@@AA@@@@A@@@@DADABAFAFEBEBE@G@A@@BC@CA@C@@@A@C@CBA@A@A@A@@AAAAA@CBABADAB@@@@@DAFAD@F@BB@@B@F@D@FAD@D@F@@@BADA@A@CAC@C@@@C@E@A@CBC@A@ABC@C@@FGDEHKDKAM@CGICEBA@A@C@C@CCCC@C@A@AA@CAC@@AGBGBCACB@@@FBBB@BFDDAHAB@B@DCA@AA@A@@A@@A@@AA@A@@@AB@@A@@@A@@AA@@A@@@A@A@A@AA@@A@@@@A@@@ABA@@@A@@AA@@AA@@AAAAAAA@AAA@CAACA@@AB@@ABCB@@@DCAABA@@@@ACC@AAA@@@A@@A@A@@AA@AA@@@A@@AA@@@AAA@@@@CBCFG@CCE@@@@GIA@CEAACEGICAGBABG@GBA@G@A@@@IDKHEFEBG@EAAC@@@EDGJGBE@CACECAAAG@@AG@@BEBEBC@AEACA@EBATDPBHAB@J@BF@JDFPTDFDBDDJDH@NILE@ABAD@FADA@@D@D@@A@BB@H@B@BAAA@AAA@@@ABCBA@@F@HBD@B@DA@AAC@@CC@ABAB@DBDBB@BBB@B@BC@@@C@EAACAA@A@A@AAACAEACCCAAAA@C@ABABEA@GAAAC@AAEE@@@@A@C@ADAB@@AAAAA@@AA@@AA@AA@@@@AA@@A@A@CBAAA@@@A@A@AAA@@@A@@AA@@AAA@AA@@@AAA@A@@@A@@@A@@@@CB@LAA@@@A@@AA@CCCECA@@AAA@A@CAC@@@A@A@ABCBCDCB@BA@@@A@A@A@A@AACCACA@A@CAA@@@A@A@@@CAC@EAAAA@A@A@A@A@ABA@CBABC@CB@BA@@@A@CBGBC@A@CBACCCA@AAACCA@@AA@@AAA@@A@@AAAAAAA@A@A@A@CBA@@@C@@D@@BB@B@B@D@B@BAD@B@D@@AB@DA@@BA@@BABCBADCBAB@BAB@B@B@BBB@@@BB@@B@@B@@@@BB@@BBB@@@B@B@@NHBB@@@B@D@DAD@BAB@BABABCBABCBA@A@A@C@@@C@ABABA@ABAB@@A@@@EDA@A@ABABA@ABADABADADAD@D@@@@@@BB@@@B@@@@BB@@AB@B@@AB@@A@AB@BC@@BA@ABA@ABA@@BA@@B@@@B@@BB@@@@@B@B@@@@AB@@AB@@ABA@A@@@AB@@CDABAB@BCFABADAFCFADAFAB@@@@CBA@@BA@@B@DA@@BABE@AB@@EDADEHCHBHBDBF@B@B@BBB@@BB@@BB@@BBB@BBBB@@BB@BBD@BB@BB@@D@@BB@@@B@BB@BB@@FBBBB@D@@@@@B@@A@@@ABA@@@@B@@@DAB@DAB@@ABABADCB@BABAD@D@B@D@BBBBD@@@BBDBFB@BDBDDD@@@@@BBBBDBBBBBBDBDBDB@D@B@@@@ABABC@ABAB@BAB@B@BAB@B@B@D@B@DABABCDCBAD@BCB@D@B@B@B@B@B@D@@AD@B@BADABAB@@A@@@A@@@C@CAC@E@@@EDA@AB@BABBB@B@@BB@BB@BB@BBB@BADA@ABABCDCBADCB@@A@@@C@AAA@CAA@@@@BA@@@@BA@@B@BAD@DAB@@@BAD@BADADADABABAB@BAD@BA@@@C@A@A@C@AAA@@BA@AB@BAB@@ADCBC@@@A@A@CB@@@B@@BB@@@B@BB@@D@BBB@@@B@B@@@BA@@BA@@BA@A@A@C@A@A@C@C@@@A@CBC@CBE@CBA@C@A@A@A@A@@@A@A@AA@@A@AAA@AAA@EAC@A@@BA@ABC@@@A@@@C@CA@@CAA@@@C@A@A@C@C@C@A@A@EBC@C@ABC@A@C@C@@@AAC@A@@AC@AACAC@AAGCC@A@ABC@ABAB@@@D@@@@@B@B@BAB@@ABAB@@ABA@ABC@ABA@@@A@ABC@A@A@A@C@C@A@@@CAA@@@C@C@A@A@@BA@@BABA@AB@@A@ABC@ABA@@@A@CBC@A@A@C@C@CBC@E@C@CBC@CBC@CBC@A@CBA@A@C@C@AAC@C@A@C@GAE@A@ABA@@BAB@D@BAD@B@B@BBD@BAB@B@BADABABABABA@ABCBA@ABA@A@A@C@A@C@ABA@@B@@@B@@BBBB@@BB@@B@B@BBB@@BBBBB@D@@@DAB@B@@@BAB@DCD@BAB@BABA@@@ABA@@@A@A@A@C@A@C@CBA@AAC@A@@@A@AAA@A@C@A@C@A@A@A@GAA@A@A@A@ABGFCFCBCBC@E@C@C@CBC@E@E@C@@@A@CAAAAAA@C@CA@@E@CACAAAACC@C@EBC@A@EBEBC@A@AB@B@D@B@@ABAB@@GBaJ@@GBGBI@CBA@E@EAEAC@E@C@C@EDCBADADABABC@ABC@ABE@A@CAC@@ACACACAA@@@A@ODMEKMKEWEO@OH@@A@@BGBA@E@EAG@EAEA@D@D@D@F@D@B@D@D@FAF@B@B@B@F@DAF@BAB@BABEACACCCACAAAECACAAAAACCCACA@@@AAA@AACCAA@ACCC@CAAAAAA@C@C@CDGBEFGDEB@@EDEDEBGBE@EB@@@@ABGBGBEBE@CBEDCDADCDADAD@FAFBF@DBD@DAD@DCDCDCDCBE@EBCBE@C@CBC@@BCB@DADCHDDDBDFBDDFDD@DBD@B@BADADAFCFADABCDCHADCD@D@JADADCFAFAFCHCDAFCDCDCBCBCBA@AB@B@B@BA@A@A@A@@@AAA@AB@B@@@BABA@EACAC@CAA@ECA@CACBA@ADAFADAB@DC@GBI@G@E@C@C@C@ABABAD@FAHAF@B@FABADADCDAD@@A@CDADCD@DBBBDBDBD@D@F@DAD@@ABCDEDCBCDCBE@CAAACA@@A@A@CBABADCBCBABE@@@C@C@C@AB@@@B@DFDDDDDBBDD@H@F@HAH@F@FBD@BDDDBBBBD@F@D@DBDDDDBHFHDFDBBFFDDDBFBFBJBFBBBFFBDBB@BADCDCBCDAD@B@@CDEBEBIBG@G@IAG@CBEDIDKFEDGDCDCDCFDDBDFBDDBD@D@@ABADCFAHHP@DEF@B@@BBH@BADCBABAD@LDFBFD@DBDD@D@DBFB@@D@DAH@FAFADAFAFAB@DBDBF@BBDABABABAF@BBBDBBBBB@B@F@DAB@B@FAD@D@FAD@DAFAH@FBFDDBJBDBFDDBH@DBFDBBBBFBDDFDFBHDFBDBD@FADABEBCB@HCLEHCD@FAF@BADCBA@@@CAAA@AAAA@@@@@A@@BA@@@@@@@@BAB@@@BABA@@BA@ABA@@BAB@@@FG@@@@DAFCFCHCDADAF@HFFDFDDBB@FBF@DAFAFBFBFDHDHHFHBB@D@BAD@DAF@HBP@HBD@B@@CBEDEF@HDHFJAHIFCDBF@@FBFBHDFBHBFBHBFAH@HBH@HAFAHAFC@@DAB@D@BBBBDBFDDDBD@DBBF@F@F@HAF@DAJCB@F@DBFBFDF@DABADCBEBABAH@FCDAFAF@J@L@HADAFABAH@FBFBF@HBF@J@F@D@BC@AACBE@AAEBCBC@E@EAIAI@A@EA@BCBCBA@C@A@A@ABCBADABA@BF@F@DAFCH@HAF@HBHBH@HABAFAF@H@D@FAD@H@H@HBD@F@DABCBCD@BAJ@F@FAHAHAFAD@B@D@J@FAD@H@F@@@H@H@D@F@D@D@DAD@D@D@BBDBF@D@F@D@D@FAF@D@D@D@B@HAB@FAH@HAFAD@@@DBH@H@HAH@F@F@FAB@D@DAD@DBF@D@D@FAD@FADAF@B@@B@BBDB@D@FADAF@FAD@HAD@H@D@DBD@D@F@HAHAF@J@JBF@F@@@BABABCBAB@D@B@D@D@BABABABABEBEBA@ADEBEBC@A@A@ABABAB@@@B@F@B@BB@@BAB@@@BA@@@@@@D@F@B@BBD@@@@@B@DA@@@A@@B@DCB@B@@@BABADABA@@@C@A@A@AACAA@@@A@A@CBA@A@@B@BCBABABA@A@@BA@@B@D@BA@@B@@@B@BA@@B@@@@AB@@@BCBABC@AB@@@@ABAB@@@@@B@@@BBDD@B@@@@@B@@@@@B@@B@B@@@B@@ABA@@BAB@@A@@BA@@@ADA@@BA@@@A@@@@AAAA@@@A@A@@@@BA@@B@B@B@BAB@B@@A@A@@@C@@@A@@@A@AB@@AB@@ABEDIBA@@C@A@EC@AAACACAE@EAEAEAEAECCCAA@AAAEAE@@@ABCAA@CBA@A@A@ABABA@ABAB@B@@A@A@A@EA@@ACIEIACAC@EAA@CBA@ABC@E@GC@@EEEACBC@C@A@CBG@E@E@E@A@C@C@A@CAA@A@AA@@AA@ABABABADABABG@EBE@CBE@CDGDGAGAAAC@E@ABCBADEFEBA@EAC@E@C@C@A@@@C@A@@BA@@DABCBAB@LEBAFCDEHIDCHAL@HDLJBFFD@BDBB@DA@ABC@GB@FADDFABA@@DCDCFCDADABGDGBADCFC@ADEDEBG@CCE@AAAAAAA@A@C@@BC@C@AACKGGECECE@A@@BCD@L@JAH@D@J@H@FBFBF@D@F@DABCDA@E@E@@A@@@@ABCDCDCBABABABCBCBCBADAD@DAFCBE@G@E@E@AAABA@AD@B@DD@@FBDBB@DBDBBBD@@BB@DBB@DBFDDBDBDDDBD@DBD@D@D@BCBCBG@ABA@CDGBCDBBAB@BA@ABBB@@A@CA@@@B@BABCB@@A@@B@BBB@@@DGA@@C@AB@B@BD@DCBAFFBBBB@B@B@D@@@B@@@AC@A@@AE@C@ADIDE@GAEECC@AAA@AA@A@C@ADABCBABCBADABABABCBABADADAD@DAD@BAB@BAFADABAD@BABADABAB@@A@@BABABADA@ABADCBADCDABADCBADCBABADC@@DA@@FABAB@@@@AB@@A@@DABC@@@@ACAAAAAG@A@C@E@A@A@@@C@ABCFGBGB@@CBC@@@CBC@C@CDABAB@DABEBCBABADAD@DBDBDBBBBBBBD@D@D@@@BAB@BABABAAE@@AAAA@AAA@E@G@C@AAE@@@AAA@@A@@@@@A@@@@B@BAD@B@@CBAB@@A@@@A@A@AAA@AA@@AAC@A@AAAB@@A@@@ABA@ABA@@@C@CACCAAECAACCCAAAECA@CCAAA@CA@@@A@@BA@AB@HBFBDBB@@AAA@@@AA@A@@A@ADA"],"encodeOffsets":[[114177,30258]]}}],"UTF8Encoding":true});}));