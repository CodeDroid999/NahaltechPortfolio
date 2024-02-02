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
                            title="Customized Solutions"
                            description="We tailor analytic solutions based on identifying key data sources, metrics, and business priorities across departments to provide insights that translate into action. Elevate your business with our comprehensive solutions."
                        />
                        <FeatureBox
                            title="Scalability"
                            description="Our analytics architecture allows seamless integration of new real-time data feeds and scalable cloud infrastructure to handle exponentially growing enterprise data volumes."
                        />
                        <FeatureBox
                            title="Data Driven"
                            description="While our analytics dashboards provide targeted visibility, we offer sandbox environments for your team to discover new data relationships, trends and growth opportunities."
                        />
                    </div>
                </div>
            </section>
            <CTA />
        </Layout>
    )
}
