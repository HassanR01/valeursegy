import React from 'react'
import TitleSection from '../../components/main/TitleSection';
import HeaderAr from '@/app/components/main/HeaderAr';
import FooterAr from '@/app/components/main/FooterAr';
import HandleContactSendAr from '@/app/components/contact/HandleContactSendAr';

export const metadata = {
  title: "ڤالورز - تواصل معنا",
  description: "تواصل معنا للحصول على مزيد من المعلومات حول منتجاتنا وخدماتنا",
  openGraph: {
    title: "ڤالورز - تواصل معنا",
    description: "تواصل معنا للحصول على مزيد من المعلومات حول منتجاتنا وخدماتنا",
    image: '/logoWhite.png',
    url: 'https://valeursegy.vercel.app/ar/contactus',
    type: 'website',
    locale: 'ar_AR',
    siteName: 'ڤالورز'
  }
};


export default function page() {
  return (
    <>
      <HeaderAr translate={'/contactus'} />
      <TitleSection title={`تواصل معنا`} />
      <section className='min-h-screen'>
        <HandleContactSendAr />
      </section>
      <FooterAr />
    </>
  )
}
