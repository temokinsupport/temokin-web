import React, { useState, useRef, useEffect } from 'react';
import useLocoScroll from '../hooks/useLocoScroll';
import '../../assets/styles/aboutus.scss';

import NavMenu from '../NavMenu';
import Carousel from '../About/Carousel';
import Vision from '../About/Vision';
import Mission from '../About/Mission';
import FooterMenu from '../FooterMenu';

const About = () => {

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
            </div> :
            <div className="--about
                main-container"
                id="main-container"
                data-scroll-container
            >
                <NavMenu/>
                <Carousel/>
                <Vision/>
                <Mission/>
                <FooterMenu/>
            </div>
         }
        </>
    );
};
export default About;