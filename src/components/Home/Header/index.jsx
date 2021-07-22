import React, { useEffect } from 'react';
import gsap from 'gsap';
import SplitText from '../../utils/split.min.js';
import { Container, Row, Col} from 'react-bootstrap';
import Navigation from '../../Navigation';

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
            <div className="header-bg"/>
      </section>
    )
}