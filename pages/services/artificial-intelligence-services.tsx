import Layout from 'components/layout'
import CTA from 'components/services/CTA'
import FeatureBox from 'components/services/Featurebox/FeatureBox'
import HeroSection from 'components/services/HeroSection'
import ServiceSection from 'components/services/ServiceSection'


export default function ArtificialIntelligence() {
    return (
        <Layout>
            <HeroSection Title1="Artificial" Title2=" Intelligence" />
            <ServiceSection bg="https://i.postimg.cc/25N5wcHV/AI.png"
                p1="Nahal Technologies is at the forefront of innovation, developing 'smart' software that empowers machines to simulate human learning and logic. Our Artificial Intelligence services enable machines to independently complete complex processing and problem-solving tasks. "
                p2="Whether it's automating repetitive processes or making sense of vast datasets, our AI solutions redefine efficiency and elevate your business operations. Partner with Nahal Tech to integrate cutting-edge Artificial Intelligence into your workflows, unlocking unprecedented levels of automation and intelligence." />
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
