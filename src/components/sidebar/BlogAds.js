import React from 'react';
import { Link } from 'react-router-dom';

export default class BlogAds extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <div className="sidebar__single sidebar__sign-up wow animated fadeInUp" data-wow-delay="0.5s">
                    <div className="sidebar__sign-up-box" style={{backgroundImage: 'url('+publicUrl+'assets/images/resources/sidebar__sign-up-bg.jpg)'}}>
                        <div className="sidebar__sign-up-box-inner text-center">
                            <p>Whant to be notified about new post and news ? Subscribe For a Newsletter.</p>
                            <div className="btn-box">
                                <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn">Sign up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}