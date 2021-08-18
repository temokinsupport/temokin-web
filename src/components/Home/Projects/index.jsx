import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Projects() {
    return (
        <section className="--bg-3" data-scroll-section >
            <Container className="--container-3 --max">
                <Row>
                    <Col>
                        <h1 className="--title" data-scroll>Key Projects</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Image className="--center" data-scroll data-scroll-speed="2" src={require('../../../assets/images/home/Home_IMG-Civil.png').default} roundedCircle />
                        <h5 className="--project-title" data-scroll>CIVIL ENGINEERING</h5>
                        <p className="--desc" data-scroll>Seremban Middle Ring Road (MRRS)</p>
                    </Col>
                    <Col md={4}>
                        <Image className="--center" data-scroll data-scroll-speed="2" src={require('../../../assets/images/home/Home_IMG-Property.png').default} roundedCircle />
                        <h5 className="--project-title" data-scroll>PROPERTY DEVELOPMENT</h5>
                        <p className="--desc" data-scroll>Istana Negara</p>
                    </Col>
                    <Col md={4}>
                        <Image className="--center" data-scroll data-scroll-speed="2" src={require('../../../assets/images/home/Home_IMG-Civil-02.png').default} roundedCircle />
                        <h5 className="--project-title" data-scroll>CIVIL ENGINEERING</h5>
                        <p className="--desc" data-scroll>Pipe Jacking Works</p>
                    </Col>
                </Row>
            </Container>
            {/* <div className="projects-bg"/> */}
            <div className="hero-container">
                <LazyLoadImage src={require("../../../assets/images/home/Home_BG-03.png").default} className="projects-bg"
                 data-scroll data-scroll-speed="-2" data-scroll-direction="top"/>
            </div>
        </section>
    )
}