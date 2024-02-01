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
