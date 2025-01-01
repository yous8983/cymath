self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-app-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/assets/img/logo.png'
            ]);
        })
    );
});
