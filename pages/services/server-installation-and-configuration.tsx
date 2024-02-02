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
                            title="Tailored Server Solutions"
                            description="Experience a tailored approach to server installation and configuration with Nahal Technologies. Our skilled technicians bring expertise beyond deployment, focusing on customization and integration. We ensure your servers are not just installed but optimized, providing a tailored solution that aligns with the unique demands of your business operations."
                        />
                        <FeatureBox
                            title="Optimal Uptime and Performance"
                            description="Trust Nahal Tech for optimal uptime and unparalleled performance. Our dedicated team goes the extra mile to ensure that your servers operate seamlessly, supporting the continuity of your business. Whether it's compatibility with existing systems or handling increased workloads, we guarantee a server infrastructure that meets the highest standards."
                        />
                        <FeatureBox
                            title="Comprehensive Support"
                            description="Beyond installation, Nahal Technologies offers ongoing support for your business servers. Our commitment extends to ensuring that your server infrastructure remains efficient and effective over time. Rely on our expertise to navigate any challenges, providing you with comprehensive support for a seamless technology experience."
                        />
                    </div>
                </div>
            </section>
            <CTA />
        </Layout>
    )
}
