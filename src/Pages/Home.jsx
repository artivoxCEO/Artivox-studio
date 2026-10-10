import React from 'react'
import Header from '../Components/Header'
import Brands from '../Components/Brands'
import ProjectSection from '../Components/ProjectSection'
import Services from '../Components/Services'
import TestimonialsSection from '../Components/TestimonialsSection'
import HowItWork from '../Components/HowItWork'
import FAQs from '../Components/FAQs'
import SeeResults from '../Components/SeeResults'
import CTA from '../Components/CTA'

const Home = () => {
  return (
    
    <>
      <Header/>
      <Brands/>
      <ProjectSection/>
      <Services/>
      <HowItWork/>
      <TestimonialsSection/>
      <SeeResults/>
      <FAQs/>
      <CTA/>
    
    </>
  )
}

export default Home
