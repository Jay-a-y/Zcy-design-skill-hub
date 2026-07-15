# 云随视觉语言

## 规范来源

- 正式 Figma 决定已有页面的最终布局、尺寸、项目视觉和组合关系。
- UDesign 决定基础视觉交互组件与框架行为；云随未修改全局主题。
- quick-use 只补齐正式 Figma 和 UDesign 均未定义的部分。
- UDesign 是本项目对这套基础设计规范的统一名称，交付与讨论中不再使用其他名称。

## 颜色

优先使用 UDesign 语义变量，不新建同义色：

| 用途 | UDesign Token | 默认值/说明 |
| --- | --- | --- |
| 主操作、选中、关键链接 | `--ud-brand-color` | `#0052D9` |
| Hover | `--ud-brand-color-hover` | `#366EF4` |
| Active | `--ud-brand-color-active` | `#003CAB` |
| Focus 浅底 | `--ud-brand-color-focus` | `#D9E1FF` |
| Disabled | `--ud-brand-color-disabled` | `#B5C7FF` |
| 品牌浅底 | `--ud-brand-color-light` | `#F2F3FF` |
| 成功 | `--ud-success-color` | `#2BA471` |
| 警告 | `--ud-warning-color` | `#E37318` |
| 错误 | `--ud-error-color` | `#D54941` |
| 主文字 | `--ud-text-color-primary` | 黑色 90% |
| 次文字 | `--ud-text-color-secondary` | 黑色 60% |
| 说明/占位 | `--ud-text-color-placeholder` | 黑色 40% |
| 容器 | `--ud-bg-color-container` | `#FFF` |
| 工作区浅灰底 | `--ud-bg-color-secondarycontainer` | `#F3F3F3` |
| 分割线 | `--ud-component-stroke` | `#E7E7E7` |
| 常规边框 | `--ud-component-border` | `#DCDCDC` |

云随顶部品牌栏是 Figma 项目样式：`#3154E5 → #4769F3` 水平渐变，仅用于 64px 工作台品牌栏，不扩散到按钮和结果页背景。

## 字体

中文字体栈：`PingFang SC, Microsoft YaHei, Arial, sans-serif`。

| 层级 | 字号/行高 | 云随用途 |
| --- | --- | --- |
| 辅助正文 | 12/20 | 文件大小、进度补充、次级元数据 |
| 常规正文 | 14/22 | 表单、列表、说明、按钮 |
| 强正文 | 16/24 | 重要摘要、账户入口 |
| 小标题 | 16/24，600 | 卡片/区块标题 |
| 页面标题 | 20/28，600 | 二级功能页标题 |
| 场景主标题 | 24/32，600 | 引擎就绪、空状态、失败状态 |
| 首页主标题 | 36/44，600 | 当前阶段 |

## 固定框架与间距

- Figma 基准画板：1440×900；云随工作台宽 1200px，从宿主右侧展开。
- 品牌栏：64px；二级功能页头：60px。
- 主内容外边距：16px（部分首页区域为 40px，按对应 Figma 节点）。
- 常规区块间距：16–24px；区块标题与内容：8–12px；按钮组：8px；标签组：4–8px。
- 使用 `2 / 4 / 6 / 8 / 12 / 16 / 20 / 24 / 28 / 32 / 36 / 40 / 48 / 56 / 64 / 72px` 间距序列。
- 已有 Figma 节点优先使用节点实测尺寸，不用默认间距覆盖。

## 圆角、边框和阴影

| 用途 | 数值 |
| --- | --- |
| 按钮、输入、小标签 | UDesign 默认圆角 |
| 普通白色内容容器 | 6px |
| 首页服务卡片 | 16px，按 Figma |
| 上传拖拽区域 | 1px 虚线，仅上传/拖拽使用 |
| 普通边框 | 1px `#DCDCDC` |
| 首页交互卡片 | 仅按 Figma 使用轻阴影 |
| 普通内容卡片 | 不增加持续阴影 |

## 图标与插图

- 使用 UDesign Icon，或正式 Figma/品牌资产。
- 不用 emoji 或临时字符模拟关键操作图标。
- 常规图标 16px，强提示 24px；图标与文字间距 4px 或 6px。
- 空状态/失败页允许正式项目插图，同时必须提供原因和下一步。

## 交互状态

- Button、Input、Checkbox、Tag 等保留 UDesign 的 normal/hover/focus/active/disabled/loading 行为。
- 短暂反馈使用 Message；持续业务提示使用 Alert。
- 高风险确认使用 Dialog 或 Popconfirm，不得只依赖红色。
- 页面 Loading 同时表现当前业务阶段和 Progress，不能只有转圈。
- 不为“AI 感”增加随机渐变、玻璃拟态或发光动效。

## 单 HTML 实现约束

- 通过内联 CSS Token 实现 UDesign 语义，不加载外部框架。
- 图标与必要插图使用内联 SVG；不得依赖会过期的 Figma 临时资源地址。
- 以 1440×900 为基准等比缩放，确保分享后直接双击可查看。
