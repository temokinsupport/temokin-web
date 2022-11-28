import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Vision() {
  return (
    <section className="--container-2" data-scroll-section>
      <Container>
        <Row>
          <Col>
            <h2 className="--title" data-scroll data-scroll-speed="2">
              OUR VISION
            </h2>
            <p className="--sub-title" data-scroll data-scroll-speed="2">
              We aim to be the one <br />
              company that
            </p>
            <h1 className="--title" data-scroll data-scroll-speed="2">
              WINNING <br />
              YOUR TRUST <br />
              EVERY TIME
            </h1>
          </Col>
        </Row>
      </Container>
      <div className="vision-bg" data-scroll />
      <div className="overlay-shape--1" data-scroll data-scroll-speed="1" />
      <div className="overlay-shape--2" data-scroll data-scroll-speed="1" />
    </section>
  );
}
