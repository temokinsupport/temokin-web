import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselIndex() {
    return (
        <section className="--container-2" data-scroll-section>
             <Image className="--right" src={require('../../../assets/images/building/shape-right.png').default} />
            <Carousel className="carousel" >
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../../../assets/images/building/Image 97.png').default}
                    alt="First slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                    <br />
                    <br />
                    <h5>TROPICANA CENANG</h5>
                    <br />
                    <br />
                    <p>Client</p>
                    <p>Tropicana Corporation Berhad</p>
                    <hr className="hr-carousel" />
                    <p>Period</p>
                    <p>Ongoing</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../../../assets/images/building/Group 878.jpg').default}
                    alt="Second slide"
                    />

                    <Carousel.Caption className="carousel-caption">
                    <br />
                    <br />
                    <h5>NATIONAL CAMP AND SERVICES (NORTHERN REGIONS)</h5>
                    <br />
                    <br />
                    <p>Client</p>
                    <p>Ministry of Defense, Malaysia</p>
                    <hr className="hr-carousel" />
                    <p>Value</p>
                    <p>RM30 million</p>
                    <hr className="hr-carousel" />
                    <p>Period</p>
                    <p>September 2004 to December 2004</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../../../assets/images/building/Group 879.jpg').default}
                    alt="Third slide"
                    />

                   <Carousel.Caption className="carousel-caption">
                    <br />
                    <br />
                    <h5>MAHLIGAI AT NUSA DAMAI, 2 & 2.5 STOREY HOUSING, JOHOR</h5>
                    <br />
                    <br />
                    <p>Client</p>
                    <p>TEMOKIN Development Sdn. Bhd.</p>
                    <hr className="hr-carousel" />
                    <p>Value</p>
                    <p>RM100 million</p>
                    <hr className="hr-carousel" />
                    <p>Period</p>
                    <p>Feb 2017 to ongoing</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
                {/* <Row className='justify-content-center'>
                    <Col  md={12} className="mt-5 mb-5">
                        <div className="text-center mt-5 pt-5">
                            <Image className="--centerimg" src={require('../../../assets/images/civilinfrastructure/Rectangle 151.png').default} />
                        </div>
                    </Col>
                   
                </Row> */}
      </section>
    )
}