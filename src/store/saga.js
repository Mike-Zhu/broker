import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import createHistory from 'history/createHashHistory'
import Alert from '../services/alert';
import Http from '../services/http'
import JRfunction from '../services/JRfunction'

const history = createHistory();
export default {
    watchLogin,
    customerlist,
    routerChange
}

function* watchLogin() {
    yield* takeEvery('Broker_login', login)
}

function* customerlist() {
    yield* takeEvery('load_customerList', getCustomerList)

}

function* routerChange() {
    yield* takeEvery('@@router/LOCATION_CHANGE',  function* ({ payload: { pathname } }){
        yield put({ type: `routerLoad${pathname}` })
    })

}



function* getCustomerList({ payload }) {
    try {
        const { search } = history.location;
        const { customerName, productName } = JRfunction.getUrlQuery(search);
        const { page, limit } = payload;
        const start = (page - 1) * limit;
        const url = 'wechat/broker/customer'
        const openId = localStorage.getItem('openId')
        const params = {
            start,
            limit,
            openId,
            customerName,
            productName
        }
        const { data } = yield call(Http.get, url, params, "customer")
        yield put({
            type: "load_customearray",
            payload: data
        })
    } catch (e) {

    }
}

function* login({ payload }) {
    try {
        const openId = localStorage.getItem('openId');
        const params = {
            ...payload,
            openId
        };
        const submitUrl = "wechat/access";
        const reponse = yield call(Http.post, submitUrl, params, "access")
        if (reponse && reponse.token) {
            localStorage.setItem('token', reponse.token)
            localStorage.setItem('tokenTime', new Date().getTime())
            localStorage.setItem('globalData', JSON.stringify(reponse))

            yield put({
                type: "global_data",
                payload: reponse
            })
        } else if (reponse && reponse.type === "fail") {
            Alert.alert(reponse.data || "登录错误，请重试")
            return;
        }
        //存储
        history.replace('menu')
    } catch (e) {

    }
} 