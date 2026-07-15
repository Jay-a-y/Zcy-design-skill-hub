# UDesign 图标库使用规则

本文件规定云随 Demo 的图标来源、选择和单 HTML 内联方式。

## 资产位置

云随 Skill 已内置 UDesign / TDesign Icons 官方 SVG 快照：

- 来源记录：[SOURCE.md](../assets/icons/tdesign-icons/SOURCE.md)
- SVG 目录：`assets/icons/tdesign-icons/svg/`
- 图标索引：`assets/icons/tdesign-icons/icon-index.json`
- 授权协议：`assets/icons/tdesign-icons/LICENSE`

AI 生成或评审 Demo 时，应优先使用本地图标资产，不依赖联网读取官方图标站点。

## 强制规则

1. 基础功能图标必须来自 `assets/icons/tdesign-icons/svg/`。
2. 禁止使用 emoji、临时字符、AI 手写 SVG、Lucide、Heroicons、Font Awesome 或其他第三方图标。
3. 单 HTML Demo 只内联本次页面实际用到的 SVG，不把全量图标库写入 HTML。
4. 图标颜色默认使用 `currentColor`，由父级文字色或 UDesign Token 控制。
5. 常规图标使用 16px；卡片/强提示图标使用 20px 或 24px；不得为了“AI 感”放大到插画尺寸。
6. 如果本地图标库没有语义完全一致的图标，选择最接近的官方图标，并在交付说明中记录“图标近义替代”。
7. 如果近义替代会误导业务含义，标记为“图标待补充”，不得自造。

## 图标与插图的边界

- 小图标、按钮图标、状态图标、卡片能力图标：使用本地 UDesign 图标。
- 页面主视觉、空状态大图、检测中头像、失败页插图：优先使用正式 Figma 或项目品牌资产。
- 若正式 Figma 没有插图资产，可使用 UDesign `Empty` / `Result` 的低存在感结构占位，但不得自行生成卡通机器人、笑脸、徽章或装饰插画。

## 单 HTML 内联建议

生成单 HTML 时建议建立一个小型图标函数或模板：

```text
1. 从 icon-index.json 或 svg/ 文件名选择图标。
2. 读取对应 SVG 文件内容。
3. 移除固定宽高，保留 viewBox。
4. 将 fill/stroke 统一为 currentColor（多色品牌图标除外）。
5. 按本次页面实际使用量内联到 HTML。
```

示例：

```html
<span class="ud-icon" aria-hidden="true">
  <!-- 内联来自 assets/icons/tdesign-icons/svg/search.svg 的官方 SVG -->
</span>
```

不要在 HTML 中写一套自造的 `paths = { ... }` 图标字典。

## 云随常用语义

可先查看 `icon-index.json` 中的 `yunsuiSuggestedAliases`。常用方向包括：

- 文件与上传：`file`、`file-add`、`file-search`、`upload`、`cloud-upload`
- 检测与审查：`search`、`ai-search`、`scan`、`file-safety`
- 成功与失败：`check-circle`、`close-circle`、`error-circle`
- 风险与提示：`error-triangle`、`info-circle`、`help-circle`
- 角色与关系：`user`、`usergroup`、`user-list`
- 结果与证据：`table`、`chart-bar`、`link`、`tree-list`、`git-branch`
- 设置与筛选：`setting`、`filter`、`view-list`

## 评审检查

评审 Demo 时，图标相关问题按以下方式判断：

- 使用 emoji、AI 手写 SVG 或第三方图标：P1；若影响核心语义，升为 P0。
- 图标语义错误导致用户误解操作：P0 或 P1，视业务风险决定。
- 图标尺寸、颜色、间距轻微不一致：P2。
- 页面主插图不是 Figma 资产且风格明显偏离云随：P1；若替代了核心空状态结构，升为 P0。

## 更新图标库

只有在以下情况更新本地图标库：

- 官方 TDesign Icons 发布新图标且云随需要使用。
- 当前图标存在授权、命名或渲染问题。
- 多个真实需求稳定需要新增语义映射。

更新时必须同步更新 `SOURCE.md` 的下载日期、commit 和 `icon-index.json`。
