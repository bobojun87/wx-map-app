<template>
    <div>
        <div class="top-box">
            <img class="company-logo-image" src="../../assets/company_logo.png">
        </div>
        <div>
            <transition>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
        
        
        <tabbar style="position:fixed"> 
            <tabbar-item :selected="$route.name === 'Home'" link="Home">
                <img slot="icon" src="../../assets/interview_judge_ordinary.png">
				<img slot="icon-active" src="../../assets/interview_judge_unsatisfy.png">
                <span slot="label">热招职位</span>
            </tabbar-item>
            <tabbar-item :selected="$route.name === 'Geolocation'" link="Geolocation"> 
                <img slot="icon" src="../../assets/job_education.png">
				<img slot="icon-active" src="../../assets/job_experience.png">
                <span slot="label">我的</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>
<script>
import { Tabbar, TabbarItem, Loading }from 'vux'
export default {
    components: {
        Tabbar,
        TabbarItem,
        Loading
    },
    data() {
        return {
            companyInfo: {}
        }
    },
    created(){
        // this.getCompanyInfoData()
    },
    methods: {
        getCompanyInfoData() {
            getCompanyInfo().then(res => {
                this.companyInfo = res.data
            }).catch(err => {

            })
        }
    }
}
</script>
<style scoped>
    .vux-x-icon {
        fill: #F70968;
    }
    .top-box {
        width: 100%;
        height: 80px;
        background-color: #ffffff;
        /* background-image: url("../../assets/job_background-img.png"); */
        background-size: cover;
        border-bottom: 5px solid #F5F5F5;

    }
    .company-logo-image {
        margin-top: 10px;
        width: 60px;
        height: 60px;
        border-radius: 30px;
    }
</style>
