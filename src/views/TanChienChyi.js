import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import '../assets/styles/leader.scss';

function TanChienChyi() {
    return (
        <div className="--leader">
            <div className="--bg-1">
                <Container className="--max">
                    <Row>
                        <Col>
                            <div className="--leader-details">
                                <ul>
                                    <li>
                                        <NavLink className="control-prev" to="/team-leaders/jeremiah-tan-chien-yih"/>
                                    </li>
                                    <li>
                                        <NavLink className="control-next" to="/team-leaders/chan-yoon-sang"/>
                                    </li>
                                </ul>
                                <Image
                                    className="d-block"
                                    src={require("../assets/images/leaders/Leaders_IMG-TanChien-02.png").default}
                                    alt="First slide"
                                />
                                <div className="--about-content">
                                    <Row>
                                        <Col md={5}>
                                            <Name>
                                                Tan Chien <br/>
                                                Chyi
                                            </Name>
                                            <Line/>
                                            <Position>
                                                EXECUTIVE <br/>
                                                DIRECTOR
                                            </Position>
                                        </Col>
                                        <Col md={7}>
                                            <Description>
                                                Chien Chyi founded the development arm of TEMOKIN, and he’s largely responsible
                                                for implementing development strategies to drive growth in our property 
                                                development division by selectively choosing projects and areas that are profitable 
                                                and fit TEMOKIN’s portfolio.<br/><br/>
                                                On a day-to-day basis, he’s in charge of ensuring that operations across all TEMOKIN
                                                divisions are running smoothly and efficiently. <br/><br/>
                                                He graduated with a Bachelor in Civil Engineering (Hons.) degree from University 
                                                College London, England, and previously interned with BNP Paribas and YTL Power
                                                where he was exposed to financial modelling, merger & acquisitions, and operations
                                                management.
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

export default TanChienChyi;