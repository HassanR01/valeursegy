import BlogPage from '@/app/components/blogs/BlogPage'
import Footer from '@/app/components/main/Footer'
import Header from '@/app/components/main/Header'
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

export default async function page({ params }) {
  const { blogTitle } = params
  const { blog } = await GetBlog(blogTitle)

  return (
    <>
      <Header translate={`/ar/blogs/${blogTitle}`} />
      <TitleSection title={blog.title} description={blog.description} />
      <BlogPage blog={blog} lang={'en'} />
      <Footer  />
    </>
  )
}
