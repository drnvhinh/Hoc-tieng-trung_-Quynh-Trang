/*
 * 20 bài theo mục lục giáo trình HSK标准教程 3 (tên bài, từ mới, điểm ngữ pháp).
 * Câu ví dụ, câu mẫu, hỏi đáp là nội dung tự soạn (không chép bài khóa).
 *
 * Từ vựng: [chữ Hán, pinyin, nghĩa, Hán Việt, câu ví dụ, pinyin ví dụ, nghĩa ví dụ]
 * Câu mẫu: [câu tách từ bằng dấu cách, pinyin, nghĩa]
 * Hỏi đáp: [câu hỏi, pinyin, nghĩa, câu trả lời mẫu]
 * Ngữ pháp: tasks[].re kiểm tra câu nói/gõ có dùng đúng cấu trúc.
 */
window.DATA_VERSION = 2;
window.LESSONS = [
  {
    id: 1, title: "周末你有什么打算", py: "Zhōumò nǐ yǒu shénme dǎsuan", vi: "Cuối tuần bạn có dự định gì",
    words: [
      ["周末", "zhōumò", "cuối tuần", "chu mạt", "这个周末我想在家休息。", "Zhège zhōumò wǒ xiǎng zài jiā xiūxi.", "Cuối tuần này tôi muốn nghỉ ở nhà."],
      ["打算", "dǎsuan", "dự định; định", "đả toán", "你打算什么时候去北京？", "Nǐ dǎsuan shénme shíhou qù Běijīng?", "Bạn định khi nào đi Bắc Kinh?"],
      ["啊", "a", "trợ từ cảm thán (quá, nhỉ, nhé)", "a", "今天天气真好啊！", "Jīntiān tiānqì zhēn hǎo a!", "Hôm nay trời đẹp quá!"],
      ["跟", "gēn", "với, cùng", "căn", "我跟妈妈一起去超市。", "Wǒ gēn māma yìqǐ qù chāoshì.", "Tôi cùng mẹ đi siêu thị."],
      ["一直", "yìzhí", "luôn luôn, suốt; thẳng", "nhất trực", "他一直在学习汉语。", "Tā yìzhí zài xuéxí Hànyǔ.", "Anh ấy vẫn luôn học tiếng Trung."],
      ["游戏", "yóuxì", "trò chơi, game", "du hí", "孩子们在玩游戏。", "Háizimen zài wán yóuxì.", "Bọn trẻ đang chơi trò chơi."],
      ["作业", "zuòyè", "bài tập về nhà", "tác nghiệp", "我已经做完作业了。", "Wǒ yǐjīng zuòwán zuòyè le.", "Tôi đã làm xong bài tập rồi."],
      ["着急", "zháojí", "sốt ruột, vội, lo", "", "别着急，慢慢来。", "Bié zháojí, mànmàn lái.", "Đừng vội, cứ từ từ."],
      ["复习", "fùxí", "ôn tập", "phục tập", "明天考试，今天要好好复习。", "Míngtiān kǎoshì, jīntiān yào hǎohǎo fùxí.", "Mai thi, hôm nay phải ôn thật kỹ."],
      ["南方", "nánfāng", "miền Nam, phương nam", "nam phương", "我是南方人。", "Wǒ shì nánfāng rén.", "Tôi là người miền Nam."],
      ["北方", "běifāng", "miền Bắc, phương bắc", "bắc phương", "北方的冬天很冷。", "Běifāng de dōngtiān hěn lěng.", "Mùa đông ở miền Bắc rất lạnh."],
      ["面包", "miànbāo", "bánh mì", "diện bao", "早上我吃了一个面包。", "Zǎoshang wǒ chīle yí ge miànbāo.", "Sáng nay tôi ăn một cái bánh mì."],
      ["带", "dài", "mang theo, đem", "đới", "别忘了带手机。", "Bié wàngle dài shǒujī.", "Đừng quên mang điện thoại."],
      ["地图", "dìtú", "bản đồ", "địa đồ", "我在手机上看地图。", "Wǒ zài shǒujī shang kàn dìtú.", "Tôi xem bản đồ trên điện thoại."],
      ["搬", "bān", "chuyển, dọn (nhà, đồ)", "ban", "我们下个月搬家。", "Wǒmen xià ge yuè bān jiā.", "Tháng sau chúng tôi chuyển nhà."]
    ],
    grammar: [
      {
        name: "Bổ ngữ kết quả 好", pattern: "V + 好 (+ 了)",
        explain: "好 sau động từ cho biết việc đã làm xong và làm tốt, sẵn sàng: 准备好 (chuẩn bị xong), 做好 (làm xong), 想好 (nghĩ kỹ rồi). Phủ định: 没 + V + 好.",
        examples: ["饭做好了，快来吃吧。", "我已经准备好了。"],
        tasks: [{ vi: "Nói bạn đã chuẩn bị xong hành lý.", re: "好了", sample: "我的行李已经准备好了。" }]
      },
      {
        name: "一……也/都 + 不/没 (phủ định hoàn toàn)", pattern: "一 + lượng từ (+ N) + 也/都 + 不/没 + V",
        explain: "Nhấn mạnh \"không… chút nào / chẳng… một (cái) nào\": 一点儿也不累, 一个字都没写.",
        examples: ["我一点儿也不累。", "他一口饭都没吃。"],
        tasks: [{ vi: "Nói hôm nay bạn không mệt chút nào.", re: "一.*(也|都)(不|没)", sample: "今天我一点儿也不累。" }]
      },
      {
        name: "Liên từ 那", pattern: "(Người kia nói…) 那 + đề nghị / kết luận",
        explain: "那 (= 那么) nghĩa là \"vậy thì\", dùng để tiếp lời người khác và đưa ra đề nghị hay kết luận.",
        examples: ["A：我明天没有时间。B：那我们后天去吧。"],
        tasks: [{ vi: "Bạn bè nói: \"Mai mình bận\". Hãy đề nghị đi hôm khác (dùng 那).", re: "那", sample: "那我们后天去吧。" }]
      }
    ],
    sentences: [
      ["这个 周末 你 有 什么 打算 ？", "Zhège zhōumò nǐ yǒu shénme dǎsuan?", "Cuối tuần này bạn có dự định gì?"],
      ["我 打算 跟 朋友 去 看 电影 。", "Wǒ dǎsuan gēn péngyou qù kàn diànyǐng.", "Tôi định cùng bạn đi xem phim."],
      ["作业 我 已经 做好 了 。", "Zuòyè wǒ yǐjīng zuòhǎo le.", "Bài tập tôi làm xong rồi."],
      ["我 一点儿 也 不 着急 。", "Wǒ yìdiǎnr yě bù zháojí.", "Tôi chẳng sốt ruột chút nào."],
      ["他 一直 在 玩 游戏 ， 一 个 字 都 没 写 。", "Tā yìzhí zài wán yóuxì, yí ge zì dōu méi xiě.", "Cậu ấy chơi game suốt, chẳng viết chữ nào."],
      ["那 我们 星期六 去 吧 。", "Nà wǒmen xīngqīliù qù ba.", "Vậy chúng ta đi thứ Bảy nhé."],
      ["你 带 地图 了 吗 ？", "Nǐ dài dìtú le ma?", "Bạn mang bản đồ chưa?"],
      ["下 个 月 我 要 搬 到 南方 去 。", "Xià ge yuè wǒ yào bān dào nánfāng qù.", "Tháng sau tôi sẽ chuyển vào miền Nam."]
    ],
    qa: [
      ["这个周末你有什么打算？", "Zhège zhōumò nǐ yǒu shénme dǎsuan?", "Cuối tuần này bạn có dự định gì?", "我打算在家复习，晚上跟朋友去吃饭。"],
      ["你是南方人还是北方人？", "Nǐ shì nánfāng rén háishi běifāng rén?", "Bạn là người miền Nam hay miền Bắc?", "我是北方人，我家在河内。"],
      ["你的作业做好了吗？", "Nǐ de zuòyè zuòhǎo le ma?", "Bài tập của bạn làm xong chưa?", "做好了，我一点儿也不着急。"]
    ]
  },

  {
    id: 2, title: "他什么时候回来", py: "Tā shénme shíhou huílai", vi: "Khi nào anh ấy về",
    words: [
      ["腿", "tuǐ", "chân (cẳng chân, đùi)", "thối", "走了很多路，我的腿很疼。", "Zǒule hěn duō lù, wǒ de tuǐ hěn téng.", "Đi bộ nhiều, chân tôi rất đau."],
      ["疼", "téng", "đau", "đông", "我头疼。", "Wǒ tóu téng.", "Tôi đau đầu."],
      ["脚", "jiǎo", "bàn chân", "cước", "我的脚有点儿疼。", "Wǒ de jiǎo yǒudiǎnr téng.", "Bàn chân tôi hơi đau."],
      ["树", "shù", "cây", "thụ", "公园里有很多树。", "Gōngyuán li yǒu hěn duō shù.", "Trong công viên có rất nhiều cây."],
      ["容易", "róngyì", "dễ", "dung dị", "这个问题很容易。", "Zhège wèntí hěn róngyì.", "Câu hỏi này rất dễ."],
      ["难", "nán", "khó", "nan", "汉字不太难。", "Hànzì bú tài nán.", "Chữ Hán không khó lắm."],
      ["太太", "tàitai", "bà; vợ", "thái thái", "这是我太太。", "Zhè shì wǒ tàitai.", "Đây là vợ tôi."],
      ["秘书", "mìshū", "thư ký", "bí thư", "她是经理的秘书。", "Tā shì jīnglǐ de mìshū.", "Cô ấy là thư ký của giám đốc."],
      ["经理", "jīnglǐ", "giám đốc, quản lý", "kinh lý", "经理在开会。", "Jīnglǐ zài kāihuì.", "Giám đốc đang họp."],
      ["办公室", "bàngōngshì", "văn phòng", "biện công thất", "我的办公室在三楼。", "Wǒ de bàngōngshì zài sān lóu.", "Văn phòng của tôi ở tầng ba."],
      ["辆", "liàng", "chiếc (lượng từ của xe)", "lượng", "我买了一辆新车。", "Wǒ mǎile yí liàng xīn chē.", "Tôi đã mua một chiếc xe mới."],
      ["楼", "lóu", "tòa nhà; tầng", "lâu", "我家在五楼。", "Wǒ jiā zài wǔ lóu.", "Nhà tôi ở tầng năm."],
      ["拿", "ná", "cầm, lấy", "nã", "你手里拿的是什么？", "Nǐ shǒu li ná de shì shénme?", "Cái bạn cầm trong tay là gì?"],
      ["把", "bǎ", "cái, chiếc (lượng từ: ô, ghế, dao…)", "bả", "我买了一把伞。", "Wǒ mǎile yì bǎ sǎn.", "Tôi đã mua một cái ô."],
      ["伞", "sǎn", "cái ô", "tản", "外面下雨了，带把伞吧。", "Wàimiàn xià yǔ le, dài bǎ sǎn ba.", "Ngoài trời mưa rồi, mang ô đi."],
      ["胖", "pàng", "béo, mập", "bàn", "我最近有点儿胖。", "Wǒ zuìjìn yǒudiǎnr pàng.", "Dạo này tôi hơi béo."],
      ["其实", "qíshí", "thật ra", "kỳ thực", "其实我不喜欢喝咖啡。", "Qíshí wǒ bù xǐhuan hē kāfēi.", "Thật ra tôi không thích uống cà phê."],
      ["瘦", "shòu", "gầy", "sấu", "你太瘦了，多吃点儿。", "Nǐ tài shòu le, duō chī diǎnr.", "Bạn gầy quá, ăn nhiều chút."]
    ],
    grammar: [
      {
        name: "Bổ ngữ xu hướng đơn", pattern: "V + 来 / 去 ; 上/下/进/出/回/过 + 来/去",
        explain: "来: hướng về phía người nói; 去: hướng ra xa người nói. 上来 (lên đây), 下去 (xuống đó), 回来 (về đây), 进去 (vào trong đó).",
        examples: ["你下来吧，我在楼下。", "他回家去了。"],
        tasks: [{ vi: "Bạn đang ở dưới nhà. Gọi người ở trên lầu đi xuống.", re: "(上|下|进|出|回|过)(来|去)", sample: "你快下来吧！" }]
      },
      {
        name: "Hai hành động nối tiếp", pattern: "V1 + 了 + (O1) + 就 / 再 + V2",
        explain: "Làm xong việc 1 thì (ngay) làm việc 2. 就: việc 2 xảy ra ngay; 再: việc 2 để sau (thường dùng cho tương lai).",
        examples: ["我下了班就回家。", "你吃了饭再走吧。"],
        tasks: [{ vi: "Nói bạn tan làm xong là về nhà ngay.", re: "了.+(就|再)", sample: "我下了班就回家。" }]
      },
      {
        name: "Câu hỏi tu từ 能……吗？", pattern: "(Lý do) + 能 + (不) + V + 吗？",
        explain: "Không thật sự hỏi mà để khẳng định: 能不着急吗？ = sao có thể không lo được (rất lo). 能……吗？ = làm sao mà… được (không thể).",
        examples: ["明天就考试了，我能不着急吗？", "这么多东西，我一个人能拿吗？"],
        tasks: [{ vi: "Nói bằng câu hỏi tu từ: sắp đi máy bay rồi, sao mà không vội được.", re: "能.+吗", sample: "飞机快起飞了，我能不着急吗？" }]
      }
    ],
    sentences: [
      ["经理 什么 时候 回来 ？", "Jīnglǐ shénme shíhou huílai?", "Khi nào giám đốc về?"],
      ["他 去 办公室 拿 东西 了 。", "Tā qù bàngōngshì ná dōngxi le.", "Anh ấy đến văn phòng lấy đồ rồi."],
      ["你 下来 吧 ， 我 在 楼 下 等 你 。", "Nǐ xiàlai ba, wǒ zài lóu xià děng nǐ.", "Bạn xuống đi, tôi đợi ở dưới nhà."],
      ["我 下 了 班 就 回 家 。", "Wǒ xiàle bān jiù huí jiā.", "Tôi tan làm là về nhà ngay."],
      ["走 了 一 天 ， 我 的 腿 很 疼 。", "Zǒule yì tiān, wǒ de tuǐ hěn téng.", "Đi cả ngày, chân tôi rất đau."],
      ["其实 学 汉语 不 太 难 。", "Qíshí xué Hànyǔ bú tài nán.", "Thật ra học tiếng Trung không khó lắm."],
      ["这么 多 东西 ， 我 一 个 人 能 拿 吗 ？", "Zhème duō dōngxi, wǒ yí ge rén néng ná ma?", "Nhiều đồ thế này, một mình tôi cầm sao nổi?"],
      ["楼 下 有 一 辆 车 。", "Lóu xià yǒu yí liàng chē.", "Dưới nhà có một chiếc xe."]
    ],
    qa: [
      ["你家在几楼？", "Nǐ jiā zài jǐ lóu?", "Nhà bạn ở tầng mấy?", "我家在三楼。"],
      ["你最近胖了还是瘦了？", "Nǐ zuìjìn pàng le háishi shòu le?", "Dạo này bạn béo lên hay gầy đi?", "我最近有点儿胖了。"],
      ["你觉得学汉语容易吗？", "Nǐ juéde xué Hànyǔ róngyì ma?", "Bạn thấy học tiếng Trung có dễ không?", "其实不太难，就是汉字有点儿难。"]
    ]
  },

  {
    id: 3, title: "桌子上放着很多饮料", py: "Zhuōzi shang fàngzhe hěn duō yǐnliào", vi: "Trên bàn để rất nhiều đồ uống",
    words: [
      ["还是", "háishi", "hay là (câu hỏi lựa chọn)", "hoàn thị", "你喝茶还是喝咖啡？", "Nǐ hē chá háishi hē kāfēi?", "Bạn uống trà hay cà phê?"],
      ["爬山", "pá shān", "leo núi", "ba sơn", "周末我们去爬山吧。", "Zhōumò wǒmen qù pá shān ba.", "Cuối tuần mình đi leo núi nhé."],
      ["小心", "xiǎoxīn", "cẩn thận", "tiểu tâm", "路上小心！", "Lù shang xiǎoxīn!", "Đi đường cẩn thận nhé!"],
      ["条", "tiáo", "chiếc, con (vật dài: quần, váy, cá…)", "điều", "我买了一条裤子。", "Wǒ mǎile yì tiáo kùzi.", "Tôi đã mua một chiếc quần."],
      ["裤子", "kùzi", "quần", "khố tử", "这条裤子有点儿长。", "Zhè tiáo kùzi yǒudiǎnr cháng.", "Chiếc quần này hơi dài."],
      ["记得", "jìde", "nhớ", "ký đắc", "你还记得我吗？", "Nǐ hái jìde wǒ ma?", "Bạn còn nhớ tôi không?"],
      ["衬衫", "chènshān", "áo sơ mi", "sấn sam", "他穿着一件白衬衫。", "Tā chuānzhe yí jiàn bái chènshān.", "Anh ấy mặc một chiếc sơ mi trắng."],
      ["元", "yuán", "đồng, tệ (đơn vị tiền)", "nguyên", "这件衬衫一百元。", "Zhè jiàn chènshān yìbǎi yuán.", "Chiếc sơ mi này một trăm tệ."],
      ["新鲜", "xīnxiān", "tươi, tươi mới", "tân tiên", "这些水果很新鲜。", "Zhèxiē shuǐguǒ hěn xīnxiān.", "Chỗ hoa quả này rất tươi."],
      ["甜", "tián", "ngọt", "điềm", "这个西瓜很甜。", "Zhège xīguā hěn tián.", "Quả dưa hấu này rất ngọt."],
      ["只", "zhī", "con (lượng từ của động vật)", "chích", "我家有一只猫。", "Wǒ jiā yǒu yì zhī māo.", "Nhà tôi có một con mèo."],
      ["放", "fàng", "đặt, để", "phóng", "书放在桌子上了。", "Shū fàng zài zhuōzi shang le.", "Sách để trên bàn rồi."],
      ["饮料", "yǐnliào", "đồ uống", "ẩm liệu", "你想喝什么饮料？", "Nǐ xiǎng hē shénme yǐnliào?", "Bạn muốn uống gì?"],
      ["或者", "huòzhě", "hoặc (câu trần thuật)", "hoặc giả", "我们明天或者后天去。", "Wǒmen míngtiān huòzhě hòutiān qù.", "Chúng ta đi ngày mai hoặc ngày kia."],
      ["舒服", "shūfu", "dễ chịu, thoải mái", "thư phục", "这件衣服穿着很舒服。", "Zhè jiàn yīfu chuānzhe hěn shūfu.", "Bộ đồ này mặc rất thoải mái."],
      ["花", "huā", "hoa", "hoa", "公园里的花开了。", "Gōngyuán li de huā kāi le.", "Hoa trong công viên nở rồi."],
      ["绿", "lǜ", "xanh lá", "lục", "春天到了，树都绿了。", "Chūntiān dào le, shù dōu lǜ le.", "Mùa xuân đến, cây đều xanh cả."]
    ],
    grammar: [
      {
        name: "还是 và 或者", pattern: "A 还是 B？(hỏi) ; A 或者 B (trần thuật)",
        explain: "Cả hai đều là \"hoặc\". 还是 dùng trong câu HỎI lựa chọn; 或者 dùng trong câu TRẦN THUẬT.",
        examples: ["你喝茶还是喝咖啡？", "我们明天或者后天去都可以。"],
        tasks: [
          { vi: "Hỏi bạn mình muốn đi leo núi hay đi công viên.", re: "还是", sample: "你想去爬山还是去公园？" },
          { vi: "Nói bạn rảnh vào thứ Bảy hoặc Chủ nhật.", re: "或者", sample: "我星期六或者星期天有时间。" }
        ]
      },
      {
        name: "Câu tồn tại với 着", pattern: "Nơi chốn + V + 着 + số + lượng từ + N",
        explain: "Miêu tả ở đâu đó đang có cái gì (ở trạng thái): 桌子上放着很多饮料 (trên bàn để nhiều đồ uống), 墙上挂着一张地图.",
        examples: ["桌子上放着很多饮料。", "墙上挂着一张地图。"],
        tasks: [{ vi: "Tả trên bàn làm việc của bạn đang có gì.", re: "上.*着", sample: "我的桌子上放着一台电脑。" }]
      },
      {
        name: "会 biểu thị khả năng", pattern: "S + 会 + V (+ 的)",
        explain: "会 = \"sẽ\" (dự đoán khả năng xảy ra). Phủ định: 不会.",
        examples: ["明天会下雨吗？", "他今天不会来了。"],
        tasks: [{ vi: "Dự đoán thời tiết ngày mai.", re: "会", sample: "明天会下雨。" }]
      }
    ],
    sentences: [
      ["桌子 上 放着 很 多 饮料 。", "Zhuōzi shang fàngzhe hěn duō yǐnliào.", "Trên bàn để rất nhiều đồ uống."],
      ["你 喝 绿茶 还是 喝 咖啡 ？", "Nǐ hē lǜchá háishi hē kāfēi?", "Bạn uống trà xanh hay cà phê?"],
      ["周末 我们 去 爬山 或者 去 公园 。", "Zhōumò wǒmen qù pá shān huòzhě qù gōngyuán.", "Cuối tuần chúng tôi đi leo núi hoặc đi công viên."],
      ["爬山 的 时候 要 小心 。", "Pá shān de shíhou yào xiǎoxīn.", "Khi leo núi phải cẩn thận."],
      ["这 条 裤子 很 舒服 ， 才 一百 元 。", "Zhè tiáo kùzi hěn shūfu, cái yìbǎi yuán.", "Chiếc quần này rất thoải mái, chỉ một trăm tệ."],
      ["你 还 记得 那 只 小 猫 吗 ？", "Nǐ hái jìde nà zhī xiǎo māo ma?", "Bạn còn nhớ con mèo nhỏ đó không?"],
      ["墙 上 挂着 一 张 地图 。", "Qiáng shang guàzhe yì zhāng dìtú.", "Trên tường treo một tấm bản đồ."],
      ["明天 会 下 雨 ， 别 忘了 带 伞 。", "Míngtiān huì xià yǔ, bié wàngle dài sǎn.", "Mai sẽ mưa, đừng quên mang ô."]
    ],
    qa: [
      ["你的桌子上放着什么？", "Nǐ de zhuōzi shang fàngzhe shénme?", "Trên bàn của bạn để những gì?", "我的桌子上放着一台电脑和几本书。"],
      ["你喜欢喝什么饮料？", "Nǐ xǐhuan hē shénme yǐnliào?", "Bạn thích uống gì?", "我喜欢喝绿茶，有时候也喝果汁。"],
      ["明天会下雨吗？", "Míngtiān huì xià yǔ ma?", "Mai có mưa không?", "听说明天会下雨，你要带伞。"]
    ]
  },

  {
    id: 4, title: "她总是笑着跟客人说话", py: "Tā zǒngshì xiàozhe gēn kèrén shuōhuà", vi: "Cô ấy luôn cười nói với khách",
    words: [
      ["比赛", "bǐsài", "cuộc thi, trận đấu; thi đấu", "tỷ tái", "明天有一场足球比赛。", "Míngtiān yǒu yì chǎng zúqiú bǐsài.", "Mai có một trận bóng đá."],
      ["照片", "zhàopiàn", "tấm ảnh", "chiếu phiến", "这是我小时候的照片。", "Zhè shì wǒ xiǎo shíhou de zhàopiàn.", "Đây là ảnh hồi nhỏ của tôi."],
      ["年级", "niánjí", "lớp, khối (năm học)", "niên cấp", "我儿子上三年级。", "Wǒ érzi shàng sān niánjí.", "Con trai tôi học lớp ba."],
      ["又", "yòu", "vừa… vừa…; lại", "hựu", "这个苹果又大又甜。", "Zhège píngguǒ yòu dà yòu tián.", "Quả táo này vừa to vừa ngọt."],
      ["聪明", "cōngming", "thông minh", "thông minh", "她的女儿很聪明。", "Tā de nǚ'ér hěn cōngming.", "Con gái cô ấy rất thông minh."],
      ["热情", "rèqíng", "nhiệt tình", "nhiệt tình", "这里的人很热情。", "Zhèlǐ de rén hěn rèqíng.", "Người ở đây rất nhiệt tình."],
      ["努力", "nǔlì", "cố gắng, chăm chỉ", "nỗ lực", "他学习非常努力。", "Tā xuéxí fēicháng nǔlì.", "Anh ấy học vô cùng chăm chỉ."],
      ["总是", "zǒngshì", "luôn luôn", "tổng thị", "她总是第一个到办公室。", "Tā zǒngshì dì-yī ge dào bàngōngshì.", "Cô ấy luôn là người đến văn phòng đầu tiên."],
      ["回答", "huídá", "trả lời", "hồi đáp", "请回答我的问题。", "Qǐng huídá wǒ de wèntí.", "Hãy trả lời câu hỏi của tôi."],
      ["站", "zhàn", "đứng", "trạm", "他站在门口。", "Tā zhàn zài ménkǒu.", "Anh ấy đứng ở cửa."],
      ["饿", "è", "đói", "ngạ", "我饿了，我们去吃饭吧。", "Wǒ è le, wǒmen qù chī fàn ba.", "Tôi đói rồi, mình đi ăn đi."],
      ["超市", "chāoshì", "siêu thị", "siêu thị", "我去超市买水果。", "Wǒ qù chāoshì mǎi shuǐguǒ.", "Tôi đi siêu thị mua hoa quả."],
      ["蛋糕", "dàngāo", "bánh ngọt, bánh kem", "đản cao", "这是给你的生日蛋糕。", "Zhè shì gěi nǐ de shēngrì dàngāo.", "Đây là bánh sinh nhật cho bạn."],
      ["年轻", "niánqīng", "trẻ", "niên khinh", "照片上的你很年轻。", "Zhàopiàn shang de nǐ hěn niánqīng.", "Bạn trong ảnh trông rất trẻ."],
      ["认真", "rènzhēn", "nghiêm túc, chăm chú", "nhận chân", "他工作很认真。", "Tā gōngzuò hěn rènzhēn.", "Anh ấy làm việc rất nghiêm túc."],
      ["客人", "kèrén", "khách", "khách nhân", "今天家里有客人。", "Jīntiān jiā li yǒu kèrén.", "Hôm nay nhà có khách."]
    ],
    grammar: [
      {
        name: "又……又……", pattern: "又 + Adj/V + 又 + Adj/V",
        explain: "Vừa… vừa… — hai đặc điểm cùng có. Hai vế thường cùng sắc thái (cùng tốt hoặc cùng xấu).",
        examples: ["这个蛋糕又好看又好吃。", "外面又刮风又下雨。"],
        tasks: [{ vi: "Khen một người bạn biết: vừa… vừa…", re: "又.+又", sample: "我的朋友又聪明又热情。" }]
      },
      {
        name: "Hành động kèm theo: V1 着 + V2", pattern: "V1 + 着 (+ O1) + V2 (+ O2)",
        explain: "Làm V2 trong trạng thái V1: 笑着说 (cười nói), 站着回答 (đứng trả lời), 躺着看书 (nằm đọc sách).",
        examples: ["她总是笑着跟客人说话。", "他站着回答老师的问题。"],
        tasks: [{ vi: "Nói bạn thích nằm nghe nhạc (躺 tǎng = nằm).", re: "着", sample: "我喜欢躺着听音乐。" }]
      }
    ],
    sentences: [
      ["她 总是 笑着 跟 客人 说话 。", "Tā zǒngshì xiàozhe gēn kèrén shuōhuà.", "Cô ấy luôn cười nói với khách."],
      ["这 个 蛋糕 又 好看 又 好吃 。", "Zhège dàngāo yòu hǎokàn yòu hǎochī.", "Cái bánh này vừa đẹp vừa ngon."],
      ["我 的 女儿 又 聪明 又 努力 。", "Wǒ de nǚ'ér yòu cōngming yòu nǔlì.", "Con gái tôi vừa thông minh vừa chăm chỉ."],
      ["他 站着 回答 老师 的 问题 。", "Tā zhànzhe huídá lǎoshī de wèntí.", "Cậu ấy đứng trả lời câu hỏi của thầy."],
      ["别 躺着 看 书 。", "Bié tǎngzhe kàn shū.", "Đừng nằm đọc sách."],
      ["我 饿 了 ， 我们 去 超市 买 点儿 吃 的 吧 。", "Wǒ è le, wǒmen qù chāoshì mǎi diǎnr chī de ba.", "Tôi đói rồi, mình đi siêu thị mua chút đồ ăn đi."],
      ["照片 上 的 你 很 年轻 。", "Zhàopiàn shang de nǐ hěn niánqīng.", "Bạn trong ảnh trông rất trẻ."],
      ["今天 有 一 场 篮球 比赛 。", "Jīntiān yǒu yì chǎng lánqiú bǐsài.", "Hôm nay có một trận bóng rổ."]
    ],
    qa: [
      ["你的朋友是一个什么样的人？", "Nǐ de péngyou shì yí ge shénmeyàng de rén?", "Bạn của bạn là người như thế nào?", "她又聪明又热情。"],
      ["你喜欢站着工作还是坐着工作？", "Nǐ xǐhuan zhànzhe gōngzuò háishi zuòzhe gōngzuò?", "Bạn thích đứng làm việc hay ngồi làm việc?", "我喜欢坐着工作。"],
      ["你孩子上几年级了？", "Nǐ háizi shàng jǐ niánjí le?", "Con bạn học lớp mấy rồi?", "我孩子上二年级了，学习很认真。"]
    ]
  },

  {
    id: 5, title: "我最近越来越胖了", py: "Wǒ zuìjìn yuèláiyuè pàng le", vi: "Dạo này tôi ngày càng béo",
    words: [
      ["发烧", "fāshāo", "sốt", "phát thiêu", "孩子发烧了。", "Háizi fāshāo le.", "Đứa bé bị sốt rồi."],
      ["为", "wèi", "cho, vì (ai đó)", "vị", "妈妈为我做了很多菜。", "Māma wèi wǒ zuòle hěn duō cài.", "Mẹ nấu cho tôi rất nhiều món."],
      ["照顾", "zhàogù", "chăm sóc", "chiếu cố", "谢谢你照顾我。", "Xièxie nǐ zhàogù wǒ.", "Cảm ơn bạn đã chăm sóc tôi."],
      ["用", "yòng", "dùng", "dụng", "我可以用一下你的手机吗？", "Wǒ kěyǐ yòng yíxià nǐ de shǒujī ma?", "Tôi dùng điện thoại của bạn một chút được không?"],
      ["感冒", "gǎnmào", "cảm cúm; bị cảm", "cảm mạo", "我感冒了。", "Wǒ gǎnmào le.", "Tôi bị cảm rồi."],
      ["季节", "jìjié", "mùa", "quý tiết", "一年有四个季节。", "Yì nián yǒu sì ge jìjié.", "Một năm có bốn mùa."],
      ["当然", "dāngrán", "đương nhiên", "đương nhiên", "当然可以！", "Dāngrán kěyǐ!", "Đương nhiên là được!"],
      ["春天", "chūntiān", "mùa xuân", "xuân thiên", "春天来了，花都开了。", "Chūntiān lái le, huā dōu kāi le.", "Mùa xuân đến, hoa đều nở cả."],
      ["草", "cǎo", "cỏ", "thảo", "春天来了，草绿了。", "Chūntiān lái le, cǎo lǜ le.", "Mùa xuân đến, cỏ xanh rồi."],
      ["夏天", "xiàtiān", "mùa hè", "hạ thiên", "夏天很热。", "Xiàtiān hěn rè.", "Mùa hè rất nóng."],
      ["裙子", "qúnzi", "váy", "quần tử", "这条裙子很漂亮。", "Zhè tiáo qúnzi hěn piàoliang.", "Chiếc váy này rất đẹp."],
      ["最近", "zuìjìn", "gần đây, dạo này", "tối cận", "你最近忙吗？", "Nǐ zuìjìn máng ma?", "Dạo này bạn có bận không?"],
      ["越", "yuè", "càng", "việt", "天气越来越热了。", "Tiānqì yuèláiyuè rè le.", "Trời ngày càng nóng."]
    ],
    grammar: [
      {
        name: "了 biểu thị thay đổi", pattern: "… + 了 (cuối câu)",
        explain: "了 cuối câu cho biết tình huống đã THAY ĐỔI so với trước: 春天来了 (xuân đến rồi), 我胖了 (tôi béo lên rồi), 他不来了 (anh ấy không đến nữa).",
        examples: ["春天来了，草绿了。", "我感冒了。"],
        tasks: [{ vi: "Nói trời đã bắt đầu nóng lên rồi.", re: "了", sample: "天气热了，夏天到了。" }]
      },
      {
        name: "越来越 + tính từ / động từ tâm lý", pattern: "S + 越来越 + Adj / 喜欢, 想…",
        explain: "Càng ngày càng… (thay đổi theo thời gian). Không dùng 很/非常 sau 越来越.",
        examples: ["我最近越来越胖了。", "我越来越喜欢汉语了。"],
        tasks: [{ vi: "Nói về tiếng Trung của bạn (dùng 越来越).", re: "越来越", sample: "我的汉语越来越好了。" }]
      }
    ],
    sentences: [
      ["我 最近 越来越 胖 了 。", "Wǒ zuìjìn yuèláiyuè pàng le.", "Dạo này tôi ngày càng béo."],
      ["天气 越来越 热 了 ， 夏天 到 了 。", "Tiānqì yuèláiyuè rè le, xiàtiān dào le.", "Trời ngày càng nóng, mùa hè đến rồi."],
      ["春天 来 了 ， 草 绿 了 。", "Chūntiān lái le, cǎo lǜ le.", "Mùa xuân đến rồi, cỏ xanh rồi."],
      ["我 越来越 喜欢 汉语 了 。", "Wǒ yuèláiyuè xǐhuan Hànyǔ le.", "Tôi ngày càng thích tiếng Trung."],
      ["她 感冒 了 ， 还 有点儿 发烧 。", "Tā gǎnmào le, hái yǒudiǎnr fāshāo.", "Cô ấy bị cảm, còn hơi sốt."],
      ["你 生病 的 时候 ， 谁 照顾 你 ？", "Nǐ shēngbìng de shíhou, shéi zhàogù nǐ?", "Khi bạn ốm, ai chăm sóc bạn?"],
      ["妈妈 为 我 买 了 一 条 裙子 。", "Māma wèi wǒ mǎile yì tiáo qúnzi.", "Mẹ mua cho tôi một chiếc váy."],
      ["你 最 喜欢 哪 个 季节 ？", "Nǐ zuì xǐhuan nǎge jìjié?", "Bạn thích mùa nào nhất?"]
    ],
    qa: [
      ["你最喜欢哪个季节？为什么？", "Nǐ zuì xǐhuan nǎge jìjié? Wèishénme?", "Bạn thích mùa nào nhất? Vì sao?", "我最喜欢春天，因为春天不冷也不热。"],
      ["你最近怎么样？", "Nǐ zuìjìn zěnmeyàng?", "Dạo này bạn thế nào?", "我最近越来越忙了。"],
      ["感冒的时候谁照顾你？", "Gǎnmào de shíhou shéi zhàogù nǐ?", "Khi bị cảm ai chăm sóc bạn?", "我妈妈照顾我，她为我做了很多好吃的。"]
    ]
  },

  {
    id: 6, title: "怎么突然找不到了", py: "Zěnme tūrán zhǎo bu dào le", vi: "Sao tự nhiên lại không tìm thấy",
    words: [
      ["眼镜", "yǎnjìng", "kính mắt", "nhãn kính", "我的眼镜呢？", "Wǒ de yǎnjìng ne?", "Kính của tôi đâu?"],
      ["突然", "tūrán", "đột nhiên", "đột nhiên", "天突然黑了。", "Tiān tūrán hēi le.", "Trời bỗng tối sầm."],
      ["离开", "líkāi", "rời đi, rời khỏi", "ly khai", "他昨天离开北京了。", "Tā zuótiān líkāi Běijīng le.", "Hôm qua anh ấy đã rời Bắc Kinh."],
      ["清楚", "qīngchu", "rõ ràng", "thanh sở", "请再说一遍，我没听清楚。", "Qǐng zài shuō yí biàn, wǒ méi tīng qīngchu.", "Bạn nói lại lần nữa, tôi nghe chưa rõ."],
      ["刚才", "gāngcái", "vừa nãy, vừa rồi", "cương tài", "刚才谁来了？", "Gāngcái shéi lái le?", "Vừa nãy ai đến vậy?"],
      ["帮忙", "bāngmáng", "giúp đỡ", "bang mang", "谢谢你帮忙！", "Xièxie nǐ bāngmáng!", "Cảm ơn bạn đã giúp!"],
      ["特别", "tèbié", "đặc biệt, rất", "đặc biệt", "今天特别冷。", "Jīntiān tèbié lěng.", "Hôm nay đặc biệt lạnh."],
      ["讲", "jiǎng", "nói, giảng, kể", "giảng", "老师讲得很清楚。", "Lǎoshī jiǎng de hěn qīngchu.", "Thầy giảng rất rõ ràng."],
      ["明白", "míngbai", "hiểu, rõ", "minh bạch", "你明白我的意思吗？", "Nǐ míngbai wǒ de yìsi ma?", "Bạn hiểu ý tôi không?"],
      ["锻炼", "duànliàn", "rèn luyện", "đoán luyện", "我每天早上锻炼身体。", "Wǒ měitiān zǎoshang duànliàn shēntǐ.", "Sáng nào tôi cũng rèn luyện sức khỏe."],
      ["音乐", "yīnyuè", "âm nhạc", "âm nhạc", "我喜欢听音乐。", "Wǒ xǐhuan tīng yīnyuè.", "Tôi thích nghe nhạc."],
      ["公园", "gōngyuán", "công viên", "công viên", "我家附近有一个公园。", "Wǒ jiā fùjìn yǒu yí ge gōngyuán.", "Gần nhà tôi có một công viên."],
      ["聊天儿", "liáotiānr", "tán gẫu, trò chuyện", "liêu thiên", "我们在公园里聊天儿。", "Wǒmen zài gōngyuán li liáotiānr.", "Chúng tôi trò chuyện trong công viên."],
      ["睡着", "shuìzháo", "ngủ thiếp đi, ngủ được", "", "孩子睡着了。", "Háizi shuìzháo le.", "Đứa bé ngủ rồi."],
      ["更", "gèng", "càng, hơn nữa", "cánh", "今天比昨天更冷。", "Jīntiān bǐ zuótiān gèng lěng.", "Hôm nay còn lạnh hơn hôm qua."]
    ],
    grammar: [
      {
        name: "Bổ ngữ khả năng", pattern: "V + 得 + bổ ngữ (được) ; V + 不 + bổ ngữ (không được)",
        explain: "听得懂 (nghe hiểu được), 看不清楚 (nhìn không rõ), 找不到 (tìm không thấy), 睡不着 (không ngủ được).",
        examples: ["老师说的话我听得懂。", "我的眼镜怎么突然找不到了？"],
        tasks: [{ vi: "Nói bạn có xem hiểu phim Trung Quốc không.", re: "(得|不)(懂|清楚|到|着|完|了|见)", sample: "简单的中国电影我看得懂。" }]
      },
      {
        name: "N + 呢？ hỏi vị trí", pattern: "Danh từ + 呢？",
        explain: "Hỏi một người/vật đang ở đâu: 我的眼镜呢？ = Kính của tôi đâu rồi?",
        examples: ["我的手机呢？", "妈妈呢？"],
        tasks: [{ vi: "Hỏi chìa khóa (钥匙 yàoshi) của bạn đâu rồi.", re: "呢", sample: "我的钥匙呢？" }]
      },
      {
        name: "刚 và 刚才", pattern: "刚 + V (phó từ) ; 刚才 (danh từ thời gian)",
        explain: "刚: vừa mới (đứng trước động từ, không đi với 了 ở cuối câu khi chỉ thời gian ngắn). 刚才: lúc nãy (có thể đứng đầu câu, đi với 了 và phủ định 不/没).",
        examples: ["我刚到家。", "刚才你去哪儿了？"],
        tasks: [{ vi: "Nói bạn vừa mới ăn cơm xong.", re: "刚", sample: "我刚吃完饭。" }]
      }
    ],
    sentences: [
      ["我 的 眼镜 呢 ？ 怎么 突然 找不到 了 ？", "Wǒ de yǎnjìng ne? Zěnme tūrán zhǎo bu dào le?", "Kính của tôi đâu? Sao tự nhiên tìm không thấy?"],
      ["老师 讲 的 话 我 听得懂 。", "Lǎoshī jiǎng de huà wǒ tīng de dǒng.", "Lời thầy giảng tôi nghe hiểu được."],
      ["太 远 了 ， 我 看不清楚 。", "Tài yuǎn le, wǒ kàn bu qīngchu.", "Xa quá, tôi nhìn không rõ."],
      ["你 刚才 去 哪儿 了 ？", "Nǐ gāngcái qù nǎr le?", "Vừa nãy bạn đi đâu vậy?"],
      ["我 刚 到 家 。", "Wǒ gāng dào jiā.", "Tôi vừa về đến nhà."],
      ["你 明白 了 吗 ？ 要 不 要 我 帮忙 ？", "Nǐ míngbai le ma? Yào bu yào wǒ bāngmáng?", "Bạn hiểu chưa? Có cần tôi giúp không?"],
      ["我 每天 早上 去 公园 锻炼 。", "Wǒ měitiān zǎoshang qù gōngyuán duànliàn.", "Sáng nào tôi cũng ra công viên tập thể dục."],
      ["晚上 喝 咖啡 ， 我 就 睡不着 。", "Wǎnshang hē kāfēi, wǒ jiù shuì bu zháo.", "Buổi tối uống cà phê là tôi không ngủ được."]
    ],
    qa: [
      ["你每天锻炼身体吗？", "Nǐ měitiān duànliàn shēntǐ ma?", "Ngày nào bạn cũng rèn luyện sức khỏe chứ?", "我每天早上去公园跑步。"],
      ["中国电影你看得懂吗？", "Zhōngguó diànyǐng nǐ kàn de dǒng ma?", "Phim Trung Quốc bạn xem hiểu không?", "简单的我看得懂，难的还看不懂。"],
      ["你刚才在做什么？", "Nǐ gāngcái zài zuò shénme?", "Vừa nãy bạn làm gì vậy?", "我刚才在听音乐。"]
    ]
  },

  {
    id: 7, title: "我跟她都认识五年了", py: "Wǒ gēn tā dōu rènshi wǔ nián le", vi: "Tôi và cô ấy quen nhau năm năm rồi",
    words: [
      ["同事", "tóngshì", "đồng nghiệp", "đồng sự", "他是我的新同事。", "Tā shì wǒ de xīn tóngshì.", "Anh ấy là đồng nghiệp mới của tôi."],
      ["以前", "yǐqián", "trước đây", "dĩ tiền", "以前我不会做饭。", "Yǐqián wǒ bú huì zuò fàn.", "Trước đây tôi không biết nấu cơm."],
      ["银行", "yínháng", "ngân hàng", "ngân hàng", "我在银行工作。", "Wǒ zài yínháng gōngzuò.", "Tôi làm việc ở ngân hàng."],
      ["久", "jiǔ", "lâu", "cửu", "好久不见！", "Hǎojiǔ bú jiàn!", "Lâu quá không gặp!"],
      ["感兴趣", "gǎn xìngqù", "cảm thấy hứng thú", "cảm hứng thú", "我对音乐很感兴趣。", "Wǒ duì yīnyuè hěn gǎn xìngqù.", "Tôi rất hứng thú với âm nhạc."],
      ["结婚", "jiéhūn", "kết hôn", "kết hôn", "他们结婚三年了。", "Tāmen jiéhūn sān nián le.", "Họ cưới nhau ba năm rồi."],
      ["欢迎", "huānyíng", "hoan nghênh, chào mừng", "hoan nghênh", "欢迎你来我家！", "Huānyíng nǐ lái wǒ jiā!", "Chào mừng bạn đến nhà tôi!"],
      ["迟到", "chídào", "đến muộn", "trì đáo", "明天别迟到。", "Míngtiān bié chídào.", "Mai đừng đến muộn nhé."],
      ["半", "bàn", "nửa, rưỡi", "bán", "现在七点半。", "Xiànzài qī diǎn bàn.", "Bây giờ là bảy giờ rưỡi."],
      ["接", "jiē", "đón; nhận, nghe (điện thoại)", "tiếp", "我去机场接朋友。", "Wǒ qù jīchǎng jiē péngyou.", "Tôi ra sân bay đón bạn."],
      ["刻", "kè", "khắc (15 phút)", "khắc", "现在八点一刻。", "Xiànzài bā diǎn yí kè.", "Bây giờ là tám giờ mười lăm."],
      ["差", "chà", "kém, thiếu", "sai", "现在差五分十点。", "Xiànzài chà wǔ fēn shí diǎn.", "Bây giờ là mười giờ kém năm."]
    ],
    grammar: [
      {
        name: "Diễn đạt khoảng thời gian", pattern: "V + 了 + khoảng thời gian + 了 ; V + O + V + 了 + thời gian",
        explain: "Nói một việc kéo dài bao lâu (và vẫn đang tiếp tục): 认识五年了 (quen 5 năm rồi), 学汉语学了一年了 (học tiếng Trung được một năm rồi).",
        examples: ["我跟她都认识五年了。", "我学汉语学了一年了。"],
        tasks: [{ vi: "Nói bạn học tiếng Trung được bao lâu rồi.", re: "(年|月|天|星期|小时).*了", sample: "我学汉语学了半年了。" }]
      },
      {
        name: "Diễn đạt sở thích: 对……感兴趣", pattern: "S + 对 + N + (很/不) 感兴趣",
        explain: "Hứng thú với cái gì. Phủ định: 对……不感兴趣.",
        examples: ["我对中国文化很感兴趣。", "他对体育不感兴趣。"],
        tasks: [{ vi: "Nói bạn hứng thú với điều gì.", re: "对.+感兴趣", sample: "我对做饭很感兴趣。" }]
      },
      {
        name: "Nói giờ với 半, 刻, 差", pattern: "… 点半 / 点一刻 / 差 + phút + giờ",
        explain: "半 = rưỡi (30 phút); 一刻 = 15 phút, 三刻 = 45 phút; 差 = kém: 差五分十点 = 10 giờ kém 5.",
        examples: ["现在八点一刻。", "现在差一刻九点。"],
        tasks: [{ vi: "Nói bây giờ là bảy giờ rưỡi.", re: "(七|7)点半", sample: "现在七点半。" }]
      }
    ],
    sentences: [
      ["我 跟 她 都 认识 五 年 了 。", "Wǒ gēn tā dōu rènshi wǔ nián le.", "Tôi và cô ấy quen nhau năm năm rồi."],
      ["我 学 汉语 学 了 一 年 了 。", "Wǒ xué Hànyǔ xuéle yì nián le.", "Tôi học tiếng Trung được một năm rồi."],
      ["我们 结婚 十 年 了 。", "Wǒmen jiéhūn shí nián le.", "Chúng tôi cưới nhau mười năm rồi."],
      ["我 对 中国 音乐 很 感 兴趣 。", "Wǒ duì Zhōngguó yīnyuè hěn gǎn xìngqù.", "Tôi rất hứng thú với nhạc Trung Quốc."],
      ["好久 不 见 ， 欢迎 欢迎 ！", "Hǎojiǔ bú jiàn, huānyíng huānyíng!", "Lâu quá không gặp, chào mừng chào mừng!"],
      ["现在 差 一 刻 九 点 ， 我们 快 迟到 了 。", "Xiànzài chà yí kè jiǔ diǎn, wǒmen kuài chídào le.", "Bây giờ là chín giờ kém mười lăm, chúng ta sắp muộn rồi."],
      ["我 六 点 半 去 机场 接 你 。", "Wǒ liù diǎn bàn qù jīchǎng jiē nǐ.", "Sáu giờ rưỡi tôi ra sân bay đón bạn."],
      ["以前 她 在 银行 工作 。", "Yǐqián tā zài yínháng gōngzuò.", "Trước đây cô ấy làm ở ngân hàng."]
    ],
    qa: [
      ["你和你最好的朋友认识多长时间了？", "Nǐ hé nǐ zuì hǎo de péngyou rènshi duō cháng shíjiān le?", "Bạn và bạn thân quen nhau bao lâu rồi?", "我们认识十年了。"],
      ["你对什么感兴趣？", "Nǐ duì shénme gǎn xìngqù?", "Bạn hứng thú với điều gì?", "我对中国文化很感兴趣。"],
      ["你每天几点上班？", "Nǐ měitiān jǐ diǎn shàngbān?", "Hằng ngày mấy giờ bạn đi làm?", "我每天差一刻八点上班。"]
    ]
  },

  {
    id: 8, title: "你去哪儿我就去哪儿", py: "Nǐ qù nǎr wǒ jiù qù nǎr", vi: "Bạn đi đâu tôi đi đó",
    words: [
      ["又", "yòu", "lại (việc đã lặp lại)", "hựu", "他今天又迟到了。", "Tā jīntiān yòu chídào le.", "Hôm nay anh ấy lại đến muộn."],
      ["满意", "mǎnyì", "hài lòng", "mãn ý", "你对这个房间满意吗？", "Nǐ duì zhège fángjiān mǎnyì ma?", "Bạn có hài lòng với căn phòng này không?"],
      ["电梯", "diàntī", "thang máy", "điện thê", "我们坐电梯上去吧。", "Wǒmen zuò diàntī shàngqu ba.", "Chúng ta đi thang máy lên đi."],
      ["层", "céng", "tầng", "tằng", "我家在十二层。", "Wǒ jiā zài shí'èr céng.", "Nhà tôi ở tầng mười hai."],
      ["害怕", "hàipà", "sợ", "hại phạ", "我害怕狗。", "Wǒ hàipà gǒu.", "Tôi sợ chó."],
      ["熊猫", "xióngmāo", "gấu trúc", "hùng miêu", "熊猫喜欢吃竹子。", "Xióngmāo xǐhuan chī zhúzi.", "Gấu trúc thích ăn tre."],
      ["见面", "jiànmiàn", "gặp mặt", "kiến diện", "我们明天在哪儿见面？", "Wǒmen míngtiān zài nǎr jiànmiàn?", "Mai chúng ta gặp nhau ở đâu?"],
      ["安静", "ānjìng", "yên tĩnh", "an tĩnh", "图书馆里很安静。", "Túshūguǎn li hěn ānjìng.", "Trong thư viện rất yên tĩnh."],
      ["可乐", "kělè", "coca-cola", "khả lạc", "我要一瓶可乐。", "Wǒ yào yì píng kělè.", "Tôi lấy một chai coca."],
      ["一会儿", "yíhuìr", "một lát", "nhất hội nhi", "请等一会儿。", "Qǐng děng yíhuìr.", "Xin đợi một lát."],
      ["马上", "mǎshàng", "ngay lập tức", "mã thượng", "我马上来！", "Wǒ mǎshàng lái!", "Tôi đến ngay!"],
      ["洗手间", "xǐshǒujiān", "nhà vệ sinh", "tẩy thủ gian", "请问，洗手间在哪儿？", "Qǐngwèn, xǐshǒujiān zài nǎr?", "Xin hỏi, nhà vệ sinh ở đâu?"],
      ["老", "lǎo", "già; cũ, lâu năm", "lão", "我的电脑太老了。", "Wǒ de diànnǎo tài lǎo le.", "Máy tính của tôi cũ quá rồi."],
      ["几乎", "jīhū", "hầu như", "cơ hồ", "我几乎每天都喝咖啡。", "Wǒ jīhū měitiān dōu hē kāfēi.", "Tôi hầu như ngày nào cũng uống cà phê."],
      ["变化", "biànhuà", "thay đổi, biến đổi", "biến hóa", "这几年河内变化很大。", "Zhè jǐ nián Hénèi biànhuà hěn dà.", "Mấy năm nay Hà Nội thay đổi rất nhiều."],
      ["健康", "jiànkāng", "khỏe mạnh; sức khỏe", "kiện khang", "祝你身体健康！", "Zhù nǐ shēntǐ jiànkāng!", "Chúc bạn mạnh khỏe!"],
      ["重要", "zhòngyào", "quan trọng", "trọng yếu", "健康最重要。", "Jiànkāng zuì zhòngyào.", "Sức khỏe là quan trọng nhất."]
    ],
    grammar: [
      {
        name: "又 và 再", pattern: "又 + V + 了 (đã lặp lại) ; 再 + V (sẽ lặp lại)",
        explain: "Cả hai đều là \"lại\". 又 dùng cho việc ĐÃ lặp lại (quá khứ). 再 dùng cho việc SẼ lặp lại (tương lai, lời đề nghị).",
        examples: ["他昨天迟到了，今天又迟到了。", "我明天再来。"],
        tasks: [
          { vi: "Nói hôm nay trời lại mưa rồi.", re: "又", sample: "今天又下雨了。" },
          { vi: "Nói với khách: lần sau lại đến chơi nhé.", re: "再", sample: "下次再来玩儿吧！" }
        ]
      },
      {
        name: "Đại từ nghi vấn dùng linh hoạt (1)", pattern: "疑问词 + … 就 + … + cùng 疑问词",
        explain: "Hai đại từ nghi vấn giống nhau chỉ cùng một đối tượng: 你去哪儿我就去哪儿 (bạn đi đâu tôi đi đó), 你想吃什么就吃什么 (muốn ăn gì thì ăn nấy).",
        examples: ["你去哪儿我就去哪儿。", "谁先到，谁就买票。"],
        tasks: [{ vi: "Nói với bạn: bạn muốn mua gì thì mua nấy.", re: "(什么|哪儿|谁|怎么).*就.*(什么|哪儿|谁|怎么)", sample: "你想买什么就买什么。" }]
      }
    ],
    sentences: [
      ["你 去 哪儿 我 就 去 哪儿 。", "Nǐ qù nǎr wǒ jiù qù nǎr.", "Bạn đi đâu tôi đi đó."],
      ["你 想 吃 什么 就 吃 什么 。", "Nǐ xiǎng chī shénme jiù chī shénme.", "Bạn muốn ăn gì thì ăn nấy."],
      ["他 昨天 迟到 了 ， 今天 又 迟到 了 。", "Tā zuótiān chídào le, jīntiān yòu chídào le.", "Hôm qua anh ấy đến muộn, hôm nay lại muộn."],
      ["我 明天 再 来 。", "Wǒ míngtiān zài lái.", "Mai tôi lại đến."],
      ["他 家 在 十八 层 ， 我们 坐 电梯 吧 。", "Tā jiā zài shíbā céng, wǒmen zuò diàntī ba.", "Nhà anh ấy ở tầng mười tám, mình đi thang máy nhé."],
      ["请 等 一会儿 ， 我 马上 回来 。", "Qǐng děng yíhuìr, wǒ mǎshàng huílai.", "Xin đợi một lát, tôi về ngay."],
      ["我 几乎 每天 都 去 公园 。", "Wǒ jīhū měitiān dōu qù gōngyuán.", "Tôi hầu như ngày nào cũng đi công viên."],
      ["对 我 来 说 ， 健康 最 重要 。", "Duì wǒ lái shuō, jiànkāng zuì zhòngyào.", "Với tôi, sức khỏe là quan trọng nhất."]
    ],
    qa: [
      ["你喜欢住在高层还是低层？", "Nǐ xǐhuan zhù zài gāo céng háishi dī céng?", "Bạn thích ở tầng cao hay tầng thấp?", "我喜欢住在高层，因为很安静。"],
      ["你几乎每天都做什么？", "Nǐ jīhū měitiān dōu zuò shénme?", "Hầu như ngày nào bạn cũng làm gì?", "我几乎每天都学汉语。"],
      ["你觉得什么最重要？", "Nǐ juéde shénme zuì zhòngyào?", "Bạn thấy điều gì quan trọng nhất?", "我觉得健康最重要。"]
    ]
  },

  {
    id: 9, title: "她的汉语说得跟中国人一样好", py: "Tā de Hànyǔ shuō de gēn Zhōngguó rén yíyàng hǎo", vi: "Cô ấy nói tiếng Trung giỏi như người Trung Quốc",
    words: [
      ["中文", "Zhōngwén", "tiếng Trung, Trung văn", "trung văn", "我在学中文。", "Wǒ zài xué Zhōngwén.", "Tôi đang học tiếng Trung."],
      ["班", "bān", "lớp; ca làm", "ban", "我们班有二十个学生。", "Wǒmen bān yǒu èrshí ge xuésheng.", "Lớp chúng tôi có hai mươi học sinh."],
      ["一样", "yíyàng", "giống nhau", "nhất dạng", "我的手机跟你的一样。", "Wǒ de shǒujī gēn nǐ de yíyàng.", "Điện thoại của tôi giống của bạn."],
      ["最后", "zuìhòu", "cuối cùng", "tối hậu", "最后他还是来了。", "Zuìhòu tā háishi lái le.", "Cuối cùng anh ấy vẫn đến."],
      ["放心", "fàngxīn", "yên tâm", "phóng tâm", "放心吧，我会照顾好自己。", "Fàngxīn ba, wǒ huì zhàogù hǎo zìjǐ.", "Yên tâm đi, tôi sẽ tự chăm sóc tốt."],
      ["一定", "yídìng", "nhất định, chắc chắn", "nhất định", "我一定会来。", "Wǒ yídìng huì lái.", "Tôi nhất định sẽ đến."],
      ["担心", "dānxīn", "lo lắng", "đảm tâm", "别担心，没问题。", "Bié dānxīn, méi wèntí.", "Đừng lo, không vấn đề gì."],
      ["比较", "bǐjiào", "khá, tương đối; so sánh", "tỷ giảo", "今天比较热。", "Jīntiān bǐjiào rè.", "Hôm nay khá nóng."],
      ["了解", "liǎojiě", "hiểu rõ, tìm hiểu", "liễu giải", "我很了解她。", "Wǒ hěn liǎojiě tā.", "Tôi rất hiểu cô ấy."],
      ["先", "xiān", "trước", "tiên", "我先走了，明天见。", "Wǒ xiān zǒu le, míngtiān jiàn.", "Tôi đi trước nhé, mai gặp."],
      ["中间", "zhōngjiān", "ở giữa", "trung gian", "站在中间的是我们老师。", "Zhàn zài zhōngjiān de shì wǒmen lǎoshī.", "Người đứng ở giữa là thầy của chúng tôi."],
      ["参加", "cānjiā", "tham gia", "tham gia", "你参加明天的比赛吗？", "Nǐ cānjiā míngtiān de bǐsài ma?", "Bạn có tham gia cuộc thi ngày mai không?"],
      ["影响", "yǐngxiǎng", "ảnh hưởng", "ảnh hưởng", "玩手机会影响学习。", "Wán shǒujī huì yǐngxiǎng xuéxí.", "Chơi điện thoại sẽ ảnh hưởng việc học."]
    ],
    grammar: [
      {
        name: "越A越B", pattern: "越 + V/Adj, 越 + Adj/V",
        explain: "Càng A thì càng B: 雨越下越大 (mưa càng lúc càng to), 越学越喜欢 (càng học càng thích).",
        examples: ["雨越下越大。", "汉语我越学越喜欢。"],
        tasks: [{ vi: "Nói \"càng học càng thích\" về tiếng Trung.", re: "越.+越", sample: "汉语我越学越喜欢。" }]
      },
      {
        name: "So sánh 1: A 跟 B 一样 (+ Adj)", pattern: "A + 跟 + B + 一样 (+ Adj) ; V得 + 跟 + B + 一样 + Adj",
        explain: "A giống B / A … bằng B. Phủ định: A 跟 B 不一样.",
        examples: ["我的手机跟你的一样。", "她的汉语说得跟中国人一样好。"],
        tasks: [{ vi: "Nói bạn cao bằng chị/em gái của bạn.", re: "跟.+一样", sample: "我跟我妹妹一样高。" }]
      }
    ],
    sentences: [
      ["她 的 汉语 说 得 跟 中国 人 一样 好 。", "Tā de Hànyǔ shuō de gēn Zhōngguó rén yíyàng hǎo.", "Cô ấy nói tiếng Trung giỏi như người Trung Quốc."],
      ["我 的 手机 跟 你 的 一样 。", "Wǒ de shǒujī gēn nǐ de yíyàng.", "Điện thoại của tôi giống của bạn."],
      ["雨 越 下 越 大 。", "Yǔ yuè xià yuè dà.", "Mưa càng lúc càng to."],
      ["汉语 我 越 学 越 喜欢 。", "Hànyǔ wǒ yuè xué yuè xǐhuan.", "Tiếng Trung tôi càng học càng thích."],
      ["别 担心 ， 我 一定 会 参加 。", "Bié dānxīn, wǒ yídìng huì cānjiā.", "Đừng lo, tôi nhất định sẽ tham gia."],
      ["你 放心 吧 ， 我 很 了解 他 。", "Nǐ fàngxīn ba, wǒ hěn liǎojiě tā.", "Bạn yên tâm, tôi rất hiểu anh ấy."],
      ["我 先 走 了 ， 明天 见 。", "Wǒ xiān zǒu le, míngtiān jiàn.", "Tôi đi trước nhé, mai gặp."],
      ["站 在 中间 的 是 我们 班 的 老师 。", "Zhàn zài zhōngjiān de shì wǒmen bān de lǎoshī.", "Người đứng ở giữa là cô giáo lớp tôi."]
    ],
    qa: [
      ["你的汉语说得怎么样？", "Nǐ de Hànyǔ shuō de zěnmeyàng?", "Bạn nói tiếng Trung thế nào?", "还不太好，但是越说越好了。"],
      ["你跟谁一样高？", "Nǐ gēn shéi yíyàng gāo?", "Bạn cao bằng ai?", "我跟我姐姐一样高。"],
      ["你参加过什么比赛？", "Nǐ cānjiāguo shénme bǐsài?", "Bạn từng tham gia cuộc thi nào?", "我参加过公司的唱歌比赛。"]
    ]
  },

  {
    id: 10, title: "数学比历史难多了", py: "Shùxué bǐ lìshǐ nán duō le", vi: "Toán khó hơn lịch sử nhiều",
    words: [
      ["个子", "gèzi", "vóc dáng, chiều cao", "cá tử", "他个子很高。", "Tā gèzi hěn gāo.", "Anh ấy dáng người cao."],
      ["矮", "ǎi", "thấp", "ải", "我比哥哥矮一点儿。", "Wǒ bǐ gēge ǎi yìdiǎnr.", "Tôi thấp hơn anh trai một chút."],
      ["历史", "lìshǐ", "lịch sử", "lịch sử", "我对中国历史很感兴趣。", "Wǒ duì Zhōngguó lìshǐ hěn gǎn xìngqù.", "Tôi rất hứng thú với lịch sử Trung Quốc."],
      ["体育", "tǐyù", "thể dục, thể thao", "thể dục", "我最喜欢上体育课。", "Wǒ zuì xǐhuan shàng tǐyù kè.", "Tôi thích nhất giờ thể dục."],
      ["数学", "shùxué", "toán học", "số học", "我的数学不太好。", "Wǒ de shùxué bú tài hǎo.", "Môn toán của tôi không giỏi lắm."],
      ["方便", "fāngbiàn", "tiện lợi", "phương tiện", "住在这儿很方便。", "Zhù zài zhèr hěn fāngbiàn.", "Sống ở đây rất tiện."],
      ["自行车", "zìxíngchē", "xe đạp", "tự hành xa", "我每天骑自行车上班。", "Wǒ měitiān qí zìxíngchē shàngbān.", "Hằng ngày tôi đạp xe đi làm."],
      ["骑", "qí", "đi, cưỡi (xe đạp, xe máy, ngựa)", "kỵ", "我会骑自行车。", "Wǒ huì qí zìxíngchē.", "Tôi biết đi xe đạp."],
      ["旧", "jiù", "cũ", "cựu", "这辆自行车太旧了。", "Zhè liàng zìxíngchē tài jiù le.", "Chiếc xe đạp này cũ quá rồi."],
      ["换", "huàn", "đổi, thay", "hoán", "我想换一个新手机。", "Wǒ xiǎng huàn yí ge xīn shǒujī.", "Tôi muốn đổi điện thoại mới."],
      ["地方", "dìfang", "nơi, chỗ", "địa phương", "这是一个很漂亮的地方。", "Zhè shì yí ge hěn piàoliang de dìfang.", "Đây là một nơi rất đẹp."],
      ["中介", "zhōngjiè", "môi giới, trung gian", "trung giới", "我想找个中介帮我租房子。", "Wǒ xiǎng zhǎo ge zhōngjiè bāng wǒ zū fángzi.", "Tôi muốn tìm môi giới giúp tôi thuê nhà."],
      ["主要", "zhǔyào", "chủ yếu", "chủ yếu", "我主要是来学汉语的。", "Wǒ zhǔyào shì lái xué Hànyǔ de.", "Tôi chủ yếu đến để học tiếng Trung."],
      ["环境", "huánjìng", "môi trường, không gian", "hoàn cảnh", "这里的环境很好。", "Zhèlǐ de huánjìng hěn hǎo.", "Môi trường ở đây rất tốt."],
      ["附近", "fùjìn", "gần đây, lân cận", "phụ cận", "附近有银行吗？", "Fùjìn yǒu yínháng ma?", "Gần đây có ngân hàng không?"]
    ],
    grammar: [
      {
        name: "So sánh 2: A 比 B + Adj + mức độ", pattern: "A 比 B + Adj + 一点儿 / 一些 / 得多 / 多了",
        explain: "A hơn B. 一点儿/一些: hơn một chút; 得多/多了: hơn nhiều. Không dùng 很/非常 trong câu 比.",
        examples: ["数学比历史难多了。", "我比他矮一点儿。"],
        tasks: [{ vi: "So sánh chiều cao của bạn với một người trong nhà.", re: "比", sample: "我比我妈妈高一点儿。" }]
      },
      {
        name: "Số ước lượng (1): 几, 多", pattern: "十几 + lượng từ ; số chẵn chục + 多 + lượng từ",
        explain: "十几个 = mười mấy cái; 二十多个 = hơn hai mươi cái; 几个 = vài cái.",
        examples: ["附近有十几家饭馆。", "我们班有二十多个学生。"],
        tasks: [{ vi: "Nói công ty bạn có hơn ba mươi người.", re: "(几|多)", sample: "我们公司有三十多个人。" }]
      }
    ],
    sentences: [
      ["数学 比 历史 难 多 了 。", "Shùxué bǐ lìshǐ nán duō le.", "Toán khó hơn lịch sử nhiều."],
      ["我 比 他 矮 一点儿 。", "Wǒ bǐ tā ǎi yìdiǎnr.", "Tôi thấp hơn anh ấy một chút."],
      ["这里 的 环境 比 那里 好 得 多 。", "Zhèlǐ de huánjìng bǐ nàlǐ hǎo de duō.", "Môi trường ở đây tốt hơn ở kia nhiều."],
      ["骑 自行车 比 坐 公共汽车 方便 。", "Qí zìxíngchē bǐ zuò gōnggòng qìchē fāngbiàn.", "Đi xe đạp tiện hơn đi xe buýt."],
      ["我 想 换 一 个 地方 住 。", "Wǒ xiǎng huàn yí ge dìfang zhù.", "Tôi muốn đổi chỗ ở."],
      ["我们 班 有 二十 多 个 学生 。", "Wǒmen bān yǒu èrshí duō ge xuésheng.", "Lớp chúng tôi có hơn hai mươi học sinh."],
      ["附近 有 十 几 家 饭馆 。", "Fùjìn yǒu shí jǐ jiā fànguǎn.", "Gần đây có mười mấy nhà hàng."],
      ["他 主要 是 来 学 汉语 的 。", "Tā zhǔyào shì lái xué Hànyǔ de.", "Anh ấy chủ yếu đến để học tiếng Trung."]
    ],
    qa: [
      ["你家附近的环境怎么样？", "Nǐ jiā fùjìn de huánjìng zěnmeyàng?", "Môi trường gần nhà bạn thế nào?", "我家附近有公园，环境很好。"],
      ["上学的时候你喜欢数学还是历史？", "Shàngxué de shíhou nǐ xǐhuan shùxué háishi lìshǐ?", "Hồi đi học bạn thích toán hay lịch sử?", "我喜欢历史，数学比历史难多了。"],
      ["你比你的朋友高吗？", "Nǐ bǐ nǐ de péngyou gāo ma?", "Bạn có cao hơn bạn mình không?", "我比她高一点儿。"]
    ]
  },

  {
    id: 11, title: "别忘了把空调关了", py: "Bié wàngle bǎ kōngtiáo guān le", vi: "Đừng quên tắt điều hòa",
    words: [
      ["图书馆", "túshūguǎn", "thư viện", "đồ thư quán", "我常常去图书馆看书。", "Wǒ chángcháng qù túshūguǎn kàn shū.", "Tôi thường đến thư viện đọc sách."],
      ["借", "jiè", "mượn; cho mượn", "tá", "我想借一本书。", "Wǒ xiǎng jiè yì běn shū.", "Tôi muốn mượn một cuốn sách."],
      ["词典", "cídiǎn", "từ điển", "từ điển", "我常常查词典。", "Wǒ chángcháng chá cídiǎn.", "Tôi thường tra từ điển."],
      ["还", "huán", "trả (lại)", "hoàn", "这本书我明天还你。", "Zhè běn shū wǒ míngtiān huán nǐ.", "Cuốn sách này mai tôi trả bạn."],
      ["灯", "dēng", "đèn", "đăng", "房间里的灯坏了。", "Fángjiān li de dēng huài le.", "Đèn trong phòng hỏng rồi."],
      ["会议", "huìyì", "cuộc họp, hội nghị", "hội nghị", "明天上午有一个会议。", "Míngtiān shàngwǔ yǒu yí ge huìyì.", "Sáng mai có một cuộc họp."],
      ["结束", "jiéshù", "kết thúc", "kết thúc", "会议几点结束？", "Huìyì jǐ diǎn jiéshù?", "Cuộc họp mấy giờ kết thúc?"],
      ["忘记", "wàngjì", "quên", "vong ký", "我忘记他的名字了。", "Wǒ wàngjì tā de míngzi le.", "Tôi quên tên anh ấy rồi."],
      ["空调", "kōngtiáo", "điều hòa", "không điều", "天太热了，开空调吧。", "Tiān tài rè le, kāi kōngtiáo ba.", "Trời nóng quá, bật điều hòa đi."],
      ["关", "guān", "tắt; đóng", "quan", "请关门。", "Qǐng guān mén.", "Làm ơn đóng cửa."],
      ["地铁", "dìtiě", "tàu điện ngầm", "địa thiết", "我坐地铁去公司。", "Wǒ zuò dìtiě qù gōngsī.", "Tôi đi tàu điện ngầm đến công ty."],
      ["双", "shuāng", "đôi (lượng từ)", "song", "我买了一双鞋。", "Wǒ mǎile yì shuāng xié.", "Tôi đã mua một đôi giày."],
      ["筷子", "kuàizi", "đũa", "khoái tử", "请给我一双筷子。", "Qǐng gěi wǒ yì shuāng kuàizi.", "Cho tôi một đôi đũa."],
      ["啤酒", "píjiǔ", "bia", "bì tửu", "夏天我喜欢喝冰啤酒。", "Xiàtiān wǒ xǐhuan hē bīng píjiǔ.", "Mùa hè tôi thích uống bia lạnh."],
      ["口", "kǒu", "ngụm, miếng (lượng từ)", "khẩu", "我只喝了一口啤酒。", "Wǒ zhǐ hēle yì kǒu píjiǔ.", "Tôi chỉ uống một ngụm bia."],
      ["瓶子", "píngzi", "cái chai, lọ", "bình tử", "瓶子里还有水。", "Píngzi li hái yǒu shuǐ.", "Trong chai vẫn còn nước."],
      ["笔记本", "bǐjìběn", "sổ ghi chép; máy tính xách tay", "bút ký bản", "我的笔记本电脑很轻。", "Wǒ de bǐjìběn diànnǎo hěn qīng.", "Máy tính xách tay của tôi rất nhẹ."],
      ["电子邮件", "diànzǐ yóujiàn", "thư điện tử, email", "điện tử bưu kiện", "我每天都看电子邮件。", "Wǒ měitiān dōu kàn diànzǐ yóujiàn.", "Ngày nào tôi cũng xem email."],
      ["习惯", "xíguàn", "thói quen; quen với", "tập quán", "我已经习惯这儿的天气了。", "Wǒ yǐjīng xíguàn zhèr de tiānqì le.", "Tôi đã quen với thời tiết ở đây rồi."]
    ],
    grammar: [
      {
        name: "Câu chữ 把 (1): A 把 B + V + …", pattern: "A + 把 + B + V + 了 / 一下 / bổ ngữ",
        explain: "Nhấn mạnh A xử lý B thế nào. Động từ không đứng trơ trọi, phải có thành phần khác phía sau: 把空调关了 (tắt điều hòa đi), 把啤酒喝了.",
        examples: ["别忘了把空调关了。", "你把这瓶水喝了吧。"],
        tasks: [{ vi: "Nhắc người nhà: ra ngoài nhớ tắt đèn (dùng 把).", re: "把.+(关|开)", sample: "出门的时候别忘了把灯关了。" }]
      },
      {
        name: "Số ước lượng (2): 左右", pattern: "Số lượng / thời gian + 左右",
        explain: "左右 = khoảng, chừng (đặt SAU con số): 三点左右 (khoảng 3 giờ), 半个小时左右.",
        examples: ["会议三点左右结束。", "坐地铁要半个小时左右。"],
        tasks: [{ vi: "Nói bạn thường ngủ dậy khoảng sáu giờ.", re: "左右", sample: "我每天六点左右起床。" }]
      }
    ],
    sentences: [
      ["别 忘 了 把 空调 关 了 。", "Bié wàngle bǎ kōngtiáo guān le.", "Đừng quên tắt điều hòa."],
      ["走 的 时候 请 把 灯 关 了 。", "Zǒu de shíhou qǐng bǎ dēng guān le.", "Khi đi nhớ tắt đèn nhé."],
      ["你 把 这 瓶 啤酒 喝 了 吧 。", "Nǐ bǎ zhè píng píjiǔ hē le ba.", "Bạn uống hết chai bia này đi."],
      ["会议 三 点 左右 结束 。", "Huìyì sān diǎn zuǒyòu jiéshù.", "Cuộc họp kết thúc khoảng ba giờ."],
      ["坐 地铁 去 公司 要 半 个 小时 左右 。", "Zuò dìtiě qù gōngsī yào bàn ge xiǎoshí zuǒyòu.", "Đi tàu điện ngầm đến công ty mất khoảng nửa tiếng."],
      ["我 想 去 图书馆 借 几 本 书 。", "Wǒ xiǎng qù túshūguǎn jiè jǐ běn shū.", "Tôi muốn đến thư viện mượn vài cuốn sách."],
      ["我 忘记 回 他 的 电子 邮件 了 。", "Wǒ wàngjì huí tā de diànzǐ yóujiàn le.", "Tôi quên trả lời email của anh ấy rồi."],
      ["我 已经 习惯 用 筷子 了 。", "Wǒ yǐjīng xíguàn yòng kuàizi le.", "Tôi đã quen dùng đũa rồi."]
    ],
    qa: [
      ["你每天几点左右起床？", "Nǐ měitiān jǐ diǎn zuǒyòu qǐchuáng?", "Hằng ngày bạn dậy khoảng mấy giờ?", "我每天六点左右起床。"],
      ["出门的时候你会做什么？", "Chūmén de shíhou nǐ huì zuò shénme?", "Khi ra khỏi nhà bạn thường làm gì?", "我总是把灯和空调都关了。"],
      ["你常常去图书馆吗？", "Nǐ chángcháng qù túshūguǎn ma?", "Bạn có hay đến thư viện không?", "以前常常去，现在主要在网上看书。"]
    ]
  },

  {
    id: 12, title: "把重要的东西放在我这儿吧", py: "Bǎ zhòngyào de dōngxi fàng zài wǒ zhèr ba", vi: "Để đồ quan trọng ở chỗ tôi nhé",
    words: [
      ["太阳", "tàiyáng", "mặt trời", "thái dương", "太阳出来了。", "Tàiyáng chūlai le.", "Mặt trời mọc rồi."],
      ["西", "xī", "phía tây", "tây", "太阳从西边下山。", "Tàiyáng cóng xībian xià shān.", "Mặt trời lặn ở phía tây."],
      ["生气", "shēngqì", "tức giận", "sinh khí", "别生气了。", "Bié shēngqì le.", "Đừng giận nữa."],
      ["行李箱", "xínglixiāng", "va li", "hành lý tương", "这个行李箱太重了。", "Zhège xínglixiāng tài zhòng le.", "Cái va li này nặng quá."],
      ["自己", "zìjǐ", "tự mình, bản thân", "tự kỷ", "这件事我自己做。", "Zhè jiàn shì wǒ zìjǐ zuò.", "Việc này tôi tự làm."],
      ["包", "bāo", "túi, bao", "bao", "我的包是黑色的。", "Wǒ de bāo shì hēisè de.", "Túi của tôi màu đen."],
      ["发现", "fāxiàn", "phát hiện", "phát hiện", "我发现我的手机不见了。", "Wǒ fāxiàn wǒ de shǒujī bú jiàn le.", "Tôi phát hiện điện thoại của mình không thấy đâu."],
      ["护照", "hùzhào", "hộ chiếu", "hộ chiếu", "别忘了带护照。", "Bié wàngle dài hùzhào.", "Đừng quên mang hộ chiếu."],
      ["起飞", "qǐfēi", "cất cánh", "khởi phi", "飞机几点起飞？", "Fēijī jǐ diǎn qǐfēi?", "Máy bay mấy giờ cất cánh?"],
      ["司机", "sījī", "tài xế", "tư cơ", "他是出租车司机。", "Tā shì chūzūchē sījī.", "Anh ấy là tài xế taxi."],
      ["教", "jiāo", "dạy", "giáo", "妈妈教我做饭。", "Māma jiāo wǒ zuò fàn.", "Mẹ dạy tôi nấu cơm."],
      ["画", "huà", "vẽ; bức tranh", "họa", "我女儿喜欢画画儿。", "Wǒ nǚ'ér xǐhuan huà huàr.", "Con gái tôi thích vẽ tranh."],
      ["需要", "xūyào", "cần", "nhu yếu", "你需要帮忙吗？", "Nǐ xūyào bāngmáng ma?", "Bạn có cần giúp không?"],
      ["黑板", "hēibǎn", "bảng đen", "hắc bản", "老师在黑板上写字。", "Lǎoshī zài hēibǎn shang xiě zì.", "Thầy viết chữ lên bảng."]
    ],
    grammar: [
      {
        name: "才 và 就", pattern: "Thời gian + 就 + V + 了 (sớm, nhanh) ; Thời gian + 才 + V (muộn, chậm)",
        explain: "就: sớm hơn / nhanh hơn dự kiến (thường có 了). 才: muộn hơn / chậm hơn dự kiến (không dùng 了).",
        examples: ["我六点就起床了。", "他九点才到。"],
        tasks: [
          { vi: "Nói hôm nay bạn năm giờ sáng đã dậy rồi.", re: "就.+了", sample: "我今天五点就起床了。" },
          { vi: "Nói hôm qua mười một giờ đêm bạn mới về đến nhà.", re: "才", sample: "我昨天晚上十一点才到家。" }
        ]
      },
      {
        name: "Câu chữ 把 (2): A 把 B + V + 在/到/给", pattern: "A + 把 + B + V + 在/到/给 + nơi chốn/người",
        explain: "Di chuyển đồ vật đến đâu hoặc đưa cho ai: 把东西放在我这儿 (để đồ ở chỗ tôi), 把护照给我 (đưa hộ chiếu cho tôi).",
        examples: ["把重要的东西放在我这儿吧。", "请把护照给我。"],
        tasks: [{ vi: "Nhờ người khác đặt va li lên xe.", re: "把.+(在|到|给)", sample: "请把行李箱放到车上。" }]
      }
    ],
    sentences: [
      ["把 重要 的 东西 放 在 我 这儿 吧 。", "Bǎ zhòngyào de dōngxi fàng zài wǒ zhèr ba.", "Để đồ quan trọng ở chỗ tôi nhé."],
      ["请 把 护照 给 我 。", "Qǐng bǎ hùzhào gěi wǒ.", "Xin đưa hộ chiếu cho tôi."],
      ["你 把 行李箱 放 到 车 上 吧 。", "Nǐ bǎ xínglixiāng fàng dào chē shang ba.", "Bạn để va li lên xe đi."],
      ["飞机 八 点 就 起飞 了 ， 他 九 点 才 到 机场 。", "Fēijī bā diǎn jiù qǐfēi le, tā jiǔ diǎn cái dào jīchǎng.", "Máy bay tám giờ đã cất cánh, chín giờ anh ấy mới đến sân bay."],
      ["我 六 点 就 起床 了 。", "Wǒ liù diǎn jiù qǐchuáng le.", "Sáu giờ tôi đã dậy rồi."],
      ["我 发现 我 的 包 不 见 了 。", "Wǒ fāxiàn wǒ de bāo bú jiàn le.", "Tôi phát hiện túi của mình không thấy đâu."],
      ["别 生气 了 ， 我 自己 去 吧 。", "Bié shēngqì le, wǒ zìjǐ qù ba.", "Đừng giận nữa, để tôi tự đi."],
      ["妈妈 教 我 画 画儿 。", "Māma jiāo wǒ huà huàr.", "Mẹ dạy tôi vẽ tranh."]
    ],
    qa: [
      ["你今天几点起床的？", "Nǐ jīntiān jǐ diǎn qǐchuáng de?", "Hôm nay bạn dậy lúc mấy giờ?", "我今天五点半就起床了。"],
      ["你会画画儿吗？", "Nǐ huì huà huàr ma?", "Bạn có biết vẽ không?", "我不会，但是我想学。"],
      ["出国旅游需要带什么？", "Chūguó lǚyóu xūyào dài shénme?", "Đi du lịch nước ngoài cần mang gì?", "需要带护照，还要带一个行李箱。"]
    ]
  },

  {
    id: 13, title: "我是走回来的", py: "Wǒ shì zǒu huílai de", vi: "Tôi đi bộ về",
    words: [
      ["终于", "zhōngyú", "cuối cùng (đã)", "chung vu", "我终于找到工作了。", "Wǒ zhōngyú zhǎodào gōngzuò le.", "Cuối cùng tôi đã tìm được việc."],
      ["爷爷", "yéye", "ông nội", "gia gia", "我爷爷八十岁了。", "Wǒ yéye bāshí suì le.", "Ông nội tôi tám mươi tuổi rồi."],
      ["礼物", "lǐwù", "quà", "lễ vật", "这是给你的礼物。", "Zhè shì gěi nǐ de lǐwù.", "Đây là quà tặng bạn."],
      ["奶奶", "nǎinai", "bà nội", "nãi nãi", "奶奶做的菜特别好吃。", "Nǎinai zuò de cài tèbié hǎochī.", "Món bà nấu đặc biệt ngon."],
      ["遇到", "yùdào", "gặp phải, tình cờ gặp", "ngộ đáo", "我在路上遇到了老同学。", "Wǒ zài lù shang yùdàole lǎo tóngxué.", "Trên đường tôi gặp bạn học cũ."],
      ["一边", "yìbiān", "vừa… (vừa…)", "nhất biên", "别一边吃饭一边看手机。", "Bié yìbiān chī fàn yìbiān kàn shǒujī.", "Đừng vừa ăn cơm vừa xem điện thoại."],
      ["过去", "guòqu", "đi qua (đó); quá khứ", "quá khứ", "你先过去，我马上来。", "Nǐ xiān guòqu, wǒ mǎshàng lái.", "Bạn qua đó trước, tôi đến ngay."],
      ["一般", "yìbān", "thường thì; bình thường", "nhất ban", "我一般七点起床。", "Wǒ yìbān qī diǎn qǐchuáng.", "Tôi thường dậy lúc bảy giờ."],
      ["愿意", "yuànyì", "sẵn lòng, muốn", "nguyện ý", "你愿意帮我吗？", "Nǐ yuànyì bāng wǒ ma?", "Bạn có sẵn lòng giúp tôi không?"],
      ["起来", "qǐlai", "đứng dậy; ngủ dậy", "khởi lai", "快起来，要迟到了！", "Kuài qǐlai, yào chídào le!", "Mau dậy đi, sắp muộn rồi!"],
      ["应该", "yīnggāi", "nên, cần phải", "ứng cai", "你应该多休息。", "Nǐ yīnggāi duō xiūxi.", "Bạn nên nghỉ ngơi nhiều hơn."],
      ["生活", "shēnghuó", "cuộc sống; sống", "sinh hoạt", "我很喜欢这里的生活。", "Wǒ hěn xǐhuan zhèlǐ de shēnghuó.", "Tôi rất thích cuộc sống ở đây."],
      ["校长", "xiàozhǎng", "hiệu trưởng", "hiệu trưởng", "校长在办公室。", "Xiàozhǎng zài bàngōngshì.", "Hiệu trưởng ở văn phòng."],
      ["坏", "huài", "hỏng; xấu", "hoại", "我的手机坏了。", "Wǒ de shǒujī huài le.", "Điện thoại của tôi hỏng rồi."],
      ["经常", "jīngcháng", "thường xuyên", "kinh thường", "我经常给妈妈打电话。", "Wǒ jīngcháng gěi māma dǎ diànhuà.", "Tôi thường xuyên gọi điện cho mẹ."]
    ],
    grammar: [
      {
        name: "Bổ ngữ xu hướng kép", pattern: "V + 上/下/进/出/回/过/起 + 来/去",
        explain: "Động từ + hướng + 来/去: 走回来 (đi bộ về đây), 跑下去 (chạy xuống đó), 拿出来 (lấy ra), 站起来 (đứng dậy). Tân ngữ chỉ nơi chốn đặt trước 来/去: 走进教室来.",
        examples: ["我是走回来的。", "他从楼上跑下来了。"],
        tasks: [{ vi: "Bảo các bạn lấy sách ra.", re: "(拿|带|走|跑|站)(上|下|进|出|回|过|起)(来|去)", sample: "请大家把书拿出来。" }]
      },
      {
        name: "一边……一边……", pattern: "(S) + 一边 + V1 + 一边 + V2",
        explain: "Vừa làm V1 vừa làm V2 (cùng lúc).",
        examples: ["奶奶一边看电视一边吃水果。", "我们一边喝茶一边聊天儿。"],
        tasks: [{ vi: "Nói bạn thích vừa nấu ăn vừa nghe nhạc.", re: "一边.+一边", sample: "我喜欢一边做饭一边听音乐。" }]
      }
    ],
    sentences: [
      ["我 是 走 回来 的 。", "Wǒ shì zǒu huílai de.", "Tôi đi bộ về."],
      ["他 从 楼 上 跑 下来 了 。", "Tā cóng lóu shang pǎo xiàlai le.", "Anh ấy từ trên lầu chạy xuống."],
      ["你 把 书 拿 出来 吧 。", "Nǐ bǎ shū ná chūlai ba.", "Bạn lấy sách ra đi."],
      ["奶奶 一边 看 电视 一边 吃 水果 。", "Nǎinai yìbiān kàn diànshì yìbiān chī shuǐguǒ.", "Bà vừa xem ti vi vừa ăn hoa quả."],
      ["我 终于 买 到 了 那 本 书 。", "Wǒ zhōngyú mǎidàole nà běn shū.", "Cuối cùng tôi đã mua được cuốn sách đó."],
      ["在 路 上 我 遇到 了 我们 的 校长 。", "Zài lù shang wǒ yùdàole wǒmen de xiàozhǎng.", "Trên đường tôi gặp thầy hiệu trưởng."],
      ["爷爷 每天 早上 五 点 就 起来 了 。", "Yéye měitiān zǎoshang wǔ diǎn jiù qǐlai le.", "Sáng nào ông cũng dậy từ năm giờ."],
      ["你 应该 给 奶奶 买 一 个 礼物 。", "Nǐ yīnggāi gěi nǎinai mǎi yí ge lǐwù.", "Bạn nên mua một món quà cho bà."]
    ],
    qa: [
      ["你今天是怎么回来的？", "Nǐ jīntiān shì zěnme huílai de?", "Hôm nay bạn về bằng gì?", "我是坐公共汽车回来的。"],
      ["你喜欢一边做什么一边听音乐？", "Nǐ xǐhuan yìbiān zuò shénme yìbiān tīng yīnyuè?", "Bạn thích vừa làm gì vừa nghe nhạc?", "我喜欢一边做饭一边听音乐。"],
      ["你经常给家人买礼物吗？", "Nǐ jīngcháng gěi jiārén mǎi lǐwù ma?", "Bạn có hay mua quà cho người nhà không?", "过节的时候我经常给爸爸妈妈买礼物。"]
    ]
  },

  {
    id: 14, title: "你把水果拿过来", py: "Nǐ bǎ shuǐguǒ ná guòlai", vi: "Bạn mang hoa quả lại đây",
    words: [
      ["打扫", "dǎsǎo", "quét dọn", "đả tảo", "我每天打扫房间。", "Wǒ měitiān dǎsǎo fángjiān.", "Ngày nào tôi cũng dọn phòng."],
      ["干净", "gānjìng", "sạch sẽ", "can tịnh", "房间很干净。", "Fángjiān hěn gānjìng.", "Căn phòng rất sạch."],
      ["然后", "ránhòu", "sau đó", "nhiên hậu", "我先吃饭，然后去学校。", "Wǒ xiān chī fàn, ránhòu qù xuéxiào.", "Tôi ăn cơm trước, sau đó đến trường."],
      ["冰箱", "bīngxiāng", "tủ lạnh", "băng tương", "冰箱里有很多水果。", "Bīngxiāng li yǒu hěn duō shuǐguǒ.", "Trong tủ lạnh có rất nhiều hoa quả."],
      ["洗澡", "xǐzǎo", "tắm", "tẩy táo", "我每天晚上洗澡。", "Wǒ měitiān wǎnshang xǐzǎo.", "Tối nào tôi cũng tắm."],
      ["节目", "jiémù", "chương trình, tiết mục", "tiết mục", "这个节目很有意思。", "Zhège jiémù hěn yǒu yìsi.", "Chương trình này rất thú vị."],
      ["月亮", "yuèliang", "mặt trăng", "nguyệt lượng", "今天的月亮又大又圆。", "Jīntiān de yuèliang yòu dà yòu yuán.", "Trăng hôm nay vừa to vừa tròn."],
      ["像", "xiàng", "giống, như", "tượng", "她长得很像妈妈。", "Tā zhǎng de hěn xiàng māma.", "Cô ấy trông rất giống mẹ."],
      ["盘子", "pánzi", "đĩa", "bàn tử", "盘子里还有水果。", "Pánzi li hái yǒu shuǐguǒ.", "Trong đĩa vẫn còn hoa quả."],
      ["刮风", "guā fēng", "nổi gió", "quát phong", "今天刮风，有点儿冷。", "Jīntiān guā fēng, yǒudiǎnr lěng.", "Hôm nay có gió, hơi lạnh."],
      ["叔叔", "shūshu", "chú", "thúc thúc", "叔叔给我买了一个礼物。", "Shūshu gěi wǒ mǎile yí ge lǐwù.", "Chú mua cho tôi một món quà."],
      ["阿姨", "āyí", "cô, dì", "a di", "阿姨，您好！", "Āyí, nín hǎo!", "Cháu chào cô ạ!"],
      ["故事", "gùshi", "câu chuyện", "cố sự", "妈妈每天给孩子讲故事。", "Māma měitiān gěi háizi jiǎng gùshi.", "Ngày nào mẹ cũng kể chuyện cho con."],
      ["声音", "shēngyīn", "âm thanh, giọng", "thanh âm", "她的声音很好听。", "Tā de shēngyīn hěn hǎotīng.", "Giọng cô ấy rất hay."],
      ["菜单", "càidān", "thực đơn", "thái đơn", "请给我看看菜单。", "Qǐng gěi wǒ kànkan càidān.", "Cho tôi xem thực đơn."],
      ["简单", "jiǎndān", "đơn giản", "giản đơn", "这个问题很简单。", "Zhège wèntí hěn jiǎndān.", "Câu hỏi này rất đơn giản."],
      ["香蕉", "xiāngjiāo", "chuối", "hương tiêu", "我每天吃一个香蕉。", "Wǒ měitiān chī yí ge xiāngjiāo.", "Mỗi ngày tôi ăn một quả chuối."]
    ],
    grammar: [
      {
        name: "Câu chữ 把 (3): A 把 B + V + bổ ngữ kết quả / xu hướng", pattern: "A + 把 + B + V + 干净/完/好… ; V + 过来/出来/上去…",
        explain: "Làm cho B đạt kết quả hoặc di chuyển theo hướng nào: 把房间打扫干净 (dọn sạch phòng), 把水果拿过来 (mang hoa quả lại đây).",
        examples: ["你把水果拿过来。", "我把房间打扫干净了。"],
        tasks: [{ vi: "Nói bạn đã dọn sạch nhà rồi (dùng 把).", re: "把.+(干净|完|好|过来|出来|进来|上来|下来|回来)", sample: "我把家里打扫干净了。" }]
      },
      {
        name: "先……，再/又……，然后……", pattern: "先 + V1，再/又 + V2，然后 + V3",
        explain: "Kể trình tự nhiều việc: trước tiên… rồi… sau đó… (再 cho việc sẽ làm, 又 cho việc đã làm).",
        examples: ["我先洗澡，再吃饭，然后看电视。", "他先去了银行，又去了超市，然后回家了。"],
        tasks: [{ vi: "Kể ba việc bạn làm sau khi về nhà theo thứ tự.", re: "先.+(再|又).+然后", sample: "我先洗澡，再做饭，然后看书。" }]
      }
    ],
    sentences: [
      ["你 把 水果 拿 过来 。", "Nǐ bǎ shuǐguǒ ná guòlai.", "Bạn mang hoa quả lại đây."],
      ["我 把 房间 打扫 干净 了 。", "Wǒ bǎ fángjiān dǎsǎo gānjìng le.", "Tôi đã dọn sạch phòng rồi."],
      ["请 把 冰箱 里 的 香蕉 拿 出来 。", "Qǐng bǎ bīngxiāng li de xiāngjiāo ná chūlai.", "Hãy lấy chuối trong tủ lạnh ra."],
      ["我 先 洗澡 ， 再 吃 饭 ， 然后 看 电视 节目 。", "Wǒ xiān xǐzǎo, zài chī fàn, ránhòu kàn diànshì jiémù.", "Tôi tắm trước, rồi ăn cơm, sau đó xem chương trình TV."],
      ["今天 的 月亮 像 一 个 盘子 。", "Jīntiān de yuèliang xiàng yí ge pánzi.", "Mặt trăng hôm nay giống một cái đĩa."],
      ["外面 刮风 了 ， 把 窗户 关 上 吧 。", "Wàimiàn guā fēng le, bǎ chuānghu guānshang ba.", "Bên ngoài nổi gió rồi, đóng cửa sổ lại đi."],
      ["阿姨 给 孩子们 讲 故事 。", "Āyí gěi háizimen jiǎng gùshi.", "Cô kể chuyện cho bọn trẻ."],
      ["这 个 菜 很 简单 ， 我 教 你 做 。", "Zhège cài hěn jiǎndān, wǒ jiāo nǐ zuò.", "Món này rất đơn giản, tôi dạy bạn làm."]
    ],
    qa: [
      ["你回家以后一般先做什么？", "Nǐ huí jiā yǐhòu yìbān xiān zuò shénme?", "Về nhà bạn thường làm gì trước?", "我先洗澡，再做饭，然后看书。"],
      ["你的房间干净吗？", "Nǐ de fángjiān gānjìng ma?", "Phòng bạn có sạch không?", "很干净，我每天都打扫。"],
      ["你冰箱里有什么水果？", "Nǐ bīngxiāng li yǒu shénme shuǐguǒ?", "Tủ lạnh nhà bạn có hoa quả gì?", "我冰箱里有香蕉和苹果。"]
    ]
  },

  {
    id: 15, title: "其他都没什么问题", py: "Qítā dōu méi shénme wèntí", vi: "Những thứ khác đều không vấn đề gì",
    words: [
      ["留学", "liúxué", "du học", "lưu học", "她想去中国留学。", "Tā xiǎng qù Zhōngguó liúxué.", "Cô ấy muốn sang Trung Quốc du học."],
      ["水平", "shuǐpíng", "trình độ", "thủy bình", "他的汉语水平很高。", "Tā de Hànyǔ shuǐpíng hěn gāo.", "Trình độ tiếng Trung của anh ấy rất cao."],
      ["提高", "tígāo", "nâng cao", "đề cao", "我想提高我的口语。", "Wǒ xiǎng tígāo wǒ de kǒuyǔ.", "Tôi muốn nâng cao khả năng nói."],
      ["练习", "liànxí", "luyện tập; bài luyện tập", "luyện tập", "我们来练习一下。", "Wǒmen lái liànxí yíxià.", "Chúng ta luyện tập một chút."],
      ["完成", "wánchéng", "hoàn thành", "hoàn thành", "我已经完成了工作。", "Wǒ yǐjīng wánchéngle gōngzuò.", "Tôi đã hoàn thành công việc."],
      ["句子", "jùzi", "câu", "cú tử", "请用这个词说一个句子。", "Qǐng yòng zhège cí shuō yí ge jùzi.", "Hãy dùng từ này nói một câu."],
      ["其他", "qítā", "khác, cái khác", "kỳ tha", "其他人都去了。", "Qítā rén dōu qù le.", "Những người khác đều đi rồi."],
      ["发", "fā", "gửi, phát", "phát", "我给你发了一个电子邮件。", "Wǒ gěi nǐ fāle yí ge diànzǐ yóujiàn.", "Tôi đã gửi cho bạn một email."],
      ["要求", "yāoqiú", "yêu cầu", "yêu cầu", "老师的要求很高。", "Lǎoshī de yāoqiú hěn gāo.", "Yêu cầu của thầy rất cao."],
      ["注意", "zhùyì", "chú ý", "chú ý", "请注意你的发音。", "Qǐng zhùyì nǐ de fāyīn.", "Hãy chú ý phát âm của bạn."],
      ["上网", "shàngwǎng", "lên mạng", "thượng võng", "我每天晚上上网。", "Wǒ měitiān wǎnshang shàngwǎng.", "Tối nào tôi cũng lên mạng."],
      ["除了", "chúle", "ngoài… ra; trừ…", "trừ liễu", "除了周末，我每天都上班。", "Chúle zhōumò, wǒ měitiān dōu shàngbān.", "Trừ cuối tuần, ngày nào tôi cũng đi làm."],
      ["新闻", "xīnwén", "tin tức", "tân văn", "我每天看新闻。", "Wǒ měitiān kàn xīnwén.", "Ngày nào tôi cũng xem tin tức."],
      ["花", "huā", "tiêu (tiền, thời gian)", "hoa", "我花了很多时间学汉字。", "Wǒ huāle hěn duō shíjiān xué Hànzì.", "Tôi đã dành rất nhiều thời gian học chữ Hán."],
      ["极了", "jí le", "cực kỳ, vô cùng", "cực", "这个菜好吃极了！", "Zhège cài hǎochī jí le!", "Món này ngon cực kỳ!"],
      ["节日", "jiérì", "ngày lễ, ngày tết", "tiết nhật", "春节是中国最重要的节日。", "Chūnjié shì Zhōngguó zuì zhòngyào de jiérì.", "Tết là ngày lễ quan trọng nhất của Trung Quốc."],
      ["举行", "jǔxíng", "tổ chức, cử hành", "cử hành", "比赛在星期六举行。", "Bǐsài zài xīngqīliù jǔxíng.", "Cuộc thi được tổ chức vào thứ Bảy."],
      ["世界", "shìjiè", "thế giới", "thế giới", "我想去世界各地旅游。", "Wǒ xiǎng qù shìjiè gè dì lǚyóu.", "Tôi muốn đi du lịch khắp thế giới."],
      ["街道", "jiēdào", "đường phố", "nhai đạo", "这里的街道很干净。", "Zhèlǐ de jiēdào hěn gānjìng.", "Đường phố ở đây rất sạch."],
      ["各", "gè", "các, mỗi", "các", "各位朋友，大家好！", "Gè wèi péngyou, dàjiā hǎo!", "Xin chào các bạn!"],
      ["文化", "wénhuà", "văn hóa", "văn hóa", "我对中国文化很感兴趣。", "Wǒ duì Zhōngguó wénhuà hěn gǎn xìngqù.", "Tôi rất hứng thú với văn hóa Trung Quốc."]
    ],
    grammar: [
      {
        name: "除了……以外，都/还/也……", pattern: "除了 A (以外)，(S) 都… (loại trừ) ; 除了 A (以外)，(S) 还/也… (bổ sung)",
        explain: "Đi với 都: trừ A ra thì tất cả đều… Đi với 还/也: ngoài A ra còn có…",
        examples: ["除了他以外，我们都去过北京。", "除了汉语以外，她还会说英语。"],
        tasks: [{ vi: "Nói ngoài tiếng Việt ra, bạn còn biết tiếng gì.", re: "除了.+(以外|之外)?.*(还|也|都)", sample: "除了越南语以外，我还会说一点儿汉语。" }]
      },
      {
        name: "Đại từ nghi vấn dùng linh hoạt (2): chỉ điều không xác định", pattern: "没 + 什么 + N ; 想 + V + 点儿 + 什么",
        explain: "什么/哪儿/谁 không dùng để hỏi mà chỉ \"cái gì đó, đâu đó, ai đó\": 没什么问题 (không có vấn đề gì), 我想吃点儿什么 (tôi muốn ăn chút gì đó).",
        examples: ["其他都没什么问题。", "我饿了，想吃点儿什么。"],
        tasks: [{ vi: "Nói bạn khát, muốn uống chút gì đó.", re: "(点儿|一点).*什么|没什么", sample: "我渴了，想喝点儿什么。" }]
      },
      {
        name: "Mức độ: Adj + 极了", pattern: "Adj / động từ tâm lý + 极了",
        explain: "Cực kỳ, vô cùng (khẩu ngữ): 好吃极了, 高兴极了, 累极了.",
        examples: ["这个菜好吃极了！", "听到这个消息，我高兴极了。"],
        tasks: [{ vi: "Khen món ăn hôm nay ngon cực kỳ.", re: "极了", sample: "今天的菜好吃极了！" }]
      }
    ],
    sentences: [
      ["其他 都 没 什么 问题 。", "Qítā dōu méi shénme wèntí.", "Những thứ khác đều không có vấn đề gì."],
      ["除了 汉语 以外 ， 她 还 会 说 英语 。", "Chúle Hànyǔ yǐwài, tā hái huì shuō Yīngyǔ.", "Ngoài tiếng Trung ra, cô ấy còn biết nói tiếng Anh."],
      ["除了 他 以外 ， 我们 都 去 过 北京 。", "Chúle tā yǐwài, wǒmen dōu qùguo Běijīng.", "Trừ anh ấy ra, chúng tôi đều từng đến Bắc Kinh."],
      ["这 个 菜 好吃 极 了 ！", "Zhège cài hǎochī jí le!", "Món này ngon cực kỳ!"],
      ["我 每天 上网 看 新闻 。", "Wǒ měitiān shàngwǎng kàn xīnwén.", "Ngày nào tôi cũng lên mạng xem tin tức."],
      ["你 的 汉语 水平 提高 得 很 快 。", "Nǐ de Hànyǔ shuǐpíng tígāo de hěn kuài.", "Trình độ tiếng Trung của bạn tiến bộ rất nhanh."],
      ["春节 是 中国 最 重要 的 节日 。", "Chūnjié shì Zhōngguó zuì zhòngyào de jiérì.", "Tết là ngày lễ quan trọng nhất của Trung Quốc."],
      ["我 饿 了 ， 想 吃 点儿 什么 。", "Wǒ è le, xiǎng chī diǎnr shénme.", "Tôi đói rồi, muốn ăn chút gì đó."]
    ],
    qa: [
      ["除了汉语以外，你还会说什么语言？", "Chúle Hànyǔ yǐwài, nǐ hái huì shuō shénme yǔyán?", "Ngoài tiếng Trung, bạn còn biết nói tiếng gì?", "除了汉语以外，我还会说一点儿英语。"],
      ["你每天花多长时间上网？", "Nǐ měitiān huā duō cháng shíjiān shàngwǎng?", "Mỗi ngày bạn dành bao lâu để lên mạng?", "我每天花一个小时左右上网。"],
      ["越南最重要的节日是什么？", "Yuènán zuì zhòngyào de jiérì shì shénme?", "Ngày lễ quan trọng nhất của Việt Nam là gì?", "越南最重要的节日是春节。"]
    ]
  },

  {
    id: 16, title: "我现在累得下了班就想睡觉", py: "Wǒ xiànzài lèi de xiàle bān jiù xiǎng shuìjiào", vi: "Giờ tôi mệt đến mức tan làm là muốn ngủ",
    words: [
      ["城市", "chéngshì", "thành phố", "thành thị", "河内是一个美丽的城市。", "Hénèi shì yí ge měilì de chéngshì.", "Hà Nội là một thành phố đẹp."],
      ["如果", "rúguǒ", "nếu", "như quả", "如果你累了，就休息一下。", "Rúguǒ nǐ lèi le, jiù xiūxi yíxià.", "Nếu bạn mệt thì nghỉ một chút."],
      ["认为", "rènwéi", "cho rằng", "nhận vi", "我认为他说得对。", "Wǒ rènwéi tā shuō de duì.", "Tôi cho rằng anh ấy nói đúng."],
      ["皮鞋", "píxié", "giày da", "bì hài", "他穿着一双黑皮鞋。", "Tā chuānzhe yì shuāng hēi píxié.", "Anh ấy đi một đôi giày da đen."],
      ["帽子", "màozi", "mũ", "mạo tử", "外面很冷，戴上帽子吧。", "Wàimiàn hěn lěng, dàishang màozi ba.", "Ngoài trời lạnh, đội mũ vào đi."],
      ["长", "cháng", "dài", "trường", "她的头发很长。", "Tā de tóufa hěn cháng.", "Tóc cô ấy rất dài."],
      ["可爱", "kě'ài", "đáng yêu", "khả ái", "这只小猫真可爱！", "Zhè zhī xiǎo māo zhēn kě'ài!", "Con mèo nhỏ này đáng yêu quá!"],
      ["米", "mǐ", "mét; gạo", "mễ", "我一米六。", "Wǒ yì mǐ liù.", "Tôi cao một mét sáu."],
      ["公斤", "gōngjīn", "ki-lô-gam", "công cân", "我五十公斤。", "Wǒ wǔshí gōngjīn.", "Tôi nặng năm mươi cân."],
      ["鼻子", "bízi", "mũi", "tỵ tử", "他的鼻子很高。", "Tā de bízi hěn gāo.", "Mũi anh ấy rất cao."],
      ["头发", "tóufa", "tóc", "đầu phát", "我想去剪头发。", "Wǒ xiǎng qù jiǎn tóufa.", "Tôi muốn đi cắt tóc."],
      ["检查", "jiǎnchá", "kiểm tra, khám", "kiểm tra", "你应该去医院检查一下。", "Nǐ yīnggāi qù yīyuàn jiǎnchá yíxià.", "Bạn nên đến bệnh viện kiểm tra một chút."],
      ["刷牙", "shuāyá", "đánh răng", "loát nha", "睡觉以前要刷牙。", "Shuìjiào yǐqián yào shuāyá.", "Trước khi ngủ phải đánh răng."],
      ["关系", "guānxi", "quan hệ", "quan hệ", "我们的关系很好。", "Wǒmen de guānxi hěn hǎo.", "Quan hệ của chúng tôi rất tốt."],
      ["别人", "biérén", "người khác", "biệt nhân", "别人怎么说没关系。", "Biérén zěnme shuō méi guānxi.", "Người khác nói sao cũng không sao."],
      ["词语", "cíyǔ", "từ ngữ", "từ ngữ", "这些词语你都记住了吗？", "Zhèxiē cíyǔ nǐ dōu jìzhù le ma?", "Những từ ngữ này bạn nhớ hết chưa?"]
    ],
    grammar: [
      {
        name: "如果……(的话)，(S) 就……", pattern: "如果 + điều kiện (+ 的话)，(S) + 就 + kết quả",
        explain: "Nếu… thì… 的话 có thể thêm vào cuối vế điều kiện (khẩu ngữ).",
        examples: ["如果明天下雨的话，我们就不去了。", "如果你累了，就休息一下。"],
        tasks: [{ vi: "Nói nếu cuối tuần trời đẹp bạn sẽ làm gì.", re: "如果.+就", sample: "如果周末天气好，我就去公园。" }]
      },
      {
        name: "Bổ ngữ trạng thái phức tạp", pattern: "Adj/V + 得 + (cả một cụm/câu miêu tả mức độ)",
        explain: "Sau 得 là cả một cụm miêu tả mức độ: 累得下了班就想睡觉 (mệt đến nỗi tan làm là muốn ngủ), 高兴得跳了起来 (vui đến nhảy cẫng lên).",
        examples: ["我现在累得下了班就想睡觉。", "她高兴得跳了起来。"],
        tasks: [{ vi: "Nói bạn đói đến mức không làm việc nổi.", re: "得.{3,}", sample: "我饿得不想工作了。" }]
      },
      {
        name: "Lặp tính từ một âm tiết (AA)", pattern: "AA + (的) + N ; AA + 的",
        explain: "Lặp lại tính từ để miêu tả sinh động, nhẹ nhàng: 大大的眼睛 (đôi mắt to to), 长长的头发 (mái tóc dài dài), 高高的.",
        examples: ["她有大大的眼睛、长长的头发。", "孩子的脸红红的。"],
        tasks: [{ vi: "Tả một em bé (dùng tính từ lặp: 大大的, 小小的…).", re: "(.)\\1的", sample: "她有大大的眼睛和小小的鼻子。" }]
      }
    ],
    sentences: [
      ["我 现在 累 得 下 了 班 就 想 睡觉 。", "Wǒ xiànzài lèi de xiàle bān jiù xiǎng shuìjiào.", "Giờ tôi mệt đến mức tan làm là muốn ngủ."],
      ["她 高兴 得 跳 了 起来 。", "Tā gāoxìng de tiàole qǐlai.", "Cô ấy vui đến nhảy cẫng lên."],
      ["如果 明天 下 雨 的话 ， 我们 就 不 去 了 。", "Rúguǒ míngtiān xià yǔ dehuà, wǒmen jiù bú qù le.", "Nếu mai mưa thì chúng ta không đi nữa."],
      ["这 个 孩子 有 大大 的 眼睛 、 长长 的 头发 。", "Zhège háizi yǒu dàdà de yǎnjing, chángcháng de tóufa.", "Đứa bé này có đôi mắt to tròn, mái tóc dài."],
      ["我 认为 他 说 得 对 。", "Wǒ rènwéi tā shuō de duì.", "Tôi cho rằng anh ấy nói đúng."],
      ["我 一米六 ， 五十 公斤 。", "Wǒ yì mǐ liù, wǔshí gōngjīn.", "Tôi cao một mét sáu, nặng năm mươi cân."],
      ["每天 早上 和 晚上 都 要 刷牙 。", "Měitiān zǎoshang hé wǎnshang dōu yào shuāyá.", "Sáng và tối hằng ngày đều phải đánh răng."],
      ["别人 怎么 说 没 关系 。", "Biérén zěnme shuō méi guānxi.", "Người khác nói sao cũng không sao."]
    ],
    qa: [
      ["你下班以后累不累？", "Nǐ xiàbān yǐhòu lèi bu lèi?", "Tan làm bạn có mệt không?", "有时候累得下了班就想睡觉。"],
      ["如果明天放假，你想做什么？", "Rúguǒ míngtiān fàngjià, nǐ xiǎng zuò shénme?", "Nếu mai được nghỉ, bạn muốn làm gì?", "如果明天放假，我就带孩子去公园。"],
      ["你多高？多重？", "Nǐ duō gāo? Duō zhòng?", "Bạn cao bao nhiêu? Nặng bao nhiêu?", "我一米六，五十公斤。"]
    ]
  },

  {
    id: 17, title: "谁都有办法看好你的“病”", py: "Shéi dōu yǒu bànfǎ kànhǎo nǐ de \"bìng\"", vi: "Ai cũng có cách chữa \"bệnh\" của bạn",
    words: [
      ["请假", "qǐngjià", "xin nghỉ phép", "thỉnh giả", "我生病了，想请假。", "Wǒ shēngbìng le, xiǎng qǐngjià.", "Tôi bị ốm, muốn xin nghỉ."],
      ["一共", "yígòng", "tổng cộng", "nhất cộng", "这些一共多少钱？", "Zhèxiē yígòng duōshao qián?", "Chỗ này tổng cộng bao nhiêu tiền?"],
      ["邻居", "línjū", "hàng xóm", "lân cư", "我的邻居很热情。", "Wǒ de línjū hěn rèqíng.", "Hàng xóm của tôi rất nhiệt tình."],
      ["后来", "hòulái", "sau này, về sau (quá khứ)", "hậu lai", "后来他去中国留学了。", "Hòulái tā qù Zhōngguó liúxué le.", "Về sau anh ấy sang Trung Quốc du học."],
      ["爱好", "àihào", "sở thích", "ái hảo", "我的爱好是看书。", "Wǒ de àihào shì kàn shū.", "Sở thích của tôi là đọc sách."],
      ["办法", "bànfǎ", "cách, biện pháp", "biện pháp", "我有一个好办法。", "Wǒ yǒu yí ge hǎo bànfǎ.", "Tôi có một cách hay."],
      ["饱", "bǎo", "no", "bão", "我吃饱了。", "Wǒ chī bǎo le.", "Tôi ăn no rồi."],
      ["为了", "wèile", "để, vì (mục đích)", "vị liễu", "为了学好汉语，我每天练习。", "Wèile xuéhǎo Hànyǔ, wǒ měitiān liànxí.", "Để học giỏi tiếng Trung, ngày nào tôi cũng luyện tập."],
      ["决定", "juédìng", "quyết định", "quyết định", "我决定明天去北京。", "Wǒ juédìng míngtiān qù Běijīng.", "Tôi quyết định mai đi Bắc Kinh."],
      ["选择", "xuǎnzé", "lựa chọn", "tuyển trạch", "你选择哪一个？", "Nǐ xuǎnzé nǎ yí ge?", "Bạn chọn cái nào?"],
      ["冬天", "dōngtiān", "mùa đông", "đông thiên", "北京的冬天很冷。", "Běijīng de dōngtiān hěn lěng.", "Mùa đông Bắc Kinh rất lạnh."],
      ["必须", "bìxū", "phải, bắt buộc", "tất tu", "明天你必须早点儿来。", "Míngtiān nǐ bìxū zǎo diǎnr lái.", "Mai bạn phải đến sớm một chút."],
      ["根据", "gēnjù", "căn cứ vào, dựa theo", "căn cứ", "根据天气情况，我们决定不去了。", "Gēnjù tiānqì qíngkuàng, wǒmen juédìng bú qù le.", "Dựa vào tình hình thời tiết, chúng tôi quyết định không đi nữa."],
      ["情况", "qíngkuàng", "tình hình, tình huống", "tình huống", "你那边情况怎么样？", "Nǐ nàbiān qíngkuàng zěnmeyàng?", "Tình hình bên bạn thế nào?"],
      ["口", "kǒu", "miệng", "khẩu", "请张开口。", "Qǐng zhāngkāi kǒu.", "Xin hãy há miệng."],
      ["渴", "kě", "khát", "khát", "我渴了，想喝水。", "Wǒ kě le, xiǎng hē shuǐ.", "Tôi khát rồi, muốn uống nước."]
    ],
    grammar: [
      {
        name: "Lặp động từ hai âm tiết (ABAB)", pattern: "AB + AB : 休息休息, 介绍介绍, 打扫打扫",
        explain: "Lặp động từ để nói \"làm thử / làm một chút\", giọng nhẹ nhàng: 我们休息休息吧 (mình nghỉ một chút đi).",
        examples: ["我们休息休息吧。", "你给我们介绍介绍吧。"],
        tasks: [{ vi: "Rủ bạn: mình nghỉ ngơi một chút đi (lặp động từ).", re: "(..)\\1", sample: "我们休息休息吧。" }]
      },
      {
        name: "Đại từ nghi vấn dùng linh hoạt (3): chỉ tất cả", pattern: "谁/什么/哪儿/怎么 + 都/也 + (不/没) + V",
        explain: "Chỉ \"bất kỳ ai/cái gì/đâu\": 谁都知道 (ai cũng biết), 什么都想吃 (cái gì cũng muốn ăn), 哪儿都不想去 (đâu cũng không muốn đi).",
        examples: ["谁都有办法看好你的“病”。", "我饿了，什么都想吃。"],
        tasks: [{ vi: "Nói hôm nay bạn mệt, đâu cũng không muốn đi.", re: "(谁|什么|哪儿|哪里|怎么).*(都|也)", sample: "今天我很累，哪儿都不想去。" }]
      }
    ],
    sentences: [
      ["谁 都 有 办法 看好 你 的 “ 病 ” 。", "Shéi dōu yǒu bànfǎ kànhǎo nǐ de \"bìng\".", "Ai cũng có cách chữa \"bệnh\" của bạn."],
      ["我们 休息 休息 吧 。", "Wǒmen xiūxi xiūxi ba.", "Chúng ta nghỉ ngơi một chút đi."],
      ["你 给 我们 介绍 介绍 你 的 爱好 吧 。", "Nǐ gěi wǒmen jièshào jièshào nǐ de àihào ba.", "Bạn giới thiệu sở thích của bạn cho chúng tôi đi."],
      ["我 饿 了 ， 什么 都 想 吃 。", "Wǒ è le, shénme dōu xiǎng chī.", "Tôi đói rồi, cái gì cũng muốn ăn."],
      ["为了 学好 汉语 ， 我 每天 都 练习 。", "Wèile xuéhǎo Hànyǔ, wǒ měitiān dōu liànxí.", "Để học giỏi tiếng Trung, ngày nào tôi cũng luyện tập."],
      ["我 渴 了 ， 想 喝 口 水 。", "Wǒ kě le, xiǎng hē kǒu shuǐ.", "Tôi khát rồi, muốn uống ngụm nước."],
      ["这些 一共 多少 钱 ？", "Zhèxiē yígòng duōshao qián?", "Chỗ này tổng cộng bao nhiêu tiền?"],
      ["后来 他 决定 去 中国 留学 。", "Hòulái tā juédìng qù Zhōngguó liúxué.", "Về sau anh ấy quyết định sang Trung Quốc du học."]
    ],
    qa: [
      ["你不舒服的时候有什么办法？", "Nǐ bù shūfu de shíhou yǒu shénme bànfǎ?", "Khi bạn không khỏe thì có cách gì?", "我一般多喝水，多休息休息。"],
      ["为了学好汉语，你每天做什么？", "Wèile xuéhǎo Hànyǔ, nǐ měitiān zuò shénme?", "Để học giỏi tiếng Trung, mỗi ngày bạn làm gì?", "为了学好汉语，我每天听半个小时。"],
      ["冬天你喜欢去哪儿？", "Dōngtiān nǐ xǐhuan qù nǎr?", "Mùa đông bạn thích đi đâu?", "冬天我哪儿都不想去，只想在家。"]
    ]
  },

  {
    id: 18, title: "我相信他们会同意的", py: "Wǒ xiāngxìn tāmen huì tóngyì de", vi: "Tôi tin họ sẽ đồng ý",
    words: [
      ["向", "xiàng", "hướng về, về phía", "hướng", "一直向前走就到了。", "Yìzhí xiàng qián zǒu jiù dào le.", "Cứ đi thẳng về phía trước là đến."],
      ["万", "wàn", "vạn, mười nghìn", "vạn", "这个手机一万元。", "Zhège shǒujī yí wàn yuán.", "Chiếc điện thoại này mười nghìn tệ."],
      ["只", "zhǐ", "chỉ", "chỉ", "我只有一个妹妹。", "Wǒ zhǐ yǒu yí ge mèimei.", "Tôi chỉ có một em gái."],
      ["嘴", "zuǐ", "miệng", "chủy", "她的嘴很小。", "Tā de zuǐ hěn xiǎo.", "Miệng cô ấy rất nhỏ."],
      ["动物", "dòngwù", "động vật", "động vật", "你喜欢什么动物？", "Nǐ xǐhuan shénme dòngwù?", "Bạn thích con vật nào?"],
      ["段", "duàn", "đoạn, khoảng (thời gian)", "đoạn", "这段时间我很忙。", "Zhè duàn shíjiān wǒ hěn máng.", "Khoảng thời gian này tôi rất bận."],
      ["不但……而且", "búdàn… érqiě", "không những… mà còn…", "bất đãn … nhi thả", "他不但会说汉语，而且说得很好。", "Tā búdàn huì shuō Hànyǔ, érqiě shuō de hěn hǎo.", "Anh ấy không những biết nói tiếng Trung mà còn nói rất giỏi."],
      ["有名", "yǒumíng", "nổi tiếng", "hữu danh", "这家饭馆很有名。", "Zhè jiā fànguǎn hěn yǒumíng.", "Nhà hàng này rất nổi tiếng."],
      ["同意", "tóngyì", "đồng ý", "đồng ý", "我同意你的看法。", "Wǒ tóngyì nǐ de kànfǎ.", "Tôi đồng ý với quan điểm của bạn."],
      ["相信", "xiāngxìn", "tin, tin tưởng", "tương tín", "我相信你能做好。", "Wǒ xiāngxìn nǐ néng zuòhǎo.", "Tôi tin bạn có thể làm tốt."],
      ["关于", "guānyú", "về (vấn đề gì)", "quan vu", "这是一本关于中国历史的书。", "Zhè shì yì běn guānyú Zhōngguó lìshǐ de shū.", "Đây là một cuốn sách về lịch sử Trung Quốc."],
      ["机会", "jīhuì", "cơ hội", "cơ hội", "这是一个很好的机会。", "Zhè shì yí ge hěn hǎo de jīhuì.", "Đây là một cơ hội rất tốt."],
      ["国家", "guójiā", "quốc gia, đất nước", "quốc gia", "你去过哪些国家？", "Nǐ qùguo nǎxiē guójiā?", "Bạn đã đến những nước nào?"],
      ["种", "zhǒng", "loại, kiểu", "chủng", "这种水果很甜。", "Zhè zhǒng shuǐguǒ hěn tián.", "Loại hoa quả này rất ngọt."],
      ["特点", "tèdiǎn", "đặc điểm", "đặc điểm", "这个城市有什么特点？", "Zhège chéngshì yǒu shénme tèdiǎn?", "Thành phố này có đặc điểm gì?"],
      ["奇怪", "qíguài", "kỳ lạ", "kỳ quái", "真奇怪，他怎么还没来？", "Zhēn qíguài, tā zěnme hái méi lái?", "Lạ thật, sao anh ấy vẫn chưa đến?"],
      ["地", "de", "trợ từ (Adj + 地 + V: một cách…)", "địa", "他高兴地说：“太好了！”", "Tā gāoxìng de shuō: \"Tài hǎo le!\"", "Anh ấy vui vẻ nói: \"Tốt quá!\""]
    ],
    grammar: [
      {
        name: "只要……就……", pattern: "只要 + điều kiện，(S) + 就 + kết quả",
        explain: "Chỉ cần… là… (điều kiện đủ, chỉ cần có A là sẽ có B).",
        examples: ["只要你努力，就一定能学好。", "只要有时间，我就去旅游。"],
        tasks: [{ vi: "Nói chỉ cần có thời gian là bạn học tiếng Trung.", re: "只要.+就", sample: "只要有时间，我就学汉语。" }]
      },
      {
        name: "Giới từ 关于", pattern: "关于 + N (+ 的 + N) ; 关于 + N，…",
        explain: "Về, liên quan đến (chủ đề): 关于中国历史的书 (sách về lịch sử Trung Quốc).",
        examples: ["这是一本关于中国历史的书。", "关于这个问题，我们明天再说。"],
        tasks: [{ vi: "Nói bạn thích xem phim về động vật.", re: "关于", sample: "我喜欢看关于动物的电影。" }]
      }
    ],
    sentences: [
      ["我 相信 他们 会 同意 的 。", "Wǒ xiāngxìn tāmen huì tóngyì de.", "Tôi tin họ sẽ đồng ý."],
      ["只要 你 努力 ， 就 一定 能 学好 。", "Zhǐyào nǐ nǔlì, jiù yídìng néng xuéhǎo.", "Chỉ cần bạn cố gắng là nhất định học tốt."],
      ["这 是 一 本 关于 中国 历史 的 书 。", "Zhè shì yì běn guānyú Zhōngguó lìshǐ de shū.", "Đây là một cuốn sách về lịch sử Trung Quốc."],
      ["他 不但 会 唱歌 ， 而且 唱 得 很 好 。", "Tā búdàn huì chàng gē, érqiě chàng de hěn hǎo.", "Anh ấy không những biết hát mà còn hát rất hay."],
      ["熊猫 是 中国 最 有名 的 动物 。", "Xióngmāo shì Zhōngguó zuì yǒumíng de dòngwù.", "Gấu trúc là con vật nổi tiếng nhất Trung Quốc."],
      ["这 种 水果 很 奇怪 ， 我 没 吃 过 。", "Zhè zhǒng shuǐguǒ hěn qíguài, wǒ méi chīguo.", "Loại quả này lạ quá, tôi chưa ăn bao giờ."],
      ["他 高兴 地 说 ： “ 太 好 了 ！ ”", "Tā gāoxìng de shuō: \"Tài hǎo le!\"", "Anh ấy vui vẻ nói: \"Tốt quá!\""],
      ["你 一直 向 前 走 就 到 了 。", "Nǐ yìzhí xiàng qián zǒu jiù dào le.", "Bạn cứ đi thẳng về phía trước là đến."]
    ],
    qa: [
      ["你相信只要努力就能学好汉语吗？", "Nǐ xiāngxìn zhǐyào nǔlì jiù néng xuéhǎo Hànyǔ ma?", "Bạn có tin chỉ cần cố gắng là học tốt tiếng Trung không?", "我相信，只要每天练习就一定能学好。"],
      ["你们国家有什么有名的地方？", "Nǐmen guójiā yǒu shénme yǒumíng de dìfang?", "Đất nước bạn có nơi nào nổi tiếng?", "越南的下龙湾很有名。"],
      ["你喜欢看关于什么的书？", "Nǐ xǐhuan kàn guānyú shénme de shū?", "Bạn thích đọc sách về chủ đề gì?", "我喜欢看关于历史的书。"]
    ]
  },

  {
    id: 19, title: "你没看出来吗", py: "Nǐ méi kàn chūlai ma", vi: "Bạn không nhận ra à",
    words: [
      ["耳朵", "ěrduo", "tai", "nhĩ đóa", "兔子的耳朵很长。", "Tùzi de ěrduo hěn cháng.", "Tai thỏ rất dài."],
      ["脸", "liǎn", "mặt", "kiểm", "她的脸红了。", "Tā de liǎn hóng le.", "Mặt cô ấy đỏ lên."],
      ["短", "duǎn", "ngắn", "đoản", "我喜欢短头发。", "Wǒ xǐhuan duǎn tóufa.", "Tôi thích tóc ngắn."],
      ["马", "mǎ", "ngựa", "mã", "你骑过马吗？", "Nǐ qíguo mǎ ma?", "Bạn cưỡi ngựa bao giờ chưa?"],
      ["张", "zhāng", "mở, há (miệng); tờ, tấm (lượng từ)", "trương", "请张开嘴。", "Qǐng zhāngkāi zuǐ.", "Xin hãy há miệng."],
      ["位", "wèi", "vị (lượng từ lịch sự cho người)", "vị", "这位是我们的新老师。", "Zhè wèi shì wǒmen de xīn lǎoshī.", "Vị này là cô giáo mới của chúng tôi."],
      ["蓝", "lán", "xanh lam", "lam", "今天的天很蓝。", "Jīntiān de tiān hěn lán.", "Trời hôm nay rất xanh."],
      ["秋天", "qiūtiān", "mùa thu", "thu thiên", "我喜欢秋天。", "Wǒ xǐhuan qiūtiān.", "Tôi thích mùa thu."],
      ["过", "guò", "qua, đi qua; trải qua", "quá", "我们一起过马路吧。", "Wǒmen yìqǐ guò mǎlù ba.", "Chúng ta cùng qua đường nhé."],
      ["鸟", "niǎo", "chim", "điểu", "树上有一只鸟。", "Shù shang yǒu yì zhī niǎo.", "Trên cây có một con chim."],
      ["哭", "kū", "khóc", "khốc", "孩子为什么哭了？", "Háizi wèishénme kū le?", "Đứa bé sao lại khóc?"],
      ["黄河", "Huáng Hé", "sông Hoàng Hà", "Hoàng Hà", "黄河是中国第二长的河。", "Huáng Hé shì Zhōngguó dì-èr cháng de hé.", "Hoàng Hà là con sông dài thứ hai Trung Quốc."],
      ["船", "chuán", "thuyền, tàu thủy", "thuyền", "我们坐船去吧。", "Wǒmen zuò chuán qù ba.", "Chúng ta đi thuyền nhé."],
      ["经过", "jīngguò", "đi qua, trải qua", "kinh quá", "我每天上班都经过这个公园。", "Wǒ měitiān shàngbān dōu jīngguò zhège gōngyuán.", "Ngày nào đi làm tôi cũng đi qua công viên này."]
    ],
    grammar: [
      {
        name: "Nghĩa mở rộng của bổ ngữ xu hướng", pattern: "看出来, 听出来, 想起来, 说下去, 坚持下去…",
        explain: "Bổ ngữ xu hướng không chỉ hướng di chuyển: 出来 = nhận ra, phát hiện (看出来, 听出来); 起来 = nhớ ra, bắt đầu (想起来, 笑起来); 下去 = tiếp tục (说下去, 坚持下去).",
        examples: ["你没看出来吗？", "我想起来了，他叫王明。"],
        tasks: [{ vi: "Nói bạn nghe ra đó là giọng của mẹ.", re: "(看|听|想|认)(出来|起来)", sample: "我听出来了，这是妈妈的声音。" }]
      },
      {
        name: "使, 叫, 让", pattern: "A + 使/叫/让 + B + V/Adj",
        explain: "Khiến, bảo, để cho. 让/叫 dùng nhiều trong khẩu ngữ (bảo ai làm gì); 使 trang trọng hơn, thường đi với tính từ/cảm xúc (使我很高兴).",
        examples: ["老师让我们每天练习汉语。", "这件事使我很高兴。"],
        tasks: [{ vi: "Nói hồi nhỏ mẹ bảo bạn ngủ sớm.", re: "(让|叫|使)", sample: "小时候妈妈让我早点儿睡觉。" }]
      }
    ],
    sentences: [
      ["你 没 看 出来 吗 ？", "Nǐ méi kàn chūlai ma?", "Bạn không nhận ra à?"],
      ["我 想 起来 了 ， 他 叫 王明 。", "Wǒ xiǎng qǐlai le, tā jiào Wáng Míng.", "Tôi nhớ ra rồi, anh ấy tên Vương Minh."],
      ["我 听 出来 了 ， 这 是 妈妈 的 声音 。", "Wǒ tīng chūlai le, zhè shì māma de shēngyīn.", "Tôi nghe ra rồi, đây là giọng của mẹ."],
      ["老师 让 我们 每天 练习 汉语 。", "Lǎoshī ràng wǒmen měitiān liànxí Hànyǔ.", "Cô giáo bảo chúng tôi luyện tiếng Trung mỗi ngày."],
      ["妈妈 叫 我 早点儿 回家 。", "Māma jiào wǒ zǎo diǎnr huí jiā.", "Mẹ bảo tôi về nhà sớm một chút."],
      ["这 件 事 使 我 很 高兴 。", "Zhè jiàn shì shǐ wǒ hěn gāoxìng.", "Chuyện này khiến tôi rất vui."],
      ["秋天 的 天 很 蓝 。", "Qiūtiān de tiān hěn lán.", "Trời mùa thu rất xanh."],
      ["我们 坐 船 经过 了 黄河 。", "Wǒmen zuò chuán jīngguòle Huáng Hé.", "Chúng tôi đi thuyền qua sông Hoàng Hà."]
    ],
    qa: [
      ["你能听出来这是谁的声音吗？", "Nǐ néng tīng chūlai zhè shì shéi de shēngyīn ma?", "Bạn nghe ra được đây là giọng ai không?", "我听出来了，这是我朋友的声音。"],
      ["小时候妈妈让你做什么？", "Xiǎo shíhou māma ràng nǐ zuò shénme?", "Hồi nhỏ mẹ bảo bạn làm gì?", "妈妈让我每天早点儿睡觉。"],
      ["你坐过船吗？", "Nǐ zuòguo chuán ma?", "Bạn từng đi thuyền chưa?", "坐过，我在下龙湾坐过船。"]
    ]
  },

  {
    id: 20, title: "我被他影响了", py: "Wǒ bèi tā yǐngxiǎng le", vi: "Tôi bị anh ấy ảnh hưởng",
    words: [
      ["照相机", "zhàoxiàngjī", "máy ảnh", "chiếu tướng cơ", "我买了一个新照相机。", "Wǒ mǎile yí ge xīn zhàoxiàngjī.", "Tôi mua một chiếc máy ảnh mới."],
      ["被", "bèi", "bị, được (câu bị động)", "bị", "杯子被打破了。", "Bēizi bèi dǎpò le.", "Cái cốc bị đánh vỡ rồi."],
      ["难过", "nánguò", "buồn", "nan quá", "听到这个消息，我很难过。", "Tīngdào zhège xiāoxi, wǒ hěn nánguò.", "Nghe tin này, tôi rất buồn."],
      ["东", "dōng", "phía đông", "đông", "太阳从东边出来。", "Tàiyáng cóng dōngbian chūlai.", "Mặt trời mọc ở phía đông."],
      ["信用卡", "xìnyòngkǎ", "thẻ tín dụng", "tín dụng tạp", "可以用信用卡吗？", "Kěyǐ yòng xìnyòngkǎ ma?", "Có thể dùng thẻ tín dụng không?"],
      ["关心", "guānxīn", "quan tâm", "quan tâm", "谢谢你关心我。", "Xièxie nǐ guānxīn wǒ.", "Cảm ơn bạn đã quan tâm tôi."],
      ["只有……才", "zhǐyǒu… cái", "chỉ có… mới…", "chỉ hữu … tài", "只有多练习，才能说得好。", "Zhǐyǒu duō liànxí, cái néng shuō de hǎo.", "Chỉ có luyện nhiều mới nói giỏi được."],
      ["成绩", "chéngjì", "thành tích, điểm số", "thành tích", "他的成绩很好。", "Tā de chéngjì hěn hǎo.", "Thành tích của cậu ấy rất tốt."],
      ["碗", "wǎn", "bát, chén", "oản", "我要一碗面条。", "Wǒ yào yì wǎn miàntiáo.", "Tôi muốn một bát mì."],
      ["分", "fēn", "điểm; phút; xu", "phân", "这次考试我考了九十分。", "Zhè cì kǎoshì wǒ kǎole jiǔshí fēn.", "Lần thi này tôi được chín mươi điểm."],
      ["解决", "jiějué", "giải quyết", "giải quyết", "这个问题很难解决。", "Zhège wèntí hěn nán jiějué.", "Vấn đề này rất khó giải quyết."],
      ["试", "shì", "thử", "thí", "你试试这件衣服。", "Nǐ shìshi zhè jiàn yīfu.", "Bạn thử bộ đồ này xem."],
      ["真正", "zhēnzhèng", "thật sự, chân chính", "chân chính", "他是我真正的朋友。", "Tā shì wǒ zhēnzhèng de péngyou.", "Anh ấy là người bạn thật sự của tôi."],
      ["多么", "duōme", "biết bao, thật là", "đa ma", "今天的天气多么好啊！", "Jīntiān de tiānqì duōme hǎo a!", "Thời tiết hôm nay đẹp biết bao!"]
    ],
    grammar: [
      {
        name: "Câu bị động chữ 被", pattern: "Người/vật chịu tác động + 被 + (người làm) + V + thành phần khác",
        explain: "Nói ai/cái gì bị (thường là việc không mong muốn). Động từ phía sau thường có 了 hoặc bổ ngữ: 被打破了, 被拿走了. Phủ định: 没被….",
        examples: ["我被他影响了。", "我的照相机被弟弟弄坏了。"],
        tasks: [{ vi: "Nói đồ ăn của bạn bị con mèo ăn mất.", re: "被", sample: "我的鱼被猫吃了。" }]
      },
      {
        name: "只有……才……", pattern: "只有 + điều kiện duy nhất，(S) + 才 + kết quả",
        explain: "Chỉ có… mới… (điều kiện bắt buộc, khác 只要…就 là điều kiện đủ).",
        examples: ["只有多练习，才能提高水平。", "只有你才能帮我。"],
        tasks: [{ vi: "Nói chỉ có luyện nói mỗi ngày mới nói giỏi tiếng Trung được.", re: "只有.+才", sample: "只有每天练习，才能说好汉语。" }]
      }
    ],
    sentences: [
      ["我 被 他 影响 了 。", "Wǒ bèi tā yǐngxiǎng le.", "Tôi bị anh ấy ảnh hưởng."],
      ["我 的 照相机 被 弟弟 弄 坏 了 。", "Wǒ de zhàoxiàngjī bèi dìdi nònghuài le.", "Máy ảnh của tôi bị em trai làm hỏng rồi."],
      ["碗 被 孩子 打破 了 。", "Wǎn bèi háizi dǎpò le.", "Cái bát bị đứa bé đánh vỡ rồi."],
      ["只有 多 练习 ， 才 能 提高 水平 。", "Zhǐyǒu duō liànxí, cái néng tígāo shuǐpíng.", "Chỉ có luyện tập nhiều mới nâng cao trình độ được."],
      ["这 次 考试 我 的 成绩 是 九十 分 。", "Zhè cì kǎoshì wǒ de chéngjì shì jiǔshí fēn.", "Lần thi này điểm của tôi là chín mươi."],
      ["别 难过 ， 问题 一定 能 解决 。", "Bié nánguò, wèntí yídìng néng jiějué.", "Đừng buồn, vấn đề nhất định giải quyết được."],
      ["你 试 一下 这 件 衣服 吧 。", "Nǐ shì yíxià zhè jiàn yīfu ba.", "Bạn thử bộ đồ này đi."],
      ["你 能 来 ， 我 多么 高兴 啊 ！", "Nǐ néng lái, wǒ duōme gāoxìng a!", "Bạn đến được, tôi vui biết bao!"]
    ],
    qa: [
      ["你被谁影响过？", "Nǐ bèi shéi yǐngxiǎngguo?", "Bạn từng bị ai ảnh hưởng?", "我被我的老师影响了，所以喜欢上了汉语。"],
      ["你觉得怎样才能学好汉语？", "Nǐ juéde zěnyàng cái néng xuéhǎo Hànyǔ?", "Bạn thấy làm thế nào mới học tốt tiếng Trung?", "只有每天练习，才能学好汉语。"],
      ["你的东西被人拿走过吗？", "Nǐ de dōngxi bèi rén názǒuguo ma?", "Đồ của bạn từng bị người khác lấy mất chưa?", "我的自行车被人骑走过一次。"]
    ]
  }
];
