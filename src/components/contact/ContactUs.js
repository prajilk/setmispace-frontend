import React from 'react';
import ContactForm from '../form/Contact';

export default class ContactUs extends React.Component {
    render() {
        return (
            <>
                <section className="contact-one" style={{ padding: "50px 0" }}>
                    <div className="container max-w-3xl">
                        <div className="row">
                            {/* Start Contact One Form */}
                            <div className="col-xl-12">
                                <div className="contact-one__form">
                                    <div className="contact-one__form-text text-center">
                                        <h2>Our Contact</h2>
                                        <p>For associating with us, contact us now! We will be happy to assist you.</p>
                                    </div>
                                    <ContactForm />
                                </div>
                            </div>
                            {/* End Contact One Form */}
                        </div>
                    </div>
                </section>
                {/* Start Team One */}
            </>
        )
    }
}