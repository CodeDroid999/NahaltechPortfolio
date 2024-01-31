import React from 'react';


const CTA: React.FC = () => {
    return (
        <section id="mission" className="about_section layout_padding bg-gray-100" >
            <div className="container">
                <div className="row">
                    <div className="col-md-6 px-0">
                        <div className="img_container">
                            <div className="img-box">
                                <img src="https://i.postimg.cc/BZwCt4z4/mission.jpg" alt="Mission" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 px-0">
                        <div className="detail-box">
                            <div className="heading_container">
                                <h2>Contact Us</h2>
                            </div>
                            <p>
                                Let’s start a conversation today to explore how our leading-edge technologies and specialized expertise can empower your digital evolution. Get in touch with our results-driven team to schedule a consultation where we will evaluate key priorities, assess infrastructure, and provide technology roadmap recommendations tailored to help you meet and exceed dynamic business goals.
                            </p>

                            <a href="contact-us">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default CTA;
