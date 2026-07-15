# Global and business patterns

## Contents

- Global configuration
- Watermark
- Confirmation button group
- ZcyLayout shell

## Global configuration

- Configure locale, component size, empty rendering, popup container, direction, and security policy at the application boundary.
- Keep locale consistent with date/time/number formatting libraries.
- Use one default component density per product region; do not mix sizes arbitrarily.
- Render overlays in a container that preserves stacking and scroll behavior.
- Treat global prefix/theme changes as migration work, not local styling.
- Verify Chinese/English expansion, RTL only when required, and content-security policy compatibility.

## Watermark

- Use watermark for sensitive preview/export, ownership, or leakage deterrence—not decoration.
- Keep repeated text/image low contrast enough to preserve reading while remaining visible in screenshots.
- Include meaningful identity such as organization, user, account, or time only when policy permits.
- Define rotation, gap, offset, font, color, and z-index centrally.
- Apply across the protected content region, including modal/drawer content when required.
- Do not claim watermark prevents copying; it provides attribution/deterrence.

## Confirmation button group

Use a business confirmation wrapper to standardize a trigger plus secondary confirmation.

- Keep trigger label verb-led and confirmation title consequence-specific.
- Use confirm/cancel labels that name the action when ambiguity exists.
- Apply danger styling to the destructive confirmation, not every trigger.
- Prevent repeated confirmation while the operation is pending.
- Show success/error feedback after confirmation and preserve recovery.
- Use Popconfirm for short consequences; escalate to Modal when users need details or additional input.

## ZcyLayout shell

- Use a persistent global header and side navigation for multi-module admin products.
- Keep brand, global search/context, account/utilities, and navigation responsibilities separate.
- Derive visible menus from permissions without revealing inaccessible routes.
- Keep sider width, collapsed state, active route, and breadcrumbs consistent across modules.
- Let page content own its loading and overflow; the shell should remain stable.
- Support responsive collapse and keyboard navigation.
- Avoid embedding business data directly in global shell configuration; pass named slots/regions for content.
