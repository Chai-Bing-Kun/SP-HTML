# SP-HTML 项目地图（PROJECT MAP）

> 本文件是项目的「分类索引 + 定位表」。Agent 定位任务时**先读本文件**，按分类找到目标文件，
> 再只读取目标文件的相关区段（见各行号），**不要逐个文件通读**。
> 📅 最近更新：2026-08-11（行号已按当前文件实测刷新；新增 `.github/`、`.agents/`、`lib/fontawesome/` 等目录收录）

## 项目概述

- **项目类型**：Spark 模拟系统的静态展示网站（纯 HTML/CSS/JS，无构建工具、无框架）
- **技术栈**：原生 HTML + CSS + JS，CDN 依赖（EmailJS；Font Awesome 6.5 已本地化于 `lib/fontawesome`；Google Fonts Chakra Petch/Noto Sans SC/JetBrains Mono）
- **部署**：GitHub Pages（线上域名 `spark-home.pages.dev`）
- **页面间关系**：`index.html`（主页）与 `download.html`（下载）**共用** `spark-design.css` 深夜模拟桌面设计系统（亮/暗双主题，两页风格已统一）；2026-08-11 起**启动画面（仓鼠+分阶段开机）与主题卡片弹窗也已在两页同步**；`Other-Sites/lock.html` 为独立单文件工具页
- **完整文件清单**：见文末「四、完整文件清单」（项目内所有文件一网打尽）

---

## 一、快速定位表（按需求 → 位置）

| 需求 | 文件 | 位置 |
|---|---|---|
| 首页视觉/文案/结构 | `index.html` | 全文件 1850 行，见下方区段表 |
| 下载页视觉/文案/结构 | `download.html` | 全文件 2375 行，见下方区段表（样式大部分来自 spark-design.css） |
| 下载链接地址（版本/平台/镜像） | `download-links.js` | `SPARK_DOWNLOADS` 对象（L3 起） |
| 下载对话框筛选逻辑 | `download.html` | L1622（对话框 HTML）+ 主脚本 L1720-2117 |
| 工具导航弹窗（4 个工具入口） | `tools-dialog.js` | `toolsPages` 配置数组（L4-31） |
| 主题切换（亮/暗） | `theme.js` | 全文件 99 行 |
| 主题卡片弹窗（手机卡片切换器） | `index.html` / `download.html` | HTML L1289 / L1586；CSS 各自内联 style；JS L1781 / L2312 |
| 启动画面（分阶段开机 + 仓鼠） | `index.html` / `download.html` | HTML L995 / L1423；CSS 各自内联 style；JS `bootStages` L1609 / L2245 |
| 反馈表单提交（EmailJS） | `index.html` | 内联脚本 L1688-1779（`emailjs.init` L1689、`emailjs.send` L1752） |
| 公告内容 | `index.html` | `#announcementDialog`（L1324-1358） |
| 文件加密工具（独立页） | `Other-Sites/lock.html` | 全文件 2954 行，见下方区段表 |
| 网页版 Spark 4/5/6 | `Spark for the web/Spark N.html` | ⚠️ 5~16MB 大文件，见下方警告 |
| 网站设计系统（主页+下载页） | `spark-design.css` | 2880 行，**index.html 与 download.html 共用**，见下方区段表 |
| 项目导览 skill 本体 | `.agents/skills/project-tour/` | `SKILL.md`（37 行，流程/约束）+ `PROJECT-MAP.md`（本文件） |
| 项目导览智能体定义 | `.github/agents/project-guide.agent.md` | 26 行，VS Code 自定义 Agent（只读定位，工具 read/search） |
| 当前最新版本号 | `the-latest-version.txt` | 内容：`6.0.0.0`（⚠️ **用户明确保留，另有他用，勿删**；未被网站代码引用） |

---

## 二、文件分类明细

### A. 网站页面（展示层）

