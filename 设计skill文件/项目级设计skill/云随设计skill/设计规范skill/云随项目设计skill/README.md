# 乐采云随项目级设计 Skill

当前版本：0.1.2  
当前状态：Pilot / 试用版

乐采云随项目级设计 Skill 用于让产品经理或研发把云随需求文档、业务诉求或测试数据交给 AI 后，在已沉淀范围内生成可直接打开的单 HTML Demo，并在未覆盖复杂模式时输出设计缺口。

## 适用场景

- 基于云随成熟页面模式生成单 HTML Demo。
- 评审已有云随 Demo 是否符合项目规则。
- 识别需求是否缺少正式 Figma 样板、业务规则或 UDesign 映射。
- 帮助设计师根据稳定反馈维护云随项目级 Skill。
- 为后续内部 Skill 集合页提供版本、说明和元数据。

## 不适用场景

- 生成正式生产代码或可直接上线的前端工程。
- 替代设计师完成全新复杂核心页面设计。
- 在缺少核心样板时自由创造风险判断机制、权限体系或关键结果交互。
- 复制其他项目的业务知识到云随。
- 作为云随完整设计百科或产品说明书。

## 核心工作流程

1. 设计师先维护云随业务规则、正式 Figma 样板、成熟页面模式和 UDesign 映射。
2. 产品经理或研发提供 Skill、本次需求文档、业务诉求或测试数据。
3. AI 自动执行覆盖范围检查。
4. 已覆盖需求直接生成单 HTML Demo。
5. 部分覆盖需求只允许非核心内容使用云随内部补全策略。
6. 未覆盖或全新复杂模式输出设计缺口，回流设计师补充样板或规则。
7. 重复稳定问题经设计师确认后进入新版本。

## 输入内容

- 云随项目级设计 Skill 文件夹。
- 本次需求文档、业务诉求、原型说明或测试数据。
- 可选：真实招标文件、业务字段、现有 Demo、截图或必须覆盖的页面状态。

产品经理或研发不需要自行判断 L0～L3，不需要重新整理 Skill 已收录的 Figma 节点，也不需要指定 UDesign 组件。

## 输出内容

- 可运行的单 HTML Demo 或修改后的文件。
- 已覆盖的页面和状态。
- 关键假设与产品待确认项。
- 云随内部补全范围。
- 设计缺口。
- P0/P1/P2 自检结论。

## 快速开始

1. 按 [installation.md](docs/installation.md) 放置 Skill。
2. 阅读 [usage.md](docs/usage.md)。
3. 使用 [generate-demo.md](ai-prompts/generate-demo.md) 中的提示词模板。
4. 把需求文档、业务诉求和测试数据一起交给 AI。
5. 查看 AI 输出的 Demo、P0/P1/P2 结论和设计缺口。

## 目录说明

- `SKILL.md`：唯一正式执行入口。
- `agents/openai.yaml`：OpenAI/Codex Skill 展示与默认提示配置。
- `ai-guides/`：AI 执行、覆盖检查、来源优先级和输出规则。
- `ai-prompts/`：生成、评审、设计缺口和更新 Skill 的可复制提示词。
- `knowledge/`：云随业务、视觉、Figma 样板、页面模式和交付规则。
- `assets/`：预览、截图、流程图、UDesign 官方 SVG 图标和 Empty 状态插图资产。
- `examples/`：试用案例材料。
- `docs/`：安装、使用、试用、反馈和架构说明。

## 单 HTML Demo 与生产代码的区别

单 HTML Demo 用于产品验证、研发沟通和设计评审。它强调可离线打开、流程可跑通、状态可理解，不等同于正式生产代码。除非用户明确要求工程化实现，本 Skill 不创建 React、Vite、Next.js、Vinext 或其他前端工程。

## 版本与反馈

- 当前版本见 [VERSION](VERSION)。
- 更新记录见 [CHANGELOG.md](CHANGELOG.md)。
- 反馈方式见 [feedback-guide.md](docs/feedback-guide.md)。

只有重复出现、形成稳定模式、正式业务规则变化或新增正式 Figma 样板时，才建议更新 Skill。

## 内部使用说明

内部 Skill 集合页可读取 [manifest.json](manifest.json)、[README.md](README.md)、[CHANGELOG.md](CHANGELOG.md) 和 `agents/openai.yaml` 展示版本、状态和说明。集合页未来只负责展示、下载、版本和反馈，不承担在线生成。

assets 中的截图、预览和流程图只作为参考。正式设计事实仍以 [figma-samples.md](knowledge/figma-samples.md) 登记的 Figma 节点为准，旧截图不得覆盖正式 Figma。图标资产来自 UDesign / TDesign Icons 官方 SVG 快照，生成单 HTML Demo 时只内联本次实际用到的图标。缺少正式 Figma 插图时，普通空状态可使用 Skill 内置 UDesign Empty 状态插图保持 Demo 完整性。
