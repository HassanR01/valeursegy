import React from 'react'
import TitleSection from '../../components/main/TitleSection';
import FooterAr from '@/app/components/main/FooterAr';
import HeaderAr from '@/app/components/main/HeaderAr';
import BlogsList from '@/app/components/blogs/BlogsList';

export const metadata = {
  title: "ڤالورز - مقالات",
  description: "اكتشف مقالاتنا حول الصحة العامة والعافية والتغذية واللياقة البدنية والعلاجات الطبيعية والعلاجات البديلة",
  openGraph: {
    title: "ڤالورز - مقالات",
    description: "اكتشف مقالاتنا حول الصحة العامة والعافية والتغذية واللياقة البدنية والعلاجات الطبيعية والعلاجات البديلة",
    image: '/logoWhite.png',
    url: 'https://valeursegy.vercel.app/ar/blogs',
    type: 'website',
    locale: 'ar_AR',
    siteName: 'ڤالورز'
  }
};


export default function page() {
  return (
    <>
      <HeaderAr translate={'/blogs'} />
      <TitleSection title={`مقالات عن الصحة العامة`} />
      <section className='min-h-screen w-full'>
        <BlogsList lang={'ar'} />
      </section>
      <FooterAr />
    </>
  )
}
