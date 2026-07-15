---
name: design-admin-ui
description: Turn product requirements, PRDs, user stories, workflows, sketches, screenshots, or existing code into professional admin prototypes, clickable demos, screen specifications, and visual reviews. Use when product managers or designers ask Codex to design a management console, back-office workflow, data-heavy page, form, dashboard, interactive HTML/React demo, prototype screenshot, component specification, or to audit and improve an existing admin UI. Also use to extend this Zhengcaiyun/Doraemon-derived visual standard with new component evidence.
---

# Design Admin UI

Create restrained, information-dense admin interfaces whose hierarchy is obvious before decoration is noticed. Produce something stakeholders can inspect or operate, not merely a prose recommendation. Treat the bundled rules as a visual baseline, then preserve any existing product brand, design tokens, and component-library behavior unless the user asks to replace them.

## Workflow

1. Read [prototype-workflow.md](references/prototype-workflow.md) and classify the deliverable as **prototype**, **interactive demo**, **implementation**, **visual audit**, or **spec extension**.
2. Inspect the product context, existing code/tokens, target viewport, user roles, primary task, data, permissions, and supplied screenshots.
3. Read [foundations.md](references/foundations.md) for every task.
4. Read only the relevant component reference:
   - Actions and primitives: [components-actions.md](references/components-actions.md)
   - Layout and navigation: [components-navigation.md](references/components-navigation.md)
   - Forms and core data entry: [forms-and-inputs.md](references/forms-and-inputs.md)
   - Complex data entry: [complex-inputs.md](references/complex-inputs.md)
   - Content and structured data display: [data-display.md](references/data-display.md)
   - Contextual display and guidance: [contextual-display.md](references/contextual-display.md)
   - Feedback, loading, and overlays: [feedback-and-overlays.md](references/feedback-and-overlays.md)
   - Global and business patterns: [system-patterns.md](references/system-patterns.md)
5. Read [component-source.md](references/component-source.md) when choosing components or checking exact standard-component behavior. For screenshot matching or extending the standard, also read [evidence-index.md](references/evidence-index.md) and inspect the relevant files under `assets/screenshots/`.
6. Define or reuse semantic tokens before styling individual components.
7. Build the page from shell to detail: global frame, regional layout, hierarchy, components, states, responsive behavior.
8. Verify the rendered interface at its target size. Check hierarchy, density, overflow, alignment, interaction states, accessibility, and console/runtime errors when code is involved.

## Non-negotiable principles

- **Simple:** remove visual noise; let alignment, spacing, typography, and state carry meaning.
- **Efficient:** optimize scanning and task completion rather than presentation spectacle.
- **Hierarchical:** make global, regional, component, and local levels visibly distinct.
- **Good by default:** the normal state must already look complete and usable.
- **Friendly:** show clear feedback, forgiving controls, and predictable navigation.
- **Precise:** use consistent terminology, data formatting, spacing, and state semantics.

## Decision rules

- Reuse the active design system before introducing new tokens or components.
- Interpret screenshot measurements as evidence, not immutable pixel truth. Prefer existing tokens when they produce the same visual relationship.
- Use one primary accent color. Reserve it for active navigation, primary actions, links, focus, progress, and selected state.
- Keep most surfaces white or neutral. Do not turn every content group into a floating card.
- Use borders and pale fills before shadows. Use shadow only for overlays, elevation, or temporary floating layers.
- Keep body copy and controls compact on desktop, but never below accessible hit-target and readability needs.
- Show hover, focus-visible, active, selected, disabled, loading, error, success, and empty states where applicable.
- Prefer familiar admin patterns over novelty. Avoid gradients, glass effects, oversized marketing typography, decorative blobs, and excessive rounding unless the product language explicitly requires them.
- Never infer component API contracts from screenshots. Derive visual behavior only; inspect the actual library or code for implementation APIs.

## Output contract

When producing a prototype or design specification, include:

1. Page structure and navigation model
2. Semantic token table or CSS variables
3. Typography and spacing hierarchy
4. Component/state rules
5. Responsive and overflow behavior
6. Accessibility constraints
7. Any assumptions or screenshot-derived approximations

For a static prototype, also deliver rendered PNG screenshots at the requested or inferred viewport plus the editable source used to generate them.

For an interactive demo, also deliver runnable source, realistic sample data, working primary interactions, loading/empty/error/success states, and a verified launch path. Do not leave primary buttons as decorative dead ends.

When implementing, encode repeated decisions as tokens or reusable components rather than one-off styles. Keep changes scoped to the requested surface.

When auditing, report issues in descending user impact: broken hierarchy or interaction first, inconsistent styling second, polish last. Pair each issue with a concrete correction.

## Extending this standard

When the user supplies another batch of screenshots:

1. Preserve the original images under `assets/screenshots/` with ordered, descriptive names.
2. Add their mapping and observed patterns to [evidence-index.md](references/evidence-index.md).
3. Update the narrowest relevant reference file; avoid duplicating the same rule across files.
4. Mark uncertain numeric values as inferred baselines.
5. Prefer additive changes. Replace an existing rule only when the new evidence clearly contradicts it, and state the new condition or variant.
6. Re-run the skill validator after edits.
