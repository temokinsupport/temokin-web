import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/civilengineering.scss';

function CivilEngineering() {
  return (
    <div className="--civil-engineering">
      <div className="--bg-1">
        <Container>
          <Row>
            <Col>
              <h1 className="--title">Our Showcase</h1>
              <p className="--desc">As a builder, we are only as successful as <br/>
              the milestones that we've built. <br/> <br/>
              Here, we would like to share with you some <br/>
              of the work that proudly carry the <br/>
              TEMOKIN badge</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default CivilEngineering;
