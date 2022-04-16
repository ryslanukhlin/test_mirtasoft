import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchImage } from '../store/request/image';
import { Image } from '../store/type/image';
import '../style/photo.css';

const Photo = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [image, setImage] = useState<Image>();
    const [download, setDownload] = useState(true);

    useEffect(() => {
        setTimeout(async () => {
            setImage(await fetchImage(params.id as unknown as number));
            setDownload(false);
        }, 500);
    }, []);

    const back = () => navigate('/');

    if (download)
        return (
            <div className="tooltip__wrapper">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    return (
        <Container>
            <Row>
                <Col md="auto" className="card__col">
                    <Card>
                        <Card.Img variant="top" src={image?.url} />
                        <Card.Body>
                            <Card.Title>{image?.title}</Card.Title>
                            <Card.Subtitle>Image albumId - {image?.albumId}</Card.Subtitle>
                            <Card.Text>
                                <a href={image?.url}>{image?.url}</a>
                                <br />
                                <a href={image?.thumbnailUrl}>{image?.thumbnailUrl}</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Button onClick={back} className="button_mt">
                        Назад
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Photo;
