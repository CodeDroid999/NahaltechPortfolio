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
            title="1. Datacenter Design & Architecture"
            description="Data centers are the backbone of the modern digital world, providing the critical infrastructure that
            powers everything from websites and email to e-commerce and cloud computing. Designing and
            architecting a datacenter is a complex task that requires careful consideration of a wide range of factors,
            including:
            a. Scalability: Datacenters need to be able to scale to meet the ever-increasing demands of users
             and applications.
            b. Reliability: Datacenters need to be highly reliable, with minimal downtime or outages.
            c. Security: Datacenters need to be secure from physical and cyber threats.
            d. Energy efficiency: Datacenters need to be energy efficient to reduce costs and environmental
             impact.
            Nahal Technologies has a team of experienced datacenter design and architecture consultants who can
            help you design and build a datacenter that meets your specific needs and requirements.
            "
          />
          <ServiceBox
            title="2. Servers Install and Config"
            description="Servers are the heart of any datacenter, providing the computing power that runs applications and
            stores data. Installing and configuring servers can be a complex task, and it is important to have the
            expertise of experienced professionals to ensure that your servers are installed and configured correctly."
          />
          <ServiceBox
            title="3. Software development:"
            description="Custom software development, web application development, mobile app development, cloud
            computing solutions, and enterprise software solutions.
             a. IT consulting: IT strategy development, IT infrastructure planning and implementation, IT security
             solutions, and IT support services.
            b. Data analytics: Data warehousing, data mining, business intelligence, and predictive analytics
             solutions
            .c. Artificial intelligence: Machine learning, natural language processing, and chatbot development
             services.Nahal Technologies has a team of experienced server installation and configuration technicians who can
             help you install and configure your servers quickly and efficiently. Our technicians are experts in a wide
             range of server platforms, including Windows Server, Linux, and Unix.
             "
          />
          <ServiceBox
            title="4. Network Design"
            description="A well-designed network is essential for any datacenter, providing the connectivity that allows
            applications and data to flow freely. Designing a network can be a complex task, and it is important to
            consider a wide range of factors, including:
            a. Bandwidth: The network needs to have enough bandwidth to support the needs of all users and
             applications.
            b. Latency: The network needs to have low latency to ensure that applications are responsive.
            c. Security: The network needs to be secure from unauthorized access.
            Nahal Technologies has a team of experienced network design consultants who can help you design a
            network that meets your specific needs and requirements."
          />
          <ServiceBox
            title="5. Firewall Configuration"
            description="Firewalls are essential for protecting datacenters from cyber threats. Firewalls filter incoming and
            outgoing traffic, blocking unauthorized access and protecting sensitive data. Configuring a firewall can
            be a complex task, and it is important to have the expertise of experienced professionals to ensure that
            your firewall is configured correctly.
            Nahal Technologies has a team of experienced firewall configuration technicians who can help you
            configure your firewall to protect your datacenter from cyber threats. Our technicians are experts in a
            wide range of firewall platforms, including Cisco ASA, Juniper SRX, and Palo Alto Networks.
            "
          />
          <ServiceBox
            title="6. Entertainment and Media"
            description="The entertainment and media industry is a rapidly changing industry that is being driven by the digital
            revolution. Nahal Technologies offers a wide range of technology solutions for the entertainment and
            media industry, including:
            a. Video streaming: We can help you develop and deploy video streaming solutions that allow you
             to deliver your content to viewers on any device.
            b. Digital signage: We can help you develop and deploy digital signage solutions that allow you to
             communicate with your customers and employees in a dynamic and engaging way.
            c. Interactive media: We can help you develop and deploy interactive media solutions that allow
             your customers to engage with your content in a new and exciting way."
          />
          <ServiceBox
            title="7. Education"
            description="The education industry is also being transformed by the digital revolution. Nahal Technologies offers a
            wide range of technology solutions for the education industry, including:
            a. Learning management systems (LMS): We can help you develop and deploy an LMS that allows
             you to deliver online courses and manage your students' learning.
            b. Educational content development: We can help you develop high-quality educational content
             that is aligned with your curriculum standards.
            c. E-learning solutions: We can help you develop and deploy e-learning solutions that allow your
             students to learn at their own pace and on their own schedule.
            "
          />
          <ServiceBox
            title="8. Providing Self Hosting"
            description="Nahal Technologies offers a wide range of self-hosting solutions that allow you to host your own
            applications and data on your own infrastructure. Our self-hosting solutions are designed to be easy to
            deploy and manage, and they are backed by our 24/7 support team.
            If you are looking for a reliable and experienced partner to help you with your technology needs, please
            contact Nahal Technologies today. We are happy to discuss your specific needs and requirements and
            provide you with a free consultation."
          />

        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
