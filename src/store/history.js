import createHistory from 'history/createHashHistory'
import { checkPathname, checkToken } from '../router/routerData'

const setUp = {
    '/menu': menucb,
    '/customerList': customerList
}
const pathArray = Object.keys(setUp)
const history = createHistory();


export const historyStart = (store) => {
    history.listen(location => {
        const { pathname } = location;
        if (!checkToken() && checkPathname.indexOf(pathname) >= 0) {
            history.replace('login')
        }
        if (pathArray.indexOf(pathname) > 0) {
            setUp[pathname](store);
        }
    })
}

export default history;

function menucb() {

}

function customerList(store) {

}