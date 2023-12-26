const cacheName = 'my-app-cache-v2.tests.krato.cz';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll([
                '/', // Add your root URL and other important assets
                '/index.html',
                '/src/main.js',
                //'/css/style.css',
                //'/js/app.js',
                // Add other files your app depends on
            ]);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(name => name !== cacheName).map(name => {
                    return caches.delete(name);
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('message', event => {
    if (event.data.type === 'navigate') {
        self.clients.matchAll().then(clients => {
            clients.forEach(client => {
                if (client.url === event.data.url && 'navigate' in client) {
                    client.navigate(event.data.url);
                }
            });
        });
    }
});
