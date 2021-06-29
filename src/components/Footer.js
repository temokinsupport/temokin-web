import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/footer.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <footer className="--footer">
            <Container>
                <Row>
                    <Col md={8}>
                        <Link to="/" className="--logo">
                            <img src={require('../assets/Logo.png').default} alt='logo'/>
                        </Link>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;