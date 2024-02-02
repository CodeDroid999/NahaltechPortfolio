import Layout from 'components/layout'
import CTA from 'components/services/CTA'
import FeatureBox from 'components/services/Featurebox/FeatureBox'
import HeroSection from 'components/services/HeroSection'
import ServiceOverview from 'components/services/ServiceOverview'
import ServiceSection from 'components/services/ServiceSection'
<ServiceSection bg="https://i.postimg.cc/X73KqLKc/software.png" p1="At Nahal Technologies, Our data analytics solutions empower organizations to derive strategic, actionable insights using advanced analytics techniques including predictive modeling, machine learning algorithms, IoT data processing and custom BI dashboards."
    p2="By leveraging real-time data feeds integrated from across business units, we provide visibility into micro trends while our data scientists uncover macro opportunities. If leveraging data intelligence to steer competitive advantage and ROI appeals to you, let's connect." />

export default function SoftwareDev() {
    return (
        <Layout>
            <HeroSection Title1="Software" Title2=" Development Services" />
            <ServiceOverview Title="Software Development" bg="https://i.postimg.cc/X73KqLKc/software.png"
                p1="Nahal Technologies specializes in crafting future-ready, enterprise-grade software applications tailored to meet unique client requirements. Our expertise extends across web, mobile, and cloud platforms, ensuring a seamless integration that drives workflow excellence and provides a technological advantage."
                p2=" From conceptualization to deployment, our dedicated team navigates the complexities of software development, delivering solutions that not only meet but exceed your expectations. Embrace innovation and efficiency with Nahal Technologies, where every line of code is strategically woven to propel your business forward." />
            <section id="services" className="features_section bg-gray-100 layout_padding2">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2 className="text-gray-950">
                            Features
                        </h2>
                    </div>
                    <div className="row justify-center">
                        <FeatureBox
                            title="Workflow Excellence"
                            description="Drive workflow excellence with our enterprise-grade software applications. Nahal Tech's dedicated team guides you from conceptualization to deployment, navigating the intricacies of software development. Every line of code is strategically woven to exceed expectations, ensuring that your business operates with unmatched innovation and efficiency."
                        />
                        <FeatureBox
                            title="Scalability"
                            description="Our software development architecture allows seamless integration of new real-time data feeds and scalable cloud infrastructure to handle exponentially growing enterprise data volumes."
                        />
                        <FeatureBox
                            title="Progressive Software"
                            description="Embrace the future with Nahal Technologies' specialized software development services. Our expertise spans web, mobile, and cloud platforms, ensuring your software applications are not just current but future-ready. We craft solutions that align with your unique requirements, providing your business with a technological advantage.Drive workflow excellence with our enterprise-grade software applications. Nahal Tech's dedicated team guides you from conceptualization to deployment, navigating the intricacies of software development. "
                        />
                    </div>
                </div>
            </section>
            <CTA />
        </Layout>
    )
}