#### `index.html`（1850 行）— 主页（模拟桌面风 + 霓虹主题）
| 区段 | 行号 | 内容 |
|---|---|---|
| head | L1-10 | 标题、`spark-design.css`、Font Awesome / Chakra Petch+Noto Sans SC+JetBrains Mono / EmailJS CDN（L10） |
| 内联 `<style>`（霓虹覆盖层） | L11-977 | 霓虹变量 L12-80（`:root` 亮色 + `body.dark-theme` 暗色两套）；boot 霓虹增强 L82-104；reduced-motion L476-505；主题卡片弹窗 CSS L507-731（`.theme-card-modal`/`.tc-*`）；主题切换闪光层 L563；仓鼠加载 CSS L733-894（`.boot-hamster`/`#hamsterLoader` + 12 个 keyframes） |
| 防闪烁脚本 | L981-992 | 主题初始化（防 FOUC） |
| 启动画面 | L995-1030 | `#loading` > `.boot-screen`（SPARK_ + `#hamsterLoader` 仓鼠 + `.boot-bar#bootBarFill` + `.boot-status` + `#bootPercent`） |
| 背景容器 | L1032-1082 | `#cursorGlow` 鼠标光晕 + `.particles` + `#desktopDock` 桌面 Dock（5 个 `.dock-icon`：top/about/history/install/download） |
| Hero（启动窗口） | L1084-1110 | `.window[data-window="top"]`：交通灯标题栏 `spark.exe` + 标语 + 下载/公告按钮 |
| 「什么是 Spark」 | L1111-1129 | `.window[data-window="about"]` + `.text-card` 项目背景介绍文案 |
| 「为什么要编写 Spark」 | L1130-1174 | `.window[data-window="history"]` + `.text-card` 长文 + `.timeline` 时间轴 |
| 「如何获取 Spark」部署指引 | L1175-1275 | `.window[data-window="install"]` + 手机版 APK / Windows 版 Zip + 运行命令 + `.download-sim` 模拟下载窗口 |
| Footer（任务栏） | L1277-1287 | 反馈按钮、`#themePopupBtn` 主题按钮、运行时间 `#uptimeDisplay` |
| 主题卡片弹窗 | L1289-1322 | `#themeCardModal`（`#themeCardSwitch` + 手机卡片 Light/Dark 切换器） |
| 公告对话框 | L1324-1358 | `#announcementDialog`（新版本说明 `.is-new` + 网站公告 `.is-site`） |
| 反馈对话框 | L1360-1375 | `#feedbackDialog`（姓名/邮箱/问题 + `#submitFeedback`） |
| 内联主脚本 | L1377-1660 | 移动端菜单、粒子背景、运行时间、EmailJS 反馈提交；**创意交互**：`initCursorGlow`(L1415)/`initWindowFocus`(L1442)/`initWindowCollapse`(L1466)/`initDock`(L1494)/`initScrollReveal`(L1524)；分阶段开机序列 `bootStages`(L1609)，load 时调用 5 个 init(L1653-1657) |
| 外部脚本引入 | L1666-1671 | `tools-dialog.js` / `theme.js` |
| EmailJS 反馈逻辑 | L1688-1779 | `emailjs.init`(L1689) + `emailjs.send`(L1752)；加载失败兜底 L1727 |
| 主题弹窗 JS | L1781-1840 | `syncThemeSwitchWidgets`/`updateCardTime`/`openThemeModal`/`closeThemeModal`/Escape 关闭/MutationObserver |

#### `download.html`（2375 行）— 下载中心（spark 桌面主题）
| 区段 | 行号 | 内容 |
|---|---|---|
| head | L1-8 | 标题、`spark-design.css`（与主页共用）、Chakra Petch+Noto Sans SC+JetBrains Mono 字体、Font Awesome |
| 内联 `<style>` | L10-1405 | ⚠️ 分两段：**L10-903 下载页特有样式**（筛选抽屉/下载列表/hero 装饰/版本卡/action-btn 变体/公告列表/响应式）；**L907-1404 同步自 index.html（2026-08-11）**：neon 变量、boot 霓虹、主题卡片弹窗 CSS、仓鼠加载 CSS、reduced-motion。基础样式/header/footer/dialog 均继承 spark-design.css |
| 主题初始化 | L1408-1419 | 与 index.html 相同的防闪烁脚本 |
| 加载动画 + 背景 | L1423-1483 | `#loading` boot-screen（SPARK_ + 仓鼠 + 进度条，L1423-1470）+ `.background-container` + `.particles`（L1472-1483） |
| Hero 区 | L1485-1501 | 「📥 下载中心」badge + 渐变标题 + 运行/GitHub 按钮 + 浮动装饰 shape |
| Spark 6 卡片 | L1503-1523 | 版本徽章「最新版」 + 描述 + 运行/下载/GitHub 按钮 |
| Spark 5 卡片 | L1525-1545 | 「旧版本」徽章 + 已停止更新描述 |
| Spark 4 卡片 | L1547-1574 | 「旧版本」徽章 + 已停止更新描述 |
| Footer | L1576-1584 | 与主页同构（spark 任务栏风，含 `#themePopupBtn` 主题按钮） |
| 主题卡片弹窗 | L1586-1620 | `#themeCardModal`（与主页同款手机卡片切换器） |
| 下载对话框 | L1622-1679 | OS 检测提示 + 筛选抽屉（版本/来源/平台）+ 下载列表 |
| 公告对话框 | L1681-1716 | 与主页共享同一公告样式 |
| 脚本引入 | L1718 / L2293 / L2299 | `download-links.js` / `tools-dialog.js` / `theme.js` |
| 主脚本 | L1720-2291 | 渲染下载列表、筛选逻辑、系统检测（`detectOS` L1730）、粒子、运行时间、**分阶段开机 `bootStages`（load 事件 L2245）**、菜单 |
| 主题弹窗 JS | L2312-2364 | `syncThemeSwitchWidgets`/`updateCardTime`/`openThemeModal`/`closeThemeModal`/Escape 关闭/MutationObserver |

