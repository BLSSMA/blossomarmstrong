import React from "react";
import PortraitTwo from "./images/portraitTwo.jpeg";
import "./AboutPage.css";

const AboutPage = () => {

    return(
        <div className="AboutPage" id="anchor4">
            <div className="container">
                <div className="grid">
                    <div className="row topRow">
                        <div className="col-md-7 text">
                            <div className="row">
                                <h3>About Me</h3>
                            </div>
                            <div className="row">
                               <p> 
Hello! I am a queer artist from the seacoast of Maine. I have lived my life with the genetic condition Sticklers Syndrome which affects me daily. I got this diagnosis officially in 2022 after many months of personal research and facing dismissive doctors. Due to the struggles I've faced I am hugely passionate about accessibility of all kinds. Everyone deserves equal access. In my personal life I aim to dispel and unravel the stigma that comes with having progressive disorders. 
<br />
<br />
I have spent many of my working years in the hustle and bustle of kitchens. This fast paced environment drove me for a long time but eventually I was exhausted. So I moved into the cannabis industry, quickly becoming a strong leader and manager. The cannabis industry gave me a chance to genuinely help people, a feeling like no other, and one I cherished. Eventually standing all day and running around became too much so I pivoted again. I started taking online courses in front end web development which I finished in October of 2024. Coding ended up being a really fun and exciting combination of technology and creativity. I love writing clean code that functions perfectly and I feel I’ve just dipped my toes into the water of what coding has to offer. 
<br />
<br />
Life is truly all about adapting and growing. I’m grateful to get to spend mine with the love of my life, our two cats, and our dog.
</p>
                            </div>
                        </div>
                        <div className="col-md-5 pic">
                            <div className="card">
                                <div className="inner">
                                    <img src={PortraitTwo} alt="portrait of Blossom and her dog Clover kneeling in a pumpkin patch" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               <a href="#anchor5" className="topbutton">Top↑</a>
            </div>
        </div>
    )
}
export default AboutPage;