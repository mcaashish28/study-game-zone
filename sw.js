// Offline support. Bump VERSION whenever any file changes (e.g. a new chapter),
// so phones download the new files.
const VERSION = 'swg-v12';
const FILES = [
  './',
  'index.html',
  'manifest.webmanifest',
  'css/style.css',
  'js/app.js',
  'content/registry.js',
  'content/science/ch01-chemical-reactions.js',
  'content/science/ch02-acids-bases-salts.js',
  'content/science/ch03-metals-non-metals.js',
  'content/science/ch04-carbon-compounds.js',
  'content/science/ch05-life-processes.js',
  'content/punjabi/basic.js',
  'content/punjabi/medium.js',
  'icons/icon.svg',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network first (so updates show up), cache as fallback when offline.
// 'no-cache' makes the browser re-check the server instead of reusing its own HTTP cache.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(
    fetch(e.request.url, { cache: 'no-cache' })
      .then(res => {
        const copy = res.clone();
        caches.open(VERSION).then(c => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
