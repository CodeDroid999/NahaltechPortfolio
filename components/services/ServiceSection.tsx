/* eslint-disable react/no-unescaped-entities */
import React from 'react';

interface FeatureBoxProps {
    p1: string;
    p2: string;
    bg: string;
}

const ServiceSection = ({ p1, p2, bg }) => {
    return (
        <section id="about" className="about_section layout_padding1">
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
                                <h2>Service Overview</h2>
                            </div>
                            <p>                          {p1}</p>
                            <p>{p2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
