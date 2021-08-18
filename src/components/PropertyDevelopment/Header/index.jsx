import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
import Navigation from '../../Navigation';

export default function Header() {
    return (
        <div className="--bg-1" data-scroll-section>
            <Navigation/>
            <Container>
                <Row>
                    <Col>
                        <h1 data-aos="zoom-in" className="--title" data-scroll data-scroll-speed="2">Property Development</h1>
                        <p data-aos="zoom-in" className="--desc" data-scroll data-scroll-speed="2">With over 50 years of combined experience in development, we have designed <br/>
                        and built a multitude of complex skycrapers, hospitals, modern retail spaces <br/>
                        nad high-quality homes, with our crowning glory being the construction of <br/>
                        Istana Negara, the National Palace of Malaysia.</p>
                    </Col>
                </Row>
            </Container>
            <div className="header-bg"/>
        </div>
    )
}