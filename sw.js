importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"315a02d258e75a35cd6575839161db03","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"0277f148acb015e21d372bd8781693bd","url":"contributors.html"},{"revision":"47a0c85cdefa0e001ed5c387362a2828","url":"feedback.html"},{"revision":"49c23f4826f5c125518bb7cb66e3276e","url":"images/arrow.jpg"},{"revision":"f2f1e415d681eb68a9d2c3598b1b80ec","url":"images/iitkgp.png"},{"revision":"5f930d2dc07e9748c50f872f6f260bf7","url":"images/kata_thermometer.jpg"},{"revision":"1de562593cb12b459cb991667914bdfa","url":"images/one_minute_vane_anemometer.jpg"},{"revision":"9f3ad1ffa5e31e103e9f3e118e8bfde1","url":"index.html"},{"revision":"7a0d0247ecfeca1455addfa17a13690f","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"4f86f0cdf2f1586ec3b23b7f52915165","url":"posttest.html"},{"revision":"bbfa59bf2690594e4dd682cfc306d9eb","url":"posttest.json"},{"revision":"072fe8b78086aec666ebb0a4240398b6","url":"pretest.html"},{"revision":"8ba6c16b6cc78c77765b7487956a3922","url":"pretest.json"},{"revision":"415236ac1596fc1f4bdeb21e31cbfe77","url":"procedure.html"},{"revision":"1d659d8aad7c6a81ae64033dbd2e11f6","url":"references.html"},{"revision":"fd688a9d51cd68e30972e3b728b74e60","url":"simulation.html"},{"revision":"65976a328037cb64e554c520316fee18","url":"simulation/css/bootstrap.min.css"},{"revision":"f9d68584d740d1dd58e7399bdfee4115","url":"simulation/css/font-awesome.min.css"},{"revision":"f06f2893ee1e6eb46886bc88ff662744","url":"simulation/css/katex.min.css"},{"revision":"a2e3b41ecac6357a58868d416ac3eac9","url":"simulation/css/main.css"},{"revision":"3e6bf8cf8d77f7b23546491f8954ea34","url":"simulation/images/duct.png"},{"revision":"cdf3cc15e3ff55d761b3449fbe9fa948","url":"simulation/images/logo.jpg"},{"revision":"4cb9522d985fac436804e12a7fac43b5","url":"simulation/images/plate1_0.5.png"},{"revision":"e4e4b8c59c66f650f8b2aff859c0f621","url":"simulation/images/plate2_0.52.png"},{"revision":"f6c37265d995f7c5e79c1aa9b1087893","url":"simulation/images/plate3_0.55.png"},{"revision":"217809c3fdbbbb05b7de048948d1996a","url":"simulation/images/plate4_0.58.png"},{"revision":"13cce8c9ea5fcb2cfacb60b3611bbfd2","url":"simulation/images/pyschrometer.png"},{"revision":"007b28d815c28c65425c8a14aa3b9268","url":"simulation/images/read1.png"},{"revision":"1d90d238bae25d3d17ac39e33f0552e9","url":"simulation/images/read2.png"},{"revision":"d16934e409669d3a9ff4cd65b623f4f7","url":"simulation/images/ring.png"},{"revision":"4b8c3879eaa13f490de3db9a98e4b389","url":"simulation/index.html"},{"revision":"302e0c42789fd88c63139267568e6b15","url":"simulation/js/addinptotable6.js"},{"revision":"6beaaaff3fd0463371728b4c96a813ae","url":"simulation/js/auto-render.min.js"},{"revision":"90146f01d8a2028ed6f2c3d2fba4ac9b","url":"simulation/js/bootstrap.bundle.min.js"},{"revision":"e50578ec24b2119bcc04f7c5f7203c31","url":"simulation/js/graphplotly6.js"},{"revision":"ddb84c1587287b2df08966081ef063bf","url":"simulation/js/jquery-1.7.1.min.js"},{"revision":"c7393ff783202680516ed44393d69897","url":"simulation/js/jquery.slim.min.js"},{"revision":"78c0024516f299be41b76645dacf567e","url":"simulation/js/katex.min.js"},{"revision":"0102ba6c44ded950a538c7d6b4134e02","url":"simulation/js/main.js"},{"revision":"22175d95b973a74d3bcab1f3fbb6e2c2","url":"simulation/js/modernizr-1.5.min.js"},{"revision":"1db8fd79ce2e5d14918726b61342318e","url":"simulation/js/popper.min.js"},{"revision":"0bbd83a13801f26efdd7c8547f79c1f7","url":"theory.html"},{"revision":"96feae93b44c0ae1ad7ed87ffe88e439","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );