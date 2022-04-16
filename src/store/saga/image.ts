import { takeEvery, call, put, delay } from '@redux-saga/core/effects';
import { setDownload, setImages } from '../reducer/image';
import { fetchImages } from '../request/image';
import { ImageActionEnum, Image } from '../type/image';

function* getImages() {
    yield put(setDownload(true));
    yield delay(500);
    const data: Image[] = yield call(fetchImages);
    yield put(setImages(data));
    yield put(setDownload(false));
}

export default function* watherImages() {
    yield takeEvery(ImageActionEnum.DOWNLOAD_IMAGE, getImages);
}
