import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/contactus.scss';

function ContactUs() {
  return (
    <div className="--contact-us">
      <div className="--bg-1">
        <Container>
          <Row>
            <Col>
              <h1 className="--title">Get In Touch</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ContactUs;
