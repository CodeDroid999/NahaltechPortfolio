import AboutHeroArea from 'components/home/about-hero'
import AboutSection from 'components/home/about-section'
import MissionSection from 'components/home/misssion-section'
import VisionSection from 'components/home/vission-section'
import Layout from 'components/layout'
import Head from 'next/head'


export default function About() {
    return (
        <Layout>
            <AboutHeroArea />
            <AboutSection />
            <MissionSection />
            <VisionSection />
        </Layout>
    )
}
