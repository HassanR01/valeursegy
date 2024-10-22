import FooterAr from '@/app/components/main/FooterAr'
import HeaderAr from '@/app/components/main/HeaderAr'
import TitleSection from '@/app/components/main/TitleSection'
import React from 'react'

export default function page() {
  return (
    <>
      <HeaderAr translate={'/ar/contactus'} />
      <TitleSection title={`شكراً لتواصلك معنا`} />
      <FooterAr />
    </>
  )
}
