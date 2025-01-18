import React from "react";
import "./Hero.css";
import portrait from "./images/me.png";

const Hero = () => {

    return(
        <div className="Hero">
           <div className="container-fluid">
                <div className="grid">
                    <div className="row header">
                        <div className="col-md-6">
                            <img src={portrait} alt="woman standing in tall grass" className="d-flex portrait" />
                        </div>
                        <div className="col-md-6 textCol">
                            <div className="row title">
                                <h1><strong>Blossom Armstrong</strong></h1>
                            </div>
                            <br />
                            <div className="row titleTwo">
                                <h4><strong>Art</strong></h4>
                            </div>
                            <div className="row">
                                <p><strong>-</strong></p>
                            </div>
                            <div className="row titleTwo">
                                <h4><strong>Web Development</strong></h4>
                            </div>
                            <div className="row">
                                <p><strong>-</strong></p>
                            </div>
                            <div className="row titleTwo">
                                <h4><strong>Entrepreneur</strong></h4>
                            </div>

                        </div>  
                    </div>
                </div>    
            </div>
        </div>
    )

}
export default Hero;