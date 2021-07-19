import locomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import 'locomotive-scroll/src/locomotive-scroll.scss';

export default function useLocoScroll(start){
    useEffect(()=>{
        if (!start) return;

        const scrollEl = document.querySelector('#main-container');
        const locoScroll = new locomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            class:  "is-reveal",
            repeat: true,
        })

        
        gsap.registerPlugin(ScrollTrigger)

        locoScroll.on('scroll', ScrollTrigger.update)

        ScrollTrigger.create({
            trigger: '.header-bg',
            scroller: '.container',
            start: 'top+=30% 50%',
            end: 'bottom-=40% 50%',
            animation: gsap.to('.header-bg', {backgroundSize: '120%'}),
            scrub: 2,
            // markers: true
        })

    }, [start])
}