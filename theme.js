// theme.js

// 切换主题的函数
function toggleTheme() {
    const body = document.body;
    const themeToggleButton = document.getElementById('themeToggle');
    
    body.classList.toggle('dark-theme');

    // 保存用户的主题选择到 localStorage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeToggleButton.textContent = '亮色主题'; // 更新按钮文本为“亮色主题”
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleButton.textContent = '暗色主题'; // 更新按钮文本为“暗色主题”
    }
}

// 页面加载时应用保存的主题或浏览器默认主题
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    const themeToggleButton = document.getElementById('themeToggle');
    
    // 检测用户浏览器的默认主题
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (savedTheme === 'dark' || (savedTheme === null && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-theme');
        themeToggleButton.textContent = '亮色主题'; // 设置初始按钮文本为“亮色主题”
    } else {
        themeToggleButton.textContent = '暗色主题'; // 设置初始按钮文本为“暗色主题”
    }
};

// 绑定切换主题按钮的点击事件
document.getElementById('themeToggle').addEventListener('click', toggleTheme);