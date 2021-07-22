import React from 'react';
import { Container, Row, Col, Carousel, Image} from 'react-bootstrap';

export default function Winner() {
    return (
        <div className="--bg-2" data-scroll-section>
            <Container className="--max">
                <Row>
                    <Col>
                        <Carousel fade>
                            <Carousel.Item>
                                <Row>
                                    <Col md={7}>
                                        <Image 
                                            data-scroll
                                        src={require('../../../assets/images/awardsandachievements/Awards_IMG-Winner-01.png').default} className="--awards"/>
                                    </Col>
                                    <Col>
                                        <Carousel.Caption 
                                            data-scroll
                                        className="--text-container">
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
                                        <Image 
                                            data-scroll
                                        src={require('../../../assets/images/awardsandachievements/Awards_IMG-Winner-02.png').default} className="--awards"/>
                                    </Col>
                                    <Col>
                                        <Carousel.Caption 
                                            data-scroll
                                        className="--text-container">
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
            <div className="winner-bg"/>
        </div>
    )
}