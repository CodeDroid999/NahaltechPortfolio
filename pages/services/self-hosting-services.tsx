import Layout from 'components/layout'
import CTA from 'components/services/CTA'
import FeatureBox from 'components/services/Featurebox/FeatureBox'
import HeroSection from 'components/services/HeroSection'
import ServiceSection from 'components/services/ServiceSection'


export default function DataAnalytics() {
    return (
        <Layout>
            <HeroSection Title1="Self-hosting" Title2=" Consultation & Services" />
            <ServiceSection bg="https://i.postimg.cc/Cx7cStWq/self-hosting.png"
                p1="Nahal Technologies extends a versatile suite of self-hosting solutions, empowering you to host your applications and data on your infrastructure. Engineered for simplicity, our self-hosting solutions are designed for easy deployment and management, putting you in complete control."
                p2="Backed by our dedicated 24/7 support team, you can trust Nahal Tech to provide the assistance you need, ensuring a seamless and secure self-hosting experience. Embrace autonomy and flexibility with our self-hosting solutions, where you dictate the terms of your digital environment." />
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
                            title="Deployment & Management"
                            description="Experience seamless deployment and management with Nahal Tech's self-hosting solutions. Engineered for simplicity, our solutions put you in complete control, ensuring that hosting your applications and data becomes a hassle-free endeavor. Embrace autonomy and flexibility as you navigate the digital landscape."
                        />
                        <FeatureBox
                            title="Security"
                            description="Trust Nahal Tech's dedicated 24/7 support team to provide the assistance you need. Backed by our support, your self-hosting experience is not just autonomous and flexible but also secure. Embrace autonomy and flexibility in a new era of hosting where you have the control, support, and security to shape your digital environment."
                        />
                    </div>
                </div>
            </section>
            <CTA />
        </Layout>
    )
}
