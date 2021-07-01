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
            type         : 'fade',
            autoplay     : true,
            pauseOnHover : false,
            resetProgress: false,
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
      <div className="--container-3">
        <Container>
          <Row>
            <Col>
              <Image src={require('../assets/images/aboutus/About_Logo-02.png').default} className="--img"/>
              <h2 className="--title">OUR MISSION</h2>
              <p className="--sub-title">
                To deliver outstanding work <br/>
                consistently, punctually and with <br/>
                absolute integrity.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="--container-4">
      </div>
      <div className="--container-5">
        <div className="--bg-1"/>
        <div className="--bg-2"/>
        <Container className="--max">
          <Row>
            <Col>
            <Splide
              options={ {
                type         : 'fade',
                autoplay     : true,
                pauseOnHover : false,
                resetProgress: false,
                height   : '80vh',
              } }
            >
              <SplideSlide >
                <Image src={require('../assets/images/aboutus/About_IMG-People.png').default}/>
                <div className="--right-container">
                  <h5 className="--title">People</h5>
                  <hr/>
                  <p className="--desc">We are <br/>
                  client-oriented</p>
                </div>
              </SplideSlide>
              <SplideSlide >
                <Image src={require('../assets/images/aboutus/About_IMG-Accoutability.png').default}/>
                <div className="--right-container">
                  <h5 className="--title">Accountability</h5>
                  <hr/>
                  <p className="--desc">We ensure <br/>
                  peace of mind</p>
                </div>
              </SplideSlide>
              <SplideSlide >
                <Image src={require('../assets/images/aboutus/About_IMG-Timing.png').default}/>
                <div className="--right-container">
                  <h5 className="--title">Timing</h5>
                  <hr/>
                  <p className="--desc">We deliver <br/>
                  on schedule</p>
                </div>
              </SplideSlide>
              <SplideSlide >
                <Image src={require('../assets/images/aboutus/About_IMG-Quality.png').default}/>
                <div className="--right-container">
                  <h5 className="--title">Quality</h5>
                  <hr/>
                  <p className="--desc">We exceed <br/>
                  Expectations</p>
                </div>
              </SplideSlide>
            </Splide>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="--container-6"></div>
      <div className="--container-7">
        <div className="--bg-1"/>
        <Container className="--max">
          <Row>
            <Col>
            <Splide
              options={ {
                type         : 'fade',
                autoplay     : true,
                pauseOnHover : false,
                resetProgress: false,
                height   : '80vh',
              } }
            >
              <SplideSlide >
                <Image src={require('../assets/images/aboutus/About_IMG-People.png').default}/>
                <div className="--right-container">
                  <h5 className="--title">Wisdom</h5>
                  <hr/>
                  <p className="--desc">We are relentless in our <br/>
                  pursuit for wisdom</p>
                </div>
              </SplideSlide>
              <SplideSlide >
                <Image src={require('../assets/images/aboutus/About_IMG-Equality.png').default}/>
                <div className="--right-container">
                  <h5 className="--title">Equality</h5>
                  <hr/>
                  <p className="--desc">We ensure <br/>
                  peace of mind</p>
                </div>
              </SplideSlide>
              <SplideSlide >
                <Image src={require('../assets/images/aboutus/About_IMG-Integrity.png').default}/>
                <div className="--right-container">
                  <h5 className="--title">Integrity</h5>
                  <hr/>
                  <p className="--desc">We deliver <br/>
                  on schedule</p>
                </div>
              </SplideSlide>
              <SplideSlide >
                <Image src={require('../assets/images/aboutus/About_IMG-Diligence.png').default}/>
                <div className="--right-container">
                  <h5 className="--title">Diligence</h5>
                  <hr/>
                  <p className="--desc">We exceed <br/>
                  Expectations</p>
                </div>
              </SplideSlide>
              <SplideSlide >
                <Image src={require('../assets/images/aboutus/About_IMG-Guidance.png').default}/>
                <div className="--right-container">
                  <h5 className="--title">Guidance</h5>
                  <hr/>
                  <p className="--desc">We exceed <br/>
                  Expectations</p>
                </div>
              </SplideSlide>
            </Splide>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="--container-8">
        <Container>
          <Row>
            <Col>
              <h1 className="--title">We Dig</h1>
              <p className="--desc">More than just our values, we dig is a tribute <br/>
              to our early pipe-jacking and earthworks days,<br/>
              and it serves as a constant reminder of how <br/>
              even the toughest journeys can lead to the <br/>
              most rewarding of destinations. and trust us, <br/>
              digging is as tough as it gets.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AboutTemokin;
