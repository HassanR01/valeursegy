import React from 'react'
import ProductsList from '../../components/wellness/ProductsList';
import TitleSection from '../../components/main/TitleSection';
import FooterAr from '@/app/components/main/FooterAr';
import HeaderAr from '@/app/components/main/HeaderAr';

export const metadata = {
  title: "ڤالورز - حلول الصحة العامة",
  description: "في ڤالورز ، نحن ملتزمون بثورة الرعاية الصحية في الشرق الأوسط وخارجه من خلال دمج الذكاء الصناعي الطبي المتطور وحلول الصحة والعافية",
  openGraph: {
    title: "ڤالورز - حلول الصحة العامة",
    description: "في ڤالورز ، نحن ملتزمون بثورة الرعاية الصحية في الشرق الأوسط وخارجه من خلال دمج الذكاء الصناعي الطبي المتطور وحلول الصحة والعافية",
    image: '/logoWhite.png',
    url: 'https://valeursegy.vercel.app/ar/wellness',
    type: 'website',
    locale: 'ar_AR',
    siteName: 'ڤالورز'
  }
};



export default function page() {

  return (
    <>
      <HeaderAr translate={'/wellness'} />
      <TitleSection title={'حلولنا للصحة العامة'} />
      <section className="section min-h-screen w-full flex flex-col items-center justify-center">
        <ProductsList lang={'/ar'} />
      </section>
      
      <FooterAr />
    </>
  )
}
