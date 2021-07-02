import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
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
        <Container className="--max">
          <Row>
            <Col md={6}>
              <Card>
                <Card.Img variant="top" src={require('../assets/images/civilengineering/CivilEng_IMG-Seremban.png').default} />
                <Card.Body>
                  <Card.Title>
                    Seremban Middle Ring Road (Mrrs)
                  </Card.Title>
                  <Card.Text>
                    <span className="--title">Client</span>
                    <span>Public Works Department, Malaysia (JKR)</span>
                  </Card.Text>
                  <Card.Text>
                    <span className="--title">Value</span>
                    <span>RM2.5 Million</span>
                  </Card.Text>
                  <Card.Text>
                    <span className="--title">Period</span>
                    <span>May 2014 to Nov 2017</span>
                  </Card.Text>
                  <Button className="--btn-view-project">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="--right">
                <Card.Img variant="top" src={require('../assets/images/civilengineering/CivilEng_IMG-Sungai.png').default} />
                <Card.Body>
                  <Card.Title>
                    Sungai Gombak Bridge
                  </Card.Title>
                  <Card.Text>
                    <span className="--title">Client</span>
                    <span>Dewan Bandaraya Kuala Lumpur (DBKL)</span>
                  </Card.Text>
                  <Card.Text>
                    <span className="--title">Value</span>
                    <span>RM10 Million</span>
                  </Card.Text>
                  <Card.Text>
                    <span className="--title">Period</span>
                    <span>Mar 2002 to Mar 2004</span>
                  </Card.Text>
                  <Button className="--btn-view-project">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default CivilEngineering;
