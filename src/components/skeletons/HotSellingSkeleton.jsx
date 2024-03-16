import React from "react";

const HotSellingSkeleton = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="wow animated fadeInUp" data-wow-delay="0.1s">
                <div
                    className="categories-one__single"
                    style={{
                        width: "100%",
                        height: "300px",
                        backgroundColor: "#eeeeee",
                    }}
                ></div>
            </div>
            <div
                className="wow animated fadeInUp row-span-2"
                data-wow-delay="0.1s"
            >
                <div
                    className="categories-one__single"
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#eeeeee",
                    }}
                ></div>
            </div>
            <div className="wow animated fadeInUp" data-wow-delay="0.1s">
                <div
                    className="categories-one__single"
                    style={{
                        width: "100%",
                        height: "300px",
                        backgroundColor: "#eeeeee",
                    }}
                ></div>
            </div>
            <div className="wow animated fadeInUp" data-wow-delay="0.1s">
                <div
                    className="categories-one__single"
                    style={{
                        width: "100%",
                        height: "300px",
                        backgroundColor: "#eeeeee",
                    }}
                ></div>
            </div>
            <div className="wow animated fadeInUp" data-wow-delay="0.1s">
                <div
                    className="categories-one__single"
                    style={{
                        width: "100%",
                        height: "300px",
                        backgroundColor: "#eeeeee",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default HotSellingSkeleton;
