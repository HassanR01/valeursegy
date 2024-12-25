import FooterAr from '@/app/components/main/FooterAr'
import HeaderAr from '@/app/components/main/HeaderAr'
import TitleSection from '@/app/components/main/TitleSection'
import React from 'react'

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
      <HeaderAr translate={'/ar/contactus'} />
      <TitleSection title={`شكراً لتواصلك معنا`} />
      <FooterAr />
    </>
  )
}
