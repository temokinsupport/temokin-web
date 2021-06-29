import React from 'react';
// import '../assets/styles/navigation.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Submenu() {
    return (
        <ul className="nav__submenu">
            <li className="nav__submenu-item ">
            <a>Our Company</a>
            </li>
            <li className="nav__submenu-item ">
            <a>Our Team</a>
            </li>
            <li className="nav__submenu-item ">
            <a>Our Portfolio</a>
            </li>
        </ul>
    )
}

export default Submenu;