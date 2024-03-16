import React from 'react';
import { Link } from 'react-router-dom';
import ListingLocationContacts from '../sidebar/ListingLocationContacts';
import ListingSimilarListings from '../sidebar/ListingSimilarListings';
import ListingTags from '../sidebar/ListingTags';
import CarouselFade from './Carousal';

export default class ListingDetails extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <>
                {/* Start Listings Details Page */}
                <section className="listings-details-page">
                    <div className="container">
                        <div className="row">
                            {/* Start Listings Details Page Content */}
                            <div className="col-xl-8 col-lg-7">
                                <div className="listings-details-page__content">
                                    {this.props.business?.plan === "paid" && <div className="listings-details-page__content-img1">
                                        <CarouselFade images={this.props.business?.gallery || []} />
                                    </div>}

                                    <div className="listings-details-page__content-text-box1">
                                        <h3>{this.props.business?.business}</h3>
                                        <p className="text1">{this.props.business?.description}</p>

                                        {this.props.business?.website && <div className="btn-box">
                                            <Link to={this.props.business?.website || publicUrl} className="thm-btn">Visit Website</Link>
                                        </div>}
                                    </div>

                                    {this.props.business?.plan === "paid" && <div className="listings-details-page__content-listing-features">
                                        <h3>Listing Features</h3>
                                        <ul>
                                            {this.props.features?.map((feature, i) => (
                                                <li key={i}>
                                                    <div className="inner">
                                                        <div className="icon">
                                                            <div>
                                                                <span className={feature.icon}></span>
                                                            </div>
                                                        </div>

                                                        <div className="text">
                                                            <div><span> {feature.label}</span></div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>}

                                </div>
                            </div>
                            {/* End Listings Details Page Content */}

                            {/* Start Listings Details Page Sidebar */}
                            <div className="col-xl-4 col-lg-5">
                                <div className="listings-details-page__sidebar">
                                    {/* <ListingWorkingHours /> */}
                                    <ListingLocationContacts business={this.props.business} />
                                    <ListingSimilarListings />
                                    <ListingTags tags={this.props.business?.tags || []} />
                                </div>
                            </div>
                            {/* End Listings Details Page Sidebar */}
                        </div>
                    </div>
                </section>
                {/* End Listings Details Page */}
            </>
        )
    }
}