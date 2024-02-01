/* eslint-disable react/no-unescaped-entities */
import React from 'react';

interface FeatureBoxProps {
    p1: string;
    p2: string;
    bg: string;
    Title: string;
}

const ServiceOverviewL1 = ({ p1, p2, bg, Title }) => {
    return (
        <section id="about" className="about_section bg-gray-100 layout_padding1">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 px-0">
                        <div className="img_container">
                            <div className="img-box">
                                <img src={bg} alt="bg" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 px-0">
                        <div className="detail-box">
                            <div className="heading_container">
                                <h2>{Title}</h2>
                            </div>
                            <p>{p1}</p>
                            <p>{p2}</p>
                            <a href="contact-us">Get a Quote</a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceOverviewL1;
