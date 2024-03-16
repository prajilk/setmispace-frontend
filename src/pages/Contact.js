import React from 'react';
import HeaderTwo from '../common/header/HeaderTwo';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ContactTwo from '../components/contact/ContactTwo';
import ContactMap from '../components/contact/ContactMap';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/Footer';

const Contact = () => {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                heading="Contact Page"
                currentPage="Contact Page"
            />
            <ContactTwo />
            <ContactMap />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default Contact;