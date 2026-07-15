# quick-use 缺失映射兜底

## 何时启动

只有同时满足以下条件才读取 quick-use：

1. 正式 Figma 没有定义该部分。
2. UDesign 单组件和基础组合仍不能表达该信息结构或交互。
3. 云随正式 Figma 样板中也没有稳定模式。

不得因为不熟悉 UDesign、觉得自定义更快或想贴近线上截图而启动兜底。

## 读取来源

通用基础设计 Skill 源文件：

- `通用基础设计skill/01A-PC-Demo生成前-文档输入版-发给IDE-Agent.md`
- `通用基础设计skill/04-设计规范约束速查-给AI一起看.md`

从本 reference 文件定位到源目录的相对路径为 `../../通用基础设计skill/`；当前机器绝对路径为 `/Users/zcy/Desktop/AI产品设计/设计skill项目样板间/云随/设计规范skill/通用基础设计skill/`。

按需读取 `04` 的以下部分：设计原则、信息密度、页面间距、AI 工作台、PC 页面模式、文案、空/错状态、AI 结果确认、组件状态和评审分级。生成 PC 页面流程时再读取 `01A`。

## 云随专用覆盖

quick-use 原文中的真实前端组件映射基于旧 `front-spec`。在云随中必须替换为 UDesign：

- 不读取或使用 `front-spec/INDEX.md` 来决定云随代码组件。
- 不输出 `ZcyPageHeader`、`ZcySpin`、`Table.Actions`、`doraemon` 等作为云随真实组件。
- quick-use 只负责补充信息结构、密度、状态、AI 人工确认、文案和研发可落地规则。
- 颜色、字号、圆角和组件默认状态仍以 UDesign 为准。

## 兜底设计流程

1. 写明未映射能力和用户目标。
2. 列出已尝试的 UDesign 单组件与组合组件。
3. 使用 quick-use 收敛第一屏主对象、状态、主任务和主操作。
4. 使用 UDesign Token 和最小基础组件搭建自定义组合，不重绘基础控件。
5. 覆盖 normal/loading/empty/error/disabled/noPermission 及业务特有状态。
6. 输出未映射说明，不把说明放入业务 UI。

```markdown
### quick-use 兜底记录
- 未映射能力：
- UDesign 已尝试组件：
- 无法覆盖原因：
- 使用的 quick-use 规则：
- 临时自定义组合：
- 是否需要设计样板：
- 是否建议回灌云随 Skill：
```

## 回灌条件

- 同一兜底组合在两个真实需求中出现，或成为跨服务稳定模式：加入 `udesign-component-mapping.md`。
- 涉及全新高风险动作、风险判断机制或核心结果交互：标记为设计缺口，先由设计师提供样板。
- 只服务单次需求且不会复用：保留在需求交付，不写入 Skill。
