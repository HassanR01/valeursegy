import BlogPage from '@/app/components/blogs/BlogPage'
import FooterAr from '@/app/components/main/FooterAr'
import HeaderAr from '@/app/components/main/HeaderAr'
import TitleSection from '@/app/components/main/TitleSection'
import React from 'react'


const GetBlog = async (id) => {
  const apiUrl = process.env.API_URL

  try {
    const res = await fetch(`${apiUrl}/api/blogs/${id}`, {
      cache: 'no-store'
    })

    return res.json()
  } catch (error) {
    console.log(error);

  }
}

export async function generateMetadata({ params }) {
  const { blogTitle } = params
  const { blog } = await GetBlog(blogTitle)

  // Data Arabic

  return {
    title: `ڤالورز - ${blog.title}`,
    description: `${blog.description}`,
    openGraph: {
      title: `ڤالورز - ${blog.title}`,
      description: `${blog.description}`,
      image: '/logoWhite.png',
      url: `https://valeursegy.vercel.app/blogs/${blogTitle}`,
      type: 'website',
      locale: 'ar_AR',
      siteName: 'ڤالورز'
    }
  }
}


export default async function page({ params }) {
  const { blogTitle } = params
  const { blog } = await GetBlog(blogTitle)

  return (
    <>
      <HeaderAr translate={`/blogs/${blogTitle}`} />
      <TitleSection title={blog.titleAr} />
      <BlogPage blog={blog} lang={'ar'} />
      <FooterAr />
    </>
  )
}
