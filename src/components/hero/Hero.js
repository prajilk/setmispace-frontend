import React from 'react';
import { Link } from 'react-router-dom';

export default class Hero extends React.Component {
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
    render() {
        return (
            <>

                {/* Start Banner One */}
                <section className="banner-one">
                    <div className="banner-one__inner">
                        <div className="slider-bg-slide" style={{
                            background: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/banner-v1-bg1.jpg)`
                        }}></div>
                        <div className="slider-bg-slide-overly"></div>
                        <div style={{ maxWidth: "56rem", margin: "0 auto" }} className='container'>
                            <div className="banner-one__content text-center">
                                <div className="title">
                                    <h2>Get Connected to KANNUR'S BUSINESS NETWORK</h2>
                                </div>
                                <div className="text">
                                    <p>We help you get connected with various business</p>
                                </div>


                                {/* Start Banner One Tab Box */}
                                <div className="banner-one__tab-box">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="banner-one__tab tabs-box">
                                                <div className="banner-one__tab-button">
                                                    <ul className="tab-buttons clearfix">
                                                        <li data-tab="#places" className="tab-btn active-btn">
                                                            <h4>Real Estate</h4>
                                                        </li>
                                                        <li data-tab="#events" className="tab-btn">
                                                            <h4>Events</h4>
                                                        </li>
                                                        <li data-tab="#restaurants" className="tab-btn">
                                                            <h4>Business</h4>
                                                        </li>
                                                        <li data-tab="#hotels" className="tab-btn">
                                                            <h4>Tourism</h4>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="tabs-content">

                                                    {/* Start Tab */}
                                                    <div className="tab active-tab" id="places">
                                                        <div className="banner-one__tab-content-item">
                                                            <div className="banner-one__tab-content-places">
                                                                <div className="row">
                                                                    <div className="col-xl-12">
                                                                        <div className="banner-one__tab-content-places-form">
                                                                            <form action="#" className="comment-one__form contact-form-validated" noValidate="noValidate">
                                                                                <ul>
                                                                                    <li>
                                                                                        <div className="comment-form__input-box">
                                                                                            <div className="icon">
                                                                                                <span className="fas fa-keyboard"></span>
                                                                                            </div>
                                                                                            <input type="text" placeholder="What are you looking for?" name="name" />
                                                                                        </div>
                                                                                    </li>

                                                                                    <li>
                                                                                        <div className="comment-form__input-box">
                                                                                            <div className="icon">
                                                                                                <span className="icon-pin"></span>
                                                                                            </div>
                                                                                            <input type="text" placeholder="Location" name="name" />
                                                                                        </div>
                                                                                    </li>

                                                                                    <li>
                                                                                        <div
                                                                                            className="comment-form__input-box clearfix">
                                                                                            <div className="icon">
                                                                                                <span className="icon-list"></span>
                                                                                            </div>
                                                                                            <div className="select-box">
                                                                                                <select className="selectmenu wide">
                                                                                                    <option defaultValue="selected">
                                                                                                        All Categories</option>
                                                                                                    <option>Shops
                                                                                                    </option>
                                                                                                    <option>Hotels
                                                                                                    </option>
                                                                                                    <option>Restaurants
                                                                                                    </option>
                                                                                                </select>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>

                                                                                    <li>
                                                                                        <button className="thm-btn comment-form__btn bg-[#0c83c2]" type="submit" data-loading-text="Please wait...">Search
                                                                                            <span className="icon-search ms-1"></span>
                                                                                        </button>
                                                                                    </li>
                                                                                </ul>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* End Tab */}

                                                    {/* Start Tab */}
                                                    <div className="tab" id="events">
                                                        <div className="banner-one__tab-content-item">
                                                            <div className="banner-one__tab-content-events">
                                                                <div className="row">
                                                                    <div className="col-xl-12">
                                                                        <div className="banner-one__tab-content-places-form">
                                                                            <form action="#" className="comment-one__form contact-form-validated" noValidate="noValidate">
                                                                                <ul>
                                                                                    <li>
                                                                                        <div className="comment-form__input-box">
                                                                                            <div className="icon">
                                                                                                <span className="fas fa-handshake"></span>
                                                                                            </div>
                                                                                            <input type="text" placeholder="Event Name or Place" name="name" />
                                                                                        </div>
                                                                                    </li>

                                                                                    <li>
                                                                                        <div
                                                                                            className="comment-form__input-box clearfix">
                                                                                            <div className="icon">
                                                                                                <span className="icon-list"></span>
                                                                                            </div>
                                                                                            <div className="select-box">
                                                                                                <select className="selectmenu wide">
                                                                                                    <option defaultValue="selected">
                                                                                                        All Cities</option>
                                                                                                    <option>New York
                                                                                                    </option>
                                                                                                    <option>Dhaka
                                                                                                    </option>
                                                                                                    <option>Paris
                                                                                                    </option>
                                                                                                </select>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>

                                                                                    <li>
                                                                                        <div className="comment-form__input-box">
                                                                                            <div className="icon">
                                                                                                <span className="icon-calendar"></span>
                                                                                            </div>
                                                                                            <input type="text" name="form_subject" defaultValue="" placeholder="Select Date" id="datepicker" />
                                                                                        </div>
                                                                                    </li>

                                                                                    <li>
                                                                                        <button className="thm-btn comment-form__btn" type="submit" data-loading-text="Please wait...">Search
                                                                                            <span className="icon-search"></span>
                                                                                        </button>
                                                                                    </li>
                                                                                </ul>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* End Tab */}

                                                    {/* Start Tab */}
                                                    <div className="tab" id="restaurants">
                                                        <div className="banner-one__tab-content-item">
                                                            <div className="banner-one__tab-content-restaurants">
                                                                <div className="row">
                                                                    <div className="col-xl-12">
                                                                        <div className="banner-one__tab-content-places-form">
                                                                            <form action="#" className="comment-one__form contact-form-validated" noValidate="noValidate">
                                                                                <ul>
                                                                                    <li>
                                                                                        <div className="comment-form__input-box">
                                                                                            <div className="icon">
                                                                                                <span className="icon-big-cheeseburger"></span>
                                                                                            </div>
                                                                                            <input type="text" placeholder="Restaurant Name" name="name" />
                                                                                        </div>
                                                                                    </li>

                                                                                    <li>
                                                                                        <div className="comment-form__input-box">
                                                                                            <div className="icon">
                                                                                                <span className="icon-calendar"></span>
                                                                                            </div>
                                                                                            <input type="text" name="form_subject" defaultValue="" placeholder="Select Date" id="datepicker2" />
                                                                                        </div>
                                                                                    </li>

                                                                                    <li>
                                                                                        <div className="comment-form__input-box">
                                                                                            <div className="icon">
                                                                                                <span className="icon-user"></span>
                                                                                            </div>
                                                                                            <input type="number" placeholder="Persons" name="name" />
                                                                                        </div>
                                                                                    </li>

                                                                                    <li>
                                                                                        <button className="thm-btn comment-form__btn" type="submit" data-loading-text="Please wait...">Search
                                                                                            <span className="icon-search"></span>
                                                                                        </button>
                                                                                    </li>
                                                                                </ul>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* End Tab */}

                                                    {/* Start Tab */}
                                                    <div className="tab" id="hotels">
                                                        <div className="banner-one__tab-content-item">
                                                            <div className="banner-one__tab-content-hotels">
                                                                <div className="row">
                                                                    <div className="col-xl-12">
                                                                        <div className="banner-one__tab-content-places-form">
                                                                            <form action="assets/inc/sendemail.php"
                                                                                className="comment-one__form contact-form-validated"
                                                                                noValidate="noValidate">
                                                                                <ul>
                                                                                    <li>
                                                                                        <div className="comment-form__input-box">
                                                                                            <div className="icon">
                                                                                                <span className="icon-big-cheeseburger"></span>
                                                                                            </div>
                                                                                            <input type="text" placeholder="Hotel Name" name="name" />
                                                                                        </div>
                                                                                    </li>

                                                                                    <li>
                                                                                        <div className="comment-form__input-box">
                                                                                            <div className="icon">
                                                                                                <span className="icon-user"></span>
                                                                                            </div>
                                                                                            <input type="number" placeholder="Persons" name="name" />
                                                                                        </div>
                                                                                    </li>

                                                                                    <li>
                                                                                        <div className="comment-form__input-box">
                                                                                            <div className="icon">
                                                                                                <span className="icon-calendar"></span>
                                                                                            </div>
                                                                                            <input type="text" name="form_subject" defaultValue="" placeholder="Select Date" id="datepicker-inline" />
                                                                                        </div>
                                                                                    </li>


                                                                                    <li>
                                                                                        <button className="thm-btn comment-form__btn" type="submit">Search
                                                                                            <span className="icon-search"></span>
                                                                                        </button>
                                                                                    </li>
                                                                                </ul>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* End Tab */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Banner One Tab Box Tab Box */}


                                <div className="banner-one__categories">
                                    {/* <div className="title">
                                        <h4>Just looking around ? Use quick search by category :</h4>
                                    </div> */}
                                    <ul className="banner-one__categories-list">

                                        <li className="banner-one__categories-list-item">
                                            <div className="inner">
                                                <div className="icon">
                                                    <img src={process.env.PUBLIC_URL + '/assets/images/resources/restaurant_normal.png'} width={40} alt='Restaurant Icon' />
                                                </div>
                                                <p><Link to={process.env.PUBLIC_URL + `/`}>Restaurants</Link></p>
                                            </div>
                                        </li>

                                        <li className="banner-one__categories-list-item">
                                            <div className="inner">
                                                <div className="icon">
                                                    <img src={process.env.PUBLIC_URL + '/assets/images/resources/shops_normal.png'} width={40} alt='Shop icon' />
                                                </div>
                                                <p><Link to={process.env.PUBLIC_URL + `/`}>Shops</Link></p>
                                            </div>
                                        </li>

                                        <li className="banner-one__categories-list-item">
                                            <div className="inner">
                                                <div className="icon">
                                                    <img src={process.env.PUBLIC_URL + '/assets/images/resources/tourism_normal.png'} width={40} alt='Tourism icon' />
                                                </div>
                                                <p><Link to={process.env.PUBLIC_URL + `/`}>Tour Spots</Link></p>
                                            </div>
                                        </li>

                                        <li className="banner-one__categories-list-item">
                                            <div className="inner">
                                                <div className="icon">
                                                    <img src={process.env.PUBLIC_URL + '/assets/images/resources/hotel_normal.png'} width={40} alt='Hotel icon' />
                                                </div>
                                                <p><Link to={process.env.PUBLIC_URL + `/`}>Hotels</Link></p>
                                            </div>
                                        </li>


                                        <li className="banner-one__categories-list-item">
                                            <div className="inner">
                                                <div className="icon">
                                                    <img src={process.env.PUBLIC_URL + '/assets/images/resources/realestate_normal.png'} width={40} alt='Real Estate icon' />
                                                </div>
                                                <p><Link to={process.env.PUBLIC_URL + `/`}>Real Estate</Link></p>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Banner One */}
            </>
        )
    }
}