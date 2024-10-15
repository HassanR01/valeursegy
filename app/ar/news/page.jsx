import React from 'react'
import TitleSection from '../../components/main/TitleSection'
import HeaderAr from '@/app/components/main/HeaderAr'
import FooterAr from '@/app/components/main/FooterAr'

export default function page() {
  return (
    <>
      <HeaderAr translate={'/news'} />
      <TitleSection title={`اخبارنا`} description={`كن على اطلاع بأحدث التطورات في فالورز. اكتشف كيف تساهم ابتكاراتنا في إحداث فرق في مجال العافية.`} />
          <section className='min-h-screen'>

          </section>
          <FooterAr />
      </>
  )
}
