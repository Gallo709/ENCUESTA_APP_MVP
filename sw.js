const CACHE_NAME = 'encuesta-colaborador-v48';

const FILES_TO_CACHE = [
  './',
  './index.html',
  './manifest.webmanifest'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
      .catch(error => {
        console.warn('No se pudo precargar caché:', error);
      })
  );

  self.skipWaiting();
});

// Activación y limpieza de versiones anteriores
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});

// Manejo de solicitudes
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // No interferir con Firebase ni servicios externos
  if (
    url.hostname.includes('firestore.googleapis.com') ||
    url.hostname.includes('firebase.googleapis.com') ||
    url.hostname.includes('firebaseio.com') ||
    url.hostname.includes('googleapis.com') ||
    url.hostname.includes('gstatic.com')
  ) {
    return;
  }

  // Para navegación principal: primero red, luego caché
  if (event.request.mode === 'navigate' && url.origin === self.location.origin) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const clone = response.clone();

          caches.open(CACHE_NAME).then(cache => {
            cache.put('./index.html', clone);
          });

          return response;
        })
        .catch(() => caches.match('./index.html'))
    );

    return;
  }

  // Para archivos locales: primero red, luego caché
  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (url.origin === self.location.origin) {
          const clone = response.clone();

          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, clone);
          });
        }

        return response;
      })
      .catch(() => caches.match(event.request))
  );
});