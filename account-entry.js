(() => {
  if (!document.querySelector('.product-site')) return;
  const account = window.JOY_ACCOUNT;
  const t = (en, zh) => document.documentElement.lang.startsWith('zh') ? zh : en;
  const track = (name, extra = {}) => window.JOY_ANALYTICS?.track(name, extra);
  const modal = document.createElement('dialog');
  modal.className = 'joy-account-dialog'; modal.dataset.accountUi = '';
  modal.setAttribute('aria-labelledby', 'joy-account-title');
  modal.innerHTML = `<button type="button" class="joy-account-close">×</button><p class="joy-account-eyebrow">JIOJIOJOY · YOUR ACCOUNT</p><h2 id="joy-account-title"></h2><p class="joy-account-description"></p><form class="joy-login-fields"><label for="joy-account-email"></label><input id="joy-account-email" type="email" autocomplete="email" required maxlength="254" placeholder="you@example.com"><div class="joy-code-field" hidden><label for="joy-account-code"></label><input id="joy-account-code" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6,10}" minlength="6" maxlength="10"></div><button type="submit" class="joy-account-continue"></button></form><div class="joy-code-actions" hidden><button type="button" data-resend></button><button type="button" data-change-email></button></div><button type="button" class="joy-account-signout" hidden></button><p class="joy-account-notice" role="status" aria-live="polite"></p><p class="joy-account-data-note"></p><a class="joy-account-contact" href="/#contact"></a>`;
  document.body.append(modal);
  const email = modal.querySelector('#joy-account-email'), code = modal.querySelector('#joy-account-code');
  const form = modal.querySelector('form'), submit = form.querySelector('button');
  const notice = modal.querySelector('[role="status"]');
  let stage = 'email', busy = false, retryAt = 0, status = '', statusError = false;
  const errors = {
    not_configured: ['Account service is not connected yet. No email has been sent.', '账号服务尚未连接，当前未发送邮件。'],
    rate_limit: ['Too many requests. Please wait a few minutes.', '请求过于频繁，请稍后重试。'],
    over_email_send_rate_limit: ['Please wait before requesting another code.', '验证码发送过于频繁，请稍后重试。'],
    otp_expired: ['The code is invalid or expired. Check it or request a new code.', '验证码不正确或已过期，请检查或重新获取。'],
    email_address_not_authorized: ['Email delivery is not configured for this address. Please contact Joy.', '邮件服务尚未支持此邮箱，请联系 Joy。'],
    network: ['Connection failed. Please check your network and try again.', '连接失败，请检查网络后重试。'],
    unauthorized: ['Your session has expired. Please sign in again.', '登录已过期，请重新登录。'],
    request_failed: ['The request could not be completed. Try again later or contact Joy.', '暂时无法完成请求，请稍后重试或联系 Joy。']
  };
  function message(key, error = false) { status = key; statusError = error; render(); }
  function render() {
    const user = account?.user;
    modal.querySelector('.joy-account-close').ariaLabel = t('Close sign-in window','关闭登录窗口');
    modal.querySelector('h2').textContent = user ? t('Your account.','你的账号。') : t('Welcome, curious mind.','欢迎，新的好奇心。');
    modal.querySelector('.joy-account-description').textContent = user ? user.email : t('Sign in or create an account with an email code.','使用邮箱验证码登录或创建账号。');
    form.hidden = !!user;
    modal.querySelector('label[for="joy-account-email"]').textContent = t('Email address','邮箱地址');
    modal.querySelector('label[for="joy-account-code"]').textContent = t('Email verification code','邮箱验证码');
    email.readOnly = stage === 'code'; email.disabled = busy;
    code.disabled = busy; code.required = stage === 'code';
    modal.querySelector('.joy-code-field').hidden = stage !== 'code';
    const remaining = Math.max(0, Math.ceil((retryAt-Date.now())/1000));
    submit.disabled = busy || !account?.configured || (stage === 'email' && remaining > 0);
    submit.textContent = busy ? t('Please wait…','请稍候…') : stage === 'code' ? t('Verify & sign in','验证并登录') : remaining > 0 ? t(`Send again in ${remaining}s`,`${remaining} 秒后可再次发送`) : t('Send verification code','发送验证码');
    modal.querySelector('.joy-code-actions').hidden = !!user || stage !== 'code';
    const resend = modal.querySelector('[data-resend]');
    resend.disabled = busy || remaining > 0;
    resend.textContent = remaining ? t(`Resend in ${remaining}s`,`${remaining} 秒后重发`) : t('Resend code','重新发送');
    modal.querySelector('[data-change-email]').textContent = t('Change email','更换邮箱');
    modal.querySelector('[data-change-email]').disabled = busy;
    const signout = modal.querySelector('.joy-account-signout'); signout.hidden = !user; signout.disabled = busy; signout.textContent = t('Sign out','退出登录');
    const messages = { sent: ['Code sent. Check your inbox and spam folder.','验证码已发送，请查看收件箱或垃圾邮件。'], signed_in: ['Signed in. You can now save a template purchase inquiry.','登录成功，可以保存模板购买咨询。'], profile_failed: ['Signed in, but your account record could not be saved. Please retry by reopening your account.','已登录，但账号记录未保存成功，请重新打开账号重试。'], signed_out: ['Signed out on this device.','已在此设备退出登录。'], signout_failed: ['Signed out locally. The server could not confirm session revocation; please try again when connected.','已清除本机登录状态，但服务器未能确认会话撤销。请恢复连接后重试。'] };
    const pair = status ? (statusError ? errors[status] || errors.request_failed : messages[status]) : !account?.configured ? errors.not_configured : null;
    notice.textContent = pair ? t(...pair) : '';
    modal.querySelector('.joy-account-data-note').textContent = t('Your email is used for account verification and purchase inquiries. It is not sent to visit analytics. Closing this browser tab ends the locally saved session.','邮箱用于账号验证和购买咨询，不会发送至访问统计。关闭此浏览器标签页后，本地保存的登录状态将结束。');
    modal.querySelector('.joy-account-contact').textContent = t('Contact Joy ↗','联系 Joy ↗');
    document.querySelectorAll('[data-account-entry]').forEach(button => button.textContent = user ? t('My account ↗','我的账号 ↗') : t('Sign in / Register ↗','登录 / 注册 ↗'));
    document.querySelectorAll('[data-account-entry-note]').forEach(el => el.textContent = user ? t('Signed in · Purchase and delivery are handled directly with Joy.','已登录 · 购买与交付由 Joy 直接处理。') : account?.configured ? t('Sign in to keep a record of your template inquiries.','登录后可保存模板购买咨询记录。') : t('Account connection pending · Contact Joy to purchase.','账号服务待连接 · 购买模板请联系 Joy。'));
    const hero = document.querySelector('#joy-hero-email');
    if (hero) { hero.hidden = !!user; hero.placeholder = t('Enter your email','输入你的邮箱'); hero.ariaLabel = t('Email address','邮箱地址'); }
  }
  async function syncProfile() {
    try { const result = await account.profile(); if (result === true) track('sign_up', {method:'email_otp'}); }
    catch { message('profile_failed'); }
  }
  function open(initialEmail = '') {
    if (!account?.user && stage === 'email') email.value = initialEmail;
    render(); modal.showModal(); track('login_open', {placement:document.querySelector('[data-product]') ? 'product_detail':'products_catalog'});
    if (account?.user) syncProfile(); else (stage === 'code' ? code : email).focus();
  }
  async function sendCode() {
    if (busy || Date.now() < retryAt || !email.reportValidity()) return;
    busy = true; status = ''; render();
    try { await account.sendCode(email.value); stage = 'code'; retryAt = Date.now()+60000; message('sent'); track('login_code_sent', {method:'email_otp'}); code.focus(); }
    catch (error) { message(error.code, true); track('login_error', {step:'send_code'}); }
    finally { busy = false; render(); if(stage === 'code') code.focus(); }
  }
  form.addEventListener('submit', async event => {
    event.preventDefault(); if (busy) return;
    if (stage === 'email') return sendCode();
    busy = true; status = ''; render();
    try { await account.verifyCode(email.value, code.value); code.value = ''; message('signed_in'); track('login', {method:'email_otp'}); await syncProfile(); }
    catch (error) { message(error.code, true); track('login_error', {step:'verify_code'}); }
    finally { busy = false; render(); if (account?.user) modal.querySelector('.joy-account-signout').focus(); }
  });
  modal.querySelector('[data-resend]').addEventListener('click', sendCode);
  modal.querySelector('[data-change-email]').addEventListener('click', () => { stage='email'; status=''; code.value=''; render(); email.focus(); });
  modal.querySelector('.joy-account-signout').addEventListener('click', async () => {
    busy = true; render();
    try { await account.signOut(); stage='email'; email.value=''; message('signed_out'); track('logout'); }
    catch { message('signout_failed'); }
    finally { busy=false; stage='email'; email.value=''; code.value=''; render(); }
  });
  modal.querySelector('.joy-account-close').addEventListener('click', () => modal.close());
  modal.addEventListener('click', event => { if (event.target !== modal) return; const r=modal.getBoundingClientRect(); if(event.clientX<r.left || event.clientX>r.right || event.clientY<r.top || event.clientY>r.bottom) modal.close(); });
  const copy = document.querySelector('.p-product-copy');
  if(copy) { const el=document.createElement('div'); el.className='joy-template-account'; el.dataset.accountUi=''; el.innerHTML='<button type="button" data-account-entry></button><p data-account-entry-note></p>'; copy.append(el); el.querySelector('button').addEventListener('click', () => open()); }
  const intro=document.querySelector('.product-site .p-intro');
  if(intro) { const el=document.createElement('div'); el.className='joy-account-hero'; el.dataset.accountUi=''; el.innerHTML='<form class="joy-account-form"><span aria-hidden="true">✉</span><input id="joy-hero-email" type="email" autocomplete="email" maxlength="254"><button type="submit" data-account-entry></button></form><p data-account-entry-note></p>'; intro.append(el); el.querySelector('form').addEventListener('submit', e => {e.preventDefault(); open(el.querySelector('input').value);}); }
  window.addEventListener('joy:account-open', () => open());
  account?.subscribe(render);
  window.addEventListener('site:languagechange', render);
  setInterval(() => { if(modal.open && retryAt > 0 && !busy && !account?.user) render(); },1000);
  render();
  account?.restore().then(user => { if(user) syncProfile(); }).catch(error => { message(error.code || 'network', true); });
})();
