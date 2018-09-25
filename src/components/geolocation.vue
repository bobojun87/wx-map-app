<template>
    <div>
    <iframe id="geoPage" width=0 height=0 frameborder=0  style="display:none;" scrolling="no"
            src="https://apis.map.qq.com/tools/geolocation?key=PEPBZ-KWTKP-4BVD5-L2TU4-UKCAJ-F3FEQ&referer=map-app">
    </iframe>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loc: ''
            }
        },
        created() {
            this.Tmap()
        },
        methods: {
            Tmap() {
                window.addEventListener('message', function(event) {
                    if (event.data) {
                        this.loc = event.data // 接收位置信息
                        if (this.loc) {
                            console.log(this.loc.lat)
                            console.log(this.loc.lng)
                        }
                    }
                }, false)

                // 设置6s超时，防止定位组件长时间获取位置信息未响应
                setTimeout(function() {
                    if (!this.loc) {
                        console.log('定位超时')
                    }
                }, 6000) // 6s为推荐值，业务调用方可根据自己的需求设置改时间，不建议太短
            }
        }
    }
</script>