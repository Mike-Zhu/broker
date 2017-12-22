import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import saga from './saga'
import { routerReducer as router, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createHashHistory'
import { checkPathname, checkToken } from '../router/routerData'

const sagaMiddleware = createSagaMiddleware()

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const store = createStore(
    combineReducers({
        reducer,
        router
    }),
    applyMiddleware(sagaMiddleware, middleware),
)
// historyStart()
for (var key in saga) {
    sagaMiddleware.run(saga[key])
}
// export const action = ({ type, payload }) => store.dispatch({ type, payload });
export default store

history.listen(location => {
    console.log(1)
    const { pathname } = location;
    // if (!checkToken() && checkPathname.indexOf(pathname) >= 0) {
    //     history.replace('login')
    // }
})