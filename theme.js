// theme.js - 主题切换功能

// 获取正确的主题：优先使用用户保存的偏好，其次使用系统主题
function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
    }
    // 检测系统主题
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// 更新主题切换按钮的文字
function updateThemeButton(theme) {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    if (theme === 'dark') {
        btn.innerHTML = '<i class="fas fa-sun"></i> 亮色主题';
    } else {
        btn.innerHTML = '<i class="fas fa-moon"></i> 暗色主题';
    }
}

// 应用主题到页面
function applyTheme(theme, updateButton = true) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
    if (updateButton) {
        updateThemeButton(theme);
    }
}

// 切换主题
function toggleTheme() {
    const isDark = document.body.classList.contains('dark-theme');
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
}

// 初始化主题（由页面在内联脚本中调用）
function initTheme() {
    const theme = getPreferredTheme();
    applyTheme(theme);
    
    // 绑定切换按钮
    const btn = document.getElementById('themeToggle');
    if (btn) {
        btn.addEventListener('click', toggleTheme);
    }
    
    // 监听系统主题变化（仅当用户没有保存过偏好时）
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === null) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            applyTheme(e.matches ? 'dark' : 'light');
            // 重新绑定按钮事件（因为按钮可能被重新渲染）
            const toggleBtn = document.getElementById('themeToggle');
            if (toggleBtn) {
                toggleBtn.removeEventListener('click', toggleTheme);
                toggleBtn.addEventListener('click', toggleTheme);
            }
        });
    }
}