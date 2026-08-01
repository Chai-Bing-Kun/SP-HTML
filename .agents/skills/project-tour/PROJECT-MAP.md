# SP-HTML 项目地图（PROJECT MAP）

> 本文件是项目的「分类索引 + 定位表」。Agent 定位任务时**先读本文件**，按分类找到目标文件，
> 再只读取目标文件的相关区段（见各行号），**不要逐个文件通读**。

## 项目概述

- **项目类型**：Spark 模拟系统的静态展示网站（纯 HTML/CSS/JS，无构建工具、无框架）
- **技术栈**：原生 HTML + CSS + JS，CDN 依赖（Font Awesome 6.5、Google Fonts Chakra Petch/Noto Sans SC/JetBrains Mono、EmailJS）
- **部署**：GitHub Pages（线上域名 `spark-home.pages.dev`）
- **页面间关系**：`index.html`（主页）与 `download.html`（下载）**共用** `spark-design.css` 深夜模拟桌面设计系统（亮/暗双主题，两页风格已统一）；`Other-Sites/lock.html` 为独立单文件工具页

---

## 一、快速定位表（按需求 → 位置）

| 需求 | 文件 | 位置 |
|---|---|---|
| 首页视觉/文案/结构 | `index.html` | 全文件 664 行，见下方区段表 |
| 下载页视觉/文案/结构 | `download.html` | 1464 行，见下方区段表（样式大部分来自 spark-design.css） |
| 下载链接地址（版本/平台/镜像） | `download-links.js` | `SPARK_DOWNLOADS` 对象（L3 起） |
| 下载对话框筛选逻辑 | `download.html` | L985-1040（对话框）+ 主脚本 L1160 之后 |
| 工具导航弹窗（4 个工具入口） | `tools-dialog.js` | `toolsPages` 配置数组（L4-31） |
| 主题切换（亮/暗） | `theme.js` | 全文件 63 行 |
| 反馈表单提交（EmailJS） | `index.html` | 内联脚本 L422 之后（反馈逻辑已内联，旧版 `feedback.js` 已删除） |
| 公告内容 | `index.html` | `#announcementDialog`（L234-266） |
| 文件加密工具（独立页） | `Other-Sites/lock.html` | 全文件 2826 行，见下方区段表 |
| 网页版 Spark 4/5/6 | `Spark for the web/Spark N.html` | ⚠️ 5~16MB 大文件，见下方警告 |
| 网站设计系统（主页+下载页） | `spark-design.css` | 2745 行，**index.html 与 download.html 共用**，见下方区段表 |
| 当前最新版本号 | `the-latest-version.txt` | 内容：`6.0.0.0`（⚠️ **用户明确保留，另有他用，勿删**；未被网站代码引用） |

---

## 二、文件分类明细

### A. 网站页面（展示层）

#### `index.html`（664 行）— 主页（模拟桌面风）
| 区段 | 行号 | 内容 |
|---|---|---|
| head | L1-27 | 标题、`spark-design.css`、Font Awesome / Chakra Petch+Noto Sans SC+JetBrains Mono / EmailJS CDN；含主题初始化防闪烁脚本 |
| 启动画面 | L28-35 | `#loading` + `.boot-screen`（logo/名称/进度条/状态 + `#bootPercent` 百分比） |
| 背景容器 | L37-58 | `.particles` 粒子 + `#cursorGlow` 鼠标光晕 + `#desktopDock` 桌面 Dock（5 个 `.dock-icon`：top/about/history/install/download） |
| Header 导航 | L59-93 | logo、品牌、4 个导航项、移动端菜单按钮 `#mobileMenuBtn` |
| Hero（启动窗口） | L95-119 | `.window[data-window="top"]`：交通灯标题栏 `spark.exe` + 标语 + 下载/公告按钮 |
| 「什么是 Spark」 | L121-139 | `.window[data-window="about"]` + `.text-card` 项目背景介绍文案 |
| 「为什么要编写 Spark」 | L140-184 | `.window[data-window="history"]` + `.text-card` 长文 + `.timeline` 时间轴（dictionary 1.0→Spark 4/5/6） |
| 「如何获取 Spark」部署指引 | L185-259 | `.window[data-window="install"]` + 手机版 APK / Windows 版 Zip + 运行命令（`#commandPath`/`#examplePath`） |
| Footer（任务栏） | L248-258 | 反馈按钮、主题切换、运行时间统计 `#uptimeDisplay` |
| 公告对话框 | L262-294 | `#announcementDialog`（新版本说明 `.is-new` + 网站公告 `.is-site`） |
| 反馈对话框 | L296-312 | `#feedbackDialog`（姓名/邮箱/问题 + `#submitFeedback`） |
| 内联主脚本 | L314-597 | 移动端菜单、粒子背景、运行时间、EmailJS 反馈提交；**创意交互**：`initCursorGlow`(L350)/`initWindowFocus`(L377)/`initWindowCollapse`(L401)/`initDock`(L429)/`initScrollReveal`(L459)；分阶段开机序列 `bootStages`(L542)，load 时调用 5 个 init(L586-590) |
| 外部脚本引入 | L599-604 | `tools-dialog.js` / `theme.js` |

