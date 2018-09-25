import request from '@/utils/request'
import qs from 'qs'

// 获取微信公众号自动登陆url
export function wxMpLoginOauth2(params) {
    return request({
        url: '/api/system/wx/mp/login/oauth2',
        method: 'post',
        data: params
    })
}
// 微信公众号自动登陆并注册账号
export function wxMpLogin(params) {
    return request({
        url: '/api/system/wx/mp/login',
        method: 'post',
        params: params
    })
}