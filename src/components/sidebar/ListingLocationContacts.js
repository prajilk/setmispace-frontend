import React from 'react';
import { Link } from 'react-router-dom';

export default class ListingLocationContacts extends React.Component {
    render() {
        return (
            <>
                <div className="listings-details-page__sidebar-single sidebar__location-contacts wow animated fadeInUp" data-wow-delay="0.2s">
                    <div className="title">
                        <h2>Location / Contacts</h2>
                    </div>

                    {this.props.business?.plan === "paid" && <div className="sidebar__location-contacts-google-map">
                        <iframe
                            title="Map"
                            src={this.props.business?.mapLink}
                            className="sidebar__location-contacts-map" allowFullScreen>
                        </iframe>
                    </div>}

                    <ul className="sidebar__location-contacts-list">
                        <li><p className='flex items-center gap-1'><i className="icon-pin pt-1"></i><span>Address:</span> {this.props.business?.address}</p></li>

                        {this.props.business?.phone && (
                            <li>
                                <p className='flex items-center gap-1'><i className="icon-phone-call pt-1"></i> <span> Phone :</span> <a href={`tel:${this.props.business?.phone}`}>{this.props.business?.phone}</a></p>
                            </li>
                        )}
                        {this.props.business?.mail && (
                            <li>
                                <p className='flex items-center gap-1'><i className="icon-email pt-1"></i> <span> Mail :</span> <a href={`mailto:${this.props.business?.mail}`}>{this.props.business?.mail}</a></p>
                            </li>
                        )}
                        {this.props.business?.website && (
                            <li>
                                <p className='flex items-center gap-1'><i className="icon-email pt-1"></i> <span> Website:</span> <a href={this.props.business?.website}>{this.props.business?.business}</a></p>
                            </li>
                        )}
                    </ul>

                    <ul className="sidebar__location-contacts-social-links">
                        {this.props.business?.socials.map((social, i) => (
                            social.platform === "facebook" ?
                                <li key={i}><Link to={social.url}><span className="icon-facebook-app-symbol"></span></Link></li> :
                                <li key={i}><Link to={social.url}><span className={`icon-${social.platform}`}></span></Link></li>
                        ))}
                    </ul>
                </div>
            </>
        )
    }
}