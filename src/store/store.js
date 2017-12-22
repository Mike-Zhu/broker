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

/************************************************************************/
//这一步可以放在saga里
//因为action比liston来的更快，可以直接劫持然后replace到login
history.listen(location => {
    const { pathname } = location;
    if (!checkToken() && checkPathname.indexOf(pathname) >= 0) {
        history.replace('login')
    }
})
/************************************************************************/