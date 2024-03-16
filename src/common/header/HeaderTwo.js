import React from 'react';
import { Link } from "react-router-dom";
import Nav from './Nav';
import SearchButton from './SearchButton';


export default class HeaderTwo extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <>
                <header className="main-header main-header-one main-header-one--two clearfix">
                    <div className="main-header-one__wrapper">
                        <div className="main-header-one__bottom">
                            <nav className="main-menu main-menu--1">
                                <div className="main-menu__wrapper">
                                    <div className="container">
                                        <div className="main-menu__wrapper-inner">
                                            <div className="main-header-one__bottom-left">
                                                <div className="logo">
                                                    <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl + "assets/images/resources/logo-1-tbg.png"} alt="" /></Link>
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