import React from "react";
import "./Footer.css";
import { LiaLinkedinIn } from "react-icons/lia";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbBrandGithub } from "react-icons/tb";
import { SiNetlify } from "react-icons/si";


export default function Footer(){

    return(
        <div className="Footer">
            <span className="linkedin">
            <a href="https://www.linkedin.com/in/blossom-armstrong-9959b3306/" target="_blank" rel="noreferrer" title="LinkedIn Profile"><LiaLinkedinIn />
</a>
            </span>
            <span className="shecodes">
            <a href="https://www.shecodes.io/graduates/123692-blossom-armstrong" target="_blank" rel="noreferrer" title="SheCodes Profile"><HiOutlineDesktopComputer />
</a>
            </span>
            <span className="github">
            <a href="https://github.com/BLSSMA" target="_blank" rel="noreferrer" title="GitHub Profile"><TbBrandGithub />
</a>
            </span>
            <span className="netlify">
            <a href="https://app.netlify.com/teams/blssma/sites" target="_blank" rel="noreferrer" title="Netlify Profile"><SiNetlify />
</a>
            </span>
            <div className="tagline">
                This project was coded by Blossom Armstrong, is open-sourced on GitHub and hosted on Netlify
            </div>
        </div>
    )
}