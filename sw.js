const CACHE_NAME = "reminder-app-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/login.html",
];

// Install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("✅ Caching files");
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate
self.addEventListener("activate", (event) => {
  console.log("✅ Service Worker Activated");
});

// Fetch (offline support)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});