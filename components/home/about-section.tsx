import React from 'react';



const AboutSection = () => {
  return (
    <section id="about" className="about_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6 px-0">
            <div className="img_container">
              <div className="img-box">
                <img src="/images/about-img.jpg" alt="Sledge Entertainment" />
              </div>
            </div>
          </div>
          <div className="col-md-6 px-0">
            <div className="detail-box">
              <div className="heading_container">
                <h2>Who Are We?</h2>
              </div>
              <p>
                We provide reliable supply of telecommunication equipment and services to all domestic
                and foreign companies and aim to provide the latest technologies in the fields of Internet,
                Communications, Telecommunication, Wimax and Optical solutions; this also include End to End
                connectivity with last mile patching through direct fiber wireless and Microwave links connectivity.
              </p>
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
