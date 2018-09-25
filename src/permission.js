import router from "./router";
import store from "./store";
import { getToken, setCorpCode } from "@/utils/auth"

router.beforeEach((to, from, next) => {
    console.log('router::::', to, from)
    if (to.query.corpCode) {
        setCorpCode(to.query.corpCode)
    }
    console.log('getToken', getToken())
    if (!getToken()) {
        let href = location.href
        console.log(href)
        if (href.indexOf('code=') === -1) {
            console.log(href)
            store.dispatch("LoginWX", { redirectUri: location.href + 'home' }).then(res => {
                location.href = res.data.url
                console.log('res:::', res)

            })
        } else {
            href = href.substring(href.indexOf('code='), href.length)
            let code = ''
            if (href.indexOf("&") !== -1) {
                code = href.substring(5, href.indexOf("&"))
            } else if (href.indexOf("#") !== -1) {
                code = href.substring(5, href.indexOf("#"))
            } else {
                code = href.substring(5, href.length)
            }
            console.log(code)
            store.dispatch("Login", { code: code }).then(res => {
                console.log(res)
                next()
            })
        }
    }
    next()
});

router.afterEach(() => {

});