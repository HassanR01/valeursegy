import React from 'react'
import TitleSection from '../components/main/TitleSection'
import Footer from '../components/main/Footer'
import Header from '../components/main/Header'
import PartnersList from '../components/partnerships/PartnersList'

export default function page() {
  return (
    <>
      <Header translate={'/ar/partnerships'} />
      <TitleSection title={`Partnerships`} />
      <section className='min-h-screen'>
        <PartnersList />
      </section>
      <Footer />
    </>
  )
}
