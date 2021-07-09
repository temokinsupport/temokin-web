import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import '../assets/styles/leader.scss';

function YBhgDatoIrRobertTanKimKuan() {
    return (
        <div className="--leader">
            <div className="--bg-1">
                <Container className="--max">
                    <Row>
                        <Col>
                            <div className="--leader-details">
                                <ul>
                                    <li>
                                        <NavLink className="control-prev" to="/team-leaders/ym-raja-dato-azwane-bin-raja-ariff"/>
                                    </li>
                                    <li>
                                        <NavLink className="control-next" to="/team-leaders/y-m-raja-sulong-hizahar-b-raja-bazian"/>
                                    </li>
                                </ul>
                                <Image
                                    className="d-block"
                                    src={require("../assets/images/leaders/Leaders_IMG-YBHG.png").default}
                                    alt="First slide"
                                />
                                <div className="--about-content">
                                    <Row>
                                        <Col md={5}>
                                            <Name>
                                                Y. BHG. Dato’ <br/>
                                                Ir. Robert Tan <br/>
                                                Kim Kuan
                                            </Name>
                                            <Line/>
                                            <Position>
                                                MANAGING <br/>
                                                DIRECTOR
                                            </Position>
                                        </Col>
                                        <Col md={7}>
                                            <Description>
                                            Dato’ Robert is responsible for the overall strategic direction of Temokin and leads 
                                            our business development, technical and investment arms.<br/><br/>
                                            A chartered engineer (UK) by training, he graduated with a Master in Civil
                                            Engineering (Hons.) degree from University Malaya, Malaysia, and has worked 40 years
                                            in the construction industry. He is well respected among his peers for his technical 
                                            capabilities which have helped in the construction of key infrastructural and 
                                            development projects in Malaysia.<br/><br/>
                                            He holds positions in the Klang Chinese Chamber of Commerce, Master Builders 
                                            Association Malaysia, Construction Industry Development Board, Board of Engineers 
                                            Malaysia and Institute of Civil Engineers (Malaysia and UK). He is also passionately 
                                            involved in charities and NGOs, including Dignity for Children and the Little Sisters of 
                                            the Poor Home for the Aged.

                                            </Description>
                                            <Line/>
                                            <Qoute>
                                            “We want to be remembered not just
                                            for great work, but as good people 
                                            who did great work. Integrity, 
                                            fairness and compassion must be the 
                                            key in all we do.”
                                            </Qoute>
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

const Qoute = styled.p`
    font-weight: 600 !important;
    line-height: 2.8vw;
    font-size: 1.6vw;
    font-family: "gill sans",sans-serif !important;
    color: #283a97;
    margin: 0;
    text-align: left;
    letter-spacing: 0.27vw;
`;

export default YBhgDatoIrRobertTanKimKuan;