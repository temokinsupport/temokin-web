import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import '../assets/styles/leader.scss';

function CrystalWongWaiChing() {
    return (
        <div className="--leader">
            <div className="--bg-1">
                <Container className="--max">
                    <Row>
                        <Col>
                            <div className="--leader-details">
                                <ul>
                                    <li>
                                        <NavLink className="control-prev" to="/team-leaders/pathooraman-bin-abu"/>
                                    </li>
                                    <li>
                                        <NavLink className="control-next" to="/team-leaders/ym-raja-dato-azwane-bin-raja-ariff"/>
                                    </li>
                                </ul>
                                <Image
                                    className="d-block"
                                    src={require("../assets/images/leaders/Leaders_IMG-Crystal.png").default}
                                    alt="First slide"
                                />
                                <div className="--about-content">
                                    <Row>
                                        <Col md={5}>
                                            <Name>
                                                Crystal Wong <br/>
                                                Wai Ching
                                            </Name>
                                            <Line/>
                                            <Position>
                                                FINANCE <br/>
                                                MANAGER
                                            </Position>
                                        </Col>
                                        <Col md={7}>
                                            <Description>
                                                Crystal is a chartered accountant (UK) and is responsible for Temokin’s overall 
                                                financial operations. She also oversees the financial modelling for all projects and 
                                                since joining us she has led in the formation of the finance department in our 
                                                property development arm.<br/><br/>
                                                After graduating with a Bachelor of Science in Accounting (Hons.) degree from 
                                                Oxford Brookes University, England, she worked in the finance department of YTL 
                                                Cement’s ready-mix division where she was involved in the roll-out of the company’s 
                                                ERP system in preparation for the implementation Goods & Services Tax in Malaysia
                                                in 2015.
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

export default CrystalWongWaiChing;