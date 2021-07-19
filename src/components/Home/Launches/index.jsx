import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Launches() {
    return (
        <section data-scroll-section className="--bg-4">
            <div className="launches-bg" data-scroll/>
            <Container className="--container-4 --max" >
                <Row> 
                    <Col>
                        <h1 data-scroll className="--title">LATEST LAUNCHES</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image data-scroll className="--img" src={require('../../../assets/images/home/Home_IMG-03.png').default}/>
                    </Col>
                    <Col>
                        <div className="--launches-details">
                            <Image data-scroll className="--img-logo" src={require('../../../assets/images/home/Home_Logo-Mahligai.png').default}/>
                            <p data-scroll className="--txt">2 & 3-Storey Terrace Homes</p>
                            <p data-scroll className="--txt">| 20' x 70' | FREEHOLD</p>
                            <p data-scroll className="--desc">
                                Mahligai offers spacious yet affordable terrace homes with perimeter <br/>
                                fencing and 24-hour security, nestled in the growing township of <br/>
                                Nusa Damai with all the features to call it your ideal home.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a data-scroll href="https://www.mahligai.my/" target="_blank" rel="noreferrer" className="--btn-im-interested">IM INTERESTED</a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};