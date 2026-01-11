// Minimal Service Worker - Only for PWA Installability
// NO OFFLINE CACHING - App requires internet connection

const CACHE_NAME = 'iradah-minimal-v1';

// Install - No caching, just activate immediately
self.addEventListener('install', (event) => {
    console.log('[SW] Installing (no cache)');
    self.skipWaiting();
});

// Activate - Clean up any old caches
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    console.log('[SW] Deleting cache:', cache);
                    return caches.delete(cache);
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch - Pass through to network, no caching
self.addEventListener('fetch', (event) => {
    // Just let the request go to network
    // No caching, no offline support
    return;
});

console.log('[SW] Minimal Service Worker loaded - Online mode only');
