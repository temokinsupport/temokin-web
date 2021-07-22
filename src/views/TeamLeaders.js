import React, { useRef, useState, useEffect } from 'react';
import useLocoScroll from '../components/hooks/useLocoScroll';
import { useMediaQuery } from 'react-responsive';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import '../assets/styles/teamleaders.scss';
import Leaders from '../components/TeamLeaders/Leaders';
import Join from '../components/TeamLeaders/Join';

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
    const isTablet = useMediaQuery({ query: '(min-width: 992px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 992px)' });  

  return (
    <> {
        <div className="--team-leaders
            main-container"
            id="main-container"
            data-scroll-container
        >
        <Leaders/>
        <div className="--bg-2" data-scroll-section>
            { isTablet &&
                <Join/>
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
        }
    </>
  );
}

export default TeamLeaders;
