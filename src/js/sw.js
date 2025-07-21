const CACHE = 'albanil-v1';
const ASSETS = [
  '/',                 // para start_url
  '/index.html',
  '/portfolio.html',
  '/contacto.html',
  '/about.html',
  '/css/global.css',
  '/js/main.js',
  '/assets/logo-albanil-192px.png',
  '/assets/logo-albanil-512px.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;        // ignora POST del form
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
});
