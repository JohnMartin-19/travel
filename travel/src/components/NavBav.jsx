import React from "react";
import { NavLink, Link } from "react-router-dom"; 
import './NavBar.css';
import { useState } from "react"; 

function NavBar(){
    const [click,setClick] = useState(false)
    const handleClick = () => setClick(!click) 

    const[color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener('scroll',changeColor)


    return (
        <div>
            <nav class={color ? 'nav nav-bg' : 'nav'} >
                <NavLink to='/' ><h4>YBNA TOURS</h4></NavLink>
                <ul className={click ? 'nav-menu active':"nav-menu "}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/About Me'>Destinations</Link>
                    </li>
                    <li>
                        <Link to='/MyStacks'>Packages</Link>
                    </li>
                    <li>
                        <Link to='/Projects'>Previous Trips</Link>
                    </li>
                    <li>
                        <Link to='/Contact Me'>Contact Us</Link>
                    </li>
                </ul>
                <div className="hamburger" onClick={handleClick} >
                    {click ? (
                    <FaTimes size={20} style={{color:'#fff'}}/>
                    ) : (
                    <FaBars size={20} style={{color:'#fff'}}/>
                    )}
                    
                    
                </div>
                
            </nav>
        </div>
    )
}


export default NavBar