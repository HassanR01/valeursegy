'use client'
import React, { useEffect, useState } from 'react'
import Loading from '../main/Loading'
import Image from 'next/image'
import TransitionLink from '../main/TransitionLink'
import { useDataContext } from '../Context/DataContext'

export default function BlogsList({ lang }) {
    const { blogs } = useDataContext()

    if (blogs) {
        return (
            <>
                <div className="blogsList w-full flex flex-wrap items-center justify-around">
                    {blogs.map((blog, ind) => (
                        <TransitionLink href={`${lang === 'ar' ? '/ar' : ""}/blogs/${blog.title}`} className="blog cursor-pointer hover:shadow-xl duration-500 relative w-full lg:w-[45%] min-w-[300px] h-[320px] rounded-tr-xl rounded-bl-xl overflow-hidden m-4" key={ind}>
                            <Image className='w-full h-full' src={blog.image} width={1000} height={1000} alt={lang === 'ar' ? blog.titleAr : blog.title} />
                            <div className="details absolute w-full h-full top-0 left-0 bg-whiteColor bg-opacity-85 flex items-center justify-center flex-col p-4">
                                <h1 className='lg:text-3xl mb-2 text-2xl font-bold text-mainColor'>{lang === 'ar' ? blog.titleAr : blog.title}</h1>
                                <p className='text-xl text-mainColor font-semibold'>{lang === 'ar' ? blog.descriptionAr : blog.description}..</p>
                                <span className='absolute bottom-2 left-4 text-mainColor text-lg'>{lang === 'ar' ? `اخر تحديث: ${new Date(blog.updatedAt).toLocaleDateString()}` : `Last Upadate: ${new Date(blog.updatedAt).toLocaleDateString()}`}</span>
                            </div>
                        </TransitionLink>
                    ))}
                </div>
            </>
        )
    } else {
        return (
            <Loading />
        )
    }
}
