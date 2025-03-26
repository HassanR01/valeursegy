import ImpactPage from '@/app/components/impacts/ImpactPage'
import FooterAr from '@/app/components/main/FooterAr'
import HeaderAr from '@/app/components/main/HeaderAr'
import TitleSection from '@/app/components/main/TitleSection'
import React from 'react'

const GetImpact = async (id) => {
  const apiUrl = process.env.API_URL

  try {
    const res = await fetch(`${apiUrl}/api/impacts/${id}`, {
      cache: 'no-store'
    })

    return res.json()
  } catch (error) {
    console.log(error);

  }
}

export default async function page({ params }) {
  const { impactTitle } = params
  const { impact } = await GetImpact(impactTitle)

  return (
    <>
      <HeaderAr translate={`/social-impact/${impactTitle}`} />
      <TitleSection title={impact.title} />
      <ImpactPage impact={impact} lang={'ar'} />
      <FooterAr />
    </>
  )
}
