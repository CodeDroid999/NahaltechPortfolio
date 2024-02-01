
import HeroSection from 'components/services/HeroSection'
import HeroArea from '../components/home/hero-section'
import Layout from '../components/layout'
import ContactForm from '../components/layout/contact-form'
import ServiceOverviewL1 from 'components/services/ServiceOverviewl1'
import ServiceOverviewL2 from 'components/services/ServiceOverviewL2'

export default function Services() {
  return (
    <Layout>
      <HeroSection Title1="Our" Title2=" Services" />
      <ServiceOverviewL1 Title="Software Development" bg="https://i.postimg.cc/25N5wcHV/AI.png" p1="At Nahal Technologies, our expert software engineers and developers specialize in crafting high-performance enterprise-grade software tailored to address our clients’ unique digital transformation needs. Whether building feature-rich web platforms, intuitive mobile applications or mission-critical cloud-based solutions, we pride ourselves on our ability to translate business requirements into eloquent code that achieves outcomes."
        p2="Our development methodology focuses on rapid prototyping coupled with robust architecture optimized for security, scalability and maintainability across product lifecycles. If leveraging software to connect processes, unlock insights or achieve competitive advantage is your goal, our passionate team would welcome the opportunity to collaborate on delivering excellence." />
      <ServiceOverviewL2 Title="Data Analytics" bg="https://i.postimg.cc/sgTrBTtk/data.png"
        p1="At Nahal Technologies, Our data analytics solutions empower organizations to derive strategic, actionable insights using advanced analytics techniques including predictive modeling, machine learning algorithms, IoT data processing and custom BI dashboards."
        p2="By leveraging real-time data feeds integrated from across business units, we provide visibility into micro trends while our data scientists uncover macro opportunities. If leveraging data intelligence to steer competitive advantage and ROI appeals to you, let's connect." />
      <ServiceOverviewL1 Title="Datacenter Design & Architecture" bg="https://i.postimg.cc/LXYYQYts/data-center.jpg"
        p1="At Nahal Technologies, our datacenter design consulting practice offers end-to-end advisory spanning capacity planning, security protocols, power management, and cooling systems tailored to actualize the full potential of your IT infrastructure. With extensive experience building highly scalable, resilient and future-ready datacenters for enterprises across industries, our architects and engineers analyze current and projected workloads to determine optimal storage, computing capability, connectivity needs and redundancy measures vital for driving workflows and guarding against risks of downtime."
        p2=" By leveraging best practices honed through established partnerships with leading hardware and software vendors, we help craft truly tailored datacenters aligned to the unique goals of your organization." />
      <ServiceOverviewL2 Title="Entertainment & Media" bg="https://i.postimg.cc/Y08H18vL/entertainment.jpg" p1="At Nahal Technologies, Our data analytics solutions empower organizations to derive strategic, actionable insights using advanced analytics techniques including predictive modeling, machine learning algorithms, IoT data processing and custom BI dashboards."
        p2="By leveraging real-time data feeds integrated from across business units, we provide visibility into micro trends while our data scientists uncover macro opportunities. If leveraging data intelligence to steer competitive advantage and ROI appeals to you, let's connect." />
      <ServiceOverviewL1 Title="IT Consulting" bg="https://i.postimg.cc/bvfBwkv7/consulting.png" p1="At Nahal Technologies, Our data analytics solutions empower organizations to derive strategic, actionable insights using advanced analytics techniques including predictive modeling, machine learning algorithms, IoT data processing and custom BI dashboards."
        p2="By leveraging real-time data feeds integrated from across business units, we provide visibility into micro trends while our data scientists uncover macro opportunities. If leveraging data intelligence to steer competitive advantage and ROI appeals to you, let's connect." />
      <ServiceOverviewL2 Title="Network Design Services" bg="https://i.postimg.cc/k4Xw2cPp/network.png" p1="At Nahal Technologies, Our data analytics solutions empower organizations to derive strategic, actionable insights using advanced analytics techniques including predictive modeling, machine learning algorithms, IoT data processing and custom BI dashboards."
        p2="By leveraging real-time data feeds integrated from across business units, we provide visibility into micro trends while our data scientists uncover macro opportunities. If leveraging data intelligence to steer competitive advantage and ROI appeals to you, let's connect." />
      <ServiceOverviewL1 Title="Self Hosting Services" bg="https://i.postimg.cc/Cx7cStWq/self-hosting.png" p1="At Nahal Technologies, Our data analytics solutions empower organizations to derive strategic, actionable insights using advanced analytics techniques including predictive modeling, machine learning algorithms, IoT data processing and custom BI dashboards."
        p2="By leveraging real-time data feeds integrated from across business units, we provide visibility into micro trends while our data scientists uncover macro opportunities. If leveraging data intelligence to steer competitive advantage and ROI appeals to you, let's connect." />
    </Layout>
  )
}