import React from "react";
import  './navbar.css';
import {AiFillCloseCircle} from 'react-icons/ai';
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaDev } from "react-icons/fa";
import{TbGridDots} from 'react-icons/tb';
function NavBar(){
    return(
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                   <a href="/" className="logo flex" >
                        <h1>The <IoMdArrowRoundBack className="icon" />End <FaDev className="icon" /></h1>
                    </a> 
                </div>
                <div className="navBar">
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="/Home" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="/Packages" className="navLink">Packages</a>
                        </li>
                        <li className="navItem">
                            <a href="/Contact Us" className="navLink">Contact Us</a>
                        </li>
                        <li className="navItem">
                            <a href="/Pages" className="navLink">Pages</a>
                        </li>
                        <li className="navItem">
                            <a href="/Destinations" className="navLink">Destinations</a>
                        </li>
                        <li className="navItem">
                            <a href="/News" className="navLink">News</a>
                        </li>

                        <button className="btn">
                            <a href="#">BOOK NOW</a>
                        </button>
                    </ul>
                    <div className="closeNavbar">
                    <AiFillCloseCircle className="icon"/>
                    </div>
                </div>
            <div className="toggleNavbar">
                <TbGridDots className='icon'/>
            </div>


            </header>
        </section>
    )
}

export default NavBar