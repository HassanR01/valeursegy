import React from 'react'
import TitleSection from '../../components/main/TitleSection'
import HeaderAr from '@/app/components/main/HeaderAr'
import FooterAr from '@/app/components/main/FooterAr'
import NewsList from '@/app/components/news/NewsList'

export default function page() {
  return (
    <>
      <HeaderAr translate={'/news'} />
      <TitleSection title={`اخبارنا`} description={`كن على اطلاع بأحدث التطورات في فالورز. اكتشف كيف تساهم ابتكاراتنا في إحداث فرق في مجال العافية.`} />
      <section className='mb-10 flex items-center w-full justify-center flex-col'>
        <NewsList lang={'ar'} />
      </section>
      <FooterAr />
    </>
  )
}
