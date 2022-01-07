import React, { useRef, useState, useEffect } from 'react';
import useLocoScroll from '../components/hooks/useLocoScroll';
// import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../assets/styles/teamleaders.scss';
import Join from '../components/TeamLeaders/Join';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const TeamLeaders = () => {

    const [preloader, setPreloader] = useState(true);
  
    useLocoScroll(!preloader);
  
    const [timer, setTimer] = useState(1);
  
    const id = useRef(null);
  
    const clear = () => {
        window.clearInterval(id.current);
        setPreloader(false);
    };
  
    useEffect(() => {
        id.current = window.setInterval(()=>{
            setTimer((timer) => timer - 1 );
        }, 1000);
    }, []);
  
  
    useEffect(() => {
        if (timer === 0) {
            clear();
        }
    }, [timer]);

    // DESKTOP, TABLET & MOBILE
    // const isTablet = useMediaQuery({ query: '(min-width: 992px)' });
    // const isMobile = useMediaQuery({ query: '(max-width: 992px)' });
    
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
        // {
        //     id:7,
        //     img:require('../assets/images/teamleaders/Leaders_IMG-Leader-08A.png').default,
        //     img2:require('../assets/images/teamleaders/Leaders_IMG-Leader-08B.png').default,
        //     alt:"team leader 8",
        //     pathLeader: "/team-leaders/pathooraman-bin-abu",
        // },
        // {
        //     id:8,
        //     img:require('../assets/images/teamleaders/Leaders_IMG-Leader-09A.png').default,
        //     img2:require('../assets/images/teamleaders/Leaders_IMG-Leader-09B.png').default,
        //     alt:"team leader 9",
        //     pathLeader: "/team-leaders/crystal-wong-wai-ching",
        // }
    ]

  return (
    <> {
        <div className="--team-leaders
            main-container"
            id="main-container"
            data-scroll-container
        >
        <div className="--bg-1" data-scroll-section>
            <Navigation/>
            <Container>
                <Row>
                    <Col>
                        <h1 className="--title"
                            data-scroll data-scroll-speed="2"
                        >Meet Our Leaders</h1>
                        <p className="--desc"
                            data-scroll data-scroll-speed="2"
                        >With a combined 55 years of experience in the construction and property industry, <br/>
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
                            <Card className="bg-dark text-white" data-scroll data-scroll-speed="2">
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
        <div className="--bg-2" data-scroll-section>
            <Join/>
        <Footer/>
        </div>
    </div>
        }
    </>
  );
}

export default TeamLeaders;
