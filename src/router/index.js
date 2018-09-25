import Vue from 'vue'
import Router from 'vue-router'
import Layout from "@/views/layout/Layout";

import Home from '@/components/HelloFromVux'
import List from '@/components/List'
import Geolocation from '@/components/Geolocation'

Vue.use(Router)

const routes = [{
        path: '/',
        component: Layout,
        children: [{
                path: 'home',
                name: 'Home',
                component: Home
            },
            {
                path: '/geolocation',
                name: 'Geolocation',
                component: Geolocation
            }
        ]
    },
    {
        path: '/list',
        name: 'List',
        component: List
    }
]
export default new Router({
    routes: routes
})