# 个人网站：沉浸式滚动视频体验

## Context

Joy 需要一个能在求职/展示场景中留下强烈印象的个人网站。当前的 `Personal-Profile-dist/` 是普通的静态作品集页，缺乏视觉冲击力。

新版本的核心灵感来自「Scroll Video Scrubbing」技术：滚动条直接控制视频时间轴，访客每滚动一步，视频就前进一帧，形成沉浸式叙事体验。叙事主轴是**沉浸式自我介绍**，以「子弹时间片场」为世界观，逐一揭开 Joy 的 4 重身份。

---

## 设计规格

### 视觉概念

**世界观：** 一个被时间冻住的电影片场——无主角人物，镜头缓缓环绕片场空间，各种道具与人物（非 Joy 本人）悬浮定格。风格偏好好莱坞黄金时代或有年代感的复古片场，整体贯穿页面，不做场景切换。

**前景遮罩：** 仿碎裂玻璃（类似挡风玻璃），从页面外向内窥视，增强视差深度和叙事张力。

**色调：** 暗调电影感，深红/暗黑/阴影为主，左侧透入一束带颗粒感的体积光（Volumetric Light）。

### 场景元素（四重身份的具象化）

| 位置 | 元素 | 对应身份 |
|------|------|---------|
| 画面左上 | 场记板 🎬（悬浮定格） | 影视人 |
| 画面右上 | 大监（大型片场监视器）🖥️（悬浮定格） | 出海营销 |
| 画面左侧 | 正在用电脑的演员 👩‍💻（悬浮定格） | AI 工具玩家 |
| 画面右侧 | 正在拍摄中的摄影师 📸（悬浮定格） | 自媒体博主 |
| 画面中央 | 空镜——导演椅 / 摄影机 / 片场纵深 | 叙事锚点 |

### 滚动时间轴（视频约 15–18 秒，页面 500vh）

| 滚动进度 | 视频时间 | 画面状态 | 文字层 |
|---------|---------|---------|------|
| 0–15% | 0–2.5s | 帷幕/镜头推进，场景浮现 | Joy + 一句话定位淡入 |
| 15–38% | 2.5–6.5s | 场记板被追光灯打亮 | 「影视人」+ 北影/TVC/头部艺人 |
| 38–62% | 6.5–10.5s | 大监被追光灯打亮 | 「出海营销操盘手」+ TikTok SMB / 一审96% |
| 62–85% | 10.5–14.5s | 用电脑的演员被追光灯打亮 | 「AI 工具玩家」+ Vibe Coding / Claude / 扣子 |
| 85–96% | 14.5–16.5s | 摄影师被追光灯打亮 | 「自媒体博主」+ @JioJioJoy / Notion IP |
| 96–100% | 16.5–18s | 全场景亮起，帷幕重合 | 联系方式（邮箱/社媒链接）|

### 身份登场机制：追光灯

- 进入每段前，该元素保持低曝光（暗调融入背景）
- 进入该段滚动区间后，GSAP 对该元素所在区域叠加一个径向渐变的亮光层（`mix-blend-mode: screen` 或 CSS backdrop），模拟聚光灯打亮效果
- 文字从 `opacity:0, translateY:20px` 过渡到 `opacity:1, translateY:0`，触发点为进入该段约 10% 处

---

## 技术架构

### 单文件结构（`index.html`）

```
<body>
  <!-- Layer 1: 视频背景（fixed，全屏） -->
  <video id="bg-video" playsinline muted preload="auto"></video>

  <!-- Layer 2: 碎玻璃前景遮罩（fixed，pointer-events:none） -->
  <div id="crack-overlay"></div>

  <!-- Layer 3: 滚动容器（500vh，透明） -->
  <div id="scroll-container">
    <!-- 各幕文字区块，绝对定位于对应滚动区间 -->
    <section class="act" data-act="intro">...</section>
    <section class="act" data-act="film">...</section>
    <section class="act" data-act="marketing">...</section>
    <section class="act" data-act="ai">...</section>
    <section class="act" data-act="creator">...</section>
    <section class="act" data-act="outro">...</section>
  </div>

  <!-- Layer 4: 追光灯叠加层（fixed，pointer-events:none） -->
  <div id="spotlight-overlay"></div>
</body>
```

