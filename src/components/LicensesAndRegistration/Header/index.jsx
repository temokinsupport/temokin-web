import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from '../../Navigation';

export default function Header() {
    return (
        <div className="--bg-1" data-scroll-section>
            <Navigation/>
            <Container>
                <Row>
                    <Col>
                        <h1 data-scroll className="--title" >Licenses <br/> and Registrations</h1>
                        <p data-scroll className="--desc">These licenses and certifications specify the <br/>
                        range of our capabilities, allowing us to take <br/>
                        on large-scale, complex projects with the <br/>
                        approval of the authorities.</p>
                    </Col>
                </Row>
            </Container>
            <div className="header-shape"/>
            <div className="header-bg"/>
        </div>
    )
}