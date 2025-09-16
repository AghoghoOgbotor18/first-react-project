import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import logo from '../../assets/edu-logo.png';
import menu from '../../assets/menu-icon.png';
const Navbar = () => {

    //let do a scrollbar for the navigation on scroll
    const [sticky, setSticky] = useState(false);
    //let do a useEffect as a side effect of how the navigstion should look f]when you scroll
    useEffect (()=> {
        //when scrolling
        window.addEventListener("scroll", () => {
            //when scrolling through the y-xis and you scroll up to 50px, it should be seen
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    }, []);

    //toggle menu function
    const [mobilemenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobilemenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return(
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="my logo" />
            <ul className={`nav-link ${mobilemenu ? `` : `hide-mobile-menu`}`}>
                <li><Link to="hero" offset="0" spy={true} smooth='true' duration={500}>Home</Link></li>
                <li><Link to="programs" offset={-250} spy={true} smooth='true' duration={500}>Program</Link></li>
                <li><Link to="about" offset={-150} spy={true} smooth='true' duration={500}>About Us</Link></li>
                <li><Link to="campus" offset={-250} spy={true} smooth='true' duration={500}>Campus</Link></li>
                <li><Link to="testimonials" offset={-250} spy={true} smooth='true' duration={500}>Testimonials</Link></li>
                <li><Link to="contact" offset={-250} spy={true} smooth='true' duration={500} className='btn contact-btn'>Contact Us</Link></li>
            </ul>
            <img src={menu} alt='navbar icon' className='menu-icon' onClick={toggleMenu} />
        </nav>
    )
}

export default Navbar