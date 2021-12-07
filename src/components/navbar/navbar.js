import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './navbar.scss';

function Navbar() {

    let navigate = useNavigate();


    return (
        <div>
            <nav class="navbar">
                <span className="my_name" onClick={() => navigate('/')}>VIKAS PISE</span>
                <div class="nav_links">
                    <NavLink className='profile_links' activeClassName='link_selected' to='/portfolio'>PORTFOLIO</NavLink>
                    <NavLink className='profile_links' activeClassName='link_selected' to='/projects'>PROJECTS</NavLink>
                    <NavLink className='profile_links' activeClassName='link_selected' to='contact'>CONTACT</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;