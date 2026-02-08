/* ========================================
   五行城市测验 - 主应用逻辑 (MVP版本)
   ======================================== */

// 应用状态
const appState = {
    currentPage: 'birth-input',
    birthDate: null,
    innateWuxing: null,
    quizScores: { wood: 0, fire: 0, earth: 0, metal: 0, water: 0 },
    currentQuestion: 0,
    selectedAnswers: []
};

// 使用完整的49道题目
const QUIZ_QUESTIONS_USED = QUIZ_QUESTIONS_30;

/**
 * 初始化应用
 */
function initApp() {
    renderPage();
}

/**
 * 渲染当前页面
 */
function renderPage() {
    const app = document.getElementById('app');
    app.innerHTML = '';

    // 清除任何残留的焦点和状态
    if (document.activeElement) {
        document.activeElement.blur();
    }

    // 确保body没有焦点
    document.body.focus();

    switch(appState.currentPage) {
        case 'birth-input':
            app.appendChild(createBirthInputPage());
            break;
        case 'innate-wuxing':
            app.appendChild(createInnateWuxingPage());
            break;
        case 'quiz':
            app.appendChild(createQuizPage());
            break;
        case 'ritual-transition':
            app.appendChild(createRitualTransitionPage());
            break;
        case 'result':
            app.appendChild(createResultPage());
            break;
    }
}

/**
 * 创建出生日期输入页
 */
function createBirthInputPage() {
    const container = document.createElement('div');
    container.className = 'container';
    container.style.cssText = 'position: relative;'; // 添加相对定位，使历史记录按钮正确定位

    const now = new Date();
    const currentYear = now.getFullYear();

    container.innerHTML = `
        <div class="fade-in">
            <!-- 大卡片渐变英雄区 -->
            <div class="hero-section">
                <h1 class="hero-title">五行城市测验</h1>
                <p class="hero-subtitle">探索城市能量场，发现你的命定之城</p>
                <div class="feature-tags">
                    <span class="feature-tag">🌳 先天五行</span>
                    <span class="feature-tag">🔥 性格分析</span>
                    <span class="feature-tag">🏙️ 城市推荐</span>
                </div>
            </div>

            <!-- 卡片式日期选择器 -->
            <div class="date-card">
                <h3>🎂 请选择您的出生日期</h3>

                <div class="date-selector" style="margin-top: 20px;">
                    <div class="date-group">
                        <label class="date-label">年</label>
                        <select class="date-input" id="year-select">
                            <option value="" class="placeholder-option">-</option>
                            ${Array.from({length: 100}, (_, i) => {
                                const year = currentYear - i;
                                return year >= 1920 ? `<option value="${year}">${year}年</option>` : '';
                            }).join('')}
                        </select>
                    </div>
                    <div class="date-group">
                        <label class="date-label">月</label>
                        <select class="date-input" id="month-select">
                            <option value="" class="placeholder-option">-</option>
                            ${Array.from({length: 12}, (_, i) =>
                                `<option value="${i + 1}">${i + 1}月</option>`
                            ).join('')}
                        </select>
                    </div>
                    <div class="date-group">
                        <label class="date-label">日</label>
                        <select class="date-input" id="day-select">
                            <option value="" class="placeholder-option">-</option>
                            ${Array.from({length: 31}, (_, i) =>
                                `<option value="${i + 1}">${i + 1}日</option>`
                            ).join('')}
                        </select>
                    </div>
                </div>

                <button class="btn btn-primary" id="start-btn" disabled style="margin-top: 24px; width: 100%; padding: 16px;">
                    开始探索 →
                </button>
            </div>

            <p style="text-align: center; color: var(--color-text-secondary); margin-top: 24px; font-size: 14px;">
                已有 <span style="color: var(--color-vermilion); font-weight: 600;">12,580</span> 人完成测验
            </p>
        </div>
    `;

    // 添加事件监听
    setTimeout(() => {
        const yearSelect = document.getElementById('year-select');
        const monthSelect = document.getElementById('month-select');
        const daySelect = document.getElementById('day-select');
        const startBtn = document.getElementById('start-btn');

        const checkInputs = () => {
            if (yearSelect.value && monthSelect.value && daySelect.value) {
                startBtn.disabled = false;
            } else {
                startBtn.disabled = true;
            }
        };

        yearSelect.addEventListener('change', checkInputs);
        monthSelect.addEventListener('change', checkInputs);
        daySelect.addEventListener('change', checkInputs);

        startBtn.addEventListener('click', () => {
            const year = parseInt(yearSelect.value);
            const month = parseInt(monthSelect.value);
            const day = parseInt(daySelect.value);

            // 计算先天五行
            const innateWuxing = calculateInnateWuxing(year, month, day);
            appState.birthDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            appState.innateWuxing = innateWuxing;

            // 进入下一页
            appState.currentPage = 'innate-wuxing';
            renderPage();
        });
    }, 0);

    return container;
}

