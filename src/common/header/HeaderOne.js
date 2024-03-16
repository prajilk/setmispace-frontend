import React from 'react';
import { Link } from "react-router-dom";
import Nav from './Nav';
import SearchButton from './SearchButton';

export default class HeaderOne extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <>
                <header className="main-header main-header-one clearfix">
                    <div className="main-header-one__wrapper">
                        <div className="main-header-one__top">
                            <div className="container">
                                <div className="main-header-one__top-inner">
                                    <div className="main-header-one__top-address">
                                        <ul>
                                            <li>
                                                <div className="icon"><span className="icon-pin"></span></div>
                                                <div className="text"><p>Pallikunnu, Kannur</p></div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="main-header-one__top-social-link">
                                        <ul>
                                            <li><a href="test.html"><i className="icon-facebook-app-symbol"></i></a></li>
                                            <li><a href="test.html"><i className="icon-pinterest"></i></a></li>
                                            <li><a href="test.html"><i className="icon-twitter"></i></a></li>
                                            <li><a href="test.html"><i className="icon-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="main-header-one__bottom">
                            <nav className="main-menu main-menu--1">
                                <div className="main-menu__wrapper">
                                    <div className="container">
                                        <div className="main-menu__wrapper-inner">
                                            <div className="main-header-one__bottom-left">
                                                <div className="logo">
                                                    <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl + "assets/images/resources/logo-1.png"} alt="" /></Link>
                                                </div>
                                            </div>

                                            <div className="main-header-one__bottom-right">
                                                <Nav />

                                                <div className="main-header-one__bottom-right-search">
                                                    <SearchButton />
                                                </div>

                                                {/* <div className="main-header-one__bottom-right-btn">
                                                    <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn">+ Add Listing </Link>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}