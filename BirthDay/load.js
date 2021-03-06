/**
 * Created by CJWZY on 2015/5/24.
 */

(function () {
    var resourceCache = {};
    var loading = [];
    var readyCallbacks = [];

    // Load an image url or an array of image urls
    function load(urlOrArr) {
        if (urlOrArr instanceof Array) {
            urlOrArr.forEach(function (url) {
                _load(url);
            });
        }
        else {
            _load(urlOrArr);
        }
    }

    function _load(url) {
        if (resourceCache[url]) {
            return resourceCache[url];
        }
        else {
            var img = new Image();
            img.onload = function () {
                resourceCache[url] = img;

                if (isReady()) {
                    readyCallbacks.forEach(function (func) {
                        func();
                    });
                }
            };
            resourceCache[url] = false;
            img.src = 'images/'+url;
        }
    }

    function get(url) {
        return resourceCache[url];
    }

    function isReady() {

        var ready = true;
        for (var k in resourceCache) {
            if (resourceCache.hasOwnProperty(k) && !resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }

    function onReady(func) {
        readyCallbacks.push(func);
    }

    window.resources = {
        load: load,
        get: get,
        onReady: onReady,
        isReady: isReady
    };
})();

resources.load([
    'Cat_index.jpg',
    '1.gif',
    '2.gif',
    '3.gif',
    '4.gif',
    '5.gif',
    'Cat_wolf.gif',
    'heart.png',
    'love_reason.png',
    'onlyyou.png'
]);

resources.onReady(init);