/**
 * 创建先天五行展示页
 */
function createInnateWuxingPage() {
    const container = document.createElement('div');
    container.className = 'container';

    const wuxing = appState.innateWuxing;

    container.innerHTML = `
        <div class="fade-in">
            <h1 class="title">您的先天五行</h1>
            <p class="subtitle">根据出生日期计算得出</p>

            <div class="element-result">
                <div class="result-title">您的先天五行属性</div>
                <div class="main-element">
                    <div class="element-icon element-${wuxing.element}">${wuxing.symbol}</div>
                    <div class="element-name">${wuxing.dayGan}${wuxing.name}命</div>
                </div>
                <div class="element-description">${wuxing.description}</div>
            </div>

            <div class="card">
                <div class="card-title">
                    💡
                    测验说明
                </div>
                <div class="card-content">
                    <p>接下来将通过30道精选题目，综合分析您的五行倾向与性格特质。</p>
                    <p>测试完成后，系统将综合您的先天五行和性格测验，为您推荐最适合的城市。</p>
                </div>
            </div>

            <button class="btn btn-primary" id="start-quiz-btn">
                开始性格测试
            </button>
        </div>
    `;

    setTimeout(() => {
        document.getElementById('start-quiz-btn').addEventListener('click', () => {
            appState.currentPage = 'quiz';
            appState.currentQuestion = 0;
            renderPage();
        });
    }, 0);

    return container;
}

/**
 * 创建测试页
 */
function createQuizPage() {
    const container = document.createElement('div');
    container.className = 'container';

    const question = QUIZ_QUESTIONS_USED[appState.currentQuestion];
    const totalQuestions = QUIZ_QUESTIONS_USED.length;

    container.innerHTML = `
        <div class="fade-in">
            <div class="question-card">
                <div class="question-header">
                    <div class="question-progress">
                        进度: ${appState.currentQuestion + 1} / ${totalQuestions}题
                    </div>
                    <div class="question-text">${question.question}</div>
                </div>
                <div class="options-container">
                    ${question.options.map(option => `
                        <div class="option" data-element="${option.element}">
                            <div class="option-label">${option.id}</div>
                            <div class="option-text">${option.text}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    setTimeout(() => {
        // 清除任何残留的焦点状态，防止下一题的A选项自动高亮
        if (document.activeElement) {
            document.activeElement.blur();
        }

        // 强制移除整个文档的焦点，防止浏览器自动设置焦点
        document.body.focus();

        document.querySelectorAll('.option').forEach(optionEl => {
            // 确保选项没有tabindex，避免获得焦点
            optionEl.removeAttribute('tabindex');
            // 移除每个选项的焦点
            optionEl.blur();

            optionEl.addEventListener('click', function(e) {
                // 添加选中效果
                this.classList.add('selected');

                // 短暂延迟后进入下一题，让用户看到选中效果
                setTimeout(() => {
                    const element = optionEl.dataset.element;
                    appState.quizScores[element]++;
                    appState.selectedAnswers.push({
                        questionId: question.id,
                        element: element
                    });

                    // 进入下一题或显示结果
                    if (appState.currentQuestion < QUIZ_QUESTIONS_USED.length - 1) {
                        appState.currentQuestion++;
                        renderPage();
                    } else {
                        // 完成所有题目后，先显示仪式感过渡页
                        appState.currentPage = 'ritual-transition';
                        renderPage();
                        return;
                    }
                }, 200);
            });
        });
    }, 0);

    return container;
}

