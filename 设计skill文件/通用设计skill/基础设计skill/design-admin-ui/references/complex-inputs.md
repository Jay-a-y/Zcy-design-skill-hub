# Complex data entry

## Contents

- Upload
- Date and time
- Tree and cascaded selection
- Slider
- Transfer
- Rate

## Upload

Use upload for file acquisition, not as a generic attachment decoration.

- State accepted type, maximum size, maximum count, and any image dimension/aspect requirements before selection.
- Support click and drag-drop where useful; preserve a visible browse action.
- Show filename/thumbnail, progress, success, error, retry, preview, replace, download, and remove states as applicable.
- Validate client-side constraints early, then surface server rejection next to the file.
- Keep failed items in the list long enough to retry or understand the problem.
- Confirm removal only when deletion is irreversible or affects a saved record.
- Use picture-card layout for image collections and compact file rows for documents.
- Prevent duplicate submission and clearly distinguish uploading from server-side processing.
- Provide keyboard operation and accessible progress/status text.

## Date and time

Choose the narrowest control that matches the data: date, week, month, quarter, year, time, date-time, or range.

- Display a familiar localized format while storing an explicit canonical value and timezone policy.
- Keep format hints visible when manual typing is allowed.
- Use disabled dates/times to enforce real business rules, and explain unavailable ranges when not obvious.
- For ranges, make start/end relationship clear, prevent impossible order, and show a readable combined value.
- Offer common presets for frequent business periods without hiding custom selection.
- Define whether end dates are inclusive and how daylight-saving/timezone boundaries behave.
- Use 12-hour time only for locales that expect it; include AM/PM unambiguously.
- Support clear, today/now, confirmation, and keyboard navigation according to interaction risk.
- Do not auto-close a complex range picker before both endpoints are understood.

## Tree and cascaded selection

Use tree select when users need to inspect or choose from an explicit hierarchy. Use cascader when the path itself is the primary navigation model. Use multi-cascader only when multiple paths are genuinely required.

- Display enough of the selected path to disambiguate duplicate leaf names.
- Allow search for large hierarchies and specify whether matching finds leaves, paths, or both.
- Lazy-load deep branches and show per-node loading/error states.
- Keep expand/collapse separate from select/check behavior.
- For multi-select trees, define parent-child selection strategy, indeterminate state, tag overflow, and whether non-leaf nodes are selectable.
- For cascaders, use hover expansion only on desktop and only when accidental activation is unlikely; click is safer by default.
- Permit clearing and path truncation without losing access to the full value.
- Keep overlays within viewport and support keyboard traversal across levels.

## Slider

Use slider for approximate adjustment within a bounded range. Use numeric input when exact entry is primary; combine them when both matter.

- Show min/max and units when context is not obvious.
- Use marks for meaningful milestones, not every possible step.
- Use range slider for lower/upper bounds and prevent handles from becoming ambiguous.
- Show tooltip while dragging when precise feedback helps.
- Support keyboard arrow/page/home/end controls and a clearly visible focus state.
- Use vertical orientation only when layout and label direction remain clear.
- Do not use slider for unbounded values or sensitive exact financial entry.

## Transfer

Use transfer when users must compare available and selected collections and move multiple items between them.

- Label both sides with meaning, count, search, and select-all state.
- Preserve selection independently in each panel.
- Disable move actions until eligible items are selected.
- Support search/filter without accidentally moving hidden selections.
- Use tree transfer only when hierarchy affects the decision.
- Provide empty and no-result states in both panels.
- Keep item identity visible when names may collide; show secondary descriptions or paths.
- Prefer a simpler multi-select when the dataset is small and comparison is unnecessary.

## Rate

Use rating for subjective ordinal feedback, not precise measurement.

- Default to a familiar five-step scale unless the domain requires otherwise.
- Support half values only if users can meaningfully distinguish them.
- Pair icons with text, tooltips, or a numeric value when interpretation could vary.
- Keep hover preview visually distinct from the committed value.
- Provide a read-only display for summaries and allow clear only when “no rating” is a valid state.
- Do not rely on star color alone; expose the value to assistive technology.
