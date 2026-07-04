# Security Policy

## Supported Versions

当前只维护最新公开版本：`v1.0.0`。

## Installer Safety Notice

请从官方 Release 页面下载 Mineradio 安装包：

- Gitee: https://gitee.com/xiao-majie/mineradio/releases/tag/v1.0.0
- GitHub: https://github.com/Xiaohaojei568/Mineradio/releases/tag/v1.0.0

不要继续传播历史测试安装包，也不要安装来源不明的 `.exe` 文件。需要安装 Mineradio 时，请使用 `v1.0.0` 或更新版本的官方 Release 安装包。

应用内更新检查走 Gitee Release，当前 Windows 安装包已控制在 100 MB 以下，可以由 Gitee Release 直接提供更新下载。

## Reporting a Vulnerability

如果你发现安全问题，请通过 GitHub Issues、Gitee Issues 或仓库作者主页联系作者。

请不要在公开 Issue 中直接贴出 Cookie、Token、账号信息、私密链接或可复现的敏感数据。

## Sensitive Data

Mineradio 不应收集或上传用户 Cookie。用户登录状态应保存在本地用户数据目录中。

提交问题反馈前，请确认没有附带：

- `.cookie`
- `.qq-cookie`
- `.soda-cookie`
- 本地音乐文件
- 用户账号截图
- 调试日志中的 Cookie、Token 或隐私路径