#### `Other-Sites/lock.html`（2954 行）— 文件加密/解密工具（独立页）
> 完全自包含：内联 CSS + JS，仅引用 Font Awesome CDN。不依赖任何网站样式表 / 脚本。
| 区段 | 行号 | 内容 |
|---|---|---|
| head（内联 CSS） | L1-1342 | 内联样式（`#passwordInput` L608、响应式 L1265） |
| 引导对话框 | L1345-1394 | `#guideOverlay`（5 种模式选择） |
| 步骤引导遮罩 | L1396-1420 | `#stepOverlay` + 右下角折叠式步骤卡片 |
| 文件拖放区 | L1422-1468 | `#dropArea` + 文件选择 |
| 加密选项面板 | L1470-1502 | 4 种加密级别（AES-256-GCM / PBKDF2-SHA256 徽章 L1416） |
| 三参数密码生成器 | L1504-1530 | `#pwdGenerator`（生成/复制/一键填充） |
| 密码输入 + 强度条 | L1533-1580 | `#passwordInput` + `#strengthBar` + 加密/解密/取消按钮 |
| 密码生成逻辑 | L1581-1635 | `generatePwdFromParams(p1,p2,p3)` 三参数算法 |
| 初始化 | L1636-1655 | `initPage()` |
| 加密级别/强度 | L1656-1706 | `selectEncryptionLevel` / `checkPasswordStrength` |
| 文件处理 | L1709-1950 | 拖放、文件类型判断、大小格式化、状态提示 |
| AES 加密 | L1951-2007 | `encryptFile`（Web Crypto API，AES-GCM） |
| AES 解密 | L2008-2082 | `decryptFile` |
| 密钥派生 | L2083-2452 | PBKDF2（10,000/50,000/100,000 次迭代，256 位） |
| 步骤引导引擎 | L2453-2952 | `showGuide`(L2453)/`setMode`(L2487)/`showStepHint`(L2552)/`advanceStep`(L2756)/`startWalkthrough`(L2802) |

### B. 样式表

| 文件 | 规模 | 状态 | 关键区段 |
|---|---|---|---|
| `spark-design.css` | 2880 行 | ✅ **使用中（index.html + download.html 共用）** | 设计令牌 L7-53（`:root` 亮色）+ L54-98（`body.dark-theme` 暗色）；`html.dialog-open` 锁滚动 L99-186；粒子 L192-224；**启动画面 L225-330**（`#loading` L225、`.loader` L242 兼容旧下载页、`.boot-screen` L257、`.boot-name` L281、`.boot-bar` L295、`.boot-bar-fill` L303、`@keyframes bootFill` L311、`.boot-status` L315）；Header L335-524；移动端菜单按钮 L478；窗口/标题栏/交通灯 L525-786；浮动装饰 L742；时间轴 L787-910；部署网格/命令块 L911-1091；下载模拟窗口 L1092-1154；Footer/任务栏 L1240-1350（`.footer-btn` L1275、`.theme-btn i` L1325）；对话框基础 L1352-1455；公告/反馈对话框 L1456-1592；工具导航弹窗 L1593-1812（`#toolsDialog` L1593、`.tools-pages-container` L1629）；**下载页共享样式 L1813-2077**（`.download-pages` L1813、`.dl-option-btn` L1873、`.version-card` L2021）；响应式 L2078-2602（@media 768px L2078、移动端 Dock/光晕覆盖 L2460-2493）；**创意交互系统 L2603-2880**（`.cursor-glow` L2603、`.desktop-dock` L2619、`.dock-icon` L2637、`main.has-focus` L2737、`.window-collapsed` L2762、`section.reveal` L2785、`.boot-percent` L2798、`@keyframes dockPop` L2812、`prefers-reduced-motion` L2876） |

