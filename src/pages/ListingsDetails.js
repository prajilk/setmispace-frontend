import React from 'react';
import HeaderTwo from '../common/header/HeaderTwo';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ListingDetails from '../components/listing/ListingDetails'
import FooterOne from '../common/footer/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { formatSlugToString } from "../lib/utils"
import { useBusiness } from "../api-hooks/GetBusiness"
import { useFeatures } from "../api-hooks/GetFeatures"

const ListingsDetails = () => {

    const navigate = useNavigate()
    const { id } = useParams();

    const { data: business } = useBusiness(id);
    const { data: featuresData } = useFeatures();

    if (business === null) {
        navigate('/error')
    }

    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                heading={business?.business}
                currentPage={formatSlugToString(business?.category)}
            />
            <ListingDetails
                business={business}
                features={featuresData?.filter(feature => business?.features.includes(feature.value))}
            />
            <FooterOne />
        </>
    )
}

export default ListingsDetails;