import React from "react";
import "../assets/styles/landacquisition.scss";
import "../assets/styles/form.scss";
import { SVG1 } from "../assets/svg/LandAcquisitionSVG/index";
import Navigation from "../components/Navigation";
import FooterMenu from "../components/FooterMenu";
import Header from "../components/LandAcquisition/Header";
import LandAcquisitionForm from "../components/LandAcquisition/LandAcquisitionForm";

const LandAcquisition = () => {
  return (
    <>
      {
        <div
          className="land-acquisition
              main-container"
          id="main-container"
          data-scroll-container
        >
          <Navigation />
          <section className="header">
            <Header />
          </section>
          <section className="form">
            <LandAcquisitionForm />
          </section>
          {/* <div className="svg--1 svg">
            <SVG1 />
          </div> */}
          <FooterMenu />
        </div>
      }
    </>
  );
};

export default LandAcquisition;
