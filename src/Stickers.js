import React from "react";
import "./Stickers.css"
import king from "./images/king.png";
import cat from "./images/cat.png";
import catRide from "./images/cathat.png";
import lightningBugs from "./images/lightningBugs.png";
import moss from "./images/Mossy.png";
import trip from "./images/Nowhereville .png";
import wizard from "./images/wizard.png";
import flowers from "./images/flowers.png";


const Stickers = () => {

    return(
        <div className="Stickers" id="anchor3">
            <div className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={lightningBugs} alt="sticker firefly-ghosts trapped in jar at night" className="sticker" />
                        </div>
                        <div className="col-md-3">
                            <img src={king} alt="sticker ghost sitting on throne next to sign reading nowhere" className="sticker"/>
                        </div>
                        <div className="col-md-3">
                            <img src={flowers} alt="sticker ghost wearing flower crown surrounded by vines and flowers" className="sticker" />
                        </div>
                        <div className="col-md-3">
                            <img src={catRide} alt="sticker ghost with a 3 eyed cat sitting on it's head" className="sticker" />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <h3><strong>Original Art Stickers</strong></h3>
                        <h4>Drawn on Procreate</h4>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-3">
                            <img src={trip} alt="sticker ghost next to a suitcase in front of a sign reading nowhere" className="d-flex sticker"/>
                        </div>
                        <div className="col-md-3">
                            <img src={moss} alt="sticker ghost that looks like a rock with moss on it" className="d-flex sticker" />
                        </div>
                        <div className="col-md-3">
                            <img src={cat} alt="sticker ghost riding a brown cat" className="d-flex sticker" />
                        </div>
                        <div className="col-md-3">
                            <img src={wizard} alt="sticker 3 eyed ghost wearing a wizards cloak and hat holding a star shaped wand" className="d-flex sticker" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stickers;