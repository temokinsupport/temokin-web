import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
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
            linkpath:"/awars-and-achievements"
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
                <Nav className="ml-auto">
                    <li>
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li 
                        onMouseEnter={toggleHover}
                        onMouseLeave={toggleHover}>
                        <a >About Temokin</a>
                        <ul
                            className={hovered ? '--dropdown --active' : '--dropdown'}
                        >
                            {aboutLinkdirects.map((linkdir) => (
                                <li>
                                    <NavLink exact to={linkdir.linkpath} key={linkdir.id}>{linkdir.linkname}</NavLink>
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
            </Navbar.Collapse>
        </Navbar>
    );
}
  
  export default Navigation;
  