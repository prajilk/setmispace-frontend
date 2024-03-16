import React from 'react';
import { Link } from 'react-router-dom';

export default class AboutTwo extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="about-one about-one--two">
                    <div className="shape4"><img src={publicUrl+"assets/images/shapes/about-v1-shape4.png"} alt="#" /></div>
                    <div className="container">
                        <div className="row">
                            {/* Start About One Left */}
                            <div className="col-xl-6">
                                <div className="about-one__left">
                                    <div className="about-one__left-img">
                                        <div className="shape1 float-bob-y"></div>
                                        <div className="shape2 float-bob-y"></div>
                                        <div className="shape3 float-bob-y"></div>
                                        <img src={publicUrl+"assets/images/about/about-v1-img1.jpg"} alt="#" />
                                    </div>
                                </div>
                            </div>
                            {/* End About One Left */}

                            {/* Start About One Right */}
                            <div className="col-xl-6">
                                <div className="about-one__right">
                                    <div className="about-one__right-title">
                                        <h2>Why We”ar Best About.</h2>
                                    </div>

                                    <div className="about-one__right-text1">
                                        <p>Lorem Ipsum generators on the Internet tend to repeat predefined
                                            necessary making this the first true generator on...</p>
                                    </div>
                                    <div className="about-one__right-text2">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            veniam, quis nostrud exercitation ullamco laboris nisi
                                            ea commodo consequat.</p>
                                    </div>
                                    <div className="about-one__right-text3">
                                        <div className="about-one__right-text3-icon" style={{backgroundImage: 'url('+publicUrl+'assets/images/shapes/about-v1-shape5.png)'}}>
                                            <span className="icon-budget"></span>
                                        </div>
                                        <div className="about-one__right-text3-content">
                                            <h2>Budget Planing Business.</h2>
                                            <p>Lorem Ipsum generators on the Internet tend to repeat predefined. </p>
                                        </div>
                                    </div>
                                    <div className="about-one__right-text4">
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                            suffered alteration in some form, by injected humour, or randomised words which
                                            don't look even slightly believable. </p>
                                    </div>
                                    <div className="about-one__right-btn">
                                        <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn">About More</Link>
                                    </div>
                                </div>
                            </div>
                            {/* End About One Right */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}