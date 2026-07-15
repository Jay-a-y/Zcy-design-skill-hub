# UDesign / TDesign Icons 来源记录

本目录保存 UDesign 图标资源。UDesign 在云随项目中对应 TDesign 基础设计规范，图标资产来自 TDesign Icons 官方仓库。

## 来源

- 图标页面：https://tdesign.tencent.com/icons
- 官方仓库：https://github.com/Tencent/tdesign-icons
- 下载日期：2026-07-15
- 快照 commit：`754dab4418c92b2635af615e255162983941b16a`
- 授权协议：MIT，见 [LICENSE](LICENSE)

## 本地内容

- `svg/`：官方 SVG 图标全量快照。
- `icon-index.json`：图标文件索引与云随常用语义推荐映射。
- `README.original.txt`：官方仓库 README 备份；仅作来源追溯，不作为本地 Markdown 文档入口。
- `LICENSE`：官方授权文件。

## 使用原则

生成云随单 HTML Demo 时，只从 `svg/` 中选取本次实际使用的图标，并将对应 SVG 内联到 HTML。不要把全量 SVG 注入单个 Demo。

禁止使用 AI 自行手写 SVG、emoji、Lucide、Heroicons、Font Awesome 或其他第三方图标替代 UDesign 图标。
