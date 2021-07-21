import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Container, Row, Col, Carousel, Button, Image } from 'react-bootstrap';
import '../assets/styles/home.scss';

const Home = () => {

  // DESKTOP, TABLET & MOBILE
  const isTablet = useMediaQuery({ query: '(min-width: 992px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 992px)' });  

  // MOBILE CAROUSEL
  const ref = useRef(null);
  const onPrevClick = () => {
    ref.current.prev();
    setRightActive(!isRightActive);
    setLeftActive(!isLeftActive);
  };
  const onNextClick = () => {
    ref.current.next();
    setRightActive(!isRightActive);
    setLeftActive(!isLeftActive);
  };

  // TOGGLE CLASS
  const [isRightActive, setRightActive] = useState(false);
  const [isLeftActive, setLeftActive] = useState(false);

  return (
    <div className="--home">
      <div className="--header">  
        <Container>
          <Row>
            <Col>
              <h1 className="--title" 
              data-aos="fade-up"
              data-aos-duration="4000"
              >Winning <br/>Your Trust <br/>Every Time</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="--bg-2">
        <Container className="--container-2 --max">
          <Row>
            <Col
            >
            <h1 className="--title"
            >What We Do</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              { isTablet &&
                <Carousel fade className="--carousel">
                  <Carousel.Item>
                    <img
                      className="d-block w-50"
                      src={require('../assets/images/home/Home_IMG-01.png').default}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>CIVIL ENGINEERING</h3>
                      <p>From its humble beginnings as a high-quality pipe jacking specialist, Temokin led the <br/>
                      way with Malaysia's first microtunnelling project and has since expanded into the <br/>
                      building of electricity substations, major underground sewage lines, complex <br/>
                      bridges and major highways.</p>
                      <NavLink variant="light" to="/property-development" className="--btn-check-our-work">CHECK OUT OUR WORK</NavLink>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-50"
                      src={require('../assets/images/home/Home_IMG-02.png').default}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>PROPERTY DEVELOPMENT</h3>
                      <p> Temokin has a collective property development experience  of over 50 years, <br/> 
                      having design and built complex skycrapers, hospitals and vast modern retail <br/>
                      spaces on behalf of our clients. Our current portfolio includes the building of high- <br/>
                      quality duplex homes and the new Istana Negara (Malaysia's national place).</p>
                      <NavLink variant="light" to="/property-development" className="--btn-check-our-work">CHECK OUT OUR WORK</NavLink>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              } 
              { isMobile &&
                <div className="--carousel-container">

                <div className="--btn-carousel-container">
                  <Button 
                    variant="light" 
                    onClick={onPrevClick}
                    className={isRightActive ? 'carousel-control-prev': "carousel-control-prev hide"} 
                  />
                  <Button 
                    variant="light" 
                    onClick={onNextClick}
                    className={isLeftActive ? 'carousel-control-next hide': "carousel-control-next"} 
                  />
                </div>
                    
                <Carousel fade className="--carousel-mb" ref={ref} loop={false}>
                  <Carousel.Item>
                    <img
                      className="d-block"
                      src={require('../assets/images/home/Home_IMG-01.png').default}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>CIVIL ENGINEERING</h3>
                      <p>From its humble beginnings as a high-quality pipe jacking specialist, Temokin led the <br/>
                      way with Malaysia's first microtunnelling project and has since expanded into the <br/>
                      building of electricity substations, major underground sewage lines, complex <br/>
                      bridges and major highways.</p>
                      <NavLink variant="light" to="/property-development" className="--btn-check-our-work">CHECK OUT OUR WORK</NavLink>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-50"
                      src={require('../assets/images/home/Home_IMG-02.png').default}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>PROPERTY DEVELOPMENT</h3>
                      <p> Temokin has a collective property development experience  of over 50 years, <br/> 
                      having design and built complex skycrapers, hospitals and vast modern retail <br/>
                      spaces on behalf of our clients. Our current portfolio includes the building of high- <br/>
                      quality duplex homes and the new Istana Negara (Malaysia's national place).</p>
                      <NavLink variant="light" to="/property-development" className="--btn-check-our-work">CHECK OUT OUR WORK</NavLink>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
                </div>
              }
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="--container-3 --max">
        <Row>
          <Col>
            <h1 className="--title">Key Projects</h1>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Image className="--center" src={require('../assets/images/home/Home_IMG-Civil.png').default} roundedCircle />
            <h5 className="--project-title">CIVIL ENGINEERING</h5>
            <p className="--desc">Seremban Middle Ring Road (MRRS)</p>
          </Col>
          <Col md={4}>
            <Image className="--center" src={require('../assets/images/home/Home_IMG-Property.png').default} roundedCircle />
            <h5 className="--project-title">PROPERTY DEVELOPMENT</h5>
            <p className="--desc">Istana Negara</p>
          </Col>
          <Col md={4}>
            <Image className="--center" src={require('../assets/images/home/Home_IMG-Civil-02.png').default} roundedCircle />
            <h5 className="--project-title">CIVIL ENGINEERING</h5>
            <p className="--desc">Pip Jacking Works</p>
          </Col>
        </Row>
      </Container>
      <Container className="--container-4 --max">
        <Row>
          <Col>
            <h1 className="--title">LATEST LAUNCHES</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image className="--img" src={require('../assets/images/home/Home_IMG-03.png').default}/>
          </Col>
          <Col>
            <div className="--launches-details">
              <Image className="--img-logo" src={require('../assets/images/home/Home_Logo-Mahligai.png').default}/>
              <p className="--txt">2 & 3-Storey Terrace Homes</p>
              <p className="--txt">| 20' x 70' | FREEHOLD</p>
              <p className="--desc">
                Mahligai offers spacious yet affordable terrace homes with perimeter <br/>
                fencing and 24-hour security, nestled in the growing township of <br/>
                Nusa Damai with all the features to call it your ideal home.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="https://www.mahligai.my/" target="_blank" rel="noreferrer" className="--btn-im-interested">IM INTERESTED</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
