import React from 'react'
import TitleSection from '../components/main/TitleSection'
import Footer from '../components/main/Footer'
import Header from '../components/main/Header'
import CareersList from '../components/careers/CareersList'

export default function page() {
  return (
    <>
      <Header translate={'/ar/careers'} />
      <TitleSection title={`Join Us`} />
      <section className='mb-10 w-full flex items-center justify-center flex-col'>
        <CareersList />
      </section>
      <Footer />
    </>
  )
}
