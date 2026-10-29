
(function () {
  const translations = {
    "Click a platform link to visit my profile.": "点击平台链接，查看账号主页。",
    "Creating content around AI tools, knowledge management and workflows, with 6K+ followers across platforms. Built and commercialized original Notion products, and collaborated with AI brands including Qwen, GLM and Doubao.": "围绕 AI 工具、知识管理与工作流持续创作，全网积累 6K+ 粉丝；打造并商业化原创 Notion 产品，与千问、GLM、豆包等 AI 品牌开展内容合作。",
    'Overview': '概览',
    'Film': '影视作品',
    'Commercial Reel': '商业广告',
    'Global': '全球内容',
    'AI Tools': 'AI 工具',
    'Social Media': '社交媒体',
    'Templates': '模板',
    'Influencer': '自媒体',
    'Contact': '联系我',
    'Content maker.': '内容创作者。',
    'Data reader.': '数据洞察者。',
    'AI builder.': 'AI 构建者。',
    'Here for global markets.': '面向全球市场。',
    'About Me ↓': '关于我 ↓',
    'Connecting content creativity, hands-on AI practice and global growth.': '连接内容创意、AI 实践与海外增长。',
    "A Beijing Film Academy graduate with experience on TVC productions for leading brands and across content strategy, creative production, ad campaigns and performance analysis for TikTok overseas projects. I also integrate AI into content production and workflow automation.": '北京电影学院毕业，参与过头部品牌 TVC 制作，在 TikTok 海外业务中积累了从内容策略、创意制作到广告投放与数据优化的全流程经验，并将 AI 融入内容生产与工作流自动化。',
    'Alongside this work, I run AI-focused social media channels and build my own digital products, with hands-on experience spanning user insights, product development, content marketing and monetization.': '同时运营 AI 赛道自媒体，打造自己的数字产品，开展从需求洞察、产品搭建到内容推广与商业化的完整实践。',
    'Background': '背景',
    'Where I learned to build content, end to end.': '我在这里学习如何从头到尾完成内容创作。',
    'Beijing Film': '北京电影',
    'Academy': '学院',
    'Beijing, China': '中国，北京',
    'Short films, series, and festival credits — production from set to screen.': '短片、剧集与电影节履历，从片场到银幕的完整制作经验。',
    'Award': '奖项',
    'A selection of commercial TVC productions with top brands and artists.': '精选商业广告作品，与头部品牌及艺人合作。',
    'View all commercial credits': '查看全部商业项目',
    'Selected works from overseas content operations.': '精选海外内容运营作品。',
    'Wish Queue Mode': '愿望队列模式',
    'League Match': '联赛对战',
    'TikTok AIGC': 'TikTok AI 内容',
    'Promote Social Channel': 'Promote 社交频道',
    'Language: EN': '语言：英语',
    'Language: KR': '语言：韩语',
    'Language: BR': '语言：葡萄牙语',
    'Watch on YouTube ↗': '在 YouTube 观看 ↗',
    'Watch Video ↗': '观看视频 ↗',
    '<span class="copy-en">Selected projects and tools, built to share.</span><span class="copy-zh">已公开分享的产品与工具。</span>': '创意实验与氛围编程项目。',
    'SHOWCASE': '项目展示',
    'Project Archive': '项目档案',
    'Vibe Coding, built in public.': '公开构建的 Vibe Coding 项目。',
    '10 builds tracked': '已收录 10 个项目',
    'Synced 2026.08.03': '同步于 2026.08.03',
    'Open Source': '开源项目',
    'Open Source Skill': '开源 Skill',
    'Live Web App': '在线 Web 应用',
    'AI Workflow': 'AI 工作流',
    'Visual Workspace': '可视化工作台',
    'Visual Tooling': '视觉工具',
    'Image Workflow': '图像工作流',
    'Reference System': '参考系统',
    'Codex Skill': 'Codex Skill',
    'Agent Toolkit': 'Agent 工具包',
    'Workflow Router': '工作流路由',
    'Knowledge Hub': '知识中心',
    'Open GitHub ↗': '打开 GitHub ↗',
    'Open project ↗': '打开项目 ↗',
    'A channel-level AI video workspace connecting project setup, scripts, shot lists, visual cards, covers, publishing copy, and reviews.': '一套频道级 AI 视频工作台，串联项目创建、脚本、镜头清单、视觉卡片、封面、发布文案与复盘。',
    'A single-entry Codex workflow that routes a video from script and visual planning through review, card production, and export.': '单入口 Codex 视频工作流，将脚本与视觉规划一路路由到审核、卡片制作和导出。',
    'A local-first visual AI workspace that maps projects, skills, and resources while keeping every scan private and user-approved.': '本地优先的可视化 AI 工作台，把项目、Skills 与资源绘制成地图，并确保扫描保持私密、由用户授权。',
    'A React studio for organizing, composing, and testing reusable explainer panels for tutorial and social video production.': '用于教程与自媒体视频制作的 React 工作台，可组织、组合并测试可复用的讲解面板。',
    'A local visual cover generator that turns one title and selected references into independent 3:4, 4:3, and 16:9 compositions.': '本地可视化封面生成器，将一个标题与所选参考扩展成独立的 3:4、4:3 与 16:9 构图。',
    'A searchable visual reference playground for covers, explainer panels, motion graphics, subtitles, comparisons, and B-roll.': '可检索的视觉参考游乐场，收纳封面、讲解面板、动态图形、字幕、对比画面与 B-roll。',
    'An editable 4:3 HTML animation-slide system for narration videos, explainers, social inserts, and approved card-copy decks.': '可编辑的 4:3 HTML 动画幻灯系统，用于口播视频、讲解内容、自媒体插入画面与定稿卡片文案。',
    'A reusable animated HTML card-video toolkit with editable typography, annotations, layout controls, and local video export.': '可复用的 HTML 动画卡片视频工具，支持字体编辑、标注、布局控制与本地视频导出。',
    'A one-command starter kit for three token-saving Agent skills: Ponytail, NotebookLM, and Skill Creator.': '一条命令安装三款节省 Token 的 Agent Skills：Ponytail、NotebookLM 与 Skill Creator。',
    'A curated hub for useful AI resources, tools, learning notes, practical workflows, and discoveries gathered along the way.': '一个持续整理 AI 资源、工具、学习笔记、实用工作流与探索发现的知识中心。',
    'A curated hub for AI resources, tools, and learning notes.': '一个整理 AI 资源、工具与学习笔记的分享空间。',
    'Built to share useful references, workflows, and discoveries for anyone exploring AI.': '分享实用参考、工作流，以及我在探索 AI 过程中的发现。',
    'A local-first visual AI workspace that turns projects, skills, and resources into one navigable map.': '一个本地优先的可视化 AI 工作台，把项目、Skills 与资源整合成一张可探索的工作地图。',
    'Designed with privacy-aware scanning and explicit user approval at every step.': '以隐私为前提进行扫描，每一步都由用户明确授权。',
    'Projects': '项目',
    'Developing': '开发中',
    'Enter Lab': '进入实验室',
    'View Project': '查看项目',
    'Preview Only': '仅预览',
    'Content creation and sharing around AI tools, knowledge management and workflows.': '围绕 AI 工具、知识管理与工作流的内容创作与分享。',
    'To be': '未完',
    'continued.': '待续。',
    'Index': '导航',
    'Commercial credits / selected archive': '商业项目 / 精选档案',
    'Close': '关闭',
    'Short Film · 制片助理': '短片 · 制片助理',
    'Documentary · Production Manager': '纪录片 · 制片主任',
    'Short Film · Production Manager': '短片 · 制片主任',
    'Web Series · Executive Producer': '网络剧 · 执行制片人',
    'Beijing Film Academy': '北京电影学院',
    'Tencent Video · 19 episodes': '腾讯视频 · 19 集',
    'Official Selection · Zhejiang Golden Roc Film Festival': '浙江青年电影周金鹏奖 · 入选作品',
    '30th Beijing College Student Film Festival · International Student Original Film Selection': '第30届北京大学生电影节 · 国际大学生原创影片推选入选作品',
    '17th Cyprus International Film Festival “Golden Aphrodite” · Official Selection': '第17届塞浦路斯国际电影节“金色阿芙洛狄忒” · 入围',
    '2nd Youality International Short Film Festival · World Peace Award': '第2届 Youality 国际短片电影节 · 世界和平奖',
    '3rd Uruvatti International Film Festival · Best International Short Film': '第3届乌鲁瓦蒂国际电影节 · 最佳国际短片',
    '2022 Shanghai International Short Film Week · SHISW Short Awards Official Selection': '2022 上海国际短片周 · SHISW 短片奖入围',
    'New Year Goods': '年货节',
    'Hotpot': '火锅篇',
    'Old New Driver': '新老司机',
    'U7 Launch': '仰望 U7 发布',
    'Wave to the World': '挥手见世界',
    'Brand Announcement': '品牌官宣',
    'Christmas Special': '圣诞特别篇',
    'CNY': '春节项目',
    'Mystery City Horror': '迷城惊变',
    'I Come From You': '我来自于你',
    'Commercial': '商业广告',
    'A Clean Mother': '一个干净的妈妈'
  };

  const additional = {
  "首页": "Home",
  "开发者与项目": "Projects & Development",
  "模板 · JioJioJoy": "Templates · JioJioJoy",
  "开发者与项目 · JioJioJoy": "Projects & Development · JioJioJoy",
  "探索模板 ↗": "Explore templates ↗",
  "查看实战案例 ↓": "Explore case studies ↓",
  "北京电影学院 · Beijing, China": "Beijing Film Academy · Beijing, China",
  "把收藏过的内容，变成可以再次使用的知识。": "Turn what you collect into knowledge you can use again.",
  "从一个小习惯开始，找到适合自己的学习方式。": "Start with a small habit. Find your own way to learn.",
  "知识库模板 · NOTION / FLOWUS": "KNOWLEDGE LIBRARY TEMPLATE · NOTION / FLOWUS",
  "给阅读、观看与思考，一个共同的归处。": "A shared home for what you read, watch and think.",
  "将多种资料与笔记，整理成自己的知识系统。": "Organize your resources and notes into a personal knowledge system.",
  "探索知识库": "Explore the library",
  "播客学习笔记 · NOTION · 三种语言版本": "PODCAST NOTES · NOTION · THREE LANGUAGE EDITIONS",
  "从一段播客开始，留下自己的思考。": "Start with a podcast. Keep your own reflections.",
  "把节目、重点和笔记整理到一起，方便再次回看。": "Keep episodes, highlights and notes together for easy revisiting.",
  "查看播客模板": "Explore podcast notes",
  "从哪里开始？": "Where should you start?",
  "想认真整理听过的播客？": "Want to make more of the podcasts you listen to?",
  "从 ¥9.9 的播客模板开始，建立节目、频道与个人笔记的联系。": "Start with the ¥9.9 podcast template to connect episodes, channels and your notes.",
  "想把书、视频、播客和笔记放在一起？": "Want your books, videos, podcasts and notes in one place?",
  "选择 ¥99 的知识库模板，按主题、领域和人物组织不同来源的内容。": "Choose the ¥99 knowledge library to organize sources by topic, field and people.",
  "还在探索 AI 工具？": "Still exploring AI tools?",
  "查看项目与上手指南 ↗": "Explore projects & guides ↗",
  "也做一些，有意思的小工具。": "Small tools. Curious experiments.",
  "在线体验、原型与本地工作流。": "Live experiences, prototypes and local workflows.",
  "每个项目都有自己的使用方式。": "Each project has its own way to get started.",
  "用手势与星光互动的网页作品。": "A web experience for interacting with starlight through gestures.",
  "在线体验 ↗": "Try it live ↗",
  "花艺灵感与图片预览原型，AI 生成功能尚未接入。": "A floral inspiration and image preview prototype. AI generation is not connected yet.",
  "原型体验 ↗": "Explore the prototype ↗",
  "将视频与播客整理为学习笔记的归档工作流。": "An archival workflow that turns videos and podcasts into learning notes.",
  "使用指南 ↗": "Read the guide ↗",
  "返回个人网站": "Back to the portfolio",
  "联系 Joy ↗": "Contact Joy ↗",
  "邮箱地址": "Email address",
  "输入你的邮箱": "Enter your email",
  "登录 / 注册 ↗": "Log in / Sign up ↗",
  "登录 / 注册": "Log in / Sign up",
  "从这里，开启你的探索。": "Your next discovery starts here.",
  "账号功能即将开放": "Accounts coming soon",
  "关闭登录窗口": "Close login dialog",
  "欢迎，新的好奇心。": "Welcome, curious mind.",
  "使用邮箱登录或创建账号。": "Log in or create an account with your email.",
  "邮箱登录 · 即将开放": "Email login · Coming soon",
  "账号服务尚未开放，当前不会发送邮件或保存邮箱。购买模板仍可直接联系 Joy。": "Accounts are not available yet. No emails are sent or saved. Contact Joy to purchase a template.",
  "账号与在线领取尚未开放。购买与领取请先联系 Joy。": "Accounts and online delivery are not available yet. Contact Joy to purchase and receive your template.",
  "跳至作品": "Skip to projects",
  "让好奇心，": "Give curiosity",
  "有个形状。": "a shape.",
  "我是 Joy。做内容，也把创作与日常里的小问题，做成可以体验的工具。": "I'm Joy. I create content and build tools for the small challenges in creative work and everyday life.",
  "SELECTED PROJECTS / 项目选集": "SELECTED PROJECTS",
  "探索、尝试，然后做出来。 ↙": "Explore, experiment, then build. ↙",
  "让人物走进蓝调时刻": "Step into the blue hour",
  "交互实验 · 在线体验": "INTERACTIVE EXPERIMENT · LIVE EXPERIENCE",
  "项目详情": "Project details",
  "在线交互作品": "Interactive web experience",
  "可在线体验": "Available online",
  "把静态风景变成可以参与的画面，探索人物、折射与星光之间的关系。": "Turn a still landscape into a scene you can join. Explore people, refraction and starlight.",
  "适合谁": "Who it's for",
  "喜欢电影感视觉、想尝试摄像头交互的创作者。": "Creators who enjoy cinematic visuals and want to experiment with camera interaction.",
  "现在能做": "What it does",
  "蓝调背景、示例人物、玻璃效果参数与摄像头互动。": "Blue-hour scenes, sample figures, adjustable glass effects and camera interaction.",
  "打开在线体验": "Try it live",
  "查看源码": "View source",
  "反馈这个项目": "Share feedback",
  "上手步骤与使用限制": "Getting started & limitations",
  "打开在线体验，先查看示例人物。": "Open the live experience and explore the sample figure first.",
  "调整「玻璃存在感」「折射幅度」「人物边界」，比较画面变化。": "Adjust glass visibility, refraction strength and figure edges to compare the results.",
  "如需真人参与，点击「让人物进入画面」，自行选择是否允许摄像头。": "To join the scene, select the camera entry option and choose whether to allow camera access.",
  "试用时观察": "What to look for",
  "示例画面随参数变化；开启摄像头后，尝试让自己进入场景。": "Watch the sample change as you adjust the settings. Enable the camera to step into the scene.",
  "前置条件与限制": "Requirements & limitations",
  "无需摄像头即可先看示例。真人互动需要摄像头权限；识别效果会受光线、设备性能和浏览器影响。若无法进入画面，检查浏览器权限后重试。": "You can explore the sample without a camera. Live interaction requires camera permission; lighting, device performance and your browser affect detection. Check browser permissions if you cannot enter the scene.",
  "把听过、看过的内容留下来": "Keep what you watch and listen to",
  "知识管理 · 本地 Skill": "KNOWLEDGE MANAGEMENT · LOCAL SKILL",
  "本地 AI 工作流": "Local AI workflow",
  "需本地环境": "Local setup required",
  "收藏分散在不同平台，听完看完之后，很难回到原来的重点。": "Bookmarks spread across platforms make it hard to revisit the ideas that matter.",
  "持续学习、希望将视频与播客整理为笔记的人。": "Lifelong learners who want to turn videos and podcasts into organized notes.",
  "围绕来源链接收集信息、整理 Markdown 笔记，并衔接 NotebookLM 分析与知识库归档。": "Collect source information, organize Markdown notes and connect NotebookLM analysis with knowledge-base archiving.",
  "阅读使用指南": "Read the guide",
  "先阅读使用指南，核对支持的平台和本地代理环境。": "Read the guide and check supported platforms and local agent requirements.",
  "提供一个可访问的视频或播客链接，说明希望保存到哪里。": "Provide an accessible video or podcast link and specify where to save the notes.",
  "检查来源、摘要与待办，再保存到自己的笔记系统；需要同步时配置对应账号。": "Review sources, summaries and action items before saving. Configure the relevant accounts if you want to sync.",
  "得到带来源链接、重点整理和状态说明的笔记。可用请求示例：「整理这期播客，保留来源和重点，只保存到本地。」": "Get notes with source links, key ideas and status details. Try: ‘Summarize this podcast, keep the source and key points, and save locally only.’",
  "需要可运行 Skill 的本地 AI 代理与相应账号配置。平台访问限制、转写质量和第三方服务可用性会影响结果；AI 整理需要人工核对。此工作流不包含在付费模板内。": "Requires a local AI agent that supports Skills and the relevant account setup. Platform access, transcription quality and third-party availability affect results. Review AI-generated notes. This workflow is not included in paid templates.",
  "给项目与工具一张地图": "A map for your projects and tools",
  "可视化工作台 · 本地 Skill": "VISUAL WORKSPACE · LOCAL SKILL",
  "本地工作台 · Skill": "Local workspace · Skill",
  "本地运行": "Runs locally",
  "项目目录、浏览器资源与代理入口分散，需要一个能看见整体结构的工作台。": "Bring scattered project folders, browser resources and agent entry points into one workspace.",
  "同时使用多个项目、Skill 和知识资源的 AI 工具使用者。": "AI users working across multiple projects, Skills and knowledge resources.",
  "用可视化地图组织工作流、项目、资源、Skill 与 Inbox，连接已有工作入口。": "Organize workflows, projects, resources, Skills and your Inbox on a visual map linked to your existing tools.",
  "打开仓库 README 与使用指南，了解代理和运行环境要求。": "Read the repository README and guide for agent and runtime requirements.",
  "告诉本地 AI 代理希望整理哪些目录，确认读取范围与工作台结构。": "Tell your local AI agent which folders to organize, then confirm the reading scope and workspace structure.",
  "按指南生成自己的工作台，检查项目、资源和 Skill 入口是否正确。": "Follow the guide to build your workspace and check the project, resource and Skill links.",
  "一张连接自己真实项目和资源的本地工作地图；这里展示的是已有工作台截图。": "A local map connecting your real projects and resources. The image shown here is an existing workspace screenshot.",
  "需本地 AI 代理与环境配置，不能在本站直接运行。扫描范围由使用者选择；不要将含个人路径或私人资源的工作台直接公开。": "Requires a local AI agent and environment setup; it cannot run on this website. You choose the scan scope. Do not publish a workspace containing personal paths or private resources.",
  "从一张灵感图，走近花艺": "From an inspiration image to floral ideas",
  "花艺灵感 · 网页原型": "FLORAL INSPIRATION · WEB PROTOTYPE",
  "网页原型 · AI 生成未接入": "Web prototype · AI generation not connected",
  "原型": "Prototype",
  "从喜欢的画面到具体花艺表达，往往缺少直观参考。": "Bridge the gap between an image you love and a floral arrangement you can imagine.",
  "寻找花束配色、季节花材和养护灵感的人。": "Anyone looking for bouquet palettes, seasonal flowers and care inspiration.",
  "花束灵感册、当季花材与养护手记；图片选择提供本地预览。": "Bouquet inspiration, seasonal flowers and care notes, with local previews of selected images.",
  "浏览网页原型": "Explore the prototype",
  "打开原型，浏览灵感册中的花束参考。": "Open the prototype and browse bouquet references in the inspiration gallery.",
  "查看当季花材，展开养护手记。": "Explore seasonal flowers and expand the care notes.",
  "如需尝试图片入口，可选择灵感图查看本地预览；不会生成新的花束方案。": "Choose an inspiration image to preview it locally. This does not generate a new bouquet design.",
  "找到可参考的花材与养护信息，体验灵感图的预览路径。": "Explore flower references and care information, then try the inspiration-image preview.",
  "这是交互与视觉原型。AI 花束生成尚未接入；页面中的花束是现有展示内容，不能视为基于上传图片生成的结果。": "This is a visual and interaction prototype. AI bouquet generation is not connected. Displayed bouquets are existing examples, not results generated from uploaded images.",
  "从一个小小的「如果」，到一个真实的作品。": "From a small ‘what if’ to something real.",
  "实战案例 ↗": "Case studies ↗",
  "回到顶部 ↑": "Back to top ↑",
  "内容创作、海外增长与 AI 实践。": "Content creation, global growth and hands-on AI.",
  "从一个想法，到一个真实的作品。": "From an idea to something real.",
  "小红书 ↗": "Xiaohongshu ↗",
  "B站 ↗": "Bilibili ↗",
  "邮箱 ↗": "Email ↗",
  "认识 JOY": "ABOUT JOY",
  "教育背景": "Education",
  "经历与能力": "Experience & skills",
  "个人内容与社媒": "Content & social media",
  "联系与合作": "Contact & collaboration",
  "作品与案例": "WORK & CASE STUDIES",
  "海外运营案例": "Overseas operations",
  "AI 工具展示": "AI tool showcase",
  "TVC 商业制作": "Commercial productions",
  "电影作品": "Film projects",
  "浏览全部": "Browse all",
  "项目与使用指南": "Projects & guides",
  "合作艺人": "Featured artists",
  "合作导演": "Directors",
  "影片时长": "Runtime",
  "当艺术生用Vibe Coding做作品集": "An art student's portfolio, built with vibe coding",
  "当知识遇上 AI 知识管理进入自动化时代⚡️": "When knowledge meets AI: automated knowledge management",
  "5分钟学会！Notion高阶专题页搭建指南 📑": "Build advanced Notion topic pages in five minutes",
  "我如何用Obsidian+AI复刻Karpathy笔记法": "Recreating Karpathy's note-taking approach with Obsidian and AI",
  "无痛刷推特三件套｜快速掌握 AI 一手信息": "Three tools for keeping up with AI on X",
  "VibeCoding 实时同步的工作台": "A live-sync workspace built with vibe coding",
  "AI主题研究自动化工作流【省Token版】": "An automated AI research workflow that saves tokens",
  "我用Vibe Coding把思念化作满天繁星": "Turning memories into a sky full of stars with vibe coding",
  "美团外卖": "Meituan Delivery",
  "刘亦菲": "Liu Yifei",
  "郑钦文": "Zheng Qinwen",
  "成毅": "Cheng Yi",
  "鹿晗": "Lu Han",
  "优酸乳": "YouSuanRu",
  "吴镇宇": "Francis Ng",
  "神州租车": "CAR Inc.",
  "张颂文": "Zhang Songwen",
  "比亚迪仰望U7": "BYD Yangwang U7",
  "京东服饰": "JD Fashion",
  "英雄联盟手游": "League of Legends: Wild Rift",
  "赵露思": "Zhao Lusi",
  "纽崔莱": "Nutrilite",
  "吉克隽逸": "Jike Junyi",
  "时代少年团": "Teens in Times",
  "CF手游": "CrossFire Mobile",
  "古天乐 · 林更新": "Louis Koo · Lin Gengxin",
  "何穗": "He Sui",
  "宋佳": "Song Jia",
  "精选内容": "SELECTED CONTENT",
  "展开全部作品 +": "Explore the collection +",
  "展开全部作品": "Explore all works",
  "收起作品": "Collapse collection",
  "项目上手指南与源码 ↗": "Project guides & source code ↗",
  "未设项目席位": "UNASSIGNED SEATS"
};
  Object.assign(additional, {"我的作品集": "My portfolio", "好奇心收藏集": "THE JOY COLLECTION", "为好奇心而做。": "Built for a curious mind.", "少一些收藏。": "Less collecting.", "多一些连接。": "More connecting.", "找到你的起点": "FIND YOUR START", "工具与实验": "TOOLS & EXPERIMENTS", "从一段播客开始": "START WITH A PODCAST", "独立实验室": "THE INDEPENDENT LAB", "因好奇而创造。": "Built with curiosity.", "精选项目": "SELECTED PROJECTS", "你的账号": "JIOJIOJOY · YOUR ACCOUNT", "知识库": "Knowledge Library", "播客笔记": "Podcast Notes", "Knowledge Library｜知识库模板 · JioJioJoy": "Knowledge Library Template · JioJioJoy", "Podcast Notes｜播客学习笔记 · JioJioJoy": "Podcast Notes Template · JioJioJoy", "联系 ↗": "Contact ↗", "点击图片放大 ↗": "Click to enlarge ↗", "功能介绍以 Notion 版展示；FlowUs 版功能与价格相同。": "Features are demonstrated in Notion. The FlowUs edition has the same features and price.", "关闭 ×": "Close ×", "给阅读、观看与思考，": "For what you read, watch and think,", "一个共同的归处。": "a place to belong.", "整理书籍、播客、视频与零散笔记，通过主题、领域和人物建立联系。让每一次输入，都有地方安放。": "Organize books, podcasts, videos and notes. Connect them through topics, fields and people, so every new idea has a home.", "知识库模板 · 按所选平台交付": "KNOWLEDGE LIBRARY TEMPLATE · DELIVERED FOR YOUR CHOSEN PLATFORM", "选择你常用的软件": "Choose your platform", "已选择": "Selected:", "版 · 两版价格与功能一致，交付链接不同。": "edition · Same price and features; separate delivery links.", "联系购买 ↗": "Contact to purchase ↗", "观看完整演示 ↓": "Watch the full demo ↓", "联系 Joy 确认版本后购买。模板价格不包含第三方 AI 服务费用。": "Confirm your edition with Joy before purchasing. Third-party AI services are not included.", "跟我一起，走进知识库。": "Take a tour of the library.", "约 6 分钟，了解界面、分类与记录方式。": "A six-minute tour of the interface, categories and note-taking workflow.", "视频使用 Notion 版演示。": "The video demonstrates the Notion edition.", "你的浏览器不支持视频播放。": "Your browser does not support video playback.", "00:33 主界面": "00:33 Overview", "02:15 图书馆与 AI": "02:15 Library & AI", "03:15 视频分类": "03:15 Video categories", "05:00 专题回顾": "05:00 Topic review", "AI 生成能力取决于所用平台与服务权限，演示效果不代表模板包含 AI 订阅。": "AI features depend on your platform and service access. The demo does not imply an AI subscription is included.", "收进来，再让它们联系起来。": "Collect ideas. Connect them.", "不止保存一个链接。根据内容类型记录，再通过主题与人物重新找到它。": "Go beyond saving links. Capture each type of content, then rediscover it through topics and people.", "不同内容，不同记录方式": "Different content, different ways to capture it", "书籍、播客和视频分开整理。艺术类视频记录故事与感受，知识类视频提炼框架与观点。": "Organize books, podcasts and videos separately. Capture stories and impressions from artistic videos, and frameworks and ideas from educational content.", "从一条笔记，找到更多联系": "Discover connections from a single note", "保存值得留下的摘录与想法，将人物和相关作品组织在一起，为再次探索提供线索。": "Keep meaningful excerpts and ideas. Link people with their work to create paths for further exploration.", "按主题与时间，回顾积累": "Review your learning by topic and time", "用文件夹组织专题，用领域归纳知识。按时间范围汇总相关资料，回看一段时间的学习内容。": "Organize topics in folders and knowledge by field. Review related resources within a time period to reflect on your learning.", "一套可以继续生长的结构。": "A structure that grows with you.", "模板与使用说明": "Template & instructions", "知识库主界面与内容分类入口": "Library dashboard and category navigation", "图书、视频、播客、笔记与碎片等内容模块": "Modules for books, videos, podcasts, notes and ideas", "人物、领域与专题文件夹的组织方式": "Organization for people, fields and topic folders", "对应平台的模板复制链接与使用指南": "Template duplication link and guide for your platform", "选择平台，不用重新选择功能。": "Choose your platform. Keep the same features.", "Notion 与 FlowUs 版本价格、功能一致。购买前选好常用软件，交付时获取对应的模板链接。": "Notion and FlowUs editions offer the same features at the same price. Choose your platform before purchasing to receive the right link.", "AI 是辅助能力，也可以按自己的方式记录。": "Use AI for support, or take notes your own way.", "模板不包含第三方 AI 订阅。你可以配合平台 AI 功能使用，也可以先通过其他工具整理，再将内容放入知识库。": "Third-party AI subscriptions are not included. Use your platform's AI features, or organize content with other tools before adding it to the library.", "你可能想知道。": "Questions you might have.", "Notion 和 FlowUs 版本有什么区别？": "How do the Notion and FlowUs editions differ?", "两个版本的价格和功能一致，区别是运行的软件与交付链接。请根据日常使用习惯选择；这里展示的视频使用 Notion 版录制。": "Both editions have the same features and price. The platform and delivery link differ. Choose the software you use; the demo video was recorded in Notion.", "¥99 是否包含 AI 服务？": "Does ¥99 include AI services?", "不包含。模板与平台提供的 AI 服务是不同的内容。相关功能的可用性与费用以所用软件和服务权限为准，也可以使用第三方工具整理后手动录入。": "No. The template and platform AI services are separate. Features and fees depend on your software and access. You can also use other tools and add the results manually.", "购买后怎样使用？": "How do I use it after purchasing?", "完成购买后，获取所选平台的模板链接。登录对应软件，按使用指南复制到自己的空间，即可开始整理。通过页面上的联系入口与 Joy 确认购买，再获取对应的领取说明。": "After purchasing, receive the link for your chosen platform. Sign in and follow the guide to duplicate it into your workspace. Contact Joy through this page to confirm your purchase and receive delivery instructions.", "模板可以分享或转售吗？": "Can I share or resell the template?", "模板为原创设计，禁止二次分发及商用。请通过官方渠道购买；具体交付与售后问题可联系 Joy。": "This is an original design. Redistribution and commercial use are prohibited. Purchase through official channels and contact Joy about delivery or support.", "让下一次学习，有迹可循。": "Leave a trail for your next discovery.", "版": "edition", "微信联系 Joy 购买": "Contact Joy on WeChat to purchase", "保存二维码 ↓": "Save QR code ↓", "联系 Joy 时，请告知上方产品与版本，确认后获取对应模板。": "Tell Joy the product and edition shown above. Once confirmed, you will receive the corresponding template.", "也可以邮件联系 ↗": "Or contact by email ↗", "复制邮箱地址": "Copy email address", "邮箱已复制": "Email copied", "请手动复制上方邮箱": "Please copy the email above manually", "左右滑动查看全部 10 张商品图。AI 整理流程需配合第三方工具使用。": "Swipe through all 10 product images. AI-assisted organization requires third-party tools.", "让听过的播客，": "Let every podcast", "留下自己的思考。": "leave room for your thoughts.", "把节目、频道、重点摘录和个人笔记放到一起。从一次认真听完，到下一次轻松找到。": "Bring episodes, channels, highlights and personal notes together. Listen closely now, find your ideas easily later.", "Notion 模板 · 三种语言版本": "NOTION TEMPLATE · THREE LANGUAGE EDITIONS", "包含中文、英文与中英双语版本，选择你习惯的记录语言。": "Includes Chinese, English and bilingual editions. Choose the language you prefer for your notes.", "查看模板内容 ↓": "Explore the template ↓", "微信联系 Joy 购买。转写与 AI 分析服务需自行准备。": "Contact Joy on WeChat to purchase. Transcription and AI analysis services must be arranged separately.", "听过、记过，也能重新找到。": "Listen. Capture. Rediscover.", "节目与频道、专题与领域、自己的原子笔记，放在一个有联系的学习空间里。": "Connect episodes, channels, topics, fields and your own atomic notes in one learning space.", "看我如何整理一段播客 · 小红书 ↗": "See my podcast workflow · Xiaohongshu ↗", "从输入，到自己的理解。": "From listening to understanding.", "保存一集节目": "Save an episode", "记录节目与频道，放入相关的专题和领域。也可以配合浏览器收藏工具录入。": "Capture the episode and channel, then link relevant topics and fields. Browser clipping tools can help.", "整理重点与感受": "Capture key ideas and reflections", "用预设笔记结构留下重点，也可以借助转写或 AI 工具，再补上自己的理解。": "Use the note structure to capture key points. Optionally use transcription or AI tools, then add your own interpretation.", "留下可复用的笔记": "Create notes you can reuse", "将值得保留的想法单独记录。下次沿着频道、主题或领域，再次找到相关内容。": "Save meaningful ideas as individual notes. Rediscover related content through channels, topics and fields.", "一段播客之外，还有完整的整理方式。": "Beyond an episode: a complete way to organize.", "你会获得": "What you get", "播客主界面与节目笔记框架": "Podcast dashboard and episode note framework", "频道库、专题文件夹与领域库": "Channel library, topic folders and fields", "用于记录观点与摘录的原子笔记库": "Atomic notes for ideas and excerpts", "中文、英文、中英双语三种版本与复制说明": "Chinese, English and bilingual editions with duplication instructions", "适合从一个具体习惯开始的你。": "Start with one meaningful habit.", "如果播客是你重要的学习来源，可以先把这一类内容整理好。模板提供记录与关联的结构，不包含自动转写服务。": "If podcasts are a key learning source, start by organizing them. This template provides structure and connections; automatic transcription is not included.", "如果你也希望一起管理书籍、视频和更多资料，可以看看": "To also organize books, videos and other resources, explore", "开始前的几个问题。": "Before you get started.", "这是 Notion 模板，还是一个独立软件？": "Is this a Notion template or a standalone app?", "这是可以复制到自己 Notion 空间的模板，需要使用 Notion。它不是独立 App，也不是自动转写服务。": "This template is duplicated into your Notion workspace and requires Notion. It is not a standalone app or an automatic transcription service.", "三种语言版本需要分别购买吗？": "Do I need to buy each language edition separately?", "¥9.9 产品的领取指南提供中文、英文、中英双语三个版本链接，你可以选择适合自己的版本使用。": "The ¥9.9 product includes links to Chinese, English and bilingual editions. Choose whichever suits you.", "能自动把播客转成笔记吗？": "Does it automatically turn podcasts into notes?", "模板本身不负责转写。你可以自行记录，或配合转写、AI 工具整理内容，再放入模板。外部工具的费用与使用条件需另行确认。": "The template does not transcribe audio. Take notes yourself or use transcription and AI tools before adding content. Check external tools' fees and requirements separately.", "与 ¥99 的 Knowledge Library 怎么选？": "How does it compare with the ¥99 Knowledge Library?", "播客模板聚焦节目学习与笔记；Knowledge Library 面向书籍、视频、播客及多种资料的统一管理。按自己的实际整理范围选择即可。": "Podcast Notes focuses on learning from episodes. Knowledge Library organizes books, videos, podcasts and more. Choose based on what you want to manage.", "怎样领取与获得帮助？": "How do I receive the template and get help?", "完成购买后获取模板复制链接及说明。通过页面上的联系入口与 Joy 确认购买。模板为原创设计，禁止二次分发或商用。": "Receive the duplication link and instructions after purchasing. Contact Joy through this page to confirm. This original template may not be redistributed or used commercially.", "从下一集播客开始。": "Start with your next episode.", "Podcast Notes · ¥9.9 · Notion 模板": "Podcast Notes · ¥9.9 · Notion template", "Notion 知识库封面": "Notion library cover", "FlowUs 知识库封面": "FlowUs library cover", "Notion 播客笔记封面": "Notion podcast notes cover", "主界面介绍": "Dashboard overview", "知识类别": "Knowledge categories", "内容模板": "Content templates", "领域与专题总结": "Fields & topic review"});
  Object.assign(additional, {"播客主界面一览": "Podcast dashboard overview", "笔记基础信息": "Note details", "章节摘要与高亮笔记": "Chapter summaries & highlights", "延伸阅读与原子笔记": "Further reading & atomic notes", "AI 笔记分析流程": "AI note analysis workflow", "播客笔记模板": "Podcast note template", "频道与文件夹": "Channels & folders", "领域与原子笔记": "Fields & atomic notes", "播客主界面模板": "Podcast dashboard template", "My Long Hair《我的长发》": "My Long Hair", "了解 Knowledge Library 知识库模板": "Explore the Knowledge Library template", "了解播客学习笔记模板": "Explore the Podcast Notes template"});
  Object.assign(additional, {"微信扫码添加 Joy；手机端可保存图片后，在微信扫一扫中从相册识别。": "Scan the QR code in WeChat to add Joy. On mobile, save the image and open it from your album in WeChat Scan.", "Knowledge Library 知识库模板": "Knowledge Library template", "Podcast Notes 播客学习笔记": "Podcast Notes template", "放大查看商品图": "Enlarge product image", "商品图片": "Product images", "关闭图片": "Close image", "关闭": "Close", "联系咨询": "GET IN TOUCH", "Cinema by the Sea《海边电影》": "Cinema by the Sea", "Xu Ziran Biography《徐自然传》": "Xu Ziran Biography", "Bitter Buckwheat《苦荞麦》": "Bitter Buckwheat", "Dear Passenger《亲爱的乘客》": "Dear Passenger"});
  Object.assign(additional, {"收起详情":"Collapse details"});
  const normalize = text => text.trim().replace(/\s+/g, ' ');
  const toEnglish = new Map(Object.entries(translations).map(([en, zh]) => [normalize(zh), en]));
  const toChinese = new Map(Object.entries(translations).map(([en, zh]) => [normalize(en), zh]));
  for (const [zh, en] of Object.entries(additional)) {
    toEnglish.set(normalize(zh), en);
    toChinese.set(normalize(en), zh);
  }
  const toggle = document.getElementById('language-toggle');
  let currentLanguage = 'en';
  try { currentLanguage = localStorage.getItem('joy-language') === 'zh' ? 'zh' : 'en'; } catch (_) {}
  const translate = text => {
    const key = normalize(text);
    const value = (currentLanguage === 'zh' ? toChinese : toEnglish).get(key);
    if (value) return text.replace(text.trim(), value);
    if (key.includes(' · ') && key.includes('¥')) return key.split(' · ').map(part => translate(part)).join(' · ');
    const caption = key.match(/^(\d+ \/ \d+ · )(.+)$/);
    if (caption) return caption[1] + translate(caption[2]);
    const view = key.match(/^(查看：|View: )(.+)$/);
    if (view) return (currentLanguage === 'en' ? 'View: ' : '查看：') + translate(view[2]);
    const template = key.match(/^(?:模板：|Template: )(.+?)(?:。账号服务开放后可继续查看领取权限。|\. Access details will be available when accounts launch\.)$/);
    if (template) return currentLanguage === 'en'
      ? 'Template: ' + translate(template[1]) + '. Access details will be available when accounts launch.'
      : '模板：' + translate(template[1]) + '。账号服务开放后可继续查看领取权限。';
    return text;
  };
  let observer;
  function applyLanguage(language) {
    if (observer) observer.disconnect();
    currentLanguage = language;
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        return !parent || parent.closest('script,style,noscript,iframe,svg,.copy-en,.copy-zh,.language-switch,[data-account-ui],code,pre')
          ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    let node;
    while ((node = walker.nextNode())) {
      const next = translate(node.nodeValue);
      if (next !== node.nodeValue) node.nodeValue = next;
    }
    document.querySelectorAll('[placeholder],[aria-label],[title],[alt]').forEach(element => {
      if (element.closest('.language-switch,[data-account-ui]')) return;
      for (const attribute of ['placeholder', 'aria-label', 'title', 'alt']) {
        if (!element.hasAttribute(attribute)) continue;
        const text = element.getAttribute(attribute), next = translate(text);
        if (next !== text) element.setAttribute(attribute, next);
      }
    });
    document.title = translate(document.title);
    if (toggle) {
      toggle.querySelectorAll('[data-lang]').forEach(label => label.classList.toggle('active', label.dataset.lang === language));
      toggle.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换为中文');
    }
    if (observer) observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  window.translateSiteText = translate;
  window.refreshSiteLanguage = () => applyLanguage(currentLanguage);
  if (toggle) toggle.addEventListener('click', () => {
    const next = currentLanguage === 'zh' ? 'en' : 'zh';
    try { localStorage.setItem('joy-language', next); } catch (_) {}
    applyLanguage(next);
    window.dispatchEvent(new Event('site:languagechange'));
  });
  applyLanguage(currentLanguage);
  window.dispatchEvent(new Event('site:languagechange'));
  observer = new MutationObserver(() => applyLanguage(currentLanguage));
  observer.observe(document.body, { childList: true, subtree: true, characterData: true });
})();

(() => {
  const header = document.querySelector('.shared-site-header');
  if (!header) return;
  const update = () => header.classList.toggle('is-scrolled', scrollY > 64);
  window.addEventListener('scroll', update, { passive: true });
  update();
})();
