import Layout from 'components/layout'
import CTA from 'components/services/CTA'
import FeatureBox from 'components/services/Featurebox/FeatureBox'
import HeroSection from 'components/services/HeroSection'
import ServiceSection from 'components/services/ServiceSection'


export default function Entertainment() {
    return (
        <Layout>
            <HeroSection Title1="Entertainment" Title2=" & Media" />
            <ServiceSection bg="https://i.postimg.cc/Y08H18vL/entertainment.jpg"
                p1="Nahal Technologies pioneers tailored education technology solutions, creating personalized and interactive learning experiences. Leveraging capabilities such as AI-enhanced course delivery and self-paced eLearning modules, we redefine the landscape of education. Partnering with Nahal Technologies enables you to offer education that goes beyond traditional boundaries, expanding accessibility and driving excellence. "
                p2="Our commitment to innovation in education technology empowers institutions to embrace the future of learning, where technology enhances engagement, fosters individualized learning paths, and prepares students for success in an ever-evolving world." />
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
