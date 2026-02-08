#!/bin/bash

# 五行城市测验 - 快速部署脚本

echo "🚀 五行城市测验 - 部署脚本"
echo "================================"

# 检查是否在项目目录
if [ ! -f "index.html" ]; then
    echo "❌ 错误：请在项目根目录运行此脚本"
    exit 1
fi

# 初始化Git仓库
if [ ! -d ".git" ]; then
    echo "📦 初始化Git仓库..."
    git init
    git add .
    git commit -m "Initial commit: 五行城市测验"
    echo "✅ Git仓库已初始化"
else
    echo "✅ Git仓库已存在"
fi

# 检查是否已配置远程仓库
if git remote get-url origin > /dev/null 2>&1; then
    echo "📡 远程仓库已配置：$(git remote get-url origin)"
else
    echo ""
    echo "📝 请按以下步骤操作："
    echo ""
    echo "1. 在GitHub上创建新仓库："
    echo "   https://github.com/new"
    echo ""
    echo "2. 添加远程仓库："
    echo "   git remote add origin https://github.com/你的用户名/wuxing-city-quiz.git"
    echo ""
    echo "3. 推送到GitHub："
    echo "   git push -u origin main"
    echo ""
    echo "4. 部署到Vercel："
    echo "   a. 访问 https://vercel.com"
    echo "   b. 使用GitHub账户登录"
    echo "   c. 导入你的仓库"
    echo "   d. 点击Deploy"
    echo ""
    exit 0
fi

# 检查是否有未提交的更改
if git diff-index --quiet HEAD --; then
    echo "✅ 没有未提交的更改"
else
    echo "📝 发现未提交的更改，正在提交..."
    git add .
    git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"
fi

# 询问是否推送
echo ""
read -p "是否推送到GitHub？(y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "📤 推送到GitHub..."
    git push
    echo "✅ 推送完成"
    echo ""
    echo "🌐 下一步："
    echo "   1. 访问 https://vercel.com"
    echo "   2. 导入你的仓库"
    echo "   3. 点击Deploy"
else
    echo "❌ 已取消推送"
fi

echo ""
echo "✨ 完成！"
