import React from 'react';
import { Link } from 'react-router-dom';

export default class ListingWorkingHours extends React.Component {
    render(){
        return (
            <>
                <div className="listings-details-page__sidebar-single sidebar__working-hours wow animated fadeInUp" data-wow-delay="0.1s">
                    <div className="title">
                        <h2>Working Hours</h2>
                    </div>

                    <ul className="sidebar__working-hours-list">
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Saturday <span>Closed</span></Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Sunday <span>9 AM - 5 PM</span></Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Monday <span>9 AM - 5 PM</span></Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Tuesday <span>9 AM - 5 PM</span></Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Wednesday <span>9 AM - 5 PM</span></Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Thursday <span>9 AM - 5 PM</span></Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Friday <span>Closed</span></Link></li>
                    </ul>
                </div>
            </>
        )
    }
}