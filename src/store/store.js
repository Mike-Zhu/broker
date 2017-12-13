import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
for (var key in saga) {
    sagaMiddleware.run(saga[key])
}

export const action = ({ type, payload }) => store.dispatch({ type, payload });
export default store