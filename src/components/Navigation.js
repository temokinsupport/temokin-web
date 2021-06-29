import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../assets/styles/navigation.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {

// const [navigation, setNavbar ] = useState(false);

// const changeBackground = () => {
//     if(window.scrollY >= 80) {
//         setNavbar(true);
//     } else {
//         setNavbar(false);
//     }
// }

// window.addEventListener('scroll', changeBackground);

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
                    <li>
                        <NavLink exact to="/about-temokin">About Temokin</NavLink>
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
  