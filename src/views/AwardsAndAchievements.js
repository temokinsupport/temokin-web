import React from 'react';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import '../assets/styles/awardsandachievements.scss';

function AwardsAndAchievements() {
    return (
        <div className="--awards-and-achievements">
            <div className="--bg-1">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="--title">Awards and Client <br/>
                            Survey Forms</h1>
                            <p className="--desc">Our awards and recognitions are <br/>
                            testament to our sterling <br/>
                            reputation in always delivering high-<br/>
                            quality work on time.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="--bg-2">
                <Container className="--max">
                    <Row>
                        <Col>
                            <Carousel fade>
                                <Carousel.Item>
                                    <Row>
                                        <Col md={7}>
                                            <Image src={require('../assets/images/awardsandachievements/Awards_IMG-Winner-01.png').default} className="--awards"/>
                                        </Col>
                                        <Col>
                                            <Carousel.Caption className="--text-container">
                                                <h6 className="--title">Winner</h6>
                                                <p className="--desc">Excellent contractor award 2015 for <br/>
                                                infrustructure project costing more <br/>
                                                than rm10 million and less than rm50 <br/>
                                                million <br/><br/>
                                                Middle ring road seremban, negeri <br/>
                                                sembilan phase 3a</p>
                                            </Carousel.Caption>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row>
                                        <Col md={7}>
                                            <Image src={require('../assets/images/awardsandachievements/Awards_IMG-Winner-02.png').default} className="--awards"/>
                                        </Col>
                                        <Col>
                                            <Carousel.Caption className="--text-container">
                                                <h6 className="--title">First <br/>
                                                Runner Up</h6>
                                                <p className="--desc">Excellent contractor award 2015 <br/>
                                                for infrustructure project costing more <br/>
                                                than rm50 million <br/><br/>
                                                Middle ring road seremban, negeri <br/>
                                                sembilan phase 2b</p>
                                            </Carousel.Caption>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="--bg-3">
                <Container className="--max">
                    <Row>
                        <Col>
                            <h1 className="--title">Testimonials</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={7}>
                            <Image src={require('../assets/images/awardsandachievements/Awards_IMG-Testimonial-01.png').default} className="--testimonial"/>
                        </Col>
                        <Col>
                            <Carousel.Caption className="--text-container">
                                <h6 className="--title">"Generally the <br/>
                                Overall performance <br/>
                                has been excellent"</h6>
                                <hr/>
                                <p className="--desc">Ir Hj Othman Ibrahim, <br/>
                                Seniour General Manager of <br/>
                                contruction, special project <br/>
                                unit I, RoadWorks Division, JKR <br/>
                                HeadQuarters Malaysia</p>
                            </Carousel.Caption>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default AwardsAndAchievements;
