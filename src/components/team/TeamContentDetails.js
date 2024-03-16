import React from 'react';

export default class TeamContentDetails extends React.Component {
    componentDidMount() {

        const $ = window.$;

        var tiltBlock = $('.js-tilt');
        if (tiltBlock.length) {
            $('.js-tilt').tilt({
                maxTilt: 20,
                perspective: 700,
                glare: true,
                maxGlare: 0
            })
        }

    }
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <>
                <section className="team-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6">
                                {/* Start Team Details Img */}
                                <div className="team-details__img js-tilt">
                                    <img src={publicUrl + "assets/images/resources/team-details-img1.jpg"} alt="" />
                                </div>
                                {/* End Team Details Img */}
                            </div>

                            <div className="col-xl-7 col-lg-6">
                                {/* Start Team Details Content */}
                                <div className="team-details__content">
                                    <div className="title">
                                        <h2>Team Details</h2>
                                    </div>
                                    <div className="name">
                                        <h6> <span>Name : </span> Md Ripon Islam</h6>
                                    </div>


                                    <div className="text">
                                        <p> <span>About :</span> Phis are bound to ensue; and equal blame belongs to those who
                                            through weakness of will, which is the same as through.We have the
                                            and industry expertise to develop solutions that can connect.ound to
                                            ensue; and equal blame belongs to those who through weakness of
                                            which is the same as through.We have the and expertise.</p>
                                    </div>

                                    <div className="text2">
                                        <p>Lorem Ipsum generators on the Internet tend tempor incididunt
                                            veniam, quis nostrud ex to repeat prede fined. </p>
                                    </div>

                                    <div className="number">
                                        <p> <span>Call:</span> <a href="tel:019999999">++019999999</a></p>
                                    </div>

                                    <div className="social-icon">
                                        <div className="title">
                                            <h6>Follow us:</h6>
                                        </div>
                                        <ul>
                                            <li><a href="/"><i className="fab fa-facebook"></i></a></li>
                                            <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="/"><i className="fab fa-pinterest-p"></i></a></li>
                                            <li><a href="/"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* End Team Details Content */}
                            </div>
                        </div>

                        <div className="team-details__bottom">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="team-details__bottom-inner">
                                        <div className="text1">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad on
                                                veniam, quis nostrud exercitation ullamco laboris nisi ea commodo
                                                consequat.Corporate clients and leisure travelers has been relying
                                                Groundlink for dependable safe, and professional chauffeured car service in
                                                major cities across World.</p>
                                        </div>

                                        <div className="text2">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad on
                                                veniam, quis nostrud exercitation ullamco laboris nisi ea commodo consequat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}