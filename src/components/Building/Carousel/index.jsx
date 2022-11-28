import React, { useCallback, useRef, useState } from "react";
import { Image, Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function CarouselIndex() {
  const splideRef = useRef();

  const [slide, setSlide] = useState(0);

  const onMove = useCallback((e) => {
    // handler()
    console.log(e);
    setSlide(e.index);
  }, []);

  const [isRightActive, setRightActive] = useState(false);
  const [isLeftActive, setLeftActive] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const controlCarousel = (index) => {
    setCarouselIndex(index);
  };

  const carousel = [
    {
      name: "TROPICANA CENANG",
      background: "Image 97.png",
      client: "Tropicana Corporation Berhad",
      value: "",
      period: "Ongoing",
      links: {
        project: "/tropicana-cenang",
      },
    },
    {
      name: "NATIONAL CAMP AND SERVICES (NORTHERN REGIONS)",
      background: "Group 878.jpg",
      client: "Ministry of Defense, Malaysia",
      value: "RM30 million",
      period: "September 2004 to December 2004",
      links: {
        project: "/natl-camp",
      },
    },
    {
      name: "MAHLIGAI AT NUSA DAMAI, \n 2 & 2.5 STOREY HOUSING, JOHOR",
      background: "Group 879.jpg",
      client: "TEMOKIN Development Sdn. Bhd.",
      value: "RM100 million",
      period: "Feb 2017 to Ongoing",
      links: {
        project: "/mahligai",
      },
    },
  ];

  return (
    <section className="--container-2" data-scroll-section>
      <Image
        className="--right"
        src={require("../../../assets/images/building/svg-9.svg").default}
      />
      <Carousel
        className="overlay-carousel overlay-carousel--building"
        activeIndex={carouselIndex}
        onSelect={controlCarousel}
        onSlide={controlCarousel}
        fade
      >
        {carousel.map((item, index) => {
          return (
            <Carousel.Item
              className={`${index} ${carouselIndex} ${index === carouselIndex}`}
            >
              <img
                className="d-block w-100"
                src={
                  require(`../../../assets/images/building/${item.background}`)
                    .default
                }
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="--title">{item.name}</h3>
                <p className="--desc">{item.description}</p>
                <div className="--details">
                  {item.client ? (
                    <p className="--bottom-detail client">
                      <span className="--title">Client</span>
                      <span>{item.client}</span>
                    </p>
                  ) : null}
                  {item.value ? (
                    <p className="--bottom-detail value">
                      <span className="--title">Value</span>
                      <span>{item.value}</span>
                    </p>
                  ) : null}
                  {item.period ? (
                    <p className="--bottom-detail period">
                      <span className="--title">Period</span>
                      <span>{item.period}</span>
                    </p>
                  ) : null}
                </div>
                <div className="carousel-indicators custom">
                  {carousel.map((item, index) => {
                    return (
                      <li
                        className={`${index === carouselIndex ? "active" : ""}`}
                        onClick={() => controlCarousel(index)}
                      ></li>
                    );
                  })}
                </div>
                <div className="--buttons">
                  {item.links.project ? (
                    <NavLink
                      className="--btn-view-project"
                      to={`/building${item.links.project}`}
                    >
                      View Project
                    </NavLink>
                  ) : null}
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Image
        className="svg svg--1"
        src={require("../../../assets/images/building/svg-10.svg").default}
      />
    </section>
  );
}
