var staticCacheName = 'mws-restaurant-v1';




self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      return cache.addAll([
          '/',
          '/index.html',
          '/restaurant.html',
          'css/styles.css',
          'css/secondHQ.css',
          'css/under375.css',
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

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      cacheNames.filter((cName) => {
        return cName.startsWith('mws-') &&
               cName !== staticCacheName
      }).map((cName) => {
        return cache.delete(cName)
      })
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

self.addEventListener('message', (e) => {
  console.log(e.data.action, "This is what I am looking for")
})
