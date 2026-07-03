# Mineradio v1.1.1

本次从 `v1.1.1` 重新作为公开发布起点，清理 GitHub 上后续测试版本记录，Windows 和 macOS 安装包统一挂载到同一个 `v1.1.1` Release。

## 更新内容

- 新增汽水音乐端，接入搜索、播放、歌词、歌单、首页推荐和“我喜欢的音乐”等核心链路。
- 重整多端播放逻辑：单端登录优先使用当前端，多端登录自动切换可用音源。
- 会员与音质状态改为实时真实数据：有 VIP/SVIP 才显示，不可用音质灰化且不可切换。
- 统一会员歌曲试听逻辑：平台返回试听片段时可播放，并提示当前为试听。
- 修复播放失败后控制条歌曲与实际音频不一致的问题。
- 优化汽水歌词、视觉区域拖动后的歌词同步，以及汽水端切换/回首页时的布局短暂错乱。
- 优化左侧歌单抽屉，多端登录后不再展示多余登录提示。
- 优化应用进入和使用过程中的卡顿，减少重复渲染和状态同步开销。

## 发布资产

- Windows: `Mineradio-1.1.1-Setup.exe`
- Windows blockmap: `Mineradio-1.1.1-Setup.exe.blockmap`
- macOS Intel: `Mineradio-1.1.1-Mac-x64.dmg` / `Mineradio-1.1.1-Mac-x64.zip`
- macOS Apple Silicon: `Mineradio-1.1.1-Mac-arm64.dmg` / `Mineradio-1.1.1-Mac-arm64.zip`
