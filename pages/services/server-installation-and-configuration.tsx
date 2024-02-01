import Layout from 'components/layout'
import CTA from 'components/services/CTA'
import FeatureBox from 'components/services/Featurebox/FeatureBox'
import HeroSection from 'components/services/HeroSection'
import ServiceSection from 'components/services/ServiceSection'


export default function Servers() {
    return (
        <Layout>
            <HeroSection Title1="Server" Title2=" Installation & Configuration" />
            <ServiceSection bg="https://i.postimg.cc/bNHT9WYB/Screenshot-2024-02-01-031523.png"
                p1="At Nahal Technologies, our skilled technicians bring a seamless and tailored approach to server installation and configuration. We go beyond mere deployment, offering comprehensive services that include customization, integration, and ongoing support. Our focus is on ensuring optimal uptime, unparalleled performance, and seamless compatibility with your existing systems and workloads"
                p2="Whether you're expanding your infrastructure or seeking to enhance efficiency, our dedicated team ensures that your business servers are not just installed but optimized to meet the unique demands of your operations." />
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
