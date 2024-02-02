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
                            title="Machine Intelligence"
                            description="Step into the future with Nahal Technologies' groundbreaking Artificial Intelligence services. We don't just develop software; we empower machines to simulate human learning and logic. Our 'smart' solutions redefine efficiency, enabling machines to independently tackle complex processing and problem-solving tasks.Elevate your business with our comprehensive solutions"
                        />
                        <FeatureBox
                            title="Integration"
                            description="Partner with Nahal Technologies to integrate cutting-edge Artificial Intelligence into your workflows. Embrace new features and possibilities as our AI solutions unlock unprecedented levels of automation and intelligence. Your business operations will not just keep up with the times but set the pace in the rapidly evolving landscape of technological innovation."
                        />
                        <FeatureBox
                            title="Cutting-edge  Integrations"
                            description="Partner with Nahal Technologies to integrate cutting-edge Artificial Intelligence into your workflows. Embrace new features and possibilities as our AI solutions unlock unprecedented levels of automation and intelligence. Your business operations will not just keep up with the times but set the pace in the rapidly evolving landscape of technological innovation."
                        />
                    </div>
                </div>
            </section>
            <CTA />
        </Layout>
    )
}
