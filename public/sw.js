// Static icon caching only. Never cache authenticated HTML, API or admin responses.
const NAME='tw-static-icons-v2';const FILES=['/pwa-192.png','/pwa-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(NAME).then(c=>c.addAll(FILES).catch(()=>{})));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(x=>x!==NAME).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==self.location.origin||!FILES.includes(u.pathname))return;e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))})
