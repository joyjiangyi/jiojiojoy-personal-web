# JioJioJoy Personal Website — Project Handoff

Last updated: 2026-05-31 CST  
Project path: `/Users/netjoy/Library/Mobile Documents/iCloud~md~obsidian/Documents/JioJio's Obsidian/03-VibeCoding/personal-website`  
Main file: `index.html` (single-file, Tailwind CDN + GSAP + ScrollTrigger)

---

## Current Website State (2026-05-31)

### Tech Stack
- Vanilla HTML/CSS/JS, single `index.html`
- Tailwind CDN
- GSAP 3.13.0 + ScrollTrigger
- Inline CSS and JS
- Video background: `assets/grand_budapest_theater_bulle.mp4` (8.06s, faststart encoded)

### Visual Direction
- Dark cinematic: `--ink: #070101`, `--paper: #f8efe3`, `--gold: #d8b46d`
- Fonts: Manrope (sans) + Cormorant Garamond (serif/display)
- Scroll-driven video scrub via GSAP ScrollTrigger
- Spotlight cursor effect (warm gold radial gradient following mouse)
- Film grain overlay
- Background video: Grand Budapest theater curtain — opacity 0.95, brightness 1.3
- Dark overlay (`.ambient::after`) reduced for better visibility

### ⚠️ Server Requirement
**Must use `npx serve .` — NOT `python3 -m http.server`**  
Python's SimpleHTTP does not support HTTP Range requests → video seeking fails → scroll scrub breaks.

```bash
cd "03-VibeCoding/personal-website" && npx serve . --listen 8765
```

### Section Structure (9 pages)

#### P1 · Hero (`#top`)
- Copy: "Content maker. / Data reader. / AI builder." + "Here for global markets."
- Logo: `assets/jiojoy-logo-white.png` top-left
- "Enter ↓" link bottom-right
- Background: scroll-driven video scrub (`#top` → `#film`, 0–100% → 0s–8.06s)

#### P2 · Overview (`#overview`)
- 3-line paragraph: "Trained in cinema. Tested in global operations. / Now building content systems for markets that don't slow down. / Film school instinct, platform signals, AI as the accelerant."
- Numbered directory (01 Film / 02 Commercial Reel / 03 Global / 04 AI Lab / 05 Influencer)

#### P3 · Background (`#origin`)
- Left: "BACKGROUND" label (top) + "Where I learned to build content, end to end." (bottom)
- Right: "2019 — 2023" (Manrope 800) / "Beijing Film Academy" (Cormorant Garamond italic) / "北京电影学院 · Beijing, China"

#### P4 · Film (`#film`)
- Subtitle: "Short films, series, and festival credits — production from set to screen."
- 5-poster cyclic carousel (scroll-snap, center=active full-color, sides=desaturated)
- Bottom: film title + role + awards info panel
- ← → navigation + click-to-center
- Posters: `assets/posters/poster-1~5.png`
  - 1: 我的长发 (Short Film · Production Manager)
  - 2: 亲爱的乘客 (Web Series · Executive Producer)
  - 3: 苦荞麦 (Short Film · Production Manager)
  - 4: 徐自然传 (Documentary · Production Manager)
  - 5: 海边电影 (Short Film · **Production Crew** — should be 制片助理, pending fix)

#### P5 · Commercial Reel (`#commercial`)
- Subtitle: "A selection of commercial TVC productions with top brands and artists."
- JS-driven seamless marquee (`requestAnimationFrame`, 0.6px/frame, no jump-back)
- Each item: sprocket bar (top) + portrait photo + sprocket bar (bottom) + credits
- Sprocket pattern: 8px dark / 14px white / 8px dark (white wider than dark ✓)
- Click any item → in-page detail modal (brand, artist, director, duration, video link)
- TVC items (Set A + B duplicate for loop):
  | Brand | Artist | Director | Duration |
  |-------|--------|----------|----------|
  | 美团外卖 | 刘亦菲 | 林哲乐 | 15s |
  | 美团外卖 | 刘亦菲 · 火锅季 | 林哲乐 | 15s |
  | Alipay+ | 郑钦文 | 陈拴拴 | 50s |
  | 高姿 COGI | 成毅 | 江唯顺 | 53s |
  | KFC | 鹿晗 | 许超 | 30s |
  | 伊利优酸乳 | 吴镇宇 | 林哲乐 | 1min 4s |
  | 神州租车 | 张颂文 | 王晓丰 | 1min 54s |
