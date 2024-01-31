import AboutHeroArea from 'components/home/about-hero'
import AboutSection from 'components/home/about-section'
import MissionSection from 'components/home/misssion-section'
import VisionSection from 'components/home/vission-section'
import Layout from 'components/layout'
import HeroSection from 'components/services/HeroSection'
import Head from 'next/head'


export default function About() {
    return (
        <Layout>
            <HeroSection Title1="Network" Title2=" Design Services" />
            <AboutSection />
            <MissionSection />
            <VisionSection />
        </Layout>
    )
}
