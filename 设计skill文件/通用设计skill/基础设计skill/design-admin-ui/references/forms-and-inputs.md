# Forms and core data entry

## Contents

- Form architecture
- Field anatomy and layout
- Validation and state
- Text input
- Numeric, amount, and formatted input
- Radio and checkbox
- Switch
- Select and autocomplete
- Mentions

## Form architecture

Design forms around the user's decision sequence, not the data model's field order.

- Group fields by task and use short section titles for long forms.
- Ask only for information needed at the current stage; reveal conditional fields after the controlling choice.
- Keep the primary submit action at the end of the decision path. Add a sticky action bar only when long forms make the endpoint difficult to reach.
- Preserve entered values after recoverable errors, failed requests, or navigation warnings.
- Separate destructive actions from save/submit actions.
- Use a clear unsaved-changes warning when leaving would lose work.

## Field anatomy and layout

Each field may include label, required indicator, control, optional help, character/unit suffix, and validation message. Keep help and error text directly associated with the field.

- Use labels above controls for narrow/responsive forms and mixed label lengths.
- Use aligned horizontal labels for dense desktop forms with short, predictable labels.
- Do not use placeholder text as the only label.
- Mark required fields consistently; avoid marking every field when almost all are required—state the convention at section level instead.
- Use 8 px between label and control, 4–8 px between control and help/error, and 16–24 px between fields as inferred baselines.
- Use one control height per row. Suggested sizes remain small 28 px, default 32 px, large 40 px when compatible with the active design system.
- Let field width communicate expected input length: short for codes and quantities, medium for names, full width for long text and search.
- Align units, prefixes, suffixes, clear icons, and reveal controls inside the input boundary without shrinking the text area excessively.

## Validation and state

Define default, hover, focus-visible, filled, read-only, disabled, loading, warning, error, and success states.

- Validate format locally when possible; validate uniqueness or server rules asynchronously without blocking unrelated fields.
- Show errors after blur, submit, or when the user has had a reasonable chance to complete the value. Avoid aggressive errors on first keystroke.
- Use a concise error message that explains correction, not merely “invalid”.
- Keep error layout stable so messages do not cause surprising page jumps.
- Distinguish read-only from disabled: read-only values remain legible, focusable/selectable when useful, and are submitted; disabled controls are inactive and visually muted.
- Never represent an unavailable field with low contrast alone; explain the controlling condition when unclear.
- On submit, move focus or scroll to the first invalid field and provide a summary for long or multi-section forms.

## Text input

- Use plain text input for free-form short values and textarea for multi-line content.
- Provide prefix/suffix content only when it clarifies unit, scope, search, or visibility.
- Add a clear action when clearing is safe; preserve keyboard access.
- Use password reveal as an explicit toggle and maintain cursor/focus.
- Show character count near the trailing edge for limited-length text.
- Auto-resize textareas within a bounded minimum and maximum; do not let them consume the whole viewport.
- For grouped inputs, join only semantically coupled fields such as protocol + domain or amount + unit.

## Numeric, amount, and formatted input

- Use numeric input when arithmetic, min/max, step, or precision matters; do not use it for phone numbers, IDs, bank cards, or postal codes.
- Communicate min, max, step, precision, and accepted negatives before validation surprises.
- Use spinner controls only when incremental adjustment is realistic. Keep direct typing available.
- Format thousands separators, currency, percentage, and decimal precision for display while preserving an unambiguous canonical value.
- Keep currency or unit visible through a prefix/suffix; do not bake it into placeholder text.
- Right-align comparable financial values in tables; normal form inputs may remain left aligned for easier editing.
- Preserve leading zeroes for identifiers and phone/area codes.
- Treat date, bank card, phone, and custom masks as formatting aids rather than proof of validity; validate the underlying value separately.
- For amount display, define size, weight, decimal treatment, currency symbol, positive/negative color semantics, and whether trailing zeroes are shown.

## Radio and checkbox

Use radio for one required choice from a visible small set. Use checkbox for independent choices or multiple selection.

- Make the label part of the hit target.
- Prefer radios when options are few enough to compare without opening a menu.
- Use a segmented/button radio only for short, mutually exclusive choices; preserve obvious selected state.
- Arrange options horizontally when short and few; stack vertically when labels are long or numerous.
- For “select all”, support an indeterminate state and keep parent/child selection synchronized.
- Do not use checkbox for an immediate system state change; use switch.
- Keep disabled checked state distinguishable from disabled unchecked state.

## Switch

Use switch for a binary state that takes effect immediately, such as enable/disable. Use checkbox when the value is collected and submitted with other form data.

- Label the state in plain language when on/off meaning is not obvious.
- Use text or icons inside the switch only when they remain readable at the chosen size.
- Show loading while an immediate state mutation is pending and restore the prior state on failure with an error message.
- Avoid confirmation for harmless reversible switches; confirm high-impact changes before mutation.
- Do not place several unlabeled switches in a row.

## Select and autocomplete

Use select for known options. Use autocomplete for query-assisted entry where users may type, search, or receive remote suggestions.

- Provide search when option count or recall burden is high.
- Use multiple select only when users need several values; show removable tags and a clear overflow strategy.
- Group or divide options when it improves scanning.
- Keep selected labels stable even if underlying IDs are opaque.
- For remote search, debounce requests, show loading/no-result/error states, cancel stale responses, and preserve the current query.
- Define whether free text is allowed. Do not silently accept unmatched text in a closed option set.
- Make clear whether clearing restores “all”, “none”, or a default value.
- Position the overlay within the viewport and match its minimum width to the trigger unless content requires more.
- Highlight matched text without harming readability or screen-reader output.

## Mentions

Use mentions for structured references inside free text, not as a replacement for ordinary selection.

- Trigger with familiar prefixes such as `@` and allow multiple trigger types only when meaning is distinct.
- Filter suggestions as the user types and keep keyboard navigation inside the suggestion list.
- Render selected mentions as recognizable tokens while retaining editable surrounding text.
- Validate whether referenced entities still exist before submission.
- Support custom empty state, async loading, read-only, disabled, and form validation behavior.
