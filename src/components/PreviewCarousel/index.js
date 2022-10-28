import React from "react";
import { Carousel } from "react-bootstrap";
import "../../assets/styles/previewcarousel.scss";

function PreviewCarousel() {
  return (
    <Carousel className="preview-carousel" indicators fade>
      {[1, 2, 3, 4].map((item) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={
                require(`../../assets/images/propertyprojects/preview/mahligai/1.png`)
                  .default
              }
              alt="First slide"
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default PreviewCarousel;
