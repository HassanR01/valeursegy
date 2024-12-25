import React from 'react'
import TitleSection from '../components/main/TitleSection'
import Footer from '../components/main/Footer'
import Header from '../components/main/Header'
import NewsList from '../components/news/NewsList'

export const metadata = {
  title: "Valeurs - News",
  description: "Stay updated with the latest developments at Valeurs. Discover how our innovations are making a difference in the wellness landscape.",
  openGraph: {
    title: "Valeurs - News",
    description: "Stay updated with the latest developments at Valeurs. Discover how our innovations are making a difference in the wellness landscape.",
    image: '/logoWhite.png',
    url: 'https://valeursegy.vercel.app/news',
    type: 'website',
    locale: 'en_US',
    siteName: 'Valeurs'
  }
};

export default function page() {
  return (
    <>
      <Header translate={'/ar/news'} />
      <TitleSection title={`Our News`} description={`Stay updated with the latest developments at Valeurs. Discover how our innovations are making a difference in the wellness landscape.`} />
      <section className='min-h-screen w-full flex flex-col items-center'>
        <NewsList />
      </section>
      <Footer />
    </>
  )
}
