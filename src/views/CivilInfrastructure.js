import React, { useRef, useState, useEffect } from "react";
import useLocoScroll from "../components/hooks/useLocoScroll";
import { useMediaQuery } from "react-responsive";
import "../assets/styles/civilinfrastructure.scss";
import { Image } from "react-bootstrap";

import Header from "../components/CivilInfrastructure/Header";
import FooterMenu from "../components/FooterMenu";
import CivilInfrastructureData from "../components/CivilInfrastructure/CivilInfrastructure";
import List from "../components/CivilInfrastructure/List";
import Carousel from "../components/CivilInfrastructure/Carousel";

const CivilInfrastructure = () => {
  const [preloader, setPreloader] = useState(true);

  useLocoScroll(!preloader);

  const [timer, setTimer] = useState(1);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  const isTablet = useMediaQuery({ query: "(min-width: 992px)" });
  // const isMobile = useMediaQuery({ query: '(max-width: 992px)' });

  // // MOBILE CAROUSEL
  // const ref = useRef(null);
  // const onPrevClick = () => {
  //   ref.current.prev();
  //   setRightActive(!isRightActive);
  //   setLeftActive(!isLeftActive);
  // };
  // const onNextClick = () => {
  //   ref.current.next();
  //   setRightActive(!isRightActive);
  //   setLeftActive(!isLeftActive);
  // };

  // // TOGGLE CLASS
  // const [isRightActive, setRightActive] = useState(false);
  // const [isLeftActive, setLeftActive] = useState(false);

  return (
    <>
      {
        // preloader?
        //   <div className="loader-wrapper absolute">
        //       {/* <h1>Flirty Flowrs</h1> */}
        //   </div> :
        <div
          className="--civil-infrastructure main-container"
          id="main-container"
          data-scroll-container
        >
          <Header />
          <CivilInfrastructureData />
          <Carousel />
          <List />

          {/* {isTablet && <Section4 />} */}
          {/* <OperatingPrinciples /> */}

          {/* {isTablet && <Section6 />} */}
          {/* { isTablet && */}
          {/* <OurValues /> */}
          {/* } */}
          {/* <WeDig /> */}
          <FooterMenu />
        </div>
      }
    </>
  );
};

export default CivilInfrastructure;
