export function TMap(key) {
    return new Promise(function(resolve, reject) {
        window.init = function() {
            resolve(qq) //注意这里
        }
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "http://map.qq.com/api/js?v=2.exp&callback=init&key=" + key;
        // script.src = "https://apis.map.qq.com/tools/poimarker?type=1&keyword=酒店&center=39.908491,116.374328&radius=1000&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp";
        script.onerror = reject;
        document.head.appendChild(script);
    })
}