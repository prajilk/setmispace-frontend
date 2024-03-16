import React from "react";
import Hero from "../components/hero/Hero";
import HotSelling from "../components/hot-selling/HotSelling";
import LatestListings from "../components/latest/LatestListings";
import BrandOne from "../components/brand/BrandOne";
import Footer from '../common/footer/Footer';
import HeaderOne from "../common/header/HeaderOne";
import TopBrands from "../components/brands/TopBrands";
import ContactUs from "../components/contact/ContactUs";

const HomeDefault = () => {
    return (
        <>
            <HeaderOne />
            <Hero />
            <HotSelling />
            <LatestListings />
            <TopBrands />
            <ContactUs />
            {/* <FeatureOne /> */}
            {/* <VideoOne /> */}
            {/* <TestimonialOne /> */}
            {/* <BlogOne /> */}
            <BrandOne />
            <Footer />
        </>
    )
}

export default HomeDefault;