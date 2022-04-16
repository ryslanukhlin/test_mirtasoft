import axios from 'axios';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchImage } from '../store/request/image';
import { Image } from '../store/type/image';
import '../style/main.css';

const Photo = () => {
    const params = useParams();
    const [image, setImage] = useState<Image>();
    const [download, setDownload] = useState(true);

    useEffect(() => {
        setTimeout(async () => {
            setImage(await fetchImage(params.id as unknown as number));
            setDownload(false);
        }, 500);
    }, []);

    if (download)
        return (
            <div className="tooltip__wrapper">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    return <div>Photo</div>;
};

export default Photo;
