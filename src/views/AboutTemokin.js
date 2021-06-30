import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import '../assets/styles/aboutus.scss';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


function AboutTemokin() {

  const buildProjectLists = [
    {
      id:0,
      img:require('../assets/images/aboutus/About_Icon-AccurateCost.png').default,
      caption:"Accurate Cost Control"
    },
    {
      id:1,
      img:require('../assets/images/aboutus/About_Icon-LowOver.png').default,
      caption:"Low Over Heads"
    },
    {
      id:2,
      img:require('../assets/images/aboutus/About_Icon-AdvancedScheduling.png').default,
      caption:"Advance Scheduling"
    },
    {
      id:3,
      img:require('../assets/images/aboutus/About_Icon-TimelyClose.png').default,
      caption:"A Timely Close Out"
    }
  ]
  
  return (
    <div className="--about">
      <div className="--header-container">
        <Splide
          options={ {
            height   : '100vh',
            direction: 'ttb',
          } }
        >
            <SplideSlide>
              <div className="--about-content">
                <Container className="--max">
                  <Row>
                    <Col md={2}>
                      <h1 className="--title">Our Story</h1>
                    </Col>
                    <Col md={5} className="--pl3v">
                      <p className="--desc">They say every great story has a humble <br/>
                      beginning, and ours is no exception. <br/>
                      established in 1989, we started our journey as <br/>
                      a specialist contractor for highquality <br/>
                      pipe jacking and earthworks, making our <br/>
                      first prominent mark in 1991 by delivering <br/>
                      malaysia's first ever micro-tunneling <br/>
                      project.</p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="--about-content">
                <Container className="--max">
                  <Row>
                    <Col md={2}>
                      <h1 className="--title">Our Story</h1>
                    </Col>
                    <Col md={5} className="--pl3v">
                      <p className="--desc">We then quickly spread our wings and grew to become <br/>
                      the preeminent turkey civil engineering and property <br/>
                      conglomerate that the nation and the world have come <br/>
                      to know and  trust today. <br/><br/>
                      At our heart, we are a construction company with <br/>
                      an integrated engineering division, which allows us to <br/>
                      undertake any design-and-build projects with.
                      </p> 
                      <div className="--build-project-list">
                        {buildProjectLists.map((projectLists) => (
                          <figure key={projectLists.id}>
                            <Image src={projectLists.img}/>
                            <figcaption>
                              <span>{projectLists.caption}</span> 
                            </figcaption>
                          </figure>
                        )) }
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </SplideSlide>
        </Splide>
      </div>
      <div className="--container-2">
        <Container>
          <Row>
            <Col>
              <h2 className="--title">OUR VISION</h2>
              <p className="--sub-title">We aim to be the one <br/>
              company that</p>
              <h1 className="--title">WINS <br/>
              YOUR TRUST <br/>
              EVERY TIME</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AboutTemokin;
