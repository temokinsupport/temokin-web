import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { NavLink } from "react-router-dom";

export default function CarouselIndex() {
    return (
        <section className="--container-2" data-scroll-section>
             {/* <Image className="--right" src={require('../../../assets/images/building/shape-right.png').default} /> */}
                <Splide
                    options={{
                        type: 'fade',
                        autoplay: true,
                        pauseOnHover: false,
                        resetProgress: false,
                        height: '80vh',
                    }}
                >
                    <SplideSlide >
                        <Image src={require('../../../assets/images/building/Image 97.png').default} />
                        <div className="--right-container">
                            <h5 className="--title">Tropicana CENANG</h5>
                            <br />
                            <p>Client<br />Tropicana Corporation Berhad</p>
                            <hr />
                            <p>Period<br />Ongoing</p>
                           <NavLink className="--btn-view-project1" to="/civil-engineering/seremban-middle-ring-road">View Project</NavLink>
                        </div>
                    </SplideSlide>
                    <SplideSlide >
                        <Image src={require('../../../assets/images/building/Group 878.jpg').default} />
                       <div className="--right-container ">
                            <h5 className="--title">NATIONAL CAMP AND SERVICES (NORTHERN REGIONS)</h5>
                            <br />
                            <p>Client<br />Ministry of Defense, Malaysia</p>
                            <hr />
                            <p>Value<br />RM30 million</p>
                            <hr />
                            <p>Period<br />September 2004 to Decemeber 2004</p>
                            <NavLink className="--btn-view-project" to="/civil-engineering/seremban-middle-ring-road">View Project</NavLink>
                        </div>
                    </SplideSlide>
                    <SplideSlide >
                        <Image src={require('../../../assets/images/building/Group 879.jpg').default} />
                        <div className="--right-container">
                            <h5 className="--title">MAHLIGAI AT NUSA DAMAI, 2 & 2.5 STOREY HOUSING, JOHOR</h5>
                            <br />
                            <p>Client<br />TEMOKIN Development Sdn. Bhd.</p>
                            <hr />
                            <p>Value<br />RM100 million</p>
                            <hr />
                            <p>Period<br />Feb 2017 to ongoing</p>
                            <NavLink className="--btn-view-project" to="/civil-engineering/seremban-middle-ring-road">View Project</NavLink>
                        </div>
                    </SplideSlide>
                </Splide>
                {/* <Row className='justify-content-center'>
                    <Col  md={12} className="mt-5 mb-5">
                        <div className="text-center mt-5 pt-5">
                            <Image className="--centerimg" src={require('../../../assets/images/civilinfrastructure/Rectangle 151.png').default} />
                        </div>
                    </Col>
                   
                </Row> */}
      </section>
    )
}