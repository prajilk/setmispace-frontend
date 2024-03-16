import React from 'react';
import HeaderTwo from '../common/header/HeaderTwo';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ErrorContent from '../components/error/ErrorContent';
import FooterOne from '../common/footer/Footer';

const Error = () => {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                heading="Error"
                currentPage="Error"
            />
            <ErrorContent />
            <FooterOne />
        </>
    )
}

export default Error;