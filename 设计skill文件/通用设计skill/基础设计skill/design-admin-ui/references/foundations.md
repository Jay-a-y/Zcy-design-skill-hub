# Foundations

## Contents

- Visual character
- Semantic tokens
- Typography
- Spacing and sizing
- Page frame
- Surfaces and elevation
- Density and data display
- Responsive behavior
- Accessibility
- Visual QA

## Visual character

Aim for a professional blue-white admin system: quiet, orderly, compact, and legible. The screenshots use generous page whitespace around dense working regions, thin neutral borders, very light gray demonstration surfaces, dark neutral headings, muted secondary text, and blue interactive states.

Do not confuse restraint with emptiness. The page should expose enough context to let expert users act quickly.

## Semantic tokens

Treat these as an inferred starting point. Map them to an existing product system when available.

```css
:root {
  --admin-primary: #1677ff;
  --admin-primary-hover: #4096ff;
  --admin-primary-active: #0958d9;
  --admin-primary-soft: #eaf3ff;

  --admin-text-strong: #182230;
  --admin-text: #344054;
  --admin-text-muted: #667085;
  --admin-text-disabled: #b8c0cc;

  --admin-bg-page: #ffffff;
  --admin-bg-subtle: #f7f8fa;
  --admin-bg-muted: #f2f4f7;
  --admin-border: #e5e9f0;
  --admin-border-strong: #d0d5dd;

  --admin-success: #12a150;
  --admin-warning: #d98b00;
  --admin-danger: #e5484d;
  --admin-info: #1677ff;

  --admin-radius-sm: 2px;
  --admin-radius-md: 4px;
  --admin-radius-lg: 6px;
  --admin-shadow-overlay: 0 8px 24px rgb(16 24 40 / 14%);
}
```

Rules:

- Check text/background and control contrast rather than trusting token names.
- Use semantic colors for state meaning, not decoration.
- Keep radius restrained; avoid pill shapes except tags, compact filters, or explicit segmented controls.
- Use a dark theme only when the product or local region requires it; maintain the same hierarchy rather than simply inverting colors.

## Typography

Use the platform UI stack:

```css
font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
  "PingFang SC", "Microsoft YaHei", sans-serif;
```

Suggested desktop scale:

| Role | Size / line-height | Weight | Use |
|---|---:|---:|---|
| Page title | 24–28 / 32–38 | 600–700 | One per page |
| Section title | 18–20 / 26–30 | 600 | Major content group |
| Subsection title | 15–16 / 22–24 | 600 | Local group/card |
| Body/control | 14 / 20–22 | 400 | Default UI text |
| Compact/caption | 12 / 18 | 400–500 | Metadata and dense controls |
| Numeric emphasis | 24–36 / 1.2 | 600–700 | Metrics only |

Keep paragraphs short in operational screens. Use sentence case and stable terminology. Use tabular numerals for columns of numbers. Truncate only when the full value is recoverable through tooltip, expansion, or detail view.

## Spacing and sizing

Use a 4 px base with an 8 px default rhythm:

`4, 8, 12, 16, 24, 32, 40, 48, 64`

- 4–8: icon/text gaps and compact internal spacing.
- 8–12: control groups and dense rows.
- 16: default component padding.
- 24: section and card separation.
- 32–48: major page-section separation.

Suggested desktop controls: small 24–28 px, default 32–36 px, large 40–44 px. Keep same-row controls aligned by visual center and baseline. Do not shrink pointer targets merely to mimic a screenshot captured at high resolution.

## Page frame

Use a stable application shell:

- Top bar: compact brand, global search or context, and utilities/version at the far edge.
- Left navigation: persistent on desktop, grouped, with a blue active indicator and pale selected surface.
- Main content: readable line length, strong top alignment, and enough right padding for tables and examples.
- Optional right anchor rail: use only for long documentation/settings pages; keep it subordinate and sticky within viewport.

For documentation-like admin pages, target a main reading width around 960–1200 px inside the shell. For data workspaces, let tables/charts use available width while preserving 24–32 px page gutters.

## Surfaces and elevation

- Use plain page background for the primary canvas.
- Group examples, tables, or configurable regions with a 1 px border or subtle gray fill.
- Use cards only for meaningful entities or independent actions.
- Use shadow for dropdowns, popovers, drawers, modals, and sticky overlap—not routine sections.
- Separate adjacent regions with spacing first, divider second, background change third.

## Density and data display

- Default to comfortable density; offer compact density for expert workflows with large datasets.
- Align labels and comparable values consistently.
- Right-align numeric table columns; left-align prose; center short states only when scanning benefits.
- Keep primary row actions visible when frequent. Move destructive or rare actions into an overflow menu.
- Preserve table headers, column meaning, and horizontal-scroll affordance on narrow screens.
- Always design loading, empty, error, no-permission, and no-result states.

## Responsive behavior

- Desktop first does not mean desktop only.
- Collapse the left navigation to an icon rail or drawer before compressing main content below readability.
- Hide the right anchor rail at narrower widths.
- Allow toolbars to wrap by logical groups; do not scatter related controls.
- Convert wide comparison layouts into scrollable regions or stacked summaries.
- Keep primary actions reachable; move secondary actions into overflow when space is limited.

## Accessibility

- Preserve a visible `:focus-visible` indicator on every interactive element.
- Do not rely on color alone for status, selection, or errors.
- Provide accessible names for icon-only controls.
- Respect reduced motion.
- Ensure keyboard order follows visual order, including menus, tabs, pagination, and step flows.
- Use real headings, landmarks, lists, buttons, links, and tables before ARIA repair.

## Visual QA

Verify at minimum:

- Shell regions align and do not drift between pages.
- Active navigation is unambiguous.
- Page title, sections, and local groups form a clear hierarchy.
- Repeated controls have identical height, radius, padding, and icon alignment.
- Text does not clip at Chinese/English mixtures or long values.
- Menus and overlays remain within the viewport and above sticky content.
- Disabled content remains legible but clearly inactive.
- Dense pages remain scannable at 100% zoom.
