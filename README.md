# Mineradio

Mineradio 是一款 Windows / macOS 桌面音乐播放器，核心体验包括搜索、播放、歌单、歌词、3D 歌单架、粒子视觉预设、DIY 视觉控制台和应用内更新。

项目仓库：

- GitHub: https://github.com/Xiaohaojei568/Mineradio
- Gitee: https://gitee.com/xiao-majie/mineradio

## 当前版本

当前版本：`1.0.0`

状态：Vue + Vite 前端、Node 本地服务、Electron 桌面发布版。

## 下载安装

推荐从 Gitee Release 下载 Windows 安装包：

https://gitee.com/xiao-majie/mineradio/releases/tag/v1.0.0

GitHub Release 备用地址：

https://github.com/Xiaohaojei568/Mineradio/releases/tag/v1.0.0

Windows 用户下载：

```text
Mineradio-1.0.0-Setup.exe
```

不要把下面这些文件当安装包：

```text
latest.yml
*.blockmap
Source code
win-unpacked
```

如果 Windows Defender 或 SmartScreen 提示风险，请先确认文件来自上面的 Release 页面，再选择“更多信息” -> “仍要运行”。

## 核心功能

- Windows / macOS Electron 桌面播放器。
- 网易云音乐、QQ 音乐、汽水音乐搜索与播放辅助接入。
- 网易云 / QQ / 汽水登录状态与歌单同步。
- 播放态视觉包含歌词舞台、封面粒子、电影镜头、节奏联动和多种视觉预设。
- DIY 视觉控制台支持预设、外观、歌词、动态、高级设置和 3D 歌单架调整。
- 摄像头手势控制支持手掌推开粒子、捏合旋转、握拳收束。
- Home 首页包含天气电台、每日推荐、私人电台、继续听、听歌画像和我的歌单入口。
- 支持自定义专辑封面上传、裁剪、自定义歌词和歌词位置调节。

## 使用说明

安装完成后运行 `Mineradio` 即可进入播放器。

汽水音乐登录同步会读取当前 Windows 用户下的本机客户端会话：

```text
%APPDATA%\SodaMusic
```

如果汽水音乐已经登录但 Mineradio 未同步成功，请重新打开汽水音乐客户端后再点“读取本机登录”。

摄像头手势控制只在用户主动点击“手势触碰”后开启。应用会自动允许本地页面访问摄像头；如果 Windows 系统隐私设置全局禁用了摄像头，需要在系统设置中允许桌面应用访问摄像头。

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

生成 macOS 安装包：

```bash
npm run build:mac
```

生成仅解包目录：

```bash
npm run build:win:dir
```

构建产物位于：

```text
dist/
```

## 项目结构

```text
Mineradio/
├─ src/                 # Vue 前端源码
├─ public/              # 静态资源和兼容入口
├─ desktop/             # Electron main / preload
├─ server/              # Node 后端模块
├─ build/               # 打包资源和发布脚本
├─ server.js            # 本地 API 和音乐源入口
├─ dj-analyzer.js       # 节奏与音频分析
├─ package.json         # 版本号、构建命令、electron-builder 配置
└─ README.md
```

## 更新说明

应用内更新检查走 Gitee Release：

```text
https://gitee.com/xiao-majie/mineradio/releases/download/v1.0.0/latest.yml
```

当前 Windows 安装包已优化到 100 MB 以下，Gitee Release 可以直接承载应用内更新所需的完整安装包。
