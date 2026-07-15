# 云随内部缺失处理策略

## 基本原则

云随项目 Skill 不再依赖外部通用基础设计 Skill。删除外部通用设计资料后，本 Skill 仍应能独立工作。

缺失处理只允许使用当前 Skill 内部资源：

- [business-model.md](business-model.md)
- [visual-language.md](visual-language.md)
- [page-patterns.md](page-patterns.md)
- [figma-samples.md](figma-samples.md)
- [udesign-component-mapping.md](udesign-component-mapping.md)
- [review-and-delivery.md](review-and-delivery.md)
- [open-questions.md](open-questions.md)

## 允许补全的范围

只有同时满足以下条件，AI 才能在云随内部规则内补全：

1. 核心业务对象、角色、阶段、权限和主流程已经明确。
2. 正式 Figma 或成熟页面模式已经确定主页面骨架。
3. UDesign 已能提供基础组件和交互。
4. 缺失内容只影响非核心细节，不改变核心流程、权限、风险机制或结果决策。

可补全的内容包括：

- 非核心说明文案。
- 局部空态或错误提示文案。
- 单 HTML Demo 中的轻量 SVG 图标或演示插图。
- UDesign 基础组件已有行为的状态补齐。
- 演示控制台等非业务页面内容。

## 必须输出设计缺口的范围

出现以下任一情况时，不得自行补全：

- 新增业务阶段或新角色工作台。
- 新首页骨架或新的核心导航方式。
- 新的高风险、不可逆操作。
- 新的风险判断机制或关键结果交互。
- 新的复杂证据链、筛选、定位或决策模式。
- 正式 Figma 和成熟页面模式无法确定核心布局。
- UDesign 映射不足以表达关键交互。
- 需求与已沉淀业务规则存在实质冲突。

处理方式：按 [design-gap-output.md](../ai-prompts/design-gap-output.md) 输出设计缺口。

## 内部补全流程

1. 写明缺失内容和用户目标。
2. 说明已复用的正式 Figma、成熟页面模式和 UDesign 组件。
3. 判断缺失内容是否属于非核心细节。
4. 若属于非核心细节，使用云随视觉语言和 UDesign Token 最小补全。
5. 若影响核心结构或关键决策，停止生成该部分并输出设计缺口。
6. 在交付总结中记录补全范围，不把临时补全写成正式规则。

```markdown
### 云随内部补全记录
- 缺失内容：
- 已复用的 Figma / 页面模式：
- 已映射的 UDesign 组件：
- 补全方式：
- 是否影响核心流程：否 / 是
- 是否需要设计师补样板：否 / 是
- 是否建议回灌云随 Skill：否 / 是
```

## 回灌条件

- 同一补全组合在两个真实需求中出现，或成为跨服务稳定模式：补充到 [udesign-component-mapping.md](udesign-component-mapping.md) 或 [page-patterns.md](page-patterns.md)。
- 涉及全新高风险动作、风险判断机制或核心结果交互：先由设计师提供正式 Figma 样板，再更新 Skill。
- 只服务单次需求且不会复用：保留在需求交付，不写入 Skill。
