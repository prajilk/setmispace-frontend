import React from 'react';
import { Link } from 'react-router-dom';

export default class FeatureTwo extends React.Component {
    render(){
        return (
            <>
                {/* Start Features One */}
                <section className="features-one features-one--two">
                    <div className="auto-container">
                        <div className="features-one--two__inner">
                            <div className="container">
                                <div className="sec-title text-center">
                                    <h2 className="sec-title__title">Best Wedding Vendors</h2>
                                    <p className="sec-title__text">Excepteur s occaecat cupidatat proident sunt</p>
                                </div>
                                <div className="row">
                                    {/* Start Features One Single */}
                                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1000ms">
                                        <div className="features-one__single text-center">
                                            <div className="features-one__single-icon">
                                                <span className="icon-budget"></span>
                                            </div>
                                            <div className="features-one__single-title">
                                                <h2><Link to={process.env.PUBLIC_URL + `/`}>Budget Planing</Link></h2>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Features One Single */}

                                    {/* Start Features One Single */}
                                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1000ms">
                                        <div className="features-one__single text-center">
                                            <div className="features-one__single-icon">
                                                <span className="icon-employee"></span>
                                            </div>
                                            <div className="features-one__single-title">
                                                <h2><Link to={process.env.PUBLIC_URL + `/`}>Vendor Manger</Link></h2>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Features One Single */}

                                    {/* Start Features One Single */}
                                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1000ms">
                                        <div className="features-one__single text-center">
                                            <div className="features-one__single-icon">
                                                <span className="icon-checklist"></span>
                                            </div>
                                            <div className="features-one__single-title">
                                                <h2><Link to={process.env.PUBLIC_URL + `/`}>Check List</Link></h2>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Features One Single */}

                                    {/* Start Features One Single */}
                                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1000ms">
                                        <div className="features-one__single text-center">
                                            <div className="features-one__single-icon">
                                                <span className="icon-hotels"></span>
                                            </div>
                                            <div className="features-one__single-title">
                                                <h2><Link to={process.env.PUBLIC_URL + `/`}>Lisiting Hotel </Link></h2>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Features One Single */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Features One */}
            </>
        )
    }
}