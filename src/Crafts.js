import React from "react";
import closeup1 from "./images/flowerghost.jpeg";
import closeup2 from "./images/ghostgroup.jpeg";
import wideShot from "./images/keychainWide.jpeg";
import "./Crafts.css";


const Crafts = () => {

    return(
        <div className="Crafts">
            <div className="container">
                <div className="grid">
                    <div className="row">
                    <div className="row">
                        <h3><strong>Handmade Crafts</strong></h3>
                    </div>
                    <div className="row pictures">
                        <div className="col-md-7 wideShot p-0">
                            <img src={wideShot} alt="clay ghosts on keychains that are threaded through a wooden stick " className="d-flex"/>
                        </div>
                        <div className="col-md-5 closeups p-0">
                            <div className="row rightCol">
                                <img src={closeup1} alt="clay ghost wearing a purple flower with rosy cheeks" className="d-flex close closeup1"/>
                            </div>
                            <div className="row rightCol">
                                <img src={closeup2} alt="ghosts wearing hats; mistle toe, sprig, flower crown, pumpkin, hat and scarf, strawberry, flower." className="d-flex close"/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Crafts;