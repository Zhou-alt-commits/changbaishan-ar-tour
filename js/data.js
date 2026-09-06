/**
 * 长白山AR旅游导览系统 - 景点数据
 * 数据以JSON静态文件保存，无需后端数据库，降低课设难度。
 * 每个景点对应一套素材：
 *   - img:    景点展示图片（本地路径或网络图）
 *   - audio:  语音讲解 mp3（放入 audio 文件夹）
 *   - model:  AR 3D模型 glb（放入 models 文件夹）
 *   - marker: AR 识别标记 NFT 文件名（放入 marker 文件夹，url不带后缀）
 */
const SPOTS = [
    {
        id: 1,
        name: "长白山天池",
        title: "🏔️ 长白山天池",
        intro: "长白山天池位于长白山主峰火山锥体顶部，是火山喷发后积水形成的火山口湖，也是我国最大的高山湖泊。",
        history: "天池水面海拔2189米，南北长约4.4公里，东西宽约3.37公里，最深处373米。它由16座山峰环抱，湖水澄澈如镜，被列为世界最深的火山口湖之一。传说天池中有“天池水怪”，更增添了几分神秘色彩。",
        tips: "最佳观赏季节为6-9月，天池雾气大，登顶需留意天气。",
        img: "https://img.example.com/tiandi.jpg",
        audio: "audio/tiandi.mp3",
        model: "models/mountain.glb",
        marker: "marker/tiandi",
        color: "#0ea5e9"
    },
    {
        id: 2,
        name: "长白瀑布",
        title: "💧 长白瀑布",
        intro: "天池水从天豁峰和龙门峰之间奔流而下，形成落差68米的长白瀑布，是松花江、图们江、鸭绿江三江源头。",
        history: "长白瀑布是中国落差最大的火山瀑布之一，气势磅礴，水花四溅。冬季时瀑布结冰，形成壮观的冰瀑奇观，是长白山最震撼的自然景观之一。",
        tips: "观赏瀑布需攀登一段木质栈道，建议穿防滑鞋。",
        img: "https://img.example.com/pubu.jpg",
        audio: "audio/pubu.mp3",
        model: "models/waterfall.glb",
        marker: "marker/pubu",
        color: "#14b8a6"
    },
    {
        id: 3,
        name: "长白山原始森林",
        title: "🌲 长白山原始森林",
        intro: "长白山保存着完整的温带山地生态系统，森林覆盖率高，动植物资源丰富。",
        history: "长白山自然保护区是我国建立最早、面积最大的自然保护区之一，森林覆盖率超过85%，拥有红松、云杉等珍贵树种，被誉为“长白林海”。",
        tips: "林间栈道平缓，适合徒步游览，注意防蚊虫。",
        img: "https://img.example.com/senlin.jpg",
        audio: "audio/senlin.mp3",
        model: "models/forest.glb",
        marker: "marker/senlin",
        color: "#16a34a"
    },
    {
        id: 4,
        name: "长白山天池怪兽",
        title: "🦕 天池怪兽传说",
        intro: "关于天池水怪的传说由来已久，为长白山增添神秘色彩，是热门科普互动主题。",
        history: "自上世纪起，多次有人声称在天池目击“水怪”，引发广泛关注。科学家认为可能是大型鱼类或光影现象，至今仍是未解之谜，也是长白山文旅的重要IP。",
        tips: "作为趣味互动知识点，可与AR小问答结合。",
        img: "https://img.example.com/guaiwu.jpg",
        audio: "audio/guaiwu.mp3",
        model: "models/monster.glb",
        marker: "marker/guaiwu",
        color: "#8b5cf6"
    }
];
