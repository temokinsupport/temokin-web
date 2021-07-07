import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../assets/styles/navigation.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {

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

    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);

    return (
        <Navbar 
            expand="lg"
            className="--navigation"
        >   
            <NavLink exact to="/" className="--logo">
                <img src={require('../assets/Logo.png').default} alt='logo'/>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <li>
                        <NavLink exact to="/about-temokin">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/team-leaders">Team Leaders</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/awards-and-achievements">Awards & Achievements</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/licenses-and-registrations">Licenses & Registrations</NavLink>
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
            </Navbar.Collapse>
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
    );
}
  
  export default Navigation;
  