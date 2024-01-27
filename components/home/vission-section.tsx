import React from 'react';

const VisionSection: React.FC = () => {
  return (
    <section id="vision" className="about_section layout_padding bg-gray-100" >
      <div className="container">
        <div className="row">
          <div className="col-md-6 px-0">
            <div className="img_container">
              <div className="img-box">
                <img src="images/vission.jpeg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6 px-0">
            <div className="detail-box">
              <div className="heading_container">
                <h2>Our Vision</h2>
              </div>
              <p>
                Our vision is to shape the technology landscape across Africa by spearheading innovation that drives sustainable digital transformation.
              </p>
              <p>We aim to achieve this by:</p>
              <ol className="px-3">
                <li className="mb-3">Becoming the leading provider of locally relevant technology solutions tailored for African businesses seeking to digitally transform. Our in-depth understanding of local market challenges allows us to develop customized solutions to unlock efficiency, resilience and new opportunities.</li>
                <li className="mb-3">Expanding our footprint across key African markets by 2025 to extend our expertise where it is most needed. Our on-the-ground presence and proximity to clients provides the context to deliver maximum value.</li>
                <li className="mb-3">Investing in emerging technologies like artificial intelligence, blockchain and the Internet of Things to keep African innovation at the cutting edge. We will collaborate with startups and established players to build a vibrant future-ready ecosystem.</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="row pt-3 pb-3">
          <div className="btn-box">
            <a href="your-pdf-file.pdf" download="suggested-filename.pdf">
              Download portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
