// 五行城市测验 - 工具函数

/* ========================================
   天干地支计算工具
   ======================================== */

/**
 * 天干对应五行映射
 */
const TIANGAN_WUXING = {
    '甲': 'wood',
    '乙': 'wood',
    '丙': 'fire',
    '丁': 'fire',
    '戊': 'earth',
    '己': 'earth',
    '庚': 'metal',
    '辛': 'metal',
    '壬': 'water',
    '癸': 'water'
};

/**
 * 天干列表
 */
const TIANGAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];

/**
 * 五行名称映射（中文）
 */
const WUXING_NAMES = {
    'wood': '木',
    'fire': '火',
    'earth': '土',
    'metal': '金',
    'water': '水'
};

/**
 * 五行符号
 */
const WUXING_SYMBOLS = {
    'wood': '🌳',
    'fire': '🔥',
    'earth': '⛰️',
    'metal': '⚙️',
    'water': '💧'
};

/**
 * 五行描述
 */
const WUXING_DESCRIPTIONS = {
    'wood': '木属性代表生长、规划与创造力，重视长期发展。',
    'fire': '火属性代表热情、行动与表现力，重视效率与当下。',
    'earth': '土属性代表稳定、承载与平衡，重视安全与责任。',
    'metal': '金属性代表秩序、执行与决断力，重视规则与结果。',
    'water': '水属性代表智慧、流动与适应力，重视变化与思考。'
};

/**
 * 根据公历日期计算日干
 *
 * 算法说明：
 * - 基准日期：1900-01-31 是甲辰日，日干是甲（索引0）
 * - 计算目标日期与基准日期的天数差
 * - 天数差 % 10 得到日干索引
 *
 * @param {number} year - 年份
 * @param {number} month - 月份 (1-12)
 * @param {number} day - 日期
 * @returns {string} 日干（甲/乙/丙/丁/戊/己/庚/辛/壬/癸）
 */
function calculateDayGan(year, month, day) {
    // 基准日期：1900-01-31 甲辰日，日干为甲（索引0）
    const BASE_DATE = Date.UTC(1900, 0, 31);
    const BASE_GAN_INDEX = 0; // 甲的索引

    const targetDate = Date.UTC(year, month - 1, day);
    const daysDiff = Math.floor((targetDate - BASE_DATE) / (24 * 60 * 60 * 1000));

    // 计算日干索引（10天干循环）
    const ganIndex = ((daysDiff % 10) + BASE_GAN_INDEX + 10) % 10;

    return TIANGAN[ganIndex];
}

/**
 * 计算先天五行
 *
 * @param {number} year - 年份
 * @param {number} month - 月份 (1-12)
 * @param {number} day - 日期
 * @returns {object} 五行结果对象
 */
function calculateInnateWuxing(year, month, day) {
    const dayGan = calculateDayGan(year, month, day);
    const wuxing = TIANGAN_WUXING[dayGan];

    return {
        dayGan: dayGan,
        element: wuxing,
        name: WUXING_NAMES[wuxing],
        symbol: WUXING_SYMBOLS[wuxing],
        description: WUXING_DESCRIPTIONS[wuxing]
    };
}

/**
 * 获取五行相生相克关系
 *
 * @param {string} element - 五行属性 (wood/fire/earth/metal/water)
 * @returns {object} 关系对象
 */
function getWuxingRelations(element) {
    // 五行相生：木→火→土→金→水→木
    const generateRelations = {
        'wood': 'fire',
        'fire': 'earth',
        'earth': 'metal',
        'metal': 'water',
        'water': 'wood'
    };

    // 五行相克：木→土→水→火→金→木
    const restrictRelations = {
        'wood': 'earth',
        'earth': 'water',
        'water': 'fire',
        'fire': 'metal',
        'metal': 'wood'
    };

    // 被什么五行生
    const generatedBy = Object.keys(generateRelations).find(
        key => generateRelations[key] === element
    );

    // 被什么五行克
    const restrictedBy = Object.keys(restrictRelations).find(
        key => restrictRelations[key] === element
    );

    return {
        generateTo: generateRelations[element],   // 我生什么
        generatedBy: generatedBy,                // 什么生我
        restrictTo: restrictRelations[element],   // 我克什么
        restrictedBy: restrictedBy                // 什么克我
    };
}
