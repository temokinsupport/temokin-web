import React, { useEffect } from 'react';
import gsap from 'gsap';
import SplitText from '../../utils/split.min.js'
import { Container, Row, Col } from 'react-bootstrap';

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
            ease:"power1",
        })

        gsap.to(splitParent.lines, {
            duration:1,
            y:0,
            opacity:1,
            stagger:0.1,
            ease:"power1",
        });
    }, [])

    return (
        <section className="--header" data-scroll-section>
            <div className="header-bg" data-scroll/> 
            <Container>
                <Row>
                    <Col>
                        <h1 className="--title" 
                        id="header-text"
                        data-scroll data-scroll-speed="3"
                        >Winning <br/>Your Trust <br/>Every Time</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};