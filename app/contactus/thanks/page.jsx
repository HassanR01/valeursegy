import Footer from '@/app/components/main/Footer'
import Header from '@/app/components/main/Header'
import TitleSection from '@/app/components/main/TitleSection'
import React from 'react'

export default function page() {
  return (
    <>
      <Header translate={'/ar/contactus'} />
      <TitleSection title={`Thank You From Valeurs`} />
      <Footer />
    </>
  )
}
