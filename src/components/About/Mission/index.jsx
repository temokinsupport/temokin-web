import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Mission() {
    return (
        <div className="--bg-3" data-scroll-section>
            <div className="--container-3">
                <Container>
                    <Row>
                        <Col>
                            <Image data-scroll src={require('../../../assets/images/aboutus/About_Logo-02.png').default} className="--img"/>
                            <h2 data-scroll className="--title">OUR MISSION</h2>
                            <p data-scroll className="--sub-title">
                                To deliver outstanding work <br/>
                                consistently, punctually and with <br/>
                                absolute integrity.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};