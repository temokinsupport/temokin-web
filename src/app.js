import React from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './assets/styles/app.scss';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './views/Home';
import AboutTemokin from './views/AboutTemokin';
import TeamLeaders from './views/TeamLeaders';
import AwardsAndAchievements from './views/AwardsAndAchievements';
import LicensesAndRegistrations from './views/LicensesAndRegistrations';
import PorpertyDevelopment from './views/PorpertyDevelopment';
import CivilEngineering from './views/CivilEngineering';
import ContactUs from './views/ContactUs';
import YmRajaDatoAzwaneBinRajaAriff from './views/YmRajaDatoAzwaneBinRajaAriff';
import YBhgDatoIrRobertTanKimKuan from './views/YBhgDatoIrRobertTanKimKuan';
import YMRajaSulongHizaharBRajaBazian from './views/YMRajaSulongHizaharBRajaBazian';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  var AOS = require('aos');
  AOS.init();

  return (
    <BrowserRouter>
      <Route
        render={({ location }) => {
          return (
            <div> 
              <ScrollToTop/>
              <Navigation/>
               <TransitionGroup>
                  <CSSTransition
                    timeout={600}
                    classNames='fade'
                    key={location.key}
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/about-temokin" component={AboutTemokin} />
                      <Route exact path="/team-leaders" component={TeamLeaders} />
                      <Route exact path="/awards-and-achievements" component={AwardsAndAchievements} />
                      <Route exact path="/licenses-and-registrations" component={LicensesAndRegistrations} />
                      <Route exact path="/civil-engineering" component={CivilEngineering} />
                      <Route exact path="/property-development" component={PorpertyDevelopment} />
                      <Route exact path="/contact-us" component={ContactUs} />
                      <Route exact path="/team-leaders/ym-raja-dato-azwane-bin-raja-ariff" component={YmRajaDatoAzwaneBinRajaAriff} />
                      <Route exact path="/team-leaders/y-bhg-dato-ir-robert-tan-kim-kuan" component={YBhgDatoIrRobertTanKimKuan} />
                      <Route exact path="/team-leaders/y-m-raja-sulong-hizahar-b-raja-bazian" component={YMRajaSulongHizaharBRajaBazian} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              <Footer/>
            </div>
          );
        }}
      />
    </BrowserRouter>
  );
}
