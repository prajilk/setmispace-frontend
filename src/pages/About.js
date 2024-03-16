import React from 'react';
import HeaderTwo from '../common/header/HeaderTwo';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import AboutTwo from '../components/about/AboutTwo';
import VisitedOne from '../components/latest/LatestListings';
import TeamOne from '../components/team/TeamOne';
import CounterTwo from '../components/counter/CounterTwo';
import FeatureOne from '../components/features/FeatureOne';
import VideoOne from '../components/video/VideoOne';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/Footer';

const About = () => {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                heading="About Page"
                currentPage="About Page"
            />
            <AboutTwo />
            <VisitedOne />
            <TeamOne />
            <CounterTwo />
            <FeatureOne />
            <VideoOne />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default About;