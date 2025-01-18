import React from "react";
import "./Hero3.css";
import port from "./images/Port.png";

const Hero3 = () => {

    return(
        <div className="Hero3">
            <div className="portrait">
                <img src={port} alt="self portrait" />
            </div>
         <div className="text">
                        <span className="title">
                <h1><strong>Blossom Armstrong</strong></h1>
                        </span>

                            <span className="details">
                <h4><strong>Art</strong></h4>
                <p><strong>-</strong></p>
                <h4><strong>Web Development</strong></h4>
                <p><strong>-</strong></p>
                <h4><strong>Entrepreneur</strong></h4>
                </span>
                    <span>
                       
                    </span>
                    </div>
                    </div>
    )
}
export default Hero3;