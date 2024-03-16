import React from 'react';
import { Link } from 'react-router-dom';

export default class ErrorContent extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <>
                <section className="error-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="error-page__inner text-center">
                                    <div className="error-page__img">
                                        <img src={publicUrl + "assets/images/resources/error-page-img.jpg"} alt="#" style={{ margin: "0 auto" }} />
                                    </div>

                                    <div className="error-page__content">
                                        <p>Sorry This Page Not found take a look at our most popular</p>
                                        <div className="btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn">Go To Home</Link>
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