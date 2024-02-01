
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
      <ContactForm />
    </Layout>
  )
}