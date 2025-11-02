/* Service Worker - ReciclaTech */
const CACHE_NAME = "reciclatech-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",

  // Ícones
  "./assets/img/icon-192.png",
  "./assets/img/icon-512.png",

  // ReciclaLab
  "./reciclalab/index.html",
  "./reciclalab/styles.css",
  "./reciclalab/app.js",

  // Missão Sustentável
  "./missao-sustentavel/index.html",

  // Ciclo do Lixo
  "./ciclo-do-lixo/ciclo-do-lixo.html"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CACHE_NAME)
          .map((k) => caches.delete(k))
      )
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request).then((response) => {
          // Cache only GET & same-origin
          try {
            const url = new URL(event.request.url);
            const isSameOrigin = url.origin === location.origin;
            if (event.request.method === "GET" && isSameOrigin) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
            }
          } catch (e) {}
          return response;
        }).catch(() => cached) // offline fallback
      );
    })
  );
});
