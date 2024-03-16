import React from 'react';
import HeaderTwo from '../common/header/HeaderTwo';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import VisitedOne from '../components/latest/LatestListings';
import Footer from '../common/footer/Footer';

const Visited = () => {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                heading="Visited Page"
                currentPage="Visited Page"
            />
            <VisitedOne />
            <Footer />
        </>
    )
}

export default Visited;