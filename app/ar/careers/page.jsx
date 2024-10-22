import React from 'react'
import TitleSection from '../../components/main/TitleSection'
import HeaderAr from '@/app/components/main/HeaderAr'
import FooterAr from '@/app/components/main/FooterAr'
import CareersList from '@/app/components/careers/CareersList'

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
