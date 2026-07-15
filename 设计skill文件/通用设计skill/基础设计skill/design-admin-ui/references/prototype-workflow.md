# Prototype and demo workflow

## Contents

- Delivery modes
- Minimum product input
- Product-to-screen workflow
- Prototype mode
- Interactive demo mode
- State and data contract
- Verification and handoff
- Ready-to-use prompts

## Delivery modes

Choose the lightest artifact that answers the decision.

| Mode | Deliverable | Use for |
|---|---|---|
| Static prototype | Editable HTML/code plus rendered PNG screens | Layout, hierarchy, visual direction, stakeholder review |
| Interactive demo | Runnable HTML/React app plus screenshots | Flow validation, usability review, development handoff |
| Screen specification | Page map, annotated layouts, tokens, states | Early product definition or restricted environments |
| Implementation | Production-oriented code in the existing stack | Approved designs and scoped feature work |
| Visual audit | Prioritized issues and corrected artifact | Existing product consistency and quality |

Default to an interactive demo when the user asks to “做原型”, “出 Demo”, “设计一个后台页面”, or provides a PRD and a writable workspace. Use a static prototype when only visual approval is needed or no runtime is available.

## Minimum product input

Proceed with reasonable assumptions when some fields are missing. State the assumptions in the handoff.

- Product/feature name
- Primary user role
- Primary task and success outcome
- Core objects and fields
- Required actions and permissions
- Known states or business rules
- Target platform and viewport
- Existing brand, codebase, or component library

Do not block on minor missing details. Use realistic enterprise defaults and mark them as editable assumptions.

## Product-to-screen workflow

1. Rewrite the request as one primary user job and 3–7 supporting tasks.
2. Map the smallest complete flow: entry → inspect/filter → act → confirm → feedback → recovery.
3. Create a screen inventory. Avoid adding screens that do not change user context or decision.
4. Define data shape, permissions, and state matrix before visual styling.
5. Choose components by reading task from [component-source.md](component-source.md) and the focused visual references.
6. Establish shell, page hierarchy, content regions, and action priority.
7. Build the happy path first, then loading, empty, no-result, validation, error, disabled, no-permission, and destructive-confirmation states.
8. Render and inspect the artifact at target size; fix overflow, alignment, focus, and interaction problems.
9. Deliver the artifact with assumptions and a concise path to review it.

## Prototype mode

- Prefer HTML/CSS or existing application code over AI-generated raster UI; it preserves alignment and editability.
- If the user explicitly requests Figma, use the available Figma workflow and reproduce the same tokens and component rules.
- If no framework is specified and the prototype is one or two screens, a self-contained HTML file is acceptable.
- For multi-screen or stateful flows, prefer React with the existing project stack; use Vite only when starting a new local demo and no stack exists.
- Use realistic Chinese labels, names, amounts, dates, statuses, and row counts. Avoid lorem ipsum.
- Capture at least the primary screen and any materially different overlay/state.
- Keep annotation outside the UI screenshot unless the user explicitly requests a wireframe.

## Interactive demo mode

Make the critical path operable:

- Navigation changes the visible context.
- Filters update results and can reset.
- Primary actions open the correct form, drawer, modal, or next step.
- Forms validate and preserve entered values.
- Submit actions show loading and success/error feedback.
- Tables support the interactions promised by the UI: sort, select, paginate, expand, or row actions.
- Destructive actions use proportionate confirmation.
- Empty/no-result/error states include recovery.

Mock data locally unless the user provides an API. Do not invent live backend integration as part of a visual prototype.

## State and data contract

For every primary region, decide whether these states apply:

| State | Required behavior |
|---|---|
| Initial loading | Structure-matching skeleton or scoped spinner |
| Empty | Explain what is absent and provide a next action |
| No result | Preserve filters and offer reset |
| Partial data | Keep available content and identify missing scope |
| Error | Explain impact and provide retry/recovery |
| Disabled/read-only | Preserve legibility and explain unavailable action |
| No permission | State access limitation without exposing restricted data |
| Success | Confirm outcome and enable the next task |

Use realistic data density. A table demo should normally contain 8–15 varied rows, including long text, missing optional values, different statuses, and at least one edge case.

## Verification and handoff

Before delivery:

- Open the artifact in a browser and check runtime/console errors.
- Exercise the primary flow with keyboard and pointer.
- Verify common desktop width and at least one narrower width.
- Check long Chinese text, large amounts, dates, empty values, and overflow menus.
- Confirm that visible actions work or are clearly marked as intentionally out of scope.
- Confirm loading, empty, error, and success states.
- Provide absolute links to source files and rendered screenshots.
- State how to launch the demo in one command or direct file-open action.

## Ready-to-use prompts

Product manager:

```text
使用 $design-admin-ui，把下面的产品需求做成一个可点击后台 Demo。
用户：采购运营
目标：审核供应商报名资料并批量通过或驳回
要求：包含筛选、列表、详情抽屉、批量操作、确认和成功/失败反馈。
```

Designer:

```text
使用 $design-admin-ui，为“合同履约风险看板”输出桌面端高保真原型图。
需要主页面、筛选展开态、风险详情抽屉和空状态，并给出可编辑源文件。
```

Visual audit:

```text
使用 $design-admin-ui 审查当前后台页面，按用户影响排序修正视觉层级、表格密度、表单状态和交互反馈，并输出修正后的 Demo。
```
