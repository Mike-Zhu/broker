import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { history } from '../router'
import Alert from '../services/alert';
import Http from '../services/http'

export default {
    watchLogin
}

function* watchLogin() {
    yield* takeEvery('Broker_login', login)
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
        }
        //存储
        history.replace('menu')
    } catch (e) {

    }
} 