- Images: `assets/tvc/tvc-*.png/.jpg`
- Video links: all `#` (pending — user to fill in)
- "View all commercial credits" button → modal with full 18-project archive

#### P6 · Global (`#feeds`)
- Subtitle: "Selected works from overseas content operations."
- 5 phone mockups side by side (portrait, CSS only)
- User will add video content inside `.phone-screen-v2` divs

#### P7 · AI Lab (`#lab`)
- Subtitle: "Self-built AI projects and open-source skills."
- Two ticket-shaped cards (cinema ticket aesthetic, circular notches, dashed divider)
  - Ticket 1: AI Sharing (Web App, 2025.10)
  - Ticket 2: Joyce Ware (Vibe Coded, 2025.10)
- Preview area: placeholder gradients (user to add real screenshots)
- Bottom links: Claude Skills / GitHub / Open Source Tools (all `#`, pending)

#### P8 · Influencer (`#influencer`)
- Subtitle: "Sharing what I build and learn, in public."
- 3-column layout:
  - Left: CSS iPad mockup (tilted -8°) + Apple Pencil decoration
  - Center: Vertical film strip (tilted +3°), 3 video frames with play button
  - Right: Platform list — 01 小红书 / 02 哔哩哔哩 / 03 抖音 (all @JioJioJoy)
- User to replace iPad placeholder and film frame placeholders with real content

#### P9 · Contact (`#contact`)
- Large serif italic: "That's the full picture."
- Email: `joyjiangyi852@gmail.com`
- Index navigation grid (Film / Commercial Reel / Global / AI Lab / Influencer)
- © 2026 JioJioJoy

---

## Assets

| File | Description |
|------|-------------|
| `assets/grand_budapest_theater_bulle.mp4` | **Current** background video (8.06s, faststart, Grand Budapest theater curtain) |
| `assets/final_video.mp4` | Previous background video (15.17s, faststart) — kept as backup |
| `assets/montage-1-4.mp4` | Original background video — kept as backup |
| `assets/jiojoy-logo-white.png` | White logo for hero |
| `assets/posters/poster-1~5.png` | Film section posters |
| `assets/tvc/tvc-*.png/.jpg` | TVC section photos (7 items) |

### Video Requirements
Any new background video must be:
1. **faststart encoded**: `ffmpeg -i input.mp4 -c copy -movflags +faststart output.mp4`
2. **Served with Range support**: use `npx serve`, not Python http.server
3. Update fallback duration in JS: `const dur = video ? (video.duration || X.XX) : X.XX`

---

## Interactions Implemented

| Feature | Status |
|---------|--------|
| Scroll-driven video scrub (GSAP) | ✅ |
| JS scroll snap (150ms debounce, snaps to nearest section) | ✅ |
| Film poster carousel (cyclic, 5 items) | ✅ |
| TVC marquee (JS seamless loop) | ✅ |
| TVC detail modal (click to open) | ✅ |
| Spotlight cursor effect | ✅ |
| Commercial credits modal ("View all") | ✅ |
| IntersectionObserver reveal (`data-reveal`) | ✅ |
| Hover color restore on TVC photos | ✅ |

---

## Pending / To Fill In

- [ ] TVC video links (all 7 currently `#`)
- [ ] iPad/phone mockup real screenshots
- [ ] Film strip (Influencer) real video frames
- [ ] AI Lab ticket preview screenshots
- [ ] Social media links (小红书/哔哩哔哩/抖音)
- [ ] AI Lab external links (Claude Skills, GitHub, Open Source Tools)
- [ ] Film section poster-5 label: fix "Production Crew" → "制片助理"

