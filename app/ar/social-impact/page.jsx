import React from 'react'
import TitleSection from '../../components/main/TitleSection'
import FooterAr from '@/app/components/main/FooterAr'
import HeaderAr from '@/app/components/main/HeaderAr'
import ImpactsList from '@/app/components/impacts/ImpactsList'


export const metadata = {
  title: "Valeurs - الاحداث الاجتماعية",
  description: "تلتزم شركة فاليورز بإحداث تأثير إيجابي على المجتمع من خلال مبادراتها الخاصة بالصحة والعافية. ونحن ملتزمون بتحسين الصحة العامة من خلال توفير إمكانية الوصول إلى التقنيات الطبية المتقدمة ودعم برامج الصحة والعافية المجتمعية.",
  openGraph: {
    title: "Valeurs - الاحداث الاجتماعية",
    description: "تلتزم شركة فاليورز بإحداث تأثير إيجابي على المجتمع من خلال مبادراتها الخاصة بالصحة والعافية. ونحن ملتزمون بتحسين الصحة العامة من خلال توفير إمكانية الوصول إلى التقنيات الطبية المتقدمة ودعم برامج الصحة والعافية المجتمعية.",
    image: '/logoWhite.png',
    url: 'https://valeursegy.vercel.app/social-impact',
    type: 'website',
    locale: 'ar_AR',
    siteName: 'Valeurs'
  }
};

export default function page() {
  return (
    <>
      <HeaderAr translate={'/social-impact'} />
      <TitleSection title={`الاحداث الاجتماعية`} description={`تلتزم شركة فاليورز بإحداث تأثير إيجابي على المجتمع من خلال مبادراتها الخاصة بالصحة والعافية. ونحن ملتزمون بتحسين الصحة العامة من خلال توفير إمكانية الوصول إلى التقنيات الطبية المتقدمة ودعم برامج الصحة والعافية المجتمعية.`} />
      <section className='mb-10 flex items-center w-full justify-center flex-col'>
        <ImpactsList lang={'ar'} />
      </section>
      <FooterAr />
    </>
  )
}
