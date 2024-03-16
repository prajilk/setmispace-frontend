import React from 'react';
import { Link } from 'react-router-dom';

export default class BlogCategory extends React.Component {
    render(){
        return (
            <>
                <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                    <div className="title">
                        <h2>Categories</h2>
                    </div>

                    <ul className="sidebar__category-list list-unstyled">
                        <li className="active"><Link to={process.env.PUBLIC_URL + `/`}>Standard <span>03</span></Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Gallery <span>02</span></Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Quotes <span>05</span> </Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Video <span>01</span></Link></li>
                    </ul>
                </div>
            </>
        )
    }
}