# Feedback, loading, and overlays

## Contents

- Feedback hierarchy
- Message
- Notification
- Alert
- Loading and spin
- Progress
- Skeleton
- Popconfirm
- Modal
- Drawer

## Feedback hierarchy

Choose the least disruptive feedback that keeps users informed.

1. Inline field/region state for local validation or load failure
2. Alert for persistent contextual information
3. Message for brief confirmation after a user action
4. Notification for asynchronous or cross-page events
5. Popconfirm for a compact, reversible-risk confirmation
6. Modal for an important blocking decision or focused short task
7. Drawer for contextual detail or a longer task that should preserve page context

Never stack multiple feedback mechanisms for the same event.

## Message

- Use for brief success, error, info, warning, or loading feedback directly following an action.
- Keep text to one concise sentence and auto-dismiss routine success.
- Keep errors visible long enough to read; provide a persistent recovery path elsewhere when needed.
- Avoid action buttons unless the action is a simple undo.
- Deduplicate repeated messages and update a loading message in place.
- Position consistently below the global header and above page content.

## Notification

- Use for asynchronous events, background completion, or information that may arrive outside the current task.
- Include title, concise description, semantic icon, and at most one or two clear actions.
- Keep placement consistent and prevent notification stacks from obscuring core controls.
- Allow manual close; use longer or persistent duration for actionable/error content.
- Group or deduplicate bursts from the same source.
- Do not use notification for field validation or routine save success.

## Alert

- Use inline within the affected context for persistent info, success, warning, or error.
- Use a short message; add description only when users need explanation or recovery.
- Add actions at the trailing edge or below the description without crowding the text.
- Make closable alerts dismissible by keyboard and remember dismissal only when appropriate.
- Use banner mode for page/system-wide issues, maintenance, policy, or outage communication.
- Never rely on background color alone; include icon/text semantics.

## Loading and spin

- Scope loading to the region being updated. Avoid blocking the whole page for a local request.
- Delay a spinner briefly to prevent flashes for fast operations.
- Pair longer loading with explanatory text and preserve surrounding context.
- Use skeleton for initial structure load; use spin for indeterminate local operations.
- Prevent duplicate actions while pending and announce loading state to assistive technology.
- If loading exceeds expectations, provide cancel, background, or retry information where possible.

## Progress

- Use determinate progress only when completion percentage is meaningful.
- Use line for tasks and uploads, circle for compact status, and dashboard only for a gauge-like summary.
- Display percent or status text when it improves confidence.
- Use semantic success/error completion and keep the final result visible briefly.
- For multi-phase work, use segmented progress only when phases are understandable.
- Do not fake steady percentage movement for indeterminate operations.

## Skeleton

- Match the final content structure closely: title, rows, avatar, card, or table.
- Use during initial load when layout is known; keep existing data during background refresh.
- Keep animation subtle and respect reduced motion.
- Avoid skeletons for actions whose shape is unknown or for errors.
- Replace all skeleton regions together enough to avoid a flickering patchwork.

## Popconfirm

- Use for a short confirmation attached to the triggering action.
- State the concrete consequence: “删除该供应商记录？” rather than “确定吗？”.
- Use danger styling for destructive confirmation and keep cancel visually safer.
- Add description only when consequence or recovery needs clarification.
- Do not use for complex decisions, forms, legal consent, or multi-step consequences.
- Preserve trigger focus after close.

## Modal

- Use for a blocking decision or focused task that should pause the page.
- Keep title, content, primary/secondary actions, and close behavior predictable.
- Put the primary action at the trailing side; use a danger primary action only for destructive confirmation.
- Disable or load the submit action during requests and keep entered data on recoverable failure.
- Confirm before closing only when unsaved work would be lost.
- Keep short forms in modals; move long, multi-section, or reference-heavy work to a drawer or page.
- Trap focus, close with Escape when safe, restore focus, and prevent background interaction.
- Avoid nested modals.

## Drawer

- Use for detail, preview, or multi-step editing that benefits from retained page context.
- Open from the edge nearest the contextual relationship; right is the default for desktop detail.
- Choose width from content needs and keep enough background visible to preserve orientation.
- Use a stable header and sticky footer for long forms.
- Support back/close semantics for multi-level drawers and avoid deep nesting.
- Mask the background for focused tasks; omit the mask only for deliberate side-by-side work.
- Preserve scroll separately and restore the originating row/trigger on close.
