'use client'
import React from 'react'
import WelcomeScreen from '../Components/WelcomeScreen'
import HomeSection from '../Components/HomeSection'
import AboutSection from '../Components/AboutSection'
import Experience from '../Components/Experience'
import Portfolio from '../Components/Portfolio'
import ContactSection from '../Components/ContactSection'
import Navbar from '@/Components/Navbar'

const page = () => {
  return (
    <div className='bg-black'>
      <WelcomeScreen />
      <Navbar />
      <HomeSection />
      <AboutSection />
      <Experience />
      <Portfolio />
      <ContactSection />
    </div>
  )
}

export default page
