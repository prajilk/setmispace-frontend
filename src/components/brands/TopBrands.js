import React from 'react';

export default class TopBrands extends React.Component {
    render() {
        return (
            <>
                {/* Start Features One */}
                <section className="features-one">
                    <div className="container">
                        <div className="sec-title text-center">
                            <h2 className="sec-title__title">Top Brands in City</h2>
                        </div>
                        <div className="row">
                            {/* Start Features One Single */}
                            <div className="col-xl-2 col-lg-2 col-md-3 col-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1000ms">
                                <img src={process.env.PUBLIC_URL + '/assets/images/brand/top_brands1.jpg'} className='w-100' alt='#' />
                            </div>
                            {/* End Features One Single */}
                            {/* Start Features One Single */}
                            <div className="col-xl-2 col-lg-2 col-md-3 col-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1000ms">
                                <img src={process.env.PUBLIC_URL + '/assets/images/brand/top_brands2.jpg'} className='w-100' alt='#' />
                            </div>
                            {/* End Features One Single */}
                            {/* Start Features One Single */}
                            <div className="col-xl-2 col-lg-2 col-md-3 col-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1000ms">
                                <img src={process.env.PUBLIC_URL + '/assets/images/brand/top_brands3.jpg'} className='w-100' alt='#' />
                            </div>
                            {/* End Features One Single */}
                            {/* Start Features One Single */}
                            <div className="col-xl-2 col-lg-2 col-md-3 col-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1000ms">
                                <img src={process.env.PUBLIC_URL + '/assets/images/brand/top_brands4.jpg'} className='w-100' alt='#' />
                            </div>
                            {/* End Features One Single */}
                            {/* Start Features One Single */}
                            <div className="col-xl-2 col-lg-2 col-md-3 col-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1000ms">
                                <img src={process.env.PUBLIC_URL + '/assets/images/brand/top_brands5.jpg'} className='w-100' alt='#' />
                            </div>
                            {/* End Features One Single */}
                            {/* Start Features One Single */}
                            <div className="col-xl-2 col-lg-2 col-md-3 col-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1000ms">
                                <img src={process.env.PUBLIC_URL + '/assets/images/brand/top_brands6.jpg'} className='w-100' alt='#' />
                            </div>
                            {/* End Features One Single */}
                        </div>
                    </div>
                </section>
                {/* End Features One */}
            </>
        )
    }
}