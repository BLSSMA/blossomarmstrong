import React from "react";
import 'bootstrap/dist/js/bootstrap.min.js'
import "./NavBar.css";
import BAlogo from "./images/BAlogo.png";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {

    return(
            <div className="navigator">
            <nav className="navbar">
            <div className="container">
                <a className="navbar-brand" href="/"><img src={BAlogo} className="img-fluid" alt="styalized BA"  id="anchor5"/></a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                  <span className="toggleDark"><DarkModeToggle /></span>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#anchor">Figma Designs and Live Sites</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#anchor2">Coding Projects and Knowledge</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#anchor3">Drawings and Crafts</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#anchor4">About Me</a>
                </li>
            </ul>
    </div>
    
  </div>
</nav>
</div>

)
}
export default Navbar;