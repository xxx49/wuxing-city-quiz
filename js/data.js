// 五行城市测验 - 数据文件（题目、城市）

/* ========================================
   五行城市数据
   ======================================== */

const WUXING_CITIES = {
    'wood': [
        {
            name: '杭州',
            description: '水木之城，木气最旺，特别利于木火产业如丝绸、茶叶、文创和互联网经济。杭州的自然环境与人文氛围能激发创造力，适合追求成长和创新的性格。',
            features: ['西湖', '灵隐寺', '龙井茶', '丝绸'],
            career: ['文化创意', '互联网', '教育'],
            lifestyle: ['茶道', '书法', '园林游览']
        },
        {
            name: '苏州',
            description: '园林之城，木气旺盛，适合从事文化、艺术、设计等创意行业的人士。苏州的精致与和谐能滋养温和而有规划性的性格。',
            features: ['拙政园', '平江路', '虎丘', '评弹'],
            career: ['文化艺术', '设计', '教育'],
            lifestyle: ['园林', '昆曲', '苏绣']
        },
        {
            name: '福州',
            description: '榕城，树木繁茂，木属性强，适合温和性格、从事教育或文化工作的人。福州的生活节奏适宜，能提供稳定的成长环境。',
            features: ['三坊七巷', '鼓山', '榕树', '茉莉花茶'],
            career: ['教育', '文化', '科研'],
            lifestyle: ['品茶', '登山', '摄影']
        }
    ],
    'fire': [
        {
            name: '广州',
            description: '火旺之地，作为国际开放港口，适合走食神生财路线，强调灵活性、实干和口才。广州的热情与活力能激发行动力和创造力。',
            features: ['广州塔', '珠江', '早茶', '广交会'],
            career: ['贸易', '餐饮', '娱乐'],
            lifestyle: ['美食', '夜生活', '购物']
        },
        {
            name: '深圳',
            description: '水火既济，以火为主，非常适合创业，适合拥有高学历和高创造性的朋友。深圳的创新氛围与快节奏能匹配富有激情的性格。',
            features: ['深圳湾', '科技园', '人才公园', '创新'],
            career: ['科技创新', '创业', '金融'],
            lifestyle: ['运动', '创业', '学习']
        },
        {
            name: '长沙',
            description: '娱乐之都，火属性强，适合从事媒体、娱乐、餐饮等热情洋溢的行业。长沙的文化活力与美食能滋养外向活泼的性格。',
            features: ['橘子洲', '岳麓山', '湖南卫视', '美食'],
            career: ['媒体', '娱乐', '餐饮'],
            lifestyle: ['夜宵', 'KTV', '旅游']
        }
    ],
    'earth': [
        {
            name: '北京',
            description: '五行属湿土，水土相生形成厚重底蕴，适合依附大型机构发展，尤利体制内领域。北京的稳重与历史感能匹配务实可靠的性格。',
            features: ['故宫', '长城', '胡同', '名校'],
            career: ['政府机关', '国企', '教育'],
            lifestyle: ['历史', '文化', '艺术']
        },
        {
            name: '郑州',
            description: '中原之地，土气厚重，适合追求稳定生活，在传统行业或制造业发展。郑州的平实与包容能提供安全感和归属感。',
            features: ['二七塔', '黄河', '少林寺', '烩面'],
            career: ['制造业', '物流', '农业'],
            lifestyle: ['美食', '历史', '家庭']
        },
        {
            name: '西安',
            description: '土金旺相，气质雄浑苍凉，历史遗迹多，适合喜欢干燥环境和历史文化的人。西安的厚重与传承能滋养重视传统与稳定的性格。',
            features: ['兵马俑', '大雁塔', '古城墙', '美食'],
            career: ['旅游', '文化', '教育'],
            lifestyle: ['历史', '美食', '文物']
        }
    ],
    'metal': [
        {
            name: '上海',
            description: '金水为主，木为辅，商业金融中心，适合喜金水的朋友，旺财运和工作机会。上海的效率与精致能匹配追求完美和高质量生活的性格。',
            features: ['外滩', '陆家嘴', '南京路', '咖啡'],
            career: ['金融', '贸易', '时尚'],
            lifestyle: ['咖啡', '购物', '艺术']
        },
        {
            name: '重庆',
            description: '山城，金气凝聚，适合坚韧不拔、在挑战中成长的性格。重庆的立体与层次能激发决断力和适应力。',
            features: ['洪崖洞', '长江', '火锅', '夜景'],
            career: ['制造业', '物流', '旅游'],
            lifestyle: ['美食', '登山', '夜生活']
        },
        {
            name: '南京',
            description: '六朝古都，金气内敛，适合从事教育、研究和行政管理的人。南京的沉稳与学府气息能滋养理性分析和系统思考的性格。',
            features: ['中山陵', '夫子庙', '秦淮河', '高校'],
            career: ['教育', '科研', '政府'],
            lifestyle: ['历史', '文学', '学术']
        }
    ],
    'water': [
        {
            name: '青岛',
            description: '海滨城市，水属性强，适合思维活跃、从事科研、创意或需要灵感的工作。青岛的海洋气息能激发灵活变通和适应能力。',
            features: ['大海', '崂山', '啤酒', '海鲜'],
            career: ['科研', '创意', '海洋产业'],
            lifestyle: ['海滨', '啤酒', '海鲜']
        },
        {
            name: '宁波',
            description: '港口城市，水运发达，适合从事贸易、航运或需要流动性的行业。宁波的开放与流动性能匹配善于沟通和协调的性格。',
            features: ['港口', '天一阁', '海鲜', '商帮'],
            career: ['贸易', '航运', '物流'],
            lifestyle: ['海鲜', '历史', '文化']
        },
        {
            name: '大连',
            description: '北方滨海，水气充沛，适合从事贸易、旅游和海洋产业的人。大连的海洋文化与开放性能滋养包容和适应性强的性格。',
            features: ['海滨', '广场', '海鲜', '服装'],
            career: ['贸易', '旅游', '服装'],
            lifestyle: ['海滨', '广场', '美食']
        }
    ]
};

