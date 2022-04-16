import { FC, useEffect } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TRootState } from '../store';
import { downloadImage } from '../store/reducer/image';
import { ImageAction, Image as ImageType } from '../store/type/image';
import Image from '../component/Image';
import '../style/main.css';

type MainProps = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>;

const CustomColAndTitle: FC<{ item: ImageType; category: number }> = ({ item, category }) => {
    return (
        <>
            <h1>Category {category}</h1>
            <Image item={item} />
        </>
    );
};

const Main: FC<MainProps> = ({ downloadImage, download, images }) => {
    useEffect(() => {
        downloadImage();
    }, []);

    let category: number = 1;
    let iterator: number = 0;
    return (
        <>
            {download && (
                <div className="tooltip__wrapper">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )}
            {!download && (
                <Container>
                    <Row>
                        {images.map((item) => {
                            if (iterator === 6) {
                                iterator = 0;
                                category++;
                            }
                            if (iterator === 0) {
                                iterator++;
                                return (
                                    <CustomColAndTitle
                                        category={category}
                                        item={item}
                                        key={item.id}
                                    />
                                );
                            }
                            iterator++;
                            return <Image key={item.id} item={item} />;
                        })}
                    </Row>
                </Container>
            )}
        </>
    );
};

const mapStateToProps = (state: TRootState) => ({
    download: state.imageReducer.download,
    images: state.imageReducer.images,
});

const mapDispatchToProps = (dispatch: Dispatch<ImageAction>) => ({
    downloadImage: () => dispatch(downloadImage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
