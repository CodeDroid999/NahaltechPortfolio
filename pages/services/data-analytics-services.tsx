import Layout from 'components/layout'
import CTA from 'components/services/CTA'
import FeatureBox from 'components/services/Featurebox/FeatureBox'
import HeroSection from 'components/services/HeroSection'
import ServiceSection from 'components/services/ServiceSection'


export default function DataAnalytics() {
    return (
        <Layout>
            <HeroSection Title1="Data" Title2=" Analytics" />
            <ServiceSection bg="https://i.postimg.cc/sgTrBTtk/data.png"
                p1="Nahal Technologies boasts a team of highly seasoned professionals dedicated to helping businesses harness valuable insights hidden within their data. We specialize in building advanced data warehouses complemented by predictive models, intricate queries, and intelligence reporting platforms."
                p2="Our approach goes beyond traditional data management, empowering businesses to make informed decisions, identify trends, and gain a competitive edge. Partner with Nahal Technologies to transform your data into a strategic asset, unlocking its full potential to drive growth, innovation, and success." />
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
