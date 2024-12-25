import React from 'react'
import TitleSection from '../../components/main/TitleSection'
import FooterAr from '@/app/components/main/FooterAr'
import HeaderAr from '@/app/components/main/HeaderAr'
import PartnersList from '@/app/components/partnerships/PartnersList'

export const metadata = {
  title: "ڤالورز - شركاء النجاح",
  description: "تعاون مع شركاء النجاح لدينا لتحقيق النجاح المشترك. نحن نقدم حلولًا مخصصة للشركاء لتحقيق النجاح المشترك وتحقيق التميز في الرعاية الصحية.",
  openGraph: {
    title: "ڤالورز - شركاء النجاح",
    description: "تعاون مع شركاء النجاح لدينا لتحقيق النجاح المشترك. نحن نقدم حلولًا مخصصة للشركاء لتحقيق النجاح المشترك وتحقيق التميز في الرعاية الصحية.",
    image: '/logoWhite.png',
    url: 'https://valeursegy.vercel.app/ar/partnerships',
    type: 'website',
    locale: 'ar_AR',
    siteName: 'ڤالورز'
  }
};

export default function page() {
  return (
    <>
      <HeaderAr translate={'/partnerships'} />
      <TitleSection title={`شركاء النجاح`} />
      <section className='min-h-screen'>
        <PartnersList lang={'ar'} />
      </section>
      <FooterAr />
    </>
  )
}
