// Service Worker Ringkas untuk Syarat PWA Chrome
const CACHE_NAME = 'p2p-share-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Biarkan carian rangkaian berjalan biasa
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

