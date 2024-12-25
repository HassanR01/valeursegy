import React from 'react'
import TitleSection from '../components/main/TitleSection'
import Footer from '../components/main/Footer'
import Header from '../components/main/Header'
import CareersList from '../components/careers/CareersList'


export const metadata = {
  title: "Valeurs - Careers",
  description: "Join Valeurs in revolutionizing healthcare in the Middle East and beyond. Discover our career opportunities and how you can make a difference in the wellness landscape.",
  openGraph: {
    title: "Valeurs - Careers",
    description: "Join Valeurs in revolutionizing healthcare in the Middle East and beyond. Discover our career opportunities and how you can make a difference in the wellness landscape.",
    image: '/logoWhite.png',
    url: 'https://valeursegy.vercel.app/careers',
    type: 'website',
    locale: 'en_US',
    siteName: 'Valeurs'
  }
};

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
