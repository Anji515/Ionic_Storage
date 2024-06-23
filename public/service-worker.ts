/* eslint-disable @typescript-eslint/no-explicit-any */
const CACHE_NAME = "my-app-cache";
const urlsToCache = [
  "/",
  "/home",
  "/index.html ",
];

async function preCache() {
  const cache = await caches.open(CACHE_NAME);
  return cache.addAll(urlsToCache);
}

self.addEventListener("install", (event: any) => {
  event.waitUntil(preCache());
});

async function cacheFirst(request: any) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open("MyCache_1");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return Response.error();
  }
}

self.addEventListener("fetch", (event: any) => {
  const url = new URL(event.request.url);
  if (urlsToCache.includes(url.pathname)) {
    event.respondWith(cacheFirst(event.request));
  } else {
    console.log("Page is not cached", url.pathname);
  }
});

// self.addEventListener('activate', (event) => {
//   const cacheWhitelist = [CACHE_NAME];
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           if (!cacheWhitelist.includes(cacheName)) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });
