import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useFeatures } from '../../api-hooks/GetFeatures';
import { useCategories } from '../../api-hooks/GetCategories';
import BusinessCard from './BusinessCard';
import { useAllBusinesses } from '../../api-hooks/GetAllBusinesses';
import ListingsSkeleton from '../skeletons/ListingsSkeleton';
import BusinessesFoundSkeleton from '../skeletons/BusinessesFoundSkeleton';

const ListingThree = () => {

    const [searchParams] = useSearchParams()

    const { data: features } = useFeatures();
    const { data: categories } = useCategories();
    const { data: businesses, isLoading } = useAllBusinesses(searchParams.get("filter") || "");

    return (
        <>
            <section className="listings_one_wrap listings_one_wrap--listings-three">
                <div className="container clearfix">
                    <div className="listings__one__content">
                        <div className="listings_one_content_left">
                            <div className="row">
                                <div className="col-xl-12">
                                    <form className="listings_one_content_left_form">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input_box">
                                                    <input type="text" name="listing_name" placeholder="What are you looking for?" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input_box" style={{ color: "red" }}>
                                                    <div className="select-box">
                                                        <select className="nice-select selectmenu wide">
                                                            <option defaultValue="selected">All Categories</option>
                                                            {categories?.map((category, i) => (
                                                                <option key={i}>{category.label}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="input_box">
                                                        <div className="select-box">
                                                            <select className="selectmenu wide">
                                                                <option selected="selected">All Price Type</option>
                                                                <option>Default Sorting 1</option>
                                                                <option>Default Sorting 2</option>
                                                                <option>Default Sorting 3</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            {/* <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="input_box">
                                                        <div className="select-box">
                                                            <select className="selectmenu wide">
                                                                <option selected="selected">All Cities</option>
                                                                <option>Dhaka</option>
                                                                <option>New York</option>
                                                                <option>Khulna</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div> */}
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="filter_by_tags">
                                <h3>Filter by Features</h3>
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-4">
                                        {features?.map((feature, i) => (
                                            <div className="single_tags_check__box" key={i}>
                                                <input type="checkbox" name="free-parking" id="tag_1" />
                                                <label htmlFor="tag_1"><span></span>{feature.label}</label>
                                            </div>
                                        ))}
                                        {/* <div className="single_tags_check__box">
                                                <input type="checkbox" name="free-parking" id="tag_1" />
                                                <label htmlFor="tag_1"><span></span>Free Parking</label>
                                            </div>
                                            <div className="single_tags_check__box">
                                                <input type="checkbox" name="friendly-workspace" id="tag_2" checked />
                                                <label htmlFor="tag_2"><span></span>Friendly workspace</label>
                                            </div>
                                            <div className="single_tags_check__box">
                                                <input type="checkbox" name="wireless-internet" id="tag_3" />
                                                <label htmlFor="tag_3"><span></span>Wireless Internet</label>
                                            </div>
                                            <div className="single_tags_check__box">
                                                <input type="checkbox" name="car-rent" id="tag_4" />
                                                <label htmlFor="tag_4"><span></span>Car Rent</label>
                                            </div> */}
                                    </div>

                                    {features?.length > 4 && features?.splice(4, 8).map((feature, i) => (
                                        <div className="col-xl-4 col-lg-4 col-md-4" key={i}>
                                            <div className="single_tags_check__box">
                                                <input type="checkbox" name="wireless-internet Cards" id="tag_5" />
                                                <label htmlFor="tag_5"><span></span>{feature.label}</label>
                                            </div>
                                        </div>
                                    ))}

                                    {features?.length > 8 && features?.splice(8, 16).map((feature, i) => (
                                        <div className="col-xl-4 col-lg-4 col-md-4" key={i}>
                                            <div className="single_tags_check__box">
                                                <input type="checkbox" name="wireless-internet Cards" id="tag_5" />
                                                <label htmlFor="tag_5"><span></span>{feature.label}</label>
                                            </div>
                                        </div>
                                    ))}

                                    {/* <div className="col-xl-4 col-lg-4 col-md-4">
                                            <div className="single_tags_check__box">
                                                <input type="checkbox" name="pool" id="tag_9" />
                                                <label htmlFor="tag_9"><span></span>Pool</label>
                                            </div>
                                            <div className="single_tags_check__box">
                                                <input type="checkbox" name="evening-entertainment" id="tag_10" />
                                                <label htmlFor="tag_10"><span></span>Evening entertainment</label>
                                            </div>
                                            <div className="single_tags_check__box">
                                                <input type="checkbox" name="suites" id="tag_11" />
                                                <label htmlFor="tag_11"><span></span>Suites</label>
                                            </div>
                                            <div className="single_tags_check__box">
                                                <input type="checkbox" name="tV-rooms" id="tag_12" />
                                                <label htmlFor="tag_12"><span></span>TV Rooms</label>
                                            </div>
                                        </div> */}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="listings_one_wrap-btn">
                                        <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn"><span className="icon-search"></span>Search</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="filter">
                                        <div className="filter_inner_content">
                                            <div className="left">
                                                <div className="left_text">
                                                    {isLoading ? <BusinessesFoundSkeleton /> : <h4>Over {businesses?.length} Businesses Found</h4>}
                                                </div>
                                            </div>
                                            {/* <div className="right">
                                                <div className="shorting">
                                                    <div className="select-box">
                                                        <select className="nice-select selectmenu wide">
                                                            <option defaultValue="selected">Short by latest</option>
                                                            <option>Short by latest</option>
                                                            <option>Short by latest</option>
                                                            <option>Short by latest</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section className="listings_three-page one">
                            <div className="row">
                                {isLoading ? <>
                                    <ListingsSkeleton />
                                    <ListingsSkeleton />
                                    <ListingsSkeleton />
                                    <ListingsSkeleton />
                                </> : businesses?.map((business, i) => <BusinessCard key={i} business={business} />)}
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ListingThree;