> ⚠️ 旧版 `style.css`（2285 行）已于 2026-08 删除——主页与下载页均已切换至 `spark-design.css`，无需再改动。

### C. JavaScript 脚本

| 文件 | 规模 | 状态 | 说明 |
|---|---|---|---|
| `download-links.js` | 513 行 | ✅ 使用中 | `SPARK_DOWNLOADS` 对象：Spark 5（5.3.4.1/5.3.4.0/5.3.3.1/…）+ Spark 4 各版本的下载地址；每个版本含 `github` 与 `mirror`（gh.bugdey.us.kg 镜像）两个来源；平台含 Android / Windows x64/x32(+安装包) / macOS / Linux arm64/arm32 / 源码包 |
| `tools-dialog.js` | 138 行 | ✅ 使用中 | `toolsPages`(L4-31)：页1 文件加密工具→`Other-Sites/lock.html`、页2 城南中学留念→`https://cn-202208-y.pages.dev/`、页3/页4 预留；`initToolsDialog`(L38) 动态生成弹窗 |
| `theme.js` | 99 行 | ✅ 使用中 | `getPreferredTheme` / `applyTheme` / `applyThemeWithAnimation`（闪光层）/ `toggleTheme` / `updateThemeButton`（引用 `#themeToggle`；index/download 页已改用 `#themePopupBtn`，文案由各自内联 `syncThemeSwitchWidgets` 维护）/ `initTheme`；localStorage + 系统偏好 |

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
| `img/MAIN.svg` | Spark logo（主页/下载页 header + footer + 开机画面），矢量 SVG 火花图标（唯一保留的图片） |
| — | 已删除（2026-08-11，全量扫描确认零引用）：`MAIN.jpg`（logo 位图版后备）、`loading10.gif`（旧加载动画，启动画面已改用 CSS 仓鼠动画）、`spark-preview.png` / `spark4-preview.png`（预览图） |
| — | 主页部署指引原本用两张截图（`apk下载介绍.png`/`Windows下载介绍.png`，已删除），现改用 HTML 模拟「下载管理器」小窗口（`index.html` 中 `.download-sim` 组件，样式在 `spark-design.css` L1092） |

### F. 文本杂项

| 文件 | 内容 |
|---|---|
| `the-latest-version.txt` | 最新版本号 `6.0.0.0`（单行；⚠️ **用户明确保留，另有他用，勿删**） |
| `download/致歉声明.txt` | 声明：因找不到 Spark 源代码，无法提供下载链接 |

> 注：`background/linsh.txt`（空白占位）已删除（2026-08）；`background/` 目录现为空（保留）。

### G. 第三方库 / Agent 配置 / 环境（勿动）

| 路径 | 说明 |
|---|---|
| `lib/fontawesome/css/all.min.css` | Font Awesome 6.5 本地化样式（8 行压缩） |
| `lib/fontawesome/webfonts/` | FA 字体文件 ×8（fa-brands/regular/solid/v4compatibility 的 ttf+woff2，二进制） |
| `.github/agents/project-guide.agent.md` | VS Code 自定义 Agent「项目导览」定义（26 行，只读定位用） |
| `.agents/skills/project-tour/` | 本 skill 本体：`SKILL.md`（37 行）+ `PROJECT-MAP.md`（本文件） |
| `.git/` | Git 仓库 |
| `.venv/` | Python 虚拟环境（与网站运行无关） |

---

## 三、共享依赖关系

```
index.html ──┬── spark-design.css（深夜模拟桌面设计系统，主页+下载页共用）
             ├── tools-dialog.js ──→ Other-Sites/lock.html
             ├── theme.js
             └── (内联) EmailJS 反馈 + 主题卡片弹窗 + 分阶段开机
download.html ─┬── spark-design.css（同上，共用）
               ├── download-links.js
               ├── tools-dialog.js
               ├── theme.js
               └── (内联) 主题卡片弹窗 + 分阶段开机（2026-08-11 同步自 index.html）
Other-Sites/lock.html ──（完全自包含，仅 Font Awesome CDN）
```

