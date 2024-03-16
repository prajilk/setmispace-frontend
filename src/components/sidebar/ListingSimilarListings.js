import React from 'react';
import { Link } from 'react-router-dom';

export default class ListingSimilarListings extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <>
                <div className="listings-details-page__sidebar-single sidebar__post wow animated fadeInUp" data-wow-delay="0.3s">
                    <div className="title">
                        <h2>Similar Listings </h2>
                    </div>

                    <ul className="sidebar__post-list list-unstyled">
                        <li>
                            <div className="sidebar__post-image">
                                <img src={publicUrl + "assets/images/blog/lp-1-1.jpg"} alt="" />
                            </div>
                            <div className="sidebar__post-content">
                                <h3>
                                    <Link to={process.env.PUBLIC_URL + `/`}>Contrary to popular <br /> belief</Link>
                                </h3>
                                {/* <span className="sidebar__post-content-meta"><i className="icon-clock"></i> April 25, 2022</span> */}
                            </div>
                        </li>

                        <li>
                            <div className="sidebar__post-image">
                                <img src={publicUrl + "assets/images/blog/lp-1-2.jpg"} alt="" />
                            </div>
                            <div className="sidebar__post-content">
                                <h3><Link to={process.env.PUBLIC_URL + `/`}>All the Lorem Ipsum <br /> generators on</Link></h3>
                                {/* <span className="sidebar__post-content-meta"><i className="icon-clock"></i> April 25, 2022</span> */}
                            </div>
                        </li>

                        <li>
                            <div className="sidebar__post-image">
                                <img src={publicUrl + "assets/images/blog/lp-1-3.jpg"} alt="" />
                            </div>
                            <div className="sidebar__post-content">
                                <h3><Link to={process.env.PUBLIC_URL + `/`}>The standard chunk <br /> of Lorem Ipsum</Link></h3>
                                {/* <span className="sidebar__post-content-meta"><i className="icon-clock"></i> April 25, 2022</span> */}
                            </div>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}