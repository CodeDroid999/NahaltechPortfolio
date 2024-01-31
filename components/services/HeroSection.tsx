import React from 'react';

import Home from '../layout/home-section';
import Navbar from '../layout/navbar';

const HeroSection = ({ Title1, Title2 }) => {
    return (
        <div className="heron_area">
            <div className="hero_bg_box">
                <div className="img-box">
                    <img src="https://i.postimg.cc/hv9h2S1z/telecommunication-equipment-and-services.jpg" alt="" />
                </div>
            </div>

            <Home />
            <section className=" slider_section  h-4/6">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="detail-box">
                                            <h1>
                                                {Title1} <br />
                                                <span>
                                                    {Title2} </span>
                                            </h1>
                                            <p>
                                                Harnessing the Power of Technology for a Better Future
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