/**
 * 创建仪式感过渡页（五行融合动画）
 */
function createRitualTransitionPage() {
    const container = document.createElement('div');
    container.className = 'container ritual-transition';

    container.innerHTML = `
        <div class="ritual-content">
            <div class="five-elements-ring">
                <div class="core-element" style="
                    position: absolute;
                    left: 90px;
                    top: 90px;
                    width: 100px;
                    height: 100px;
                    background: linear-gradient(135deg, var(--wuxing-wood), var(--wuxing-water));
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 40px;
                    animation: pulse 2s ease-in-out infinite;
                    box-shadow: 0 0 30px rgba(0,0,0,0.2);
                    z-index: 10;
                ">
                    <span style="font-size:36px;">🌟</span>
                </div>
                ${createElementRing('wood', '🌳', 0)}
                ${createElementRing('fire', '🔥', 1)}
                ${createElementRing('earth', '⛰️', 2)}
                ${createElementRing('metal', '⚙️', 3)}
                ${createElementRing('water', '💧', 4)}
            </div>

            <div class="ritual-text">
                <h2 class="title">正在推演你的城市命格...</h2>
                <p class="subtitle">已收集49个性格维度 × 先天五行</p>
            </div>

            <div class="ritual-messages">
                <div class="ritual-message active">分析你的五行平衡...</div>
                <div class="ritual-message">匹配城市能量场...</div>
                <div class="ritual-message">生成专属报告...</div>
            </div>

            <div class="countdown" style="margin-top:24px;text-align:center;">
                <span id="countdown-text">3</span>秒后自动查看结果
            </div>
        </div>
    `;

    // 启动动画
    setTimeout(() => {
        startRitualAnimation();
    }, 100);

    return container;
}

/**
 * 创建五行元素环
 */
function createElementRing(element, symbol, index) {
    const colors = {
        'wood': 'var(--wuxing-wood)',
        'fire': 'var(--wuxing-fire)',
        'earth': 'var(--wuxing-earth)',
        'metal': 'var(--wuxing-metal)',
        'water': 'var(--wuxing-water)'
    };

    // 计算环形位置（5个元素均匀分布在圆周上）
    const radius = 100; // 圆的半径
    const centerX = 140; // 容器中心X (280px / 2)
    const centerY = 140; // 容器中心Y (280px / 2)
    const angle = (index * 72 - 90) * (Math.PI / 180); // 从顶部开始，每个间隔72度

    const x = centerX + radius * Math.cos(angle) - 50; // -50是因为元素宽度的一半
    const y = centerY + radius * Math.sin(angle) - 50; // -50是因为元素高度的一半

    return `
        <div class="element-ring" data-index="${index}" style="
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            width: 100px;
            height: 100px;
            border: 4px solid ${colors[element]};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            animation: rotateIn 1s ease-out ${index * 0.2}s both;
            box-shadow: 0 0 20px ${colors[element]}66;
        ">
            <span style="font-size:32px;">${symbol}</span>
        </div>
    `;
}

/**
 * 启动仪式动画
 */
function startRitualAnimation() {
    const messages = document.querySelectorAll('.ritual-message');
    let currentMessage = 0;
    let countdown = 3;
    const countdownEl = document.getElementById('countdown-text');
    let animationInterval;
    let countdownInterval;

    // 消息轮播
    const showNextMessage = () => {
        messages.forEach((msg, i) => msg.classList.remove('active'));
        messages[currentMessage].classList.add('active');
        currentMessage = (currentMessage + 1) % messages.length;
    };

    // 初始显示第一条消息
    showNextMessage();

    // 每隔3秒切换消息
    animationInterval = setInterval(showNextMessage, 3000);

    // 倒计时
    countdownInterval = setInterval(() => {
        countdown--;
        countdownEl.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(countdownInterval);
            clearInterval(animationInterval);
            showResult(); // 自动显示结果
        }
    }, 1000);
}

