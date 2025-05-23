import Footer from '@/app/components/main/Footer'
import Header from '@/app/components/main/Header'
import TitleSection from '@/app/components/main/TitleSection'
import NewsPage from '@/app/components/news/NewsPage'
import React from 'react'

const GetNews = async (id) => {
  const apiUrl = process.env.API_URL

  try {
    const res = await fetch(`${apiUrl}/api/news/${id}`, {
      cache: 'no-store'
    })

    return res.json()
  } catch (error) {
    console.log(error);

  }
}

export default async function page({ params }) {
  const { newsTitle } = params
  const { news } = await GetNews(newsTitle)

  return (
    <>
      <Header translate={`/ar/news/${newsTitle}`} />
      <TitleSection title={news.title} />
      <NewsPage news={news} lang={'en'} />
      <Footer  />
    </>
  )
}
