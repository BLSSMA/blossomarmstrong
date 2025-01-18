import React from "react";
import photographer from "./images/photographer.png";
import bakery from "./images/bakery.png";
import streamer from "./images/streamer.png";
import witch from "./images/witch.png";
import lhdLinkTree from "./images/lhdlinks.png";
import lhdLiveLinkTree from "./images/livelinks.png";
import cbdstore from "./images/cbdstore.jpeg";
import cbdstorelive from "./images/cbdstorelive.jpeg";
import mmjstore from "./images/mmjstore.jpeg";
import "./Design.css";

const Design = () => {
    return(
        <div className="Design">
        <div className="container-flex">
            <div className="grid">
                <div className="row">
                    <h3 id="anchor"><strong>Figma Design</strong></h3>
                    <div className="col-md-6">
                        <div className="row">
                            <h4>Link Landing Page</h4>
                        </div>
                        <div className="row examples">
                            <div className="col-md-3 exampleCol">
                                <img src={photographer} alt="linktree for photographer" className="d-flex linktree" />
                            </div>
                            <div className="col-md-3 exampleCol">
                                <img src={bakery} alt="linktree for bakeshop" className="d-flex linktree" />
                            </div>
                            <div className="col-md-3 exampleCol">
                                <img src={streamer} alt="linktree for gamer/streamer" className="d-flex linktree" />
                            </div>
                            <div className="col-md-3 exampleCol">
                                <img src={witch} alt="linktree for a witch" className="d-flex linktree" />
                            </div>
                        </div>
                        <br />
                        <div className="row lhdDesignRow">
                            <div className="col-6">
                                <h4>Design</h4>
                                <img src={lhdLinkTree} alt="pink linktree" className="d-flex linktreeLhd"/>
                            </div>
                            <div className="col-6 liveSite">
                                <h4>Live Site</h4>
                                <img src={lhdLiveLinkTree} alt="pink linktree" className="d-flex linktreeLhd"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row mocks">
                            <h4>Store Mock-Ups</h4>
                        </div>
                        <div className="row stores">
                            <div className="storeText d-inline-flex">
                            <h4 className="mockuptext">
                                Mock-ups
                            </h4>
                            <h4 className="livetext">
                                Live
                            </h4>
                            </div>
                            <div className="col-md-4 storedesign1">
                                <img src={mmjstore} alt="example mmj store website design" className="mockup thcstatic" />
                            </div>    
                            <div className="col-md-4 storedesign2">
                                <img src={cbdstore} alt="example cbd store website design" className="mockup cbdstatic" />
                            </div>
                                <div className="col-md-4">
                                <img src={cbdstorelive} alt="example cbd store website" className="mockup cbdlive" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Design;