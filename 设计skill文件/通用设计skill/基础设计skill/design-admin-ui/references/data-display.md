# Content and structured data display

## Contents

- Choose the display surface
- Card
- Image and preview
- Avatar
- Badge and tag
- List and descriptions
- Collapse
- Tree
- Table
- Empty state

## Choose the display surface

Match the component to the reading task.

- Use a table for comparing many records across consistent fields.
- Use a list for scanning heterogeneous items with a dominant title or narrative.
- Use descriptions for one entity's labeled attributes.
- Use a card for an independent entity, summary, or action group—not every section.
- Use a tree for visible hierarchy and parent-child navigation.
- Use collapse for optional detail that users can reveal in place.
- Use tags and badges as secondary signals, never as the main information architecture.

Do not convert structured comparison data into cards merely for visual variety. Preserve the user's ability to scan, compare, sort, and act.

## Card

- Keep title, content, metadata, and actions in a stable order.
- Use bordered cards on plain backgrounds; use borderless cards only when surrounding structure already defines the boundary.
- Reserve cover images for meaningful visual identity. Use a consistent aspect ratio and crop policy.
- Keep hover elevation subtle and apply it only when the whole card is interactive.
- Put frequent actions in the header or visible footer; place secondary actions in overflow.
- Use grids for peer cards with equal hierarchy. Avoid forced equal heights when content meaningfully differs, unless row alignment aids comparison.
- Use loading skeletons that resemble the final card structure.
- Nest cards sparingly; prefer sections or descriptions inside a card.
- If the whole card is clickable, keep nested buttons/links semantically and visually distinct.

## Image and preview

- Define display width/height, aspect ratio, fit mode, crop focal point, and fallback.
- Use `cover` for fixed visual tiles and `contain` when the full artifact must remain visible.
- Provide meaningful alternative text for informative images and empty alt text for decorative images.
- Show a neutral placeholder while loading and a clear fallback on failure.
- Open preview from an explicit affordance or clearly interactive thumbnail.
- For multi-image preview, preserve sequence, count, keyboard navigation, zoom, close, and focus return.
- Do not enlarge low-resolution images beyond useful quality.
- Keep preview overlays above sticky content and lock background scroll appropriately.

## Avatar

- Use avatars for people, organizations, or stable entities—not generic decoration.
- Support image, icon, and initials fallback in that order when available.
- Use consistent sizes within one context; common inferred sizes are 32, 40, and 48 px.
- Fit initials automatically but keep them readable; avoid exposing more than two characters.
- Use circle for people by default and square/rounded-square for organizations or objects when helpful.
- Pair unfamiliar avatars with a visible name.
- A presence/status badge must not obscure the identity and must include non-color meaning where important.

## Badge and tag

Use badge for a compact count, dot, or status attached to another object. Use tag for category, attribute, state label, or filter token.

- Cap large badge counts with a readable overflow convention such as `99+`.
- Use dots only when the meaning is already known from context.
- Keep badge placement consistent and avoid covering essential icon/avatar content.
- Use semantic status colors consistently: success, processing/info, warning, error, neutral.
- Keep ordinary tags neutral. Introduce color only to encode a stable category or state.
- Use closable tags only when removal is an available action; provide focus and a clear label for close.
- Use checkable tags for compact multi-selection only when selected state is unmistakable.
- Avoid rainbow tag walls. If many categories require color, define and document the palette mapping.
- Truncate long tags carefully and expose the full label.

## List and descriptions

### List

- Give each row a dominant title or value, supporting metadata, and optional actions.
- Align avatars/icons, content, metadata, and row actions consistently.
- Keep frequent row actions visible; reveal low-frequency actions on hover only if keyboard and touch alternatives remain available.
- Use pagination, load more, or virtualization based on dataset size and navigation needs.
- Use grid lists only when items remain independently understandable and comparison columns are unnecessary.
- Provide loading, empty, error, and end-of-list states.

### Descriptions

- Use descriptions for read-only entity details, not editable forms.
- Keep label/value alignment stable and choose columns according to available width and value length.
- Use horizontal layout for compact overview and vertical layout when labels or values are long.
- Use bordered treatment for formal record summaries or comparison; use borderless treatment for lighter detail pages.
- Format dates, amounts, IDs, masked values, attachments, images, and statuses semantically.
- Preserve copy/download/reveal actions near the corresponding value.
- Collapse or stack columns responsively rather than squeezing values.

## Collapse

- Use collapse for secondary detail, FAQs, advanced settings, and progressive disclosure.
- Keep headers concise and make the whole header row operable unless it contains separate actions.
- Use accordion mode when only one section should be compared at a time; allow multiple open panels when cross-reference matters.
- Preserve open state when users return to a page if it affects workflow continuity.
- Show the expand indicator consistently and keep its direction synchronized with state.
- Do not hide critical errors, required actions, or primary data inside a closed panel.
- Avoid deeply nested collapses.

## Tree

- Use tree for explicit hierarchy, not merely indented lists.
- Separate expand/collapse, select, check, drag, and context actions.
- Highlight the selected node with a pale accent surface and clear text state.
- Define whether parent and child checks are linked; show indeterminate parents when partially selected.
- Support search and auto-expand matched paths for large trees.
- Lazy-load children with per-node progress/error feedback.
- Keep indentation and connector lines consistent; do not let deep levels become unreadable.
- Provide keyboard navigation and announce expanded, selected, checked, and level state.
- Use virtualization for very large trees without breaking focus or selection.

## Table

Design tables for comparison and operational action.

### Structure

- Put the most identifying column first and common row actions at the far edge.
- Left-align text, right-align numeric values, and center only short statuses or controls when it improves scanning.
- Keep units in headers when consistent across a column; keep them with values when mixed.
- Use stable formatting for dates, amounts, percentages, identifiers, and missing values.
- Use concise headers; provide tooltip/help for specialized definitions.
- Set explicit widths for predictable columns and allow flexible width for primary text.

### Interaction

- Make sortable headers visibly sortable and distinguish ascending, descending, and unsorted states.
- Keep active filters discoverable and removable; show the resulting count.
- Use row selection only when batch actions exist. Keep select-all scope explicit—page or all results.
- Keep high-frequency actions visible and move rare/destructive actions into overflow.
- Do not make the whole row clickable when it contains many interactive cells unless the affordance is very clear.
- Preserve filters, sort, page, density, and column preferences when users navigate to detail and back.

### Density and overflow

- Offer comfortable and compact densities where expert workflows need them.
- Use sticky headers for long vertical data and sticky identifying/action columns for wide tables.
- Show a clear horizontal-scroll affordance; avoid clipping columns silently.
- Prefer column configuration or priority-based hiding over shrinking text below readability.
- Use fixed-height virtualization only when row height and accessibility remain reliable.

### States

- Use a structure-matching skeleton for initial load and a lighter in-place state for refresh.
- Keep previous data visible during background refresh when safe.
- Put empty/no-result/error states inside the table region and preserve headers/filter context when useful.
- Show inline editing states, validation, save/cancel, and optimistic failure recovery without shifting the whole row unpredictably.
- Provide pagination or infinite loading deliberately; do not combine both without a clear reason.

## Empty state

Distinguish first-use empty, filtered no-result, permission empty, deleted/unavailable, and loading failure.

- State what is missing and why when known.
- Provide one clear next action when the user can resolve it: create, import, clear filters, retry, or request access.
- Use a quiet illustration that supports the message rather than dominating the page.
- Keep empty content centered within the relevant region, not necessarily the entire viewport.
- Preserve surrounding navigation, filters, column headers, or context when they help recovery.
- Do not show “暂无数据” for errors or permission problems.
