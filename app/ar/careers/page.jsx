import React from 'react'
import TitleSection from '../../components/main/TitleSection'
import HeaderAr from '@/app/components/main/HeaderAr'
import FooterAr from '@/app/components/main/FooterAr'
import CareersList from '@/app/components/careers/CareersList'

export const metadata = {
  title: "ڤالورز - انضم إلينا",
  description: "انضم إلى فريق عملنا وساهم في تحقيق رؤيتنا لتحسين جودة الرعاية الصحية في مصر.",
  openGraph: {
    title: "ڤالورز - انضم إلينا",
    description: "انضم إلى فريق عملنا وساهم في تحقيق رؤيتنا لتحسين جودة الرعاية الصحية في مصر.",
    image: '/logoWhite.png',
    url: 'https://valeursegy.vercel.app/ar/careers',
    type: 'website',
    locale: 'ar_AR',
    siteName: 'ڤالورز'
  }
};

export default function page() {
  return (
    <>
      <HeaderAr translate={'/careers'} />
      <TitleSection title={`انضم إلينا`} />
      <section className='mb-10 w-full flex flex-col items-center justify-center'>
        <CareersList lang={'ar'} />
      </section>
      <FooterAr />
    </>
  )
}
