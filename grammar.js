/*
 * Ngữ pháp chi tiết + mở rộng ngoài sách.
 * Khóa "bài-số thứ tự ngữ pháp" (vd "1-0") bổ sung cho điểm ngữ pháp trong lessons.js:
 *   form: [[nhãn, cấu trúc], ...]   notes: [lưu ý/lỗi hay gặp]   examples: [[câu, pinyin, nghĩa], ...]
 * extra[bài]: các điểm ngữ pháp mở rộng ngoài giáo trình (có bài đặt câu riêng).
 */
window.GRAMMAR_PLUS = {
  /* ---------- Bài 1 ---------- */
  "1-0": {
    form: [["Khẳng định", "V + 好 + 了：做好了"], ["Phủ định", "没 + V + 好：还没准备好"], ["Câu hỏi", "V + 好 + 了吗？/ V + 好 + 了没有？"]],
    notes: ["好 ở đây không phải \"tốt\" mà là \"xong xuôi, ổn thỏa, sẵn sàng\".", "So với 完: 做完 = làm xong (hết việc); 做好 = làm xong và đạt yêu cầu.", "Phủ định dùng 没, không dùng 不: 我还没想好 (không nói 我不想好)."],
    examples: [["你想好了吗？", "Nǐ xiǎnghǎo le ma?", "Bạn nghĩ kỹ chưa?"], ["我还没准备好。", "Wǒ hái méi zhǔnbèi hǎo.", "Tôi vẫn chưa chuẩn bị xong."], ["作业写好了没有？", "Zuòyè xiěhǎo le méiyǒu?", "Bài tập viết xong chưa?"]]
  },
  "1-1": {
    form: [["Với tính từ", "一点儿 + 也/都 + 不 + Adj：一点儿也不冷"], ["Với danh từ", "一 + lượng từ + N + 也/都 + 没 + V：一个人都没来"]],
    notes: ["Trạng thái/tính từ dùng 不; hành động đã xảy ra dùng 没.", "Danh từ đặt TRƯỚC 也/都: 一本书也没买 (không nói 也没买一本书).", "一点儿也不 + Adj là cách phủ định mạnh rất hay dùng: 一点儿也不难."],
    examples: [["这个菜一点儿也不辣。", "Zhège cài yìdiǎnr yě bú là.", "Món này không cay chút nào."], ["我一分钱都没有了。", "Wǒ yì fēn qián dōu méiyǒu le.", "Tôi chẳng còn một xu nào."], ["教室里一个人也没有。", "Jiàoshì li yí ge rén yě méiyǒu.", "Trong lớp chẳng có một ai."]]
  },
  "1-2": {
    form: [["Cấu trúc", "(Người kia nói …) → 那 + (S) + 就/吧 …"]],
    notes: ["那 đứng đầu câu, hay đi với 吧 (đề nghị) hoặc 就 (kết luận).", "Đừng nhầm với 那 nà = \"kia, đó\" (đại từ chỉ định): 那个人."],
    examples: [["A：外面下雨了。B：那我们别去了。", "Wàimiàn xià yǔ le. Nà wǒmen bié qù le.", "A: Ngoài trời mưa rồi. B: Vậy mình đừng đi nữa."], ["你不喜欢喝咖啡，那喝茶吧。", "Nǐ bù xǐhuan hē kāfēi, nà hē chá ba.", "Bạn không thích cà phê thì uống trà nhé."]]
  },

  /* ---------- Bài 2 ---------- */
  "2-0": {
    form: [["Cơ bản", "V + 来/去：进来、出去"], ["Có nơi chốn", "V + nơi chốn + 来/去：回家去、上楼来"], ["Phủ định", "没 + V + 来/去"]],
    notes: ["Nơi chốn phải đứng TRƯỚC 来/去: 回家去 (không nói 回去家).", "Chọn 来 hay 去 theo vị trí người nói: đang ở trong phòng thì nói 进来, đang ở ngoài thì nói 进去."],
    examples: [["你进来吧。", "Nǐ jìnlai ba.", "Bạn vào đi (tôi đang ở trong)."], ["他回中国去了。", "Tā huí Zhōngguó qu le.", "Anh ấy về Trung Quốc rồi."], ["妈妈带来了很多水果。", "Māma dàilaile hěn duō shuǐguǒ.", "Mẹ mang tới rất nhiều hoa quả."]]
  },
  "2-1": {
    form: [["Quá khứ / thói quen", "V1 + 了 + O1 + 就 + V2 (+ 了)"], ["Tương lai / đề nghị", "V1 + 了 + O1 + 再 + V2"]],
    notes: ["了 đặt ngay sau động từ thứ nhất: 下了班, 吃了饭.", "Khuyên hay đề nghị thì dùng 再: 吃了饭再走吧."],
    examples: [["他吃了饭就去上班了。", "Tā chīle fàn jiù qù shàngbān le.", "Anh ấy ăn cơm xong là đi làm."], ["你到了北京就给我打电话。", "Nǐ dàole Běijīng jiù gěi wǒ dǎ diànhuà.", "Bạn đến Bắc Kinh là gọi cho tôi ngay nhé."], ["我们看了电影再回家吧。", "Wǒmen kànle diànyǐng zài huí jiā ba.", "Mình xem phim xong rồi hãy về nhà."]]
  },
  "2-2": {
    form: [["Ý \"không thể\"", "能 + V + 吗？"], ["Ý \"chắc chắn phải\"", "能不 + V + 吗？"], ["Mở rộng", "不是 … 吗？(chẳng phải… sao?)"]],
    notes: ["Không phải câu hỏi thật, không cần trả lời; thường có lý do ở vế trước.", "Đọc nhấn giọng để thể hiện cảm xúc."],
    examples: [["天这么冷，能不穿外套吗？", "Tiān zhème lěng, néng bù chuān wàitào ma?", "Trời lạnh thế, sao mà không mặc áo khoác được?"], ["这么贵，我能买吗？", "Zhème guì, wǒ néng mǎi ma?", "Đắt thế, tôi mua sao nổi?"], ["你不是说今天不来吗？", "Nǐ bú shì shuō jīntiān bù lái ma?", "Chẳng phải bạn nói hôm nay không đến sao?"]]
  },

  /* ---------- Bài 3 ---------- */
  "3-0": {
    form: [["Câu hỏi", "A 还是 B？"], ["Trần thuật", "A 或者 B (都…)"], ["Câu có ý lựa chọn", "不知道 / 没想好 + A 还是 B"]],
    notes: ["Sau 不知道, 没想好, 问… vẫn dùng 还是 vì có ý lựa chọn: 我不知道去还是不去.", "还是 còn nghĩa \"vẫn\" (他还是来了) và \"tốt hơn là\" (你还是去吧)."],
    examples: [["我不知道他去还是不去。", "Wǒ bù zhīdào tā qù háishi bú qù.", "Tôi không biết anh ấy đi hay không đi."], ["你还是坐地铁吧，快一点儿。", "Nǐ háishi zuò dìtiě ba, kuài yìdiǎnr.", "Bạn nên đi tàu điện ngầm, nhanh hơn."], ["喝茶或者喝咖啡都可以。", "Hē chá huòzhě hē kāfēi dōu kěyǐ.", "Uống trà hay cà phê đều được."]]
  },
  "3-1": {
    form: [["Khẳng định", "Nơi chốn + V + 着 + (số lượng) + N"], ["Câu hỏi", "Nơi chốn + V + 着 + 什么？"]],
    notes: ["Chủ ngữ là NƠI CHỐN, không có 在 ở đầu câu: 桌子上放着… (không nói 在桌子上放着…).", "Danh từ phía sau thường có số lượng: 一本书, 很多人.", "Động từ hay gặp: 放 (để), 挂 guà (treo), 写 (viết), 坐 (ngồi), 站 (đứng), 住 (ở)."],
    examples: [["门口站着两个人。", "Ménkǒu zhànzhe liǎng ge rén.", "Ở cửa có hai người đứng."], ["黑板上写着几个字。", "Hēibǎn shang xiězhe jǐ ge zì.", "Trên bảng có viết mấy chữ."], ["冰箱里放着什么？", "Bīngxiāng li fàngzhe shénme?", "Trong tủ lạnh để những gì?"]]
  },
  "3-2": {
    form: [["Sẽ", "会 + V"], ["Sẽ không", "不会 + V"], ["Khẳng định chắc chắn", "会 + V + 的"]],
    notes: ["会 có 3 nghĩa: biết (kỹ năng: 我会游泳), sẽ (khả năng), giỏi (他很会说话).", "Thêm 的 cuối câu để khẳng định chắc chắn: 他会来的."],
    examples: [["别担心，他会来的。", "Bié dānxīn, tā huì lái de.", "Đừng lo, anh ấy sẽ đến mà."], ["这么晚了，商店不会开门了。", "Zhème wǎn le, shāngdiàn bú huì kāimén le.", "Muộn thế này, cửa hàng sẽ không mở cửa nữa."], ["你觉得明天会冷吗？", "Nǐ juéde míngtiān huì lěng ma?", "Bạn thấy mai có lạnh không?"]]
  },

  /* ---------- Bài 4 ---------- */
  "4-0": {
    form: [["Tính từ", "又 + Adj + 又 + Adj"], ["Động từ", "又 + V + 又 + V"]],
    notes: ["Hai vế cùng sắc thái: 又便宜又好 (đều tốt), 又贵又难吃 (đều xấu).", "Hai hành động làm cùng lúc thì dùng 一边…一边 (Bài 13)."],
    examples: [["她的房间又大又干净。", "Tā de fángjiān yòu dà yòu gānjìng.", "Phòng cô ấy vừa rộng vừa sạch."], ["孩子们又唱又跳。", "Háizimen yòu chàng yòu tiào.", "Bọn trẻ vừa hát vừa nhảy."], ["今天又冷又下雨。", "Jīntiān yòu lěng yòu xià yǔ.", "Hôm nay vừa lạnh vừa mưa."]]
  },
  "4-1": {
    form: [["Cơ bản", "V1 + 着 + V2：笑着说"], ["Có tân ngữ", "V1 + 着 + O1 + V2 + O2：拿着地图找路"]],
    notes: ["V1 là cách thức/trạng thái, V2 là hành động chính.", "Khuyên ngăn dùng 别 trước V1: 别躺着看书."],
    examples: [["他笑着说：“没关系。”", "Tā xiàozhe shuō: \"Méi guānxi.\"", "Anh ấy cười nói: \"Không sao.\""], ["我们走着去吧。", "Wǒmen zǒuzhe qù ba.", "Mình đi bộ đến đó nhé."], ["妈妈哭着打电话。", "Māma kūzhe dǎ diànhuà.", "Mẹ vừa khóc vừa gọi điện."]]
  },

  /* ---------- Bài 5 ---------- */
  "5-0": {
    form: [["Tính từ", "Adj + 了：冷了、胖了"], ["Không… nữa", "不/没 + V + 了"], ["Thời gian / số", "N + 了：春天了、十点了"]],
    notes: ["了 cuối câu (thay đổi) khác 了 sau động từ (hoàn thành): 我吃了饭 (đã ăn) ≠ 我饿了 (đói rồi).", "不…了 = không… nữa: 我不喝了 (tôi không uống nữa)."],
    examples: [["我不去了。", "Wǒ bú qù le.", "Tôi không đi nữa."], ["十二点了，快睡觉吧。", "Shí'èr diǎn le, kuài shuìjiào ba.", "Mười hai giờ rồi, mau ngủ đi."], ["孩子会走路了。", "Háizi huì zǒulù le.", "Bé biết đi rồi."]]
  },
  "5-1": {
    form: [["Tính từ", "越来越 + Adj (+ 了)"], ["Động từ tâm lý", "越来越 + 喜欢/想/了解 + O"]],
    notes: ["Không thêm 很, 非常: ✗ 越来越很好.", "Câu thường kết thúc bằng 了.", "Không dùng với động từ hành động thường: ✗ 越来越吃."],
    examples: [["天越来越黑了。", "Tiān yuèláiyuè hēi le.", "Trời càng lúc càng tối."], ["我越来越想家了。", "Wǒ yuèláiyuè xiǎng jiā le.", "Tôi ngày càng nhớ nhà."], ["她的汉语越来越流利了。", "Tā de Hànyǔ yuèláiyuè liúlì le.", "Tiếng Trung của cô ấy ngày càng lưu loát."]]
  },

  /* ---------- Bài 6 ---------- */
  "6-0": {
    form: [["Được", "V + 得 + 懂/到/完/清楚…"], ["Không được", "V + 不 + 懂/到/完/清楚…"], ["Câu hỏi", "V得…V不…？/ V得…吗？"]],
    notes: ["Nói KHÔNG đạt được kết quả thì dùng V不…, không dùng 不能: 我听不懂 ✓, 我不能听懂 ✗.", "V不了 (liǎo) = không thể (vì quá sức, vì bận…): 吃不了, 去不了."],
    examples: [["这么多菜，我吃不完。", "Zhème duō cài, wǒ chī bu wán.", "Nhiều món thế này, tôi ăn không hết."], ["字太小了，我看不见。", "Zì tài xiǎo le, wǒ kàn bu jiàn.", "Chữ nhỏ quá, tôi không nhìn thấy."], ["你听得懂上海话吗？", "Nǐ tīng de dǒng Shànghǎihuà ma?", "Bạn nghe hiểu tiếng Thượng Hải không?"]]
  },
  "6-1": {
    form: [["Không có ngữ cảnh", "N + 呢？= … đâu rồi?"], ["Có ngữ cảnh trước", "…，N + 呢？= còn … thì sao?"]],
    notes: ["我的钥匙呢？ hỏi chìa khóa ở đâu; 我是越南人，你呢？ hỏi \"còn bạn?\"."],
    examples: [["我的钥匙呢？", "Wǒ de yàoshi ne?", "Chìa khóa của tôi đâu rồi?"], ["我喜欢喝茶，你呢？", "Wǒ xǐhuan hē chá, nǐ ne?", "Tôi thích uống trà, còn bạn?"], ["孩子们呢？都去哪儿了？", "Háizimen ne? Dōu qù nǎr le?", "Bọn trẻ đâu? Đi đâu hết rồi?"]]
  },
  "6-2": {
    form: [["刚", "S + 刚 + V (+ thời lượng)：我刚来两天"], ["刚才", "刚才 + S + V + 了 / 刚才 + 没…"], ["Làm định ngữ", "刚才 + 的 + N：刚才的电话"]],
    notes: ["刚 là phó từ, phải đứng sau chủ ngữ, trước động từ.", "刚 + V + thời lượng (mới… được bao lâu) — 刚才 không dùng như vậy.", "刚才 phủ định được: 刚才我没听清楚."],
    examples: [["我刚来两天。", "Wǒ gāng lái liǎng tiān.", "Tôi mới đến được hai ngày."], ["刚才的电话是谁打的？", "Gāngcái de diànhuà shì shéi dǎ de?", "Cuộc gọi lúc nãy là ai gọi vậy?"], ["我刚才没听清楚，请再说一遍。", "Wǒ gāngcái méi tīng qīngchu, qǐng zài shuō yí biàn.", "Lúc nãy tôi nghe chưa rõ, xin nói lại một lần."]]
  },

  /* ---------- Bài 7 ---------- */
  "7-0": {
    form: [["Không tân ngữ", "V + 了 + thời gian (+ 了)"], ["Có tân ngữ", "V + O + V + 了 + thời gian (+ 了)"], ["Cách khác", "V + 了 + thời gian + (的) + O：学了一年(的)汉语"]],
    notes: ["Có 了 cuối câu: việc VẪN đang tiếp tục. Không có: việc đã kết thúc.", "Động từ không kéo dài (认识, 结婚, 来, 毕业): thời gian tính từ lúc xảy ra đến nay: 结婚十年了."],
    examples: [["我等了你半个小时了！", "Wǒ děngle nǐ bàn ge xiǎoshí le!", "Tôi đợi bạn nửa tiếng rồi đấy!"], ["我们结婚八年了。", "Wǒmen jiéhūn bā nián le.", "Chúng tôi cưới nhau tám năm rồi."], ["他昨天睡了十个小时。", "Tā zuótiān shuìle shí ge xiǎoshí.", "Hôm qua anh ấy ngủ mười tiếng."]]
  },
  "7-1": {
    form: [["Khẳng định", "对 + N + (很) 感兴趣"], ["Phủ định", "对 + N + 不感兴趣"], ["Câu hỏi", "你对什么感兴趣？"]],
    notes: ["Không nói 感兴趣 + N: ✗ 我感兴趣音乐.", "Cách nói tương tự: 对…有兴趣, 喜欢…, 我的爱好是…"],
    examples: [["我对历史不太感兴趣。", "Wǒ duì lìshǐ bú tài gǎn xìngqù.", "Tôi không hứng thú lắm với lịch sử."], ["你对什么运动感兴趣？", "Nǐ duì shénme yùndòng gǎn xìngqù?", "Bạn hứng thú với môn thể thao nào?"], ["他对中国菜很有兴趣。", "Tā duì Zhōngguó cài hěn yǒu xìngqù.", "Anh ấy rất có hứng thú với món Trung Quốc."]]
  },
  "7-2": {
    form: [["Rưỡi / khắc", "…点半 / …点一刻 / …点三刻"], ["Kém", "差 + phút + …点"], ["Giờ + phút", "…点 + phút (分)：八点二十"]],
    notes: ["Nói giờ dùng 两点, không nói 二点.", "一刻 = 15 phút, 三刻 = 45 phút; không nói 两刻 (dùng 半)."],
    examples: [["现在两点三刻。", "Xiànzài liǎng diǎn sān kè.", "Bây giờ là hai giờ bốn mươi lăm."], ["差十分八点。", "Chà shí fēn bā diǎn.", "Tám giờ kém mười."], ["我们十一点二十见面。", "Wǒmen shíyī diǎn èrshí jiànmiàn.", "Chúng ta gặp nhau lúc mười một giờ hai mươi."]]
  },

  /* ---------- Bài 8 ---------- */
  "8-0": {
    form: [["Đã lặp lại", "又 + V + 了"], ["Sẽ lặp lại / đề nghị", "再 + V"], ["Lặp lại chắc chắn trong tương lai", "又 + 要/是/会 + …：明天又是星期一了"]],
    notes: ["Tương lai có quy luật chắc chắn vẫn dùng 又: 明天又要上班了.", "再 còn nghĩa \"rồi hãy\": 吃了饭再说.", "Đừng… nữa: 别再 + V + 了."],
    examples: [["明天又是星期一了。", "Míngtiān yòu shì xīngqīyī le.", "Mai lại là thứ Hai rồi."], ["请再说一遍。", "Qǐng zài shuō yí biàn.", "Xin nói lại một lần nữa."], ["别再迟到了！", "Bié zài chídào le!", "Đừng đến muộn nữa nhé!"]]
  },
  "8-1": {
    form: [["Ai… người đó", "谁 + V，谁 + 就 + V"], ["Đâu… đó", "哪儿 + …，就 + 哪儿 + …"], ["Thế nào… thế ấy", "怎么 + V，就 + 怎么 + V"]],
    notes: ["Vế sau thường có 就.", "Hai đại từ nghi vấn chỉ cùng một người/vật/nơi."],
    examples: [["谁想去谁就去。", "Shéi xiǎng qù shéi jiù qù.", "Ai muốn đi thì người đó đi."], ["你怎么说我就怎么做。", "Nǐ zěnme shuō wǒ jiù zěnme zuò.", "Bạn nói sao tôi làm vậy."], ["哪儿便宜就去哪儿买。", "Nǎr piányi jiù qù nǎr mǎi.", "Chỗ nào rẻ thì đến chỗ đó mua."]]
  },

  /* ---------- Bài 9 ---------- */
  "9-0": {
    form: [["Một chủ ngữ", "越 + V + 越 + Adj：越说越好"], ["Hai chủ ngữ", "S1 + 越 + V，S2 + 越 + V/Adj"]],
    notes: ["越来越 thay đổi theo THỜI GIAN; 越A越B: B thay đổi theo A.", "Không thêm 很 trước B."],
    examples: [["你越说我越不明白。", "Nǐ yuè shuō wǒ yuè bù míngbai.", "Bạn càng nói tôi càng không hiểu."], ["天气越冷，人越不想出门。", "Tiānqì yuè lěng, rén yuè bù xiǎng chūmén.", "Trời càng lạnh, người ta càng không muốn ra ngoài."], ["东西越便宜，买的人越多。", "Dōngxi yuè piányi, mǎi de rén yuè duō.", "Đồ càng rẻ, người mua càng đông."]]
  },
  "9-1": {
    form: [["Giống", "A 跟 B 一样"], ["Bằng nhau", "A 跟 B 一样 + Adj"], ["Khác", "A 跟 B 不一样"], ["Với 得", "V得 + 跟 B 一样 + Adj"]],
    notes: ["Phủ định đặt 不 trước 一样, không phải trước 跟.", "Có thể thay 跟 bằng 和."],
    examples: [["我的看法跟你不一样。", "Wǒ de kànfǎ gēn nǐ bù yíyàng.", "Quan điểm của tôi khác bạn."], ["弟弟跟爸爸一样高了。", "Dìdi gēn bàba yíyàng gāo le.", "Em trai đã cao bằng bố rồi."], ["她做饭做得跟妈妈一样好吃。", "Tā zuò fàn zuò de gēn māma yíyàng hǎochī.", "Cô ấy nấu ăn ngon như mẹ."]]
  },

  /* ---------- Bài 10 ---------- */
  "10-0": {
    form: [["Cơ bản", "A 比 B + Adj"], ["Hơn chút", "A 比 B + Adj + 一点儿/一些"], ["Hơn nhiều", "A 比 B + Adj + 得多/多了"], ["Hơn bao nhiêu", "A 比 B + Adj + số lượng：大三岁"], ["Phủ định", "A 没有 B + Adj"]],
    notes: ["Không dùng 很, 非常, 太 trước tính từ: ✗ 我比他很高.", "Được dùng 更/还: 他比我还高.", "Phủ định dùng 没有; 不比 có nghĩa khác (không hơn)."],
    examples: [["我比我妹妹大三岁。", "Wǒ bǐ wǒ mèimei dà sān suì.", "Tôi lớn hơn em gái ba tuổi."], ["今天比昨天冷多了。", "Jīntiān bǐ zuótiān lěng duō le.", "Hôm nay lạnh hơn hôm qua nhiều."], ["坐地铁比打车便宜得多。", "Zuò dìtiě bǐ dǎchē piányi de duō.", "Đi tàu điện ngầm rẻ hơn đi taxi nhiều."]]
  },
  "10-1": {
    form: [["Hơn… (số chẵn chục)", "Số + 多 + lượng từ：二十多个"], ["Hơn… (số lẻ)", "Số + lượng từ + 多：三个多小时"], ["Mười mấy / vài chục", "十几 / 几十"], ["Khoảng (2 số liền)", "三四个"]],
    notes: ["Số chẵn chục: 多 trước lượng từ (二十多个人). Số lẻ: 多 sau lượng từ (一个多小时)."],
    examples: [["我等了一个多小时。", "Wǒ děngle yí ge duō xiǎoshí.", "Tôi đợi hơn một tiếng."], ["我们班有十几个人。", "Wǒmen bān yǒu shí jǐ ge rén.", "Lớp chúng tôi có mười mấy người."], ["我每天喝三四杯水。", "Wǒ měitiān hē sān sì bēi shuǐ.", "Mỗi ngày tôi uống ba bốn cốc nước."]]
  },

  /* ---------- Bài 11 ---------- */
  "11-0": {
    form: [["Khẳng định", "A + 把 + B + V + 了/一下/bổ ngữ"], ["Phủ định", "A + 没/别/不 + 把 + B + V …"], ["Câu hỏi", "A + 把 + B + V + 了吗？"]],
    notes: ["B phải là vật XÁC ĐỊNH (cái đó, của tôi…): 把这本书 — không nói 把一本书.", "Phủ định và động từ năng nguyện đặt TRƯỚC 把: 别把…, 没把…, 要把…", "Động từ không đứng trơ trọi: ✗ 我把饭吃.", "Động từ cảm giác/nhận thức không dùng 把: ✗ 把汉语懂."],
    examples: [["我还没把作业写完。", "Wǒ hái méi bǎ zuòyè xiěwán.", "Tôi vẫn chưa làm xong bài tập."], ["你把手机给我看一下。", "Nǐ bǎ shǒujī gěi wǒ kàn yíxià.", "Bạn đưa điện thoại cho tôi xem một chút."], ["别把这件事告诉他。", "Bié bǎ zhè jiàn shì gàosu tā.", "Đừng kể chuyện này cho anh ấy."]]
  },
  "11-1": {
    form: [["Số lượng", "Số + lượng từ + 左右：五个人左右"], ["Thời gian", "Thời gian + 左右：三点左右"]],
    notes: ["左右 đứng SAU con số; 大概 (khoảng) đứng TRƯỚC: 大概三点.", "Nên dùng một trong hai, không cần cả hai."],
    examples: [["他四十岁左右。", "Tā sìshí suì zuǒyòu.", "Anh ấy khoảng bốn mươi tuổi."], ["我大概八点到。", "Wǒ dàgài bā diǎn dào.", "Tôi khoảng tám giờ đến."], ["一斤苹果十块钱左右。", "Yì jīn píngguǒ shí kuài qián zuǒyòu.", "Một cân táo khoảng mười tệ."]]
  },

  /* ---------- Bài 12 ---------- */
  "12-0": {
    form: [["Sớm / nhanh", "Thời gian + 就 + V + 了"], ["Muộn / chậm", "Thời gian + 才 + V"], ["Với số lượng", "Số lượng + 就 (ít, dễ) / 才 (nhiều, khó)"]],
    notes: ["Câu có 才 thường KHÔNG có 了: ✗ 他九点才来了.", "才 + số lượng còn nghĩa \"chỉ có\": 才五十块 (chỉ 50 tệ)."],
    examples: [["他说了三遍我才明白。", "Tā shuōle sān biàn wǒ cái míngbai.", "Anh ấy nói ba lần tôi mới hiểu."], ["我一个小时就做完了。", "Wǒ yí ge xiǎoshí jiù zuòwán le.", "Một tiếng là tôi làm xong rồi."], ["这件衣服才五十块。", "Zhè jiàn yīfu cái wǔshí kuài.", "Bộ đồ này chỉ năm mươi tệ."]]
  },
  "12-1": {
    form: [["Đặt ở đâu", "A + 把 + B + V + 在 + nơi chốn"], ["Đưa đến đâu", "A + 把 + B + V + 到 + nơi chốn"], ["Đưa cho ai", "A + 把 + B + V + 给 + người"]],
    notes: ["Nói đặt/để vật ở đâu gần như BẮT BUỘC dùng 把: 把书放在桌子上 (✗ 放书在桌子上).", "Động từ hay gặp: 放, 写, 挂, 送, 交, 寄, 带, 搬."],
    examples: [["请把名字写在这儿。", "Qǐng bǎ míngzi xiě zài zhèr.", "Xin viết tên vào đây."], ["我把行李搬到楼上了。", "Wǒ bǎ xíngli bāndào lóu shang le.", "Tôi đã chuyển hành lý lên lầu."], ["他把礼物送给了妈妈。", "Tā bǎ lǐwù sònggěile māma.", "Anh ấy tặng món quà cho mẹ."]]
  },

  /* ---------- Bài 13 ---------- */
  "13-0": {
    form: [["Cơ bản", "V + 上/下/进/出/回/过/起 + 来/去"], ["Có nơi chốn", "V + 进/回… + nơi chốn + 来/去：走进教室来"], ["Có vật", "V + 出 + vật + 来 / V + 出来 + vật"]],
    notes: ["Nơi chốn chỉ đặt trước 来/去: 跑回家去 (✗ 跑回去家).", "Vật có thể đặt giữa hoặc sau: 拿出一本书来 / 拿出来一本书."],
    examples: [["他从外面跑进来了。", "Tā cóng wàimiàn pǎo jìnlai le.", "Anh ấy từ ngoài chạy vào."], ["我们走过去吧。", "Wǒmen zǒu guòqu ba.", "Chúng ta đi bộ qua đó đi."], ["他拿出一张照片来。", "Tā náchū yì zhāng zhàopiàn lai.", "Anh ấy lấy ra một tấm ảnh."]]
  },
  "13-1": {
    form: [["Đầy đủ", "S + 一边 + V1 + 一边 + V2"], ["Ngắn gọn (khẩu ngữ)", "边 + V1 + 边 + V2"]],
    notes: ["Hai hành động cùng chủ ngữ, xảy ra cùng lúc.", "Không dùng với tính từ: ✗ 一边高一边瘦 (dùng 又…又…)."],
    examples: [["我们边走边聊吧。", "Wǒmen biān zǒu biān liáo ba.", "Mình vừa đi vừa nói chuyện nhé."], ["他一边开车一边听音乐。", "Tā yìbiān kāi chē yìbiān tīng yīnyuè.", "Anh ấy vừa lái xe vừa nghe nhạc."], ["别一边走路一边看手机。", "Bié yìbiān zǒulù yìbiān kàn shǒujī.", "Đừng vừa đi đường vừa xem điện thoại."]]
  },

  /* ---------- Bài 14 ---------- */
  "14-0": {
    form: [["Kết quả", "A + 把 + B + V + 干净/完/好/错…"], ["Hướng", "A + 把 + B + V + 过来/出去/上来…"]],
    notes: ["Không dùng bổ ngữ khả năng trong câu 把: ✗ 把作业写得完.", "Có nơi chốn: 把车开进车库去."],
    examples: [["请把桌子擦干净。", "Qǐng bǎ zhuōzi cā gānjìng.", "Hãy lau sạch cái bàn."], ["他把椅子搬出去了。", "Tā bǎ yǐzi bān chūqu le.", "Anh ấy chuyển cái ghế ra ngoài rồi."], ["你把这句话翻译成中文。", "Nǐ bǎ zhè jù huà fānyì chéng Zhōngwén.", "Bạn dịch câu này sang tiếng Trung."]]
  },
  "14-1": {
    form: [["Ba bước", "先 V1，再 V2，然后 V3"], ["Hai bước", "先 V1，然后 V2"], ["Đã xảy ra", "先 V1 了，又 V2 了，然后 …"]],
    notes: ["Việc đã xảy ra dùng 又 thay 再.", "然后 có thể đứng đầu vế câu; 再 phải đứng ngay trước động từ."],
    examples: [["先往前走，然后往左拐。", "Xiān wǎng qián zǒu, ránhòu wǎng zuǒ guǎi.", "Đi thẳng trước, rồi rẽ trái."], ["你先休息一下，再做作业吧。", "Nǐ xiān xiūxi yíxià, zài zuò zuòyè ba.", "Con nghỉ một chút rồi hãy làm bài tập."], ["我们先去北京，然后去上海。", "Wǒmen xiān qù Běijīng, ránhòu qù Shànghǎi.", "Chúng tôi đi Bắc Kinh trước, sau đó đi Thượng Hải."]]
  },

  /* ---------- Bài 15 ---------- */
  "15-0": {
    form: [["Loại trừ", "除了 A (以外)，S + 都 + V"], ["Bổ sung (cùng chủ ngữ)", "除了 A (以外)，S + 还 + V"], ["Bổ sung (khác chủ ngữ)", "除了 A (以外)，S + 也 + V"]],
    notes: ["都/还/也 đứng sau chủ ngữ: 除了他以外，我们都去了.", "Có thể bỏ 以外."],
    examples: [["除了星期天，他每天都工作。", "Chúle xīngqītiān, tā měitiān dōu gōngzuò.", "Trừ Chủ nhật, ngày nào anh ấy cũng làm việc."], ["除了游泳，我还喜欢跑步。", "Chúle yóuyǒng, wǒ hái xǐhuan pǎobù.", "Ngoài bơi, tôi còn thích chạy bộ."], ["除了我以外，妹妹也会说汉语。", "Chúle wǒ yǐwài, mèimei yě huì shuō Hànyǔ.", "Ngoài tôi ra, em gái cũng biết nói tiếng Trung."]]
  },
  "15-1": {
    form: [["Không có gì", "没 + 什么 + N/Adj：没什么问题、没什么意思"], ["Cái gì đó", "V + 点儿 + 什么：吃点儿什么"], ["Đâu đó / ai đó", "在哪儿见过 / 好像有谁来过"]],
    notes: ["Không lên giọng cuối câu thì không phải câu hỏi.", "Ngữ cảnh quyết định nghĩa: 你想吃点儿什么？ vẫn là câu hỏi nhờ 吗/ngữ điệu."],
    examples: [["我好像在哪儿见过他。", "Wǒ hǎoxiàng zài nǎr jiànguo tā.", "Hình như tôi đã gặp anh ấy ở đâu đó."], ["这个电影没什么意思。", "Zhège diànyǐng méi shénme yìsi.", "Bộ phim này chẳng có gì hay."], ["你想喝点儿什么吗？", "Nǐ xiǎng hē diǎnr shénme ma?", "Bạn có muốn uống chút gì không?"]]
  },
  "15-2": {
    form: [["Tính từ", "Adj + 极了：好极了"], ["Động từ tâm lý", "喜欢/高兴 + 极了"]],
    notes: ["Không thêm 很: ✗ 很好极了.", "Các cách nói mức độ khác: …死了 (khẩu ngữ, hay dùng cho cảm giác khó chịu: 累死了), …得很, 太…了."],
    examples: [["累死了！", "Lèi sǐ le!", "Mệt chết đi được!"], ["这里的风景美极了。", "Zhèlǐ de fēngjǐng měi jí le.", "Phong cảnh ở đây đẹp tuyệt."], ["他高兴得很。", "Tā gāoxìng de hěn.", "Anh ấy vui lắm."]]
  },

  /* ---------- Bài 16 ---------- */
  "16-0": {
    form: [["Cơ bản", "如果 …，(S) + 就 …"], ["Có 的话", "如果 … 的话，(S) + 就 …"], ["Khẩu ngữ", "要是 …，就 …"]],
    notes: ["Chủ ngữ vế sau đứng TRƯỚC 就: 如果下雨，我们就不去 (✗ 就我们不去).", "Có thể bỏ 如果, chỉ giữ 的话: 下雨的话，我们就不去了."],
    examples: [["要是你有时间，就来我家玩儿吧。", "Yàoshi nǐ yǒu shíjiān, jiù lái wǒ jiā wánr ba.", "Nếu bạn rảnh thì đến nhà tôi chơi nhé."], ["你不舒服的话，就早点儿回家。", "Nǐ bù shūfu dehuà, jiù zǎo diǎnr huí jiā.", "Nếu bạn không khỏe thì về nhà sớm đi."], ["如果我是你，我就不去。", "Rúguǒ wǒ shì nǐ, wǒ jiù bú qù.", "Nếu tôi là bạn, tôi sẽ không đi."]]
  },
  "16-1": {
    form: [["Tính từ + 得 + kết quả", "累得不想说话"], ["Động từ + 得 + kết quả", "笑得肚子疼"]],
    notes: ["Sau 得 là kết quả/mức độ do trạng thái đó gây ra.", "Hay gặp: 高兴得…, 累得…, 忙得…, 急得…, 饿得…"],
    examples: [["他忙得没时间吃饭。", "Tā máng de méi shíjiān chī fàn.", "Anh ấy bận đến mức không có thời gian ăn cơm."], ["我们笑得肚子都疼了。", "Wǒmen xiào de dùzi dōu téng le.", "Chúng tôi cười đến đau cả bụng."], ["她急得哭了。", "Tā jí de kū le.", "Cô ấy cuống đến phát khóc."]]
  },
  "16-2": {
    form: [["Định ngữ", "AA + 的 + N：红红的苹果"], ["Vị ngữ", "N + AA + 的：脸红红的"], ["Trạng ngữ", "AA + 地 + V：慢慢地走"]],
    notes: ["Đã lặp thì không thêm 很: ✗ 很大大的.", "Tính từ hai âm tiết lặp AABB: 干干净净, 高高兴兴."],
    examples: [["你慢慢地说。", "Nǐ mànmàn de shuō.", "Bạn nói từ từ thôi."], ["房间干干净净的。", "Fángjiān gāngānjìngjìng de.", "Căn phòng sạch sẽ tinh tươm."], ["她有一双大大的眼睛。", "Tā yǒu yì shuāng dàdà de yǎnjing.", "Cô ấy có đôi mắt to tròn."]]
  },

  /* ---------- Bài 17 ---------- */
  "17-0": {
    form: [["Hai âm tiết", "AB + AB：休息休息、介绍介绍"], ["Một âm tiết", "A + A / A + 一 + A：看看、看一看"], ["Tương đương", "V + 一下：休息一下"]],
    notes: ["Không lặp kiểu AABB với động từ: ✗ 休休息息.", "Đã lặp thì không thêm 一下; không dùng cho hành động đang diễn ra."],
    examples: [["你帮我检查检查吧。", "Nǐ bāng wǒ jiǎnchá jiǎnchá ba.", "Bạn kiểm tra giúp tôi một chút nhé."], ["我们一起讨论讨论。", "Wǒmen yìqǐ tǎolùn tǎolùn.", "Chúng ta cùng bàn bạc một chút."], ["周末我想在家打扫打扫。", "Zhōumò wǒ xiǎng zài jiā dǎsǎo dǎsǎo.", "Cuối tuần tôi muốn ở nhà dọn dẹp một chút."]]
  },
  "17-1": {
    form: [["Ai cũng", "谁 + 都/也 + V"], ["Cái gì cũng", "什么 + (N) + 都 + V"], ["Đâu cũng không", "哪儿 + 都/也 + 不 + V"], ["Thế nào cũng", "怎么 + V + 都 + …"]],
    notes: ["都 dùng cho cả khẳng định và phủ định; 也 chủ yếu trong phủ định."],
    examples: [["这件事谁都不知道。", "Zhè jiàn shì shéi dōu bù zhīdào.", "Chuyện này không ai biết cả."], ["我怎么找都找不到。", "Wǒ zěnme zhǎo dōu zhǎo bu dào.", "Tôi tìm thế nào cũng không thấy."], ["他什么菜都爱吃。", "Tā shénme cài dōu ài chī.", "Món gì anh ấy cũng thích ăn."]]
  },

  /* ---------- Bài 18 ---------- */
  "18-0": {
    form: [["Cơ bản", "只要 …，(S) + 就 …"]],
    notes: ["只要 = điều kiện ĐỦ (chỉ cần A là có B). Khác 只有…才 (Bài 20) = điều kiện DUY NHẤT."],
    examples: [["只要多听多说，你的汉语就会提高。", "Zhǐyào duō tīng duō shuō, nǐ de Hànyǔ jiù huì tígāo.", "Chỉ cần nghe nhiều nói nhiều, tiếng Trung của bạn sẽ tiến bộ."], ["只要不下雨，我们就去。", "Zhǐyào bú xià yǔ, wǒmen jiù qù.", "Chỉ cần không mưa là chúng ta đi."], ["只要你喜欢，就买吧。", "Zhǐyào nǐ xǐhuan, jiù mǎi ba.", "Chỉ cần bạn thích thì mua đi."]]
  },
  "18-1": {
    form: [["Đầu câu", "关于 + N，S + …"], ["Định ngữ", "关于 + N + 的 + N"]],
    notes: ["关于 đứng đầu câu hoặc làm định ngữ; không đặt sau chủ ngữ: ✗ 我关于这个问题….", "对 chỉ đối tượng của thái độ (他对我很好); 关于 chỉ chủ đề."],
    examples: [["关于这件事，我还没想好。", "Guānyú zhè jiàn shì, wǒ hái méi xiǎnghǎo.", "Về chuyện này, tôi vẫn chưa nghĩ kỹ."], ["我看了一个关于熊猫的节目。", "Wǒ kànle yí ge guānyú xióngmāo de jiémù.", "Tôi đã xem một chương trình về gấu trúc."], ["有没有关于越南文化的书？", "Yǒu méiyǒu guānyú Yuènán wénhuà de shū?", "Có sách nào về văn hóa Việt Nam không?"]]
  },

  /* ---------- Bài 19 ---------- */
  "19-0": {
    form: [["出来", "nhận ra, làm ra: 看出来、听出来、想出来"], ["起来", "nhớ ra, bắt đầu: 想起来、笑起来"], ["下去", "tiếp tục: 说下去、坚持下去"], ["上", "đạt được, khép lại: 考上、关上"]],
    notes: ["Có dạng bổ ngữ khả năng: 看得出来 / 看不出来, 想不起来.", "想起来 (nhớ ra cái đã biết) khác 想出来 (nghĩ ra cái mới)."],
    examples: [["我想不起来他的名字了。", "Wǒ xiǎng bu qǐlai tā de míngzi le.", "Tôi không nhớ ra tên anh ấy."], ["你说下去，我在听。", "Nǐ shuō xiàqu, wǒ zài tīng.", "Bạn nói tiếp đi, tôi đang nghe."], ["她考上了大学。", "Tā kǎoshangle dàxué.", "Cô ấy đã thi đỗ đại học."]]
  },
  "19-1": {
    form: [["Bảo / để", "A + 让/叫 + B + V"], ["Khiến", "A + 使/让 + B + Adj / động từ tâm lý"], ["Phủ định", "A + 不让/没让 + B + V"]],
    notes: ["让 còn nghĩa \"cho phép\": 妈妈不让我玩手机.", "使 thường gặp trong văn viết; nói chuyện dùng 让 tự nhiên hơn: 这件事让我很高兴."],
    examples: [["妈妈不让我晚上出去。", "Māma bú ràng wǒ wǎnshang chūqu.", "Mẹ không cho tôi ra ngoài buổi tối."], ["这个消息让大家很吃惊。", "Zhège xiāoxi ràng dàjiā hěn chījīng.", "Tin này khiến mọi người rất ngạc nhiên."], ["医生叫他多休息。", "Yīshēng jiào tā duō xiūxi.", "Bác sĩ bảo anh ấy nghỉ ngơi nhiều."]]
  },

  /* ---------- Bài 20 ---------- */
  "20-0": {
    form: [["Có người làm", "B + 被 + A + V + 了/bổ ngữ"], ["Không nói ai làm", "B + 被 + V + 了"], ["Phủ định", "B + 没 + 被 + A + V"]],
    notes: ["Động từ phải có thành phần khác: ✗ 手机被他拿.", "Khẩu ngữ hay dùng 叫/让 thay 被, nhưng khi đó PHẢI nói rõ ai làm: 我的车让人借走了.", "Phủ định: 没 đặt trước 被."],
    examples: [["我的钱包被偷了。", "Wǒ de qiánbāo bèi tōu le.", "Ví của tôi bị trộm mất rồi."], ["那本书被借走了。", "Nà běn shū bèi jièzǒu le.", "Cuốn sách đó đã bị mượn đi rồi."], ["他没被老师批评。", "Tā méi bèi lǎoshī pīpíng.", "Cậu ấy không bị thầy phê bình."]]
  },
  "20-1": {
    form: [["Cơ bản", "只有 A，(S) + 才 + B"], ["Với danh từ", "只有 + N + 才 + V：只有你才能帮我"]],
    notes: ["只要…就: đủ điều kiện (dễ). 只有…才: điều kiện duy nhất (khó, bắt buộc)."],
    examples: [["只有周末我才有时间。", "Zhǐyǒu zhōumò wǒ cái yǒu shíjiān.", "Chỉ cuối tuần tôi mới có thời gian."], ["只有你才知道答案。", "Zhǐyǒu nǐ cái zhīdào dá'àn.", "Chỉ có bạn mới biết đáp án."], ["只有按时吃药，病才能好。", "Zhǐyǒu ànshí chī yào, bìng cái néng hǎo.", "Chỉ có uống thuốc đúng giờ, bệnh mới khỏi được."]]
  },

  /* ================= MỞ RỘNG NGOÀI SÁCH ================= */
  extra: {
    1: [
      {
        name: "打算, 想 và 要", pattern: "想 + V (muốn) ; 打算 + V (dự định) ; 要 + V (sẽ, phải)",
        explain: "想: mong muốn. 打算: đã có kế hoạch. 要: chắc chắn sẽ làm hoặc cần phải làm. 打算 còn là danh từ: 你有什么打算？",
        form: [["Phủ định", "不想 (không muốn) / 不打算 (không định)"], ["Chú ý", "不要 + V = ĐỪNG…!"]],
        notes: ["Muốn nói \"không muốn\" dùng 不想, không dùng 不要 (不要 = đừng)."],
        examples: [["我想去中国，但是还没有打算。", "Wǒ xiǎng qù Zhōngguó, dànshì hái méiyǒu dǎsuan.", "Tôi muốn đi Trung Quốc nhưng chưa có kế hoạch."], ["我打算明年去中国留学。", "Wǒ dǎsuan míngnián qù Zhōngguó liúxué.", "Tôi dự định sang năm đi Trung Quốc du học."], ["明天我要早起。", "Míngtiān wǒ yào zǎo qǐ.", "Mai tôi phải dậy sớm."]],
        tasks: [{ vi: "Nói kế hoạch kỳ nghỉ sắp tới của bạn (dùng 打算).", re: "打算", sample: "这个假期我打算带孩子去海边。" }]
      },
      {
        name: "跟……一起", pattern: "S + 跟 + người + 一起 + V",
        explain: "Cùng với ai làm gì. Phủ định đặt trước 跟: 我不跟他一起去.",
        form: [["Câu hỏi", "你跟谁一起 + V？"]],
        notes: ["Có thể thay 跟 bằng 和."],
        examples: [["我跟妈妈一起做饭。", "Wǒ gēn māma yìqǐ zuò fàn.", "Tôi cùng mẹ nấu cơm."], ["你跟谁一起去？", "Nǐ gēn shéi yìqǐ qù?", "Bạn đi cùng ai?"]],
        tasks: [{ vi: "Nói bạn thường đi siêu thị cùng ai.", re: "(跟|和).+一起", sample: "我常常跟老公一起去超市。" }]
      }
    ],
    2: [
      {
        name: "有点儿 và 一点儿", pattern: "有点儿 + Adj (hơi…, không hài lòng) ; Adj + 一点儿 (…hơn một chút)",
        explain: "有点儿 đứng TRƯỚC tính từ, thường cho điều không mong muốn: 有点儿贵. 一点儿 đứng SAU tính từ để so sánh hoặc đề nghị: 便宜一点儿吧. 一点儿 + N = một chút gì đó: 喝一点儿水.",
        form: [["Than phiền", "有点儿 + Adj：有点儿累"], ["Đề nghị", "Adj + 一点儿：快一点儿"]],
        notes: ["Không nói ✗ 一点儿贵.", "Khi mặc cả nói 便宜一点儿, không nói ✗ 有点儿便宜."],
        examples: [["这件衣服有点儿贵。", "Zhè jiàn yīfu yǒudiǎnr guì.", "Bộ đồ này hơi đắt."], ["能便宜一点儿吗？", "Néng piányi yìdiǎnr ma?", "Rẻ hơn chút được không?"], ["请说慢一点儿。", "Qǐng shuō màn yìdiǎnr.", "Xin nói chậm hơn một chút."]],
        tasks: [{ vi: "Mặc cả: \"Cái này hơi đắt, rẻ hơn chút được không?\"", re: "^(?=.*有点儿)(?=.*一点儿)", sample: "这个有点儿贵，能便宜一点儿吗？" }]
      },
      {
        name: "其实 (thật ra)", pattern: "(Điều người ta nghĩ)，其实 + (sự thật)",
        explain: "Dùng khi nói ra sự thật khác với điều người khác nghĩ hoặc với vẻ bề ngoài.",
        form: [["Vị trí", "Đầu vế câu hoặc sau chủ ngữ: 其实我… / 我其实…"]],
        notes: ["Gần nghĩa: 实际上 (trang trọng hơn)."],
        examples: [["他看起来很年轻，其实已经五十岁了。", "Tā kàn qǐlai hěn niánqīng, qíshí yǐjīng wǔshí suì le.", "Trông anh ấy rất trẻ, thật ra đã năm mươi tuổi rồi."], ["大家都觉得汉语很难，其实不太难。", "Dàjiā dōu juéde Hànyǔ hěn nán, qíshí bú tài nán.", "Ai cũng nghĩ tiếng Trung rất khó, thật ra không khó lắm."]],
        tasks: [{ vi: "Nói: mọi người nghĩ bạn là người Hà Nội, thật ra bạn là người Huế (顺化 Shùnhuà).", re: "其实", sample: "大家都以为我是河内人，其实我是顺化人。" }]
      }
    ],
    3: [
      {
        name: "着 và 正在 (đang)", pattern: "正在/在 + V (đang làm — hành động) ; V + 着 (đang ở trạng thái)",
        explain: "在/正在 nhấn mạnh hành động đang diễn ra; 着 nhấn mạnh trạng thái kéo dài. 门开着 (cửa đang mở — trạng thái) khác 他在开门 (anh ấy đang mở cửa — hành động).",
        form: [["Kết hợp", "正在 + V + 着 + O + 呢：他正在打着电话呢"]],
        notes: ["Phủ định của 在 + V là 没(在) + V: 我没在看电视."],
        examples: [["门开着。", "Mén kāizhe.", "Cửa đang mở."], ["他在开门。", "Tā zài kāi mén.", "Anh ấy đang mở cửa."], ["我正在吃饭，等一会儿再说。", "Wǒ zhèngzài chī fàn, děng yíhuìr zài shuō.", "Tôi đang ăn cơm, lát nữa nói nhé."]],
        tasks: [{ vi: "Nói bạn đang nấu cơm (hành động đang diễn ra).", re: "正在|在(做|吃|看|学|听|写|洗|打|开|上)", sample: "我正在做饭。" }]
      },
      {
        name: "Lượng từ thường gặp", pattern: "Số + lượng từ + N",
        explain: "条: vật dài (quần, váy, đường, cá). 只: con vật nhỏ, một chiếc trong đôi. 件: áo, việc. 双: đôi. 张: vật phẳng (giấy, bàn, ảnh, giường). 把: vật có tay cầm (ô, ghế, dao). 辆: xe. 本: sách.",
        form: [["Ví dụ", "一条鱼、一只鸟、一件事、一张床、一把椅子"]],
        notes: ["Không biết dùng lượng từ nào thì tạm dùng 个, nhưng nên học lượng từ đúng."],
        examples: [["我家有两只狗和一条鱼。", "Wǒ jiā yǒu liǎng zhī gǒu hé yì tiáo yú.", "Nhà tôi có hai con chó và một con cá."], ["桌子上有三张照片。", "Zhuōzi shang yǒu sān zhāng zhàopiàn.", "Trên bàn có ba tấm ảnh."], ["我想买一件衬衫和一条裤子。", "Wǒ xiǎng mǎi yí jiàn chènshān hé yì tiáo kùzi.", "Tôi muốn mua một chiếc sơ mi và một chiếc quần."]],
        tasks: [{ vi: "Tả những đồ vật trong phòng bạn, dùng đúng lượng từ (张, 把, 本…).", re: "(张|把|本|件|条|只|双|辆)", sample: "我的房间里有一张床、一把椅子和很多本书。" }]
      }
    ],
    4: [
      {
        name: "总是 và 一直", pattern: "总是 + V (lần nào cũng, thói quen) ; 一直 + V (liên tục, không ngừng)",
        explain: "总是: lặp đi lặp lại nhiều lần. 一直: kéo dài liên tục một khoảng thời gian. 一直 còn nghĩa \"thẳng\": 一直走.",
        form: [["Ví dụ", "他总是迟到 (lần nào cũng muộn) / 雨一直下 (mưa suốt)"]],
        notes: ["Phủ định: 总是不… / 一直没…"],
        examples: [["他总是迟到。", "Tā zǒngshì chídào.", "Anh ấy lúc nào cũng đến muộn."], ["雨一直下了三天。", "Yǔ yìzhí xiàle sān tiān.", "Mưa liên tục suốt ba ngày."]],
        tasks: [{ vi: "Nói về một thói quen của người thân (dùng 总是).", re: "总是", sample: "我老公总是很晚才回家。" }]
      },
      {
        name: "好/难 + động từ", pattern: "好 + 吃/看/听/喝/玩儿 ; 难 + 吃/看/听",
        explain: "好 + động từ giác quan = ngon, đẹp, hay…; 难 + động từ = dở, xấu, khó nghe…",
        form: [["Ví dụ", "好吃 ↔ 难吃、好看 ↔ 难看、好听 ↔ 难听"]],
        notes: ["好 + 动词 còn nghĩa \"dễ\": 这个字很好写 (dễ viết)."],
        examples: [["这首歌很好听。", "Zhè shǒu gē hěn hǎotīng.", "Bài hát này rất hay."], ["这个菜真难吃。", "Zhège cài zhēn nánchī.", "Món này dở thật."]],
        tasks: [{ vi: "Nhận xét một món ăn hoặc một bài hát (dùng 好/难 + động từ).", re: "(好|难)(吃|看|听|喝|玩)", sample: "这家饭馆的菜很好吃。" }]
      }
    ],
    5: [
      {
        name: "为 và 给", pattern: "给 + người + V (cho ai, khẩu ngữ) ; 为 + người + V/Adj (vì/cho ai, trang trọng)",
        explain: "Cả hai đều \"cho ai\". 给 dùng nhiều khi nói chuyện và còn nghĩa \"đưa\" (给你). 为 trang trọng hơn và còn nghĩa \"vì\": 为你高兴 (vui cho bạn).",
        form: [["Ví dụ", "给我打电话 / 为大家唱一首歌 / 为你高兴"]],
        notes: ["\"Vui cho ai\" dùng 为: 我为你高兴, không dùng 给."],
        examples: [["妈妈给我做了蛋糕。", "Māma gěi wǒ zuòle dàngāo.", "Mẹ làm bánh cho tôi."], ["我为你高兴！", "Wǒ wèi nǐ gāoxìng!", "Tôi mừng cho bạn!"]],
        tasks: [{ vi: "Nói bạn rất vui cho thành công của bạn mình.", re: "为.+高兴", sample: "你考得这么好，我真为你高兴！" }]
      },
      {
        name: "Hai chữ 了", pattern: "V + 了 + O (đã xong) ; … + 了 (thay đổi) ; V + 了 + thời gian + 了 (vẫn tiếp tục)",
        explain: "了 sau động từ: việc đã xảy ra xong (我买了一本书). 了 cuối câu: tình huống mới (我有车了). Dùng cả hai: việc đã kéo dài và vẫn đang tiếp tục (我学了两年汉语了).",
        form: [["Phủ định", "没 + V (bỏ 了)：我没买"]],
        notes: ["Phủ định việc đã xảy ra dùng 没 và BỎ 了: ✗ 我没买了 (trừ nghĩa \"không mua nữa\")."],
        examples: [["我买了一本书。", "Wǒ mǎile yì běn shū.", "Tôi đã mua một cuốn sách."], ["我有男朋友了。", "Wǒ yǒu nán péngyou le.", "Tôi có bạn trai rồi."], ["我学了两年汉语了。", "Wǒ xuéle liǎng nián Hànyǔ le.", "Tôi học tiếng Trung được hai năm rồi (vẫn đang học)."]],
        tasks: [{ vi: "Nói bạn đã học tiếng Trung bao lâu và vẫn đang học (dùng hai chữ 了).", re: "了.+了", sample: "我学了半年汉语了。" }]
      }
    ],
    6: [
      {
        name: "更, 还 và 比较", pattern: "更/还 + Adj (càng, còn… hơn — so sánh) ; 比较 + Adj (khá)",
        explain: "更 và 还 dùng khi so sánh \"hơn nữa\": 今天比昨天更冷 / 还冷. 比较 không so sánh với cái gì, chỉ mức độ \"khá, tương đối\".",
        form: [["Ví dụ", "这个更好 / 他比我还高 / 今天比较忙"]],
        notes: ["还 trong so sánh mang giọng ngạc nhiên hơn 更."],
        examples: [["我觉得这个更好。", "Wǒ juéde zhège gèng hǎo.", "Tôi thấy cái này tốt hơn."], ["今天比昨天还热。", "Jīntiān bǐ zuótiān hái rè.", "Hôm nay còn nóng hơn hôm qua."], ["他的汉语比较好。", "Tā de Hànyǔ bǐjiào hǎo.", "Tiếng Trung của anh ấy khá tốt."]],
        tasks: [{ vi: "So sánh: cà phê ở đây ngon, cà phê ở kia còn ngon hơn.", re: "(更|还)", sample: "这里的咖啡很好喝，那里的更好喝。" }]
      },
      {
        name: "V + 得了 / 不了 (liǎo)", pattern: "V + 得了 (làm nổi) ; V + 不了 (không làm nổi)",
        explain: "了 đọc liǎo. 吃不了 (ăn không nổi), 去不了 (không đi được), 受不了 (chịu không nổi).",
        form: [["Câu hỏi", "V + 得了 + 吗？/ V得了V不了？"]],
        notes: ["Khác 吃不完 (không ăn HẾT): 吃不了 nhấn mạnh không có khả năng."],
        examples: [["明天我有事，去不了。", "Míngtiān wǒ yǒu shì, qù bu liǎo.", "Mai tôi có việc, không đi được."], ["太热了，我受不了了。", "Tài rè le, wǒ shòu bu liǎo le.", "Nóng quá, tôi chịu không nổi nữa."]],
        tasks: [{ vi: "Nói mai bạn bận, không đến được.", re: "不了", sample: "明天我要加班，去不了。" }]
      }
    ],
    7: [
      {
        name: "……的时候 / 以前 / 以后", pattern: "V/N + 的时候 (khi) ; V + 以前 (trước khi) ; V + 以后 (sau khi)",
        explain: "Các từ chỉ thời điểm đứng SAU động từ/cụm từ (ngược với tiếng Việt).",
        form: [["Ví dụ", "吃饭的时候 / 睡觉以前 / 下班以后"]],
        notes: ["Không nói ✗ 以前睡觉 khi muốn nói \"trước khi ngủ\"."],
        examples: [["吃饭的时候别看手机。", "Chī fàn de shíhou bié kàn shǒujī.", "Khi ăn cơm đừng xem điện thoại."], ["睡觉以前要刷牙。", "Shuìjiào yǐqián yào shuāyá.", "Trước khi ngủ phải đánh răng."], ["下班以后我去接你。", "Xiàbān yǐhòu wǒ qù jiē nǐ.", "Tan làm tôi đến đón bạn."]],
        tasks: [{ vi: "Nói việc bạn làm trước khi đi ngủ.", re: "以前|以后|的时候", sample: "睡觉以前我看一会儿书。" }]
      },
      {
        name: "Hỏi khoảng thời gian: 多长时间 / 多久", pattern: "V + (了) + 多长时间 (+ 了)？",
        explain: "Hỏi một việc kéo dài bao lâu.",
        form: [["Ví dụ", "你学汉语学了多长时间了？/ 要多久？"]],
        notes: ["Trả lời theo cấu trúc thời lượng của Bài 7."],
        examples: [["你学汉语学了多长时间了？", "Nǐ xué Hànyǔ xuéle duō cháng shíjiān le?", "Bạn học tiếng Trung bao lâu rồi?"], ["从你家到公司要多久？", "Cóng nǐ jiā dào gōngsī yào duōjiǔ?", "Từ nhà bạn đến công ty mất bao lâu?"]],
        tasks: [{ vi: "Hỏi bạn mình đã sống ở Hà Nội bao lâu rồi.", re: "多长时间|多久", sample: "你在河内住了多长时间了？" }]
      }
    ],
    8: [
      {
        name: "一会儿 và 马上", pattern: "V + 一会儿 (một lát) ; 一会儿 + V (lát nữa) ; 马上 + V (ngay)",
        explain: "一会儿 sau động từ = làm trong một lát (等一会儿); đứng trước = lát nữa (一会儿见). 马上 = ngay lập tức, đứng trước động từ.",
        form: [["Kết hợp", "马上就 + V + 了：马上就到了"]],
        notes: ["马上 thường đi với 就: 我马上就来."],
        examples: [["我们休息一会儿吧。", "Wǒmen xiūxi yíhuìr ba.", "Chúng ta nghỉ một lát đi."], ["一会儿见！", "Yíhuìr jiàn!", "Lát nữa gặp nhé!"], ["电影马上就要开始了。", "Diànyǐng mǎshàng jiù yào kāishǐ le.", "Phim sắp bắt đầu ngay rồi."]],
        tasks: [{ vi: "Nói với đồng nghiệp: \"Đợi tôi một lát, tôi đến ngay.\"", re: "^(?=.*一会儿)(?=.*马上)", sample: "等我一会儿，我马上来。" }]
      },
      {
        name: "快要/就要……了 (sắp… rồi)", pattern: "快(要) + V/Adj + 了 ; (thời gian) + 就要 + V + 了",
        explain: "Diễn tả việc sắp xảy ra. 就要 đi được với thời gian cụ thể (明天就要考试了), 快要 thì không.",
        form: [["Ví dụ", "快下雨了 / 春节快到了 / 明天就要走了"]],
        notes: ["✗ 明天快要考试了 → nói 明天就要考试了."],
        examples: [["快要下雨了。", "Kuài yào xià yǔ le.", "Sắp mưa rồi."], ["春节快到了。", "Chūnjié kuài dào le.", "Tết sắp đến rồi."], ["明天就要考试了。", "Míngtiān jiù yào kǎoshì le.", "Mai là thi rồi."]],
        tasks: [{ vi: "Nói Tết sắp đến rồi.", re: "(快|就)要?.+了", sample: "春节快要到了。" }]
      }
    ],
    9: [
      {
        name: "A 没有 B (那么) + Adj", pattern: "A + 没有 + B + (那么/这么) + Adj",
        explain: "A không bằng B. Là cách phủ định tự nhiên của câu so sánh 比.",
        form: [["Ví dụ", "我没有你那么高 / 今天没有昨天热"]],
        notes: ["Không nói ✗ 我不比你高 khi muốn nói \"tôi không cao bằng bạn\"."],
        examples: [["我没有你那么高。", "Wǒ méiyǒu nǐ nàme gāo.", "Tôi không cao bằng bạn."], ["今天没有昨天热。", "Jīntiān méiyǒu zuótiān rè.", "Hôm nay không nóng bằng hôm qua."]],
        tasks: [{ vi: "Nói tiếng Trung của bạn chưa giỏi bằng cô giáo.", re: "没有.+(那么|这么)?", sample: "我的汉语没有老师那么好。" }]
      },
      {
        name: "先……再……", pattern: "先 + V1，再 + V2",
        explain: "Trước tiên làm V1, rồi mới làm V2 (dùng cho kế hoạch, lời khuyên).",
        form: [["Ví dụ", "先吃饭，再看电影"]],
        notes: ["Việc đã xảy ra thì dùng 先…然后… hoặc 先…又…"],
        examples: [["我们先吃饭，再去看电影。", "Wǒmen xiān chī fàn, zài qù kàn diànyǐng.", "Chúng ta ăn cơm trước rồi đi xem phim."], ["你先想好，再回答。", "Nǐ xiān xiǎnghǎo, zài huídá.", "Bạn nghĩ kỹ trước rồi hãy trả lời."]],
        tasks: [{ vi: "Nói kế hoạch tối nay: trước làm…, rồi làm…", re: "先.+再", sample: "今天晚上我先做饭，再陪孩子学习。" }]
      }
    ],
    10: [
      {
        name: "比 + 更/还", pattern: "A + 比 + B + 更/还 + Adj",
        explain: "Nhấn mạnh A còn hơn B (B vốn đã khá rồi).",
        form: [["Ví dụ", "他比我还忙 / 这个比那个更好看"]],
        notes: ["Không dùng 很/非常 thay cho 更/还."],
        examples: [["他比我还忙。", "Tā bǐ wǒ hái máng.", "Anh ấy còn bận hơn tôi."], ["这个比那个更好看。", "Zhège bǐ nàge gèng hǎokàn.", "Cái này đẹp hơn cái kia."]],
        tasks: [{ vi: "Nói hôm nay còn nóng hơn hôm qua.", re: "比.+(更|还)", sample: "今天比昨天还热。" }]
      },
      {
        name: "Hỏi so sánh", pattern: "A 和 B，哪个 + (更) + Adj？ ; A + Adj + 还是 + B + Adj？",
        explain: "Cách hỏi cái nào hơn.",
        form: [["Ví dụ", "这两件衣服，哪件好看？/ 坐地铁快还是坐公共汽车快？"]],
        notes: ["Trả lời bằng câu 比."],
        examples: [["这两件衣服，哪件好看？", "Zhè liǎng jiàn yīfu, nǎ jiàn hǎokàn?", "Hai bộ đồ này, bộ nào đẹp hơn?"], ["坐地铁快还是坐公共汽车快？", "Zuò dìtiě kuài háishi zuò gōnggòng qìchē kuài?", "Đi tàu điện ngầm nhanh hay đi xe buýt nhanh?"]],
        tasks: [{ vi: "Hỏi bạn: Hà Nội và TP. Hồ Chí Minh, nơi nào nóng hơn?", re: "哪(个|儿|里)|还是", sample: "河内和胡志明市，哪个更热？" }]
      }
    ],
    11: [
      {
        name: "还 huán và 还 hái", pattern: "还 huán = trả lại ; 还 hái = còn, vẫn",
        explain: "Cùng một chữ, hai cách đọc và hai nghĩa. Nghe ngữ cảnh: đứng trước động từ thường là hái; làm động từ chính với tân ngữ là huán.",
        form: [["Ví dụ", "还 (huán) 书 / 还 (hái) 没来"]],
        notes: ["Câu 我还没还书 đọc: Wǒ hái méi huán shū."],
        examples: [["我明天还你钱。", "Wǒ míngtiān huán nǐ qián.", "Mai tôi trả tiền bạn."], ["他还没回来。", "Tā hái méi huílai.", "Anh ấy vẫn chưa về."]],
        tasks: [{ vi: "Nói bạn vẫn chưa trả sách cho thư viện.", re: "还.*还", sample: "我还没还图书馆的书。" }]
      },
      {
        name: "Câu khuyên ngăn: 别…(了) / 不要…", pattern: "别 + V (đừng) ; 别 + V + 了 (đừng… nữa) ; 不要 + V",
        explain: "别 và 不要 đều là \"đừng\". Thêm 了 cuối câu khi muốn người kia dừng việc đang làm.",
        form: [["Ví dụ", "别忘了 / 别说了 / 不要抽烟"]],
        notes: ["别忘了 = đừng quên (nhắc nhở), rất hay dùng."],
        examples: [["别忘了带钥匙。", "Bié wàngle dài yàoshi.", "Đừng quên mang chìa khóa."], ["别说了！", "Bié shuō le!", "Đừng nói nữa!"], ["不要在这儿抽烟。", "Búyào zài zhèr chōuyān.", "Đừng hút thuốc ở đây."]],
        tasks: [{ vi: "Nhắc con: \"Đừng chơi điện thoại nữa!\"", re: "别.+了|不要", sample: "别玩手机了！" }]
      }
    ],
    12: [
      {
        name: "需要, 要 và 得 (děi)", pattern: "需要 + N/V (cần) ; 要 + V (phải, sẽ) ; 得 děi + V (phải, khẩu ngữ)",
        explain: "需要 nhấn mạnh nhu cầu; 要 và 得 nhấn mạnh nghĩa vụ phải làm.",
        form: [["Phủ định", "不需要 / 不用 (không cần) — không nói ✗ 不得"]],
        notes: ["得 trong nghĩa \"phải\" đọc là děi, khác 得 de trong bổ ngữ."],
        examples: [["你需要什么？", "Nǐ xūyào shénme?", "Bạn cần gì?"], ["我得走了。", "Wǒ děi zǒu le.", "Tôi phải đi rồi."], ["明天不用来了。", "Míngtiān búyòng lái le.", "Mai không cần đến nữa."]],
        tasks: [{ vi: "Nói bạn phải về nhà nấu cơm rồi.", re: "得|要|需要", sample: "我得回家做饭了。" }]
      },
      {
        name: "自己 (tự mình, của riêng mình)", pattern: "S + 自己 + V ; S + 自己的 + N",
        explain: "自己 đứng sau chủ ngữ để nhấn mạnh tự làm lấy, hoặc 自己的 = của riêng mình.",
        form: [["Ví dụ", "我自己去 / 这是我自己的房间"]],
        notes: ["自己 cũng dùng làm tân ngữ: 照顾好自己 (chăm sóc tốt bản thân)."],
        examples: [["孩子会自己穿衣服了。", "Háizi huì zìjǐ chuān yīfu le.", "Bé biết tự mặc quần áo rồi."], ["这是我自己做的蛋糕。", "Zhè shì wǒ zìjǐ zuò de dàngāo.", "Đây là bánh tôi tự làm."]],
        tasks: [{ vi: "Nói món này là bạn tự làm.", re: "自己", sample: "这个菜是我自己做的。" }]
      }
    ],
    13: [
      {
        name: "Nghĩa mở rộng của 起来", pattern: "V + 起来 (bắt đầu) ; 看/听/吃 + 起来 (trông/nghe/ăn có vẻ)",
        explain: "起来 không chỉ là \"đứng dậy\": 哭起来 (bật khóc), 看起来很好吃 (trông có vẻ ngon), 听起来不错 (nghe có vẻ hay).",
        form: [["Ví dụ", "笑起来 / 看起来 / 听起来"]],
        notes: ["看起来 dùng để nhận xét vẻ ngoài, rất hay gặp trong giao tiếp."],
        examples: [["孩子突然哭起来了。", "Háizi tūrán kū qǐlai le.", "Đứa bé bỗng òa khóc."], ["这个菜看起来很好吃。", "Zhège cài kàn qǐlai hěn hǎochī.", "Món này trông có vẻ rất ngon."], ["你的主意听起来不错。", "Nǐ de zhǔyi tīng qǐlai búcuò.", "Ý kiến của bạn nghe có vẻ hay."]],
        tasks: [{ vi: "Nhận xét: món này trông có vẻ ngon.", re: "(看|听|吃|用)起来", sample: "这个蛋糕看起来很好吃。" }]
      },
      {
        name: "应该 / 不应该 (nên / không nên)", pattern: "S + (不)应该 + V",
        explain: "Đưa ra lời khuyên hoặc nói điều hợp lý cần làm.",
        form: [["Câu hỏi", "我应该怎么办？(Tôi nên làm thế nào?)"]],
        notes: ["Khẩu ngữ có thể dùng 该: 该睡觉了 (đến giờ ngủ rồi)."],
        examples: [["你应该早点儿睡觉。", "Nǐ yīnggāi zǎo diǎnr shuìjiào.", "Bạn nên ngủ sớm hơn."], ["你不应该这么说。", "Nǐ bù yīnggāi zhème shuō.", "Bạn không nên nói như vậy."]],
        tasks: [{ vi: "Khuyên bạn mình nên nghỉ ngơi nhiều hơn.", re: "应该", sample: "你应该多休息。" }]
      }
    ],
    14: [
      {
        name: "像……一样", pattern: "A + 像 + B + 一样 (+ Adj/V)",
        explain: "A giống như B. Dùng để so sánh hình ảnh, miêu tả sinh động.",
        form: [["Ví dụ", "她像妈妈一样漂亮 / 热得像夏天一样"]],
        notes: ["跟…一样 (Bài 9) so sánh ngang bằng; 像…一样 thiên về so sánh ví von."],
        examples: [["她像妈妈一样漂亮。", "Tā xiàng māma yíyàng piàoliang.", "Cô ấy xinh đẹp như mẹ."], ["今天热得像夏天一样。", "Jīntiān rè de xiàng xiàtiān yíyàng.", "Hôm nay nóng như mùa hè."]],
        tasks: [{ vi: "Nói con bạn giống bố hoặc mẹ.", re: "像", sample: "我女儿像她爸爸一样聪明。" }]
      },
      {
        name: "Kể chuyện: 有一天, 后来, 最后", pattern: "有一天，… 后来，… 最后，…",
        explain: "Các từ nối để kể một câu chuyện theo trình tự: một hôm… sau đó… cuối cùng…",
        form: [["Ví dụ", "有一天我遇到了他，后来我们常常见面，最后我们结婚了。"]],
        notes: ["后来 chỉ dùng cho quá khứ; tương lai dùng 以后."],
        examples: [["有一天，我在路上遇到了老同学。", "Yǒu yì tiān, wǒ zài lù shang yùdàole lǎo tóngxué.", "Một hôm, tôi gặp bạn học cũ trên đường."], ["后来我们常常见面。", "Hòulái wǒmen chángcháng jiànmiàn.", "Sau đó chúng tôi thường xuyên gặp nhau."], ["最后我们成了好朋友。", "Zuìhòu wǒmen chéngle hǎo péngyou.", "Cuối cùng chúng tôi trở thành bạn thân."]],
        tasks: [{ vi: "Kể ngắn một chuyện (dùng 有一天 hoặc 后来).", re: "有一天|后来|最后", sample: "有一天我在超市遇到了我的老师。" }]
      }
    ],
    15: [
      {
        name: "其他 và 别的", pattern: "其他 + N / 别的 + N (… khác)",
        explain: "Đều là \"khác\". 别的 khẩu ngữ hơn, hay dùng trong câu hỏi: 还有别的吗？",
        form: [["Ví dụ", "别的颜色 / 其他同学"]],
        notes: ["Có thể đứng một mình: 其他的 / 别的 (những cái khác)."],
        examples: [["还有别的问题吗？", "Hái yǒu biéde wèntí ma?", "Còn câu hỏi nào khác không?"], ["其他同学都回家了。", "Qítā tóngxué dōu huí jiā le.", "Các bạn khác đều về nhà rồi."]],
        tasks: [{ vi: "Hỏi người bán: còn màu khác không?", re: "别的|其他", sample: "还有别的颜色吗？" }]
      },
      {
        name: "Các cách nói mức độ", pattern: "太…了 / 非常… / 特别… / …死了 / …得很",
        explain: "太…了 (quá…), 非常/特别 (rất, đặc biệt), …死了 (…chết đi được, khẩu ngữ), …得很 (rất).",
        form: [["Ví dụ", "太好了 / 特别累 / 饿死了 / 好得很"]],
        notes: ["…死了 thường dùng cho cảm giác khó chịu (累、饿、热), nhưng cũng nói 高兴死了."],
        examples: [["太好了！", "Tài hǎo le!", "Tốt quá!"], ["今天特别累。", "Jīntiān tèbié lèi.", "Hôm nay đặc biệt mệt."], ["饿死了！", "È sǐ le!", "Đói chết đi được!"]],
        tasks: [{ vi: "Nói hôm nay bạn mệt chết đi được.", re: "死了|极了|太.+了|特别|非常", sample: "今天累死了！" }]
      }
    ],
    16: [
      {
        name: "认为 và 觉得", pattern: "S + 认为/觉得 + (ý kiến)",
        explain: "Đều là \"cho rằng, thấy\". 觉得 khẩu ngữ và còn nghĩa \"cảm thấy\" (觉得冷). 认为 trang trọng hơn, chỉ dùng cho ý kiến, nhận định.",
        form: [["Ví dụ", "我觉得有点儿冷 / 我认为这个办法很好"]],
        notes: ["Không nói ✗ 我认为很冷 khi nói cảm giác của cơ thể."],
        examples: [["我觉得有点儿冷。", "Wǒ juéde yǒudiǎnr lěng.", "Tôi thấy hơi lạnh."], ["我认为这个办法很好。", "Wǒ rènwéi zhège bànfǎ hěn hǎo.", "Tôi cho rằng cách này rất hay."]],
        tasks: [{ vi: "Nêu ý kiến của bạn về việc học tiếng Trung (dùng 认为).", re: "认为|觉得", sample: "我认为学汉语很有意思。" }]
      },
      {
        name: "Hỏi mức độ: 多 + Adj", pattern: "多 + 高/重/大/远/长？",
        explain: "Hỏi bao nhiêu: 多高 (cao bao nhiêu), 多重 (nặng bao nhiêu), 多大 (bao nhiêu tuổi/to cỡ nào), 多远 (bao xa).",
        form: [["Ví dụ", "你多高？/ 孩子多大了？/ 你家离公司多远？"]],
        notes: ["Hỏi tuổi người lớn lịch sự: 您多大年纪了？"],
        examples: [["你家离公司多远？", "Nǐ jiā lí gōngsī duō yuǎn?", "Nhà bạn cách công ty bao xa?"], ["孩子多大了？", "Háizi duō dà le?", "Con bạn mấy tuổi rồi?"]],
        tasks: [{ vi: "Hỏi nhà bạn mình cách công ty bao xa.", re: "多(远|高|重|大|长|久)", sample: "你家离公司多远？" }]
      }
    ],
    17: [
      {
        name: "为了 và 因为", pattern: "为了 + mục đích (để…) ; 因为 + nguyên nhân (vì…)",
        explain: "为了 nói mục đích hướng tới; 因为 nói nguyên nhân đã có.",
        form: [["Ví dụ", "为了健康，我每天跑步 / 因为下雨，比赛取消了"]],
        notes: ["因为…所以… đi thành cặp; 为了 thường đứng đầu câu."],
        examples: [["为了健康，我每天跑步。", "Wèile jiànkāng, wǒ měitiān pǎobù.", "Vì sức khỏe, ngày nào tôi cũng chạy bộ."], ["因为下雨，比赛取消了。", "Yīnwèi xià yǔ, bǐsài qǔxiāo le.", "Vì trời mưa, trận đấu bị hủy."]],
        tasks: [{ vi: "Nói bạn học tiếng Trung để làm gì (dùng 为了).", re: "为了", sample: "为了以后去中国工作，我学汉语。" }]
      },
      {
        name: "必须 và 不用 / 不必", pattern: "必须 + V (bắt buộc) ; 不用/不必 + V (không cần)",
        explain: "Phủ định của 必须 là 不用 hoặc 不必, không phải 不必须.",
        form: [["Ví dụ", "明天你必须来 / 你不用担心"]],
        notes: ["✗ 不必须."],
        examples: [["明天你必须来。", "Míngtiān nǐ bìxū lái.", "Mai bạn nhất định phải đến."], ["你不用担心。", "Nǐ búyòng dānxīn.", "Bạn không cần lo."]],
        tasks: [{ vi: "Nói với bạn: \"Bạn không cần mang gì cả.\"", re: "不用|不必", sample: "你什么都不用带。" }]
      }
    ],
    18: [
      {
        name: "不但……而且……", pattern: "S + 不但 A，而且 B ; 不但 S1 A，而且 S2 也 B",
        explain: "Không những… mà còn… Cùng chủ ngữ thì chủ ngữ đứng TRƯỚC 不但; khác chủ ngữ thì mỗi vế một chủ ngữ.",
        form: [["Cùng chủ ngữ", "这里不但便宜，而且很干净"], ["Khác chủ ngữ", "不但我喜欢，我老公也喜欢"]],
        notes: ["Vế sau hay có 也/还: 而且还…"],
        examples: [["这里不但便宜，而且很干净。", "Zhèlǐ búdàn piányi, érqiě hěn gānjìng.", "Ở đây không những rẻ mà còn rất sạch."], ["不但我喜欢，我老公也喜欢。", "Búdàn wǒ xǐhuan, wǒ lǎogōng yě xǐhuan.", "Không chỉ tôi thích, chồng tôi cũng thích."]],
        tasks: [{ vi: "Khen một nhà hàng: không những rẻ mà còn ngon.", re: "不但.+而且", sample: "这家饭馆不但便宜，而且很好吃。" }]
      },
      {
        name: "的, 得, 地 (đều đọc de)", pattern: "… + 的 + N (định ngữ) ; V + 得 + Adj (bổ ngữ) ; Adj + 地 + V (trạng ngữ)",
        explain: "的 đứng trước danh từ (của…); 得 đứng sau động từ (…thế nào); 地 đứng trước động từ (một cách…).",
        form: [["Ví dụ", "我的书 / 他跑得很快 / 他慢慢地走"]],
        notes: ["Mẹo: sau 的 là danh từ, sau 得 là tính từ, sau 地 là động từ."],
        examples: [["这是我的书。", "Zhè shì wǒ de shū.", "Đây là sách của tôi."], ["他跑得很快。", "Tā pǎo de hěn kuài.", "Anh ấy chạy rất nhanh."], ["他慢慢地走过来。", "Tā mànmàn de zǒu guòlai.", "Anh ấy từ từ đi lại."]],
        tasks: [{ vi: "Nói một câu có 地: \"Cô ấy vui vẻ nói: Cảm ơn bạn!\"", re: "地", sample: "她高兴地说：“谢谢你！”" }]
      }
    ],
    19: [
      {
        name: "过 guò và 过 guo", pattern: "过 guò = đi qua, trải qua (động từ) ; V + 过 guo = đã từng",
        explain: "过 làm động từ chính: 过马路 (qua đường), 过生日 (đón sinh nhật). 过 sau động từ (đọc nhẹ): kinh nghiệm đã từng.",
        form: [["Ví dụ", "过马路 / 过春节 / 去过北京"]],
        notes: ["Phủ định kinh nghiệm: 没 + V + 过."],
        examples: [["过马路要小心。", "Guò mǎlù yào xiǎoxīn.", "Qua đường phải cẩn thận."], ["我去过上海。", "Wǒ qùguo Shànghǎi.", "Tôi từng đến Thượng Hải."]],
        tasks: [{ vi: "Nói bạn đã từng đến một nơi nào đó.", re: "过", sample: "我去过北京两次。" }]
      },
      {
        name: "Lượng từ cho người: 位 và 个", pattern: "这/那/几 + 位 + N (lịch sự) ; 个 + N (thông thường)",
        explain: "位 thể hiện tôn trọng, dùng khi nói về khách, thầy cô, người lớn tuổi. 个 dùng bình thường.",
        form: [["Ví dụ", "这位老师 / 三位客人 / 您几位？"]],
        notes: ["Không dùng 位 khi nói về chính mình."],
        examples: [["这位是我们的新经理。", "Zhè wèi shì wǒmen de xīn jīnglǐ.", "Vị này là giám đốc mới của chúng tôi."], ["请问，您几位？", "Qǐngwèn, nín jǐ wèi?", "Xin hỏi quý khách đi mấy người?"]],
        tasks: [{ vi: "Hỏi lịch sự: \"Quý khách đi mấy người?\"", re: "位", sample: "请问，您几位？" }]
      }
    ],
    20: [
      {
        name: "只要…就 và 只有…才", pattern: "只要 A，就 B (đủ điều kiện) ; 只有 A，才 B (điều kiện duy nhất)",
        explain: "只要: có A là đủ để có B (nhẹ nhàng, dễ). 只有: phải có A mới có B, không có cách khác (bắt buộc).",
        form: [["So sánh", "只要努力，就能成功 / 只有努力，才能成功"]],
        notes: ["Không ghép chéo: ✗ 只要…才, ✗ 只有…就."],
        examples: [["只要努力，就能成功。", "Zhǐyào nǔlì, jiù néng chénggōng.", "Chỉ cần cố gắng là thành công."], ["只有努力，才能成功。", "Zhǐyǒu nǔlì, cái néng chénggōng.", "Chỉ có cố gắng mới thành công được."]],
        tasks: [{ vi: "Dùng 只有…才 nói về sức khỏe.", re: "只有.+才", sample: "只有多运动，身体才会好。" }]
      },
      {
        name: "Câu cảm thán: 多(么) + Adj + 啊", pattern: "多(么) + Adj + 啊！",
        explain: "Biết bao, thật là… Dùng để bày tỏ cảm xúc mạnh.",
        form: [["Ví dụ", "多美啊！/ 多好的天气啊！"]],
        notes: ["Khẩu ngữ thường dùng 多, văn viết dùng 多么."],
        examples: [["这里的风景多美啊！", "Zhèlǐ de fēngjǐng duō měi a!", "Phong cảnh ở đây đẹp biết bao!"], ["多好的天气啊！", "Duō hǎo de tiānqì a!", "Thời tiết đẹp biết bao!"]],
        tasks: [{ vi: "Cảm thán: \"Hôm nay trời đẹp biết bao!\"", re: "多(么)?.+啊", sample: "今天的天气多好啊！" }]
      }
    ]
  }
};
