import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/teamleaders.scss';

function TeamLeaders() {
  return (
    <div className="--team-leaders">
        <div className="--bg-1">
        <Container>
            <Row>
                <Col>
                    <h1 className="--title">Meet Our Leaders</h1>
                    <p className="--desc">With a combined 55 years of experience in the construction and property industry, <br/>
                    our Board of Directors bring to the table a wide spectrum skill sets and visionary <br/>
                    ideas will keep the TEMOKIN ship steering in the right direction. Here you'll meet a <br/>
                    diverse group leaders, from highly-acclaimed and respected veterans to a new <br/>
                    generation of young powerhouses.</p>
                </Col>
            </Row>
        </Container>
        </div>
    </div>
  );
}

export default TeamLeaders;
