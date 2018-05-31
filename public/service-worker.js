self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.open("v1").then(function(cache) {
      return fetch(event.request)
        .then(response => {
          cache.put(event.request, response.clone())
          return response
        })
        .catch(function() {
          return caches.match(event.request)
        })
    }),
  )
})
