import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import '../assets/styles/projects.scss';

function TanChienChyi() {
    return (
        <div className="--projects">
            <div className="--bg-1">
                <Container className="--max">
                    <Row>
                        <Col>
                            <div className="--project-details">
                                <Image
                                    className="d-block"
                                    src={require("../assets/images/projects/CivilEng_IMG-Seremban.png").default}
                                    alt="First slide"
                                />
                                <div className="--about-content">
                                    <Row>
                                        <Col md={5}>
                                            <Name>
                                                Seremban Middle Ring Road (Mrrs)
                                            </Name>
                                            <Line/>
                                            <Description>
                                                The project was undertaken through a <br/>
                                                joint venture company, Konsortium <br/>
                                                Temokin Vila Jelas Sdn. Bhd. The new <br/>
                                                highway has helped to reduce traffic <br/>
                                                congestion and improve access to the <br/>
                                                more secluded areas around Seremban.
                                            </Description>
                                        </Col>
                                        <Col md={7}>
                                            <TextContainer>
                                                <Label>
                                                    Client
                                                </Label>
                                                <Text>
                                                    Public Works Department, Malaysia (JKR)
                                                </Text>
                                                <Label>
                                                    Value
                                                </Label>
                                                <Text>
                                                    RM2.5 billion
                                                </Text>
                                                <Label>
                                                    Period
                                                </Label>
                                                <Text>
                                                    Phase 1 from May 2004 to Nov 2006 <br/>
                                                    Phase 2A from Sep 2009 to Feb 2011<br/>
                                                    Phase 3A from Jun 2010 to Dec 2011<br/>
                                                    Phase 2B from Jan 2012 to Jul 2014<br/>
                                                    Phase 3A from Apr 2012 to Apr 2014<br/>
                                                    Phase 3B from May 2015 to Nov 2017<br/>
                                                </Text>
                                            </TextContainer>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <NavLink to="/team-leaders" className="--btn-get-to-know"/>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

const Name = styled.h3`
    letter-spacing: 0.19vw;
    text-transform: uppercase;
    line-height: 1.4;
    font-size: 1.1vw;
    font-family: "gill sans bold",sans-serif !important;
    color: #283a97;
    margin: 0;
    text-align: left;
    font-weight:800 !important;
`;

const Line = styled.hr`
    background-color: #676ab1;
    height: 2px !important;
    width: 18vw;
    opacity: 1;
    margin:3vw 0 2.5vw 0;
`;

const Description = styled.p`
    font-weight: 600 !important;
    line-height: 1.8;
    font-size: 1.15vw;
    font-family: "gill sans light",sans-serif !important;
    color: #283a97;
    margin: 0;
    text-align: left;
    letter-spacing: 0.18vw;
`;
const TextContainer = styled.div`
    margin-left: 10vw;
`;

const Label = styled.h3`
    letter-spacing: 0.19vw;
    line-height: 1.4;
    font-size: 1.1vw;
    font-family: "gill sans bold",sans-serif !important;
    color: #283a97;
    margin: 0;
    text-align: left;
    font-weight:800 !important;
`;

const Text = styled.p`
    font-weight: 600 !important;
    line-height: 1.8;
    font-size: 1.15vw;
    font-family: "gill sans light",sans-serif !important;
    color: #283a97;
    margin: 0 0 1.5vw 0;
    text-align: left;
    letter-spacing: 0.18vw;
`;


export default TanChienChyi;