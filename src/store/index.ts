import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import imageReducer from './reducer/image';
import rootSaga from './saga';

const rootReducer = combineReducers({
    imageReducer,
});
export type TRootState = ReturnType<typeof rootReducer>;

const enhancers: Array<any> = [];
if (process.env.NODE_ENV === 'development') {
    const devToolsExtension =
        ((window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
            (window as any).__REDUX_DEVTOOLS_EXTENSION__()) ||
        compose;
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension);
    }
}

const sagaMiddleware = createSagaMiddleware();
const composedEnhancers = compose(applyMiddleware(sagaMiddleware), ...enhancers);

export const store = createStore(rootReducer, composedEnhancers);
sagaMiddleware.run(rootSaga);
