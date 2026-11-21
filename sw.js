/* Bộ nhớ đệm để mở được khi mạng yếu. Đổi VERSION mỗi khi cập nhật nội dung. */
const VERSION = 'hsk3-v2';
const FILES = ['./', 'index.html', 'css/style.css', 'js/app.js', 'data/lessons.js', 'data/examples.js', 'data/chars.js', 'manifest.json', 'icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
/* Ưu tiên mạng (để luôn có bản mới), mất mạng thì dùng bản đã lưu. */
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); return res; })
      .catch(() => caches.match(e.request).then(r => r || caches.match('index.html')))
  );
});
