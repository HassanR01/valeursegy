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


export default function page({ params }) {
  const { blogTitle } = params

  return (
    <div>page</div>
  )
}
