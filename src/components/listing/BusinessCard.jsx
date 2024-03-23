import React from "react";
import { Link } from "react-router-dom";

const BusinessCard = ({ business }) => {
    return (
        <div
            className="col-xl-6 col-lg-6 col-md-6 listings-card"
            // style={{ flex: "1" }}
        >
            <div
                className="place-one__single"
                style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div className="place-one__single-img">
                    <div className="place-one__single-img-inner">
                        <img src={business.thumbnail} alt="" />
                    </div>
                    <div className="text-box">
                        <span>
                            {business.plan === "paid" ? "Premium" : "Free"}
                        </span>
                    </div>
                </div>

                <div
                    className="place-one__single-content"
                    style={{ flex: "1" }}
                >
                    <div className="top-content">
                        <h2>
                            <Link to={`/listings/${business._id}`}>
                                {business.business}
                            </Link>
                        </h2>

                        <div className="top-content-bottom">
                            <div className="location-box">
                                <div className="icon-box">
                                    <span className="fa fa-map-marker"></span>
                                </div>
                                <div className="text">
                                    <p>{business.address}</p>
                                </div>
                            </div>

                            {business.phone && (
                                <div className="number-box">
                                    <div className="icon">
                                        <span className="fa fa-clock"></span>
                                    </div>
                                    <div className="text">
                                        <a href="tel:123456789">
                                            {business.phone}
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* <div className="bottom-content">
                        <ul className="review-box">
                            <li>
                                <span className="fa fa-star"></span>
                            </li>
                            <li>
                                <span className="fa fa-star"></span>
                            </li>
                            <li>
                                <span className="fa fa-star"></span>
                            </li>
                            <li>
                                <span className="fa fa-star"></span>
                            </li>
                            <li>
                                <span className="icon-star-1"></span>
                            </li>
                        </ul>
                        <div className="count-box">
                            <p>(04)</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BusinessCard;
