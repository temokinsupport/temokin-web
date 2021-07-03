import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../assets/styles/contactus.scss';

function ContactUs() {
  return (
    <div className="--contact-us">
      <div className="--bg-1">
        <Container className="--max">
          <Row>
            <Col>
              <h1 className="--title">Get In Touch</h1>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Image src={require('../assets/images/contactus/Contact_Icon-01.png').default} />
              <h3 className="--title">Address</h3>
              <p className="--desc">Temokin Holdings Sdn Bhd (182413-M) <br/>
              No.2, Jalan 15/48 A, <br/>
              Sentul Raya Boulevard, <br/>
              51000 Kuala Lumpur</p>
            </Col>
            <Col md={4}>
              <Image src={require('../assets/images/contactus/Contact_Icon-02.png').default} />
              <h3 className="--title">Phone</h3>
              <p className="--desc">Tel: +603-40441111 <br/>
              Fax: +603-40418900</p>
            </Col>
            <Col md={4}>
              <Image src={require('../assets/images/contactus/Contact_Icon-03.png').default} />
              <h3 className="--title">Email</h3>
              <p className="--desc">temokin@temokin.com</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="--bg-2">

      </div>
    </div>
  );
}

export default ContactUs;
