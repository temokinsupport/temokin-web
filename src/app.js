import React from 'react';
import './app.css';
import './assets/styles/app.scss';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './views/Home';
import AboutTemokin from './views/AboutTemokin';
import TeamLeaders from './views/TeamLeaders';
import AwardsAndAchievements from './views/AwardsAndAchievements';
import PorpertyDevelopment from './views/PorpertyDevelopment';
import CivilEngineering from './views/CivilEngineering';
import ContactUs from './views/ContactUs';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';
 
export default function App() {
  var AOS = require('aos');
  AOS.init();

  return (
    <BrowserRouter>
      <Route
        render={({ location }) => {
          return (
            <PageTransition
              preset="fadeBottomFadeTop"
              transitionKey={location.pathname} 
              className="--page"
            >
              <Navigation/>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/about-temokin" component={AboutTemokin} />
                <Route exact path="/team-leaders" component={TeamLeaders} />
                <Route exact path="/awards-and-achievements" component={AwardsAndAchievements} />
                <Route exact path="/civil-engineering" component={CivilEngineering} />
                <Route exact path="/property-development" component={PorpertyDevelopment} />
                <Route exact path="/contact-us" component={ContactUs} />
              </Switch>
              <Footer/>
            </PageTransition>
          );
        }}
      />
    </BrowserRouter>
  );
}
