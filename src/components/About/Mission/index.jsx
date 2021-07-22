import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Mission() {
    return (
        <div className="--container-3" data-scroll-section>
            <Container>
                <Row>
                    <Col>
                        <Image 
                            data-scroll 
                            data-scroll-speed="-3" src={require('../../../assets/images/aboutus/About_Logo-02.png').default} className="--img"/>
                        <h2 
                            data-scroll 
                            data-scroll-speed="-1"
                            className="--title">OUR MISSION</h2>
                        <p  
                            data-scroll 
                            data-scroll-speed="-1"
                        className="--sub-title">
                            To deliver outstanding work <br/>
                            consistently, punctually and with <br/>
                            absolute integrity.
                        </p>
                    </Col>
                </Row>
            </Container>
            <div className="mission-bg"/>
        </div>
    )
}