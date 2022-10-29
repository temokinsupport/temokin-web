import React, { useEffect } from "react";
import gsap from "gsap";
import SplitText from "../../utils/split.min.js";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import Navigation from "../../Navigation";
import Footer from "../../Footer";

export default function Header() {
  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });

    gsap.to(splitParent.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  return (
    <div className="--bg-1" data-scroll-section>
      <Navigation />
      <Container className="--max">
        <Row>
          <Col>
            <h1 className="--title" data-scroll id="header-text">
              JOIN OUR TEAM
            </h1>
          </Col>
        </Row>
       <Row className="justify-content-center text-header mb-5">
          <Col md="7" sm="12" className="pb-5 mb-5">
            From our humble start, we have grown tremendously and now we are looking to go 
            next level. We have a no-discrimination policy and believe in attitude, not so much aptitude. Of course, hard work is rewarded, and excellence is our lifestyle. If you're energetic, eager to learn and a team player, send us your resume and you could be on your way to a creer with Temokin.
          </Col>
          <Col md="10" sm="12" className="mb-5">
              <Form>
                <Form.Group as={Row} controlId="formPlaintextName" data-scroll>
                    <Form.Label column sm="3">
                        Name
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control className="career-form" value="" plaintext/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextContact"  data-scroll>
                <Form.Label column sm="3">
                    Contact Number
                </Form.Label>
                <Col sm="7">
                    <Form.Control className="career-form" value="" plaintext />
                </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextEmail" data-scroll>
                <Form.Label column sm="3">
                    Email Address
                </Form.Label>
                <Col sm="7">
                    <Form.Control className="career-form" value="" plaintext />
                </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextMessage" data-scroll>
                <Form.Label column sm="3" className="career-label">
                    Message
                </Form.Label>
                <Col sm={7}>
                    <Form.Control className="career-form-textarea" value="" as="textarea" rows={10} cols={10} />
                </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextMessage" data-scroll>
                <Form.Label column sm="3" className="career-label">
                    Upload RESUME
                </Form.Label>
                <Col sm={7}>
                  <div className="text-start">
                    <Button className="career-choosefile-button">CHOOSE FILE</Button>
                    <span className="career-choosefile-text">*PDF FORMAT ONLY, MAXIMUM FILE SIZE IS 10MB</span>
                  </div>
                </Col>
                <Col sm={12} className="mt-5 pt-5">
                  <div className="text-center">
                  <Button className="career-submit-button">SUBMIT</Button>
                  </div>
                </Col>
                </Form.Group>
                
                
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer/>
      {/* <div className="header-bg" data-scroll data-scroll-speed="-3" /> */}
      {/* <div className="header-shapes" data-scroll data-scroll-speed="-1" /> */}
    </div>
  );
}
