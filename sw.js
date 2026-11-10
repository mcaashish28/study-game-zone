// Offline support. Bump VERSION whenever any file changes (e.g. a new chapter),
// so phones download the new files.
const VERSION = 'swg-v36';
const FILES = [
  './',
  'index.html',
  'manifest.webmanifest',
  'css/style.css',
  'js/app.js',
  'content/registry.js',
  'js/mathkit.js',
  'content/science/ch01-chemical-reactions.js',
  'content/science/ch02-acids-bases-salts.js',
  'content/science/ch03-metals-non-metals.js',
  'content/science/ch04-carbon-compounds.js',
  'content/science/ch05-life-processes.js',
  'content/science/ch06-control-coordination.js',
  'content/science/ch07-reproduction.js',
  'content/science/ch08-heredity.js',
  'content/science/ch09-light.js',
  'content/science/ch10-human-eye.js',
  'content/science/ch11-electricity.js',
  'content/science/ch12-magnetic-effects.js',
  'content/science/ch13-our-environment.js',
  'content/math/ch01-real-numbers.js',
  'content/math/ch02-polynomials.js',
  'content/math/ch03-linear-equations.js',
  'content/math/ch04-quadratic-equations.js',
  'content/math/ch05-arithmetic-progressions.js',
  'content/math/ch06-triangles.js',
  'content/math/ch07-coordinate-geometry.js',
  'content/math/ch08-intro-trigonometry.js',
  'content/math/ch09-applications-trigonometry.js',
  'content/math/ch10-circles.js',
  'content/math/ch11-areas-circles.js',
  'content/math/ch12-surface-areas-volumes.js',
  'content/math/ch13-statistics.js',
  'content/math/ch14-probability.js',
  'content/english/ff-prose-01-letter-to-god.js',
  'content/english/ff-prose-02-nelson-mandela.js',
  'content/english/ff-poem-01-dust-of-snow.js',
  'content/english/ff-poem-02-fire-and-ice.js',
  'content/english/ff-poem-03-tiger-in-the-zoo.js',
  'content/sst/hist-01-nationalism-europe.js',
  'content/sst/hist-02-nationalism-india.js',
  'content/sst/geo-01-resources-development.js',
  'content/sst/geo-02-forest-wildlife.js',
  'content/sst/pol-01-power-sharing.js',
  'content/sst/pol-02-federalism.js',
  'content/sst/eco-01-development.js',
  'content/sst/eco-02-sectors.js',
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
