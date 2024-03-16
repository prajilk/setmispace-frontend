import React from 'react';
import { Link } from 'react-router-dom';

export default class ListingTwo extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($(".tabs-box").length) {
            $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
              e.preventDefault();
              var target = $($(this).attr("data-tab"));
        
              if ($(target).is(":visible")) {
                return false;
              } else {
                target
                  .parents(".tabs-box")
                  .find(".tab-buttons")
                  .find(".tab-btn")
                  .removeClass("active-btn");
                $(this).addClass("active-btn");
                target
                  .parents(".tabs-box")
                  .find(".tabs-content")
                  .find(".tab")
                  .fadeOut(0);
                target
                  .parents(".tabs-box")
                  .find(".tabs-content")
                  .find(".tab")
                  .removeClass("active-tab");
                $(target).fadeIn(300);
                $(target).addClass("active-tab");
              }
            });
        }

        $('select').niceSelect();

    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="listings_one_wrap listings_one_wrap--two">
                    <div className="container-full-width clearfix">
                        <div className="listings__one__content">
                            <div className="listings_one_content_left">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <form className="listings_one_content_left_form">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="input_box">
                                                        <input type="text" name="listing_name" placeholder="What are you looking for?" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="input_box">
                                                        <div className="select-box">
                                                            <select className="selectmenu wide">
                                                                <option selected="selected">All Categories</option>
                                                                <option>Shops</option>
                                                                <option>Hotels</option>
                                                                <option>Restaurants</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="input_box">
                                                        <div className="select-box">
                                                            <select className="selectmenu wide">
                                                                <option selected="selected">All Price Type</option>
                                                                <option>Default Sorting 1</option>
                                                                <option>Default Sorting 2</option>
                                                                <option>Default Sorting 3</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="input_box">
                                                        <div className="select-box">
                                                            <select className="selectmenu wide">
                                                                <option selected="selected">All Cities</option>
                                                                <option>Dhaka</option>
                                                                <option>New York</option>
                                                                <option>Khulna</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="filter_by_tags">
                                    <h3>Filter by Tags</h3>
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-4">
                                            <div className="single_tags_check__box">
                                                <input type="checkbox" name="free-parking" id="tag_1" />
                                                <label for="tag_1"><span></span>Free Parking</label>
                                            </div>
                                            <div className="single_tags_check__box">
                                                <input type="checkbox" name="friendly-workspace" id="tag_2" checked />
                                                <label for="tag_2"><span></span>Friendly workspace</label>
                                            </div>
                                            <div className="single_tags_check__box">
                                                <input type="checkbox" name="wireless-internet" id="tag_3" />
                                                <label for="tag_3"><span></span>Wireless Internet</label>
                                            </div>
                                            <div className="single_tags_check__box">
                                                <input type="checkbox" name="car-rent" id="tag_4" />
                                                <label for="tag_4"><span></span>Car Rent</label>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-4">
                                            <div className="single_tags_check__box">
                                                <input type="checkbox" name="wireless-internet Cards" id="tag_5" />
                                                <label for="tag_5"><span></span>Wireless Internet</label>
                                            </div>
                                            <div className="single_tags_check__box">
                                                <input type="checkbox" name="instant-book" id="tag_6" />
                                                <label for="tag_6"><span></span>Instant Book</label>
                                            </div>
                                            <div className="single_tags_check__box">
                                                <input type="checkbox" name="barbershop" id="tag_7" />
                                                <label for="tag_7"><span></span>Barbershop</label>
                                            </div>
                                            <div className="single_tags_check__box">
                                                <input type="checkbox" name="bed-&-breakfast" id="tag_8" />
                                                <label for="tag_8"><span></span>Bed & Breakfast</label>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-4">
                                            <div className="single_tags_check__box">
                                                <input type="checkbox" name="pool" id="tag_9" />
                                                <label for="tag_9"><span></span>Pool</label>
                                            </div>
                                            <div className="single_tags_check__box">
                                                <input type="checkbox" name="evening-entertainment" id="tag_10" />
                                                <label for="tag_10"><span></span>Evening entertainment</label>
                                            </div>
                                            <div className="single_tags_check__box">
                                                <input type="checkbox" name="suites" id="tag_11" />
                                                <label for="tag_11"><span></span>Suites</label>
                                            </div>
                                            <div className="single_tags_check__box">
                                                <input type="checkbox" name="tV-rooms" id="tag_12" />
                                                <label for="tag_12"><span></span>TV Rooms</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="listings_one_wrap-btn">
                                            <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn"><span className="icon-search"></span>Search</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="filter">
                                            <div className="filter_inner_content">
                                                <div className="left">
                                                    <div className="left_icon">
                                                        <a href="listings1.html" className="icon-pixels active"></a>
                                                        <a href="listings2.html" className="list-icon icon-list"></a>
                                                    </div>
                                                    <div className="left_text">
                                                        <h4>Over 85 Restaurants Found</h4>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <div className="shorting">
                                                        <div className="select-box">
                                                            <select className="selectmenu wide">
                                                                <option selected="selected">Short by latest</option>
                                                                <option>Short by latest</option>
                                                                <option>Short by latest</option>
                                                                <option>Short by latest</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <section className="listings_three-page one">
                                <div className="row">
                                    <div className="col-xl-12">
                                        {/* Start Place One Single */}
                                        <div className="place-one__single place-one__single--two">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="place-one__single-img">
                                                        <div className="place-one__single-img-inner">
                                                            <div className="icon-box">
                                                                <Link to={process.env.PUBLIC_URL + `/`}><span className="fa fa-heart"></span></Link>
                                                            </div>
                                                            <img src={publicUrl+"assets/images/resources/place-v1-img1.jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <span>Hotel Storn</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="place-one__single-content">
                                                        <div className="top-content">
                                                            <h2><Link to={process.env.PUBLIC_URL + `/`}>Wedding Off Service</Link></h2>
                                                            <p>Excepteur sint occaecat </p>

                                                            <div className="top-content-bottom">
                                                                <div className="location-box">
                                                                    <div className="icon-box">
                                                                        <span className="fa fa-map-marker"></span>
                                                                    </div>
                                                                    <div className="text">
                                                                        <p>London,Dhaka</p>
                                                                    </div>
                                                                </div>

                                                                <div className="number-box">
                                                                    <div className="icon">
                                                                        <span className="fa fa-clock"></span>
                                                                    </div>
                                                                    <div className="text">
                                                                        <a href="tel:123456789">+65556522222</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="facilities-box">
                                                            <div className="title">
                                                                <p> Facilities : </p>
                                                            </div>
                                                            <ul className="facilities-box__links">
                                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-wifi"></span></Link></li>
                                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-parking"></span></Link></li>
                                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-no-smoking"></span></Link></li>
                                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-love"></span></Link></li>
                                                            </ul>
                                                        </div>

                                                        <div className="bottom-content">
                                                            <ul className="review-box">
                                                                <li><span className="fa fa-star"></span></li>
                                                                <li><span className="fa fa-star"></span></li>
                                                                <li><span className="fa fa-star"></span></li>
                                                                <li><span className="fa fa-star"></span></li>
                                                                <li><span className="icon-star-1"></span></li>
                                                            </ul>
                                                            <div className="count-box">
                                                                <p>(04)</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Place One Single */}

                                        {/* Start Place One Single */}
                                        <div className="place-one__single place-one__single--two">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="place-one__single-img">
                                                        <div className="place-one__single-img-inner">
                                                            <div className="icon-box">
                                                                <Link to={process.env.PUBLIC_URL + `/`}><span className="fa fa-heart"></span></Link>
                                                            </div>
                                                            <img src={publicUrl+"assets/images/resources/place-v1-img2.jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <span>Bulding As</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="place-one__single-content">
                                                        <div className="top-content">
                                                            <h2><Link to={process.env.PUBLIC_URL + `/`}>Lisiting & Hotel Store </Link></h2>
                                                            <p>Excepteur sint occaecat </p>

                                                            <div className="top-content-bottom">
                                                                <div className="location-box">
                                                                    <div className="icon-box">
                                                                        <span className="fa fa-map-marker"></span>
                                                                    </div>
                                                                    <div className="text">
                                                                        <p>London,Dhaka</p>
                                                                    </div>
                                                                </div>

                                                                <div className="number-box">
                                                                    <div className="icon">
                                                                        <span className="fa fa-clock"></span>
                                                                    </div>
                                                                    <div className="text">
                                                                        <a href="tel:123456789">+65556522222</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="facilities-box">
                                                            <div className="title">
                                                                <p> Facilities : </p>
                                                            </div>
                                                            <ul className="facilities-box__links">
                                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-wifi"></span></Link></li>
                                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-parking"></span></Link></li>
                                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-no-smoking"></span></Link></li>
                                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-love"></span></Link></li>
                                                            </ul>
                                                        </div>

                                                        <div className="bottom-content">
                                                            <ul className="review-box">
                                                                <li><span className="fa fa-star"></span></li>
                                                                <li><span className="fa fa-star"></span></li>
                                                                <li><span className="fa fa-star"></span></li>
                                                                <li><span className="fa fa-star"></span></li>
                                                                <li><span className="icon-star-1"></span></li>
                                                            </ul>
                                                            <div className="count-box">
                                                                <p>(04)</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Place One Single */}

                                        {/* Start Place One Single */}
                                        <div className="place-one__single place-one__single--two">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="place-one__single-img">
                                                        <div className="place-one__single-img-inner">
                                                            <div className="icon-box">
                                                                <Link to={process.env.PUBLIC_URL + `/`}><span className="fa fa-heart"></span></Link>
                                                            </div>
                                                            <img src={publicUrl+"assets/images/resources/place-v1-img3.jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <span>Storn Car</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="place-one__single-content">
                                                        <div className="top-content">
                                                            <h2><Link to={process.env.PUBLIC_URL + `/`}>Vendor Hotel Car</Link></h2>
                                                            <p>Excepteur sint occaecat </p>

                                                            <div className="top-content-bottom">
                                                                <div className="location-box">
                                                                    <div className="icon-box">
                                                                        <span className="fa fa-map-marker"></span>
                                                                    </div>
                                                                    <div className="text">
                                                                        <p>London,Dhaka</p>
                                                                    </div>
                                                                </div>

                                                                <div className="number-box">
                                                                    <div className="icon">
                                                                        <span className="fa fa-clock"></span>
                                                                    </div>
                                                                    <div className="text">
                                                                        <a href="tel:123456789">+65556522222</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="facilities-box">
                                                            <div className="title">
                                                                <p> Facilities : </p>
                                                            </div>
                                                            <ul className="facilities-box__links">
                                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-wifi"></span></Link></li>
                                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-parking"></span></Link></li>
                                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-no-smoking"></span></Link></li>
                                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-love"></span></Link></li>
                                                            </ul>
                                                        </div>

                                                        <div className="bottom-content">
                                                            <ul className="review-box">
                                                                <li><span className="fa fa-star"></span></li>
                                                                <li><span className="fa fa-star"></span></li>
                                                                <li><span className="fa fa-star"></span></li>
                                                                <li><span className="fa fa-star"></span></li>
                                                                <li><span className="icon-star-1"></span></li>
                                                            </ul>
                                                            <div className="count-box">
                                                                <p>(04)</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Place One Single */}

                                        {/* Start Place One Single */}
                                        <div className="place-one__single place-one__single--two">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="place-one__single-img">
                                                        <div className="place-one__single-img-inner">
                                                            <div className="icon-box">
                                                                <Link to={process.env.PUBLIC_URL + `/`}><span className="fa fa-heart"></span></Link>
                                                            </div>
                                                            <img src={publicUrl+"assets/images/resources/place-v1-img4.jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <span>Camera Sin</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="place-one__single-content">
                                                        <div className="top-content">
                                                            <h2><Link to={process.env.PUBLIC_URL + `/`}>Marriott Classic Dinner</Link></h2>
                                                            <p>Excepteur sint occaecat </p>

                                                            <div className="top-content-bottom">
                                                                <div className="location-box">
                                                                    <div className="icon-box">
                                                                        <span className="fa fa-map-marker"></span>
                                                                    </div>
                                                                    <div className="text">
                                                                        <p>London,Dhaka</p>
                                                                    </div>
                                                                </div>

                                                                <div className="number-box">
                                                                    <div className="icon">
                                                                        <span className="fa fa-clock"></span>
                                                                    </div>
                                                                    <div className="text">
                                                                        <a href="tel:123456789">+65556522222</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="facilities-box">
                                                            <div className="title">
                                                                <p> Facilities : </p>
                                                            </div>
                                                            <ul className="facilities-box__links">
                                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-wifi"></span></Link></li>
                                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-parking"></span></Link></li>
                                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-no-smoking"></span></Link></li>
                                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-love"></span></Link></li>
                                                            </ul>
                                                        </div>

                                                        <div className="bottom-content">
                                                            <ul className="review-box">
                                                                <li><span className="fa fa-star"></span></li>
                                                                <li><span className="fa fa-star"></span></li>
                                                                <li><span className="fa fa-star"></span></li>
                                                                <li><span className="fa fa-star"></span></li>
                                                                <li><span className="icon-star-1"></span></li>
                                                            </ul>
                                                            <div className="count-box">
                                                                <p>(04)</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Place One Single */}

                                        {/* Start Place One Single */}
                                        <div className="place-one__single place-one__single--two">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="place-one__single-img">
                                                        <div className="place-one__single-img-inner">
                                                            <div className="icon-box">
                                                                <Link to={process.env.PUBLIC_URL + `/`}><span className="fa fa-heart"></span></Link>
                                                            </div>
                                                            <img src={publicUrl+"assets/images/resources/place-v1-img5.jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <span>Landon City</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="place-one__single-content">
                                                        <div className="top-content">
                                                            <h2><Link to={process.env.PUBLIC_URL + `/`}>Find What You Hotel</Link></h2>
                                                            <p>Excepteur sint occaecat </p>

                                                            <div className="top-content-bottom">
                                                                <div className="location-box">
                                                                    <div className="icon-box">
                                                                        <span className="fa fa-map-marker"></span>
                                                                    </div>
                                                                    <div className="text">
                                                                        <p>London,Dhaka</p>
                                                                    </div>
                                                                </div>

                                                                <div className="number-box">
                                                                    <div className="icon">
                                                                        <span className="fa fa-clock"></span>
                                                                    </div>
                                                                    <div className="text">
                                                                        <a href="tel:123456789">+65556522222</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="facilities-box">
                                                            <div className="title">
                                                                <p> Facilities : </p>
                                                            </div>
                                                            <ul className="facilities-box__links">
                                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-wifi"></span></Link></li>
                                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-parking"></span></Link></li>
                                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-no-smoking"></span></Link></li>
                                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-love"></span></Link></li>
                                                            </ul>
                                                        </div>

                                                        <div className="bottom-content">
                                                            <ul className="review-box">
                                                                <li><span className="fa fa-star"></span></li>
                                                                <li><span className="fa fa-star"></span></li>
                                                                <li><span className="fa fa-star"></span></li>
                                                                <li><span className="fa fa-star"></span></li>
                                                                <li><span className="icon-star-1"></span></li>
                                                            </ul>
                                                            <div className="count-box">
                                                                <p>(04)</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Place One Single */}

                                        {/* Start Place One Single */}
                                        <div className="place-one__single place-one__single--two">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="place-one__single-img">
                                                        <div className="place-one__single-img-inner">
                                                            <div className="icon-box">
                                                                <Link to={process.env.PUBLIC_URL + `/`}><span className="fa fa-heart"></span></Link>
                                                            </div>
                                                            <img src={publicUrl+"assets/images/resources/place-v1-img6.jpg"} alt="" />
                                                        </div>
                                                        <div className="text-box">
                                                            <span> Book Storn </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="place-one__single-content">
                                                        <div className="top-content">
                                                            <h2><Link to={process.env.PUBLIC_URL + `/`}>Lisiting Off Book</Link></h2>
                                                            <p>Excepteur sint occaecat </p>

                                                            <div className="top-content-bottom">
                                                                <div className="location-box">
                                                                    <div className="icon-box">
                                                                        <span className="fa fa-map-marker"></span>
                                                                    </div>
                                                                    <div className="text">
                                                                        <p>London,Dhaka</p>
                                                                    </div>
                                                                </div>

                                                                <div className="number-box">
                                                                    <div className="icon">
                                                                        <span className="fa fa-clock"></span>
                                                                    </div>
                                                                    <div className="text">
                                                                        <a href="tel:123456789">+65556522222</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="facilities-box">
                                                            <div className="title">
                                                                <p> Facilities : </p>
                                                            </div>
                                                            <ul className="facilities-box__links">
                                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-wifi"></span></Link></li>
                                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-parking"></span></Link></li>
                                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-no-smoking"></span></Link></li>
                                                                <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-love"></span></Link></li>
                                                            </ul>
                                                        </div>

                                                        <div className="bottom-content">
                                                            <ul className="review-box">
                                                                <li><span className="fa fa-star"></span></li>
                                                                <li><span className="fa fa-star"></span></li>
                                                                <li><span className="fa fa-star"></span></li>
                                                                <li><span className="fa fa-star"></span></li>
                                                                <li><span className="icon-star-1"></span></li>
                                                            </ul>
                                                            <div className="count-box">
                                                                <p>(04)</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Place One Single */}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12">
                                        <ul className="styled-pagination text-center clearfix">
                                            <li><Link to={process.env.PUBLIC_URL + `/`} className="active">1</Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/`}>2</Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/`}>3</Link></li>
                                            <li className="next"><Link to={process.env.PUBLIC_URL + `/`}><span className="fa fa-angle-right"></span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="listings__one__map">
                            <iframe
                                title="Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                                className="google-map" allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}