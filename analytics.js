/* JioJioJoy GA4: explicit events, consent first, production hosts only. */
(() => {
  'use strict';
  if (window.JOY_ANALYTICS) return;
  const ID = 'G-34BJE14DM6';
  const production = ['jiojiojoy.com', 'www.jiojiojoy.com'].includes(location.hostname);
  const debug = !production && new URLSearchParams(location.search).get('analytics_debug') === '1';
  const KEY = 'joy.analytics-consent.v1';
  const path = location.pathname.replace(/\.html$/, '').replace(/\/index$/, '/');
  const product = path.includes('knowledge-library') ? 'knowledge_library' : path.includes('podcast-notes') ? 'podcast_notes' : '';
  const readChoice = () => { try { return localStorage.getItem(KEY); } catch { return null; } };
  let choice = readChoice(), started = false, panel;
  const events = [];
  let trace;
  if (debug) {
    const details = document.createElement('details');
    details.id = 'analytics-debug';
    details.style.cssText = 'position:fixed;bottom:12px;left:12px;z-index:110;background:#fff;color:#222;padding:12px;border:1px solid #999;max-width:90vw;max-height:40vh;overflow:auto;font:11px monospace';
    const summary = document.createElement('summary'); summary.textContent = 'Analytics 本地验证 · 不发送数据';
    trace = document.createElement('pre'); details.append(summary, trace); document.body.append(details);
  }
  const gtag = (...args) => { window.dataLayer = window.dataLayer || []; window.dataLayer.push(args); };
  const safePage = new URL(location.origin + location.pathname);
  // Retain only campaign tags with simple identifiers, never arbitrary URL parameters.
  for (const key of ['utm_source','utm_medium','utm_campaign','utm_content','utm_term']) {
    const value = new URLSearchParams(location.search).get(key);
    if (value && /^[a-zA-Z0-9_-]{1,80}$/.test(value)) safePage.searchParams.set(key, value);
  }
  let referrer = '';
  try { referrer = document.referrer ? new URL(document.referrer).origin : ''; } catch {}
  function track(name, params = {}) {
    const payload = { page_path: path, ...params };
    if (debug) {
      events.push({ event: name, ...payload });
      if (events.length > 100) events.shift();
      trace.textContent = JSON.stringify(events, null, 2);
      console.info('[Joy analytics dry-run]', JSON.stringify(events[events.length - 1]));
    } else if (production && choice === 'granted' && started) {
      gtag('event', name, { ...payload, send_to: ID });
    }
  }
  function start() {
    if (started || !production || choice !== 'granted') return;
    started = true;
    window['ga-disable-' + ID] = false;
    gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    gtag('js', new Date());
    gtag('config', ID, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false, page_location: safePage.href, page_referrer: referrer });
    track('page_view', { page_location: safePage.href, page_referrer: referrer, page_title: document.title });
    trackProductView();
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
    document.head.append(script);
  }
  function choose(value) {
    choice = value;
    try { localStorage.setItem(KEY, value); } catch {}
    panel.hidden = true;
    if (value === 'granted') start();
    else {
      window['ga-disable-' + ID] = true;
      // Reload after withdrawal: no active Google runtime remains on the page.
      if (started) {
        for (const cookie of document.cookie.split(';')) {
          const name = cookie.trim().split('=')[0];
          if (!/^_ga(?:_|$)/.test(name)) continue;
          for (const domain of ['', '; domain=' + location.hostname, '; domain=.jiojiojoy.com']) document.cookie = name + '=; Max-Age=0; path=/' + domain;
        }
        location.reload();
      }
    }
  }
  window.addEventListener('storage', event => {
    if (event.key === KEY && event.newValue !== choice && production) location.reload();
  });
  function consentUI() {
    const style = document.createElement('link'); style.rel = 'stylesheet'; style.href = '/analytics.css'; document.head.append(style);
    panel = document.createElement('section'); panel.className = 'joy-consent'; panel.setAttribute('aria-label', '访问统计选择');
    panel.innerHTML = '<strong>帮助我了解哪些内容对你有用</strong><p>允许后，Google Analytics 会使用统计 Cookie 记录页面浏览、来源与关键点击。不记录表单输入或联系方式。拒绝不影响浏览，可随时修改。</p><div><button type="button" data-choice="denied">不允许</button><button type="button" data-choice="granted">允许统计</button></div>';
    panel.hidden = choice === 'granted' || choice === 'denied';
    panel.querySelectorAll('button').forEach(button => button.addEventListener('click', () => choose(button.dataset.choice)));
    const settings = document.createElement('button'); settings.type = 'button'; settings.className = 'joy-consent-settings'; settings.textContent = '统计设置';
    settings.addEventListener('click', () => { panel.hidden = !panel.hidden; if (!panel.hidden) panel.querySelector('button').focus(); });
    document.body.append(panel, settings);
  }
  function placement(el) {
    if (el.closest('.p-mobile-buy')) return 'sticky_purchase';
    if (el.closest('.p-final')) return 'product_final';
    if (el.closest('.p-dialog')) return 'purchase_dialog';
    if (el.closest('.site-navigation')) return 'header';
    if (el.closest('#nav-ticket')) return 'chapter_menu';
    if (el.closest('.p-product-hero')) return 'product_hero';
    if (el.closest('.p-catalog')) return 'products_catalog';
    if (el.closest('.project-grid')) return 'developer_projects';
    if (el.closest('footer')) return 'footer';
    const section = el.closest('section[id]');
    return section ? 'section_' + section.id : 'page_body';
  }
  const platform = () => document.querySelector('input[name="platform"]:checked')?.value === 'FlowUs' ? 'FlowUs' : 'Notion';
  function click(event) {
    const el = event.target.closest('a, button'); if (!el) return;
    const where = placement(el);
    if (el.matches('[data-inquire]')) { track('purchase_inquiry_click', { product_name: product, template_platform: platform(), placement: where }); return; }
    if (el.matches('[data-copy-email]')) { track('contact_click', { channel: 'email_copy', placement: where, product_name: product }); return; }
    if (el.matches('[data-qr-download]')) { track('contact_click', { channel: 'wechat_qr_download', placement: where, product_name: product }); return; }
    if (!el.hasAttribute('href')) return;
    let url; try { url = new URL(el.getAttribute('href'), location.href); } catch { return; }
    if (url.protocol === 'mailto:') { track('contact_click', { channel: 'email', placement: where, product_name: product }); return; }
    if (!['https:', 'http:'].includes(url.protocol)) return;
    const projectCard = el.closest('.project');
    const homeAction = el.id === 'enter-lab-btn';
    if (projectCard || homeAction) {
      const projectName = projectCard?.id || document.querySelector('.project-group[aria-pressed="true"]')?.dataset.project || 'unknown';
      const type = url.hostname === 'github.com' ? 'source' : url.hostname.endsWith('feishu.cn') ? 'guide' : 'experience';
      track('project_action_click', { project_name: projectName, action_type: type, placement: where }); return;
    }
    const channel = /(^|\.)xiaohongshu\.com$/.test(url.hostname) ? 'xiaohongshu' : /(^|\.)bilibili\.com$/.test(url.hostname) ? 'bilibili' : '';
    if (channel) { track('contact_click', { channel, placement: where }); return; }
    if (url.origin === location.origin) {
      const targetProduct = url.pathname.includes('knowledge-library') ? 'knowledge_library' : url.pathname.includes('podcast-notes') ? 'podcast_notes' : '';
      if (targetProduct && (el.closest('.p-card') || el.closest('.shop-feature-card'))) {
        track('product_click', { product_name: targetProduct, placement: where }); return;
      }
      const target = url.pathname.startsWith('/products') ? 'products' : url.pathname.startsWith('/developers') ? 'developers' : url.hash && ['origin','about','social','feeds','contact','lab','tvc','film','background'].includes(url.hash.slice(1)) ? url.hash.slice(1) : 'home';
      track('navigation_click', { target, placement: where });
    }
  }
  document.addEventListener('click', click);
  document.addEventListener('change', event => {
    if (event.target.matches('input[name="platform"]')) track('product_platform_select', { product_name: product, template_platform: platform(), placement: 'product_options' });
  });
  const played = new WeakSet();
  document.addEventListener('playing', event => {
    if (!product || event.target.tagName !== 'VIDEO' || played.has(event.target)) return;
    if (!debug && choice !== 'granted') return;
    played.add(event.target); track('product_demo_start', { product_name: product, placement: 'product_demo' });
  }, true);
  // Public events accept only enumerated, non-identifying values.
  const publicEvents = new Set(['login_open','login_code_sent','login_error','login','sign_up','logout','inquiry_saved','inquiry_save_error']);
  function publicTrack(name, params = {}) {
    if (!publicEvents.has(name)) return;
    const clean = {};
    const allowed = {method:['email_otp'], step:['send_code','verify_code'], placement:['product_detail','products_catalog','purchase_dialog'], product_name:['knowledge_library','podcast_notes'], template_platform:['Notion','FlowUs']};
    for (const [key, values] of Object.entries(allowed)) if(values.includes(params[key])) clean[key] = params[key];
    track(name, clean);
  }
  window.JOY_ANALYTICS = Object.freeze({ track: publicTrack, measurementId: ID, mode: debug ? 'dry-run' : production ? 'consent' : 'disabled', events });
  function trackProductView() {
    if(product) track('view_item', {product_name:product, template_platform:platform()});
    else if(path.startsWith('/products')) track('view_item_list', {item_list_name:'templates'});
  }
  if (debug) trackProductView();
  if (debug) track('page_view', { page_location: safePage.href, page_referrer: referrer, page_title: document.title });
  if (production) { consentUI(); start(); }
})();
