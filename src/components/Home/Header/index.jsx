import React, { useEffect } from 'react';
import gsap from 'gsap';
import SplitText from '../../utils/split.min.js';
import { Container, Row, Col} from 'react-bootstrap';
import Navigation from '../../Navigation';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Header() {

    useEffect(() => {
        const split = new SplitText("#header-text", {
            type: 'lines',
            linesClass: 'lineChildren'
        });
    
        const splitParent = new SplitText("#header-text", {
            type: 'lines',
            linesClass: 'lineParent'
        });
    
        gsap.to(split.lines, {
            duration:1,
            y:0,
            opacity:1,
            stagger:0.1,
            ease:"power2",
        })
    
        gsap.to(splitParent.lines, {
          duration:1,
          y:0,
          opacity:1,
          stagger:0.1,
          ease:"power2",
        })
    }, [])


    return (
        <section className="--header" data-scroll-section>  
            <Navigation/>
            <Container>
                <Row>
                    <Col>
                        <h1 className="--title"
                            data-scroll 
                            data-scroll-speed="3"
                            id="header-text"
                        >Winning <br/>Your Trust <br/>Every Time</h1>
                    </Col>
                </Row>
            </Container>
            <div className="hero-container">
                <LazyLoadImage src={require("../../../assets/images/home/Home_BG-01.png").default} className="header-bg"
                    data-scroll data-scroll-speed="-2"
                />
            </div>
            
      </section>
    )
}