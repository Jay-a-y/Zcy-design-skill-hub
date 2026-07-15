# Actions and primitives

## Contents

- Dividers
- Icons
- Buttons
- Typography primitives
- Shared state behavior

## Dividers

Use dividers to clarify groups, not to compensate for weak spacing.

- Default: 1 px neutral horizontal rule.
- Dashed: use for tentative, editable, or secondary separation—not as the default.
- With text: position label left, center, or right; keep line and label vertically centered.
- Vertical: use between short inline actions or metadata. Never use it as a tall layout boundary.
- Keep sufficient space on both sides of a divider label.

## Icons

Use one coherent icon family with consistent stroke/fill character.

- Default sizes: 14–16 px inside compact controls; 16–20 px for standalone actions; 24 px only for emphasis.
- Align icons optically, not only by bounding box.
- Pair unfamiliar icons with text. Use tooltip and accessible name for icon-only buttons.
- Do not mix decorative emoji, outlined system icons, and filled brand icons in one control family.
- Use color to indicate action/state only when supported by shape, text, or location.

## Buttons

### Hierarchy

- **Primary:** one dominant action per local decision area.
- **Secondary:** common alternatives with border or quiet surface.
- **Tertiary/text:** low-emphasis contextual actions.
- **Link:** navigation or inline non-destructive action.
- **Danger:** destructive action; require confirmation when consequences are hard to reverse.

### Construction

- Keep label concise and verb-led.
- Maintain stable height and padding across a group.
- Use icon-before-label for most actions; icon-after-label for disclosure or forward movement.
- For icon-only buttons, use a square control of the same height as adjacent buttons.
- Button groups share edges only when choices are tightly coupled; otherwise use 8 px gap.
- Full-width buttons are appropriate in narrow forms, dialogs, and clear single-action regions—not broad desktop toolbars.

### States

Define default, hover, focus-visible, pressed, loading, disabled, and danger states. Loading must preserve width and prevent duplicate submission. Disabled buttons should not be the only explanation of why an action is unavailable.

Use rounded or circular buttons only for special compact actions. Avoid mixing multiple radius languages on the same page.

## Typography primitives

Expose consistent primitives for title, paragraph, secondary text, code, links, ellipsis, and editable text. Headings establish structure; do not use them solely to get a font size.

- Links use the primary accent and a clear hover/focus treatment.
- Inline code uses a subtle neutral background and monospace font.
- Secondary text remains readable and should not become faint decoration.
- Use copy affordances for identifiers and code-like values when copying is likely.

## Shared state behavior

- Hover communicates interactivity but never carries essential information alone.
- Focus-visible is at least as clear as hover.
- Selected state persists after interaction and is stronger than hover.
- Loading uses a spinner or skeleton appropriate to scope; do not freeze the entire page for a local request.
- Error messages appear near the source and describe recovery.
- Success feedback is brief and does not obstruct the next task.
