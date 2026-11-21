/*
 * Dữ liệu bài học HSK 3.
 * Từ vựng: [chữ Hán, pinyin, nghĩa tiếng Việt, Hán Việt]
 * Câu mẫu: [câu tách từ bằng dấu cách, pinyin, nghĩa]  -> dấu cách dùng cho bài "sắp xếp câu"
 * Hỏi đáp: [câu hỏi, pinyin câu hỏi, nghĩa câu hỏi, câu trả lời mẫu]
 * Ngữ pháp: tasks[].re là biểu thức kiểm tra câu nói/gõ có dùng đúng mẫu hay không.
 *
 * Muốn thêm bài theo đúng giáo trình: sao chép một khối { id: ..., } và sửa nội dung.
 */
window.LESSONS = [
  {
    id: 1, title: "认识新朋友", py: "Rènshi xīn péngyou", vi: "Làm quen bạn mới",
    words: [
      ["认识", "rènshi", "quen biết, nhận ra", "nhận thức"],
      ["介绍", "jièshào", "giới thiệu", "giới thiệu"],
      ["自己", "zìjǐ", "bản thân, tự mình", "tự kỷ"],
      ["年轻", "niánqīng", "trẻ, trẻ tuổi", "niên khinh"],
      ["经历", "jīnglì", "trải qua; trải nghiệm", "kinh lịch"],
      ["已经", "yǐjīng", "đã", "dĩ kinh"],
      ["留学", "liúxué", "du học", "lưu học"],
      ["城市", "chéngshì", "thành phố", "thành thị"],
      ["出生", "chūshēng", "sinh ra", "xuất sinh"],
      ["爱好", "àihào", "sở thích", "ái hảo"],
      ["关系", "guānxi", "quan hệ", "quan hệ"],
      ["邻居", "línjū", "hàng xóm", "lân cư"],
      ["同事", "tóngshì", "đồng nghiệp", "đồng sự"],
      ["感兴趣", "gǎn xìngqù", "cảm thấy hứng thú", "cảm hứng thú"]
    ],
    grammar: [
      {
        name: "Câu 是……的", pattern: "S + 是 + thời gian / nơi chốn / cách thức + V + 的",
        explain: "Nhấn mạnh thời gian, nơi chốn, cách thức… của một việc ĐÃ xảy ra. Phủ định: 不是……的.",
        examples: ["我是在河内出生的。", "我们是坐飞机来的。"],
        tasks: [
          { vi: "Nói bạn đến chỗ làm hôm nay bằng phương tiện gì (dùng 是……的).", re: "是.+的", sample: "我是骑摩托车来的。" },
          { vi: "Nói bạn sinh ra ở đâu.", re: "是.+出生的", sample: "我是在海防出生的。" }
        ]
      },
      {
        name: "Trợ từ 过 (đã từng)", pattern: "V + 过 ; phủ định: 没(有) + V + 过",
        explain: "Diễn tả kinh nghiệm đã từng làm trong quá khứ.",
        examples: ["你去过北京吗？", "我没学过法语。"],
        tasks: [
          { vi: "Kể một nơi bạn đã từng đến.", re: "过", sample: "我去过上海。" },
          { vi: "Nói một món bạn chưa từng ăn.", re: "没.*过", sample: "我没吃过北京烤鸭。" }
        ]
      }
    ],
    sentences: [
      ["我 是 在 河内 出生 的 。", "Wǒ shì zài Hénèi chūshēng de.", "Tôi sinh ra ở Hà Nội."],
      ["你 是 什么 时候 来 中国 的 ？", "Nǐ shì shénme shíhou lái Zhōngguó de?", "Bạn đến Trung Quốc khi nào?"],
      ["我们 是 坐 飞机 来 的 。", "Wǒmen shì zuò fēijī lái de.", "Chúng tôi đến bằng máy bay."],
      ["你 去过 北京 吗 ？", "Nǐ qùguo Běijīng ma?", "Bạn đã từng đến Bắc Kinh chưa?"],
      ["我 没 学过 法语 。", "Wǒ méi xuéguo Fǎyǔ.", "Tôi chưa từng học tiếng Pháp."],
      ["我 先 介绍 一下 我 自己 。", "Wǒ xiān jièshào yíxià wǒ zìjǐ.", "Tôi xin tự giới thiệu một chút."],
      ["他 是 我 的 同事 ， 也 是 我 的 邻居 。", "Tā shì wǒ de tóngshì, yě shì wǒ de línjū.", "Anh ấy là đồng nghiệp, cũng là hàng xóm của tôi."],
      ["我 对 中国 文化 很 感 兴趣 。", "Wǒ duì Zhōngguó wénhuà hěn gǎn xìngqù.", "Tôi rất hứng thú với văn hóa Trung Quốc."],
      ["我们 已经 认识 三 年 了 。", "Wǒmen yǐjīng rènshi sān nián le.", "Chúng tôi đã quen nhau ba năm rồi."],
      ["你 的 爱好 是 什么 ？", "Nǐ de àihào shì shénme?", "Sở thích của bạn là gì?"]
    ],
    qa: [
      ["你是在哪儿出生的？", "Nǐ shì zài nǎr chūshēng de?", "Bạn sinh ra ở đâu?", "我是在海防出生的。"],
      ["你学过什么外语？", "Nǐ xuéguo shénme wàiyǔ?", "Bạn đã học ngoại ngữ nào?", "我学过英语，现在在学汉语。"],
      ["你对什么感兴趣？", "Nǐ duì shénme gǎn xìngqù?", "Bạn hứng thú với điều gì?", "我对做饭很感兴趣。"],
      ["你今天是怎么来上班的？", "Nǐ jīntiān shì zěnme lái shàngbān de?", "Hôm nay bạn đi làm bằng gì?", "我是骑摩托车来的。"]
    ]
  },

  {
    id: 2, title: "周末做什么", py: "Zhōumò zuò shénme", vi: "Cuối tuần làm gì",
    words: [
      ["打算", "dǎsuan", "dự định", "đả toán"],
      ["计划", "jìhuà", "kế hoạch", "kế hoạch"],
      ["然后", "ránhòu", "sau đó", "nhiên hậu"],
      ["或者", "huòzhě", "hoặc (câu trần thuật)", "hoặc giả"],
      ["还是", "háishi", "hay là (câu hỏi lựa chọn)", "hoàn thị"],
      ["公园", "gōngyuán", "công viên", "công viên"],
      ["爬山", "páshān", "leo núi", "ba sơn"],
      ["节目", "jiémù", "chương trình, tiết mục", "tiết mục"],
      ["打扫", "dǎsǎo", "quét dọn", "đả tảo"],
      ["洗澡", "xǐzǎo", "tắm", "tẩy táo"],
      ["一般", "yìbān", "thường thì, bình thường", "nhất ban"],
      ["有时候", "yǒushíhou", "có lúc, đôi khi", ""],
      ["附近", "fùjìn", "gần đây, lân cận", "phụ cận"],
      ["决定", "juédìng", "quyết định", "quyết định"]
    ],
    grammar: [
      {
        name: "先……然后……", pattern: "先 + V1，然后 + V2",
        explain: "Trước tiên làm việc 1, sau đó làm việc 2. Dùng để kể trình tự.",
        examples: ["我打算先打扫房间，然后去超市。"],
        tasks: [
          { vi: "Kể hai việc bạn làm sau khi về nhà, theo thứ tự.", re: "先.+然后", sample: "我回家以后先洗澡，然后做饭。" }
        ]
      },
      {
        name: "还是 và 或者", pattern: "A 还是 B？(hỏi) ; A 或者 B (trần thuật)",
        explain: "Cả hai đều là \"hoặc\". 还是 dùng trong câu HỎI lựa chọn; 或者 dùng trong câu TRẦN THUẬT.",
        examples: ["你喝茶还是喝咖啡？", "星期六或者星期天都可以。"],
        tasks: [
          { vi: "Hỏi bạn mình muốn đi xem phim hay đi mua sắm.", re: "还是", sample: "你想去看电影还是去买东西？" },
          { vi: "Nói bạn rảnh vào thứ Bảy hoặc Chủ nhật.", re: "或者", sample: "我星期六或者星期天有时间。" }
        ]
      }
    ],
    sentences: [
      ["这个 周末 你 打算 做 什么 ？", "Zhège zhōumò nǐ dǎsuan zuò shénme?", "Cuối tuần này bạn định làm gì?"],
      ["我 打算 先 打扫 房间 ， 然后 去 超市 。", "Wǒ dǎsuan xiān dǎsǎo fángjiān, ránhòu qù chāoshì.", "Tôi định dọn phòng trước, sau đó đi siêu thị."],
      ["我们 去 爬山 还是 去 公园 ？", "Wǒmen qù páshān háishi qù gōngyuán?", "Chúng ta đi leo núi hay đi công viên?"],
      ["星期六 或者 星期天 都 可以 。", "Xīngqīliù huòzhě xīngqītiān dōu kěyǐ.", "Thứ Bảy hoặc Chủ nhật đều được."],
      ["周末 我 一般 在 家 休息 。", "Zhōumò wǒ yìbān zài jiā xiūxi.", "Cuối tuần tôi thường nghỉ ở nhà."],
      ["有时候 我 和 朋友 一起 看 电影 。", "Yǒushíhou wǒ hé péngyou yìqǐ kàn diànyǐng.", "Đôi khi tôi cùng bạn bè xem phim."],
      ["我 家 附近 有 一 个 大 公园 。", "Wǒ jiā fùjìn yǒu yí ge dà gōngyuán.", "Gần nhà tôi có một công viên lớn."],
      ["你 喝 茶 还是 喝 咖啡 ？", "Nǐ hē chá háishi hē kāfēi?", "Bạn uống trà hay cà phê?"],
      ["我们 决定 明天 早上 七 点 出发 。", "Wǒmen juédìng míngtiān zǎoshang qī diǎn chūfā.", "Chúng tôi quyết định 7 giờ sáng mai xuất phát."],
      ["他 每天 晚上 先 洗澡 ， 然后 看 电视 节目 。", "Tā měitiān wǎnshang xiān xǐzǎo, ránhòu kàn diànshì jiémù.", "Tối nào anh ấy cũng tắm trước, sau đó xem chương trình TV."]
    ],
    qa: [
      ["这个周末你打算做什么？", "Zhège zhōumò nǐ dǎsuan zuò shénme?", "Cuối tuần này bạn định làm gì?", "我打算先去买东西，然后去看朋友。"],
      ["你周末一般做什么？", "Nǐ zhōumò yìbān zuò shénme?", "Cuối tuần bạn thường làm gì?", "我一般在家休息，有时候去公园。"],
      ["你喜欢喝茶还是喝咖啡？", "Nǐ xǐhuan hē chá háishi hē kāfēi?", "Bạn thích uống trà hay cà phê?", "我喜欢喝茶。"],
      ["你家附近有什么？", "Nǐ jiā fùjìn yǒu shénme?", "Gần nhà bạn có gì?", "我家附近有一个超市和一个公园。"]
    ]
  },

  {
    id: 3, title: "去商店买东西", py: "Qù shāngdiàn mǎi dōngxi", vi: "Đi cửa hàng mua sắm",
    words: [
      ["便宜", "piányi", "rẻ", "tiện nghi"],
      ["贵", "guì", "đắt", "quý"],
      ["颜色", "yánsè", "màu sắc", "nhan sắc"],
      ["裤子", "kùzi", "quần", "khố tử"],
      ["衬衫", "chènshān", "áo sơ mi", "sấn sam"],
      ["试", "shì", "thử", "thí"],
      ["合适", "héshì", "vừa, phù hợp", "hợp thích"],
      ["一样", "yíyàng", "giống nhau", "nhất dạng"],
      ["比较", "bǐjiào", "khá, tương đối; so sánh", "tỷ giảo"],
      ["满意", "mǎnyì", "hài lòng", "mãn ý"],
      ["双", "shuāng", "đôi (lượng từ)", "song"],
      ["条", "tiáo", "chiếc (quần, váy, cá…)", "điều"],
      ["换", "huàn", "đổi", "hoán"],
      ["信用卡", "xìnyòngkǎ", "thẻ tín dụng", "tín dụng tạp"]
    ],
    grammar: [
      {
        name: "So sánh với 比", pattern: "A 比 B + tính từ (+ 一点儿 / 多了 / số lượng)",
        explain: "A hơn B. Không dùng 很/非常 trước tính từ trong câu 比. Muốn nói \"hơn nhiều\" dùng 多了, \"hơn một chút\" dùng 一点儿.",
        examples: ["这件衬衫比那件便宜。", "今天比昨天热多了。"],
        tasks: [
          { vi: "So sánh chiều cao của bạn với một người trong nhà.", re: "比", sample: "我比我妹妹高一点儿。" }
        ]
      },
      {
        name: "没有……那么 / 跟……一样", pattern: "A 没有 B 那么 + adj ; A 跟 B 一样 (+ adj)",
        explain: "没有……那么: A không bằng B. 跟……一样: A giống B.",
        examples: ["红色的没有白色的那么好看。", "这个颜色跟那个一样。"],
        tasks: [
          { vi: "Nói Hà Nội không nóng bằng TP. Hồ Chí Minh.", re: "没有.+那么", sample: "河内没有胡志明市那么热。" },
          { vi: "Nói hai thứ giống nhau (ví dụ: áo của bạn và của bạn bè).", re: "跟.+一样", sample: "我的衣服跟她的一样。" }
        ]
      }
    ],
    sentences: [
      ["这 件 衬衫 比 那 件 便宜 。", "Zhè jiàn chènshān bǐ nà jiàn piányi.", "Chiếc áo sơ mi này rẻ hơn chiếc kia."],
      ["这 条 裤子 比 那 条 贵 一百 块 。", "Zhè tiáo kùzi bǐ nà tiáo guì yìbǎi kuài.", "Chiếc quần này đắt hơn chiếc kia 100 tệ."],
      ["我 可以 试 一下 吗 ？", "Wǒ kěyǐ shì yíxià ma?", "Tôi có thể thử một chút không?"],
      ["这 双 鞋 不 太 合适 ， 能 换 一 双 吗 ？", "Zhè shuāng xié bú tài héshì, néng huàn yì shuāng ma?", "Đôi giày này không vừa lắm, có thể đổi đôi khác không?"],
      ["这个 颜色 跟 那个 一样 。", "Zhège yánsè gēn nàge yíyàng.", "Màu này giống màu kia."],
      ["红色 的 没有 白色 的 那么 好看 。", "Hóngsè de méiyǒu báisè de nàme hǎokàn.", "Cái màu đỏ không đẹp bằng cái màu trắng."],
      ["今天 比 昨天 热 多 了 。", "Jīntiān bǐ zuótiān rè duō le.", "Hôm nay nóng hơn hôm qua nhiều."],
      ["可以 用 信用卡 吗 ？", "Kěyǐ yòng xìnyòngkǎ ma?", "Có thể dùng thẻ tín dụng không?"],
      ["我 对 这 件 衣服 很 满意 。", "Wǒ duì zhè jiàn yīfu hěn mǎnyì.", "Tôi rất hài lòng với bộ quần áo này."],
      ["这 家 商店 的 东西 比较 便宜 。", "Zhè jiā shāngdiàn de dōngxi bǐjiào piányi.", "Đồ của cửa hàng này khá rẻ."]
    ],
    qa: [
      ["你喜欢什么颜色？", "Nǐ xǐhuan shénme yánsè?", "Bạn thích màu gì?", "我喜欢蓝色。"],
      ["你觉得网上买东西便宜还是商店便宜？", "Nǐ juéde wǎng shang mǎi dōngxi piányi háishi shāngdiàn piányi?", "Bạn thấy mua trên mạng rẻ hay ở cửa hàng rẻ?", "我觉得网上比商店便宜一点儿。"],
      ["你和你妈妈谁高？", "Nǐ hé nǐ māma shéi gāo?", "Bạn và mẹ bạn ai cao hơn?", "我比我妈妈高一点儿。"],
      ["买衣服的时候你会先试一下吗？", "Mǎi yīfu de shíhou nǐ huì xiān shì yíxià ma?", "Khi mua quần áo bạn có thử trước không?", "会，我一般先试一下，合适就买。"]
    ]
  },

  {
    id: 4, title: "天气越来越冷了", py: "Tiānqì yuèláiyuè lěng le", vi: "Trời ngày càng lạnh",
    words: [
      ["季节", "jìjié", "mùa", "quý tiết"],
      ["春天", "chūntiān", "mùa xuân", "xuân thiên"],
      ["夏天", "xiàtiān", "mùa hè", "hạ thiên"],
      ["秋天", "qiūtiān", "mùa thu", "thu thiên"],
      ["冬天", "dōngtiān", "mùa đông", "đông thiên"],
      ["刮风", "guā fēng", "nổi gió, có gió", "quát phong"],
      ["下雪", "xià xuě", "tuyết rơi", "hạ tuyết"],
      ["越来越", "yuèláiyuè", "càng ngày càng", ""],
      ["温度", "wēndù", "nhiệt độ", "ôn độ"],
      ["舒服", "shūfu", "dễ chịu, thoải mái", "thư phục"],
      ["变化", "biànhuà", "thay đổi, biến đổi", "biến hóa"],
      ["习惯", "xíguàn", "thói quen; quen với", "tập quán"],
      ["带", "dài", "mang, đem theo", "đới"],
      ["伞", "sǎn", "cái ô", "tản"]
    ],
    grammar: [
      {
        name: "越来越 / 越……越……", pattern: "越来越 + adj ; 越 + V/adj, 越 + adj",
        explain: "越来越: ngày càng… (theo thời gian). 越A越B: càng A thì càng B.",
        examples: ["天气越来越冷了。", "雨越下越大。"],
        tasks: [
          { vi: "Nói về tiếng Trung của bạn (dùng 越来越).", re: "越来越", sample: "我的汉语越来越好了。" },
          { vi: "Nói \"càng học càng thích\" về một thứ bạn học.", re: "越.+越", sample: "汉语我越学越喜欢。" }
        ]
      },
      {
        name: "了 chỉ sự thay đổi", pattern: "… + 了 (cuối câu)",
        explain: "了 cuối câu cho biết tình huống đã THAY ĐỔI so với trước: 刮风了 (bắt đầu có gió rồi), 我习惯了 (giờ đã quen rồi).",
        examples: ["外面刮风了。", "我已经习惯这儿的天气了。"],
        tasks: [
          { vi: "Nói trời bắt đầu mưa rồi.", re: "了", sample: "下雨了，快回家吧。" }
        ]
      }
    ],
    sentences: [
      ["天气 越来越 冷 了 。", "Tiānqì yuèláiyuè lěng le.", "Trời ngày càng lạnh."],
      ["雨 越 下 越 大 。", "Yǔ yuè xià yuè dà.", "Mưa càng lúc càng to."],
      ["秋天 是 河内 最 舒服 的 季节 。", "Qiūtiān shì Hénèi zuì shūfu de jìjié.", "Mùa thu là mùa dễ chịu nhất ở Hà Nội."],
      ["外面 刮风 了 ， 多 穿 点儿 衣服 吧 。", "Wàimiàn guā fēng le, duō chuān diǎnr yīfu ba.", "Bên ngoài nổi gió rồi, mặc thêm áo đi."],
      ["今天 温度 比较 低 ， 只 有 十 度 。", "Jīntiān wēndù bǐjiào dī, zhǐ yǒu shí dù.", "Hôm nay nhiệt độ khá thấp, chỉ có 10 độ."],
      ["我 已经 习惯 这儿 的 天气 了 。", "Wǒ yǐjīng xíguàn zhèr de tiānqì le.", "Tôi đã quen với thời tiết ở đây rồi."],
      ["出门 的 时候 别 忘了 带 伞 。", "Chūmén de shíhou bié wàngle dài sǎn.", "Lúc ra ngoài đừng quên mang ô."],
      ["这 几 年 天气 变化 很 大 。", "Zhè jǐ nián tiānqì biànhuà hěn dà.", "Mấy năm nay thời tiết thay đổi rất nhiều."],
      ["她 的 汉语 越 说 越 好 。", "Tā de Hànyǔ yuè shuō yuè hǎo.", "Tiếng Trung của cô ấy càng nói càng giỏi."],
      ["你 见过 下雪 吗 ？", "Nǐ jiànguo xià xuě ma?", "Bạn đã từng thấy tuyết rơi chưa?"]
    ],
    qa: [
      ["你最喜欢哪个季节？为什么？", "Nǐ zuì xǐhuan nǎge jìjié? Wèishénme?", "Bạn thích mùa nào nhất? Vì sao?", "我最喜欢秋天，因为秋天不冷也不热，很舒服。"],
      ["今天天气怎么样？", "Jīntiān tiānqì zěnmeyàng?", "Hôm nay thời tiết thế nào?", "今天有点儿冷，还刮风了。"],
      ["你见过下雪吗？", "Nǐ jiànguo xià xuě ma?", "Bạn từng thấy tuyết rơi chưa?", "我没见过下雪，我很想去看看。"],
      ["你的汉语怎么样了？", "Nǐ de Hànyǔ zěnmeyàng le?", "Tiếng Trung của bạn giờ thế nào rồi?", "我的汉语越来越好了。"]
    ]
  },

  {
    id: 5, title: "在饭馆", py: "Zài fànguǎn", vi: "Ở nhà hàng",
    words: [
      ["菜单", "càidān", "thực đơn", "thái đơn"],
      ["点菜", "diǎn cài", "gọi món", "điểm thái"],
      ["服务员", "fúwùyuán", "nhân viên phục vụ", "phục vụ viên"],
      ["饿", "è", "đói", "ngạ"],
      ["饱", "bǎo", "no", "bão"],
      ["甜", "tián", "ngọt", "điềm"],
      ["辣", "là", "cay", "lạt"],
      ["碗", "wǎn", "bát, chén", "oản"],
      ["筷子", "kuàizi", "đũa", "khoái tử"],
      ["盘子", "pánzi", "đĩa", "bàn tử"],
      ["完", "wán", "xong, hết", "hoàn"],
      ["错", "cuò", "sai", "thác"],
      ["打包", "dǎbāo", "gói mang về", "đả bao"],
      ["环境", "huánjìng", "môi trường, không gian", "hoàn cảnh"]
    ],
    grammar: [
      {
        name: "Câu chữ 把", pattern: "S + 把 + tân ngữ + V + thành phần khác (了/完/在…/给…)",
        explain: "Nhấn mạnh việc xử lý một đồ vật cụ thể và kết quả của nó. Động từ không đứng trơ trọi: phải có 了, bổ ngữ, 在/给 + …",
        examples: ["请把菜单给我。", "你把这碗米饭吃完吧。"],
        tasks: [
          { vi: "Nhờ người khác đưa bạn đôi đũa.", re: "把.+给", sample: "请把筷子给我。" },
          { vi: "Nói bạn đã làm xong bài tập (dùng 把).", re: "把.+完", sample: "我把作业写完了。" }
        ]
      },
      {
        name: "Bổ ngữ kết quả", pattern: "V + 完 / 好 / 错 / 懂 / 到 (+ 了)",
        explain: "Đặt sau động từ để nói kết quả: 吃完 (ăn xong), 想好 (nghĩ kỹ rồi), 写错 (viết sai), 听懂 (nghe hiểu), 找到 (tìm thấy). Phủ định: 没 + V + bổ ngữ.",
        examples: ["我还没想好吃什么。", "对不起，我写错了。"],
        tasks: [
          { vi: "Nói bạn đã tìm thấy chìa khóa (钥匙 yàoshi).", re: "(完|好|错|懂|到|见)了?", sample: "我找到钥匙了。" }
        ]
      }
    ],
    sentences: [
      ["服务员 ， 请 把 菜单 给 我 。", "Fúwùyuán, qǐng bǎ càidān gěi wǒ.", "Phục vụ ơi, cho tôi xin thực đơn."],
      ["我 已经 吃 饱 了 。", "Wǒ yǐjīng chī bǎo le.", "Tôi ăn no rồi."],
      ["你 把 这 碗 米饭 吃完 吧 。", "Nǐ bǎ zhè wǎn mǐfàn chīwán ba.", "Bạn ăn hết bát cơm này đi."],
      ["这个 菜 有点儿 辣 。", "Zhège cài yǒudiǎnr là.", "Món này hơi cay."],
      ["请 把 剩下 的 菜 打包 。", "Qǐng bǎ shèngxià de cài dǎbāo.", "Làm ơn gói phần đồ ăn còn lại."],
      ["我 还 没 想好 吃 什么 。", "Wǒ hái méi xiǎnghǎo chī shénme.", "Tôi vẫn chưa nghĩ xong ăn gì."],
      ["他 把 盘子 放在 桌子 上 了 。", "Tā bǎ pánzi fàng zài zhuōzi shang le.", "Anh ấy đặt cái đĩa lên bàn rồi."],
      ["你 会 用 筷子 吗 ？", "Nǐ huì yòng kuàizi ma?", "Bạn biết dùng đũa không?"],
      ["这 家 饭馆 的 环境 很 好 。", "Zhè jiā fànguǎn de huánjìng hěn hǎo.", "Không gian nhà hàng này rất tốt."],
      ["对不起 ， 我 写错 了 。", "Duìbuqǐ, wǒ xiěcuò le.", "Xin lỗi, tôi viết sai rồi."]
    ],
    qa: [
      ["你喜欢吃辣的还是甜的？", "Nǐ xǐhuan chī là de háishi tián de?", "Bạn thích ăn cay hay ngọt?", "我喜欢吃甜的，不太喜欢辣的。"],
      ["你吃饱了吗？", "Nǐ chī bǎo le ma?", "Bạn ăn no chưa?", "我吃饱了，谢谢。"],
      ["你会用筷子吗？", "Nǐ huì yòng kuàizi ma?", "Bạn biết dùng đũa không?", "会，我们越南人也用筷子。"],
      ["吃不完的菜你怎么办？", "Chī bu wán de cài nǐ zěnme bàn?", "Đồ ăn không hết bạn làm thế nào?", "我一般把吃不完的菜打包带回家。"]
    ]
  },

  {
    id: 6, title: "交通出行", py: "Jiāotōng chūxíng", vi: "Đi lại, giao thông",
    words: [
      ["地铁", "dìtiě", "tàu điện ngầm", "địa thiết"],
      ["公共汽车", "gōnggòng qìchē", "xe buýt", "công cộng khí xa"],
      ["站", "zhàn", "bến, trạm, ga", "trạm"],
      ["堵车", "dǔchē", "tắc đường", "đổ xa"],
      ["骑", "qí", "đi, cưỡi (xe đạp, xe máy)", "kỵ"],
      ["自行车", "zìxíngchē", "xe đạp", "tự hành xa"],
      ["方便", "fāngbiàn", "tiện lợi", "phương tiện"],
      ["拿", "ná", "cầm, lấy", "nã"],
      ["回来", "huílai", "quay về (phía người nói)", "hồi lai"],
      ["出来", "chūlai", "ra (phía người nói)", "xuất lai"],
      ["楼", "lóu", "tòa nhà, tầng", "lâu"],
      ["停", "tíng", "dừng", "đình"],
      ["迟到", "chídào", "đến muộn", "trì đáo"],
      ["司机", "sījī", "tài xế", "tư cơ"]
    ],
    grammar: [
      {
        name: "Bổ ngữ xu hướng", pattern: "V + 来/去 ; V + 上/下/进/出/回/过 + 来/去",
        explain: "来: hướng về phía người nói; 去: hướng ra xa người nói. Ví dụ 走下来 (đi xuống đây), 拿出来 (lấy ra), 跑回去 (chạy về đó).",
        examples: ["他从楼上走下来了。", "请把你的书拿出来。"],
        tasks: [
          { vi: "Bảo các bạn lấy điện thoại ra.", re: "(拿|带|走|跑)(出|进|回|上|下|过)?(来|去)", sample: "请把手机拿出来。" }
        ]
      },
      {
        name: "一……就……", pattern: "一 + V1，就 + V2",
        explain: "Hễ / vừa… là… — hai việc xảy ra liền nhau.",
        examples: ["我一下班就回家。", "他一到家就给我打电话。"],
        tasks: [
          { vi: "Nói việc đầu tiên bạn làm ngay khi về đến nhà.", re: "一.+就", sample: "我一到家就洗澡。" }
        ]
      }
    ],
    sentences: [
      ["我 一 下班 就 回家 。", "Wǒ yí xiàbān jiù huíjiā.", "Tôi vừa tan làm là về nhà."],
      ["坐 地铁 比 坐 公共汽车 方便 。", "Zuò dìtiě bǐ zuò gōnggòng qìchē fāngbiàn.", "Đi tàu điện ngầm tiện hơn đi xe buýt."],
      ["早上 经常 堵车 ， 所以 我 骑 自行车 上班 。", "Zǎoshang jīngcháng dǔchē, suǒyǐ wǒ qí zìxíngchē shàngbān.", "Buổi sáng hay tắc đường nên tôi đạp xe đi làm."],
      ["他 从 楼 上 走 下来 了 。", "Tā cóng lóu shang zǒu xiàlai le.", "Anh ấy từ trên lầu đi xuống rồi."],
      ["你 什么 时候 回来 ？", "Nǐ shénme shíhou huílai?", "Khi nào bạn về?"],
      ["请 把 你 的 书 拿 出来 。", "Qǐng bǎ nǐ de shū ná chūlai.", "Hãy lấy sách của bạn ra."],
      ["下 一 站 是 哪儿 ？", "Xià yí zhàn shì nǎr?", "Bến tiếp theo là đâu?"],
      ["对不起 ， 我 迟到 了 。", "Duìbuqǐ, wǒ chídào le.", "Xin lỗi, tôi đến muộn."],
      ["他 一 到 家 就 给 我 打 电话 。", "Tā yí dào jiā jiù gěi wǒ dǎ diànhuà.", "Anh ấy vừa về đến nhà là gọi điện cho tôi."],
      ["司机 ， 请 在 前面 停 一下 。", "Sījī, qǐng zài qiánmiàn tíng yíxià.", "Bác tài, làm ơn dừng ở phía trước một chút."]
    ],
    qa: [
      ["你每天怎么上班？", "Nǐ měitiān zěnme shàngbān?", "Hằng ngày bạn đi làm bằng gì?", "我每天骑摩托车上班。"],
      ["你上班的路上经常堵车吗？", "Nǐ shàngbān de lù shang jīngcháng dǔchē ma?", "Đường đi làm của bạn có hay tắc không?", "经常堵车，特别是早上。"],
      ["你下班以后一般做什么？", "Nǐ xiàbān yǐhòu yìbān zuò shénme?", "Tan làm bạn thường làm gì?", "我一下班就回家做饭。"],
      ["你觉得坐地铁方便吗？", "Nǐ juéde zuò dìtiě fāngbiàn ma?", "Bạn thấy đi tàu điện ngầm có tiện không?", "我觉得坐地铁很方便，又快又便宜。"]
    ]
  },

  {
    id: 7, title: "学习汉语", py: "Xuéxí Hànyǔ", vi: "Học tiếng Trung",
    words: [
      ["练习", "liànxí", "luyện tập; bài tập", "luyện tập"],
      ["复习", "fùxí", "ôn tập", "phục tập"],
      ["水平", "shuǐpíng", "trình độ", "thủy bình"],
      ["提高", "tígāo", "nâng cao", "đề cao"],
      ["懂", "dǒng", "hiểu", "đổng"],
      ["清楚", "qīngchu", "rõ ràng", "thanh sở"],
      ["记", "jì", "ghi nhớ; ghi lại", "ký"],
      ["词典", "cídiǎn", "từ điển", "từ điển"],
      ["句子", "jùzi", "câu", "cú tử"],
      ["发音", "fāyīn", "phát âm", "phát âm"],
      ["努力", "nǔlì", "nỗ lực, chăm chỉ", "nỗ lực"],
      ["认真", "rènzhēn", "nghiêm túc, chăm chú", "nhận chân"],
      ["简单", "jiǎndān", "đơn giản", "giản đơn"],
      ["记得", "jìde", "nhớ", "ký đắc"]
    ],
    grammar: [
      {
        name: "Bổ ngữ khả năng", pattern: "V + 得 + bổ ngữ (có thể) ; V + 不 + bổ ngữ (không thể)",
        explain: "听得懂: nghe hiểu được; 看不清楚: nhìn không rõ; 记不住: nhớ không nổi; 吃不完: ăn không hết.",
        examples: ["老师说的话我都听得懂。", "这么多生词，我记不住。"],
        tasks: [
          { vi: "Nói bạn có xem hiểu phim Trung Quốc không.", re: "(得|不)(懂|清楚|完|了|住|到)", sample: "简单的中国电影我看得懂。" }
        ]
      },
      {
        name: "Bổ ngữ trạng thái (得)", pattern: "(V + O) + V + 得 + (很) adj",
        explain: "Nhận xét một hành động được làm thế nào: 说得很好 (nói rất giỏi), 跑得很快. Nếu có tân ngữ thì lặp động từ hoặc đưa tân ngữ lên trước: 她汉语说得很好.",
        examples: ["她汉语说得很好。", "他篮球打得很好。"],
        tasks: [
          { vi: "Nhận xét một người bạn biết nấu ăn thế nào.", re: "得(很|非常|太|不|特别|真|比较)", sample: "我妈妈做饭做得非常好吃。" }
        ]
      }
    ],
    sentences: [
      ["老师 说 的 话 我 都 听得懂 。", "Lǎoshī shuō de huà wǒ dōu tīng de dǒng.", "Lời thầy cô nói tôi đều nghe hiểu."],
      ["黑板 上 的 字 太 小 ， 我 看不清楚 。", "Hēibǎn shang de zì tài xiǎo, wǒ kàn bu qīngchu.", "Chữ trên bảng nhỏ quá, tôi nhìn không rõ."],
      ["她 汉语 说得 很 好 。", "Tā Hànyǔ shuō de hěn hǎo.", "Cô ấy nói tiếng Trung rất giỏi."],
      ["你 的 发音 越来越 清楚 了 。", "Nǐ de fāyīn yuèláiyuè qīngchu le.", "Phát âm của bạn ngày càng rõ rồi."],
      ["每天 练习 半 个 小时 ， 你 的 水平 一定 会 提高 。", "Měitiān liànxí bàn ge xiǎoshí, nǐ de shuǐpíng yídìng huì tígāo.", "Mỗi ngày luyện nửa tiếng, trình độ của bạn chắc chắn sẽ nâng cao."],
      ["这么 多 生词 ， 我 记不住 。", "Zhème duō shēngcí, wǒ jì bu zhù.", "Nhiều từ mới thế này, tôi nhớ không nổi."],
      ["他 学习 很 认真 ， 也 很 努力 。", "Tā xuéxí hěn rènzhēn, yě hěn nǔlì.", "Anh ấy học rất nghiêm túc, cũng rất chăm chỉ."],
      ["这个 句子 很 简单 ， 你 能 翻译 一下 吗 ？", "Zhège jùzi hěn jiǎndān, nǐ néng fānyì yíxià ma?", "Câu này rất đơn giản, bạn dịch thử được không?"],
      ["你 还 记得 我 吗 ？", "Nǐ hái jìde wǒ ma?", "Bạn còn nhớ tôi không?"],
      ["考试 以前 要 好好儿 复习 。", "Kǎoshì yǐqián yào hǎohāor fùxí.", "Trước khi thi phải ôn tập thật tốt."]
    ],
    qa: [
      ["你学汉语学了多长时间了？", "Nǐ xué Hànyǔ xuéle duō cháng shíjiān le?", "Bạn học tiếng Trung được bao lâu rồi?", "我学汉语学了一年了。"],
      ["中国电影你看得懂吗？", "Zhōngguó diànyǐng nǐ kàn de dǒng ma?", "Phim Trung Quốc bạn xem có hiểu không?", "简单的看得懂，难的还看不懂。"],
      ["你每天练习多长时间？", "Nǐ měitiān liànxí duō cháng shíjiān?", "Mỗi ngày bạn luyện bao lâu?", "我每天练习一个小时。"],
      ["你觉得汉语难不难？", "Nǐ juéde Hànyǔ nán bu nán?", "Bạn thấy tiếng Trung có khó không?", "我觉得汉字有点儿难，但是发音不太难。"]
    ]
  },

  {
    id: 8, title: "健康与运动", py: "Jiànkāng yǔ yùndòng", vi: "Sức khỏe và thể thao",
    words: [
      ["身体", "shēntǐ", "cơ thể, sức khỏe", "thân thể"],
      ["健康", "jiànkāng", "khỏe mạnh, sức khỏe", "kiện khang"],
      ["锻炼", "duànliàn", "rèn luyện", "đoán luyện"],
      ["跑步", "pǎobù", "chạy bộ", "bào bộ"],
      ["游泳", "yóuyǒng", "bơi", "du vịnh"],
      ["感冒", "gǎnmào", "cảm cúm", "cảm mạo"],
      ["发烧", "fāshāo", "sốt", "phát thiêu"],
      ["疼", "téng", "đau", "đông"],
      ["医院", "yīyuàn", "bệnh viện", "y viện"],
      ["药", "yào", "thuốc", "dược"],
      ["被", "bèi", "bị, được (câu bị động)", "bị"],
      ["虽然", "suīrán", "mặc dù", "tuy nhiên"],
      ["但是", "dànshì", "nhưng", "đãn thị"],
      ["坚持", "jiānchí", "kiên trì", "kiên trì"]
    ],
    grammar: [
      {
        name: "Câu bị động 被", pattern: "Đồ vật/Người bị tác động + 被 + (người làm) + V + thành phần khác",
        explain: "Nói ai/cái gì bị (thường là chuyện không mong muốn). Động từ phía sau thường có 了, bổ ngữ: 被拿走了, 被骑走了.",
        examples: ["我的手机被弟弟拿走了。", "我的自行车被人骑走了。"],
        tasks: [
          { vi: "Nói đồ ăn của bạn bị con mèo ăn mất.", re: "被", sample: "我的鱼被猫吃了。" }
        ]
      },
      {
        name: "虽然……但是……", pattern: "虽然 A，但是 B",
        explain: "Mặc dù A nhưng B. Tiếng Trung dùng CẢ HAI vế (khác tiếng Anh).",
        examples: ["虽然很累，但是我每天都去跑步。"],
        tasks: [
          { vi: "Nói tiếng Trung tuy khó nhưng bạn rất thích.", re: "虽然.+但是", sample: "虽然汉语很难，但是我很喜欢。" }
        ]
      }
    ],
    sentences: [
      ["虽然 很 累 ， 但是 我 每天 都 去 跑步 。", "Suīrán hěn lèi, dànshì wǒ měitiān dōu qù pǎobù.", "Mặc dù rất mệt nhưng ngày nào tôi cũng đi chạy bộ."],
      ["我 的 手机 被 弟弟 拿走 了 。", "Wǒ de shǒujī bèi dìdi názǒu le.", "Điện thoại của tôi bị em trai cầm đi rồi."],
      ["我 感冒 了 ， 还 有点儿 发烧 。", "Wǒ gǎnmào le, hái yǒudiǎnr fāshāo.", "Tôi bị cảm, còn hơi sốt."],
      ["你 哪儿 疼 ？", "Nǐ nǎr téng?", "Bạn đau ở đâu?"],
      ["你 应该 去 医院 看看 。", "Nǐ yīnggāi qù yīyuàn kànkan.", "Bạn nên đến bệnh viện khám xem."],
      ["这 药 一 天 吃 三 次 。", "Zhè yào yì tiān chī sān cì.", "Thuốc này một ngày uống ba lần."],
      ["坚持 锻炼 ， 身体 会 越来越 健康 。", "Jiānchí duànliàn, shēntǐ huì yuèláiyuè jiànkāng.", "Kiên trì rèn luyện, cơ thể sẽ ngày càng khỏe."],
      ["我 的 自行车 被 人 骑走 了 。", "Wǒ de zìxíngchē bèi rén qízǒu le.", "Xe đạp của tôi bị người ta đạp đi mất rồi."],
      ["虽然 他 不 高 ， 但是 篮球 打得 很 好 。", "Suīrán tā bù gāo, dànshì lánqiú dǎ de hěn hǎo.", "Tuy anh ấy không cao nhưng chơi bóng rổ rất giỏi."],
      ["夏天 我 常常 去 游泳 。", "Xiàtiān wǒ chángcháng qù yóuyǒng.", "Mùa hè tôi thường đi bơi."]
    ],
    qa: [
      ["你平时怎么锻炼身体？", "Nǐ píngshí zěnme duànliàn shēntǐ?", "Bình thường bạn rèn luyện sức khỏe thế nào?", "我每天早上跑步半个小时。"],
      ["你会游泳吗？", "Nǐ huì yóuyǒng ma?", "Bạn biết bơi không?", "我会游泳，但是游得不太好。"],
      ["感冒了你一般怎么办？", "Gǎnmào le nǐ yìbān zěnme bàn?", "Bị cảm bạn thường làm thế nào?", "我一般多喝水，多休息，有时候吃点儿药。"],
      ["你的东西被人拿走过吗？", "Nǐ de dōngxi bèi rén názǒu guo ma?", "Đồ của bạn đã từng bị người khác lấy mất chưa?", "我的自行车被人骑走过一次。"]
    ]
  },

  {
    id: 9, title: "工作和朋友", py: "Gōngzuò hé péngyou", vi: "Công việc và bạn bè",
    words: [
      ["公司", "gōngsī", "công ty", "công ty"],
      ["经理", "jīnglǐ", "giám đốc, quản lý", "kinh lý"],
      ["会议", "huìyì", "cuộc họp", "hội nghị"],
      ["帮助", "bāngzhù", "giúp đỡ", "bang trợ"],
      ["除了", "chúle", "ngoài… ra", "trừ liễu"],
      ["而且", "érqiě", "mà còn, hơn nữa", "nhi thả"],
      ["一边", "yìbiān", "vừa… (vừa…)", "nhất biên"],
      ["聊天儿", "liáotiānr", "tán gẫu, trò chuyện", "liêu thiên"],
      ["关心", "guānxīn", "quan tâm", "quan tâm"],
      ["热情", "rèqíng", "nhiệt tình", "nhiệt tình"],
      ["着急", "zháojí", "sốt ruột, lo lắng", ""],
      ["请假", "qǐngjià", "xin nghỉ phép", "thỉnh giả"],
      ["加班", "jiābān", "tăng ca", "gia ban"],
      ["同意", "tóngyì", "đồng ý", "đồng ý"]
    ],
    grammar: [
      {
        name: "除了……以外", pattern: "除了 A 以外，(S) 还/也 … (bổ sung) ; 除了 A 以外，(S) 都 … (loại trừ)",
        explain: "Đi với 还/也: ngoài A ra còn có… Đi với 都: trừ A ra thì tất cả đều…",
        examples: ["除了汉语以外，她还会说英语。", "除了他以外，大家都来了。"],
        tasks: [
          { vi: "Nói ngoài tiếng Việt ra, bạn còn biết nói gì.", re: "除了.+以外", sample: "除了越南语以外，我还会说一点儿汉语。" }
        ]
      },
      {
        name: "一边……一边…… / 不但……而且……", pattern: "一边 V1 一边 V2 ; 不但 A，而且 B",
        explain: "一边…一边: vừa làm việc này vừa làm việc kia (cùng lúc). 不但…而且: không những… mà còn…",
        examples: ["我们一边喝咖啡一边聊天儿。", "我的同事不但很热情，而且很关心别人。"],
        tasks: [
          { vi: "Nói bạn thích vừa nấu ăn vừa nghe nhạc.", re: "一边.+一边", sample: "我喜欢一边做饭一边听音乐。" },
          { vi: "Khen một người: không những… mà còn…", re: "不但.+而且", sample: "她不但很漂亮，而且很聪明。" }
        ]
      }
    ],
    sentences: [
      ["除了 汉语 以外 ， 她 还 会 说 英语 。", "Chúle Hànyǔ yǐwài, tā hái huì shuō Yīngyǔ.", "Ngoài tiếng Trung ra, cô ấy còn biết nói tiếng Anh."],
      ["我们 一边 喝 咖啡 一边 聊天儿 。", "Wǒmen yìbiān hē kāfēi yìbiān liáotiānr.", "Chúng tôi vừa uống cà phê vừa trò chuyện."],
      ["我 的 同事 不但 很 热情 ， 而且 很 关心 别人 。", "Wǒ de tóngshì búdàn hěn rèqíng, érqiě hěn guānxīn biérén.", "Đồng nghiệp tôi không những nhiệt tình mà còn rất quan tâm người khác."],
      ["明天 我 要 跟 经理 请假 。", "Míngtiān wǒ yào gēn jīnglǐ qǐngjià.", "Ngày mai tôi phải xin giám đốc nghỉ phép."],
      ["今天 晚上 又 要 加班 了 。", "Jīntiān wǎnshang yòu yào jiābān le.", "Tối nay lại phải tăng ca rồi."],
      ["别 着急 ， 我 来 帮助 你 。", "Bié zháojí, wǒ lái bāngzhù nǐ.", "Đừng sốt ruột, để tôi giúp bạn."],
      ["经理 同意 了 我们 的 计划 。", "Jīnglǐ tóngyì le wǒmen de jìhuà.", "Giám đốc đã đồng ý kế hoạch của chúng ta."],
      ["会议 是 几 点 开始 的 ？", "Huìyì shì jǐ diǎn kāishǐ de?", "Cuộc họp bắt đầu lúc mấy giờ?"],
      ["除了 他 以外 ， 大家 都 来 了 。", "Chúle tā yǐwài, dàjiā dōu lái le.", "Trừ anh ấy ra, mọi người đều đến rồi."],
      ["他 一边 听 音乐 一边 做 作业 。", "Tā yìbiān tīng yīnyuè yìbiān zuò zuòyè.", "Cậu ấy vừa nghe nhạc vừa làm bài tập."]
    ],
    qa: [
      ["除了汉语以外，你还会说什么语言？", "Chúle Hànyǔ yǐwài, nǐ hái huì shuō shénme yǔyán?", "Ngoài tiếng Trung, bạn còn biết nói tiếng gì?", "除了汉语以外，我还会说一点儿英语。"],
      ["你经常加班吗？", "Nǐ jīngcháng jiābān ma?", "Bạn có hay tăng ca không?", "不经常，但是这个月加班比较多。"],
      ["你喜欢一边做什么一边听音乐？", "Nǐ xǐhuan yìbiān zuò shénme yìbiān tīng yīnyuè?", "Bạn thích vừa làm gì vừa nghe nhạc?", "我喜欢一边做饭一边听音乐。"],
      ["你的同事怎么样？", "Nǐ de tóngshì zěnmeyàng?", "Đồng nghiệp của bạn thế nào?", "我的同事不但很热情，而且很喜欢帮助别人。"]
    ]
  },

  {
    id: 10, title: "去旅游", py: "Qù lǚyóu", vi: "Đi du lịch",
    words: [
      ["旅游", "lǚyóu", "du lịch", "lữ du"],
      ["护照", "hùzhào", "hộ chiếu", "hộ chiếu"],
      ["行李箱", "xínglixiāng", "va li", "hành lý tương"],
      ["宾馆", "bīnguǎn", "khách sạn", "tân quán"],
      ["照片", "zhàopiàn", "tấm ảnh", "chiếu phiến"],
      ["照相", "zhàoxiàng", "chụp ảnh", "chiếu tướng"],
      ["风景", "fēngjǐng", "phong cảnh", "phong cảnh"],
      ["如果", "rúguǒ", "nếu", "như quả"],
      ["只要", "zhǐyào", "chỉ cần", "chỉ yếu"],
      ["着", "zhe", "đang (trạng thái kéo dài)", ""],
      ["地图", "dìtú", "bản đồ", "địa đồ"],
      ["游客", "yóukè", "du khách", "du khách"],
      ["订", "dìng", "đặt (phòng, vé)", "đính"],
      ["机场", "jīchǎng", "sân bay", "cơ trường"]
    ],
    grammar: [
      {
        name: "如果……就…… / 只要……就……", pattern: "如果 A，(S) 就 B ; 只要 A，(S) 就 B",
        explain: "如果…就: nếu A thì B. 只要…就: chỉ cần A là B (điều kiện đủ, nhẹ nhàng).",
        examples: ["如果明天不下雨，我们就去爬山。", "只要有时间，我就去旅游。"],
        tasks: [
          { vi: "Nói nếu cuối tuần trời đẹp bạn sẽ làm gì.", re: "如果.+就", sample: "如果周末天气好，我就去公园。" },
          { vi: "Nói chỉ cần có thời gian là bạn học tiếng Trung.", re: "只要.+就", sample: "只要有时间，我就学汉语。" }
        ]
      },
      {
        name: "Trợ từ 着", pattern: "V + 着 (trạng thái kéo dài) ; V1 着 V2 (làm V2 trong trạng thái V1)",
        explain: "门开着: cửa đang mở. 拿着地图找路: cầm bản đồ tìm đường. 坐着聊天儿: ngồi trò chuyện.",
        examples: ["门开着，里面没有人。", "他拿着地图找路。"],
        tasks: [
          { vi: "Tả một người đang đứng nói chuyện điện thoại.", re: "着", sample: "他站着打电话。" }
        ]
      }
    ],
    sentences: [
      ["如果 明天 不 下雨 ， 我们 就 去 爬山 。", "Rúguǒ míngtiān bú xià yǔ, wǒmen jiù qù páshān.", "Nếu mai không mưa thì chúng ta đi leo núi."],
      ["只要 有 时间 ， 我 就 去 旅游 。", "Zhǐyào yǒu shíjiān, wǒ jiù qù lǚyóu.", "Chỉ cần có thời gian là tôi đi du lịch."],
      ["别 忘了 带 护照 。", "Bié wàngle dài hùzhào.", "Đừng quên mang hộ chiếu."],
      ["我 已经 在 网 上 订好 宾馆 了 。", "Wǒ yǐjīng zài wǎng shang dìnghǎo bīnguǎn le.", "Tôi đã đặt xong khách sạn trên mạng rồi."],
      ["这儿 的 风景 太 美 了 ， 我们 照 张 相 吧 。", "Zhèr de fēngjǐng tài měi le, wǒmen zhào zhāng xiàng ba.", "Phong cảnh ở đây đẹp quá, mình chụp tấm ảnh đi."],
      ["门 开着 ， 里面 没有 人 。", "Mén kāizhe, lǐmiàn méiyǒu rén.", "Cửa đang mở, bên trong không có ai."],
      ["他 拿着 地图 找 路 。", "Tā názhe dìtú zhǎo lù.", "Anh ấy cầm bản đồ tìm đường."],
      ["我们 坐着 聊天儿 吧 。", "Wǒmen zuòzhe liáotiānr ba.", "Chúng ta ngồi trò chuyện đi."],
      ["机场 里 有 很 多 游客 。", "Jīchǎng li yǒu hěn duō yóukè.", "Trong sân bay có rất nhiều du khách."],
      ["如果 你 有 问题 ， 就 给 我 打 电话 。", "Rúguǒ nǐ yǒu wèntí, jiù gěi wǒ dǎ diànhuà.", "Nếu bạn có vấn đề gì thì gọi điện cho tôi."]
    ],
    qa: [
      ["如果有一个月的假，你想去哪儿旅游？", "Rúguǒ yǒu yí ge yuè de jià, nǐ xiǎng qù nǎr lǚyóu?", "Nếu được nghỉ một tháng, bạn muốn đi du lịch đâu?", "如果有一个月的假，我想去中国旅游。"],
      ["你旅游的时候喜欢照相吗？", "Nǐ lǚyóu de shíhou xǐhuan zhàoxiàng ma?", "Khi đi du lịch bạn có thích chụp ảnh không?", "很喜欢，我每次都照很多照片。"],
      ["旅游以前你要准备什么？", "Lǚyóu yǐqián nǐ yào zhǔnbèi shénme?", "Trước khi đi du lịch bạn cần chuẩn bị gì?", "我要订宾馆、订机票，还要准备护照。"],
      ["你去过哪些地方旅游？", "Nǐ qùguo nǎxiē dìfang lǚyóu?", "Bạn đã đi du lịch những nơi nào?", "我去过北京和上海。"]
    ]
  }
];
