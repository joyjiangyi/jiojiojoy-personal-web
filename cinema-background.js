/* Same theatre film and eased scroll seeking as the homepage. */
(() => {
  if (!document.body.classList.contains('cinema-page') || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const video = document.createElement('video');
  video.className = 'cinema-background';
  video.muted = true;
  video.playsInline = true;
  video.preload = 'auto';
  video.poster = '/assets/bg-mobile-poster.jpg';
  video.setAttribute('aria-hidden', 'true');
  video.src = '/assets/bg-15s.mp4';
  document.body.prepend(video);
  video.addEventListener('loadeddata', () => document.body.classList.add('has-cinema-film'), {once:true});
  video.addEventListener('error', () => document.body.classList.remove('has-cinema-film'));
  if (matchMedia('(pointer: coarse)').matches || innerWidth <= 768) {
    video.loop = true;
    const play = () => video.play().catch(() => {});
    play();
    document.addEventListener('touchstart', play, {once:true, passive:true});
    return;
  }
  let target = 0, frame = 0, lastSeek = 0;
  function seek(now) {
    frame = 0;
    const diff = target - video.currentTime;
    if (video.seeking) { frame = requestAnimationFrame(seek); return; }
    if (Math.abs(diff) > .04) {
      if (now - lastSeek >= 33) { video.currentTime += diff * .24; lastSeek = now; }
      frame = requestAnimationFrame(seek);
    } else if (Math.abs(diff) > .001) video.currentTime = target;
  }
  function update() {
    if (!Number.isFinite(video.duration)) return;
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    target = Math.min(1, Math.max(0, scrollY / max)) * Math.max(0, video.duration - .05);
    if (!frame) frame = requestAnimationFrame(seek);
  }
  video.addEventListener('loadedmetadata', update);
  window.addEventListener('scroll', update, {passive:true});
  window.addEventListener('resize', update, {passive:true});
  new ResizeObserver(update).observe(document.body);
})();
