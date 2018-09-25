<template>
    <div>
        <!-- <div style="text-align: center; position: fixed; top: 3px; left: 20px; z-index: 1000;">
            <input type="text" style="width: 200px; height">
        </div> -->
        <div id="container" :style="{'min-height': minHeight + 'px', 'min-width': minWidth + 'px'}">
        </div>
    </div>
</template>
<script>
import { TMap } from './TMap'
const key = 'PEPBZ-KWTKP-4BVD5-L2TU4-UKCAJ-F3FEQ'
export default {
    data() {
        return {
            minWidth: 100,
            minHeight: 500
        }
    },
    mounted() {
        TMap(key).then(qq => {
            let latLng = new qq.maps.LatLng(39.916527,116.397128)
            let myOptions = {
                zoom: 13,
                center: latLng,
                mapTypeId: ''
            }
            let map = new qq.maps.Map(document.getElementById("container"), {
                // 地图的中心地理坐标。
                center: new qq.maps.LatLng(39.916527, 116.397128),
                zoom: 14
            })
            //设置定时器每隔2秒改变地图中心点位置
            setTimeout(function() {
                //经纬度信息
                map.panTo(new qq.maps.LatLng(39.9, 116.4));
            }, 2000);
            //自动缩放每隔2秒执行一次
            // setInterval(function() {
            //     map.zoomTo((map.getZoom() + 1) % 17);
            // }, 2000);
        })
    },
    methods: {
    },
    created() {
        this.minWidth = window.innerWidth
        this.minHeight = window.innerHeight
        console.log(window.innerHeight, window.innerWidth)
    }
}
</script>
<style>
/* #container {
    min-width: 100px;
    min-height: 600px;
} */
</style>