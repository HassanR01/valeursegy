import React from 'react'
import TitleSection from '../../components/main/TitleSection'
import HeaderAr from '@/app/components/main/HeaderAr'
import FooterAr from '@/app/components/main/FooterAr'

export default function page() {
  return (
    <>
      <HeaderAr translate={'/careers'} />
      <TitleSection title={`انضم إلينا`} />
      <section className='min-h-screen'>

      </section>
      <FooterAr />
    </>
  )
}
