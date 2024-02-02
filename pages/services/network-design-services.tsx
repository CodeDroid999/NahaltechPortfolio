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
                            title="Security"
                            description="Trust Nahal Tech's dedicated 24/7 support team to provide the assistance you need. Backed by our support, your self-hosting experience is not just autonomous and flexible but also secure. Embrace autonomy and flexibility in a new era of Network where you have the control, support, and security to shape your digital environment."
                        />
                        <FeatureBox
                            title="Customer Support"
                            description="Beyond installation, Nahal Technologies offers ongoing support for your network. Our commitment extends to ensuring that your server infrastructure remains efficient and effective over time. Rely on our expertise to navigate any challenges, providing you with comprehensive support for a seamless technology experience."
                        />
                    </div>
                </div>
            </section>
            <CTA />
        </Layout>
    )
}
