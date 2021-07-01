import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../assets/styles/teamleaders.scss';

function TeamLeaders() {

    const teamLeaders = [
        {
            id:0,
            img:require('../assets/images/teamleaders/Leaders_IMG-Leader-01A.png').default,
            img2:require('../assets/images/teamleaders/Leaders_IMG-Leader-01B.png').default,
            alt:"team leader 1"
        },
        {
            id:1,
            img:require('../assets/images/teamleaders/Leaders_IMG-Leader-02A.png').default,
            img2:require('../assets/images/teamleaders/Leaders_IMG-Leader-02B.png').default,
            alt:"team leader 2"
        },
        {
            id:2,
            img:require('../assets/images/teamleaders/Leaders_IMG-Leader-03A.png').default,
            img2:require('../assets/images/teamleaders/Leaders_IMG-Leader-03B.png').default,
            alt:"team leader 3"
        },
        {
            id:3,
            img:require('../assets/images/teamleaders/Leaders_IMG-Leader-04A.png').default,
            img2:require('../assets/images/teamleaders/Leaders_IMG-Leader-04B.png').default,
            alt:"team leader 4"
        },
        {
            id:4,
            img:require('../assets/images/teamleaders/Leaders_IMG-Leader-05A.png').default,
            img2:require('../assets/images/teamleaders/Leaders_IMG-Leader-05B.png').default,
            alt:"team leader 5"
        },
        {
            id:5,
            img:require('../assets/images/teamleaders/Leaders_IMG-Leader-06A.png').default,
            img2:require('../assets/images/teamleaders/Leaders_IMG-Leader-06B.png').default,
            alt:"team leader 6"
        },
        {
            id:6,
            img:require('../assets/images/teamleaders/Leaders_IMG-Leader-07A.png').default,
            img2:require('../assets/images/teamleaders/Leaders_IMG-Leader-07B.png').default,
            alt:"team leader 7"
        },
        {
            id:7,
            img:require('../assets/images/teamleaders/Leaders_IMG-Leader-08A.png').default,
            img2:require('../assets/images/teamleaders/Leaders_IMG-Leader-08B.png').default,
            alt:"team leader 8"
        },
        {
            id:8,
            img:require('../assets/images/teamleaders/Leaders_IMG-Leader-09A.png').default,
            img2:require('../assets/images/teamleaders/Leaders_IMG-Leader-09B.png').default,
            alt:"team leader 9"
        }
    ]

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
        <Container className="--max">
            <Row>
                { teamLeaders.map((teamLeader) => (
                    <Col md={4} key={teamLeader.id}>
                        <Card className="bg-dark text-white">
                            <Card.Img src={teamLeader.img} alt={teamLeader.alt}/>
                            <Card.ImgOverlay>
                                <Card.Img src={teamLeader.img2} alt={teamLeader.alt} />
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                )) }
            </Row>
        </Container>
        </div>
    </div>
  );
}

export default TeamLeaders;
