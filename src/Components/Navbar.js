import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className = "navbar-wrapper">
    <ul className = 'navbar-nav'>
    <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
    <li className="nav-item"><Link className="nav-link" to='/About'>About</Link></li>
    <li className="nav-item"><Link className="nav-link" to='/News'>News</Link></li>
    <li className="nav-item"><Link className="nav-link" to='/Events'>Events</Link></li>
    </ul>
    </nav>
    )
};

export default Navbar;