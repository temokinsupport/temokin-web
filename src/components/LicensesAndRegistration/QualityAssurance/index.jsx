import React from 'react';
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap';

export default function QualityAssurance() {
    return (
        <div className="--bg-3" data-scroll-section>
            <Container className="--max">
                <Row>
                    <Col>
                        <h1 className="--title" data-scroll data-scroll-speed="1"> Quality Assurance</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={7} data-scroll data-scroll-speed="1">
                        <Carousel fade>
                            <Carousel.Item>
                                <Image src={require('../../../assets/images/licensesandregistrations/Licenses_IMG-QA-01.png').default}/>
                                <Carousel.Caption>
                                    <h3 className="--caption"> ISO 9001 : 2008<br/>
                                    Sirim Qas </h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={require('../../../assets/images/licensesandregistrations/Licenses_IMG-QA-02.png').default}/>
                                <Carousel.Caption>
                                    <h3 className="--caption"> ISO 9001 : 2008<br/>
                                    Sirim Qas </h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={require('../../../assets/images/licensesandregistrations/Licenses_IMG-QA-03.png').default}/>
                                <Carousel.Caption>
                                    <h3 className="--caption"> ISO 9001 : 2008<br/>
                                    Sirim Qas </h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={require('../../../assets/images/licensesandregistrations/Licenses_IMG-QA-04.png').default}/>
                                <Carousel.Caption>
                                    <h3 className="--caption"> ISO 9001 : 2008<br/>
                                    Sirim Qas </h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={require('../../../assets/images/licensesandregistrations/Licenses_IMG-QA-05.png').default}/>
                                <Carousel.Caption>
                                    <h3 className="--caption"> ISO 9001 : 2008<br/>
                                    Sirim Qas </h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={require('../../../assets/images/licensesandregistrations/Licenses_IMG-QA-06.png').default}/>
                                <Carousel.Caption>
                                    <h3 className="--caption"> ISO 9001 : 2008<br/>
                                    Sirim Qas </h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={require('../../../assets/images/licensesandregistrations/Licenses_IMG-QA-07.png').default}/>
                                <Carousel.Caption>
                                    <h3 className="--caption"> ISO 9001 : 2008<br/>
                                    Sirim Qas </h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col>
                        <div className="--text-container" data-scroll data-scroll-speed="2">
                            <hr/>
                            <p className="--desc"> We maintain a quality management <br/>
                            system which fulfills the <br/>
                            requirements of iso <br/>
                            9001 : 2008, specifically for <br/>
                            construction services of <br/>
                            roadworks and infrastructures. <br/>
                            It is certified by sirim <br/>
                            qas International Sdn Bhd and also the International Certification Network, iqnet. </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="qualityassurance-bg"/>
            <div className="qualityassurance-shape"/>
        </div>
    )
}