if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise(async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()})),s.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},s=(s,r)=>{Promise.all(s.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(s)};self.define=(s,i,a)=>{r[s]||(r[s]=Promise.resolve().then(()=>{let r={};const o={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return r;case"module":return o;default:return e(s)}})).then(e=>{const s=a(...e);return r.default||(r.default=s),r})}))}}define("./sw.js",["./workbox-17c86ba3"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"en/index.html",revision:"045dd5af8b846d8f2e1535b5a5611241"},{url:"en/manifest.json",revision:"9c2fba642fff247e04697110fcc58ff9"},{url:"index.html",revision:"d3263fb8881abc70f0651e52ac470f72"},{url:"ko.bundle.js",revision:"159230d1c231bb90822a2f2ef4b3b0b8"},{url:"ko/index.html",revision:"41e2904733df7fc219de507e4dc7c75f"},{url:"ko/manifest.json",revision:"20e0d1683d218b21f80574bc139aeb81"},{url:"main.bundle.js",revision:"d8b5ca2728985260e86ea55f5dec3cb6"},{url:"resources/assets/images/IDI_PIKAICON-0.png",revision:"626715f8ff44df7393d01481a7aaf086"},{url:"resources/assets/images/IDI_PIKAICON-1_gap_filled.png",revision:"506daec1b30fe530fe92c45ac13dc7a6"},{url:"resources/assets/images/IDI_PIKAICON-1_gap_filled_192.png",revision:"29532d5d3e1660a885ad70c6e8b13d96"},{url:"resources/assets/images/IDI_PIKAICON-1_gap_filled_512.png",revision:"3ed2134d0cdf0e0467b4b7d3b150d457"},{url:"resources/assets/images/controls.png",revision:"8af81f631c595c2f396380b59d3d1093"},{url:"resources/assets/images/controls_ko.png",revision:"3977b41d4ef8d3eee3df57576a410f40"},{url:"resources/assets/images/screenshot.png",revision:"3867bffd4bef3786694f9ebeb77d4d1d"},{url:"resources/assets/images/sprite_sheet.json",revision:"fbf5be6abf4715cbe6357d01c5d178ff"},{url:"resources/assets/images/sprite_sheet.png",revision:"e2f9c1aec43ccf5f4dcc03f24b3e13da"},{url:"resources/assets/sounds/WAVE140_1.wav",revision:"a31e486f9bf2dfa2548a4208d78edc1f"},{url:"resources/assets/sounds/WAVE141_1.wav",revision:"e6b661515829712630bbead41d86ee8d"},{url:"resources/assets/sounds/WAVE142_1.wav",revision:"918c03522e79304ad8bb8891c35f58a3"},{url:"resources/assets/sounds/WAVE143_1.wav",revision:"eb2ac1cb1900cd970cdd86be87ebea11"},{url:"resources/assets/sounds/WAVE144_1.wav",revision:"6b16d233bc68aea2a7d071eee85da431"},{url:"resources/assets/sounds/WAVE145_1.wav",revision:"85da47de3575fbedaef71188fe4fc05f"},{url:"resources/assets/sounds/WAVE146_1.wav",revision:"9976daa90c7fd3f7008cf30e7cda8825"},{url:"resources/assets/sounds/bgm.mp3",revision:"029ae684624b50612c09a255264b2d93"},{url:"resources/style.css",revision:"3e0172adff192ed0999bcf4216b17866"},{url:"runtime.bundle.js",revision:"e4561e38162a6ab515f761407828af93"},{url:"vendors~main.bundle.js",revision:"9870ce321556612a300fbc1a38accade"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=sw.js.map