/**
 * 根据五行获取推荐城市
 *
 * @param {string} wuxing - 五行属性 (wood/fire/earth/metal/water)
 * @returns {object|null} 推荐城市对象
 */
function getRecommendedCity(wuxing) {
    const cities = WUXING_CITIES[wuxing];
    if (!cities || cities.length === 0) return null;
    // 随机选择一个城市
    return cities[Math.floor(Math.random() * cities.length)];
}

/* ========================================
   测试题目数据（49题，7章节）
   ======================================== */

const QUIZ_QUESTIONS = [
    // 章节1: 性格本质 (解锁木元素)
    {
        id: 1,
        chapter: 1,
        chapterTitle: '性格本质',
        question: '你更喜欢哪种自然景观？',
        options: [
            { id: 'A', text: '茂密的森林和绿地', element: 'wood' },
            { id: 'B', text: '阳光灿烂的海滩', element: 'fire' },
            { id: 'C', text: '广阔的平原和高原', element: 'earth' },
            { id: 'D', text: '巍峨的高山和矿脉', element: 'metal' },
            { id: 'E', text: '江河湖海或湿地', element: 'water' }
        ]
    },
    {
        id: 2,
        chapter: 1,
        chapterTitle: '性格本质',
        question: '你的性格更接近哪一种描述？',
        options: [
            { id: 'A', text: '温和、有耐心、善于成长', element: 'wood' },
            { id: 'B', text: '热情、活跃、充满能量', element: 'fire' },
            { id: 'C', text: '稳重、务实、值得信赖', element: 'earth' },
            { id: 'D', text: '坚定、果断、追求完美', element: 'metal' },
            { id: 'E', text: '灵活、变通、适应力强', element: 'water' }
        ]
    },
    {
        id: 3,
        chapter: 1,
        chapterTitle: '性格本质',
        question: '你更喜欢哪种天气？',
        options: [
            { id: 'A', text: '春风和煦的晴天', element: 'wood' },
            { id: 'B', text: '阳光炽热的夏日', element: 'fire' },
            { id: 'C', text: '温和干燥的天气', element: 'earth' },
            { id: 'D', text: '秋高气爽的时节', element: 'metal' },
            { id: 'E', text: '细雨绵绵或雪天', element: 'water' }
        ]
    },
    {
        id: 4,
        chapter: 1,
        chapterTitle: '性格本质',
        question: '在团队中，你通常扮演什么角色？',
        options: [
            { id: 'A', text: '策划者和创新者', element: 'wood' },
            { id: 'B', text: '激励者和推动者', element: 'fire' },
            { id: 'C', text: '协调者和稳定器', element: 'earth' },
            { id: 'D', text: '组织者和决策者', element: 'metal' },
            { id: 'E', text: '沟通者和调节者', element: 'water' }
        ]
    },
    {
        id: 5,
        chapter: 1,
        chapterTitle: '性格本质',
        question: '你更喜欢哪种颜色？',
        options: [
            { id: 'A', text: '绿色或青色', element: 'wood' },
            { id: 'B', text: '红色或橙色', element: 'fire' },
            { id: 'C', text: '黄色或棕色', element: 'earth' },
            { id: 'D', text: '白色或金色', element: 'metal' },
            { id: 'E', text: '黑色或蓝色', element: 'water' }
        ]
    },
    {
        id: 6,
        chapter: 1,
        chapterTitle: '性格本质',
        question: '你的决策风格更接近？',
        options: [
            { id: 'A', text: '深思熟虑，逐步推进', element: 'wood' },
            { id: 'B', text: '直觉驱动，迅速决定', element: 'fire' },
            { id: 'C', text: '平衡各方，稳妥选择', element: 'earth' },
            { id: 'D', text: '理性分析，追求最优', element: 'metal' },
            { id: 'E', text: '随机应变，灵活调整', element: 'water' }
        ]
    },
    {
        id: 7,
        chapter: 1,
        chapterTitle: '性格本质',
        question: '你更喜欢哪种类型的假期？',
        options: [
            { id: 'A', text: '森林徒步或植物园游览', element: 'wood' },
            { id: 'B', text: '海滩度假或参加节庆活动', element: 'fire' },
            { id: 'C', text: '乡村体验或参观历史遗迹', element: 'earth' },
            { id: 'D', text: '登山探险或参观博物馆', element: 'metal' },
            { id: 'E', text: '海滨休闲或乘船游览', element: 'water' }
        ]
    },
    // 章节2: 情绪模式 (解锁火元素)
    {
        id: 8,
        chapter: 2,
        chapterTitle: '情绪模式',
        question: '面对压力时，你通常如何应对？',
        options: [
            { id: 'A', text: '寻找新的成长机会', element: 'wood' },
            { id: 'B', text: '积极行动，释放能量', element: 'fire' },
            { id: 'C', text: '保持稳定，寻求支持', element: 'earth' },
            { id: 'D', text: '分析问题，制定策略', element: 'metal' },
            { id: 'E', text: '冷静观察，顺其自然', element: 'water' }
        ]
    },
    {
        id: 9,
        chapter: 2,
        chapterTitle: '情绪模式',
        question: '你更喜欢哪种工作环境？',
        options: [
            { id: 'A', text: '充满创意和变化的环境', element: 'wood' },
            { id: 'B', text: '快节奏、充满挑战的环境', element: 'fire' },
            { id: 'C', text: '稳定、可预测的环境', element: 'earth' },
            { id: 'D', text: '结构清晰、高效的环境', element: 'metal' },
            { id: 'E', text: '自由、宽松、非固定的环境', element: 'water' }
        ]
    },
    {
        id: 10,
        chapter: 2,
        chapterTitle: '情绪模式',
        question: '你更看重生活的哪个方面？',
        options: [
            { id: 'A', text: '个人成长和学习', element: 'wood' },
            { id: 'B', text: '激情和体验', element: 'fire' },
            { id: 'C', text: '安全和稳定', element: 'earth' },
            { id: 'D', text: '成就和效率', element: 'metal' },
            { id: 'E', text: '自由和舒适', element: 'water' }
        ]
    },
    {
        id: 11,
        chapter: 2,
        chapterTitle: '情绪模式',
        question: '你更喜欢哪种类型的书籍或电影？',
        options: [
            { id: 'A', text: '成长故事或自然纪录片', element: 'wood' },
            { id: 'B', text: '动作冒险或浪漫喜剧', element: 'fire' },
            { id: 'C', text: '家庭剧或历史题材', element: 'earth' },
            { id: 'D', text: '侦探小说或科幻题材', element: 'metal' },
            { id: 'E', text: '悬疑剧情或情感文艺片', element: 'water' }
        ]
    },
    {
        id: 12,
        chapter: 2,
        chapterTitle: '情绪模式',
        question: '你如何描述自己的沟通风格？',
        options: [
            { id: 'A', text: '温和而有说服力', element: 'wood' },
            { id: 'B', text: '热情而富有感染力', element: 'fire' },
            { id: 'C', text: '务实而值得信赖', element: 'earth' },
            { id: 'D', text: '直接而逻辑清晰', element: 'metal' },
            { id: 'E', text: '委婉而善于倾听', element: 'water' }
        ]
    },
    {
        id: 13,
        chapter: 2,
        chapterTitle: '情绪模式',
        question: '你更喜欢哪种类型的运动？',
        options: [
            { id: 'A', text: '瑜伽、徒步或高尔夫', element: 'wood' },
            { id: 'B', text: '足球、篮球或舞蹈', element: 'fire' },
            { id: 'C', text: '健走、园艺或太极', element: 'earth' },
            { id: 'D', text: '攀岩、击剑或射击', element: 'metal' },
            { id: 'E', text: '游泳、潜水或帆船', element: 'water' }
        ]
    },
    {
        id: 14,
        chapter: 2,
        chapterTitle: '情绪模式',
        question: '你的学习方式更接近？',
        options: [
            { id: 'A', text: '通过探索和实验学习', element: 'wood' },
            { id: 'B', text: '通过实践和体验学习', element: 'fire' },
            { id: 'C', text: '通过重复和巩固学习', element: 'earth' },
            { id: 'D', text: '通过分析和系统化学习', element: 'metal' },
            { id: 'E', text: '通过交流和讨论学习', element: 'water' }
        ]
    },
    // 章节3: 行为倾向 (解锁土元素)
    {
        id: 15,
        chapter: 3,
        chapterTitle: '行为倾向',
        question: '你如何规划自己的时间？',
        options: [
            { id: 'A', text: '灵活安排，留出成长空间', element: 'wood' },
            { id: 'B', text: '充满活力，多任务并行', element: 'fire' },
            { id: 'C', text: '规律作息，稳定节奏', element: 'earth' },
            { id: 'D', text: '精确计划，高效执行', element: 'metal' },
            { id: 'E', text: '顺其自然，随性而为', element: 'water' }
        ]
    },
    {
        id: 16,
        chapter: 3,
        chapterTitle: '行为倾向',
        question: '面对新事物时，你的反应是？',
        options: [
            { id: 'A', text: '好奇探索，愿意尝试', element: 'wood' },
            { id: 'B', text: '热情投入，快速上手', element: 'fire' },
            { id: 'C', text: '谨慎观察，逐步接受', element: 'earth' },
            { id: 'D', text: '理性评估，判断价值', element: 'metal' },
            { id: 'E', text: '灵活适应，自然融入', element: 'water' }
        ]
    },
    {
        id: 17,
        chapter: 3,
        chapterTitle: '行为倾向',
        question: '你更喜欢哪种社交方式？',
        options: [
            { id: 'A', text: '小型聚会，深度交流', element: 'wood' },
            { id: 'B', text: '大型派对，热闹互动', element: 'fire' },
            { id: 'C', text: '家庭聚会，温馨氛围', element: 'earth' },
            { id: 'D', text: '商务社交，建立网络', element: 'metal' },
            { id: 'E', text: '自由往来，轻松自然', element: 'water' }
        ]
    },
    {
        id: 18,
        chapter: 3,
        chapterTitle: '行为倾向',
        question: '你的消费观念更接近？',
        options: [
            { id: 'A', text: '投资成长，注重品质', element: 'wood' },
            { id: 'B', text: '享受当下，追求体验', element: 'fire' },
            { id: 'C', text: '稳健储蓄，注重实用', element: 'earth' },
            { id: 'D', text: '精明消费，追求性价比', element: 'metal' },
            { id: 'E', text: '随性消费，喜欢就好', element: 'water' }
        ]
    },
    {
        id: 19,
        chapter: 3,
        chapterTitle: '行为倾向',
        question: '你如何处理冲突？',
        options: [
            { id: 'A', text: '寻求成长，化解矛盾', element: 'wood' },
            { id: 'B', text: '直接表达，激烈讨论', element: 'fire' },
            { id: 'C', text: '保持冷静，维护和谐', element: 'earth' },
            { id: 'D', text: '理性分析，坚持原则', element: 'metal' },
            { id: 'E', text: '灵活变通，寻求平衡', element: 'water' }
        ]
    },
    {
        id: 20,
        chapter: 3,
        chapterTitle: '行为倾向',
        question: '你更喜欢哪种居住环境？',
        options: [
            { id: 'A', text: '靠近公园或绿地', element: 'wood' },
            { id: 'B', text: '市中心繁华地段', element: 'fire' },
            { id: 'C', text: '安静稳定的社区', element: 'earth' },
            { id: 'D', text: '现代化高端住宅', element: 'metal' },
            { id: 'E', text: '临水或风景优美处', element: 'water' }
        ]
    },
    {
        id: 21,
        chapter: 3,
        chapterTitle: '行为倾向',
        question: '你如何管理自己的目标？',
        options: [
            { id: 'A', text: '设定成长方向，逐步实现', element: 'wood' },
            { id: 'B', text: '充满激情，全力冲刺', element: 'fire' },
            { id: 'C', text: '稳步推进，注重积累', element: 'earth' },
            { id: 'D', text: '精确规划，严格达成', element: 'metal' },
            { id: 'E', text: '灵活调整，顺势而为', element: 'water' }
        ]
    },
    // 章节4: 价值观 (解锁金元素)
    {
        id: 22,
        chapter: 4,
        chapterTitle: '价值观',
        question: '你认为人生最重要的是什么？',
        options: [
            { id: 'A', text: '不断成长和进步', element: 'wood' },
            { id: 'B', text: '活出精彩和热情', element: 'fire' },
            { id: 'C', text: '安全和稳定的生活', element: 'earth' },
            { id: 'D', text: '成就和卓越', element: 'metal' },
            { id: 'E', text: '自由和舒适', element: 'water' }
        ]
    },
    {
        id: 23,
        chapter: 4,
        chapterTitle: '价值观',
        question: '你更欣赏哪种领导风格？',
        options: [
            { id: 'A', text: '启发式领导，培养下属', element: 'wood' },
            { id: 'B', text: '魅力型领导，激励团队', element: 'fire' },
            { id: 'C', text: '服务型领导，关心团队', element: 'earth' },
            { id: 'D', text: '权威型领导，追求高效', element: 'metal' },
            { id: 'E', text: '民主型领导，灵活决策', element: 'water' }
        ]
    },
    {
        id: 24,
        chapter: 4,
        chapterTitle: '价值观',
        question: '你如何定义成功？',
        options: [
            { id: 'A', text: '不断超越自己', element: 'wood' },
            { id: 'B', text: '实现梦想，影响他人', element: 'fire' },
            { id: 'C', text: '家庭幸福，生活安稳', element: 'earth' },
            { id: 'D', text: '达到行业顶尖水平', element: 'metal' },
            { id: 'E', text: '活出真实的自己', element: 'water' }
        ]
    },
    {
        id: 25,
        chapter: 4,
        chapterTitle: '价值观',
        question: '你更看重工作中的什么？',
        options: [
            { id: 'A', text: '学习机会和成长空间', element: 'wood' },
            { id: 'B', text: '激情和成就感', element: 'fire' },
            { id: 'C', text: '稳定性和安全感', element: 'earth' },
            { id: 'D', text: '回报和晋升机会', element: 'metal' },
            { id: 'E', text: '自由度和灵活性', element: 'water' }
        ]
    },
    {
        id: 26,
        chapter: 4,
        chapterTitle: '价值观',
        question: '你认为理想的社会是什么样的？',
        options: [
            { id: 'A', text: '人人都能成长发展', element: 'wood' },
            { id: 'B', text: '充满活力和创造力', element: 'fire' },
            { id: 'C', text: '和谐稳定，互相关爱', element: 'earth' },
            { id: 'D', text: '制度完善，高效运行', element: 'metal' },
            { id: 'E', text: '自由流动，包容多样', element: 'water' }
        ]
    },
    {
        id: 27,
        chapter: 4,
        chapterTitle: '价值观',
        question: '你如何选择朋友？',
        options: [
            { id: 'A', text: '能互相促进成长', element: 'wood' },
            { id: 'B', text: '有趣，能一起玩', element: 'fire' },
            { id: 'C', text: '忠诚可靠', element: 'earth' },
            { id: 'D', text: '有能力有价值', element: 'metal' },
            { id: 'E', text: '投缘，相处舒服', element: 'water' }
        ]
    },
    {
        id: 28,
        chapter: 4,
        chapterTitle: '价值观',
        question: '你对风险的看法是？',
        options: [
            { id: 'A', text: '风险是成长的机会', element: 'wood' },
            { id: 'B', text: '风险带来刺激和回报', element: 'fire' },
            { id: 'C', text: '尽量避免风险', element: 'earth' },
            { id: 'D', text: '计算风险，精确决策', element: 'metal' },
            { id: 'E', text: '顺势而为，灵活应对', element: 'water' }
        ]
    },
    // 章节5: 社会关系 (解锁水元素)
    {
        id: 29,
        chapter: 5,
        chapterTitle: '社会关系',
        question: '在人际交往中，你更看重？',
        options: [
            { id: 'A', text: '真诚和互相促进', element: 'wood' },
            { id: 'B', text: '热情和互动', element: 'fire' },
            { id: 'C', text: '信任和稳定', element: 'earth' },
            { id: 'D', text: '效率和互利', element: 'metal' },
            { id: 'E', text: '灵活和包容', element: 'water' }
        ]
    },
    {
        id: 30,
        chapter: 5,
        chapterTitle: '社会关系',
        question: '你如何处理他人的批评？',
        options: [
            { id: 'A', text: '反思改进，促进成长', element: 'wood' },
            { id: 'B', text: '激烈辩论，坚持己见', element: 'fire' },
            { id: 'C', text: '虚心接受，保持和谐', element: 'earth' },
            { id: 'D', text: '理性分析，判断对错', element: 'metal' },
            { id: 'E', text: '灵活应对，不往心里去', element: 'water' }
        ]
    },
    {
        id: 31,
        chapter: 5,
        chapterTitle: '社会关系',
        question: '你更倾向于什么样的朋友关系？',
        options: [
            { id: 'A', text: '一起学习成长', element: 'wood' },
            { id: 'B', text: '一起玩乐冒险', element: 'fire' },
            { id: 'C', text: '互相扶持陪伴', element: 'earth' },
            { id: 'D', text: '事业伙伴关系', element: 'metal' },
            { id: 'E', text: '轻松随意', element: 'water' }
        ]
    },
    {
        id: 32,
        chapter: 5,
        chapterTitle: '社会关系',
        question: '在团队合作中，你最不能接受？',
        options: [
            { id: 'A', text: '缺乏成长空间', element: 'wood' },
            { id: 'B', text: '沉闷无活力', element: 'fire' },
            { id: 'C', text: '不团结不稳定', element: 'earth' },
            { id: 'D', text: '效率低下混乱', element: 'metal' },
            { id: 'E', text: '过于死板僵化', element: 'water' }
        ]
    },
    {
        id: 33,
        chapter: 5,
        chapterTitle: '社会关系',
        question: '你如何认识新朋友？',
        options: [
            { id: 'A', text: '通过学习或兴趣小组', element: 'wood' },
            { id: 'B', text: '通过派对或活动', element: 'fire' },
            { id: 'C', text: '通过亲友介绍', element: 'earth' },
            { id: 'D', text: '通过工作或商务场合', element: 'metal' },
            { id: 'E', text: '自然相遇，随缘结识', element: 'water' }
        ]
    },
    {
        id: 34,
        chapter: 5,
        chapterTitle: '社会关系',
        question: '你认为友谊最重要的是？',
        options: [
            { id: 'A', text: '共同成长', element: 'wood' },
            { id: 'B', text: '快乐分享', element: 'fire' },
            { id: 'C', text: '忠诚陪伴', element: 'earth' },
            { id: 'D', text: '价值互补', element: 'metal' },
            { id: 'E', text: '轻松自在', element: 'water' }
        ]
    },
    {
        id: 35,
        chapter: 5,
        chapterTitle: '社会关系',
        question: '你如何维护长期关系？',
        options: [
            { id: 'A', text: '一起学习进步', element: 'wood' },
            { id: 'B', text: '创造共同体验', element: 'fire' },
            { id: 'C', text: '保持稳定联系', element: 'earth' },
            { id: 'D', text: '定期价值交换', element: 'metal' },
            { id: 'E', text: '保持舒适距离', element: 'water' }
        ]
    },
    // 章节6: 生活方式
    {
        id: 36,
        chapter: 6,
        chapterTitle: '生活方式',
        question: '你理想的一天是怎样的？',
        options: [
            { id: 'A', text: '学习新知识，锻炼身体', element: 'wood' },
            { id: 'B', text: '充满激情的活动', element: 'fire' },
            { id: 'C', text: '平静稳定的日常', element: 'earth' },
            { id: 'D', text: '高效完成重要任务', element: 'metal' },
            { id: 'E', text: '自由安排，随性而为', element: 'water' }
        ]
    },
    {
        id: 37,
        chapter: 6,
        chapterTitle: '生活方式',
        question: '你更喜欢哪种饮食习惯？',
        options: [
            { id: 'A', text: '清淡健康，素食为主', element: 'wood' },
            { id: 'B', text: '辛辣刺激，丰富多样', element: 'fire' },
            { id: 'C', text: '家常菜，温饱为主', element: 'earth' },
            { id: 'D', text: '精致讲究，营养搭配', element: 'metal' },
            { id: 'E', text: '海鲜河鲜，清淡鲜美', element: 'water' }
        ]
    },
    {
        id: 38,
        chapter: 6,
        chapterTitle: '生活方式',
        question: '你更喜欢哪种休闲娱乐？',
        options: [
            { id: 'A', text: '阅读、学习、园艺', element: 'wood' },
            { id: 'B', text: '运动、聚会、旅行', element: 'fire' },
            { id: 'C', text: '看电视、陪伴家人', element: 'earth' },
            { id: 'D', text: '健身、精致活动', element: 'metal' },
            { id: 'E', text: '散步、冥想、休闲', element: 'water' }
        ]
    },
    {
        id: 39,
        chapter: 6,
        chapterTitle: '生活方式',
        question: '你的购物风格是？',
        options: [
            { id: 'A', text: '注重品质和环保', element: 'wood' },
            { id: 'B', text: '追求时尚和潮流', element: 'fire' },
            { id: 'C', text: '实用为主，性价比高', element: 'earth' },
            { id: 'D', text: '精挑细选，追求高端', element: 'metal' },
            { id: 'E', text: '随性而为，喜欢就买', element: 'water' }
        ]
    },
    {
        id: 40,
        chapter: 6,
        chapterTitle: '生活方式',
        question: '你更喜欢哪种居住风格？',
        options: [
            { id: 'A', text: '自然风格，有植物', element: 'wood' },
            { id: 'B', text: '现代时尚，色彩丰富', element: 'fire' },
            { id: 'C', text: '温馨舒适，传统风格', element: 'earth' },
            { id: 'D', text: '简约现代，高端大气', element: 'metal' },
            { id: 'E', text: '开放式，临水或通透', element: 'water' }
        ]
    },
    {
        id: 41,
        chapter: 6,
        chapterTitle: '生活方式',
        question: '你如何管理自己的健康？',
        options: [
            { id: 'A', text: '注重养生和调理', element: 'wood' },
            { id: 'B', text: '高强度运动锻炼', element: 'fire' },
            { id: 'C', text: '规律作息饮食', element: 'earth' },
            { id: 'D', text: '科学健身计划', element: 'metal' },
            { id: 'E', text: '顺其自然，不过度', element: 'water' }
        ]
    },
    {
        id: 42,
        chapter: 6,
        chapterTitle: '生活方式',
        question: '你理想的旅行方式是？',
        options: [
            { id: 'A', text: '生态旅游，自然探险', element: 'wood' },
            { id: 'B', text: '热门景点，热闹打卡', element: 'fire' },
            { id: 'C', text: '回家探亲，周边游', element: 'earth' },
            { id: 'D', text: '高端定制，精品路线', element: 'metal' },
            { id: 'E', text: '海滨度假，休闲放松', element: 'water' }
        ]
    },
    // 章节7: 综合倾向
    {
        id: 43,
        chapter: 7,
        chapterTitle: '综合倾向',
        question: '如果让你重新选择职业，你会优先考虑？',
        options: [
            { id: 'A', text: '教育、培训、咨询', element: 'wood' },
            { id: 'B', text: '娱乐、传媒、创业', element: 'fire' },
            { id: 'C', text: '公务员、国企、稳定工作', element: 'earth' },
            { id: 'D', text: '金融、管理、专业领域', element: 'metal' },
            { id: 'E', text: '自由职业、创意、流动工作', element: 'water' }
        ]
    },
    {
        id: 44,
        chapter: 7,
        chapterTitle: '综合倾向',
        question: '你认为什么最能给你带来满足感？',
        options: [
            { id: 'A', text: '看到自己的成长', element: 'wood' },
            { id: 'B', text: '实现目标，获得认可', element: 'fire' },
            { id: 'C', text: '家庭和睦，生活安定', element: 'earth' },
            { id: 'D', text: '完成任务，取得成就', element: 'metal' },
            { id: 'E', text: '内心平静，自由自在', element: 'water' }
        ]
    },
    {
        id: 45,
        chapter: 7,
        chapterTitle: '综合倾向',
        question: '你更喜欢哪种季节？',
        options: [
            { id: 'A', text: '春天 - 生机勃勃', element: 'wood' },
            { id: 'B', text: '夏天 - 热烈灿烂', element: 'fire' },
            { id: 'C', text: '长夏 - 温和养人', element: 'earth' },
            { id: 'D', text: '秋天 - 清爽收获', element: 'metal' },
            { id: 'E', text: '冬天 - 蓄势待发', element: 'water' }
        ]
    },
    {
        id: 46,
        chapter: 7,
        chapterTitle: '综合倾向',
        question: '你认为自己的最大优势是？',
        options: [
            { id: 'A', text: '学习能力强，善于成长', element: 'wood' },
            { id: 'B', text: '热情开朗，富有感染力', element: 'fire' },
            { id: 'C', text: '稳重可靠，值得信赖', element: 'earth' },
            { id: 'D', text: '果断坚毅，追求卓越', element: 'metal' },
            { id: 'E', text: '灵活变通，适应力强', element: 'water' }
        ]
    },
    {
        id: 47,
        chapter: 7,
        chapterTitle: '综合倾向',
        question: '你如何看待变化？',
        options: [
            { id: 'A', text: '变化带来成长机会', element: 'wood' },
            { id: 'B', text: '变化带来刺激挑战', element: 'fire' },
            { id: 'C', text: '保持稳定最重要', element: 'earth' },
            { id: 'D', text: '主动掌控变化', element: 'metal' },
            { id: 'E', text: '顺应变化，自然调整', element: 'water' }
        ]
    },
    {
        id: 48,
        chapter: 7,
        chapterTitle: '综合倾向',
        question: '你希望别人如何评价你？',
        options: [
            { id: 'A', text: '温和有涵养，不断进步', element: 'wood' },
            { id: 'B', text: '热情有活力，充满魅力', element: 'fire' },
            { id: 'C', text: '踏实可靠，值得依靠', element: 'earth' },
            { id: 'D', text: '专业能干，追求卓越', element: 'metal' },
            { id: 'E', text: '聪明灵活，易于相处', element: 'water' }
        ]
    },
    {
        id: 49,
        chapter: 7,
        chapterTitle: '综合倾向',
        question: '综合你的性格，你最适合哪种城市氛围？',
        options: [
            { id: 'A', text: '文化底蕴深厚，自然环境优美', element: 'wood' },
            { id: 'B', text: '充满活力和机遇，快节奏发展', element: 'fire' },
            { id: 'C', text: '稳定安全，适合长期生活', element: 'earth' },
            { id: 'D', text: '现代化发达，追求高效生活', element: 'metal' },
            { id: 'E', text: '开放包容，生活节奏舒适', element: 'water' }
        ]
    }
];

