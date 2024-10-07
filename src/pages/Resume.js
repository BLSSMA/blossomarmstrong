import React from "react";
import "./Resume.css";

export default function Resume(props){
    return (<div className="Resume">
                <div className="grid">
                    <div className="row">
                        <div className="leftSide col-6">
                                <div className="experience">
                                <div>{props.business}</div>
                                <div>{props.location}</div>
                                <div>{props.position}</div>
                                <div>{props.time}</div>
                        <ul>
                        <li>
                            Hiring/firing/interviewing and maintaining staff  
                        </li>
                        <li>
                            Large cash and check money handling and tracking 
                        </li>
                        <li>
                            Creating SOP for shop and updating as needed
                        </li>
                        <li>
                            Maintaining store legality with OCP state compliance
                        </li>
                        <li>
                            Ensuring staff is educated and functioning properly
                        </li>
                        <li>
                            Handling communication with store vendors
                        </li>
                        <li>
                            Creating/counting/adding/removing inventory and vendors
                        </li>
                        <li>
                            Creating pricing and deals for all store products
                        </li>
                        <li>
                            Making menu displays that work well for staff and customers
                        </li>
                    </ul>
                    </div>
                        <div className="experience">
                            <div className="experienceTitle">
                                <div className="business">YOUR GREEN THUMB CAREGIVERS LLC</div>
                                <div className="location">99 STATE RD UNIT 2 KITTERY, ME 03904</div>
                                <div className="position">MANAGER</div>
                                <div className="time">FEBRUARY 2019- JANUARY 2020</div>
                            </div>
                            <ul>
                                <li>
                                    Schedule out daily tasks
                                </li>
                                <li>
                                    Manage time, tasks, and staff
                                </li>
                                <li>
                                    Producing medicated edibles
                                </li>
                                <li>
                                    Weighing, portioning, and selling medical marajuana
                                </li>
                                <li>
                                    Making purchasing decisions and handling money
                                </li>
                                <li>
                                    Create procedures and structure for staff
                                </li>
                                <li>
                                    Educating customers on product
                                </li>
                            </ul>
                        </div>
                        <div className="experience">
                            <div className="experienceTitle">
                                <div className="business">KITTERY DISCOUNT SMOKE SHOP</div>
                                <div className="location">99 STATE RD UNIT 1 KITTERY, ME 03904</div>
                                <div className="position">MANAGER</div>
                                <div className="time">JANUARY 2017 - FEBRUARY 2019</div>
                            </div>
                            <ul>
                                <li>
                                    Purchasing and pricing out inventory
                                </li>
                                <li>
                                    Helping customers
                                </li>
                                <li>
                                    Customer education on products
                                </li>
                                <li>
                                    Restocking and inventory management 
                                </li>
                            </ul>
                        </div>    
                    </div>

            <div className="rightSide col-6">
                        <div className="additionalExperience">
                            Additional experience
                            <ul>
                                <li>
                                    identifying areas in need of improvement and learning on the fly to optimize effciency
                                </li>
                                <li>
                                    Creating and maintaining personal website on Shopify for 2+ years
                                </li>
                                <li>
                                    Creating products with my own art to sell on Shopify via dropshipping
                                </li>
                                <li>
                                    Designing custom art and translating ideas to sellable sticker formats
                                </li>
                            </ul>
                        </div>
                        <div className="Education">
                            SheCodes, Online 2024 - present
                            Certificates earned:
                            <ul>
                                <li>
                                    Intro to coding
                                </li>
                                <li>
                                    Intro to webdevelopment
                                </li>
                                <li>
                                    Web development
                                </li>
                                <li>
                                    Advanced web development
                                </li>
                                <li>
                                    Introduction to AI
                                </li>
                                <li>
                                    Responsive web development
                                </li>
                            </ul>
                        </div>
                        <div className="Education">
                            RAYMOND HIGH SCHOOL,
                            RAYMOND, NH
                            2009- 2013
                            <ul>
                                <li>
                                    High School Diploma
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}