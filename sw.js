// Service Worker for Iradah PWA - FIXED VERSION
const CACHE_NAME = 'iradah-v1.0.1';
const urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    './assets/logo.ico',
    './assets/icon-192.png',
    './assets/icon-512.png'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
    console.log('[SW] Installing Service Worker...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW] Caching app shell');
                return cache.addAll(urlsToCache).catch(err => {
                    console.error('[SW] Cache addAll failed:', err);
                });
            })
            .then(() => {
                console.log('[SW] Skip waiting');
                return self.skipWaiting();
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating Service Worker...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('[SW] Deleting old cache:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => {
            console.log('[SW] Claiming clients');
            return self.clients.claim();
        })
    );
});

// Fetch event - Network First, fallback to Cache
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    // Skip cross-origin requests except CDN
    if (url.origin !== location.origin &&
        !url.href.includes('cdnjs.cloudflare.com') &&
        !url.href.includes('cdn.tailwindcss.com') &&
        !url.href.includes('gstatic.com') &&
        !url.href.includes('firebaseio.com') &&
        !url.href.includes('googleapis.com')) {
        return;
    }

    event.respondWith(
        // Try network first
        fetch(event.request)
            .then((response) => {
                // Check if valid response
                if (!response || response.status !== 200 || response.type === 'error') {
                    return response;
                }

                // Clone response to cache
                const responseToCache = response.clone();

                // Only cache same-origin or CDN resources
                if (url.origin === location.origin ||
                    url.href.includes('cdnjs.cloudflare.com') ||
                    url.href.includes('cdn.tailwindcss.com')) {
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                }

                return response;
            })
            .catch(() => {
                // Network failed, try cache
                return caches.match(event.request).then((cachedResponse) => {
                    if (cachedResponse) {
                        console.log('[SW] Serving from cache:', event.request.url);
                        return cachedResponse;
                    }

                    // If cache miss and it's a navigation request, return index.html
                    if (event.request.mode === 'navigate') {
                        return caches.match('./index.html');
                    }
                });
            })
    );
});

// Handle messages from the client
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

console.log('[SW] Service Worker loaded!');
