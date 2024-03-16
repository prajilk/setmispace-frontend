import React from 'react';
import HeaderTwo from '../common/header/HeaderTwo';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import CategoriesOne from '../components/hot-selling/HotSelling';
import FeatureThree from '../components/features/FeatureThree';
import FooterOne from '../common/footer/Footer';

const Categories = () => {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                heading="Categories Page"
                currentPage="Categories Page"
            />
            <CategoriesOne />
            <FeatureThree />
            <FooterOne />
        </>
    )
}

export default Categories;