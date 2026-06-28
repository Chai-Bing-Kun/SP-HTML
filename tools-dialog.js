// ===== 工具导航弹窗 - 多页切换功能 =====
let toolsCurrentPage = 0;
const toolsTotalPages = 4;

// 工具页面数据配置
const toolsPages = [
    {
        title: '文件加密工具',
        description: '这是一个高级文件加密/解密工具，支持多种加密级别，可以对任何类型的文件进行加密保护。点击下方按钮前往使用。',
        buttonText: '前往加密工具',
        buttonColor: '#e74c3c',
        link: 'lock.html'
    },
    {
        title: '城南中学 班级留念',
        description: '这是为城南中学2024级学生制作的留念网站，记录我们共同的回忆。网站目前仍在建设中，敬请期待更多内容！',
        buttonText: '前往留念网站',
        buttonColor: '#3498db',
        link: 'https://cn-202208-y.pages.dev/'
    },
    {
        title: '页面三（预留）',
        description: '这是第三个页面的预留位置，你可以在这里填写你想要展示的内容。点击下方按钮前往对应页面。',
        buttonText: '前往页面三',
        buttonColor: '#2ecc71',
        link: '#'
    },
    {
        title: '页面四（预留）',
        description: '这是第四个页面的预留位置，你可以在这里填写你想要展示的内容。点击下方按钮前往对应页面。',
        buttonText: '前往页面四',
        buttonColor: '#9b59b6',
        link: '#'
    }
];

function initToolsDialog() {
    // 生成弹窗 HTML
    const dialogHTML = `
    <dialog id="toolsDialog">
        <div class="dialog-header">
            <h2 class="dialog-title">工具导航</h2>
            <button class="close-button" onclick="closeToolsDialog()">×</button>
        </div>
        <div class="tools-pages-container">
            ${toolsPages.map((page, index) => `
            <div class="tools-page ${index === 0 ? 'active' : ''}" data-page="${index}">
                <div class="tools-page-icon">${getPageIcon(index)}</div>
                <h3 class="tools-page-title">${page.title}</h3>
                <p class="tools-page-description">${page.description}</p>
                <button class="tools-page-button" style="background-color: ${page.buttonColor};" onclick="navigateToTool(${index})">
                    ${page.buttonText}
                </button>
            </div>
            `).join('')}
            
            <button class="nav-button tools-prev-button" onclick="prevToolsPage()">❮</button>
            <button class="nav-button tools-next-button" onclick="nextToolsPage()">❯</button>
        </div>
        
        <div class="tools-indicator">
            ${toolsPages.map((_, index) => `
            <div class="tools-indicator-dot ${index === 0 ? 'active' : ''}" data-page="${index}"></div>
            `).join('')}
        </div>
    </dialog>
    `;
    
    // 将弹窗插入到 body 末尾
    document.body.insertAdjacentHTML('beforeend', dialogHTML);
    
    // 绑定指示器点击事件
    document.querySelectorAll('.tools-indicator-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            const pageIndex = parseInt(dot.getAttribute('data-page'));
            changeToolsPage(pageIndex);
        });
    });
}

function getPageIcon(index) {
    const icons = ['🔒', '📄', '⚙️', '🎨'];
    return icons[index] || '📌';
}

function changeToolsPage(pageIndex) {
    const pages = document.querySelectorAll('.tools-page');
    const dots = document.querySelectorAll('.tools-indicator-dot');
    
    pages.forEach((page, index) => {
        page.classList.remove('active', 'prev');
        if (index === pageIndex) {
            page.classList.add('active');
        } else if (index < pageIndex) {
            page.classList.add('prev');
        }
    });
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === pageIndex);
    });
    
    toolsCurrentPage = pageIndex;
}

function prevToolsPage() {
    const newPage = (toolsCurrentPage - 1 + toolsTotalPages) % toolsTotalPages;
    changeToolsPage(newPage);
}

function nextToolsPage() {
    const newPage = (toolsCurrentPage + 1) % toolsTotalPages;
    changeToolsPage(newPage);
}

function showToolsDialog() {
    const dialog = document.getElementById('toolsDialog');
    if (dialog) {
        changeToolsPage(0);
        dialog.showModal();
        document.documentElement.classList.add('dialog-open');
    }
}

function closeToolsDialog() {
    const dialog = document.getElementById('toolsDialog');
    if (dialog) {
        dialog.close();
        document.documentElement.classList.remove('dialog-open');
    }
}

function navigateToTool(pageIndex) {
    const page = toolsPages[pageIndex];
    if (page.link && page.link !== '#') {
        window.location.href = page.link;
    } else {
        alert(`「${page.title}」页面正在准备中，敬请期待！`);
    }
    closeToolsDialog();
}
