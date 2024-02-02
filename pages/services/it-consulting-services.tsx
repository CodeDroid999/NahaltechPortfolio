import Layout from 'components/layout'
import CTA from 'components/services/CTA'
import FeatureBox from 'components/services/Featurebox/FeatureBox'
import HeroSection from 'components/services/HeroSection'
import ServiceSection from 'components/services/ServiceSection'


export default function ITConsuklting() {
    return (
        <Layout>
            <HeroSection Title1="IT" Title2=" Consulting" />
            <ServiceSection bg="https://i.postimg.cc/bvfBwkv7/consulting.png"
                p1="At Nahal Technologies, we go beyond conventional services, offering strategic technology guidance and targeted solutions to propel your business forward. Our expertise spans security, infrastructure upgrades, support services, and more. We strategically align technology with your business objectives to maximize capability, enhance productivity, and fortify risk management."
                p2="With a focus on innovation and efficiency, Nahal Technologies is your partner in navigating the ever-evolving technological landscape. Elevate your business with our comprehensive solutions tailored to meet your unique needs." />
            <section id="services" className="features_section bg-gray-100 layout_padding2">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2 className="text-gray-950">
                            Features
                        </h2>
                    </div>
                    <div className="row justify-center">
                        <FeatureBox
                            title="Autonomy"
                            description="Step into a realm of autonomy with Nahal Technologies' Self-Hosting Consultation & Services. We extend a versatile suite of solutions, empowering you to host your applications and data on your infrastructure. Dictate the terms of your digital environment as we engineer simplicity for easy deployment and management."
                        />
                        <FeatureBox
                            title="Capability and Productivity"
                            description="Partner with Nahal Technologies to maximize your business's capability and productivity. Our comprehensive solutions focus on innovation and efficiency, ensuring that technology becomes a driving force in your success. From strategic planning to implementation, we fortify your business for sustainable growth in the ever-evolving technological landscape."
                        />
                        <FeatureBox
                            title="Fortifying Risk Management:"
                            description="Trust Nahal Technologies to fortify your risk management strategies. Our IT Consulting services are designed to navigate the complexities of the technological landscape, providing targeted solutions that enhance security and resilience. Elevate your business with solutions tailored to meet your unique needs and challenges."
                        />
                    </div>
                </div>
            </section>
            <CTA />
        </Layout>
    )
}
