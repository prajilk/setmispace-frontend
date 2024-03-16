import React from 'react';
import ContactForm from '../form/Contact';

export default class ContactTwo extends React.Component {
    render() {
        return (
            <>
                <section className="contact-one contact-page">
                    <div className="container">
                        <div className="row">
                            {/* Start Contact One Form */}
                            <div className="col-xl-8">
                                <div className="contact-one__form">
                                    <div className="contact-one__form-text">
                                        <h2>Our Contact</h2>
                                        <p>Beyond more stoic this along goodness this sed wow manatee mongos
                                            <br />flusterd impressive man farcrud opened.</p>
                                    </div>
                                    <ContactForm />
                                </div>
                            </div>
                            {/* End Contact One Form */}

                            {/* Start Contact One Content */}
                            <div className="col-xl-4">
                                <div className="contact-one__content">
                                    <div className="contact-one__content-single">
                                        <div className="contact-one__content-single-inner">
                                            <div className="icon-box">
                                                <span className="icon-call"></span>
                                            </div>

                                            <div className="content-box">
                                                <h2>Call Now</h2>
                                                <p className="number1"><a href="tel:123456789">+025461556695</a></p>
                                                <p className="number2"><a href="tel:123456789">+826542556455</a></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="contact-one__content-single">
                                        <div className="contact-one__content-single-inner">
                                            <div className="icon-box">
                                                <span className="icon-email-1"></span>
                                            </div>

                                            <div className="content-box">
                                                <h2>Message Us </h2>
                                                <p className="email1"><a href="mailto:info@madina.com">rubel@example.com</a></p>
                                                <p className="email2"><a href="mailto:info@madina.com">robi@example.com</a></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="contact-one__content-single">
                                        <div className="contact-one__content-single-inner">
                                            <div className="icon-box">
                                                <span className="icon-address"></span>
                                            </div>

                                            <div className="content-box">
                                                <h2>Address Location </h2>
                                                <p>Soubhagya Complex, Pallikunnu, Kannur - 670004</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Contact One Content */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}