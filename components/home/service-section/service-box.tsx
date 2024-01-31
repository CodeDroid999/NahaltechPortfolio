import React, { ReactNode } from 'react';

interface ServiceBoxProps {
  title: string;
  description: string;
  pageUrl: string;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ title, description, pageUrl }) => {
  return (
    <div className="col-md-6">
      <div className="box" style={{ backgroundImage: 'url(https://i.postimg.cc/vmLh6qX7/vission.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }}>
        <div className="detail-box">
          <h6>{title}</h6>
          <p>{description}</p>
          <a href={pageUrl}>Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
