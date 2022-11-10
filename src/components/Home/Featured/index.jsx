import React, { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Featured() {

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
        <section className="--bg-2"  data-scroll-section>
          <Container className="--container-2 --max">
            <Row>
              <Col
              >
              <h1 className="--title"
              data-scroll
              data-scroll-speed="-1"
              >What We Do</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                { isTablet &&
                  <Carousel fade className="--carousel" >
                    <Carousel.Item>
                      <img
                        className="d-block w-50"
                        src={require('../../../assets/images/home/Mask Group 65.jpg').default}
                        alt="First slide"
                        data-scroll
                      />
                      <Carousel.Caption data-scroll>
                        <h3>CONSTRUCTION</h3>
                        <p className="--font-normal">From its humble beginnings as a high-quality pipe jacking <br/>
                        specialist, Temokin led the way with Malaysia's first <br/>
                        microtunnelling project and has since expanded into the <br/>
                        building of electricity substations, major underground sewage <br/>
                        lines, complex bridges and major highways.</p>
                        <NavLink to="/building" variant="light" className="--btn-check-our-work-1 w-75">BUILDING</NavLink>
                        <NavLink to="/civil-infrastructure" variant="light" className="--btn-check-our-work-2 w-75">CIVIL & INFRASTRUCTURE</NavLink>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-50"
                        src={require('../../../assets/images/home/Mask Group 65.jpg').default}
                        alt="First slide"
                        data-scroll
                      />
                      <Carousel.Caption data-scroll>
                      <h3>PROPERTY DEVELOPMENT</h3>
                        <p> Temokin has a collective property development experience  of over 50 years, 
                        having designed and built complex skycrapers, hospitals and vast modern retail
                        spaces on behalf of our clients. Our current portfolio includes the building of high-
                        quality duplex homes and the new Istana Negara (Malaysia's national palace).</p>
                        <NavLink to="/property-development" variant="light" className="--btn-check-our-work-2 w-75">CHECK OUT OUR WORK</NavLink>
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
                        src={require('../../../assets/images/home/Home_IMG-01.png').default}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>CIVIL ENGINEERING</h3>
                        <p>From its humble beginnings as a high-quality pipe jacking specialist, Temokin led the <br/>
                        way with Malaysia's first microtunnelling project and has since expanded into the <br/>
                        building of electricity substations, major underground sewage lines, complex <br/>
                        bridges and major highways.</p>
                        <NavLink to="/property-development" variant="light" className="--btn-check-our-work">CHECK OUT OUR WORK</NavLink>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-50"
                        src={require('../../../assets/images/home/Home_IMG-02.png').default}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                      <h3>PROPERTY DEVELOPMENT</h3>
                        <p> Temokin has a collective property development experience of over 50 years, having designed and built complex skycrapers, hospitals and vast modern retail spaces on behalf of our clients. Our current portfolio includes the building of high-quality duplex homes and the new Istana Negara (Malaysia's national palace).</p>
                        <NavLink to="/property-development" variant="light" className="--btn-check-our-work">CHECK OUT OUR WORK</NavLink>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                  </div>
                }
              </Col>
            </Row>
          </Container>
          {/* <div className="featured-bg"/> */}
          <div className="hero-container">
            <LazyLoadImage src={require("../../../assets/images/home/About_BG-07.png").default} className="featured-bg"
               data-scroll
            />
          </div>
          <div className="overlay-blue" data-scroll  data-scroll-speed="3" data-scroll-direction="horizontal" data-scroll-delay="0.2"/>
          <div className="overlay-white" data-scroll  data-scroll-speed="5" data-scroll-direction="horizontal" data-scroll-delay="0.5"/>
        </section>
    )
}