#### `download.html`（1464 行）— 下载中心（spark 桌面主题）
| 区段 | 行号 | 内容 |
|---|---|---|
| head | L3-9 | 标题、`spark-design.css`（与主页共用）、Chakra Petch+Noto Sans SC+JetBrains Mono 字体、Font Awesome |
| 内联 `<style>` | L10-832 | ⚠️ 仅含下载页**特有**样式（筛选抽屉/下载列表/hero 装饰/版本卡/action-btn 变体/公告列表/响应式），全部基于 spark 设计令牌；基础样式/header/footer/dialog 均继承 spark-design.css |
| 主题初始化 | L836-849 | 与 index.html 相同的防闪烁脚本 |
| 加载动画 + 背景 | L850-856 | `#loading` + `.background-container` + `.particles` |
| Header 导航 | L858-880 | logo、品牌、4 个导航项（active 在「下载 Spark」）+ 汉堡按钮 |
| Hero 区 | L883-899 | 「📥 下载中心」badge + 渐变标题 + 运行/GitHub 按钮 + 3 个浮动装饰 shape |
| Spark 6 卡片 | L901-921 | 版本徽章「最新版」 + 描述 + 运行/下载/GitHub 按钮 |
| Spark 5 卡片 | L923-943 | 「旧版本」徽章 + 已停止更新描述 |
| Spark 4 卡片 | L945-965 | 「旧版本」徽章 + 已停止更新描述 |
| Footer | L968-981 | 与主页同构（spark 任务栏风，含主题切换按钮 + 运行时间） |
| 下载对话框 | L985-1040 | OS 检测提示 + 筛选抽屉（版本/来源/平台）+ 下载列表 |
| 公告对话框 | L1044-1070 | 与主页共享同一公告样式 |
| 脚本引入 | L1079 / L1626 / L1632 | `download-links.js` / `tools-dialog.js` / `theme.js` |
| 主脚本 | L1082-1625 | 渲染下载列表、筛选逻辑、系统检测、粒子、运行时间、加载动画、菜单 |

#### `Other-Sites/lock.html`（2826 行）— 文件加密/解密工具（独立页）
> 完全自包含：内联 CSS + JS，仅引用 Font Awesome CDN。不依赖任何网站样式表 / 脚本。
| 区段 | 行号 | 内容 |
|---|---|---|
| 引导对话框 | L1538-1588 | `#guideOverlay`（5 种模式选择） |
| 步骤引导遮罩 | L1589-1605 | `#stepOverlay` + 右下角折叠式步骤卡片 |
| 文件拖放区 | L1606-1612 | `#dropArea` + 文件选择 |
| 加密选项面板 | L1614-1652 | 4 种加密级别 |
| 三参数密码生成器 | L1653-1682 | `#pwdGenerator`（生成/复制/一键填充） |
| 密码输入 + 强度条 | L1684-1708 | `#passwordInput` + `#strengthBar` + 加密/解密/取消按钮 |
| 密码生成逻辑 | L1762-1790 | `generatePwdFromParams(p1,p2,p3)` 三参数算法 |
| 初始化 | L1817 | `initPage()` |
| 加密级别/强度 | L1837-1906 | `selectEncryptionLevel` / `checkPasswordStrength` |
| 文件处理 | L1937-2111 | 拖放、文件类型判断、大小格式化、状态提示 |
| AES 加密 | L2132-2188 | `encryptFile`（Web Crypto API） |
| AES 解密 | L2189-2248 | `decryptFile` |
| 密钥派生 | L2259-2286 | PBKDF2（100000 次迭代，256 位） |
| 步骤引导引擎 | L2634-3020 | `showGuide` / `setMode` / `showStepHint` / `advanceStep` / `startWalkthrough` |

### B. 样式表

| 文件 | 规模 | 状态 | 关键区段 |
|---|---|---|---|
| `spark-design.css` | 2745 行 | ✅ **使用中（index.html + download.html 共用）** | 设计令牌 L7-86（亮/暗两套变量）；基础样式 L87-151；桌面画布/Bing 壁纸 L152-213；粒子 L183-213；启动画面 L233-323；导航 L419-513；窗口/标题栏/交通灯 L534-772；时间轴 L839-909；部署网格/命令块/下载模拟窗口 L910-1082；Footer/任务栏 L1083-1195；对话框基础 L1196-1313；公告/反馈对话框 L1314-1450；工具导航弹窗 L1451-1619；**下载页共享样式 L1671-1933**（`.loader`、`.download-pages`、`.dl-option-btn`、`.action-button` 渐变按钮）；响应式 L1934-2456；**创意交互系统 L2457-2731**（`.cursor-glow` 鼠标光晕、`.desktop-dock` 桌面图标、`.dock-icon`/`.dock-show`/`dockPop`、`main.has-focus` 窗口聚焦、`.window-collapsed` 折叠、`.boot-percent`、`section.reveal` 滚动显现、含移动端覆盖区块）；`prefers-reduced-motion` L2735 结尾 |

> ⚠️ 旧版 `style.css`（2285 行）已于 2026-08 删除——主页与下载页均已切换至 `spark-design.css`，无需再改动。

