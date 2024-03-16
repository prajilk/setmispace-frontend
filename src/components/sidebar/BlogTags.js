import React from 'react';
import { Link } from 'react-router-dom';

export default class BlogTags extends React.Component {
    render(){
        return (
            <>
                <div className="sidebar__single sidebar__tags wow animated fadeInUp" data-wow-delay="0.4s">
                    <div className="title">
                        <h2>Tags</h2>
                    </div>
                    <div className="sidebar__tags-list">
                        <Link to={process.env.PUBLIC_URL + `/`}>Restaurants</Link>
                        <Link to={process.env.PUBLIC_URL + `/`}>Trending</Link>
                        <Link to={process.env.PUBLIC_URL + `/`}>Shops</Link>
                        <Link to={process.env.PUBLIC_URL + `/`}>Tips</Link>
                        <Link to={process.env.PUBLIC_URL + `/`}>Hotel</Link>
                        <Link to={process.env.PUBLIC_URL + `/`}>Parking</Link>
                        <Link to={process.env.PUBLIC_URL + `/`}>Room</Link>
                        <Link to={process.env.PUBLIC_URL + `/`}>Food</Link>
                    </div>
                </div>
            </>
        )
    }
}