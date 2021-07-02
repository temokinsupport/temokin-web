import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/awardsandachievements.scss';

function AwardsAndAchievements() {
  return (
    <div className="--awards-and-achievements">
      <div className="--bg-1">
        <Container>
            <Row>
                <Col>
                    <h1 className="--title">Awards and Client <br/>
                    Survey Forms</h1>
                    <p className="--desc">Our awards and recognitions are <br/>
                    testament to our sterling <br/>
                    reputation in always delivering high-<br/>
                    quality work on time.</p>
                </Col>
            </Row>
        </Container>
      </div>
    </div>
  );
}

export default AwardsAndAchievements;
