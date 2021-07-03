import React from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
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
        <Container className="--max">
          <Row>
            <Col md={6}>
              <h3 className="--title">Let's Get This Conversation Started!</h3>
              <Form>
                <Form.Group as={Row} controlId="formPlaintextName">
                  <Form.Label column sm="3">
                    Name
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control plaintext defaultValue="" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextContact">
                  <Form.Label column sm="3">
                    Contact Number
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control plaintext defaultValue="" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="3">
                    Email Address
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control plaintext defaultValue="" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextMessage">
                  <Form.Label column sm="3">
                    Message
                  </Form.Label>
                  <Col sm={6}>
                    <Form.Control as="textarea" rows={10} />
                  </Col>
                </Form.Group>

                <Button className="--btn-send"/>
              </Form>
            </Col>
            <Col md={6}>
              <div className="--map-container">
                <iframe 
                width="100%" 
                height="100%" 
                frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Temokin%20Holdings%20Sdn%20Bhd,%20No,2,%20Jalan%2015/48a,%20Sentul%20Raya%20Boulevard,%2051000%20Kuala%20Lumpur,%20Federal%20Territory%20of%20Kuala%20Lumpur,%20Malaysia+(temokin%20holdings%20sdn%20bhd)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ContactUs;
