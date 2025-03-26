import HTMLReactParser from 'html-react-parser'
import Image from 'next/image'
import React from 'react'

export default function NewsPage({ news, lang }) {
    const { title, titleAr, keyword, keywordAr, description, descriptionAr, date, images, details, detailsAr } = news
    return (
        <section className='w-full flex items-center justify-center flex-col py-10'>
            <div className='w-full md:w-3/4 lg:w-2/3 xl:w-1/2 flex items-center justify-center flex-col bg-white text-center rounded-lg overflow-hidden'>
                <Image 
                    className='w-full h-[300px] lg:h-[500px] object-cover' 
                    src={images[0]} 
                    width={2000} 
                    height={2000} 
                    alt={lang === 'ar' ? titleAr : title} 
                />
                <div className='p-6 w-full'>
                    <h1 className='text-4xl font-extrabold text-gray-800 mt-5 text-center'>
                        {lang === 'ar' ? titleAr : title}
                    </h1>
                    <div className='text-lg text-gray-700 mt-5 leading-relaxed w-full text-justify'>
                        {lang === 'ar' ? HTMLReactParser(detailsAr) : HTMLReactParser(details)}
                    </div>
                </div>
            </div>
        </section>
    )
}
