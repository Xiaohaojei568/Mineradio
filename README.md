# Mineradio

![Mineradio 暗场视觉页](./docs/assets/readme/cinema-beat-smoke.png)

Mineradio 是一款面向 Windows 桌面端的沉浸式音乐播放器。它把搜索播放、歌单、歌词舞台、实时评论气泡弹幕、粒子视觉、3D 歌单架、天气电台和 DIY 视觉控制台放在同一个桌面体验里，目标是让日常听歌更像进入一个可调校的私人音乐空间。

项目仓库：[Xiaohaojei568/Mineradio](https://github.com/Xiaohaojei568/Mineradio)

## 当前版本

当前版本：`1.1.1`

状态：Windows 纯净安装发布版。

> 安全提示：`v1.0.10` 及更早旧安装包不再建议继续安装或传播。请使用当前 Release 中的 `Mineradio-1.1.1-Setup.exe` 进行安装。

## 下载安装

正式分发以 GitHub Releases 中的 Windows 安装包为准：

[打开 Mineradio Releases](https://github.com/Xiaohaojei568/Mineradio/releases)

下载安装时请优先选择：

```text
Mineradio-1.1.1-Setup.exe
```

不建议把下面这些文件当作安装包使用：

- `Source code`
- `.blockmap`
- `latest.yml`
- `win-unpacked`

如果浏览器、Windows Defender 或 SmartScreen 提示风险，请先确认文件来自本项目 Release 页面，文件名为 `Mineradio-1.1.1-Setup.exe`。小众 Electron 桌面软件和未签名安装包有时会触发系统提示，确认来源无误后可在 SmartScreen 中选择“更多信息”再继续运行。

## 核心功能

- Windows Electron 桌面播放器，支持安装包、桌面快捷方式和本地启动。
- 网易云音乐与 QQ 音乐搜索、登录状态、歌单、歌曲播放辅助接入。
- QQ 音乐实时评论读取，视觉页支持气泡弹幕展示。
- 气泡弹幕支持开关控制、悬停暂停、爱心点赞、点击预览和回复入口。
- Home 首页包含天气电台、每日推荐、私人电台、继续听、听歌画像和我的歌单入口。
- Open-Meteo 天气电台，可根据城市、天气和 mood 生成更贴合场景的播放队列。
- 播放态视觉包含歌词舞台、封面粒子、电影镜头、节奏联动和多种视觉预设。
- DIY 视觉控制台支持预设、外观、歌词、动态和高级设置。
- 3D 歌单架支持右键唤起、歌单浏览、详情页、滚轮选择和静态常驻。
- 支持自定义专辑封面上传、裁剪、自定义歌词和歌词位置调节。
- 桌面歌词、后台性能策略、画质档位和窗口状态优化。
- GitHub Releases 更新检测与安装包下载入口。

## 使用说明

安装完成后运行 `Mineradio` 即可进入播放器。首次启动会使用内置默认视觉参数，包含 `emily` 视觉预设、粒子、歌词、高亮色、发光色和 3D 歌单架等默认配置。

视觉页的气泡弹幕只在视觉区域显示。如果在 DIY 控制台的外观页打开气泡弹幕开关，切回视觉页后弹幕会继续恢复显示。

第三方音乐平台能力依赖用户自己的账号状态和平台接口可用性。部分歌曲可能受版权、会员权限、地区或平台策略影响，无法保证所有歌曲都可以播放。

## 开发运行

```bash
npm install
npm start
```

生成 Windows 安装包：

```bash
npm run build:win
```

生成仅解包目录：

```bash
npm run build:win:dir
```

构建产物位于：

```text
dist/
```

常见产物包括：

- `Mineradio-1.1.1-Setup.exe`
- `Mineradio-1.1.1-Setup.exe.blockmap`
- `latest.yml`
- `win-unpacked/`

## 项目结构

```text
Mineradio/
├─ public/
│  ├─ index.html        # 主 UI、CSS、歌词、粒子、3D 歌单架、视觉控制台
│  └─ vendor/           # 本地前端依赖
├─ desktop/             # Electron main/preload
├─ build/               # 打包资源与安装器脚本
├─ docs/                # 项目文档、视觉记录、发布说明
├─ server.js            # 本地 API、音乐源、更新检查
├─ dj-analyzer.js       # 节奏与音频分析
├─ package.json         # 版本号、构建命令、electron-builder 配置
└─ CHANGELOG.md         # 更新日志
```

## 更新机制

Mineradio 会通过 GitHub Releases 检测新版本。远端版本高于本地版本时，软件内更新入口会展示 Release 信息，并下载对应安装包到本地用户数据目录，再交由用户确认安装。

当前项目 Release 地址：

```text
https://github.com/Xiaohaojei568/Mineradio/releases
```

## 第三方音乐平台说明

Mineradio 不是网易云音乐、QQ 音乐或任何第三方音乐平台的官方客户端，也不隶属于对应平台。

项目中的第三方平台接入仅用于个人学习、本地客户端体验和用户自有账号的播放辅助。请遵守对应平台的用户协议、版权规则和会员权益规则。项目不提供绕过付费、绕过会员、破解音质或重新分发音乐内容的能力。

## 用户数据与隐私

登录 Cookie、搜索历史、自定义封面、自定义歌词、节奏分析缓存和视觉设置等数据应只保存在本机用户数据目录或浏览器本地存储中，不应提交到仓库。

更多说明见 [PRIVACY.md](./PRIVACY.md)。

## 作者支持

如果 Mineradio 陪你多听了一首歌，也欢迎支持作者继续维护这个小播放器。

[查看支持说明](./docs/SUPPORT.md)

![Mineradio 作者支持海报](./docs/assets/support/mineradio-author-support-poster.png)

## 许可证

本项目采用 GPL-3.0 授权，详见 [LICENSE](./LICENSE)。

Mineradio 名称、Logo、界面视觉设计与原创视觉表达归项目作者所有；第三方依赖和第三方服务分别遵循其各自授权与服务条款。
