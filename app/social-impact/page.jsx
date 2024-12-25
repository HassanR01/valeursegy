import React from 'react'
import TitleSection from '../components/main/TitleSection'
import Footer from '../components/main/Footer'
import Header from '../components/main/Header'



export default function page() {
  return (
    <>
      <Header translate={'/social-impact'} />
      <TitleSection title={`Social Impacts`} description={`Valeurs is committed to making a positive impact on society through our wellness initiatives. We are dedicated to improving public health by providing access to advanced medical technologies and supporting community wellness programs.`} />
      <section className='min-h-screen'>

      </section>
      <Footer />
    </>
  )
}
