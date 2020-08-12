import { ATR } from '../../src/atr';
const ticks = [
    { h: 34875, l: 34197, c: 34197 },
    { h: 34234, l: 33616, c: 34234 },
    { h: 34762, l: 34260, c: 34565 },
    { h: 34471, l: 34178, c: 34274 },
    { h: 34404, l: 33597, c: 34230 },
    { h: 34805, l: 34297, c: 34615 },
    { h: 34930, l: 34636, c: 34767 },
    { h: 34751, l: 33636, c: 33675 },
    { h: 33988, l: 33421, c: 33856 },
    { h: 33758, l: 33055, c: 33227 },
    { h: 33610, l: 32903, c: 33053 },
    { h: 33094, l: 32540, c: 32764 },
    { h: 33778, l: 32690, c: 33778 },
    { h: 34138, l: 33453, c: 34014 },
    { h: 34429, l: 34065, c: 34123 },
    { h: 34321, l: 33421, c: 33568 },
    { h: 34017, l: 33703, c: 33960 },
    { h: 34426, l: 33579, c: 34120 },
    { h: 33988, l: 33564, c: 33816 },
    { h: 34348, l: 33842, c: 33877 },
    { h: 33952, l: 33237, c: 33428 },
    { h: 34039, l: 33590, c: 33931 },
    { h: 34442, l: 33996, c: 34433 },
    { h: 34593, l: 34098, c: 34532 },
    { h: 34557, l: 33977, c: 34082 },
    { h: 34053, l: 33367, c: 33587 },
    { h: 33326, l: 33047, c: 33173 },
    { h: 33382, l: 32504, c: 32648 },
    { h: 33444, l: 32854, c: 33443 },
    { h: 33386, l: 32746, c: 32819 },
    { h: 32626, l: 32038, c: 32179 },
    { h: 32294, l: 31642, c: 31811 },
    { h: 32685, l: 31841, c: 32475 },
    { h: 32923, l: 32387, c: 32518 },
    { h: 32193, l: 31312, c: 31977 },
    { h: 32454, l: 31354, c: 31659 },
    { h: 31129, l: 30528, c: 30586 },
    { h: 31484, l: 30929, c: 31437 },
    { h: 31736, l: 30701, c: 30873 },
    { h: 30654, l: 30062, c: 30371 },
    { h: 31453, l: 31121, c: 31453 },
    { h: 31420, l: 31067, c: 31281 },
    { h: 31880, l: 31201, c: 31669 },
    { h: 31758, l: 31537, c: 31696 },
    { h: 31697, l: 31262, c: 31616 },
    { h: 32517, l: 31485, c: 32513 },
    { h: 33311, l: 32513, c: 33140 },
    { h: 33273, l: 32811, c: 33103 },
    { h: 33524, l: 33057, c: 33346 },
    { h: 33721, l: 33432, c: 33617 },
    { h: 33695, l: 33324, c: 33672 },
    { h: 33823, l: 33454, c: 33640 },
    { h: 33617, l: 33106, c: 33522 },
    { h: 33777, l: 32991, c: 33178 },
    { h: 32955, l: 32712, c: 32803 },
    { h: 33081, l: 32565, c: 32735 },
    { h: 33285, l: 32753, c: 33256 },
    { h: 33446, l: 32939, c: 33162 },
    { h: 33952, l: 33369, c: 33881 },
    { h: 33924, l: 33532, c: 33663 },
    { h: 33771, l: 33393, c: 33491 },
    { h: 33688, l: 32943, c: 33427 },
    { h: 33710, l: 33111, c: 33589 },
    { h: 34160, l: 33699, c: 34013 },
    { h: 34185, l: 33893, c: 33948 },
    { h: 33994, l: 33710, c: 33841 },
    { h: 34033, l: 33701, c: 33954 },
    { h: 34620, l: 34170, c: 34527 },
    { h: 34592, l: 34373, c: 34495 },
    { h: 34602, l: 34136, c: 34298 },
    { h: 34619, l: 34284, c: 34547 },
    { h: 34343, l: 33888, c: 34082 },
    { h: 33970, l: 33472, c: 33722 },
    { h: 33960, l: 33643, c: 33744 },
    { h: 33925, l: 33405, c: 33805 },
    { h: 34340, l: 33956, c: 34270 },
    { h: 34283, l: 33991, c: 34233 },
    { h: 34711, l: 34266, c: 34384 },
    { h: 33652, l: 33375, c: 33652 },
    { h: 33491, l: 33073, c: 33118 },
    { h: 33416, l: 32933, c: 33061 },
    { h: 33401, l: 32793, c: 33278 },
    { h: 33286, l: 32852, c: 32870 },
    { h: 32957, l: 32682, c: 32764 },
    { h: 32968, l: 32445, c: 32743 },
    { h: 33073, l: 32675, c: 32758 },
    { h: 32985, l: 32633, c: 32769 },
    { h: 33266, l: 32886, c: 33225 },
    { h: 33154, l: 32577, c: 32717 },
    { h: 32871, l: 32579, c: 32813 },
    { h: 32691, l: 32262, c: 32508 },
    { h: 32768, l: 32388, c: 32542 },
    { h: 32794, l: 31691, c: 31754 },
    { h: 31901, l: 31538, c: 31721 },
    { h: 31553, l: 31213, c: 31343 },
    { h: 31524, l: 30665, c: 30728 },
    { h: 30976, l: 30631, c: 30890 },
    { h: 30949, l: 30417, c: 30942 },
    { h: 31014, l: 30556, c: 30817 },
    { h: 31188, l: 30868, c: 30971 },
    { h: 30867, l: 30383, c: 30464 },
    { h: 30603, l: 30272, c: 30368 },
    { h: 30561, l: 29547, c: 29854 },
    { h: 29915, l: 29522, c: 29727 },
    { h: 29820, l: 29121, c: 29579 },
    { h: 30121, l: 29578, c: 30009 },
    { h: 29830, l: 29346, c: 29373 },
    { h: 29359, l: 28895, c: 29198 },
    { h: 29369, l: 28932, c: 29346 },
    { h: 29258, l: 28516, c: 28786 },
    { h: 29344, l: 28601, c: 28974 },
    { h: 29206, l: 28528, c: 29094 },
    { h: 29164, l: 28541, c: 28541 },
    { h: 28920, l: 28644, c: 28892 },
    { h: 28471, l: 28104, c: 28306 },
    { h: 28779, l: 28484, c: 28771 },
    { h: 28827, l: 28319, c: 28437 },
    { h: 28636, l: 27676, c: 27676 },
    { h: 28051, l: 27687, c: 27748 },
    { h: 27498, l: 26727, c: 27044 },
    { h: 27234, l: 26464, c: 27194 },
    { h: 27846, l: 27358, c: 27668 },
    { h: 28100, l: 27377, c: 28100 },
    { h: 28400, l: 27934, c: 28220 },
    { h: 28245, l: 27785, c: 28230 },
    { h: 28952, l: 28478, c: 28841 },
    { h: 28965, l: 28591, c: 28665 },
    { h: 28749, l: 28301, c: 28661 },
    { h: 28565, l: 28310, c: 28369 },
    { h: 28388, l: 27921, c: 28278 },
    { h: 28553, l: 28233, c: 28415 },
    { h: 28711, l: 28199, c: 28331 },
    { h: 28470, l: 28055, c: 28130 },
    { h: 28148, l: 27781, c: 27826 },
    { h: 28800, l: 27881, c: 28753 },
    { h: 29059, l: 28654, c: 29014 },
    { h: 29376, l: 28928, c: 29154 },
    { h: 29152, l: 28684, c: 29089 },
    { h: 29598, l: 29194, c: 29557 },
    { h: 29557, l: 29245, c: 29380 },
    { h: 29238, l: 28729, c: 28758 },
    { h: 29009, l: 28520, c: 28778 },
    { h: 29092, l: 28599, c: 28867 },
    { h: 28587, l: 28215, c: 28257 },
    { h: 28435, l: 27905, c: 28148 },
    { h: 28057, l: 27714, c: 27758 },
    { h: 28090, l: 27681, c: 28090 },
    { h: 28109, l: 27848, c: 27900 },
    { h: 28014, l: 27529, c: 27977 },
    { h: 28037, l: 27707, c: 27958 },
    { h: 28673, l: 27890, c: 28625 },
    { h: 28888, l: 28617, c: 28789 },
    { h: 28884, l: 28577, c: 28775 },
    { h: 29412, l: 28651, c: 29208 },
    { h: 29252, l: 29015, c: 29061 },
    { h: 29161, l: 28212, c: 28233 },
    { h: 28113, l: 27501, c: 27567 },
    { h: 28743, l: 28314, c: 28429 },
    { h: 28711, l: 28128, c: 28263 },
    { h: 28358, l: 27901, c: 28064 },
    { h: 28151, l: 27546, c: 27942 },
    { h: 28408, l: 27973, c: 28372 },
    { h: 27608, l: 26969, c: 27333 },
    { h: 27157, l: 26299, c: 26589 },
    { h: 27139, l: 25920, c: 25920 },
    { h: 26332, l: 25585, c: 25664 },
    { h: 27947, l: 26155, c: 27877 },
    { h: 28323, l: 27438, c: 27438 },
    { h: 27448, l: 26795, c: 27067 },
    { h: 27308, l: 26798, c: 26929 },
    { h: 27573, l: 26803, c: 27573 },
    { h: 27381, l: 26740, c: 27154 },
    { h: 26954, l: 25798, c: 25803 },
    { h: 25827, l: 24916, c: 25530 },
    { h: 25963, l: 25067, c: 25681 },
    { h: 26387, l: 25155, c: 25258 },
    { h: 25978, l: 25015, c: 25911 },
    { h: 25105, l: 23500, c: 23776 },
    { h: 24404, l: 23279, c: 23622 },
    { h: 23577, l: 21780, c: 22274 },
    { h: 23059, l: 21758, c: 21871 },
    { h: 21077, l: 19831, c: 20309 },
    { h: 22642, l: 20618, c: 22642 },
    { h: 24270, l: 23145, c: 23471 },
    { h: 23424, l: 22103, c: 22221 },
    { h: 22114, l: 20516, c: 20714 },
    { h: 21762, l: 20660, c: 21645 },
    { h: 22273, l: 21805, c: 22182 },
    { h: 22540, l: 21748, c: 21873 },
    { h: 21722, l: 21041, c: 21093 },
    { h: 21222, l: 20377, c: 21061 },
    { h: 20334, l: 19260, c: 19879 },
    { h: 19405, l: 18589, c: 19092 },
    { h: 19749, l: 18628, c: 18628 },
    { h: 20466, l: 19208, c: 20466 },
    { h: 21238, l: 20418, c: 20768 },
    { h: 21367, l: 20376, c: 21367 },
    { h: 21708, l: 21386, c: 21607 },
    { h: 23122, l: 21663, c: 23090 },
    { h: 23304, l: 22526, c: 22758 },
];

const bb = new ATR();
ticks.forEach(tick => {
    console.log(bb.momentValue(tick.h, tick.l), bb.nextValue(tick.h, tick.l, tick.c));
    // cci.nextValue(tick.h, tick.l, tick.c);
});