### 依赖库（CDN 引入）

| 库 | 用途 |
|----|------|
| [Lenis](https://github.com/darkroomengineering/lenis) | 平滑滚动（物理惯性阻尼） |
| [GSAP](https://gsap.com/) + ScrollTrigger | 文字动画 + 追光灯触发 |
| 原生 `requestAnimationFrame` | 视频时间轴映射循环 |

### 核心映射逻辑

```js
// Lenis 回调中实时获取进度
lenis.on('scroll', ({ progress }) => {
  video.currentTime = progress * video.duration;
});
```

### 视频技术要求

- **格式：** MP4，H.264 All-Intra（全关键帧）或 ProRes → 再转 Web 优化版
- **时长：** 15–18 秒
- **分辨率：** 1920×1080（PC 优先）
- **文件大小目标：** < 30MB（All-Intra 可能更大，视情况用图像序列替代）

### 视频生成提示词（来自 Gemini 分析，已适配 Joy 版本）

**图像生成（Midjourney / Kling）：**
> Cinematic bullet-time shot inside a vintage Hollywood-style film set, completely frozen in time. No central human subject. Floating suspended mid-air: a clapperboard top-left, a large production monitor top-right, an actress using a MacBook laptop on the left, a photographer frozen mid-shot on the right. Empty director's chair and vintage film camera at the center. Looking through a heavily cracked glass pane in the foreground. Moody cinematic lighting, dark red and deep shadow color grading, volumetric light rays from the left, 1940s Hollywood golden age aesthetic, 35mm film photography style, hyper-realistic, 8k --ar 16:9

**视频动态控制（Kling / Runway）：**
> Bullet time effect, everything completely frozen. Very slow smooth cinematic orbit camera movement around the central figure, 3D parallax depth on all elements, high definition, hyper-realistic motion.

---

## 文字层内容规格

### 序幕
- 大字：**JOY · 蒋怡**
- 副标：*影像叙事 × 出海营销 × AI 工具*
- 视觉：镜头从片场门口/帷幕外缓缓推进，片场全景浮现

### 影视人
- 标题：**🎬 影视人**
- 要点：北京电影学院 · 电影学（制片与市场）GPA 3.9 / TVC 全流程制作 / 对接刘亦菲、肖战等头部艺人

### 出海营销操盘手
- 标题：**📊 出海营销操盘手**
- 要点：TikTok SMB Promote 素材管理 / 一审通过率 96% / 覆盖东南亚·拉美·欧洲

### AI 工具玩家
- 标题：**🤖 AI 工具玩家**
- 要点：Vibe Coding 多项目实战 / Claude Code · 扣子工作流 / Obsidian 第二大脑

### 自媒体博主
- 标题：**📱 自媒体博主**
- 要点：@JioJioJoy 小红书/B站 / Notion 教程 IP / 百人私域社群

### 尾声
- 联系方式：joyjiangyi852@gmail.com
- 社媒链接占位

---

## 实施顺序

1. **创建项目目录** `03-VibeCoding/personal-website/` + 单文件 `index.html`
2. **阶段一：骨架 + Lenis 平滑滚动**（占位内容验证丝滑感）
3. **阶段二：视频挂载 + 时间轴映射**（用测试视频先跑通 scrubbing 逻辑）
4. **阶段三：文字层 + GSAP ScrollTrigger**（各段文字触发动画）
5. **阶段四：追光灯效果**（CSS 叠加层 + GSAP 控制亮度/位置）
6. **阶段五：替换真实 AI 视频**（待视频生成后替换占位视频）
7. **阶段六：碎玻璃前景遮罩 + 自定义鼠标**（视觉打磨）

---

## 文件保存位置

- 项目目录：`03-VibeCoding/personal-website/index.html`
- 设计文档：`03-VibeCoding/personal-website/docs/design.md`（本文件）
- 视觉草图：`03-VibeCoding/.superpowers/brainstorm/` 已自动保存

---

## 验证方式

1. `npx serve .` 启动本地服务，Chrome 打开
2. 滚动时视频应随滚动前进/倒退，无卡顿
3. 每段文字在对应滚动位置触发淡入
4. 追光灯在对应元素上准确亮起
5. 向上滚动时视频倒退，追光灯随之熄灭
6. 页面总高度 500vh，无横向溢出
