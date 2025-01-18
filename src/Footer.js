import React from "react";
import "./Footer.css";

const Footer = () => {

    return(
        <div className="Footer">
            <div className="container-fluid">
                <div className="grid">
                    <div className="row links">
                        <div className="col-md-2 linkTitle">
                            <a href="mailto:blossom.armstrong@gmail.com"><span><i class="bi bi-envelope-heart" /></span>
                            <span><p>Let's Connect</p></span></a>
                        </div>                        
                        <div className="col-md-2 linkTitle">
                            <a href="https://www.instagram.com/haunted_design/" target="_blank" rel="noreferrer"><span><i className="bi bi-instagram" /></span>
                            <span><p>Instagram</p></span></a>
                        </div>
                        <div className="col-md-2 linkTitle">
                            <a href="https://www.little-haunted-designs.com/" target="_blank" rel="noreferrer"><span><i class="bi bi-pc-display-horizontal" /></span>
                            <span><p>Web-Store</p></span></a>
                        </div>
                        <div className="col-md-2 linkTitle">
                            <a href="https://littlehaunteddesigns.etsy.com" target="_blank" rel="noreferrer"><span><i class="bi bi-bag-heart" /></span>
                            <span><p>Etsy</p></span></a>
                        </div>
                        <div className="col-md-2 linkTitle">
                            <a href="https://www.linkedin.com/in/blossom-armstrong/" target="_blank" rel="noreferrer"><span><i class="bi bi-linkedin" /></span>
                            <span><p>Linkedin</p></span></a>
                        </div>
                        <div className="col-md-2 linkTitle">
                        <a href="https://github.com/BLSSMA" target="_blank" rel="noreferrer"><span><i class="bi bi-github" /></span>
                            <span><p>Github</p></span></a>
                        </div>
                    </div>
                    <div className="row madeBy">
                        <p>This site was made by Blossom Armstrong, is open-sourced on GitHub, and hosted on Netlify </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;