import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TeamContentDetails from '../components/team/TeamContentDetails';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/Footer';

const TeamDetails = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb
                heading="Team Details Page"
                currentPage="Team Details Page"
            />
            <TeamContentDetails />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default TeamDetails;