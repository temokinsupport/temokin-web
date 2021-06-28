import React from 'react';
import './app.css';
import './assets/styles/app.scss';
import Navigation from './components/Navigation';
import Home from './views/Home';
import AboutTemokin from './views/AboutTemokin';
import PorpertyDevelopment from './views/PorpertyDevelopment';
import CivilEngineering from './views/CivilEngineering';
import ContactUs from './views/ContactUs';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';
 
export default function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Route
        render={({ location }) => {
          return (
            <PageTransition
              preset="fadeBottomFadeTop"
              transitionKey={location.pathname}
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/about-temokin" component={AboutTemokin} />
                <Route exact path="/civil-engineering" component={CivilEngineering} />
                <Route exact path="/property-development" component={PorpertyDevelopment} />
                <Route exact path="/contact-us" component={ContactUs} />
              </Switch>
            </PageTransition>
          );
        }}
      />
    </BrowserRouter>
  );
}
