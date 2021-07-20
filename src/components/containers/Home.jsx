import React, { useState, useRef, useEffect } from 'react';
import useLocoScroll from '../hooks/useLocoScroll';
import '../../assets/styles/home.scss';
import './home.scss';

import NavMenu from '../NavMenu';
import Header from '../Home/Header';
import Featured from '../Home/Featured';
import Projects from '../Home/Projects';
import Launches from '../Home/Launches';
import FooterMenu from '../FooterMenu';

const Home = () => {
    const [preloader, setPreloader] = useState(true);

    useLocoScroll(!preloader);

    const [timer, setTimer] = useState(1);

    const id = useRef(null);

    const clear = () => {
        window.clearInterval(id.current);
        setPreloader(false);
    };
    
    useEffect(() => {
        id.current = window.setInterval(()=>{
            setTimer((timer) => timer - 1 );
        }, 1000);
    }, []);

    useEffect(() => {
        if (timer === 0) {
            clear();
        }
    }, [timer]);

    return (
        <>
            { preloader? 
            <div className="loader-wrapper absolute">
                {/* <h1>Flirty Flowrs</h1> */}
            </div> :
            <div className="--home
                main-container"
                id="main-container"
                data-scroll-container
            >   
                <NavMenu/>
                <Header/>
                <Featured/>
                <Projects/>
                <Launches/>
                <FooterMenu/>
            </div>
            }
        </>
    );
};
export default Home;
