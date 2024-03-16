import React from 'react';

export default class CounterOne extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($(".odometer").length) {
            var odo = $(".odometer");
            odo.each(function () {
              $(this).appear(function () {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
              });
            });
        }
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                {/* Start Counter One */}
                <section className="counter-one">
                    <div className="container">
                        <div className="sec-title text-center">
                            <h2 className="sec-title__title">Most Poplar Counter</h2>
                            <p className="sec-title__text">Excepteur s occaecat cupidatat proident sunt</p>
                        </div>
                        <div className="row">
                            {/* Start Counter One Single */}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="counter-one__single">
                                    <div className="counter-one__single-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/resources/counter-v1-bg-img.jpg)'}}></div>
                                    <div className="counter-one__single-top">
                                        <div className="counter-box">
                                            <h3 className="odometer" data-count="8110">00</h3>
                                            <span className="counter-one__plus icon-plus"></span>
                                        </div>
                                        <div className="title">
                                            <h3>Projects</h3>
                                        </div>
                                    </div>
                                    <div className="counter-one__single-bottom">
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Counter One Single */}

                            {/* Start Counter One Single */}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="counter-one__single">
                                    <div className="counter-one__single-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/resources/counter-v1-bg-img.jpg)'}}></div>
                                    <div className="counter-one__single-top">
                                        <div className="counter-box">
                                            <h3 className="odometer" data-count="86">00</h3>
                                            <span className="counter-one__letter">K</span>
                                            <span className="counter-one__plus icon-plus"></span>
                                        </div>
                                        <div className="title">
                                            <h3>Happy Client</h3>
                                        </div>
                                    </div>

                                    <div className="counter-one__single-bottom">
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Counter One Single */}

                            {/* Start Counter One Single */}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="counter-one__single">
                                    <div className="counter-one__single-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/resources/counter-v1-bg-img.jpg)'}}></div>
                                    <div className="counter-one__single-top">
                                        <div className="counter-box">
                                            <h3 className="odometer" data-count="450">00</h3>
                                            <span className="counter-one__plus icon-plus"></span>
                                        </div>
                                        <div className="title">
                                            <h3>Employees</h3>
                                        </div>
                                    </div>

                                    <div className="counter-one__single-bottom">
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Counter One Single */}
                        </div>
                    </div>
                </section>
                {/* End Counter One */}
            </>
        )
    }
}