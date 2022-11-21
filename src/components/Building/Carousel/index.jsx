import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { NavLink } from "react-router-dom";

export default function CarouselIndex() {
  const splideRef = useRef();

  const [slide, setSlide] = useState(0);

  const onMove = useCallback((e) => {
    // handler()
    console.log(e);
    setSlide(e.index);
  }, []);

  return (
    <section className="--container-2" data-scroll-section>
      {/* <Image className="--right" src={require('../../../assets/images/building/shape-right.png').default} /> */}
      <Splide
        className={`splide--${slide}`}
        options={{
          type: "fade",
          easeing: "cubic-bezier(0.25, 1, 0.5, 1)",
          autoplay: true,
          pauseOnHover: false,
          resetProgress: false,
          height: "80vh",
        }}
        onMove={onMove}
        ref={splideRef}
      >
        <SplideSlide>
          <Image
            src={
              require("../../../assets/images/building/Image 97.png").default
            }
          />
          <div className="--right-container">
            <h5 className="--title">Tropicana CENANG</h5>
            <br />
            <p>
              Client
              <br />
              <span className="thin">Tropicana Corporation Berhad</span>
            </p>
            <hr />
            <p>
              Period
              <br />
              <span className="thin">Ongoing</span>
            </p>
            <NavLink
              className="--btn-view-project1"
              to="/civil-engineering/seremban-middle-ring-road"
            >
              View Project
            </NavLink>
          </div>
        </SplideSlide>
        <SplideSlide>
          <Image
            src={
              require("../../../assets/images/building/Group 878.jpg").default
            }
          />
          <div className="--right-container ">
            <h5 className="--title">
              NATIONAL CAMP AND SERVICES (NORTHERN REGIONS)
            </h5>
            <br />
            <p>
              Client
              <br />
              <span className="thin">Ministry of Defense, Malaysia</span>
            </p>
            <hr />
            <p>
              Value
              <br />
              <span className="thin">RM30 million</span>
            </p>
            <hr />
            <p>
              Period
              <br />
              <span className="thin">September 2004 to Decemeber 2004</span>
            </p>
            <NavLink
              className="--btn-view-project"
              to="/civil-engineering/seremban-middle-ring-road"
            >
              View Project
            </NavLink>
          </div>
        </SplideSlide>
        <SplideSlide>
          <Image
            src={
              require("../../../assets/images/building/Group 879.jpg").default
            }
          />
          <div className="--right-container">
            <h5 className="--title">
              MAHLIGAI AT NUSA DAMAI, 2 & 2.5 STOREY HOUSING, JOHOR
            </h5>
            <br />
            <p>
              Client
              <br />
              <span className="thin">TEMOKIN Development Sdn. Bhd.</span>
            </p>
            <hr />
            <p>
              Value
              <br />
              <span className="thin">RM100 million</span>
            </p>
            <hr />
            <p>
              Period
              <br />
              <span className="thin">Feb 2017 to ongoing</span>
            </p>
            <NavLink
              className="--btn-view-project"
              to="/civil-engineering/seremban-middle-ring-road"
            >
              View Project
            </NavLink>
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
  );
}
