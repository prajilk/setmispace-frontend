import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <>
                {/* Start Footer One */}
                <footer className="footer-one">
                    <div className="footer-one__top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="footer-one__top-inner">
                                        <div className="row">

                                            {/* Start Footer Widget Column */}
                                            <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                                <div className="footer-widget__column footer-widget__about">
                                                    <div className="footer-widget__about-logo">
                                                        <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl + "assets/images/resources/logo-1.png"} alt="" /></Link>
                                                    </div>

                                                    <ul className="footer-widget__about-contact-info">
                                                        {/* <li>
                                                            <div className="icon">
                                                                <span className="fa fa-clock"></span>
                                                            </div>
                                                            <div className="text">
                                                                <p>Open Hours of Government: <br /> Mon - Fri: 8.00 am. - 6.00 pm.</p>
                                                            </div>
                                                        </li> */}

                                                        <li>
                                                            <div className="icon">
                                                                <span className="fa fa-map-marker"></span>
                                                            </div>
                                                            <div className="text">
                                                                <p>Soubhagya Complex, Pallikunnu, Kannur - 670004</p>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="icon">
                                                                <span className="fa fa-phone rotate"></span>
                                                            </div>
                                                            <div className="text">
                                                                <p><a href="tel:123456789">000 000 00 00</a></p>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                    <div className="footer-widget__about-social-link">
                                                        <ul>
                                                            <li>
                                                                <a href="/">
                                                                    <span className="first icon-facebook-app-symbol"></span>
                                                                    <span className="second icon-facebook-app-symbol"></span>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="/">
                                                                    <span className="first icon-pinterest"></span>
                                                                    <span className="second icon-pinterest"></span>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="/">
                                                                    <span className="first icon-twitter"></span>
                                                                    <span className="second icon-twitter"></span>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="/">
                                                                    <span className="first icon-linkedin"></span>
                                                                    <span className="second icon-linkedin"></span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Footer Widget Column */}

                                            {/* Start Footer Widget Column */}
                                            <div className="col-xl-2 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                                                <div className="footer-widget__column footer-widget__services">
                                                    <h2 className="footer-widget__title">Services</h2>
                                                    <ul className="footer-widget__services-list">
                                                        <li className="footer-widget__services-list-item"><Link to={process.env.PUBLIC_URL + `/`}>Why choose us</Link></li>
                                                        <li className="footer-widget__services-list-item"><Link to={process.env.PUBLIC_URL + `/`}>Our solutions</Link></li>
                                                        <li className="footer-widget__services-list-item"><Link to={process.env.PUBLIC_URL + `/`}>Partners</Link></li>
                                                        <li className="footer-widget__services-list-item"><Link to={process.env.PUBLIC_URL + `/`}>Core values</Link></li>
                                                        <li className="footer-widget__services-list-item"><Link to={process.env.PUBLIC_URL + `/`}>Our projects</Link> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* End Footer Widget Column */}

                                            {/* Start Footer Widget Column */}
                                            <div className="col-xl-2 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.5s">
                                                <div className="footer-widget__column footer-widget__link">
                                                    <h2 className="footer-widget__title">Quick Link</h2>
                                                    <ul className="footer-widget__link-list">
                                                        <li className="footer-widget__link-list-item"><Link to={process.env.PUBLIC_URL + `/`}>Residents</Link></li>
                                                        <li className="footer-widget__link-list-item"><Link to={process.env.PUBLIC_URL + `/`}>Business</Link></li>
                                                        <li className="footer-widget__link-list-item"><Link to={process.env.PUBLIC_URL + `/`}>Online Service</Link></li>
                                                        <li className="footer-widget__link-list-item"><Link to={process.env.PUBLIC_URL + `/`}>Visiting</Link></li>
                                                        <li className="footer-widget__link-list-item"><Link to={process.env.PUBLIC_URL + `/`}>Employment</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* End Footer Widget Column */}

                                            {/* Start Footer Widget Column */}
                                            <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.7s">
                                                <div className="footer-widget__column footer-widget__map">
                                                    <h2 className="footer-widget__title">City Map</h2>
                                                    <div className="footer-widget__map-box">
                                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15616.868821763004!2d75.3700404!3d11.8899583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43d3e0b98e3ed%3A0xe97d9782d2748181!2sSoubhagya%20Complex!5e0!3m2!1sen!2sin!4v1708329080864!5m2!1sen!2sin" className="footer-widget-map__one" title='Map Location' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Footer Widget Column */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Start Footer One Bottom */}
                    <div className="footer-one__bottom clearfix">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="footer-one__bottom-inner text-center">
                                        <div className="footer-one__bottom-text">
                                            <p>Copyright © 2024 <Link to={process.env.PUBLIC_URL + `/`}>Setmispace.com</Link> All Rights Reserved.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Footer One Bottom */}
                </footer>
                {/* End Footer One */}
            </>
        )
    }
}