import React from 'react'
import TitleSection from '../components/main/TitleSection'
import Footer from '../components/main/Footer'
import Header from '../components/main/Header'
import PartnersList from '../components/partnerships/PartnersList'

export const metadata = {
  title: "Valeurs - Partnerships",
  description: "Valeurs is committed to making a positive impact on society through our wellness initiatives. We are dedicated to improving public health by providing access to advanced medical technologies and supporting community wellness programs.",
  openGraph: {
    title: "Valeurs - Partnerships",
    description: "Valeurs is committed to making a positive impact on society through our wellness initiatives. We are dedicated to improving public health by providing access to advanced medical technologies and supporting community wellness programs.",
    image: '/logoWhite.png',
    url: 'https://valeursegy.vercel.app/partnerships',
    type: 'website',
    locale: 'en_US',
    siteName: 'Valeurs'
  }
};

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
