import Footer from '@/app/components/main/Footer'
import Header from '@/app/components/main/Header'
import TitleSection from '@/app/components/main/TitleSection'
import React from 'react'

export const metadata = {
  title: "Valeurs - Thank You",
  description: "Thank you for contacting Valeurs. We will get back to you shortly.",
  openGraph: {
    title: "Valeurs - Thank You",
    description: "Thank you for contacting Valeurs. We will get back to you shortly.",
    image: '/logoWhite.png',
    url: 'https://valeursegy.vercel.app/contactus/thanks',
    type: 'website',
    locale: 'en_US',
    siteName: 'Valeurs'
  }
};

export default function page() {
  return (
    <>
      <Header translate={'/ar/contactus'} />
      <TitleSection title={`Thank You From Valeurs`} />
      <Footer />
    </>
  )
}
