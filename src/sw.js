import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute, cleanupOutdatedCaches } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { CacheFirst } from "workbox-strategies";
import { CacheableResponsePlugin } from "workbox-cacheable-response/CacheableResponsePlugin";

// Register precache routes (static cache)
precacheAndRoute(self.__WB_MANIFEST || []);
// Clean up old cache
cleanupOutdatedCaches();

// Google fonts dynamic cache
registerRoute(
  /^https:\/\/fonts\.googleapis\.com\/.*/i,
  new CacheFirst({
    cacheName: "google-fonts-cache",
    plugins: [
      new ExpirationPlugin({ maxEntries: 500, maxAgeSeconds: 5184e3 }),
      new CacheableResponsePlugin({ statuses: [0, 200] }),
    ],
  }),
  "GET"
);

// Google fonts dynamic cache
registerRoute(
  /^https:\/\/fonts\.gstatic\.com\/.*/i,
  new CacheFirst({
    cacheName: "gstatic-fonts-cache",
    plugins: [
      new ExpirationPlugin({ maxEntries: 500, maxAgeSeconds: 5184e3 }),
      new CacheableResponsePlugin({ statuses: [0, 200] }),
    ],
  }),
  "GET"
);

// Dynamic cache api requests`
registerRoute(
  /^https:\/\/api\.friendscan\.tech\/accounts*/i,
  new CacheFirst({
    cacheName: "api-fetching",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 500,
        maxAgeSeconds: 60 * 60 * 24, // 1 day
      }),
      new CacheableResponsePlugin({ statuses: [0, 200] }),
    ],
  }),
  "GET"
);

// Install and activate service worker
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());

// Receive push notifications
self.addEventListener("push", function (e) {
  if (!(self.Notification && self.Notification.permission === "granted")) {
    console.log("notifications aren't supported or permission not granted!");
    return;
  }

  if (e.data) {
    let message = e.data.json();
    e.waitUntil(
      self.registration.showNotification(message.title, {
        body: message.body,
      })
    );
  }
});
