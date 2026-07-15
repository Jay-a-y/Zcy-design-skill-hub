# Contextual display and guidance

## Contents

- Tooltip
- Popover
- Calendar
- Timeline
- Tour
- Carousel

## Tooltip

Use tooltip for brief, non-essential explanation of an icon, abbreviation, truncated value, or unfamiliar control.

- Keep content short and plain; do not place forms, critical warnings, or required instructions inside.
- Trigger on hover and focus for desktop. Do not rely on hover for touch-only access.
- Use click only when the behavior is explicit and content still remains lightweight.
- Position within the viewport and point the arrow toward the trigger without covering related content.
- Apply a short open delay to reduce flicker in dense toolbars; close predictably.
- Do not duplicate an already visible label.
- Use theme variants only to preserve contrast over surrounding surfaces.

## Popover

Use popover for richer contextual content or lightweight actions that are too substantial for a tooltip but do not require a modal.

- Include a concise title only when it improves hierarchy.
- Default to click for interactive content; use hover only for passive preview.
- Keep content and actions small enough to remain contextual.
- Allow users to dismiss with outside click, Escape, and an explicit close action when needed.
- Return focus to the trigger and keep keyboard focus within interactive content while open.
- Keep placement adaptive and overlay above sticky content.
- Do not use a disabled element as the sole trigger; wrap or provide an accessible explanation target.
- If the content becomes a multi-step workflow, use a drawer or modal instead.

## Calendar

Use calendar to display events and availability across dates; use date picker for selecting a date in a form.

- Emphasize today and selected date without confusing the two.
- Keep weekday, month/year controls, locale, week start, and timezone consistent.
- Show event density without turning every cell into a color patch; use compact markers and a legend.
- Provide an overflow path such as “more” when events exceed cell capacity.
- Preserve keyboard navigation and announce date, selection, and event count.
- Use a compact card calendar for secondary navigation, not dense scheduling.
- Clarify disabled/unavailable dates and whether month navigation changes the selected value.

## Timeline

Use timeline to show ordered events, process history, audit records, or milestones.

- Put the newest event first or last according to domain convention and state the ordering consistently.
- Use left/right/alternate layouts only when they improve reading; default to a single vertical flow.
- Use color to mark semantic event status, not arbitrary variety.
- Keep timestamps, actor, action, object, and result visually separable.
- Group dense related events or provide expansion rather than repeating noise.
- Use pending state only for a real expected event.
- For audit history, preserve exact timestamp, timezone, actor identity, and immutable event wording.

## Tour

Use a tour for brief contextual onboarding to a real interface. Prefer discoverable design and inline help before adding a tour.

- Keep tours optional, dismissible, resumable when appropriate, and short.
- Focus each step on one user goal; show progress and clear next/back/finish controls.
- Point to stable targets and handle missing/offscreen targets gracefully.
- Scroll targets into view without disorienting the user.
- Use a mask only when focus is necessary; keep enough surrounding context visible.
- Never block urgent work with an automatic tour.
- Remember completion and provide a way to replay from help.
- Ensure keyboard navigation, focus management, and accessible step announcements.

## Carousel

Use carousel only when several peer visual items must share constrained space. It is rarely appropriate for essential admin data.

- Keep critical content and actions outside auto-rotating slides.
- Disable autoplay by default. If used, provide pause and respect reduced motion.
- Show current position and total count when sequence matters.
- Keep arrows and indicators visible, focusable, and large enough to operate.
- Preserve consistent slide dimensions to prevent layout shift.
- Use subtle transitions; avoid animation that delays task completion.
- Prefer tabs, lists, or grids when users need direct comparison.
