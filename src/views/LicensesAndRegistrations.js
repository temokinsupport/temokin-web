import React from 'react';
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap';
import '../assets/styles/licensesandregistrations.scss';

function LicensesAndRegistrations() {
  return (
    <div className="--licenses-and-registrations">
        <div className="--bg-1">
            <Container>
                <Row>
                    <Col>
                        <h1 className="--title">Licenses <br/> and Registrations</h1>
                        <p className="--desc">These licenses and certifications specify the <br/>
                        range of our capabilities, allowing us to take <br/>
                        on large-scale, complex projects with the <br/>
                        approval of the authorities.</p>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="--bg-2">
            <Container>
                <Row>
                    <Col>
                        <Carousel fade>
                            <Carousel.Item>
                                <Image src={require('../assets/images/licensesandregistrations/Licenses_IMG-License-01.png').default}/>
                                <Carousel.Caption>
                                    <h3 className="--caption"> Contractor Service Center Class A <br/>
                                    Minister Of Works </h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={require('../assets/images/licensesandregistrations/Licenses_IMG-License-02.png').default}/>
                                <Carousel.Caption>
                                    <h3 className="--caption"> Company Registration <br/>
                                    Ministry of Finance, Malaysia </h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={require('../assets/images/licensesandregistrations/Licenses_IMG-License-03.png').default}/>
                                <Carousel.Caption>
                                    <h3 className="--caption"> Company Registration, Mais </h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={require('../assets/images/licensesandregistrations/Licenses_IMG-License-04.png').default}/>
                                <Carousel.Caption>
                                    <h3 className="--caption"> Contractor Registration <br/>
                                    Ministry of Finance, Malaysia </h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={require('../assets/images/licensesandregistrations/Licenses_IMG-License-05.png').default}/>
                                <Carousel.Caption>
                                    <h3 className="--caption"> Contractor <br/>
                                    CIDB Malaysia </h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={require('../assets/images/licensesandregistrations/Licenses_IMG-License-06.png').default}/>
                                <Carousel.Caption>
                                    <h3 className="--caption"> Government Work Aquisition <br/>
                                    CIDB Malaysia </h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  );
}

export default LicensesAndRegistrations;
