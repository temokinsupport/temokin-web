import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import '../assets/styles/leader.scss';

function TanChienWen() {
    return (
        <div className="--leader">
            <div className="--bg-1">
                <Container className="--max">
                    <Row>
                        <Col>
                            <div className="--leader-details">
                                <ul>
                                    <li>
                                        <NavLink className="control-prev" to="/team-leaders/tan-chien-wen"/>
                                    </li>
                                    <li>
                                        <NavLink className="control-next" to="/team-leaders/tan-chien-chyi"/>
                                    </li>
                                </ul>
                                <Image
                                    className="d-block"
                                    src={require("../assets/images/leaders/Leaders_IMG-Jeremiah.png").default}
                                    alt="First slide"
                                />
                                <div className="--about-content">
                                    <Row>
                                        <Col md={5}>
                                            <Name>
                                                Jeremiah Tan <br/>
                                                Chien Yih
                                            </Name>
                                            <Line/>
                                            <Position>
                                                EXECUTIVE <br/>
                                                DIRECTOR
                                            </Position>
                                        </Col>
                                        <Col md={7}>
                                            <Description>
                                                Jeremiah is responsible for Temokin’s business development, opening new markets 
                                                while creating venues for expansion in existing ventures.<br/><br/>
                                                He graduated with a Bachelor of Science in Economics (Hons.) degree from the 
                                                SOAS University of London, England, and previously worked with YTL 
                                                Communications as an Operations and Marketing Manager, generating widespread 
                                                visibility for YES 4G, its anchor brand, while concurrently acting as the Executive 
                                                Director of Autodome, the F&B arm of YTL Land, revitalising older assets into 
                                                profitable world-class restaurants and bars. Soon after, he was promoted to Vice 
                                                President of YTL Hotels, overseeing the Malaysian portfolio while assisting in the 
                                                acquisition of new assets overseas.<br/><br/>
                                                He is also passionately involved in the development of lifestyle brands and has co-
                                                founded several health and fitness companies, including Fort Gyms and PWRHOUSE.

                                            </Description>
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
    letter-spacing: 0.4vw;
    font-weight: 600 !important;
    text-transform: uppercase;
    line-height: 2.8vw;
    font-size: 2vw;
    font-family: "gill sans",sans-serif !important;
    color: #283a97;
    margin: 0;
    text-align: left;
`;

const Line = styled.hr`
    background-color: #676ab1;
    height: 2px !important;
    width: 6vw;
    opacity: 1;
    margin:3vw 0 2.5vw 0;
`;

const Position = styled.h6`
    letter-spacing: 0.25vw;
    font-weight: 600 !important;
    text-transform: uppercase;
    line-height: 2vw;
    font-size: 1.6vw;
    font-family: "gill sans",sans-serif !important;
    color: #676ab1;
    text-align: left;
`;

const Description = styled.p`
    font-weight: 600 !important;
    line-height: 1.8;
    font-size: 0.94vw;
    font-family: "gill sans light",sans-serif !important;
    color: #283a97;
    margin: 0;
    text-align: left;
    letter-spacing: 1px;
`;

export default TanChienWen;