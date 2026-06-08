// theme.js

// 切换主题的函数
function toggleTheme() {
    const body = document.body;
    const themeToggleButton = document.getElementById('themeToggle');
    
    body.classList.toggle('dark-theme');

    // 保存用户的主题选择到 localStorage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeToggleButton.textContent = '亮色主题';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleButton.textContent = '暗色主题';
    }
}

// 应用已保存的主题（在 DOM 加载完成后立即执行，不依赖 window.onload）
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeToggleButton = document.getElementById('themeToggle');
    
    if (!themeToggleButton) return;

    // 检测用户浏览器的默认主题
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (savedTheme === 'dark' || (savedTheme === null && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-theme');
        themeToggleButton.textContent = '亮色主题';
    } else {
        themeToggleButton.textContent = '暗色主题';
    }
}

// 使用 DOMContentLoaded 事件来初始化主题，避免覆盖其他文件的 window.onload
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('themeToggle');
    if (themeToggleButton) {
        // 应用已保存的主题
        applySavedTheme();
        // 绑定切换主题按钮的点击事件
        themeToggleButton.addEventListener('click', toggleTheme);
    }
});