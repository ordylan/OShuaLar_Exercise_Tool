const OCACHE_NAME = 'OSHUA_ShouZiMuTianKong';

self.addEventListener('install',async event => {
    const cache = await caches.open(OCACHE_NAME);
    await cache.addAll([
        //必要资源
        "/OShua/ShouZiMuTianKong/",
        "/back.png",
        "load.js",
        "1.css",
        "main.js",
        "/nonetwork.html"
    ]);
    await self.skipWaiting();
});

self.addEventListener('activate',event => {
    console.log('activate: ',event);
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch',async (event) => {
    async function getResponse(){
        try {
            if(navigator.onLine){ 
                let response = await fetch(event.request);
                let cache = await caches.open(OCACHE_NAME);
                await cache.put(event.request, response.clone());
                return response;
            }else{
                return await caches.match(event.request);
            }
        } catch (error) {
            let res = await caches.match(event.request);
            //if(!res)    return caches.match('/nonetwork.html');
            return res;
        }
    }
    event.respondWith(
        getResponse()
    );
});
