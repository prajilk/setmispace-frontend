import React from 'react';
import HeaderTwo from '../common/header/HeaderTwo';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TeamThree from '../components/team/TeamThree';
import FooterOne from '../common/footer/Footer';

const Team = () => {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                heading="Team Page"
                currentPage="Team Page"
            />
            <TeamThree />
            <FooterOne />
        </>
    )
}

export default Team;