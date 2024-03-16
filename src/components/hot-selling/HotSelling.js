import React from "react"
import { Link } from 'react-router-dom';
import { ChevronRight } from "lucide-react"
import { useHotSelling } from "../../api-hooks/GetHotSelling"
import HotSellingSkeleton from "../skeletons/HotSellingSkeleton";

function HotSelling() {

    let publicUrl = process.env.PUBLIC_URL + '/'

    const { data: hotSelling, isLoading } = useHotSelling()

    if (hotSelling?.length === 3) {
        hotSelling.push({
            title: "SETMISPACE",
            image: publicUrl + "assets/images/resources/Set-mispace_placeholder.png",
            business: "SETMISPACE"
        },
            {
                title: "SETMISPACE",
                image: publicUrl + "assets/images/resources/Set-mispace_placeholder.png",
                business: "SETMISPACE"
            })
    }

    return (
        <>
            {/* Start Categories One */}
            <section className="categories-one">
                <div className="container">
                    <div className="sec-title text-center">
                        <h2 className="sec-title__title">Hot Selling Business in Kannur</h2>
                        <p className="sec-title__text">Most popular business in Kannur</p>
                    </div>
                    {isLoading ? <HotSellingSkeleton /> : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {hotSelling?.map((business, i) => (
                                <div className={`wow animated fadeInUp ${business.long && "row-span-2"}`} data-wow-delay="0.1s" key={i}>
                                    <div className="categories-one__single">
                                        <div className="categories-one__single-img">
                                            <img src={business.image} alt="" />
                                            <div className="text-box">
                                                <h2><Link to={process.env.PUBLIC_URL + `/listings/${business.businessId}`}>{business.title}</Link></h2>
                                                <p>{business.business}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="flex justify-center" style={{ paddingTop: "3rem" }}>
                        <Link to="/listings?filter=hot-selling" className="mx-auto flex" style={{ alignItems: "center" }}>View more <ChevronRight size={20} /></Link>
                    </div>
                </div>
            </section>
            {/* End Categories One */}
        </>
    )
}

export default HotSelling;