import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function OurValues() {
    return (
        <div className="--container-7" data-scroll-section>
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
                            <Image src={require('../../../assets/images/aboutus/About_IMG-People.png').default}/>
                            <div className="--right-container">
                            <h5 className="--title">Wisdom</h5>
                            <hr/>
                            <p className="--desc">We are relentless in our <br/>
                            pursuit for wisdom</p>
                            </div>
                        </SplideSlide>
                        <SplideSlide >
                            <Image src={require('../../../assets/images/aboutus/About_IMG-Equality.png').default}/>
                            <div className="--right-container">
                            <h5 className="--title">Equality</h5>
                            <hr/>
                            <p className="--desc">We ensure <br/>
                            peace of mind</p>
                            </div>
                        </SplideSlide>
                        <SplideSlide >
                            <Image src={require('../../../assets/images/aboutus/About_IMG-Integrity.png').default}/>
                            <div className="--right-container">
                            <h5 className="--title">Integrity</h5>
                            <hr/>
                            <p className="--desc">We deliver <br/>
                            on schedule</p>
                            </div>
                        </SplideSlide>
                        <SplideSlide >
                            <Image src={require('../../../assets/images/aboutus/About_IMG-Diligence.png').default}/>
                            <div className="--right-container">
                            <h5 className="--title">Diligence</h5>
                            <hr/>
                            <p className="--desc">We exceed <br/>
                            Expectations</p>
                            </div>
                        </SplideSlide>
                        <SplideSlide >
                            <Image src={require('../../../assets/images/aboutus/About_IMG-Guidance.png').default}/>
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
    )
}