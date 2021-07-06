import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import '../assets/styles/propertydevelopment.scss';

function PorpertyDevelopment() {
  return (
    <div className="--property-development">
      <div className="--bg-1">
        <Container>
          <Row>
            <Col>
              <h1 className="--title">Property Development</h1>
              <p className="--desc">With over 50 years of combined experience in development, we have designed <br/>
              and built a multitude of complex skycrapers, hospitals, modern retail spaces <br/>
              nad highquality homes, with our crowning glory being the construction of <br/>
              Istana Negara, the National Palace of Malaysia.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="--bg-2">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../assets/images/propertydevelopment/PropertyDev_IMG-Istana.png').default}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="--title">Istana Negara</h3>
            <p className="--desc">The new Istana Negara or National Palace <br/>
            was built to replace the old palace which <br/>
            has been used since 1957. Upon its <br/>
            completion, then-Works Minister Shaziman <br/>
            Abu Mansor remarked that the new Istana <br/>
            Negara was "Kuala Lumpur's most amazing <br/>
            architectural achievement, surpassing even <br/>
            the Twin Towers"</p>
            <div className="--hr"/>
            <p className="--bottom-detail">
              <span className="--title">Client</span>
              <span>Public Works Department, Malaysia (JKR)</span>
            </p>
            <p className="--bottom-detail">
              <span className="--title">Value</span>
              <span>RM997 million</span>
            </p>
            <p className="--bottom-detail">
              <span className="--title">Period</span>
              <span>Nov 2007 to Jun 2011</span>
            </p>
            <NavLink className="--btn-view-project" to="/property-development/istana-negara">View Project</NavLink>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../assets/images/propertydevelopment/PropertyDev_IMG-Mahligai.png').default}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="--title">Mahligai At Nusa Damai, Two Storey <br/>
            And Three Storey Housing, Johor</h3>
            <p className="--desc">Mahligai at Nusa Damai consists of 164 <br/>
            landed houses in the already-mature <br/>
            neighbourhood of Masai in Johor.</p>
            <div className="--hr"/>
            <p className="--bottom-detail">
              <span className="--title">Client</span>
              <span>Temokin Development Sdn. Bhd.</span>
            </p>
            <p className="--bottom-detail">
              <span className="--title">Value</span>
              <span>RM100 million</span>
            </p>
            <p className="--bottom-detail">
              <span className="--title">Period</span>
              <span>Feb 2017 to ongoing</span>
            </p>
            <NavLink className="--btn-view-project" to="/property-development/mahligai-at-nusa-damai-two-storey-and-three-storey-housing-johor">View Project</NavLink>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../assets/images/propertydevelopment/PropertyDev_IMG-Tropicana.png').default}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="--title">Tropicana Miyu, Petaling Jaya</h3>
            <p className="--desc">Envisioning itself as being a perfect home <br/>
            for individuals and their loved one, <br/>
            Tropicana Miyu which means A Place For <br/>
            Me and You, clearly blends modern <br/>
            conveniences with traditionalism so that <br/>
            the older and younger generation can <br/>
            pursue their lifestyle choices at the very <br/>
            best.</p>
            <div className="--hr"/>
            <p className="--bottom-detail">
              <span className="--title">Client</span>
              <span>Tropicana Temokin Son Bhd</span>
            </p>
            <p className="--bottom-detail">
              <span className="--title">Value</span>
              <span>RM261 million</span>
            </p>
            <p className="--bottom-detail">
              <span className="--title">Period</span>
              <span>September 2020 to on going</span>
            </p>
            <Button className="--btn-view-project">View Project</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../assets/images/propertydevelopment/PropertyDev_IMG-NationalCamp.png').default}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="--title">National Camp And Services <br/>
            (Northern Regions)</h3>
            <p className="--desc">The National Service (NS) Camp <br/>
            (Northern Region) was constructed <br/>
            successfully on a very tight schedule and <br/>
            incorporated homely design elements for <br/>
            new trainees to feel comfortable in a lush <br/>
            forest environment.
              </p>
            <div className="--hr"/>
            <p className="--bottom-detail">
              <span className="--title">Client</span>
              <span>Ministry of Defence, Malaysia</span>
            </p>
            <p className="--bottom-detail">
              <span className="--title">Value</span>
              <span>RM30 million</span>
            </p>
            <p className="--bottom-detail">
              <span className="--title">Period</span>
              <span>September 2004 to December 2004</span>
            </p>
            <NavLink className="--btn-view-project" to="/property-development/national-camp-and-services-northern-regions">View Project</NavLink>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
  );
}

export default PorpertyDevelopment;
