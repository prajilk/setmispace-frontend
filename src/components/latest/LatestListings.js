import { ChevronRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import BusinessCard from '../listing/BusinessCard';
import { useAllBusinesses } from '../../api-hooks/GetAllBusinesses';

const LatestListings = () => {

    const { data: businesses, isLoading } = useAllBusinesses("latest");

    return (
        <>
            {/* Start Place One */}
            <section className="place-one">
                <div style={{ maxWidth: "64rem", margin: "0 auto" }} className='container'>
                    {/* <div className='container'> */}
                    <div className="sec-title text-center">
                        <h2 className="sec-title__title">What is new in Kannur?</h2>
                        <p className="sec-title__text">Latest business and much more...</p>
                    </div>
                    <div className="row">
                        {isLoading ? <h1>Loading...</h1> : businesses?.map((business, i) => (
                            <BusinessCard business={business} key={i} />
                        ))}
                        <div className="flex justify-center" style={{ paddingTop: "2rem" }}>
                            <Link to="/listings?filter=latest" className="mx-auto flex" style={{ alignItems: "center" }}>View more <ChevronRight size={20} /></Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Place One */}
        </>
    )
}
export default LatestListings;