import Layout from 'components/layout'
import CTA from 'components/services/CTA'
import FeatureBox from 'components/services/Featurebox/FeatureBox'
import HeroSection from 'components/services/HeroSection'
import ServiceSection from 'components/services/ServiceSection'


export default function DataCenters() {
    return (
        <Layout>
            <HeroSection Title1="Datacenter" Title2=" Design & Architecture" />
            <ServiceSection bg="https://i.postimg.cc/LXYYQYts/data-center.jpg"
                p1="ahal Technologies excels in optimizing datacenter scalability, resilience, efficiency, and safety. Our consulting services prioritize capacity planning, ensuring your datacenter aligns with evolving needs. Robust redundancy building guarantees uninterrupted operations, while intelligent power management minimizes environmental impact. "
                p2="We secure your infrastructure with advanced physical and cybersecurity protocols, creating a resilient defense against unauthorized access and cyber threats. Nahal Technologies combines expertise with cutting-edge solutions, ensuring your datacenter stands as a beacon of efficiency and security in the digital landscape. Trust us to elevate your datacenter to new heights of performance and reliability.




                " />
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
            </section>
            <CTA />
        </Layout>
    )
}
