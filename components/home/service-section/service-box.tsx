import React, { ReactNode } from 'react';

interface ServiceBoxProps {
  title: string;
  description: string;
  pageUrl: string;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ title, description, pageUrl, }) => {
  return (
    <div className="col-md-6 ">
      <div className="box rounded">
        <div className="detail-box mt-2">
          <h6 className=" font-bold text-lg underline">{title}</h6>
          <p className="">{description}</p>
          <a href={pageUrl}>Learn More</a>
        </div>
      </div>
    </div >
  );
};

export default ServiceBox;
