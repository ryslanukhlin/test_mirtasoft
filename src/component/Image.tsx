import { FC, useState } from 'react';
import { Button, Col, Image as ImageBootstrap } from 'react-bootstrap';
import { Image as ImageType } from '../store/type/image';
import { useNavigate } from 'react-router-dom';
import '../style/main.css';

const Image: FC<{ item: ImageType }> = ({ item }) => {
    const navigate = useNavigate();
    const [showOverlay, setShowOverlay] = useState(false);

    const focusImage = () => {
        setShowOverlay(true);
    };

    const leaveFocusImage = () => {
        setShowOverlay(false);
    };

    const navigateToImagePage = (id: number) => navigate('/photos/' + id);

    return (
        <Col style={{ marginBottom: 30 }} lg={4}>
            <div
                onMouseEnter={focusImage}
                onMouseLeave={leaveFocusImage}
                className="image__wrapper">
                <ImageBootstrap className="image" src={item.url} />
                <Button
                    onClick={navigateToImagePage.bind(null, item.id)}
                    className={`image__tooltip ${showOverlay ? 'image_activ' : ''} `}>
                    Подробнее
                </Button>
            </div>
        </Col>
    );
};

export default Image;
