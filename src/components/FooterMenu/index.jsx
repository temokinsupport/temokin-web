import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/styles/footer.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FooterMenu() {
    return (
        <footer className="--footer" data-scroll-section>
            <Container fluid className="--max">
                <Row>
                    <Col md={8}>
                       <div className="--left-container">
                            <NavLink exact to="/" className="--logo">
                                <img src={require('../../assets/Logo.png').default} alt='logo'/>
                            </NavLink>
                            <div className="--address">
                                <span>
                                    <p>Temokin Holdings Sdn Bhd (182413-M)</p>
                                    <p>No.2, Jalan 15/48 A,</p>
                                </span>
                                <span>
                                    <p>Sentul Raya Boulevard,</p>
                                    <p>51000 Kuala Lumpur</p>
                                </span>
                            </div>
                       </div>
                    </Col>
                    <Col md={4}>
                        <div className="--right-container">
                            <p>© Temokin Holdings 2018</p>
                            <sub>Terms of Service &nbsp; | &nbsp; Privacy Policy </sub>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}