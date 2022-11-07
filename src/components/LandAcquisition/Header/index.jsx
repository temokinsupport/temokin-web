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
              LAND ACQUISITION
            </h1>
          </Col>
        </Row>
       <Row className="justify-content-center text-header mb-5">
          <Col md="8" sm="12" className="pb-5 mb-5">
            As part of our relentless pursuit to enhance quality of life, we welcome you to<br />
            share with us any land opportunities, be it for residential, commercial <br />
            or industrial developments.
           </Col>
          <Col md="12" sm="12" className="mb-4">
            <Row className="row-cols-2 row-cols-lg-5 g-2 g-lg-3">
              <Col md="3" className="text-end">
                <Form.Label column className="land-label text-end">
                    NAME
                </Form.Label>
              </Col>
              <Col md="7">
                <Form.Control className="land-form" value="" plaintext/>
              </Col>
              <Col md="3" className="text-end">
                <Form.Label column className="land-label text-end">
                    CONTACT NUMBER
                </Form.Label>
              </Col>
              <Col md="7">
                <Form.Control className="land-form" value="" plaintext/>
              </Col>
              <Col md="3" className="text-end">
                <Form.Label column className="land-label text-end">
                    EMAIL ADDRESS
                </Form.Label>
              </Col>
              <Col md="7">
                <Form.Control className="land-form" value="" plaintext/>
              </Col>
              <Col md="3" className="text-end">
                <Form.Label column className="land-label text-end">
                    LOCATION OF LAND
                </Form.Label>
              </Col>
              <Col md="7">
                <Form.Control className="land-form" value="" plaintext/>
              </Col>
              <Col md="3" className="text-end">
                <Form.Label column className="land-label text-end">
                    ASKING PRICE
                </Form.Label>
              </Col>
              <Col md="7">
                <Form.Control className="land-form" value="" plaintext/>
              </Col>
              <Col md="3" className="text-end">
                <Form.Label column className="land-label text-end">
                    MODE OF COLLABORATION
                </Form.Label>
              </Col>
              <Col md="7" className="mt-4 pt-1">
                <Row>
                  <Col>
                    <Form.Check
                      type="radio"
                      label="JOINT VENUE"
                      className="land-radio"
                    />
                  </Col>
                  <Col>
                   <Form.Check
                      type="radio"
                      label="OUTRIGHT SALE"
                      className="land-radio"
                    />
                  </Col>
                  <Col>
                   <Form.Check
                      type="radio"
                      label="OTHERS"
                      className="land-radio"
                    />
                  </Col>
                </Row>
             
             
              </Col>
              <Col md="3" className="text-end">
                <Form.Label column className="land-label text-end">
                    SUPORTING DOCUMENTS <br />
                    <br />
                    <ul className="text-start land-supporting">
                      <li>LAND DETAILS</li>
                      <li>LAND TITLES</li>
                      <li>DETAILED LOCATION MAP</li>
                      <li>APPROVALS</li>
                      <li>TOPOGRAPHY MAP</li>
                      <li>LAYOUT PLANS</li>
                      <li>SUPPORTING DOCUMENTS</li>
                    </ul>
                </Form.Label>
              </Col>
              <Col md="7">
                 <Button className="land-upload">UPLOAD OR DROP AND DRAG <br/> YOUR FILES HERE</Button>
              </Col>
              <Col md="3" className="text-end">
                <Form.Label column className="land-label text-end">
                    REMARKS
                </Form.Label>
              </Col>
              <Col md="7">
                <Form.Control className="land-form land-remarks" value="" plaintext/>
              </Col>
              <Col md={{span: 7, offset: 3}}>
                   <Form.Check
                      type="checkbox"
                      label="BY TICKING THIS BOX, I HEREBY CONFIRM THAT I UNDERSTAND & ACCEPT YOUR PRIVACY POLICY AND TERMS AND CONDITION OF USE OF THE WEBSITE. I HEREBY AGREE AND GIVE CONSENT TO TEMOKIN AND/OR SUBSIDIARY COMPANIES AND/OR ASSOCIATE COMPANIES WITHIN TEMOKIN GROUP OF COMPANIES TO COLLECT, PROCESS AND DISCLOSE MY PERSONAL DATA IN ACCORDANCE WITH THE PRIVACY POLICY."
                      className="land-radio text-start land-check"
                    />
              </Col>
              <Col md={{span: 7, offset: 3}} className="text-start mt-5 pt-5">
                   <Button className="land-submit">SUBMIT</Button>
              </Col>
            </Row>
              {/* <Form className="text-uppercase">
                <Form.Group as={Row} controlId="formPlaintextName" data-scroll className="land-formgroup">
                    <Form.Label column sm="3" className="land-label text-end">
                        Name
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control className="land-form" value="" plaintext/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextContact"  data-scroll className="land-formgroup">
                <Form.Label column sm="3" className="land-label text-end">
                    Contact Number
                </Form.Label>
                <Col sm="7">
                    <Form.Control className="land-form" value="" plaintext />
                </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextEmail" data-scroll className="land-formgroup">
                <Form.Label column sm="3" className="land-label text-end">
                    Email Address
                </Form.Label>
                <Col sm="7">
                    <Form.Control className="land-form" value="" plaintext />
                </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextEmail" data-scroll className="land-formgroup">
                <Form.Label column sm="3" className="land-label text-end">
                    LOCATION OF LAND
                </Form.Label>
                <Col sm="7">
                    <Form.Control className="land-form" value="" plaintext />
                </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextEmail" data-scroll className="land-formgroup">
                <Form.Label column sm="3" className="land-label text-end">
                    ASKING PRICE
                </Form.Label>
                <Col sm="7">
                    <Form.Control className="land-form" value="" plaintext />
                </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextEmail" data-scroll className="land-formgroup">
                <Form.Label column sm="3" className="land-label text-end">
                    MODE OF COLLABORATION
                </Form.Label>
                <Col sm="7">
                    <Form.Control className="land-form" value="" plaintext />
                </Col>
                </Form.Group>
                
                <Form.Group as={Row} controlId="formPlaintextEmail" data-scroll className="land-formgroup">
                <Form.Label column sm="3" className="land-label text-end">
                    SUPORTING DOCUMENTS <br />
                    <ul>
                      <li>LAND DETAILS</li>
                      <li>LAND TITLES</li>
                      <li>DETAILED LOCATION MAP</li>
                      <li>APPROVALS</li>
                      <li>TOPOGRAPHY MAP</li>
                      <li>LAYOUT PLANS</li>
                      <li>SUPPORTING DOCUMENTS</li>
                    </ul>
                </Form.Label>
                <Col sm="7">
                    <Button className="career-choosefile-button">CHOOSE FILE</Button>
                </Col>
                </Form.Group>

            </Form> */}
          </Col>
        </Row>
      </Container>
      <Footer/>
      {/* <div className="header-bg" data-scroll data-scroll-speed="-3" /> */}
      {/* <div className="header-shapes" data-scroll data-scroll-speed="-1" /> */}
    </div>
  );
}
