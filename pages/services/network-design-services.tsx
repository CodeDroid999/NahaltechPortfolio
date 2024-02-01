import Layout from 'components/layout'
import CTA from 'components/services/CTA'
import FeatureBox from 'components/services/Featurebox/FeatureBox'
import HeroSection from 'components/services/HeroSection'
import ServiceSection from 'components/services/ServiceSection'


export default function Networks() {
    return (
        <Layout>
            <HeroSection Title1="Network" Title2=" Design & Architecture" />
            <ServiceSection bg="https://i.postimg.cc/k4Xw2cPp/network.png"
                p1="At Nahal Technologies, we specialize in architecting speed-optimized networks that redefine enterprise connectivity. Our solutions ensure ample bandwidth, minimal lag, and robust endpoint-to-endpoint access control protocols. This strategic approach not only optimizes network speed but also establishes a secure foundation for enterprise-wide collaboration."
                p2="Nahal Tech's expertise lies in seamlessly integrating technology to enhance connectivity, reduce latency, and fortify data security. Elevate your collaborative endeavors with our network architecture solutions, where speed meets security for a connected and productive enterprise." />
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
                            description="We tailor analytic solutions based on identifying key data sources, metrics, and business priorities across departments to provide insights that translate into action."
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
