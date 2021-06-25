import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/home.scss';

function Home() {
  return (
    <div className="--home">
      <div className="--header">
        <Container>
          <Row>
            <Col>
              <h1>Winning <br/>Your Trust <br/>Every Time</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
