import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/footer.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="--footer">
      <Container fluid className="--max">
        <Row>
          <Col md={8}>
            <div className="--left-container">
              <NavLink exact to="/" className="--logo">
                <img
                  data-scroll
                  src={require("../assets/Logo.png").default}
                  alt="logo"
                />
              </NavLink>
              <div className="--address container">
                <div class="w-100 text-end">
                  <a
                    href="https://www.facebook.com/TemokinDev/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-med"
                  >
                    <img
                      alt=""
                      src="/fb-icon.png"
                      width="30"
                      height="30"
                      className="me-3 d-inline-block align-top"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/temokindevelopment/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-med"
                  >
                    <img
                      alt=""
                      src="/insta-icon.png"
                      width="30"
                      height="30"
                      className="me-5 d-inline-block align-top"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="--right-container">
              <p>© Temokin 2018</p>
              <sub>
                <NavLink
                  exact
                  to="/land-acquisition"
                  className="text-decoration-none colorPrimary"
                >
                  Land Acquisition
                </NavLink>
                &nbsp; | &nbsp;
                <NavLink
                  exact
                  to="/terms-of-service"
                  className="text-decoration-none colorPrimary"
                >
                  Terms of Service
                </NavLink>
                &nbsp; | &nbsp;
                <a
                  href="/privacy-policy"
                  class="text-decoration-none colorPrimary"
                >
                  Privacy Policy
                </a>
              </sub>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
