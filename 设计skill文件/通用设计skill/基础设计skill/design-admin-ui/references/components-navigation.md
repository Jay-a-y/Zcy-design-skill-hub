# Layout and navigation components

## Contents

- Layout
- Grid
- Space
- Dropdown
- Pagination
- Affix
- Menu
- Steps
- Tabs
- Anchor
- Breadcrumb

## Layout

Compose pages from header, sider, content, and optional footer. Keep navigation width stable across sibling pages. Make the content region responsible for overflow; do not let the entire shell jump horizontally.

For nested navigation, distinguish levels through indentation, weight, and disclosure—not multiple saturated colors. Use a dark sider only when the product shell calls for stronger framing; keep content surfaces light.

## Grid

Use a 24-column mental model for predictable fractions and responsive composition. Keep gutters tokenized and consistent. Prefer grid or flex primitives over bespoke percentages.

- Use 24/24 for full width, 12/12 for halves, 8/8/8 for thirds, and 6×4 for quarters.
- Use offsets only when they express a meaningful blank region.
- Let columns wrap at defined breakpoints rather than becoming unusably narrow.
- Use flex alignment for vertical centering, distribution, and order changes.

## Space

Use a spacing/group primitive for inline and vertical rhythm.

- Default gap: 8 px for compact controls; 12–16 px for general groups.
- Use vertical groups for stacked cards, fields, or actions.
- Allow wrap for toolbars and filters.
- Use split separators sparingly.
- Compact groups may visually join fields and buttons, but each control must retain a clear boundary and focus state.

## Dropdown

Use dropdowns for contextual actions or selection when persistent display would add noise.

- Trigger by click by default; reserve hover for low-risk desktop navigation.
- Match overlay alignment to the trigger and keep it inside the viewport.
- Group long menus with headings or dividers; cascade only when hierarchy is real.
- Highlight danger actions and separate them from routine actions.
- Keep selected/checked state visible for selection menus.
- Use a context menu only where users reasonably expect right-click behavior.

## Pagination

Use pagination for bounded datasets where page location matters.

- Show previous/next and current page clearly.
- Collapse distant ranges with ellipses.
- Offer page-size change and jump-to-page only for large datasets.
- Use simple pagination in constrained regions.
- Show total count when it helps users judge dataset scale.
- Preserve filters and scroll context when changing pages.

## Affix

Use sticky/affixed controls for persistent context or frequent action, not decoration. Define the scroll container explicitly. Ensure sticky content never covers headings, validation messages, or the final rows of a table.

## Menu

Menus communicate product information architecture.

- Top navigation suits a small set of primary destinations.
- Inline side navigation suits nested admin structures.
- Collapsed side navigation must retain tooltips and recognizable icons.
- Use one active item per navigation scope.
- Use disclosure arrows for expandable parents; do not mark a parent active merely because it is open.
- Dark mode is a shell variant, not a license for reduced contrast.

## Steps

Use steps for a finite multi-stage process with meaningful progress.

- Distinguish finished, current, waiting, error, and disabled states.
- Keep labels short; put supporting descriptions below or in a callout.
- Use horizontal steps for short processes with space; vertical steps for detailed or narrow workflows.
- Allow navigation between steps only when data and validation rules permit it.
- Do not use steps as decorative progress for an indeterminate task.

## Tabs

Use tabs for peer views within one context.

- Keep tab labels short and mutually exclusive.
- Use an underline/card treatment consistently within a region.
- Keep extra actions visually separate from tab choices.
- Use vertical tabs only when labels are numerous or long and the viewport allows it.
- Allow horizontal scrolling for overflow; do not squeeze labels into illegibility.
- Preserve keyboard arrow navigation and selected-state semantics.

## Anchor

Use an anchor rail for long single-page content, settings, or documentation.

- Highlight the current section with a blue marker and stronger label.
- Support nested headings with indentation.
- Keep the rail sticky only within a stable scroll container.
- Account for sticky header offset when scrolling to headings.
- Hide or collapse the rail on narrow screens.

## Breadcrumb

Use breadcrumbs to show location in a hierarchy, not browsing history.

- Make ancestors links and the current page plain text.
- Keep the separator subtle and consistent.
- Icons may reinforce known root/entity types but should not replace labels.
- Use the small variant for dense headers only.
- Collapse deep paths when necessary while preserving the current page and nearest ancestor.
