import React from "react";
import me from "./images/me.png";
import "./Hero2.css";
import PopupMenu from "./PopupMenu";

const Hero2 = () => {
    return (
        <div className="Hero2">
            <div className="container">
                <div className="picture">
                    <img src={me} alt="Blossom standing in tall grass" className="portrait" />
                </div>
                <div className="text">
                    <span className="title">
                        <div><h1 className="firstName"><strong>Blossom</strong></h1></div>
                        <div><h1 className="lastName"><strong>Armstrong</strong></h1></div>
                    </span>
                    <span >
                        <div className="button"><PopupMenu /></div>
                    </span>
                    <span className="details">
                        <h4><strong>Artist and Creative</strong></h4>
                        <p><strong>-</strong></p>
                        <h4><strong>Web Designer</strong></h4>
                        <p><strong>-</strong></p>
                        <h4><strong>Blogger</strong></h4>
                    </span>

                </div>
            </div>
        </div>

    )
}
export default Hero2;