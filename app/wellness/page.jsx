import React from 'react'
import ProductsList from '../components/wellness/ProductsList';
import Footer from '../components/main/Footer';
import TitleSection from '../components/main/TitleSection';
import Header from '../components/main/Header';

export const metadata = {
  title: "Valeurs - Wellness Solutions",
  description: "At Valeurs, we are committed to revolutionizing healthcare in the Middle East and beyond by integrating cutting-edge medical AI and wellness solutions",
  openGraph: {
    title: "Valeurs - Wellness Solutions",
    description: "At Valeurs, we are committed to revolutionizing healthcare in the Middle East and beyond by integrating cutting-edge medical AI and wellness solutions",
    image: '/logoWhite.png',
    url: 'https://valeursegy.vercel.app/wellness',
    type: 'website',
    locale: 'en_US',
    siteName: 'Valeurs'
  }
};



export default function page() {

  return (
    <>
      <Header translate={'/ar/wellness'} />
      <TitleSection title={'Wellness Solutions'} />
      <section className="section min-h-screen w-full flex flex-col items-center justify-center">
        <ProductsList lang={''} />
      </section>
      
      <Footer />
    </>
  )
}
