import React from 'react'
import TitleSection from '../components/main/TitleSection'
import Footer from '../components/main/Footer'
import Header from '../components/main/Header'

export default function page() {
  return (
    <>
      <Header translate={'/ar/news'} />
      <TitleSection title={`Our News`} description={`Stay updated with the latest developments at Valeurs. Discover how our innovations are making a difference in the wellness landscape.`} />
      <section className='min-h-screen'>

      </section>
      <Footer />
    </>
  )
}
