import React from 'react';

import ServiceBox from './service-section/service-box';

const ServiceSection: React.FC = () => {
  return (
    <section id="services" className="service_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Our services
          </h2>
        </div>
        <div className="row">
          <ServiceBox
            title="Telecommunication equipment and services"
            description="We provide end-to-end procurement and delivery 
            of the latest IT and telecom hardware and software, including 
            routers, switches, servers, and wireless solutions tailored to 
            expand connectivity and optimize network performance."
            pageUrl="/services/telecommunications-supplies-and-services"
          />
          <ServiceBox
            title="Datacenter Design & Architecture"
            description="Nahal Technologies we optimize datacenter 
            scalability, resilience, efficiency, and safety through consulting services focused on capacity 
            planning, redundancy building, power management, and physical plus cybersecurity protocols."
            pageUrl="/services/datacenter-design-and-architecture"
          />
          <ServiceBox
            title="Server Installation & Configuration"
            description="Our skilled technicians seamlessly deploy, 
            customize, integrate and support business servers, ensuring optimal uptime, 
            performance, and compatibility with your existing systems and workloads."
            pageUrl="/services/telecommunications-supplies-and-services"
          />
          <ServiceBox
            title="Software Development Services"
            description="We build future-ready, enterprise-grade software 
            applications aligned to meet unique client requirements across web, 
            mobile, cloud platforms to drive workflow excellence and technology advantage."
            pageUrl="/services/telecommunications-supplies-and-services"
          />
          <ServiceBox
            title="IT Consulting Services"
            description="At Nahal technologies we offer strategic technology
             guidance and targeted solutions encompassing security, infrastructure
              upgrades, support services and more to maximize capability, productivity, and risk management."
            pageUrl="/services/telecommunications-supplies-and-services"
          />
          <ServiceBox
            title="Data Analytics Services"
            description="Our team of highly seasoned professionals help businesses harness valuable insights hidden
             in your data by building advanced warehouses coupled with predictive models,
              queries, and intelligence reporting platforms."
            pageUrl="/services/telecommunications-supplies-and-services"
          />
          <ServiceBox
            title="Artificial Intelligence Services"
            description="Nahal Technologies also develops âsmartâ software that trains machines to 
            simulate human learning and logic to independently complete complex processing and problem-solving."
            pageUrl="/services/telecommunications-supplies-and-services"
          />
          <ServiceBox
            title="Network Design Services"
            description="We architect speed-optimized networks with ample bandwidth, minimal lag, 
            and robust endpoint-to-endpoint access control
             protocols to enable secure enterprise-wide collaboration."
            pageUrl="/services/telecommunications-supplies-and-services"
          />

        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
