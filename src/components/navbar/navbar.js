import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './navbar.scss';

function Navbar() {

    let navigate = useNavigate();


    return (
        <div>
            <nav className="navbar">
                <span className="my_name" onClick={() => navigate('/')}>VIKAS PISE</span>
                <div className="nav_links">
                    <span style={{ color: window.location.pathname == '/portfolio' && '#B968C7' }} className='profile_links' onClick={() => navigate('/portfolio')} >PORTFOLIO</span>
                    <span style={{ color: window.location.pathname == '/projects' && '#B968C7' }} className='profile_links' onClick={() => navigate('/projects')} >PROJECTS</span>
                    <span style={{ color: window.location.pathname == '/contact' && '#B968C7' }} className='profile_links' onClick={() => navigate('/contact')} >CONTACT</span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;