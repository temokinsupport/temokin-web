import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import '../assets/styles/leader.scss';
import buttonImage from '../assets/images/leaders/Leaders_Button-03.png';

function YmRajaDatoAzwaneBinRajaAriff() {
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
                                        <NavLink className="control-next" to="/team-leaders/ym-raja-dato-azwane-bin-raja-ariff"/>
                                    </li>
                                </ul>
                                <Image
                                    className="d-block"
                                    src={require("../assets/images/leaders/Leaders_IMG-YMRaja.png").default}
                                    alt="First slide"
                                />
                                <div className="--about-content">
                                    <Row>
                                        <Col md={5}>
                                            <Name>
                                                Y.M. RAJA DATO’ <br/>
                                                AZWANE BIN <br/>
                                                RAJA ARIFF
                                            </Name>
                                            <Line/>
                                            <Position>
                                                EXECUTIVE <br/>
                                                DIRECTOR
                                            </Position>
                                        </Col>
                                        <Col md={7}>
                                            <Description>
                                                Raja Dato’ Azwane is responsible for the implementation of key growth strategies to <br/>
                                                increase the capacity of the company while maintaining a prudent cost structure. <br/>
                                                He also leads our investor relations efforts.  <br/> <br/>
                                                After obtaining his Bachelor of Science in Accounting & Finance (Hons.) degree from <br/>
                                                the University of Hull, England, he worked for more than 10 years in audit  <br/>
                                                supervisory & business management positions before starting his own businesses in  <br/>
                                                construction, farm management, food & beverage and property development. With his  <br/>
                                                deep experience and entrepreneurial skill, he strengthens our portfolio of businesses. <br/> <br/>
                                                He was also the treasurer of the Dewan Perniagaan Melayu Muda.
                                            </Description>
                                            <Line/>
                                            <Qoute>
                                                “Great things usually cannot be done <br/>
                                                by one person, so we work in teams. <br/>
                                                Working well in a team is a skill— it <br/>
                                                can be learned, and it can be <br/>
                                                taught.”
                                            </Qoute>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button/>
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

const Button = styled.button`
    background: url(${buttonImage}) top center;
    transition: background 0.3s;
    background-attachment: scroll;
    background-repeat: no-repeat;
    background-size: contain;
    height: 6vw;
    width: 26.7vw;
    min-width: 200px;
    display: block;
    border: 0 !important;
    box-shadow: none !important;
    outline: 0 !important;
    margin: 4.5vw auto 0 auto;
`;

export default YmRajaDatoAzwaneBinRajaAriff;