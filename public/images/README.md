# 项目图片目录说明

图片统一放在 `public/images` 下，按项目分子目录。代码中通过**站点根路径**引用（Next 从 `public` 提供静态资源，URL 不包含 `public`），例如：

- `/images/ai-platform/design-before-after.jpg`
- `/images/ai-agent/architecture-diagram.jpg`
- `/images/efficiency/rag-mechanism.jpg`

请将真实图片放入对应项目子目录，文件名与各项目目录下 README 中列出的名称一致（扩展名可用 `.jpg`、`.png`、`.webp` 等，**与代码中的 `src` 路径一致即可**；若你用 `.png`，把对应页里的 `src` 改成 `.png`）。图片缺失时页面会显示占位样式，不会报错。

## 推荐图片尺寸

页面内容区最大宽度约 **1280px**（大屏）。以下为建议尺寸，满足清晰度即可，不必完全一致；推荐用 **2x（如 2560px 宽）** 以适配高分屏。

| 项目 | 图片 | 展示比例/高度 | 推荐尺寸（宽×高） |
|------|------|----------------|-------------------|
| **ai-platform** | design-before-after | 全宽，高约 500px | **2560×1000** 或 1280×500 |
| **ai-platform** | orchestration-before-after | 全宽，高约 400px | **2560×800** 或 1280×400 |
| **ai-agent** | architecture-diagram | 全宽，最小高 400px | **2560×1440** 或 1280×720 |
| **ai-agent** | fullscreen-layout | 16∶9 | **1920×1080** 或 1280×720 |
| **ai-agent** | sidebar-layout | 16∶9 | **1920×1080** 或 1280×720 |
| **efficiency** | rag-mechanism / prompt-handbook | 16∶9 | **1920×1080** 或 1280×720 |
| **efficiency** | training-session | 21∶9，最大宽约 896px | **1920×823** 或 1280×549 |
| **efficiency** | design-spec-training / training-materials | 4∶3 | **1280×960** 或 1024×768 |

- **格式**：PNG / JPG / WebP 均可，与代码中 `src` 扩展名一致。
- **体积**：单张建议 &lt; 500KB～1MB，可先用工具压缩再放入。

## 目录结构

- `ai-platform/` — AI 开放平台体验重构
- `ai-agent/` — 智能化 Chat 组件库
- `efficiency/` — 跨团队项目支撑与设计能力推广