---

## TVC Full Archive (from PDF — for "View all" modal)

Sourced from `Joy个人作品集-内容策略运营.pdf`:

1. 美团外卖年货节篇 / 刘亦菲 / 导演林哲乐 / 15s
2. 美团外卖火锅篇 / 刘亦菲 / 导演林哲乐 / 15s
3. Alipay+《挥手见世界》/ 郑钦文 / 导演陈拴拴 / 50s
4. 高姿品牌官宣片 / 成毅 / 导演江唯顺 / 53s
5. 肯德基圣诞特辑 / 鹿晗 / 导演许超 / 30s
6. 伊利优酸乳餐厅篇 / 吴镇宇 / 导演林哲乐 / 1min 4s
7. 伊利优酸乳导师篇 / 吴镇宇 / 导演林哲乐 / 51s
8. 神州租车《老新手》/ 张颂文 / 导演王晓丰 / 1min 54s
9. 抖音×GUCCI竹节手袋 / 宋佳、何穗、陈萨 / 导演麦子 / 30s
10. 英雄联盟手游CNY / 赵露思 / 导演齐天佐 / 1min 43s
11. 伊利优酸乳时代篇 / 时代少年团 / 导演林哲乐 / 38s
12. WuSu 2024烧烤篇 / — / 导演赵斌 / 15s
13. CFM《谜城惊变》/ 林更新、古天乐 / 导演耿浩 / 10min
14. 纽崔莱《我来自于你》/ 吉克隽逸 / 导演田思聪 / 4min 24s
15. 京东服饰3.0 / — / 导演Zika / 42s
16. PEPSI×萝卜快跑 / — / 导演冈斯特 / 49s
17. 金汤肥牛面YUMMY / — / 导演三苏 / 50s
18. 《爱干净的妈妈》/ — / 导演章鱼 / 2min 37s

---

## Film Section Full Credits (from PDF)

- 《亲爱的乘客，你好》/ 腾讯视频 / 导演肖麓西 / 合作艺人大锁、于莎莎 / 19集 / 执行制片 & 外联制片
- 《我的长发》/ 导演赵安然 / 19min / 制片主任 / 获奖3项
- 《苦荞麦》/ BFA毕业联合作业 / 制片主任
- 《徐自然传》/ 浙江金鹄入围 / 制片主任
- 《海边电影》/ BFA毕业联合作业 / 制片助理
- 《阿聪的故事》《场景》《默恋》/ 制片主任
- 《AD ASTRA》《西部故事》/ 执行制片
- 《贷价》《落笔》/ 编剧 / 导演 / 剪辑

---

## Design Rules

- Every section header: `eyebrow` label + small subtitle (`clamp(13px,1.15vw,16px)`, `white-space:nowrap`)
- No big `h2` display headings in section headers (only Film/Commercial/etc. use this pattern)
- Padding: `.section { padding: clamp(92px,12vw,160px) clamp(20px,4vw,56px) }`
- Screenshot rule: after every layout change, take screenshot and show to user before making next change

---

## Notes for Future Agents

- User workflow: screenshot FIRST → user confirms → then implement further changes
- Do not add text commentary after showing screenshots
- The spotlight cursor, video scrub, film carousel, and scroll snap are all working — do not remove
- TVC modal has all 7 items' data filled; video links still need to be added
- COGI = 高姿 (Chinese cosmetics brand)
- Film poster role for 海边电影 should be "制片助理" (from PDF) — currently labeled "Production Crew"
- Do not remove any section; sections are: Hero → Overview → Background → Film → Commercial → Global → AI Lab → Influencer → Contact
- Scroll snap is JS-based (not CSS), debounce 150ms — snaps to nearest section top after scroll stops; tall sections (film/commercial/lab) are NOT forcibly skipped
