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
      <div className="--bg-2">
        <Container>
          <Row>
            <Col>
              <h1 className="--title">Civil Engineering</h1>
              <hr/>
              <p className="--desc">Our expertise in engineering has seen <br/>
              us build many of the  nation's electricity <br/>
              substations, major underground sewage <br/>
              lines, complex bridges and major highways.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="--bg-3">
        <Container>
          <Row>
            <Col>
              
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default CivilEngineering;
