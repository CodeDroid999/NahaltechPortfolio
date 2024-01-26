import React from 'react';

import Home from '../layout/home-section';
import Navbar from '../layout/navbar';

const HeroArea = () => {
  return (
    <div className="hero_area">
      <div className="hero_bg_box">
        <div className="img-box">
          <img src="images/hero-bg.jpg" alt="" />
        </div>
      </div>

      <Home />
      <section className=" slider_section ">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <div className="detail-box">
                      <h1>
                        Connecting Africa Through
                        <span>
                          Technology</span>
                      </h1>
                      <p>
                        Cutting-edge telecommunications equipment and infrastructure
                        solutions to expand connectivity across Africa.
                      </p>
                      <div className="btn-box">
                        <a href="#about" className="btn-1"> Learn more </a>
                        <a href="#contact" className="btn-2">Get A Quote</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <div className="detail-box">
                      <h1>
                        Powering Business Growth
                        <span>
                          With Innovation  </span>
                      </h1>
                      <p>
                        Empowering businesses to leverage the latest technologies including AI,
                        big data, and IoT to drive greater efficiency and productivity.
                      </p>
                      <div className="btn-box">
                        <a href="#about" className="btn-1"> Learn more </a>
                        <a href="#contact" className="btn-2">Get A Quote</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <div className="detail-box">
                      <h1>
                        The Future of Technology,
                        <span>Engineered </span>
                      </h1>
                      <p>
                        We design, build and manage scalable, reliable, and secure technology
                        infrastructure tailored to meet the needs of tomorrow.</p>
                      <div className="btn-box">
                        <a href="#about" className="btn-1"> Learn more </a>
                        <a href="#contact" className="btn-2">Get A Quote</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container idicator_container">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroArea;
