import React, { useState } from "react";
import Hamburger from 'hamburger-react'
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import BALogo from "./images/BALogo.png";
import DarkModeToggle from "./DarkModeToggle";

const NavBar = () => {

const [hamburgerOpen, setHamburgerOpen] = useState(false);

const toggleHamburger = () => {
  setHamburgerOpen(!hamburgerOpen)
}

 return (
  <header className="header">
    <nav className="nav">
      <div className="container"> 
       <div className="menu-icon" >
        <div className="hamburger" onClick={toggleHamburger}>
              <Hamburger />
           </div>
           </div>            
          <ul className="nav__list">
            <div className="Navbar">
            <div className="logo nav__item">
              <NavLink to="/" className="nav__logo">
              <img src={BALogo} alt="initial logo" />
              </NavLink>
            </div>
  
           <li className="nav__item">
             <NavLink to="/" className="nav__link">
               Home
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/Work" className="nav__link">
               Work
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/Resume" className="nav__link">
               Resume
             </NavLink>
           </li>
            <li className="nav__item">
             <NavLink to="/Certificates" className="nav__link">
               Certificates
             </NavLink>
           </li>
           <div className="nav__item">
      <DarkModeToggle />   
      </div>   
      </div>        
         </ul>
      </div>       
     </nav>

   <style jsx>
    {`
@media(max-width: 1020px) {

    .nav__list{
    display: ${hamburgerOpen ? `inline` : `none`} ;
    width:150px;
    text-align: center;
}}
    `}
   </style>
   </header>   
);}

export default NavBar;