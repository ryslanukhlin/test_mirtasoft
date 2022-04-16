import {
    ImageAction,
    ImageActionEnum,
    ImageState,
    Image,
    SetDownload,
    SetImages,
    DownloadImage,
} from '../type/image';

const initialState: ImageState = {
    download: false,
    images: [],
};

const imageReducer = (state: ImageState = initialState, action: ImageAction): ImageState => {
    switch (action.type) {
        case ImageActionEnum.SET_DOWNLOAD:
            return { ...state, download: action.payload };
        case ImageActionEnum.SET_IMAGES:
            return { ...state, images: action.payload };
        default:
            return state;
    }
};

export default imageReducer;

export const downloadImage = (): DownloadImage => ({
    type: ImageActionEnum.DOWNLOAD_IMAGE,
});
export const setDownload = (download: boolean): SetDownload => ({
    type: ImageActionEnum.SET_DOWNLOAD,
    payload: download,
});

export const setImages = (images: Image[]): SetImages => ({
    type: ImageActionEnum.SET_IMAGES,
    payload: images,
});
