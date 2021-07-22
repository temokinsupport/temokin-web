import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Navigation from '../../Navigation';

export default function AboutTemokin() {

    const buildProjectLists = [
        {
          id:0,
          img:require('../../../assets/images/aboutus/About_Icon-AccurateCost.png').default,
          caption:"Accurate Cost Control"
        },
        {
          id:1,
          img:require('../../../assets/images/aboutus/About_Icon-LowOver.png').default,
          caption:"Low Over Heads"
        },
        {
          id:2,
          img:require('../../../assets/images/aboutus/About_Icon-AdvancedScheduling.png').default,
          caption:"Advance Scheduling"
        },
        {
          id:3,
          img:require('../../../assets/images/aboutus/About_Icon-TimelyClose.png').default,
          caption:"A Timely Close Out"
        }
      ];
    return (
        <section className="--header-container" data-scroll-section>
            <Navigation/>
            <div className="slideshow">
        
                <input id="button-1" type="radio" name="radio-set" className="selector-1" checked="checked" />
                <label for="button-1" className="button-label-1"></label>
                
                <input id="button-2" type="radio" name="radio-set" className="selector-2" />
                <label for="button-2" className="button-label-2"></label>
            
                
                    {/* <label for="button-1" className="arrow a1"></label>
                    <label for="button-2" className="arrow a2"></label> */}
                
                <div className="content">
                    <div className="parallax-bg"></div>
                    <ul className="slider" 
                        data-scroll
                        data-scroll-speed="-1"
                    >
                        <li>
                            <div className="slider-content">
                                <div className="--about-content">
                                    <Container className="--max">
                                        <Row>
                                            <Col md={2}>
                                            <h1 className="--title" 
                                            >Our Story</h1>
                                            </Col>
                                            <Col md={5} className="--pl3v" >
                                            <p className="--desc"
                                            >They say every great story has a humble <br/>
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
                            </div>
                        </li>
                        <li>
                            <div className="slider-content">
                                <div className="--about-content">
                                    <Container className="--max">
                                        <Row>
                                            <Col md={2}>
                                            <h1 className="--title" 
                                            >Our Story</h1>
                                            </Col>
                                            <Col md={5} className="--pl3v">
                                            <p className="--desc" 
                                            >We then quickly spread our wings and grew to become <br/>
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
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="overlay-shape1"/>
        </section>
    )
}