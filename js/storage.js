/* ========================================
   localStorage 数据管理
   ======================================== */

const STORAGE_KEYS = {
    PROGRESS: 'wuxing_city_quiz_progress'
};

/**
 * 保存测试进度
 *
 * @param {object} progress - 进度对象
 * @returns {boolean} 是否保存成功
 */
function saveQuizProgress(progress) {
    try {
        const progressData = {
            ...progress,
            savedAt: Date.now()
        };
        localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progressData));
        return true;
    } catch (e) {
        console.error('保存进度失败:', e);
        return false;
    }
}

/**
 * 获取测试进度
 *
 * @returns {object|null} 进度对象
 */
function getQuizProgress() {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.PROGRESS);
        if (!data) return null;

        const progress = JSON.parse(data);

        // 如果超过24小时，清除过期进度
        if (Date.now() - progress.savedAt > 24 * 60 * 60 * 1000) {
            clearQuizProgress();
            return null;
        }

        return progress;
    } catch (e) {
        console.error('读取进度失败:', e);
        return null;
    }
}

/**
 * 清除测试进度
 *
 * @returns {boolean} 是否清除成功
 */
function clearQuizProgress() {
    try {
        localStorage.removeItem(STORAGE_KEYS.PROGRESS);
        return true;
    } catch (e) {
        console.error('清除进度失败:', e);
        return false;
    }
}

/**
 * 清除所有数据
 *
 * @returns {boolean} 是否清除成功
 */
function clearAllData() {
    try {
        localStorage.removeItem(STORAGE_KEYS.PROGRESS);
        return true;
    } catch (e) {
        console.error('清除数据失败:', e);
        return false;
    }
}
