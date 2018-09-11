// var staticCacheName = 'mws-restaurant-v1';

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('mws-restaurant-v1').then((cache) => {
      return cache.addAll([
          '/',
          '/index.html',
          'css/styles.css',
          'secondHQ.css',
          'under375.css',
          'data/restaurants.json',
          'img/1.jpg',
          'img/2.jpg',
          'img/3.jpg',
          'img/4.jpg',
          'img/5.jpg',
          'img/6.jpg',
          'img/7.jpg',
          'img/8.jpg',
          'img/9.jpg',
          'img/10.jpg',
          'js/main.js',
          'js/restaurant_info.js'
      ])
    })
  )
})




self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  )
})
