// console.log('service worker inside sw.js');

const cacheName = 'app-shell-rsrs';
const assets = [
  '/',
  'index.html',
  'app.js',
  'materialize.min.js',
  'css/style.css',
  'css/materialize.min.css',
  'src/pwa-icon/pwa-icon.png'
];



// install service worker
self.addEventListener('install', evt => {
  console.log('service worker installed');

  evt.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );

});

// activate service worker
self.addEventListener('activate', evt => {
  console.log('service worker activated');
});

self.addEventListener('fetch', evt => {
  console.log(evt);

  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || evt.request;
    })
  );

  
});







