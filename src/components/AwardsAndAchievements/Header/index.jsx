import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Navigation from '../../Navigation';

export default function Header() {
    return (
        <div className="--bg-1" data-scroll-section>
            <Navigation/>
            <Container>
                <Row>
                    <Col>
                        <h1 className="--title" data-scroll data-scroll-speed="1">Awards and Client <br/>
                        Survey Forms</h1>
                        <p className="--desc" data-scroll data-scroll-speed="1">Our awards and recognitions are <br/>
                        testament to our sterling <br/>
                        reputation in always delivering high-<br/>
                        quality work on time.</p>
                    </Col>
                </Row>
            </Container>
            <div className="header-shape"/>
            <div className="header-bg"/>
        </div>
    )
}