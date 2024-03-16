import React from 'react';
import HeaderTwo from '../common/header/HeaderTwo';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ListingOne from '../components/listing/ListingOne';
import FooterOne from '../common/footer/Footer';

const ListingsOne = () => {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                heading="Listings"
                currentPage="Listings"
            />
            <ListingOne />
            <FooterOne />
        </>
    )
}

export default ListingsOne;