import React from 'react'
import TitleSection from '../../components/main/TitleSection'
import FooterAr from '@/app/components/main/FooterAr'
import HeaderAr from '@/app/components/main/HeaderAr'
import PartnersList from '@/app/components/partnerships/PartnersList'

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
