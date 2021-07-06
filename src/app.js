import React from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ScrollToTop from './components/ScrollToTop';
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
import TanChienWen from './views/TanChienWen';
import JeremiahTanChienYih from './views/JeremiahTanChienYih';
import TanChienChyi from './views/TanChienChyi';
import ChanYoonSang from './views/ChanYoonSang';
import PathooramanBinAbu from './views/PathooramanBinAbu';
import CrystalWongWaiChing from './views/CrystalWongWaiChing';
import SerembanMiddleRingRoad from './views/SerembanMiddleRingRoad';
import SungaiGombakBridge from './views/SungaiGombakBridge';
import Earthworks from './views/Earthworks';
import TnbSubstations from './views/TnbSubstations';

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
                      <Route exact path="/team-leaders/tan-chien-wen" component={TanChienWen} />
                      <Route exact path="/team-leaders/jeremiah-tan-chien-yih" component={JeremiahTanChienYih} />
                      <Route exact path="/team-leaders/tan-chien-chyi" component={TanChienChyi} />
                      <Route exact path="/team-leaders/chan-yoon-sang" component={ChanYoonSang} />
                      <Route exact path="/team-leaders/pathooraman-bin-abu" component={PathooramanBinAbu} />
                      <Route exact path="/team-leaders/crystal-wong-wai-ching" component={CrystalWongWaiChing} />
                      <Route exact path="/civil-engineering/seremban-middle-ring-road" component={SerembanMiddleRingRoad} />
                      <Route exact path="/civil-engineering/sungai-gombak-bridge" component={SungaiGombakBridge} />
                      <Route exact path="/civil-engineering/earthwork-constructio-power-station-bandaru-baru-arang" component={Earthworks} />
                      <Route exact path="/civil-engineering/tnb-substations-33-11kv" component={TnbSubstations} />
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
