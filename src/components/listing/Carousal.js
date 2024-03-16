import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample({ images }) {
    let publicUrl = process.env.PUBLIC_URL + '/'
    return (
        <>
            {images.length !== 0 ? (
                <Carousel fade>
                    {images.map((image, i) => (
                        <Carousel.Item key={i}>
                            <img src={image} alt="#" />
                            <Carousel.Caption>
                                <h3>Slide {i + 1} label</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            ) : (
                <Carousel fade>
                    <Carousel.Item>
                        <img src={publicUrl + "assets/images/resources/listings_details-img1.jpg"} alt="#" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={publicUrl + "assets/images/resources/listings_details-img1.jpg"} alt="#" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={publicUrl + "assets/images/resources/listings_details-img1.jpg"} alt="#" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            )}
        </>
    );
}

export default CarouselFadeExample;