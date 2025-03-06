import React from 'react'
import HomeHero from '../components/Hero/HomeHero'
import HomeBanner from '../components/Banner/HomeBanner'
import HomeAboutCard from '../components/Cards/HomeAboutCard'
import HomeServices from '../components/Services/HomeServices'
import BlogCard from '../components/Cards/BlogCard'
import HomeContent from '../components/HomeComponents/HomeContent'
import WorkingProcess from '../components/HomeComponents/WorkingProcess'
import FAQ from '../components/HomeComponents/FAQ'
import RepairBanner from '../components/HomeComponents/RepairBanner'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>

      <Helmet>
        <title>Best Tech Repair IT Services in Miami - Generationsfix</title>
        <meta
          name="keywords"
          content="Computer Repair Miami, Managed IT Services Miami, IT Support Miami"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <HomeHero />
      <RepairBanner />
      <HomeBanner />
      <HomeAboutCard />
      <HomeServices />
      <BlogCard />
      <WorkingProcess />
      <FAQ />
      <HomeContent />
    </div>
  )
}

export default Home