/**
 * 计算最终五行并显示结果
 */
function showResult() {
    // 使用新的3城市推荐算法
    const recommendedCities = calculateRecommendedCities(
        appState.quizScores,
        appState.innateWuxing.element
    );

    // 将推荐城市保存到appState供结果页使用
    appState.recommendedCities = recommendedCities;

    appState.currentPage = 'result';
    renderPage();
}

/**
 * 创建结果页（显示3个城市）
 */
function createResultPage() {
    const container = document.createElement('div');
    container.className = 'container result-page';

    const wuxing = appState.innateWuxing;
    const recommendedCities = appState.recommendedCities;
    const primaryCity = recommendedCities[0];
    const secondaryCities = recommendedCities.slice(1, 3);

    // 五行名称映射
    const WUXING_NAMES = {
        'wood': '木',
        'fire': '火',
        'earth': '土',
        'metal': '金',
        'water': '水'
    };

    container.innerHTML = `
        <div class="fade-in">
            <!-- 页面标题 -->
            <div class="result-header">
                <div class="result-icon">🏙️</div>
                <h2 class="result-title">您的五行城市匹配结果</h2>
                <p class="result-subtitle">综合先天五行与30道性格测验分析</p>
            </div>

            <!-- 第1城市：主推荐 -->
            <div class="city-card primary">
                <div class="city-header">
                    <div class="city-rank">🏆 最匹配</div>
                    <div class="city-name">${primaryCity.city.name}</div>
                    <div class="city-element">
                        <div class="element-dot element-${primaryCity.element}"></div>
                        <span>${wuxing.name}属性城市</span>
                    </div>
                </div>
                <div class="city-match">
                    <div class="match-circle">
                        <div class="match-value">${primaryCity.matchRate}%</div>
                    </div>
                </div>
                <div class="city-analysis">
                    <h4 class="analysis-title">五行分析</h4>
                    <p class="analysis-text">${primaryCity.city.description}</p>
                </div>
                <div class="city-suggestions">
                    <div class="suggestion-row">
                        <span class="suggestion-icon">🏛️</span>
                        <span class="suggestion-content">${primaryCity.city.features.join(' · ')}</span>
                    </div>
                    <div class="suggestion-row">
                        <span class="suggestion-icon">💼</span>
                        <span class="suggestion-content">${primaryCity.city.career.join(' · ')}</span>
                    </div>
                    <div class="suggestion-row">
                        <span class="suggestion-icon">🎨</span>
                        <span class="suggestion-content">${primaryCity.city.lifestyle.join(' · ')}</span>
                    </div>
                </div>
            </div>

            <!-- 第2-3城市：次要推荐 -->
            ${secondaryCities.map((city, index) => `
                <div class="city-card secondary">
                    <div class="city-header-compact">
                        <div class="city-rank">${index === 0 ? '🥈 第2匹配' : '🥉 第3匹配'}</div>
                        <div class="city-info">
                            <div class="city-name-small">${city.city.name}</div>
                            <div class="city-element-small">
                                <span class="element-dot element-${city.element}"></span>
                                ${WUXING_NAMES[city.element]}属性
                            </div>
                        </div>
                        <div class="match-badge">${city.matchRate}%</div>
                    </div>

                    <!-- 五行分析 -->
                    <div class="city-analysis-compact">
                        <p>${city.city.description}</p>
                    </div>

                    <!-- 城市详情 -->
                    <div class="city-details-compact">
                        <div class="detail-row">
                            <span class="detail-label">🏛️</span>
                            <span class="detail-content">${city.city.features.join(' · ')}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">💼</span>
                            <span class="detail-content">${city.city.career.join(' · ')}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">🎨</span>
                            <span class="detail-content">${city.city.lifestyle.join(' · ')}</span>
                        </div>
                    </div>
                </div>
            `).join('')}

            <!-- 底部按钮 -->
            <div class="result-actions">
                <button class="btn btn-primary" id="restart-btn">
                    重新测试
                </button>
            </div>
        </div>
    `;

    // 事件监听
    setTimeout(() => {
        document.getElementById('restart-btn').addEventListener('click', () => {
            // 重置所有状态
            appState.currentPage = 'birth-input';
            appState.birthDate = null;
            appState.innateWuxing = null;
            appState.quizScores = { wood: 0, fire: 0, earth: 0, metal: 0, water: 0 };
            appState.currentQuestion = 0;
            appState.selectedAnswers = [];
            renderPage();
        });
    }, 0);

    return container;
}