### C. JavaScript 脚本

| 文件 | 规模 | 状态 | 说明 |
|---|---|---|---|
| `download-links.js` | 513 行 | ✅ 使用中 | `SPARK_DOWNLOADS` 对象：Spark 5（5.3.4.1/5.3.4.0/5.3.3.1/…）+ Spark 4 各版本的下载地址；每个版本含 `github` 与 `mirror`（gh.bugdey.us.kg 镜像）两个来源；平台含 Android / Windows x64/x32(+安装包) / macOS / Linux arm64/arm32 / 源码包 |
| `tools-dialog.js` | 138 行 | ✅ 使用中 | `toolsPages`(L4-31)：页1 文件加密工具→`Other-Sites/lock.html`、页2 城南中学留念→`https://cn-202208-y.pages.dev/`、页3/页4 预留；`initToolsDialog`(L38) 动态生成弹窗 |
| `theme.js` | 63 行 | ✅ 使用中 | `getPreferredTheme` / `applyTheme` / `toggleTheme` / `initTheme`；localStorage + 系统偏好 |

> 注：旧版 `feedback.js`（未引用的 EmailJS 反馈脚本）与旧版样式表 `style.css` 已删除（2026-08，主页/下载页均已切换至 `spark-design.css`，反馈逻辑内联于 `index.html`）。

### D. 网页版 Spark 程序（与网站展示无关）

> ⚠️ **警告：以下文件体积巨大（5~16 MB），行极长（单行可达 200 万字符）。禁止整文件读取 / grep 全文，否则会撑爆上下文。** 只可读前几行确认性质，或按需精确定位（如搜 `turbowarp` 版本标识）。
> 用户明确说明：这些是「在网页中运行的程序」，与网页展示无关。

| 文件 | 大小 | 说明 |
|---|---|---|
| `Spark for the web/Spark 4.html` | 5.7 MB / 397 行 | TurboWarp 打包的 Scratch 项目（网页版 Spark 4） |
| `Spark for the web/Spark 5.html` | 16.4 MB / 561 行 | 同上（网页版 Spark 5，支持联网功能） |
| `Spark for the web/Spark 6.html` | 12.8 MB / 489 行 | 同上（网页版 Spark 6，最新） |

共同特征：首行注释 `<!-- Created with https://packager.turbowarp.org/ -->`，为自包含的打包产物，修改须通过打包器重新生成。

### E. 静态资源 `img/`

| 文件 | 用途 |
|---|---|
| `img/MAIN.svg` | Spark logo（主页/下载页 header + footer + 开机画面），矢量 SVG 火花图标 |
| `img/loading10.gif` | 加载动画 |
| `img/spark-preview.png` / `img/spark4-preview.png` | Spark 预览图 |
| — | 主页部署指引原本用两张截图（`apk下载介绍.png`/`Windows下载介绍.png`，已删除），现改用 HTML 模拟「下载管理器」小窗口（`index.html` 中 `.download-sim` 组件，样式在 `spark-design.css`） |

### F. 文本杂项

| 文件 | 内容 |
|---|---|
| `the-latest-version.txt` | 最新版本号 `6.0.0.0`（单行；⚠️ **用户明确保留，另有他用，勿删**） |
| `download/致歉声明.txt` | 声明：因找不到 Spark 源代码，无法提供下载链接 |

> 注：`background/linsh.txt`（空白占位）已删除（2026-08）。

### G. 环境/版本控制（勿动）

- `.git/` — Git 仓库
- `.venv/` — Python 虚拟环境（与网站运行无关）

---

## 三、共享依赖关系

```
index.html ──┬── spark-design.css（深夜模拟桌面设计系统，主页+下载页共用）
             ├── tools-dialog.js ──→ Other-Sites/lock.html
             ├── theme.js
             └── (内联) EmailJS 反馈
download.html ─┬── spark-design.css（同上，共用）
               ├── download-links.js
               ├── tools-dialog.js
               ├── theme.js
Other-Sites/lock.html ──（完全自包含，仅 Font Awesome CDN）
```

- 修改**主页**弹窗/样式：`spark-design.css`（对话框 L1196-1450、工具弹窗 L1451-1619、响应式 L1934-2456）
- 修改**主页创意交互**（Dock/聚焦/折叠/开机/reveal/光晕）：样式 `spark-design.css` L2457-2731；逻辑 `index.html` 内联脚本 `initCursorGlow`/`initWindowFocus`/`initWindowCollapse`/`initDock`/`initScrollReveal` + `bootStages` 开机序列
- 修改**下载页**样式：基础/Header/Footer/Dialog 用 `spark-design.css`；**下载页特有样式**（筛选抽屉/下载列表/hero 装饰/版本卡/action-btn/公告列表/下载页响应式）在 `download.html` 内联 `<style>` L12-832
- 修改弹窗逻辑：`tools-dialog.js`（工具导航）、`download.html` 主脚本（下载对话框）
- 新增下载版本：只改 `download-links.js` 的 `SPARK_DOWNLOADS`
- 新增工具入口：只改 `tools-dialog.js` 的 `toolsPages`
