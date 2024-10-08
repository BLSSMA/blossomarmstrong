import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import BALogo from "./images/BALogo.png";

const NavBar = () => {
 return (
   <header className="header">
     <nav className="nav ">
       <NavLink to="/" className="nav__logo">
         <img src={BALogo} alt="initial logo" />
       </NavLink>

       <div
         className={"nav__menu"}
         id="nav-menu"
       >
         <ul className="nav__list">
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
         </ul>
       </div>
     </nav>
   </header>
 );
};

export default NavBar;