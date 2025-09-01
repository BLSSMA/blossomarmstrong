import React from "react";
import "./Projects.css";
import king from "./images/king.png";
import cat from "./images/cat.png";
import cathat from "./images/cathat.png";
import flowers from "./images/flowers.png";
import lightningbug from "./images/lightningBugs.png";
import mossy from "./images/Mossy.png";
import nowhere from "./images/Nowhereville .png";
import wizard from "./images/wizard.png";
import Carousel from 'react-bootstrap/Carousel';



const Projects = () => {
    return (
        <div className="Projects container" id="anchor2">
            <div className="grid">
                <div className="row">
                    <div className="col-6">
                        <div className="pictureCarousel">
                            <Carousel className="pictureCarousel">
                                <Carousel.Item>
                                    <img src={king} text="first slide" alt="linktree" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={cat} text="first slide" alt="linktree" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={cathat} text="first slide" alt="linktree" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={flowers} text="first slide" alt="linktree" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={lightningbug} text="first slide" alt="linktree" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={mossy} text="first slide" alt="linktree" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={nowhere} text="first slide" alt="linktree" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={wizard} text="first slide" alt="linktree" />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row"><h1>Stickers</h1></div>
                        <div className="row"><h2>Custom Designs</h2></div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Projects;