import React from "react";

export default function FeaturedWorks(){

    return(
        <div className="FeaturedWorks">
            <div className="grid">
                <div className="row">
                    <div className="col-3">
                        <img src="/images.featuredProjectOne.jpeg" alt="screenshot of webpage"/>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            Project Feature One
                        </div>
                        <div className="row">
                            2024 React
                        </div>
                        <div className="row">
                            a paragraph explaining the first featured product will go here
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}