import React from "react";

const ListingsSkeleton = () => {
    return (
        <div className="col-xl-6 col-lg-6 col-md-6">
            <div style={{ marginBottom: "25px" }}>
                <div className="place-one__single-img">
                    <div className="place-one__single-img-inner">
                        <div
                            style={{
                                width: "100%",
                                height: "300px",
                                backgroundColor: "#eeeeee",
                            }}
                        ></div>
                    </div>
                </div>

                <div className="place-one__single-content">
                    <div className="top-content">
                        <div
                            style={{
                                width: "70%",
                                height: "25px",
                                backgroundColor: "#eee",
                                borderRadius: "5px",
                            }}
                        ></div>

                        <div
                            className="top-content-bottom"
                            style={{ marginTop: "10px" }}
                        >
                            <div
                                style={{
                                    width: "20%",
                                    height: "20px",
                                    backgroundColor: "#eee",
                                    borderRadius: "5px",
                                }}
                            ></div>

                            <div
                                style={{
                                    width: "40%",
                                    height: "20px",
                                    backgroundColor: "#eee",
                                    borderRadius: "5px",
                                    marginLeft: "10px",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingsSkeleton;
