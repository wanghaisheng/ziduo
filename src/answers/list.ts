/* eslint-disable @typescript-eslint/naming-convention */
/**
 * SPOILERS
 *
 * This file contains the list of answers for the game. It's not recommended to continue reading this file.
 *
 * 剧透警告
 *
 * 该文件包含了游戏的答案列表。不建议继续阅读。
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

import { seedShuffle } from './utils';

function prepare<T>(_: number, array: T[]) {
  return array;
}

export const _PRE = prepare(1, [['时运亨通', '运']]);

export const _2022_JAN = prepare(31, [
  ['路不拾遗', '遗'],
  ['恬不知耻', '恬'],
  ['货真价实', '货'],
  ['彬彬有礼', '彬'],
  ['里里外外', '里'],
  ['志在必得', '得'],
  ['十指连心', '心'],
  ['如痴如醉', '醉'],
  ['一诺无辞', '无'],
  ['婀娜多姿', '娜'],
  ['不期而遇', '遇'],
  ['见缝插针', '见'],
  ['颐指气使', '气'],
  ['相见恨晚', '恨'],
  ['心甘情愿', '甘'],
  ['穷奢极欲', '穷'],
  ['艰苦卓绝', '苦'],
  ['水天一色', '色'],
  ['有心无力', '心'],
  ['志同道合', '志'],
  ['错综复杂', '错'],
  ['名不虚传', '虚'],
  ['夫唱妇随', '唱'],
  ['万无一失', '万'],
  ['姹紫嫣红', '嫣'],
  ['荡然无存', '存'],
  ['耿耿于怀', '怀'],
  ['切肤之痛', '痛'],
  // This was the start
  ['天南海北'],
  ['地动山摇'],
  ['福寿安康'],
]);

export const _2022_FEB = prepare(28, [
  ['虎虎生威', '虎'],
  ['酒虎诗龙', '虎'],
  ['虎啸风生', '虎'],
  ['卧虎藏龙', '虎'],
  ['虎视眈眈', '虎'],
  ...seedShuffle(
    [
      ['春华秋实'],
      ['一面之辞'],
      ['变化莫测'],
      ['穷山恶水'],
      ['百废待兴'],
      ['百年树人', '人'],
      ['吃里扒外'],
      ['井然有条'],
      ['本性难移'],
      ['口是心非', '是'],
      ['雄心勃勃'],
      ['各有千秋'],
      ['异口同声', '声'],
      ['因噎废食', '食'],
      ['惊世骇俗', '世'],
      ['同甘共苦', '同'],
      ['见风使舵'],
      ['地北天南'],
      ['锦上添花', '花'],
      ['应对如流'],
      ['入木三分', '木'],
      ['瓜田李下', '下'],
      ['语不投机'],
    ],
    '2022-02',
  ),
]);

export const _2022_MARCH = prepare(
  31,
  seedShuffle(
    [
      ['孜孜不倦', '不'],
      ['胆战心惊', '心'],
      ['人老珠黄', '黄'],
      ['寄人篱下', '下'],
      ['行尸走肉', '行'],
      ['国泰民安', '安'],
      ['轻声细语', '语'],
      ['自不量力', '力'],
      ['平步青云', '云'],
      ['谈笑风生', '风'],
      ['见义勇为', '为'],
      ['回天乏术', '天'],
      ['首当其冲', '其'],
      ['千姿百态', '百'],
      ['蓬荜生辉', '生'],
      ['苦口婆心', '心'],
      ['独树一帜', '一'],
      ['走马观花', '花'],
      ['燃眉之急', '眉'],
      ['不翼而飞', '飞'],
      ['不言而喻', '言'],
      ['花前月下', '月'],
      ['春风化雨', '风'],
      ['高深莫测', '高'],
      ['铁石心肠', '石'],
      ['飞蛾扑火', '火'],
      ['鬼斧神工', '鬼'],
      ['无中生有', '生'],
      ['风调雨顺', '雨'],
      ['坐吃山空', '山'],
      ['愤世嫉俗', '世'],
    ],
    '2022-03',
  ),
);

export const _2022_APRIL = prepare(
  30,
  seedShuffle(
    [
      ['破釜沉舟', '破'],
      ['急转直下', '下'],
      ['独具匠心', '心'],
      ['不耻下问', '下'],
      ['声名鹊起', '名'],
      ['适得其反', '其'],
      ['精益求精', '精'],
      ['无往不利', '不'],
      ['百口莫辩', '口'],
      ['与世无争', '无'],
      ['返老还童', '老'],
      ['火上浇油', '上'],
      ['志在千里', '千'],
      ['闲情逸致', '情'],
      ['敬而远之', '而'],
      ['众目睽睽', '目'],
      ['蝇头小利', '小'],
      ['义结金兰', '金'],
      ['猴年马月', '年'],
      ['排山倒海', '山'],
      ['拾金不昧', '金'],
      ['喜出望外', '出'],
      ['鸡犬不宁', '不'],
      ['身临其境', '其'],
      ['同归于尽', '于'],
      ['杯水车薪', '车'],
      ['日新月异', '日'],
      ['未雨绸缪', '雨'],
      ['居安思危', '安'],
      ['百里挑一', '百'], // D100
    ],
    '2022-04',
  ),
);

export const _2022_MAY = prepare(
  31,
  seedShuffle(
    [
      ['昙花一现', '现'],
      ['雪中送炭', '中'],
      ['成王败寇', '成'],
      ['戴罪立功', '立'],
      ['天马行空', '马'],
      ['釜底抽薪', '底'],
      ['既往不咎', '不'],
      ['花容月貌', '月'],
      ['按部就班', '班'],
      ['闭门造车', '门'],
      ['囫囵吞枣', '吞'],
      ['鲜为人知', '人'],
      ['颠三倒四', '四'],
      ['惊弓之鸟', '鸟'],
      ['纸上谈兵', '上'],
      ['今非昔比', '比'],
      ['琳琅满目', '目'],
      ['百家争鸣', '家'],
      ['殊途同归', '同'],
      ['玉石俱焚', '石'],
      ['不寒而栗', '而'],
      ['矢志不渝', '不'],
      ['若无其事', '无'],
      ['普天同庆', '同'],
      ['见仁见智', '见'],
      ['举一反三', '一'],
      ['神出鬼没', '出'],
      ['如履薄冰', '冰'],
      ['口耳相传', '口'],
      ['光阴似箭', '似'],
      ['飞来横祸', '来'],
    ],
    '2022-05',
  ),
);

export const _2022_JUNE = prepare(
  30,
  seedShuffle(
    [
      ['雾里看花', '里'],
      ['否极泰来', '来'],
      ['鼠目寸光', '目'],
      ['风起云涌', '云'],
      ['飞檐走壁', '走'],
      ['掩耳盗铃', '耳'],
      ['半信半疑', '半'],
      ['乐不思蜀', '不'],
      ['杯弓蛇影', '影'],
      ['痴人说梦', '人'],
      ['水性杨花', '花'],
      ['塞翁失马', '马'],
      ['背井离乡', '离'],
      ['阴差阳错', '差'],
      ['鸡飞蛋打', '飞'],
      ['入土为安', '为'],
      ['信口雌黄', '口'],
      ['捉襟见肘', '见'],
      ['过河拆桥', '河'],
      ['中流砥柱', '中'],
      ['民不聊生', '生'],
      ['穷困潦倒', '困'],
      ['前功尽弃', '尽'],
      ['上蹿下跳', '下'],
      ['心不在焉', '不'],
      ['德高望重', '重'],
      ['难兄难弟', '兄'],
      ['败兴而归', '兴'],
      ['举手之劳', '手'],
      ['和蔼可亲', '可'],
    ],
    '2022-06',
  ),
);

export const _2022_JULY = prepare(
  31,
  seedShuffle(
    [
      ['鳏寡孤独', '独'],
      ['金蝉脱壳', '金'],
      ['做贼心虚', '心'],
      ['南辕北辙', '北'],
      ['大张旗鼓', '大'],
      ['洛阳纸贵', '阳'],
      ['若隐若现', '隐'],
      ['家喻户晓', '家'],
      ['花拳绣腿', '花'],
      ['腰缠万贯', '万'],
      ['缘木求鱼', '鱼'],
      ['日理万机', '万'],
      ['白雪皑皑', '雪'],
      ['拖泥带水', '水'],
      ['博大精深', '大'],
      ['逢凶化吉', '吉'],
      ['欲盖弥彰', '彰'],
      ['循规蹈矩', '循'],
      ['笨鸟先飞', '飞'],
      ['玩世不恭', '不'],
      ['一蹶不振', '不'],
      ['心宽体胖', '心'],
      ['吉光片羽', '光'],
      ['泰然自若', '自'],
      ['酣畅淋漓', '畅'],
      ['头晕目眩', '目'],
      ['左邻右舍', '右'],
      ['集思广益', '思'],
      ['水涨船高', '水'],
      ['藕断丝连', '丝'],
      ['张牙舞爪', '牙'],
    ],
    '2022-07',
  ),
);

export const _2022_AUG = prepare(
  31,
  seedShuffle(
    [
      ['暴殄天物', '天'],
      ['含辛茹苦', '苦'],
      ['差强人意', '人'],
      ['马不停蹄', '不'],
      ['快马加鞭', '马'],
      ['形影不离', '不'],
      ['鹏程万里', '万'],
      ['临危不惧', '不'],
      ['寂然无声', '然'],
      ['忐忑不安', '安'],
      ['宁死不屈', '不'],
      ['前赴后继', '后'],
      ['立竿见影', '见'],
      ['得天独厚', '天'],
      ['甘之如饴', '之'],
      ['大智若愚', '大'],
      ['以卵击石', '以'],
      ['四平八稳', '四'],
      ['一步登天', '天'],
      ['冰清玉洁', '玉'],
      ['步步为营', '为'],
      ['放荡不羁', '不'],
      ['称心如意', '心'],
      ['怒发冲冠', '发'],
      ['满目疮痍', '目'],
      ['腥风血雨', '风'],
      ['天方夜谭', '天'],
      ['狼心狗肺', '心'],
      ['颠倒是非', '是'],
      ['鱼目混珠', '目'],
      ['八仙过海', '过'],
    ],
    '2022-08',
  ),
);

export const _2022_SEP = prepare(
  30,
  seedShuffle(
    [
      ['纷纷扰扰', '扰'],
      ['层出不穷', '不'],
      ['出其不意', '出'],
      ['如坐针毡', '如'],
      ['落叶归根', '叶'],
      ['恩将仇报', '将'],
      ['不辞而别', '而'],
      ['顶天立地', '立'],
      ['谈虎色变', '色'],
      ['浪子回头', '子'],
      ['异曲同工', '同'],
      ['羽化登仙', '化'],
      ['细水长流', '长'],
      ['屡试不爽', '不'],
      ['改过自新', '新'],
      ['挺身而出', '出'],
      ['雄心壮志', '志'],
      ['十有八九', '有'],
      ['与时俱进', '时'],
      ['举世闻名', '世'],
      ['游手好闲', '好'],
      ['意广才疏', '才'],
      ['不求甚解', '求'],
      ['莺歌燕舞', '莺'],
      ['万事如意', '如'],
      ['心灰意冷', '心'],
      ['尊师重道', '师'],
      ['不由自主', '自'],
      ['隔墙有耳', '有'],
      ['闻所未闻', '未'],
    ],
    '2022-09',
  ),
);

export const _2022_OCT = prepare(
  31,
  seedShuffle(
    [
      ['财运亨通', '亨'],
      ['胡思乱想', '思'],
      ['神乎其技', '其'],
      ['金榜题名', '名'],
      ['将心比心', '心'],
      ['子虚乌有', '子'],
      ['不堪回首', '堪'],
      ['重蹈覆辙', '重'],
      ['一本正经', '一'],
      ['尽力而为', '为'],
      ['祸起萧墙', '起'],
      ['和颜悦色', '色'],
      ['伤天害理', '害'],
      ['情窦初开', '开'],
      ['鸡飞狗跳', '跳'],
      ['有备无患', '备'],
      ['巧言令色', '色'],
      ['心花怒放', '心'],
      ['衣冠禽兽', '冠'],
      ['破烂不堪', '堪'],
      ['坐享其成', '成'],
      ['金石为开', '开'],
      ['答非所问', '问'],
      ['夜半三更', '三'],
      ['暮鼓晨钟', '钟'],
      ['大浪淘沙', '大'],
      ['因时制宜', '因'],
      ['富甲一方', '一'],
      ['唯命是从', '是'],
      ['根深蒂固', '根'],
      ['死而后已', '已'],
    ],
    '2022-10',
  ),
);

export const _2022_NOV = prepare(
  30,
  seedShuffle(
    [
      ['逢场作戏', '戏'],
      ['花开富贵', '贵'],
      ['浅尝辄止', '尝'],
      ['火烧眉毛', '烧'],
      ['信手拈来', '来'],
      ['四大皆空', '大'],
      ['春风满面', '满'],
      ['守株待兔', '守'],
      ['凤毛麟角', '毛'],
      ['云淡风轻', '淡'],
      ['安然无恙', '安'],
      ['出人头地', '人'],
      ['前仆后继', '后'],
      ['别具匠心', '具'],
      ['一决雌雄', '决'],
      ['触类旁通', '旁'],
      ['骄奢淫逸', '骄'],
      ['呼朋唤友', '唤'],
      ['无济于事', '于'],
      ['举世无双', '无'],
      ['拭目以待', '以'],
      ['稀里糊涂', '稀'],
      ['保家卫国', '家'],
      ['青红皂白', '青'],
      ['地久天长', '久'],
      ['骑虎难下', '下'],
      ['物竞天择', '天'],
      ['刻不容缓', '缓'],
      ['闭月羞花', '闭'],
      ['人面兽心', '面'],
    ],
    '2022-11',
  ),
);

export const _2022_DEC = prepare(
  31,
  seedShuffle(
    [
      ['感人肺腑', '人'],
      ['求之不得', '得'],
      ['左顾右盼', '左'],
      ['峰回路转', '回'],
      ['手足无措', '措'],
      ['抽丝剥茧', '剥'],
      ['功成名就', '功'],
      ['大义凛然', '大'],
      ['陈词滥调', '陈'],
      ['舍本逐末', '逐'],
      ['妙笔生花', '笔'],
      ['乌合之众', '乌'],
      ['吃里爬外', '吃'],
      ['如雷贯耳', '雷'],
      ['昏天黑地', '黑'],
      ['疑神疑鬼', '疑'],
      ['感同身受', '受'],
      ['四分五裂', '分'],
      ['不同凡响', '同'],
      ['心有灵犀', '灵'],
      ['书香世家', '香'],
      ['如愿以偿', '偿'],
      ['曲水流觞', '水'],
      ['脱口而出', '出'],
      ['海纳百川', '纳'],
      ['众矢之的', '之'],
      ['道貌岸然', '貌'],
      ['郁郁寡欢', '郁'],
      ['呆若木鸡', '呆'],
      ['装疯卖傻', '装'],
      ['山高水长', '山'],
    ],
    '2022-12',
  ),
);

export const _2023_JAN = prepare(
  31,
  seedShuffle(
    [
      ['后羿射日', '羿'],
      ['旁门左道', '道'],
      ['入不敷出', '不'],
      ['茕茕孑立', '孑'],
      ['邯郸学步', '学'],
      ['九霄云外', '九'],
      ['绝世佳人', '人'],
      ['耳目一新', '耳'],
      ['垂头丧气', '丧'],
      ['胆大包天', '胆'],
      ['以己度人', '人'],
      ['视若无睹', '无'],
      ['投其所好', '好'],
      ['循序渐进', '进'],
      ['晴天霹雳', '霹'],
      ['地广人稀', '地'],
      ['吹毛求疵', '疵'],
      ['勉为其难', '其'],
      ['滚瓜烂熟', '瓜'],
      ['不可理喻', '理'],
      ['坐立不安', '坐'],
      ['金盆洗手', '手'],
      ['万代千秋', '代'],
      ['引经据典', '典'],
      ['独有千秋', '千'],
      ['久别重逢', '逢'],
      ['先入为主', '先'],
      ['空中楼阁', '阁'],
      ['无声无息', '息'],
      ['惟妙惟肖', '妙'],
      ['英姿飒爽', '飒'],
    ],
    '2023-01',
  ),
);

export const _2023_FEB = prepare(
  28,
  seedShuffle(
    [
      ['举棋不定', '举'],
      ['江河日下', '日'],
      ['建功立业', '建'],
      ['吃喝玩乐', '玩'],
      ['无所事事', '无'],
      ['悲天悯人', '悯'],
      ['捕风捉影', '捕'],
      ['良药苦口', '良'],
      ['误人子弟', '误'],
      ['破镜重圆', '重'],
      ['独一无二', '一'],
      ['金玉良缘', '玉'],
      ['老态龙钟', '态'],
      ['正大光明', '光'],
      ['起早贪黑', '贪'],
      ['笑里藏刀', '刀'],
      ['浑水摸鱼', '鱼'],
      ['微不足道', '不'],
      ['永无止境', '止'],
      ['机关算尽', '机'],
      ['声情并茂', '声'],
      ['淋漓尽致', '致'],
      ['眼高手低', '高'],
      ['千里迢迢', '迢'],
      ['黯然失色', '黯'],
      ['言行不一', '一'],
      ['双喜临门', '喜'],
      ['滔滔不绝', '不'],
    ],
    '2023-02',
  ),
);

export const answers: string[][] = [
  ..._PRE,
  ..._2022_JAN,
  ..._2022_FEB,
  ..._2022_MARCH,
  ..._2022_APRIL,
  ..._2022_MAY,
  ..._2022_JUNE,
  ..._2022_JULY,
  ..._2022_AUG,
  ..._2022_SEP,
  ..._2022_OCT,
  ..._2022_NOV,
  ..._2022_DEC,
  ..._2023_JAN,
  ..._2023_FEB,
];
