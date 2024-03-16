import React from 'react';
import HeaderTwo from '../common/header/HeaderTwo';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ListingThree from '../components/listing/ListingThree';
import FooterOne from '../common/footer/Footer';

const ListingsThree = () => {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                heading="Listings"
                currentPage="Listings"
            />
            <ListingThree />
            <FooterOne />
        </>
    )
}

export default ListingsThree;