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
                p1="Nahal Technologies excels in optimizing datacenter scalability, resilience, efficiency, and safety. Our consulting services prioritize capacity planning, ensuring your datacenter aligns with evolving needs. Robust redundancy building guarantees uninterrupted operations, while intelligent power management minimizes environmental impact. "
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
                            title="Scalability and Efficiency"
                            description="Elevate your datacenter's capabilities with Nahal Technologies. Our focus on optimizing scalability and efficiency ensures that your datacenter evolves seamlessly to meet increasing demands. Through meticulous capacity planning, we guarantee that your infrastructure scales in tandem with your business growth, providing a foundation for unparalleled efficiency."
                        />
                        <FeatureBox
                            title="Resilience and Redundancy"
                            description="Experience uninterrupted operations with Nahal Tech's expertise in resilience and redundancy building. We fortify your datacenter against potential disruptions, creating a robust infrastructure that stands resilient in the face of challenges. Our commitment to redundancy ensures continuity, safeguarding your critical operations and data."
                        />
                        <FeatureBox
                            title="Advanced Security Protocols"
                            description="Trust Nahal Technologies to safeguard your infrastructure with advanced physical and cybersecurity protocols. Our comprehensive approach establishes a resilient defense against unauthorized access and cyber threats. Your datacenter becomes a secure fortress, where cutting-edge solutions meet expert knowledge to ensure the highest levels of security in the digital landscape."
                        />
                    </div>
                </div>
            </section>
            <CTA />
        </Layout>
    )
}