- 修改**主页**弹窗/样式：`spark-design.css`（对话框 L1352-1592、工具弹窗 L1593-1812、响应式 L2078-2602）
- 修改**主页创意交互**（Dock/聚焦/折叠/开机/reveal/光晕）：样式 `spark-design.css` L2603-2880；逻辑 `index.html` 内联脚本 `initCursorGlow`/`initWindowFocus`/`initWindowCollapse`/`initDock`/`initScrollReveal` + `bootStages` 开机序列（L1415-1657）
- 修改**加载条 / 主题卡片**（⚠️ 两页已同步，改一处须同步另一处）：`index.html` 启动画面 L995-1030、主题卡片 L1289-1322；`download.html` 启动画面 L1423-1470、主题卡片 L1586-1620；CSS 各自内联 style（index L11-977；download L907-1404）；JS 各自内联（index L1781-1840；download L2312-2364）。**注意 `--neon*` 变量不在 spark-design.css 中，由两页内联 style 各自维护**
- 修改**下载页**样式：基础/Header/Footer/Dialog 用 `spark-design.css`；**下载页特有样式**（筛选抽屉/下载列表/hero 装饰/版本卡/action-btn/公告列表/下载页响应式）在 `download.html` 内联 `<style>` L10-903
- 修改弹窗逻辑：`tools-dialog.js`（工具导航）、`download.html` 主脚本（下载对话框）
- 新增下载版本：只改 `download-links.js` 的 `SPARK_DOWNLOADS`
- 新增工具入口：只改 `tools-dialog.js` 的 `toolsPages`

---

## 四、完整文件清单（2026-08-11 扫描）

> 项目根：`d:\桌面文件\Spark\SP-HTML`。以下为项目内**全部**文件（不含 `.git/`、`.venv/` 内部）。
> 行数为实测（PowerShell `Measure-Object` 对含长行的文件可能偏小，以 grep/编辑器行号为准）。

| 路径 | 类型 | 规模 | 归属 / 说明 |
|---|---|---|---|
| `index.html` | 页面 | 1850 行 | 主页（模拟桌面 + 霓虹） |
| `download.html` | 页面 | 2375 行 | 下载中心 |
| `Other-Sites/lock.html` | 页面 | 2954 行 | 文件加密工具（独立单文件） |
| `Spark for the web/Spark 4.html` | 页面 | 5.7 MB / 397 行 | TurboWarp 产物 ⚠️ 勿读全文 |
| `Spark for the web/Spark 5.html` | 页面 | 16.4 MB / 561 行 | TurboWarp 产物 ⚠️ 勿读全文 |
| `Spark for the web/Spark 6.html` | 页面 | 12.8 MB / 489 行 | TurboWarp 产物 ⚠️ 勿读全文 |
| `spark-design.css` | 样式 | 2880 行 | 设计系统（主页+下载页共用） |
| `download-links.js` | 脚本 | 513 行 | 下载链接数据 |
| `tools-dialog.js` | 脚本 | 138 行 | 工具导航弹窗 |
| `theme.js` | 脚本 | 99 行 | 主题切换 |
| `the-latest-version.txt` | 文本 | 1 行 | 版本号 `6.0.0.0` ⚠️ 勿删 |
| `download/致歉声明.txt` | 文本 | 4 行 | 下载致歉声明 |
| `img/MAIN.svg` | 资源 | 36 行 | Spark logo 矢量版（唯一保留的图片；其余 4 个 img 文件已于 2026-08-11 删除，见 E 部分） |
| `lib/fontawesome/css/all.min.css` | 库 | 8 行 | Font Awesome 6.5 样式 |
| `lib/fontawesome/webfonts/` | 库 | 8 个字体文件 | fa-brands/regular/solid/v4compatibility（ttf+woff2） |
| `.github/agents/project-guide.agent.md` | 配置 | 26 行 | 项目导览 Agent 定义 |
| `.agents/skills/project-tour/SKILL.md` | skill | 37 行 | 本 skill 流程/约束 |
| `.agents/skills/project-tour/PROJECT-MAP.md` | skill | 本文件 | 本地图 |
| `background/` | 目录 | 空 | 原 `linsh.txt` 已删（2026-08） |
| `.git/` | 环境 | — | Git 仓库（勿动） |
| `.venv/` | 环境 | — | Python 虚拟环境（勿动） |
