import React from 'react';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';

export default function Testimonials() {
    return (
        <div className="--bg-3" data-scroll-section>
            <Container className="--max">
                <Row>
                    <Col>
                        <h1 className="--title" data-scroll data-scroll-speed="2">Testimonials</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={7}>
                        <Image  data-scroll data-scroll-speed="2" src={require('../../../assets/images/awardsandachievements/Awards_IMG-Testimonial-01.png').default} className="--testimonial"/>
                    </Col>
                    <Col>
                        <Carousel.Caption  data-scroll data-scroll-speed="2" className="--text-container">
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
            <div className="testimonial-bg"/>
        </div>
    )
}