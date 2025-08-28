import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Resume from './Resume/Resume'
import Project from './Projects/Project'
import Skills from './Skills/Skills'
import ClientReview from './ClientReview/ClientReview'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Services/>
      <Resume/>
      <Project/>
      <Skills/>
      <ClientReview/>
    </div>
  )
}

export default Home