/* ========================================
   30题精选版本
   ======================================== */

const QUIZ_QUESTIONS_30 = [
    QUIZ_QUESTIONS[0],   // 题号1
    QUIZ_QUESTIONS[1],   // 题号2
    QUIZ_QUESTIONS[2],   // 题号3
    QUIZ_QUESTIONS[3],   // 题号4
    QUIZ_QUESTIONS[6],   // 题号7
    QUIZ_QUESTIONS[7],   // 题号8
    QUIZ_QUESTIONS[9],   // 题号10
    QUIZ_QUESTIONS[10],  // 题号11
    QUIZ_QUESTIONS[12],  // 题号13
    QUIZ_QUESTIONS[13],  // 题号14
    QUIZ_QUESTIONS[14],  // 题号15
    QUIZ_QUESTIONS[15],  // 题号16
    QUIZ_QUESTIONS[17],  // 题号18
    QUIZ_QUESTIONS[18],  // 题号19
    QUIZ_QUESTIONS[20],  // 题号21
    QUIZ_QUESTIONS[21],  // 题号22
    QUIZ_QUESTIONS[23],  // 题号24
    QUIZ_QUESTIONS[24],  // 题号25
    QUIZ_QUESTIONS[26],  // 题号27
    QUIZ_QUESTIONS[28],  // 题号29
    QUIZ_QUESTIONS[29],  // 题号30
    QUIZ_QUESTIONS[32],  // 题号33
    QUIZ_QUESTIONS[34],  // 题号35
    QUIZ_QUESTIONS[35],  // 题号36
    QUIZ_QUESTIONS[36],  // 题号37
    QUIZ_QUESTIONS[38],  // 题号39
    QUIZ_QUESTIONS[39],  // 题号40
    QUIZ_QUESTIONS[42],  // 题号43
    QUIZ_QUESTIONS[45],  // 题号46
    QUIZ_QUESTIONS[47],  // 题号48
    QUIZ_QUESTIONS[48]   // 题号49
];

