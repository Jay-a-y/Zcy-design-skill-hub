# Component source and selection

## Source of truth

The skill bundles `assets/source/ZCY-doraemon-v4-master.zip` as a searchable reference for standard components. It contains Ant Design `4.20.0-alpha.1` source, 65 Chinese component documents, 651 Markdown demos, Less theme variables, and tests.

Use this precedence:

1. Existing product code, tokens, and installed component version
2. Zhengcaiyun custom-component screenshots and rules in this skill
3. Bundled standard-component source and demos
4. Inferred baselines in the visual references

The screenshot site shows a different Doraemon version and includes custom components absent from the archive. Do not copy APIs across versions without checking the target project.

## Query without extracting everything

```bash
unzip -p assets/source/ZCY-doraemon-v4-master.zip \
  ZCY-doraemon-v4-master/components/table/index.zh-CN.md

unzip -Z1 assets/source/ZCY-doraemon-v4-master.zip \
  | rg 'components/table/demo/.*\.md$'

unzip -p assets/source/ZCY-doraemon-v4-master.zip \
  ZCY-doraemon-v4-master/components/style/themes/default.less
```

Read only the component documentation and demos required for the current task.

## Standard component catalog

- **Foundation:** button, icon, typography, divider, grid, layout, space
- **Navigation:** affix, anchor, back-top, breadcrumb, dropdown, menu, page-header, pagination, steps, tabs
- **Data entry:** auto-complete, cascader, checkbox, date-picker, form, input, input-number, mentions, radio, rate, select, slider, switch, time-picker, transfer, tree-select, upload
- **Data display:** avatar, badge, calendar, card, carousel, collapse, comment, descriptions, empty, image, list, popover, statistic, table, tag, timeline, tooltip, tree
- **Feedback/overlay:** alert, drawer, message, modal, notification, popconfirm, progress, result, skeleton, spin
- **Configuration:** config-provider, segmented

## Custom screenshot-derived components

The screenshots add business-specific patterns not present in the archive, including InputAmount, InputFormat, MultiCascader, Watermark, ButtonConfirm, ZcyLayout, and other ZCY business components. Use their visual behavior only unless the target codebase exposes the matching implementation.

## Baseline variables from the archive

- Base font: 14 px; small: 12 px; large: 16 px
- Base line-height: 1.5715
- Control heights: 24 / 32 / 40 px
- Base radius: 2 px
- Page/component background: white
- Layout body background: `#f0f2f5`
- Header height: 64 px
- Border: 1 px solid, base neutral about 85% brightness
- Primary color is the sixth step of the Ant blue palette

Map these values to the active product tokens rather than forcing them into an existing system.
