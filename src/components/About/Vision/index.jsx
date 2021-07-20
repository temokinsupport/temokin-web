import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Vision() {
    return (
        <div className="--bg-2" data-scroll-section>
            <div className="--container-2">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="--title" data-scroll>OUR VISION</h2>
                            <p className="--sub-title" data-scroll>We aim to be the one <br/>
                            company that</p>
                            <h1 className="--title" data-scroll>WINS <br/>
                            YOUR TRUST <br/>
                            EVERY TIME</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};