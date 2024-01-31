import React, { ReactNode } from 'react';

interface ServiceBoxProps {
  title: string;
  description: string;
  pageUrl: string;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ title, description, pageUrl }) => {
  return (
    <div className="col-md-5 rounded-xl m-2 ">
      <div className="box rounded-xl opacity-80" style={{ backgroundImage: 'url(https://i.postimg.cc/vmLh6qX7/vission.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '80%' }}>
        <div className="detail-box mt-2">
          <h6 className="text-gray-100 font-bold">{title}</h6>
          <p>{description}</p>
          <a href={pageUrl}>Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
