import Head from 'next/head'

import AboutSection from '../components/home/about-section'
import HeroArea from '../components/home/hero-section'
import MissionSection from '../components/home/misssion-section'
import ProjectsSection from '../components/home/projects-section'
import ServiceSection from '../components/home/service-section'
import VisionSection from '../components/home/vission-section'
import Layout from '../components/layout'
import ContactForm from '../components/layout/contact-form'
import GallerySection from 'components/home/gallery-section'
import FeatureBox from 'components/services/Featurebox/FeatureBox'

export default function Index() {
  return (
    <Layout>
      <HeroArea />
      <AboutSection />
      <ServiceSection />
      <MissionSection />
      <section id="services" className="features_section bg-gray-100 layout_padding2">
        <div className="container">
          <div className="heading_container heading_center">
            <h2 className="text-gray-950">
              Features
            </h2>
          </div>
          <div className="row justify-center">
            <FeatureBox
              title="Data-Driven Solutions"
              description="We analyze your existing business data sets and
                             processes first to develop customized machine learning models 
                             focused on optimizing target metrics like cost reductions, risk 
                             mitigation or revenue growth identified by key stakeholders."
            />
            <FeatureBox
              title="Adaptive Intelligence"
              description="Our artificial intelligence solutions continuously
                             recalibrate predictive outputs and recommended actions using up-to-date
                              inputs. This means the systems remain relevant even as market conditions,
                               internal processes or consumer behavior evolve."
            />
            <FeatureBox
              title="Seamless  Integrations"
              description="Specialist teams seamlessly
                             and securely embed our AI modules into existing workflows – across
                              departments and IT environments. This frictionless integration allows
                               employees adopting AI to focus their effort on leveraging data-driven 
                               insight."
            />
          </div>
        </div>
        <GallerySection />
      </section>
      <VisionSection />
      <GallerySection />
      <ContactForm />
    </Layout>
  )
}