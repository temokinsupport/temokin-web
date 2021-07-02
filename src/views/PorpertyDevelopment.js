import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/propertydevelopment.scss';

function PorpertyDevelopment() {
  return (
    <div className="--property-development">
      <div className="--bg-1">
        <Container>
          <Row>
            <Col>
              <h1 className="--title">Property Development</h1>
              <p className="--desc">With over 50 years of combined experience in development, we have designed <br/>
              and built a multitude of complex skycrapers, hospitals, modern retail spaces <br/>
              nad highquality homes, with our crowning glory being the construction of <br/>
              Istana Negara, the National Palace of Malaysia.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default PorpertyDevelopment;
