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
