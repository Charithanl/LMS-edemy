import React from 'react'
import Hero from '../../../components/educator/students/Hero'
import Companies from '../../../components/educator/students/companies'
import CoursesSection from '../../../components/educator/students/CoursesSection'
import TestimonialsSection from '../../../components/educator/students/TestimonialsSection'
import CallToAction from '../../../components/educator/students/CallToAction'
import Footer from '../../../components/educator/students/footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero />
      <Companies />
      <CoursesSection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home