import React from 'react';
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap';

export default function Licenses() {
    return (
        <div className="--bg-2" data-scroll-section>
            <Container>
                <Row>
                    <Col data-scroll
                        data-scroll-speed="2" >
                        <Carousel fade>
                            <Carousel.Item>
                                <Image 
                                    src={require('../../../assets/images/licensesandregistrations/Licenses_IMG-License-01.png').default}/>
                                <Carousel.Caption>
                                    <h3 className="--caption"> Contractor Service Center Class A <br/>
                                    Minister Of Works </h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={require('../../../assets/images/licensesandregistrations/Licenses_IMG-License-02.png').default}/>
                                <Carousel.Caption>
                                    <h3 className="--caption"> Company Registration <br/>
                                    Ministry of Finance, Malaysia </h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={require('../../../assets/images/licensesandregistrations/Licenses_IMG-License-03.png').default}/>
                                <Carousel.Caption>
                                    <h3 className="--caption"> Company Registration, Mais </h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={require('../../../assets/images/licensesandregistrations/Licenses_IMG-License-04.png').default}/>
                                <Carousel.Caption>
                                    <h3 className="--caption"> Contractor Registration <br/>
                                    Ministry of Finance, Malaysia </h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={require('../../../assets/images/licensesandregistrations/Licenses_IMG-License-05.png').default}/>
                                <Carousel.Caption>
                                    <h3 className="--caption"> Contractor <br/>
                                    CIDB Malaysia </h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={require('../../../assets/images/licensesandregistrations/Licenses_IMG-License-06.png').default}/>
                                <Carousel.Caption>
                                    <h3 className="--caption"> Government Work Aquisition <br/>
                                    CIDB Malaysia </h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            <div className="licenses-bg"/>
        </div>
    )
}