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
                            title="Pioneeering Technology" description="Embark on a journey of educational transformation with Nahal Technologies. Our Entertainment & Media services pioneer tailored education technology solutions, creating personalized and interactive learning experiences. From AI-enhanced course delivery to self-paced eLearning modules, we redefine the landscape of education."
                        />
                        <FeatureBox
                            title="Scalability"
                            description="Partnering with Nahal Technologies opens doors to education beyond traditional boundaries. Our commitment to innovation expands accessibility and drives excellence in education. Experience the future of learning where technology enhances engagement, fosters individualized learning paths, and prepares students for success in an ever-evolving world."
                        />
                        <FeatureBox
                            title="Future Focused"
                            description="Nahal Technologies empowers institutions to embrace the future of learning. Our Entertainment & Media services are designed to enhance engagement, foster individualized learning paths, and prepare students for success. Join us in shaping the future of education where technology is not just a tool but a transformative force."
                        />
                    </div>
                </div>
            </section>
            <CTA />
        </Layout>
    )
}