/**
 * 计算3个推荐城市的匹配度
 * @param {object} quizScores - 用户测验得分 {wood: x, fire: x, earth: x, metal: x, water: x}
 * @param {string} innateElement - 先天五行元素
 * @returns {array} 排序后的3个城市推荐，每个包含 {city, element, matchRate}
 */
function calculateRecommendedCities(quizScores, innateElement) {
    // 计算每个五行的综合得分
    // 算法：基础分70分 + 先天加成(匹配+20分) + 测验分数(0-10分)
    const totalScores = {};

    // 找出测验最高分，用于归一化
    const maxQuizScore = Math.max(...Object.values(quizScores), 1);

    for (let element of ['wood', 'fire', 'earth', 'metal', 'water']) {
        // 基础分：70分
        let baseScore = 70;

        // 先天五行加成：如果匹配，加20分
        if (innateElement === element) {
            baseScore += 20;
        }

        // 测验分数加成：最高可得10分
        const quizBonus = Math.round((quizScores[element] / maxQuizScore) * 10);
        baseScore += quizBonus;

        totalScores[element] = baseScore;
    }

    // 为每个城市计算匹配度
    const cityMatchScores = [];

    for (let element of ['wood', 'fire', 'earth', 'metal', 'water']) {
        const cities = WUXING_CITIES[element];
        cities.forEach(city => {
            let matchRate = totalScores[element];

            // 相生加成（木生火、火生土、土生金、金生水、水生木）
            const generateRelations = {
                'wood': 'fire',
                'fire': 'earth',
                'earth': 'metal',
                'metal': 'water',
                'water': 'wood'
            };

            // 相克减分（木克土、土克水、水克火、火克金、金克木）
            const restrictRelations = {
                'wood': 'earth',
                'fire': 'metal',
                'earth': 'water',
                'metal': 'wood',
                'water': 'fire'
            };

            if (generateRelations[innateElement] === element) {
                matchRate += 3; // 相生加3分
            }

            if (restrictRelations[innateElement] === element) {
                matchRate -= 5; // 相克减5分
            }

            // 限制在70-100%范围
            matchRate = Math.max(70, Math.min(100, matchRate));

            cityMatchScores.push({
                city: city,
                element: element,
                matchRate: matchRate
            });
        });
    }

    // 按匹配度排序
    cityMatchScores.sort((a, b) => b.matchRate - a.matchRate);

    // 取前3个城市
    const top3 = cityMatchScores.slice(0, 3);

    // 只有差距太小时才调整（<2%），并使用随机差距让结果更自然
    if (top3.length >= 2) {
        const gap1 = top3[0].matchRate - top3[1].matchRate;
        if (gap1 < 2) {
            // 使用3-7%之间的随机差距
            const randomGap = Math.floor(Math.random() * 5) + 3;
            top3[1].matchRate = Math.max(70, top3[0].matchRate - randomGap);
        }
    }

    if (top3.length >= 3) {
        const gap2 = top3[1].matchRate - top3[2].matchRate;
        if (gap2 < 2) {
            // 使用3-6%之间的随机差距（稍微小一点）
            const randomGap = Math.floor(Math.random() * 4) + 3;
            top3[2].matchRate = Math.max(70, top3[1].matchRate - randomGap);
        }
    }

    return top3;
}
