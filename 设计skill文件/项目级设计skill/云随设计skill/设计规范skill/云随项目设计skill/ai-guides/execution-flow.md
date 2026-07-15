# AI 执行流程

本文件规定 AI 使用 `yunsui-design` 时的执行顺序。生成 Demo 前必须先判断覆盖范围，禁止上来直接写页面。

## 1. 读取需求

先读取用户提供的需求文档、业务诉求、测试数据、真实文件、现有 Demo 或代码。只在缺失信息会显著改变业务结果时提出一个聚焦问题。

## 2. 提取业务上下文

从需求中提取：

- 用户角色。
- 项目阶段。
- 云随服务。
- 页面目标。
- 页面状态。
- 进入条件。
- 完成条件。
- 主要操作。
- 关键业务字段和测试数据。

产品经理或研发不需要提前判断 L0～L3。

## 3. 执行覆盖范围检查

按 [coverage-check.md](coverage-check.md) 判断需求属于：

- 已覆盖。
- 部分覆盖。
- 未覆盖/全新复杂模式。

只有覆盖判断完成后，才能进入页面生成。

## 4. 查找正式 Figma 和成熟模式

优先读取：

- [figma-samples.md](../knowledge/figma-samples.md)
- [page-patterns.md](../knowledge/page-patterns.md)
- [business-model.md](../knowledge/business-model.md)

已有正式 Figma 样板时，Figma 决定页面布局、层级、尺寸、项目视觉和组合关系。线上 AI 截图只作为框架参考，不作为正式视觉依据。

## 5. 映射 UDesign 组件

按 [udesign-component-mapping.md](../knowledge/udesign-component-mapping.md) 将基础控件、状态和交互映射为 UDesign。UDesign 负责基础视觉交互组件和框架实现，不得覆盖正式 Figma 页面。

## 6. 判断是否允许内部补全

只有同时满足以下条件才读取 [fallback-policy.md](../knowledge/fallback-policy.md)：

- 正式 Figma 没有定义该部分。
- 云随成熟页面模式没有覆盖。
- UDesign 单组件和基础组合不能表达该信息结构或交互。
- 缺失部分不是核心页面结构、权限、风险机制或关键流程。

云随内部补全策略只处理非核心缺失，并且必须记录补全范围。它不读取外部通用基础设计 Skill。

## 7. 生成单 HTML Demo 或输出设计缺口

- 已覆盖：生成可离线运行的单 HTML Demo 或修改后的文件。
- 部分覆盖：生成成熟部分，非核心缺失可按云随内部补全策略处理；核心缺失必须列为设计缺口。
- 未覆盖/全新复杂模式：停止自行设计核心页面，按 [design-gap-output.md](../ai-prompts/design-gap-output.md) 输出设计缺口。

单 HTML Demo 用于验证和沟通，不等同于生产代码。除非用户明确要求，不创建 React、Vite、Next.js、Vinext 或其他工程。

## 8. 执行 P0/P1/P2 自检

按 [review-and-delivery.md](../knowledge/review-and-delivery.md) 执行自检：

- P0：阻断问题。
- P1：重要问题。
- P2：优化问题。

发现 P0 时不应宣称通过。

## 9. 输出交付总结

按 [output-rules.md](output-rules.md) 输出：

- Demo 或修改文件。
- 已覆盖页面和状态。
- 关键假设。
- 产品待确认项。
- 云随内部补全范围。
- 设计缺口。
- P0/P1/P2 结论。
