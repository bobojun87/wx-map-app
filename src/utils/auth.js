const TokenKey = 'Apply-Token'
const corpCode = 'corpCode'

export function getToken() {
    return sessionStorage.getItem(TokenKey)
}

export function setToken(token) {
    return sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
    return sessionStorage.removeItem(TokenKey)
}

export function getCorpCode() {
    return sessionStorage.getItem(corpCode)
}

export function setCorpCode(cCode) {
    return sessionStorage.setItem(corpCode, cCode)
}

export function removeCorpCode() {
    return sessionStorage.removeItem(corpCode)
}