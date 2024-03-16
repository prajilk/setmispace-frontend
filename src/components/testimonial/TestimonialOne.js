import React from 'react';

export default class TestimonialOne extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($(".testimonial-one__carousel").length) {
            $(".testimonial-one__carousel").owlCarousel({
                loop: true,
                autoplay: false,
                margin: 30,
                nav: false,
                dots: false,
                smartSpeed: 500,
                autoplayTimeout: 10000,
                navText: ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 2
                    },
                    1200: {
                        items: 2
                    }
                }
            });
        }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                {/* Start Testimonial One */}
                <section className="testimonial-one">
                    <div className="testimonial-one__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/testimonial-v1-bg.jpg)'}}></div>
                    <div className="container">
                        <div className="sec-title text-center">
                            <h2 className="sec-title__title">Our Testimonial Say</h2>
                            <p className="sec-title__text">Excepteur s occaecat cupidatat proident sunt</p>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="owl-carousel owl-theme thm-owl__carousel testimonial-one__carousel">

                                    {/* Start Testimonial One Single */}
                                    <div className="testimonial-one__single">
                                        <div className="testimonial-one__single-quote-icon">
                                            <span className="fa fa-quote-left"></span>
                                        </div>
                                        <div className="testimonial-one__single-top">
                                            <div className="img-box">
                                                <img src={publicUrl+"assets/images/testimonial/testimonial-v1-img1.jpg"} alt="" />
                                            </div>
                                            <div className="text-box">
                                                <h2>Morand Daro</h2>
                                                <p>Founder</p>
                                            </div>
                                        </div>
                                        <div className="testimonial-one__single-text">
                                            <p>There are many variations of passages of Lorem Ipsum available,
                                                have suffered alteration in some form, by injected humour, or
                                                which don't look even slightly believable. If you are going to
                                                Ipsum, you need to be sure there isn't embarrassing.. </p>
                                        </div>
                                        <ul className="review-box">
                                            <li><span className="fa fa-star"></span></li>
                                            <li><span className="fa fa-star"></span></li>
                                            <li><span className="fa fa-star"></span></li>
                                            <li><span className="fa fa-star"></span></li>
                                            <li><span className="fa fa-star"></span></li>
                                        </ul>
                                    </div>
                                    {/* End Testimonial One Single */}

                                    {/* Start Testimonial One Single */}
                                    <div className="testimonial-one__single">
                                        <div className="testimonial-one__single-quote-icon">
                                            <span className="fa fa-quote-left"></span>
                                        </div>
                                        <div className="testimonial-one__single-top">
                                            <div className="img-box">
                                                <img src={publicUrl+"assets/images/testimonial/testimonial-v1-img2.jpg"} alt="" />
                                            </div>
                                            <div className="text-box">
                                                <h2>Rubel Robi</h2>
                                                <p>Seo</p>
                                            </div>
                                        </div>
                                        <div className="testimonial-one__single-text">
                                            <p>There are many variations of passages of Lorem Ipsum available,
                                                have suffered alteration in some form, by injected humour, or
                                                which don't look even slightly believable. If you are going to
                                                Ipsum, you need to be sure there isn't embarrassing.. </p>
                                        </div>
                                        <ul className="review-box">
                                            <li><span className="fa fa-star"></span></li>
                                            <li><span className="fa fa-star"></span></li>
                                            <li><span className="fa fa-star"></span></li>
                                            <li><span className="fa fa-star"></span></li>
                                            <li><span className="fa fa-star"></span></li>
                                        </ul>
                                    </div>
                                    {/* End Testimonial One Single */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Testimonial One */}
            </>
        )
    }
}