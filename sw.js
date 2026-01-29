const CACHE_NAME = 'penny-ai-v2';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './icon192.png'
];

// Install event - caching the app shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Fetch event - serving content from cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});