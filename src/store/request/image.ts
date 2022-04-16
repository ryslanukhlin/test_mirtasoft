import axios from 'axios';
import { Image } from '../type/image';

const uri = 'https://jsonplaceholder.typicode.com/photos';

export const fetchImages = async () => {
    const request = await axios.get<Image[]>(uri + '?_limit=24');
    return request.data;
};

export const fetchImage = async (id: number) => {
    const request = await axios.get<Image>(uri + '/' + id);
    return request.data;
};
