/* eslint-disable react/no-unescaped-entities */
import React from 'react';



const AboutSection = () => {
  return (
    <section id="about" className="about_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6 px-0">
            <div className="img_container">
              <div className="img-box">
                <img src="/images/about-img.jpg" alt="NAHAL TECHNOLOGIES" />
              </div>
            </div>
          </div>
          <div className="col-md-6 px-0">
            <div className="detail-box">
              <div className="heading_container">
                <h2>Company Overview</h2>
              </div>
              <p>
                Nahal Technologies is a leading provider of cutting-edge technology solutions, dedicated to helping
                businesses and individuals thrive in the ever-evolving digital landscape. With a team of passionate and
                experienced professionals,
                Nahal Technologies offers a comprehensive suite of services.
                Nahal Technologies is committed to providing its clients with high-quality, cost-effective solutions that
                are tailored to their specific needs. The company's focus on innovation, collaboration, and customer
                satisfaction has made it a trusted partner for businesses and organizations of all sizes.</p>
              <div className="btn-box">
                <a href="#contact">Get a quote</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
