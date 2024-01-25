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
                <h2>Who Are We?</h2>
              </div>
              <p>
                Nahal Technologies is a leading technology solutions provider enabling businesses
                and organizations across Africa to harness innovation and emerge into the digital
                age. Established in 2019 and headquartered in Juba, South Sudan, we are a trusted
                homegrown partner with an expansive reach across the region.
              </p>
              <p>Our broad service portfolio includes data center architecture, network design, server
                installation, software development, IT consulting and a range of infrastructure management
                services. We supplement this by forging partnerships with leading global technology vendors
                to offer best-in-class products.</p>
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
