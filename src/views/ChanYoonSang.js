import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import '../assets/styles/leader.scss';

function ChanYoonSang() {
    return (
        <div className="--leader">
            <div className="--bg-1">
                <Container className="--max">
                    <Row>
                        <Col>
                            <div className="--leader-details">
                                <ul>
                                    <li>
                                        <NavLink className="control-prev" to="/team-leaders/tan-chien-chyi"/>
                                    </li>
                                    <li>
                                        <NavLink className="control-next" to="/team-leaders/pathooraman-bin-abu"/>
                                    </li>
                                </ul>
                                <Image
                                    className="d-block"
                                    src={require("../assets/images/leaders/Leaders_IMG-ChanYoon.png").default}
                                    alt="First slide"
                                />
                                <div className="--about-content">
                                    <Row>
                                        <Col md={5}>
                                            <Name>
                                                Chan Yoon <br/>
                                                Sang
                                            </Name>
                                            <Line/>
                                            <Position>
                                                CONTACTS <br/>
                                                DIRECTOR
                                            </Position>
                                        </Col>
                                        <Col md={7}>
                                            <Description>
                                                Yoon Sang is responsible for securing and implementing project contracts for
                                                Temokin. He led in the massive RM2.5 billion Seremban Middle Ring Road project, 
                                                successfully executing its seven contract packages from conceptual design and pricing 
                                                negotiation up to implementation and completion.<br/><br/>
                                                He graduated with an Architecture Certificate and a Diploma in Building Technology 
                                                from Tunku Abdul Rahman University College, Malaysia, and started his career as a 
                                                project co-ordinator and quantity surveyor in Sima Construction. He later joined 
                                                Comtrac Sdn. Bhd., a subsidiary of DRB-HICOM, where he sharpened his skills in 
                                                contract implementation through exposure to various fast-track turnkey projects.
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

export default ChanYoonSang;