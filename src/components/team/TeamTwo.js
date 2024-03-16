import React from 'react';
import { Link } from 'react-router-dom';

export default class TeamTwo extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <>
                <section className="team-one team-one--two">
                    <div className="team-one--two__bg" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/backgrounds/team-v2-bg.jpg)' }}></div>
                    <div className="container">
                        <div className="sec-title text-center">
                            <h2 className="sec-title__title">Team Meambar Meet</h2>
                            <p className="sec-title__text">Excepteur s occaecat cupidatat proident sunt</p>
                        </div>
                        <div className="row">
                            {/* Start Team One Single */}
                            <div className="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="team-one__single">
                                    <div className="team-one__single-img">
                                        <img src={publicUrl + "assets/images/team/team-v1-img1.jpg"} alt="#" />
                                        <div className="social-link">
                                            <ul>
                                                <li><a className="fb" href="/"><span className="icon-facebook-app-symbol"></span></a></li>
                                                <li><a className="ims" href="/"><span className="icon-instagram"></span></a></li>
                                                <li><a className="tw" href="/"><span className="icon-twitter"></span></a></li>
                                                <li><a className="gp" href="/"><span className="icon-google-plus"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team-one__content text-center">
                                        <h2><Link to={process.env.PUBLIC_URL + `/team-details`}>Marrio Boura</Link></h2>
                                        <span>Founder</span>
                                    </div>
                                </div>
                            </div>
                            {/* End Team One Single */}

                            {/* Start Team One Single */}
                            <div className="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp" data-wow-delay="0.2s">
                                <div className="team-one__single">
                                    <div className="team-one__single-img">
                                        <img src={publicUrl + "assets/images/team/team-v1-img2.jpg"} alt="#" />
                                        <div className="social-link">
                                            <ul>
                                                <li><a className="fb" href="/"><span className="icon-facebook-app-symbol"></span></a></li>
                                                <li><a className="ims" href="/"><span className="icon-instagram"></span></a></li>
                                                <li><a className="tw" href="/"><span className="icon-twitter"></span></a></li>
                                                <li><a className="gp" href="/"><span className="icon-google-plus"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team-one__content text-center">
                                        <h2><Link to={process.env.PUBLIC_URL + `/team-details`}>Jhon Smith</Link></h2>
                                        <span>Founder</span>
                                    </div>
                                </div>
                            </div>
                            {/* End Team One Single */}

                            {/* Start Team One Single */}
                            <div className="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="team-one__single">
                                    <div className="team-one__single-img">
                                        <img src={publicUrl + "assets/images/team/team-v1-img3.jpg"} alt="#" />
                                        <div className="social-link">
                                            <ul>
                                                <li><a className="fb" href="/"><span className="icon-facebook-app-symbol"></span></a></li>
                                                <li><a className="ims" href="/"><span className="icon-instagram"></span></a></li>
                                                <li><a className="tw" href="/"><span className="icon-twitter"></span></a></li>
                                                <li><a className="gp" href="/"><span className="icon-google-plus"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team-one__content text-center">
                                        <h2><Link to={process.env.PUBLIC_URL + `/team-details`}>David Cooper</Link></h2>
                                        <span>Founder</span>
                                    </div>
                                </div>
                            </div>
                            {/* End Team One Single */}

                            {/* Start Team One Single */}
                            <div className="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp" data-wow-delay="0.4s">
                                <div className="team-one__single">
                                    <div className="team-one__single-img">
                                        <img src={publicUrl + "assets/images/team/team-v1-img4.jpg"} alt="#" />
                                        <div className="social-link">
                                            <ul>
                                                <li><a className="fb" href="/"><span className="icon-facebook-app-symbol"></span></a></li>
                                                <li><a className="ims" href="/"><span className="icon-instagram"></span></a></li>
                                                <li><a className="tw" href="/"><span className="icon-twitter"></span></a></li>
                                                <li><a className="gp" href="/"><span className="icon-google-plus"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team-one__content text-center">
                                        <h2><Link to={process.env.PUBLIC_URL + `/team-details`}>Dani Smith</Link></h2>
                                        <span>Founder</span>
                                    </div>
                                </div>
                            </div>
                            {/* End Team One Single */}
                        </div>
                    </div>
                </section>
                {/* Start Team One */}
            </>
        )
    }
}