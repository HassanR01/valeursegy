import React from 'react'
import TitleSection from '../components/main/TitleSection';
import Footer from '../components/main/Footer';
import Header from '../components/main/Header';
import HandleContactSend from '../components/contact/HandleContactSend';

export const metadata = {
  title: "Valeurs - Contact Us",
  description: "Contact Valeurs to learn more about our wellness solutions, partnerships, and social impact initiatives. We are committed to revolutionizing healthcare in the Middle East and beyond.",
  openGraph: {
    title: "Valeurs - Contact Us",
    description: "Contact Valeurs to learn more about our wellness solutions, partnerships, and social impact initiatives. We are committed to revolutionizing healthcare in the Middle East and beyond.",
    image: '/logoWhite.png',
    url: 'https://valeursegy.vercel.app/contactus',
    type: 'website',
    locale: 'en_US',
    siteName: 'Valeurs'
  }
};

export default function page() {
  return (
    <>
      <Header translate={'/ar/contactus'} />
      <TitleSection title={`Contact Valeurs`} />
      <section className=' mb-20 px-4'>
        <HandleContactSend />
      </section>
      <Footer />
    </>
  )
}
