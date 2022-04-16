export type Image = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
};

export type ImageState = {
    images: Image[];
    download: boolean;
};

export enum ImageActionEnum {
    DOWNLOAD_IMAGE = 'DOWNLOAD_IMAGE',
    SET_DOWNLOAD = 'SET_DOWNLOAD',
    SET_IMAGES = 'SET_IMAGES',
}

export type DownloadImage = {
    type: ImageActionEnum.DOWNLOAD_IMAGE;
};
export type SetDownload = {
    type: ImageActionEnum.SET_DOWNLOAD;
    payload: boolean;
};

export type SetImages = {
    type: ImageActionEnum.SET_IMAGES;
    payload: Image[];
};

export type ImageAction = SetDownload | SetImages | DownloadImage;
