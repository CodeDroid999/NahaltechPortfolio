import Layout from 'components/layout'
import CTA from 'components/services/CTA'
import FeatureBox from 'components/services/Featurebox/FeatureBox'
import HeroSection from 'components/services/HeroSection'
import ServiceSection from 'components/services/ServiceSection'


export default function DataCenters() {
    return (
        <Layout>
            <HeroSection Title1="Datacenter" Title2=" Design & Architecture" />
            <ServiceSection p1="At Nahal Technologies, our datacenter design consulting practice offers end-to-end advisory spanning capacity planning, security protocols, power management, and cooling systems tailored to actualize the full potential of your IT infrastructure. With extensive experience building highly scalable, resilient and future-ready datacenters for enterprises across industries, our architects and engineers analyze current and projected workloads to determine optimal storage, computing capability, connectivity needs and redundancy measures vital for driving workflows and guarding against risks of downtime."
                p2=" By leveraging best practices honed through established partnerships with leading hardware and software vendors, we help craft truly tailored datacenters aligned to the unique goals of your organization." />
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
