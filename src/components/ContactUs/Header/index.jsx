import React, { useEffect } from "react";
import gsap from "gsap";
import SplitText from "../../utils/split.min.js";
import { Container, Row, Col, Image } from "react-bootstrap";
import Navigation from "../../Navigation";

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
              Get In Touch
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Image
              data-aos="zoom-in"
              src={
<<<<<<< Updated upstream
                require("../../../assets/images/contactus/icon1.svg")
                  .default
=======
                require("../../../assets/images/contactus/Icon-1.svg").default
>>>>>>> Stashed changes
              }
            />
            <h3 data-aos="zoom-in" data-aos-duration="1000" className="--title">
              Address
            </h3>
            <p data-aos="zoom-in" data-aos-duration="1000" className="--desc">
              No.2, Jalan 15/48 A, <br />
              Sentul Raya Boulevard, <br />
              51000 Kuala Lumpur
            </p>
          </Col>
          <Col md={4}>
            <Image
              data-aos="zoom-in"
              src={
<<<<<<< Updated upstream
                require("../../../assets/images/contactus/icon2.svg")
                  .default
=======
                require("../../../assets/images/contactus/Icon-2.svg").default
>>>>>>> Stashed changes
              }
            />
            <h3 data-aos="zoom-in" data-aos-duration="1000" className="--title">
              Phone
            </h3>
            <p data-aos="zoom-in" data-aos-duration="1000" className="--desc">
              Tel: +603-40441111 <br />
            </p>
          </Col>
          <Col md={4}>
            <Image
              data-aos="zoom-in"
              src={
<<<<<<< Updated upstream
                require("../../../assets/images/contactus/icon3.svg")
                  .default
=======
                require("../../../assets/images/contactus/Icon-3.svg").default
>>>>>>> Stashed changes
              }
            />
            <h3 data-aos="zoom-in" data-aos-duration="1000" className="--title">
              Email
            </h3>
            <p data-aos="zoom-in" data-aos-duration="1000" className="--desc">
              temokin@temokin.com
            </p>
          </Col>
        </Row>
      </Container>
      <div className="header-bg" />
      <div className="header-shapes" data-scroll data-scroll-speed="-1" />
    </div>
  );
}
