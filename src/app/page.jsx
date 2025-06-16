import React from 'react'
import Home from './home/page'
import AboutPage from './about/page'
import Portfolio from './portfolio/page'
import ContactPage from './contact/page'
import WelcomeScreen from './welcome/page'

const page = () => {
  return (
    <div className='bg-black'>
      <WelcomeScreen />
      <Home />
      <AboutPage />
      <Portfolio />
      <ContactPage />
    </div>
  )
}

export default page
