import React, { useState } from "react";
import Hamburger from 'hamburger-react'
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import BALogo from "./images/BALogo.png";
import DarkModeToggle from "./DarkModeToggle";

const NavBar = () => {
const [showNavbar, setShowNavbar] = useState(false)



 return (
  <header className="header">
    <nav className="nav">
      <div className="container">              
          <ul className="nav__list">
            <div className="logo nav__item">
              <NavLink to="/" className="nav__logo">
              <img src={BALogo} alt="initial logo" />
              </NavLink>
            </div>
              <div className="menu-icon" >
              <Hamburger className="hamburger" toggled={showNavbar} toggle={setShowNavbar}/>
              </div>  
              <div className={`nav__list  ${showNavbar && 'active'}`}>
  
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
   </header>
);}

export default NavBar;