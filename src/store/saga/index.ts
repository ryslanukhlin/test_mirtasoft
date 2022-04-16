import { all } from '@redux-saga/core/effects';
import watherImages from './image';

function* rootSaga() {
    yield all([watherImages()]);
}

export default rootSaga;
