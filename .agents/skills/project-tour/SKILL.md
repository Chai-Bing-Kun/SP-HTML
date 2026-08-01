---
name: project-tour
description: '项目导览 / 自动定位。使用场景：询问"某个功能在哪个文件"、"修改某处要看哪个文件"、"项目结构/分类是什么"、"文件在哪"、SP-HTML / Spark 网站的定位问题。通过分类索引 PROJECT-MAP.md 快速把 Agent 导航到目标文件与行号，避免逐个通读文件。'
argument-hint: '描述你想定位的功能或文件（如：下载链接配置、加密工具、主题切换）'
---

# 项目导览（Project Tour）

本技能为 **SP-HTML 工作区**提供"分类 → 定位 → 精准读取"的导航服务，避免 Agent 盲目逐个读文件。

## 何时使用

- 用户问"XX 功能在哪里 / 在哪个文件 / 修改 XX 要看哪个文件"
- 用户问项目整体结构、文件分类、页面关系
- 需要在不通读文件的前提下了解某区域内容

## 流程

1. **读地图**：先读取 [PROJECT-MAP.md](./PROJECT-MAP.md)（工作区根相对路径 `.agents/skills/project-tour/PROJECT-MAP.md`）。
2. **匹配分类**：把用户需求对照「快速定位表」和「文件分类明细」，确定目标文件与区段行号。
3. **精准读取**：只读目标文件的对应行区段；若区段过大，先用 `grep` 精确定位再读小范围。
4. **汇报**：给出 `文件:行号` 定位 + 一句话说明该区域的作用，再询问是否需要展开。

## 硬性约束（必须遵守）

- ⚠️ **禁止通读 `Spark for the web/Spark N.html`**（5~16 MB、单行超 200 万字符）。只读开头 3~5 行确认性质，或跳过。
- ⚠️ **禁止全文读取 `download.html` 的内联 `<style>`（L10-832）**（那是下载页特有样式，约 800 行）。看正文从 L834 开始；下载页**通用**样式（header/导航/footer/dialog/响应式）继承 `spark-design.css`。
- ⚠️ **`spark-design.css` 是主页与下载页（index.html + download.html）共用的深夜模拟桌面设计系统**，改通用样式（header/导航/dialog/按钮/响应式/创意交互）时**应**修改它。（旧版 `style.css` 已于 2026-08 删除，两页均已切换至 spark-design.css）
- ⚠️ **主页创意交互**（桌面 Dock、窗口聚焦/折叠、分阶段开机、滚动 reveal、鼠标光晕）：样式集中在 `spark-design.css` L2457-2731，逻辑在 `index.html` 内联脚本的 `initCursorGlow`/`initWindowFocus`/`initWindowCollapse`/`initDock`/`initScrollReveal` 五个函数（L350-590 区间）+ 分阶段开机 `bootStages`（L542）。改交互逻辑只动 `index.html`，改交互样式只动 `spark-design.css`。
- ⚠️ **旧版 `feedback.js` 已删除**（2026-08），主页反馈逻辑已内联在 `index.html`（`#feedbackDialog` + EmailJS）。
- 本项目是静态网站，无构建步骤；修改后直接刷新浏览器即可验证。

## 常用定位速查

| 想改什么 | 去哪个文件 |
|---|---|
| 下载链接/版本 | `download-links.js` → `SPARK_DOWNLOADS` |
| 工具导航入口 | `tools-dialog.js` → `toolsPages` |
| 主题切换 | `theme.js` |
| 加密工具功能 | `Other-Sites/lock.html`（自包含单文件） |
| 主页/下载页文案与结构 | `index.html` / `download.html`（正文 L834 起，样式见下） |
| 主页（index.html）样式 | `spark-design.css` |
| 主页创意交互（Dock/聚焦/折叠/开机/reveal） | 样式 `spark-design.css` L2457-2731；逻辑 `index.html` 五个 `init*` 函数 + `bootStages` |
| 下载页（download.html）通用样式（header/导航/footer/dialog） | `spark-design.css` |
| 下载页（download.html）特有样式（筛选/列表/版本卡/hero 装饰/action-btn/公告列表） | `download.html` 内联 `<style>` L10-832 |
| 弹窗/按钮/响应式样式（主页） | `spark-design.css` L1196-1619、L1934+ |
| 弹窗/按钮/响应式样式（下载页） | `spark-design.css`（通用）+ `download.html` 内联 L10-832（特有） |
