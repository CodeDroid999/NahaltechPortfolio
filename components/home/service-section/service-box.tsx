import React, { ReactNode } from 'react';

interface ServiceBoxProps {
  title: string;
  description: string;
  pageUrl: string;
  bgUrl: string;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ title, description, pageUrl, bgUrl }) => {
  return (
    <div className="col-md-6 ">
      <div className="box rounded opacity-70" style={{ backgroundImage: 'url({bgUrl})', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '80%' }}>
        <div className="detail-box mt-2">
          <h6 className=" font-bold text-lg text-yellow-500 underline">{title}</h6>
          <p className="text-white font-bold">{description}</p>
          <a href={pageUrl}>Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
