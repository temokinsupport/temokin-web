import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import '../assets/styles/propertyprojects.scss';
import overlayImage from '../assets/images/projects/CivilEng_Shapes-03.png';

function IstanaNegara() {
    return (
        <Projects className="--projects">
            <div className="--bg-1">
                <Container className="--max">
                    <Row>
                        <Col>
                            <div className="--project-details">
                                <Image
                                    className="d-block"
                                    src={require("../assets/images/propertyprojects/PropertyDev_IMG-Istana.png").default}
                                    alt="First slide"
                                />
                                <div className="--about-content">
                                    <Row>
                                        <Col md={6}>
                                            <Name>
                                                ISTANA NEGARA
                                            </Name>
                                            <Line/>
                                            <Description>
                                                The new Istana Negara or National Palace <br/>
                                                was built to replace the old palace which <br/>
                                                has been used since 1957. Upon its <br/>
                                                completion, then-Works Minister Shaziman <br/>
                                                Abu Mansor remarked that the new Istana <br/>
                                                Negara was “Kuala Lumpur’s most amazing <br/>
                                                architectural achievement, surpassing even <br/>
                                                the Twin Towers”
                                            </Description>
                                        </Col>
                                        <Col md={6}>
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
                                                RM997 million
                                                </Text>
                                                <Label>
                                                    Period
                                                </Label>
                                                <Text>
                                                Nov 2007 to Jun 2011
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
        </Projects>
    );
}

const Projects = styled.div`
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background: url(${overlayImage}) top 8vw left -34vw;
        transition: background 0.3s;
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-size: 160vw auto;
        height: 100vw;
        width: 100%;
    }
`;

const Name = styled.h3`
    letter-spacing: 0.19vw;
    text-transform: uppercase;
    line-height: 1.4;
    font-size: 1.1vw;
    font-family: "gill sans medium",sans-serif !important;
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
    letter-spacing: 0.15vw;
`;
const TextContainer = styled.div`

`;

const Label = styled.h3`
    letter-spacing: 0.19vw;
    line-height: 1.4;
    font-size: 1.1vw;
    font-family: "gill sans medium",sans-serif !important;
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


export default IstanaNegara;