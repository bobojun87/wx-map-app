import axios from 'axios'
import store from '../store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({

        baseURL: process.env.BASE_API, // api的base_url
        // baseURL:'172.16.68.139:8765',
        timeout: 60000 // 请求超时时间
    })
    // request拦截器
service.interceptors.request.use(config => {
    if (store.getters.token) {
        config.headers['Authorization'] = getToken() // 让每个请求携带自定义token
    }
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject("error")
})

// respone拦截器
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)

export default service