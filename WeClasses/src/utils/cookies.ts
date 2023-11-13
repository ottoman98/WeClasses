import Cookies from 'js-cookie'

function getCookies(cookie: string) {

    return Cookies.get(cookie)

}


function removeCookies(cookie: string) {

    return Cookies.remove(cookie)

}


export { getCookies, removeCookies }