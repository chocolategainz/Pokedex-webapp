import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
   
    
    <ul className = 'navbar-container'>
    <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
    <li className="nav-item"><Link className="nav-link" to='/About'>About</Link></li>
    <li className="nav-item"><Link className="nav-link" to='/News'>News</Link></li>
    <li className="nav-item"><Link className="nav-link" to='/Events'>Events</Link></li>
    </ul>
   
   
    )
};

export default Navbar;