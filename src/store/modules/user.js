import { wxMpLoginOauth2, wxMpLogin } from '@/api/login'
import {
    getToken,
    setToken,
    removeToken
} from '@/utils/auth'

const user = {

    state: {
        token: '',
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
    },

    actions: {
        LoginWX({ commit }, data) {
            return new Promise((resolve, reject) => {
                wxMpLoginOauth2({
                    redirectUri: data.redirectUri
                }).then(res => {
                    // setToken(res.data)
                    // commit("SET_TOKEN", res.data)
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        Login({ commit }, data) {
            return new Promise((resolve, reject) => {
                wxMpLogin({
                    code: data.code
                }).then(res => {
                    setToken(res.data)
                    commit("SET_TOKEN", res.data)
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }

}

export default user;