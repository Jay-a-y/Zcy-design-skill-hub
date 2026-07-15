# 安装说明

本说明用于下载、解压和放置云随项目级设计 Skill。不同工具和公司内部环境的 Skill 路径可能不同，无法确认的平台请按实际环境配置。

## 1. 下载 Skill 压缩包

从内部 Skill 集合页或设计师提供的交付包下载云随项目级设计 Skill 压缩包。

当前文档不提供虚构下载地址。下载地址应由后续集合页或内部发布流程补充。

## 2. 解压

解压后确认目录中至少包含：

- `SKILL.md`
- `agents/openai.yaml`
- `knowledge/`
- `ai-guides/`
- `ai-prompts/`
- `docs/`

`SKILL.md` 是唯一正式执行入口。

## 3. 放入工作目录

### Codex

如果使用 Codex，请放入当前 Codex 环境支持的 Skill 目录。常见方式是将整个 `云随项目设计skill/` 文件夹放入项目或用户级 Skill 目录中。

具体路径请按实际 Codex 环境配置。

### Claude Code

如果使用 Claude Code，请将整个 Skill 文件夹放入项目可读取的工作目录，并在对话中明确要求 AI 读取该 Skill。

具体路径请按实际 Claude Code 环境配置。

### 公司内部支持 Skill 的环境

请按内部平台要求上传或放置整个 Skill 文件夹。不要只上传 `SKILL.md`，否则 AI 无法读取 `knowledge/`、`ai-guides/`、`ai-prompts/` 和 `agents/openai.yaml`。

## 4. 安装后检查

确认：

- 根目录存在 `SKILL.md`。
- `agents/openai.yaml` 存在且可读。
- `manifest.json`、`README.md`、`CHANGELOG.md` 和 `VERSION` 存在。
- `knowledge/` 中有 8 个知识文件。
- 没有误放 React、Vite、Next.js、Vinext 工程目录。

## 5. 调用方式

在支持 Skill 的环境中使用：

```text
使用 $yunsui-design 读取本次需求，生成云随单 HTML Demo。
```

如果当前环境不支持 `$skill-name` 语法，请直接要求 AI 读取该文件夹中的 `SKILL.md`。
