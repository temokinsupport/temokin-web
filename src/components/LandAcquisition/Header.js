import { Col, Container, Row } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={9} className="header__content">
          <h1 className="header__title">LAND ACQUISITION</h1>
          <p className="header__desc">
            As part of our relentless pursuit to enhance quality of life, we
            welcome you to share with us any land opportunities, be it for
            residential, commercial or industrial developments.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
