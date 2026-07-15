# UDesign → 云随组件映射

## 映射原则

1. UDesign 是云随基础视觉交互组件与框架的统一名称。
2. 已有 Figma 页面先锁定最终布局和项目视觉，再映射 UDesign 单组件或组合；两者都无法覆盖时才使用 quick-use。
3. “云随组合”是设计模式名称，不代表已有业务组件代码。当前没有业务组件仓库，不得直接 import `Yunsui*`。
4. UDesign 提供基础控件状态，但不得覆盖 Figma 已定义的布局、尺寸和视觉。

## 框架映射

| 云随对象 | UDesign | 建议配置 | 项目规则 |
| --- | --- | --- | --- |
| 云随右侧工作台 | `Drawer` | `placement="right"`, `mode="overlay"`, `size="1200px"`, `showOverlay`, `preventScrollThrough` | 组合名 `YunsuiWorkbench`；顶部品牌栏与内容共同放入 Drawer |
| 工作台结构 | `Layout`, `Layout.Header`, `Layout.Content` | 垂直布局；Header 64px | 不使用独立营销页框架 |
| 顶部品牌栏 | `Layout.Header` + `Space` + `Typography` + `Button` | 局部蓝色渐变；账户按钮与关闭动作 | 组合名 `YunsuiBrandHeader`；Figma 项目专有 |
| 二级功能页头 | `Space` + `Button` + `Typography` + `Tag` | 返回、20px 标题、AI 免责声明 | 组合名 `YunsuiFeatureHeader`，结构遵循 Figma；缺失密度规则才参考 quick-use |
| 主内容区 | `Layout.Content` + `Space` | 24px 外边距，浅灰底，白色容器 | 禁止无意义卡片嵌套 |

## 基础组件映射

| 云随语义 | UDesign | 关键 Props/选择 |
| --- | --- | --- |
| 主/次/危险/文字按钮 | `Button` | `theme`, `variant`, `size`, `loading`, `disabled`; 默认 medium；一个操作区一个 primary |
| 纯图标操作 | `Button` + `Icon` | 方形图标按钮或文字按钮；提供 `aria-label/title` |
| 服务卡片、能力卡 | `Card` | `bordered`, `hoverShadow`, `size="medium"`; 不使用 poster 主题 |
| 状态、来源、AI 回填标签 | `Tag` | `theme`, `variant="light"/"light-outline"`, `size`; 单对象 1–3 个 |
| 持久提示条 | `Alert` | `theme="info/success/warning/error"`, `closeBtn` 按业务需要 |
| 短暂全局反馈 | `Message` | `theme`, 默认 3000ms；不承载复杂业务规则 |
| 空/无记录/不可用 | `Empty` | `type`, `description`, `action`; 使用项目正式插图时替换 image 区域 |
| 局部/整页加载 | `Loading`, `Skeleton` | `loading`, `showOverlay`, `fullscreen` 按层级选择 |
| 上传进度 | `Progress` | `theme="line"`, `percentage`, `status`, `label`; 单文件一条 |
| AI 阶段管线 | `Steps` + `Progress` | `layout="vertical"` 或按 Figma；StepItem status 表示阶段，Progress 表示阶段内进度 |
| 材料上传 | `Upload` | 单文件 `theme="file"`; 多文件 `theme="file-flow"`, `multiple`, `draggable`, `sizeLimit={ size: 2, unit: 'GB' }`, `showUploadProgress` |
| 审查项选择 | `Drawer` + `Checkbox.Group` + `Checkbox` | 右侧抽屉、分组多选、全选/半选、禁用/只读 |
| 结果表格 | `Table`/`PrimaryTable` | `rowKey`, `columns`, `loading`, `empty`, `pagination`; 长文本用 `ellipsis` + Tooltip |
| 结果基础信息 | `Descriptions` | 2–3 列，`size="medium"`, 必要时 `bordered` |
| 结果分组切换 | `Tabs` | 只用于同层内容，不用作装饰 |
| 证据/章节折叠 | `Collapse` | 次要 P2 信息后置；默认展开规则明确 |
| 原文定位 | `Anchor` 或列表选中态 | 长文档锚点名称与标题一致；高亮不改变原文 |
| 翻页 | `Pagination` | 与数据状态联动；默认 medium，按结果量显示 jumper/pageSize |
| 辅助说明 | `Tooltip`/`Popover` | Tooltip 不承载关键业务规则；复杂依据使用 Popover/Drawer |
| 高风险确认 | `Dialog`/`Popconfirm` | 明确影响、主次按钮、提交中、失败和关闭路径 |
| 布局间距 | `Space`, `Divider` | 优先使用 8/12/16/24 节奏，Divider 不替代区块间距 |

## 页面模式映射

| 页面模式 | UDesign 组合 | 云随局部模式 |
| --- | --- | --- |
| P01 首页服务矩阵 | `Layout + Card + Tag + Space` | `YunsuiServiceCard`：可用/不可用、阶段说明、卡片换行 |
| P02 引擎就绪 | `Empty/自定义插图 + Typography + Button + Card` | 一项主操作 + 三张能力卡 |
| P03 阶段不可用 | `Empty + Button` | 明确开放阶段；不能与无权限/失败共用文案 |
| P04 外部请求等待 | `Empty + Alert + Button/Space` | 返回首页、返回业务系统 |
| P05 单文件提取 | `Upload + Alert + Button` | 一次性结果提示和 2GB 常用文档限制 |
| P06 多材料检测 | `Upload(file-flow) + Progress + Steps + Tag + Drawer + Checkbox.Group` | 上传队列、材料处理管线、场景匹配和审查项抽屉 |
| P07 长任务 | `Steps + Progress + Loading + Descriptions` | `YunsuiTaskPipeline`；显示阶段、当前项和业务进度 |
| P08 并发排队 | `Empty/自定义插图 + Tag + Button` | 队列位置、禁止重复提交、取消排队 |
| P09 失败/超时 | `Empty + Alert + Button/Space` | 分开“可重试失败”和“本次已超时失败” |
| P10 结果详情 | `Descriptions + Tabs + Table/List + Collapse + Drawer + Anchor` | 摘要、风险分组、依据、原文定位、人工确认 |
| P11 历史态 | `Alert + Descriptions/Table` 或 `Empty` | 有记录只读；无记录只保留返回 |
| P12 宿主联动 | `Alert/Message + Tag` | 免费使用提示、`AI已回填` 来源标签；使用宿主页面密度 |

## 项目组合的实现边界

以下名称只是待实现的组合模式，不是当前代码组件：

- `YunsuiWorkbench`
- `YunsuiBrandHeader`
- `YunsuiFeatureHeader`
- `YunsuiServiceCard`
- `YunsuiTaskPipeline`
- `YunsuiAiDisclaimer`
- `YunsuiHistoryBanner`
- `YunsuiHostAiFilledTag`

首次实现时用表中 UDesign 组件组合。相同组合在两个真实需求中稳定复用后，才建议封装为业务组件并回灌真实 Props。

## 代码生成清单

交付代码时列出：

```markdown
### Component / Token Usage Manifest
- UDesign 规范版本：当前稳定版
- 使用的 UDesign 组件：
- 使用的 UDesign Token：
- 使用的云随组合模式：
- 对应 Figma 节点：
- quick-use 兜底项：无 / 具体项目
- 未映射项与临时方案：
```

Manifest 只作为交付文本，不得出现在业务 UI。
