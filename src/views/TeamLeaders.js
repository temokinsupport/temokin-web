import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../assets/styles/teamleaders.scss';

function TeamLeaders() {

    // DESKTOP, TABLET & MOBILE
    const isTablet = useMediaQuery({ query: '(min-width: 992px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 992px)' });  

    const teamLeaders = [
        {
            id:0,
            img:require('../assets/images/teamleaders/Leaders_IMG-Leader-01A.png').default,
            img2:require('../assets/images/teamleaders/Leaders_IMG-Leader-01B.png').default,
            alt:"team leader 1",
            pathLeader: "/team-leaders/ym-raja-dato-azwane-bin-raja-ariff",
        },
        {
            id:1,
            img:require('../assets/images/teamleaders/Leaders_IMG-Leader-02A.png').default,
            img2:require('../assets/images/teamleaders/Leaders_IMG-Leader-02B.png').default,
            alt:"team leader 2",
            pathLeader: "/team-leaders/y-bhg-dato-ir-robert-tan-kim-kuan",
        },
        {
            id:2,
            img:require('../assets/images/teamleaders/Leaders_IMG-Leader-03A.png').default,
            img2:require('../assets/images/teamleaders/Leaders_IMG-Leader-03B.png').default,
            alt:"team leader 3",
            pathLeader: "/team-leaders/y-m-raja-sulong-hizahar-b-raja-bazian",
        },
        {
            id:3,
            img:require('../assets/images/teamleaders/Leaders_IMG-Leader-04A.png').default,
            img2:require('../assets/images/teamleaders/Leaders_IMG-Leader-04B.png').default,
            alt:"team leader 4",
            pathLeader: "/team-leaders/tan-chien-wen",
        },
        {
            id:4,
            img:require('../assets/images/teamleaders/Leaders_IMG-Leader-05A.png').default,
            img2:require('../assets/images/teamleaders/Leaders_IMG-Leader-05B.png').default,
            alt:"team leader 5",
            pathLeader: "/team-leaders/jeremiah-tan-chien-yih",
        },
        {
            id:5,
            img:require('../assets/images/teamleaders/Leaders_IMG-Leader-06A.png').default,
            img2:require('../assets/images/teamleaders/Leaders_IMG-Leader-06B.png').default,
            alt:"team leader 6",
            pathLeader: "/team-leaders/tan-chien-chyi",
        },
        {
            id:6,
            img:require('../assets/images/teamleaders/Leaders_IMG-Leader-07A.png').default,
            img2:require('../assets/images/teamleaders/Leaders_IMG-Leader-07B.png').default,
            alt:"team leader 7",
            pathLeader: "/team-leaders/chan-yoon-sang",
        },
        {
            id:7,
            img:require('../assets/images/teamleaders/Leaders_IMG-Leader-08A.png').default,
            img2:require('../assets/images/teamleaders/Leaders_IMG-Leader-08B.png').default,
            alt:"team leader 8",
            pathLeader: "/team-leaders/pathooraman-bin-abu",
        },
        {
            id:8,
            img:require('../assets/images/teamleaders/Leaders_IMG-Leader-09A.png').default,
            img2:require('../assets/images/teamleaders/Leaders_IMG-Leader-09B.png').default,
            alt:"team leader 9",
            pathLeader: "/team-leaders/crystal-wong-wai-ching",
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
                                <NavLink to={teamLeader.pathLeader}/>
                            </Card>
                        </Col>
                    )) }
                </Row>
            </Container>
        </div>
        <div className="--bg-2">
            { isTablet &&
                <Container className="--max">
                    <Row>
                        <Col>
                            <Image src={require('../assets/images/teamleaders/Leaders_IMG-01.png').default} />
                        </Col>
                        <Col>
                            <h1 className="--title">Join Our Team</h1>
                            <h6 className="--sub-title">Like What <br/>
                            You See? Join Us!</h6>
                            <p className="--desc">From our humble start, we have grown tremendously and <br/>
                            now we are looking to go next level. We have a no- <br/>
                            discrimination policy and believe in attitude, not so much <br/>
                            aptitude. Of course, hard work is rewarded, excellence is <br/>
                            our lifestyle. If you're energetic, eager to learn and a team <br/>
                            player, send us your resume and you could be on your way to <br/>
                            a career with Temokin Holdings.
                            </p>
                            <Button className="--btn-send-resume"/>
                        </Col>
                    </Row>
                </Container>
            }
            {   isMobile &&
                <Container className="--max">
                    <Row>
                        <Col>
                            <h1 className="--title">Join Our Team</h1>
                        </Col>
                    </Row>
                    <Col>
                        <Image src={require('../assets/images/teamleaders/Leaders_IMG-01.png').default} />
                    </Col>
                    <Col>
                        <h6 className="--sub-title">Like What <br/>
                        You See? Join Us!</h6>
                        <p className="--desc">From our humble start, we have grown tremendously and <br/>
                        now we are looking to go next level. We have a no- <br/>
                        discrimination policy and believe in attitude, not so much <br/>
                        aptitude. Of course, hard work is rewarded, excellence is <br/>
                        our lifestyle. If you're energetic, eager to learn and a team <br/>
                        player, send us your resume and you could be on your way to <br/>
                        a career with Temokin Holdings.
                        </p>
                        <Button className="--btn-send-resume"/>
                    </Col>
                </Container>
            }
        
        </div>
    </div>
  );
}

export default TeamLeaders;
