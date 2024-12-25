import React from 'react'
import TitleSection from '../components/main/TitleSection';
import Footer from '../components/main/Footer';
import Header from '../components/main/Header';
import BlogsList from '../components/blogs/BlogsList';

export const metadata = {
  title: "Valeurs - Medical Blogs",
  description: "Stay updated with the latest medical blogs from Valeurs. Discover how our innovations are making a difference in the healthcare landscape.",
  openGraph: {
    title: "Valeurs - Medical Blogs",
    description: "Stay updated with the latest medical blogs from Valeurs. Discover how our innovations are making a difference in the healthcare landscape.",
    image: '/logoWhite.png',
    url: 'https://valeursegy.vercel.app/blogs',
    type: 'website',
    locale: 'en_US',
    siteName: 'Valeurs'
  }
};


export default function page() {
  return (
    <>
      <Header translate={'/ar/blogs'} />
      <TitleSection title={`Medical Blogs`} />
      <section className='min-h-screen w-full flex flex-col items-center justify-center'>
          <BlogsList />
      </section>
      <Footer />
    </>
  )
}
