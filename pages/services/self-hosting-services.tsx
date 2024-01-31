import AboutHeroArea from 'components/home/about-hero'
import AboutSection from 'components/home/about-section'
import MissionSection from 'components/home/misssion-section'
import VisionSection from 'components/home/vission-section'
import Layout from 'components/layout'
import FeatureBox from 'components/services/Featurebox/FeatureBox'
import HeroSection from 'components/services/HeroSection'
import Head from 'next/head'


export default function About() {
    return (
        <Layout>
            <HeroSection Title1="Artificial" Title2=" Intelligence Services" />
            <section id="services" className="features_section bg-gray-100 layout_padding2">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2 className="text-gray-950">
                            Features
                        </h2>
                    </div>
                    <div className="row justify-center">
                        <FeatureBox
                            title="Telecommunication equipment & services"
                            description="We provide end-to-end procurement and delivery 
            of the latest IT and telecom hardware and software, including 
            routers, switches, servers, and wireless solutions tailored to 
            expand connectivity and optimize network performance."
                        />
                        <FeatureBox
                            title="Datacenter Design & Architecture"
                            description="Nahal Technologies we optimize datacenter 
            scalability, resilience, efficiency, and safety through consulting services focused on capacity 
            planning, redundancy building, power management, and physical plus cybersecurity protocols."
                        />
                        <FeatureBox
                            title="Server Installation & Configuration"
                            description="Our skilled technicians seamlessly deploy, 
            customize, integrate and support business servers, ensuring optimal uptime, 
            performance, and compatibility with your existing systems and workloads."
                        />
                    </div>
                </div>
            </section>
            <AboutSection />
            <MissionSection />
            <VisionSection />
        </Layout>
    )
}
