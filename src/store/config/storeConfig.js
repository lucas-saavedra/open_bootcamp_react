
import { rootReducer } from "../reducers/rootReducer"
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';
import { watcherSaga } from "../sagas/sagas";

export const createAppStore = () => {

    let store = (rootReducer, composeWithDevTools())
    return store
}

export const createAsyncAppStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const composer = compose(applyMiddleware(sagaMiddleware), composeWithDevTools())
    let store = createStore(
        rootReducer,
        composer

    )
    sagaMiddleware.run(watcherSaga);
    return store
}