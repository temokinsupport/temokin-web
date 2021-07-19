import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Projects() {
    return (
        <section className="--bg-3" data-scroll-section>
            <div className="project-bg"/>
            <Container className="--container-3 --max" >
                <Row>
                <Col>
                    <h1 className="--title" data-scroll data-scroll-speed="1">Key Projects</h1>
                </Col>
                </Row>
                <Row>
                <Col md={4}>
                    <Image data-scroll data-scroll-speed="2" className="--center" src={require('../../../assets/images/home/Home_IMG-Civil.png').default} roundedCircle />
                    <h5 data-scroll data-scroll-speed="2" className="--project-title">CIVIL ENGINEERING</h5>
                    <p data-scroll data-scroll-speed="2" className="--desc">Seremban Middle Ring Road (MRRS)</p>
                </Col>
                <Col md={4}>
                    <Image data-scroll data-scroll-speed="2" className="--center" src={require('../../../assets/images/home/Home_IMG-Property.png').default} roundedCircle />
                    <h5 data-scroll data-scroll-speed="2" className="--project-title">PROPERTY DEVELOPMENT</h5>
                    <p data-scroll data-scroll-speed="2" className="--desc">Istana Negara</p>
                </Col>
                <Col md={4}>
                    <Image data-scroll data-scroll-speed="2" className="--center" src={require('../../../assets/images/home/Home_IMG-Civil-02.png').default} roundedCircle />
                    <h5 data-scroll data-scroll-speed="2" className="--project-title">CIVIL ENGINEERING</h5>
                    <p data-scroll data-scroll-speed="2" className="--desc">Pip Jacking Works</p>
                </Col>
                </Row>
            </Container>
        </section>
    );
};