import React from 'react';

export default class VideoOne extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($(".video-popup").length) {
            $(".video-popup").magnificPopup({
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: true,
                fixedContentPos: false,
            });
        }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                {/* Start Video One */}
                <section className="video-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="video-one__inner">
                                    <div className="video-one__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/video-v1-bg.jpg)'}}></div>
                                    <div className="video-box">
                                        <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                            <div className="video-one__video-icon">
                                                <span className="fa fa-play"></span>
                                                <i className="ripple"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Video One */}
            </>
        )
    }
}