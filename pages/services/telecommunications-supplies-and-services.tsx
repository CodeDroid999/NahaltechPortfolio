import Layout from 'components/layout'
import CTA from 'components/services/CTA'
import FeatureBox from 'components/services/Featurebox/FeatureBox'
import HeroSection from 'components/services/HeroSection'
import ServiceSection from 'components/services/ServiceSection'


export default function Telecom() {
    return (
        <Layout>
            <HeroSection Title1="Telecommunication" Title2=" Supplies & Services" />
            <ServiceSection bg="https://i.postimg.cc/0NJKcKdy/cable.jpg"
                p1="
             Nahal Technologies specializes in end-to-end procurement and delivery of cutting-edge IT and telecom hardware and software. Our services encompass routers, switches, servers, and wireless solutions meticulously tailored to enhance connectivity and optimize network performance. "
                p2="With a commitment to delivering the latest technologies, we ensure seamless integration, providing businesses with reliable and efficient solutions. Whether it's expanding network capabilities or upgrading systems, Nahal Tech offers a comprehensive suite of services, empowering clients with the latest innovations in the rapidly evolving IT and telecom landscape               " />
            <section id="services" className="features_section bg-gray-100 layout_padding2">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2 className="text-gray-950">
                            Features
                        </h2>
                    </div>
                    <div className="row justify-center">
                        <FeatureBox
                            title="Enhanced Connectivity"
                            description="Unleash unparalleled connectivity with Nahal Technologies. Our specialized telecom services ensure a seamless network experience by delivering cutting-edge hardware and software solutions. From routers to wireless technologies, we meticulously tailor services to optimize connectivity, empowering your business with reliable and high-performing networks."
                        />
                        <FeatureBox
                            title="Future-Ready Solutions"
                            description="Explore future-ready solutions with us. Stay ahead in the rapidly evolving IT and telecom landscape with Nahal Tech. Our end-to-end procurement and delivery services focus on the latest technologies, ensuring your systems are not just upgraded but future-ready. Benefit from routers, switches, servers, and wireless solutions that harness the power of technology for a better future."
                        />
                        <FeatureBox
                            title="Seamless Integration"
                            description="Experience the advantage of seamless integration with Nahal Technologies. Our commitment to delivering the latest technologies extends to ensuring these solutions integrate effortlessly into your existing workflows. Enjoy reliable, efficient, and integrated systems that empower your business to thrive in the dynamic realms of IT and telecommunications."
                        />
                    </div>
                </div>
            </section>
            <CTA />
        </Layout>
    )
}
