import React from "react";
import Iframe from 'react-iframe';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import Footer from '../../Footer';

export default function EmailUs() {
    return (
        <div className="--bg-2" data-scroll-section>
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
                    <Iframe 
                    width="100%" 
                    height="100%" 
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Temokin%20Holdings%20Sdn%20Bhd,%20No,2,%20Jalan%2015/48a,%20Sentul%20Raya%20Boulevard,%2051000%20Kuala%20Lumpur,%20Federal%20Territory%20of%20Kuala%20Lumpur,%20Malaysia+(temokin%20holdings%20sdn%20bhd)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
                </div>
                </Col>
            </Row>
        </Container>
        <div className="form-bg"/>
        <Footer/>
      </div>
    )
}