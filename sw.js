/* ============================================
   Service Worker — Sprayer Calibration Tool
   Sci-Agro Digital Lab
   Version : 1.0
   ============================================ */

const CACHE_NAME = 'sprayer-calc-v1';

const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/index.js',
  '/script.js',
  '/styles.css',
  '/style.css',
  '/responsive.css',
  '/manifest.json',

  /* -- Nozzle Uniformity -- */
  '/nozzle-uniformity.html',

  /* -- Speed Calculator -- */
  '/speed-calculator.html',
  '/speed-calculator.js',
  '/speed-calculator.css',
  '/speed-calculator-script.js',

  /* -- Tank Mixing -- */
  '/tank-mixing.html',
  '/tank-mixing.js',
  '/tank-mixing.css',

  /* -- Application Rate -- */
  '/application-rate.html',
  '/application-rate.js',
  '/application-rate.css',

  /* -- Area Calculator -- */
  '/area-calculator.html',
  '/area-calculator.js',
  '/area-calculator.css',

  /* -- Icônes PWA -- */
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

/* ---------------------------
   INSTALLATION
   --------------------------- */
self.addEventListener('install', event => {
  console.log('[SW] Installation...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Mise en cache de tous les fichiers');
        return cache.addAll(FILES_TO_CACHE);
      })
      .then(() => console.log('[SW] ✅ Tous les fichiers mis en cache'))
      .catch(err => console.log('[SW] ❌ Erreur cache:', err))
  );
  self.skipWaiting();
});

/* ---------------------------
   ACTIVATION
   --------------------------- */
self.addEventListener('activate', event => {
  console.log('[SW] Activation...');
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => {
            console.log('[SW] Suppression ancien cache:', name);
            return caches.delete(name);
          })
      )
    )
  );
  self.clients.claim();
});

/* ---------------------------
   FETCH — Cache first, network fallback
   --------------------------- */
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {

        // ✅ Trouvé dans le cache → retourne sans réseau
        if (cachedResponse) {
          return cachedResponse;
        }

        // ❌ Pas dans le cache → essaie le réseau
        return fetch(event.request)
          .then(networkResponse => {
            // Réponse valide → met à jour le cache dynamiquement
            if (networkResponse && networkResponse.status === 200
                && networkResponse.type === 'basic') {
              const responseClone = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then(cache => cache.put(event.request, responseClone));
            }
            return networkResponse;
          })
          .catch(() => {
            // Hors ligne + pas en cache → page d'accueil en fallback
            if (event.request.destination === 'document') {
              return caches.match('/index.html');
            }
          });
      })
  );
});
