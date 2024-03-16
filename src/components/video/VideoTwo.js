import React from 'react';

export default class VideoTwo extends React.Component {
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
                {/* Start Slogan One */}
                <section className="slogon-one">
                    <div className="slogon-one__bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/slogan-v1-bg.jpg)'}}></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="slogon-one__inner text-center">
                                    <h5>Aliquam erat volutpat interdum</h5>
                                    <h2>Get ready to start your exciting journey. <br /> Our agency will lead you through the amazing digital world</h2>
                                    <div className="video-button">
                                        <a className="video-popup video-btn" title="Video Gallery"
                                            href="https://www.youtube.com/watch?v=p25gICT63ek">
                                            <i className="fa fa-play" aria-hidden="true"></i> <span className="txt">Promo Video</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Slogan One */}
            </>
        )
    }
}