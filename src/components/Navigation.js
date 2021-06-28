import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/" className="--logo">
                <img src={require('../assets/Logo.png').default} alt='logo'/>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about-temokin">About Temokin</Link>
                    </li>
                    <li>
                        <Link to="/civil-engineering">Civil Engineering</Link>
                    </li>
                    <li>
                        <Link to="/property-development">Property Development</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
  
  export default Navigation;
  