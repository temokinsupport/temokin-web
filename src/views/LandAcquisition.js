import React, { useRef, useState, useEffect } from "react";
import useLocoScroll from "../components/hooks/useLocoScroll";
import "../assets/styles/landacquisition.scss";
import Header from "../components/LandAcquisition/Header/index";
import { Image } from "react-bootstrap";
const LandAcquisition = () => {
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

  return (
    <>
      {" "}
      {
        <div className="--landacquisition main-container" id="main-container">
          {/* <Image
            className="svg svg--1"
            src={require("../assets/images/landacquisition/svg-1.svg").default}
          />
          <Image
            className="svg svg--2"
            src={require("../assets/images/landacquisition/svg-2.svg").default}
          />
          <Image
            className="svg svg--3"
            src={require("../assets/images/landacquisition/svg-3.svg").default}
          />
          <Image
            className="svg svg--4"
            src={require("../assets/images/landacquisition/svg-4.svg").default}
          />
          <Image
            className="svg svg--5"
            src={require("../assets/images/landacquisition/svg-5.svg").default}
          />
          <Image
            className="svg svg--6"
            src={require("../assets/images/landacquisition/svg-6.svg").default}
          /> */}
          <Header />
        </div>
      }{" "}
    </>
  );
};

export default LandAcquisition;
