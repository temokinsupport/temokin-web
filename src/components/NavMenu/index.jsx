import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navigation.scss';

export default function NavMenu() {

    // ABOUT TEMOKIN DROPDOWN LINKS
    const aboutLinkdirects = [
        {   
            id:0,
            linkname:"About Us",
            linkpath:"/about-temokin"
        },
        {   
            id:1,
            linkname:"Team Leaders",
            linkpath:"/team-leaders"
        },
        {   
            id:2,
            linkname:"Awards & Achievements",
            linkpath:"/awards-and-achievements"
        },
        {   
            id:3,
            linkname:"Licenses & Registrations",
            linkpath:"/licenses-and-registrations"
        },
    ];

    // DROPDOWN HOVER
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);


    // MOBILE VIEW 992 MIN WIDTH
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 992;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);
    
    const [open, setOpen] = useState(false);

    return (
        <section data-scroll-section className="-nav">
        <Navbar 
            expand="lg"
            className="--navigation"
            data-scroll
        >   
            <NavLink exact to="/" className="--logo">
                <img src={require('../../assets/Logo.png').default} alt='logo'/>
            </NavLink>

            {/* MOBILE VIEW LINKS */}
            <Navbar
                onClick={() => setOpen(!open)}
                aria-controls="basic-navbar-nav"
                aria-expanded={open}
                className={`navbar-toggler ${isMobile ? "" : "hide"}`}
            />

            <Collapse 
                in={open}
                className={`navbar-nav navbar-collapse ${isMobile ? "" : "hide"}`}>
                <Nav>
                    <li>
                        <NavLink exact to="/about-temokin"
                            onClick={() => setOpen(!open)}
                            aria-controls="basic-navbar-nav"
                            aria-expanded={open}
                        >About Us</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/team-leaders"
                         onClick={() => setOpen(!open)}
                         aria-controls="basic-navbar-nav"
                         aria-expanded={open}
                        >Team Leaders</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/awards-and-achievements"
                         onClick={() => setOpen(!open)}
                         aria-controls="basic-navbar-nav"
                         aria-expanded={open}
                        >Awards & Achievements</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/licenses-and-registrations"
                         onClick={() => setOpen(!open)}
                         aria-controls="basic-navbar-nav"
                         aria-expanded={open}
                        >Licenses & Registrations</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/civil-engineering"
                         onClick={() => setOpen(!open)}
                         aria-controls="basic-navbar-nav"
                         aria-expanded={open}
                        >Civil Engineering</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/property-development"
                         onClick={() => setOpen(!open)}
                         aria-controls="basic-navbar-nav"
                         aria-expanded={open}
                        >Property Development</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact-us"
                         onClick={() => setOpen(!open)}
                         aria-controls="basic-navbar-nav"
                         aria-expanded={open}
                        >Contact Us</NavLink>
                    </li>
                </Nav>
            </Collapse>

            {/* WEB VIEW LINKS */}
            <Nav className="ml-auto --web">
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li 
                    onMouseEnter={toggleHover}
                    onMouseLeave={toggleHover}
                >
                    <Button>About Temokin</Button>
                    <ul
                        className={hovered ? '--dropdown --active' : '--dropdown'}
                    >
                        {aboutLinkdirects.map((linkdir) => (
                            <li key={linkdir.id}>
                                <NavLink exact to={linkdir.linkpath} >{linkdir.linkname}</NavLink>
                            </li>
                        ))}
                    </ul>
                </li>
                <li>
                    <NavLink exact to="/civil-engineering">Civil Engineering</NavLink>
                </li>
                <li>
                    <NavLink exact to="/property-development">Property Development</NavLink>
                </li>
                <li>
                    <NavLink exact to="/contact-us">Contact Us</NavLink>
                </li>
            </Nav>
        </Navbar>
        </section>
    );
}