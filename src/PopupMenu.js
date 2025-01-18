import React, { useState } from "react";
import "./Popup.css";

const SimplePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="popup">
      <button onClick={togglePopup}>Let's Connect</button>
      {isOpen && (
        <div className="popupBox"> 
          <button onClick={togglePopup} className="closeButton"><small>X</small></button>
            <p>
                <a href="mailto:blossom.armstrong@gmail.com" target="_blank" rel="noreferrer">
                    <span>
                        <p>Email</p>
                    </span>
                </a>

                <a href="https://www.instagram.com/haunted_design/" target="_blank" rel="noreferrer">
                    <span>
                        <p>Instagram</p>
                    </span>
                </a>

                <a href="https://www.little-haunted-designs.com/" target="_blank" rel="noreferrer">
                    <span>
                        <p>Web-Store</p>
                    </span>
                </a>

                <a href="https://littlehaunteddesigns.etsy.com" target="_blank" rel="noreferrer">
                    <span>
                        <p>Etsy</p>
                    </span>
                </a>

                <a href="https://www.linkedin.com/in/blossom-armstrong/" target="_blank" rel="noreferrer">
                    <span>
                        <p>Linkedin</p>
                    </span>
                </a>
            </p>
        </div>
      )}
    </div>
  );
};

export default SimplePopup;
