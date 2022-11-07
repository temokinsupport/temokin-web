import React, { useEffect } from "react";
import gsap from "gsap";
import SplitText from "../../utils/split.min.js";
import { Container, Row, Col, Image } from "react-bootstrap";
import Navigation from "../../Navigation";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
    <section className="--header" data-scroll-section>
      <Navigation />
      <Container>
        <Row className="justify-content-center">
          <Col md={12} className="text-center mt-5 pt-5">
           <Image className="--home-temokin-img" src={require('../../../assets/images/home/Group 833.png').default} />
          </Col>
        </Row>
      </Container>
      <div className="hero-container">
        <LazyLoadImage
          src={require("../../../assets/images/home/Home_BG-01.png").default}
          className="header-bg"
          data-scroll
          data-scroll-speed="-2"
        />
      </div>
    </section>
  );
}
