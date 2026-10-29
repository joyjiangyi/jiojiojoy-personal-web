/* Supabase Auth REST adapter. Credentials stay out of analytics and URLs. */
(() => {
  'use strict';
  const config = window.JOY_ACCOUNT_CONFIG || {};
  let base = '';
  try { const u = new URL(config.supabaseUrl); if (u.protocol === 'https:' && /^[a-z0-9-]+\.supabase\.co$/.test(u.hostname)) base = u.origin; } catch {}
  let publicKey = false;
  try { publicKey = config.publicKey?.startsWith('sb_publishable_') || JSON.parse(atob(config.publicKey.split('.')[1])).role === 'anon'; } catch {}
  const configured = config.enabled === true && !!base && !!publicKey;
  const key = 'joy.account.session.v1:' + base;
  let session = null, timer, refreshing = null, restoring = false;
  const listeners = new Set();
  class AccountError extends Error { constructor(code) { super(code); this.code = code; } }
  const emit = () => listeners.forEach(fn => fn(restoring ? null : session?.user || null));
  function save(value) {
    session = value; clearTimeout(timer);
    try { if (value) sessionStorage.setItem(key, JSON.stringify(value)); else sessionStorage.removeItem(key); } catch {}
    if (value) timer = setTimeout(() => refresh().catch(() => {}), Math.max(1000, (value.expires_at * 1000 - Date.now() - 60000)));
    emit();
  }
  async function request(path, body, token, method = 'POST') {
    if (!configured) throw new AccountError('not_configured');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(base + path, { method, headers: { apikey: config.publicKey, 'Content-Type': 'application/json', ...(token ? { Authorization: 'Bearer ' + token } : {}) }, ...(body === undefined ? {} : {body: JSON.stringify(body)}), signal: controller.signal, cache: 'no-store' });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        const code = response.status === 429 ? 'rate_limit' : response.status === 401 ? 'unauthorized' : ['otp_expired','otp_disabled','email_not_confirmed','email_address_not_authorized','over_email_send_rate_limit'].includes(data.code || data.error_code) ? (data.code || data.error_code) : 'request_failed';
        throw new AccountError(code);
      }
      return data;
    } catch (error) { if (error instanceof AccountError) throw error; throw new AccountError('network'); }
    finally { clearTimeout(timeout); }
  }
  function accept(data) {
    if (!data.access_token || !data.refresh_token || !data.user?.id) throw new AccountError('invalid_session');
    save({ access_token: data.access_token, refresh_token: data.refresh_token, expires_at: data.expires_at || Math.floor(Date.now()/1000) + data.expires_in, user: {id: data.user.id, email: data.user.email} });
    return session.user;
  }
  async function refresh() {
    if (!session) throw new AccountError('unauthorized');
    if (refreshing) return refreshing;
    refreshing = request('/auth/v1/token?grant_type=refresh_token', {refresh_token: session.refresh_token})
      .then(accept).catch(error => { if (error.code !== 'network') save(null); else timer = setTimeout(() => refresh().catch(() => {}), 60000); throw error; }).finally(() => { refreshing = null; });
    return refreshing;
  }
  async function token() {
    if (!session || restoring) throw new AccountError('unauthorized');
    if (session.expires_at * 1000 < Date.now() + 30000) await refresh();
    return session.access_token;
  }
  async function restore() {
    if (!configured) return null;
    restoring = true;
    try {
      const raw = sessionStorage.getItem(key); if (!raw) return null;
      const saved = JSON.parse(raw);
      if (!saved.access_token || !saved.refresh_token) { save(null); return null; }
      session = saved;
      if (saved.expires_at * 1000 < Date.now() + 30000) await refresh();
      const user = await request('/auth/v1/user', undefined, session.access_token, 'GET');
      save({...session, user: {id: user.id, email: user.email}});
      return session.user;
    } catch (error) {
      // Never present unverified cached identity as logged in.
      if (error.code === 'network') { session = null; clearTimeout(timer); emit(); }
      else save(null);
      throw error;
    } finally { restoring = false; emit(); }
  }
  const api = {
    configured, get user() { return restoring ? null : session?.user || null; },
    subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn); },
    restore,
    sendCode(email) { return request('/auth/v1/otp', {email: email.trim(), create_user: true}); },
    async verifyCode(email, code) { return accept(await request('/auth/v1/verify', {email: email.trim(), token: code.trim(), type: 'email'})); },
    async profile() { return request('/rest/v1/rpc/ensure_profile', {}, await token()); },
    async saveInquiry(product, platform, requestId) {
      if (!['knowledge_library','podcast_notes'].includes(product) || !['Notion','FlowUs'].includes(platform)) throw new AccountError('invalid_inquiry');
      return request('/rest/v1/rpc/save_template_inquiry', {p_product: product, p_platform: platform, p_request_id: requestId}, await token());
    },
    async signOut() {
      try { if (session) await request('/auth/v1/logout?scope=local', {}, await token()); }
      finally { save(null); }
    }
  };
  window.JOY_ACCOUNT = Object.freeze(api);
})();
