# 长白山 AR 智慧旅游导览系统（课程设计）

基于 **AR.js + A-Frame** 的 WebAR 旅游导览应用。纯前端实现，无需安装 APP、无需后端数据库，浏览器直接运行。

## 一、功能清单
| 模块 | 功能 | 文件 |
|------|------|------|
| 首页 | 景点卡片展示、使用说明、AR入口 | index.html |
| 景点详情 | 历史介绍、游览贴士、语音讲解、收藏（localStorage） | detail.html |
| AR核心 | 识别标记、叠加3D模型、自动语音讲解、AR截图、趣味问答 | ar.html |
| 数据 | 景点数据静态JSON | js/data.js |

## 二、运行步骤（重要）
> ⚠️ **摄像头 API 只允许 HTTPS 或 localhost，不能直接双击 html 打开！**

1. 用 **VS Code** 打开本项目文件夹
2. 安装插件 **Live Server**
3. 右键 `index.html` → **Open with Live Server**
4. 浏览器访问 `http://127.0.0.1:5500/index.html`
5. 点击【进入AR实景导览】，允许摄像头权限
6. 将摄像头对准打印好的天池标记图片，识别成功即出现 AR 效果

## 三、需要你自己准备的素材（三样）
| 素材 | 放哪 | 怎么获取 |
|------|------|---------|
| **NFT标记文件** `.fset/.fset3/.isd` | `marker/` | 打开 https://ar-js-org.github.io/AR.js-Docs/image-tracking/ ，上传长白山图片导出，3个文件放入 marker 文件夹（代码 url 为 `./marker/tiandi`，不带后缀）。**把原图打印出来用于演示** |
| **3D模型** `.glb` | `models/` | Sketchfab 搜索 mountain/waterfall，筛选 License:Free，下载 glb 格式，命名 `mountain.glb` |
| **语音讲解** `.mp3` | `audio/` | 任意 AI 文字转语音工具，导出 mp3，命名 `tiandi.mp3` |

> 素材命名需与 `js/data.js` 和 `ar.html` 中的路径一致。若暂无模型，可将 ar.html 中 gltf-model 那行注释，改用一个方块测试识别。

## 四、目录结构
```
changbaishan-ar-tour/
├─ index.html
├─ detail.html
├─ ar.html
├─ js/data.js
├─ marker/   (放你的 .fset/.fset3/.isd)
├─ models/   (放 mountain.glb 等)
└─ audio/    (放 tiandi.mp3 等)
```

## 五、答辩演示建议
- 打印天池标记图片，手机对准即出现 3D 模型 + 介绍 + 语音 + 问答，演示效果强、稳定不出错。
- 可补充：GPS 定位 AR 作为报告中的拓展功能（实际演示用标记模式最稳）。
- 手机真机演示建议部署到 **GitHub Pages**（自带 HTTPS），手机直接访问即可正常调用摄像头。
