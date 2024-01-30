import React from 'react';
import { TiTick } from 'react-icons/';


const MissionSection: React.FC = () => {
  return (
    <section id="mission" className="about_section layout_padding bg-gray-100" >
      <div className="container">
        <div className="row">
          <div className="col-md-6 px-0">
            <div className="img_container">
              <div className="img-box">
                <img src="images/mission.jpeg" alt="Mission" />
              </div>
            </div>
          </div>
          <div className="col-md-6 px-0">
            <div className="detail-box">
              <div className="heading_container">
                <h2>Our mission</h2>
              </div>
              <p>
                At Nahal Technologies, to empower businesses and individuals through innovative technological solutions that drive efficiency,
productivity, and growth..
              </p>

              <p>Our mission focuses on:</p>
              <ol className="px-3">
                <li className="mb-3"> <span className="text-orange-700 font-bold"> Expanding Digital Access:</span>  By building critical connectivity infrastructure and rolling out digital services across urban and rural areas to drive greater technology adoption.</li>
                <li className="mb-3" > <span className="text-orange-700 font-bold"> Developing Local Capacity:</span>  By transferring skills and technical expertise through training programs and driving the growth of homegrown digital talent.</li>
                <li className="mb-3"> <span className="text-orange-700 font-bold"> Delivering Innovative Solutions: </span> By providing high-quality, localized IT and technology solutions tailored to address challenges faced by African businesses.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default MissionSection;
