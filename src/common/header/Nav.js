import React from 'react';
import { Link } from "react-router-dom";
import MobileMenu from './MobileMenu';

const Nav = () => {
    return (
        <>
            <div className="main-menu__inner">
                <MobileMenu />
                <ul className="main-menu__list">
                    <li><Link to={process.env.PUBLIC_URL + `/`} className='hover:!text-[#FE724A] !p-0'>Home</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/about`} className='hover:!text-[#FE724A] !p-0'>About Us</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/listings`} className='hover:!text-[#FE724A] !p-0'>Listings</Link></li>
                    {/* <li className="dropdown">
                        <Link to={process.env.PUBLIC_URL + `#`} className='hover:!text-[#FE724A] !p-0'>Business Listings</Link>
                        <ul>
                            <li><Link to={process.env.PUBLIC_URL + `/listings1`}>Listings One</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/listings2`}>Listings Two</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/listings3`}>Listings Three</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/listings-details`}>Listings Details</Link></li>
                        </ul>
                    </li> */}
                    {/* <li className="dropdown">
                        <Link to={process.env.PUBLIC_URL + `#`}>Pages</Link>
                        <ul>
                            <li><Link to={process.env.PUBLIC_URL + `/categories`}>Categories</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/visited`}>visited</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/team`}>Team</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/team-details`}>Team Details</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/error`}>Error</Link></li>
                        </ul>
                    </li> */}
                    {/* <li className="dropdown">
                        <Link to={process.env.PUBLIC_URL + `#`}>Blog</Link>
                        <ul>
                            <li><Link to={process.env.PUBLIC_URL + `/blog`}>Blog</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/blog-details`}>Blog Details</Link></li>
                        </ul>
                    </li> */}
                    <li><Link to={process.env.PUBLIC_URL + `/contact`} className='hover:!text-[#FE724A] !p-0'>Contact Us</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Nav;