// 添加MVP所需的样式
const style = document.createElement('style');
style.textContent = `
    .result-page {
        padding-bottom: 40px;
    }

    .result-header {
        text-align: center;
        margin-bottom: 32px;
    }

    .result-icon {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, var(--wuxing-wood), var(--wuxing-water));
        border-radius: 24px;
        margin: 0 auto 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }

    .city-result {
        text-align: center;
        margin-bottom: 32px;
        padding: 32px;
        background: linear-gradient(135deg, rgba(74, 124, 35, 0.05), rgba(30, 144, 255, 0.05));
        border-radius: var(--radius-lg);
    }

    .city-name {
        font-size: 40px;
        font-weight: 800;
        margin-bottom: 16px;
        background: linear-gradient(90deg, var(--wuxing-wood), var(--wuxing-water));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    .element-tag {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        background-color: var(--color-bg-secondary);
        border-radius: var(--radius-full);
        font-size: 15px;
        font-weight: 600;
    }

    .match-badge {
        margin-top: 16px;
        display: inline-block;
        padding: 8px 20px;
        background: linear-gradient(135deg, var(--color-vermilion), var(--color-gold));
        color: white;
        border-radius: var(--radius-full);
        font-size: 14px;
        font-weight: 600;
    }

    .analysis-section,
    .suggestions-section {
        margin-bottom: 32px;
    }

    .section-title {
        font-size: 20px;
        font-weight: 700;
        color: var(--color-text-primary);
    }

    .score-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 12px;
        margin-bottom: 16px;
    }

    .score-item {
        background: white;
        padding: 16px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
    }

    .score-element {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
        font-weight: 600;
    }

    .score-bar {
        height: 8px;
        background: var(--color-bg-secondary);
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 8px;
    }

    .score-fill {
        height: 100%;
        border-radius: 4px;
        transition: width 0.6s ease;
    }

    .score-value {
        font-size: 18px;
        font-weight: 700;
        color: var(--color-text-primary);
        text-align: right;
    }

    .suggestion-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 12px;
    }

    .suggestion-card {
        background: white;
        padding: 16px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        text-align: center;
    }

    .suggestion-icon {
        font-size: 32px;
        margin-bottom: 8px;
    }

    .suggestion-title {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 8px;
        color: var(--color-text-primary);
    }

    .suggestion-content {
        font-size: 14px;
        color: var(--color-text-secondary);
        line-height: 1.6;
    }

    .suggestion-content span {
        display: inline-block;
        margin: 2px;
        padding: 2px 6px;
        background: var(--color-bg-secondary);
        border-radius: 4px;
    }

    .result-actions {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .element-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }

    .element-wood { background-color: var(--wuxing-wood); }
    .element-fire { background-color: var(--wuxing-fire); }
    .element-earth { background-color: var(--wuxing-earth); }
    .element-metal { background-color: var(--wuxing-metal); }
    .element-water { background-color: var(--wuxing-water); }

    .element-icon {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        font-weight: bold;
        color: white;
        margin: 0 auto;
    }

    .element-result {
        background: linear-gradient(135deg, var(--wuxing-wood), var(--wuxing-water));
        border-radius: var(--radius-lg);
        padding: 32px 24px;
        margin-bottom: 24px;
        color: white;
        text-align: center;
    }

    .result-title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 16px;
        opacity: 0.9;
    }

    .main-element {
        font-size: 48px;
        font-weight: 800;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
    }

    .element-name {
        font-size: 28px;
        font-weight: 700;
    }

    .element-description {
        font-size: 16px;
        opacity: 0.9;
        max-width: 400px;
        margin: 0 auto;
        line-height: 1.5;
    }

    .date-selector {
        display: flex;
        gap: 12px;
        margin-bottom: 24px;
    }

    .date-group {
        flex: 1;
    }

    .date-label {
        display: block;
        margin-bottom: 8px;
        font-size: 15px;
        color: var(--color-text-secondary);
        font-weight: 500;
    }

    .date-input {
        width: 100%;
        padding: 16px 40px 16px 16px;
        background-color: white;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%233D3D3D' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 16px center;
        border: 2px solid var(--color-ink-light);
        border-radius: var(--radius-md);
        font-size: 17px;
        color: var(--color-text-primary);
        text-align: center;
        transition: border-color 0.2s;
        -webkit-appearance: none;
        appearance: none;
    }

    .date-input:focus {
        outline: none;
        border-color: var(--color-vermilion);
    }

    .date-input option.placeholder-option {
        color: var(--color-ink-light);
    }

    /* select默认显示的placeholder颜色 */
    .date-input option[value=""] {
        color: var(--color-ink-light);
    }

    .question-card {
        background-color: white;
        border-radius: var(--radius-lg);
        padding: 24px;
        box-shadow: var(--shadow-md);
    }

    .question-header {
        padding-bottom: 16px;
        border-bottom: 1px solid var(--color-bg-secondary);
    }

    .question-progress {
        font-size: 15px;
        color: var(--color-text-secondary);
        font-weight: 600;
        margin-bottom: 12px;
    }

    .question-text {
        font-size: 20px;
        font-weight: 600;
        line-height: 1.4;
        color: var(--color-text-primary);
    }

    .options-container {
        padding-top: 16px;
    }

    .option {
        padding: 18px 20px;
        background-color: var(--color-bg-secondary);
        border: 2px solid transparent;
        border-radius: var(--radius-md);
        margin-bottom: 12px;
        cursor: pointer;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        gap: 16px;
    }

    .option:hover {
        background-color: var(--color-rice-dark);
        transform: translateX(4px);
        border-color: var(--color-vermilion);
    }

    /* 明确移除焦点样式，防止下一题选项自动高亮 */
    .option:focus {
        outline: none;
        box-shadow: none;
    }

    .option:focus-visible {
        outline: 2px solid var(--color-vermilion);
        outline-offset: 2px;
    }

    .option-label {
        width: 32px;
        height: 32px;
        background-color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        color: var(--color-text-secondary);
        flex-shrink: 0;
    }

    .option-text {
        font-size: 17px;
        color: var(--color-text-primary);
    }

    .card-title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .card-content {
        color: var(--color-text-secondary);
        line-height: 1.6;
    }

    .card-content p {
        margin-bottom: 8px;
    }

    .ritual-transition {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .ritual-content {
        text-align: center;
        padding: 40px 20px;
    }

    .five-elements-ring {
        position: relative;
        width: 280px;
        height: 280px;
        margin: 0 auto 40px;
    }

    @keyframes rotateIn {
        from {
            transform: rotate(0deg) scale(0.5);
            opacity: 0;
        }
        to {
            transform: rotate(360deg) scale(1);
            opacity: 1;
        }
    }

    .ritual-messages {
        max-width: 400px;
        margin: 0 auto 32px;
    }

    .ritual-message {
        font-size: 16px;
        color: var(--color-text-secondary);
        opacity: 0;
        transition: opacity 0.5s;
        padding: 12px;
    }

    .ritual-message.active {
        opacity: 1;
    }

    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(1.05);
            opacity: 0.8;
        }
    }

    .element-ring {
        animation: pulse 2s ease-in-out infinite;
    }

    /* 移动端优化 - 选项卡片 */
    @media (max-width: 480px) {
        .option {
            padding: 14px 16px;
            min-height: 52px;
            border-radius: 10px;
            margin-bottom: 12px;
        }

        .option-text {
            font-size: 16px;
            line-height: 1.4;
        }

        .option-label {
            width: 32px;
            height: 32px;
            font-size: 15px;
        }
    }
`;
document.head.appendChild(style);

// 初始化应用
document.addEventListener('DOMContentLoaded', initApp);
