import HTMLReactParser from 'html-react-parser'
import Image from 'next/image'
import React from 'react'

export default function BlogPage({ blog, lang }) {
  const { title, keywords, image, description, sections, writer, titleAr, descriptionAr, sectionsAr } = blog

  console.log(sectionsAr)

  return (
    <>
      <section className='min-h-screen flex flex-col-reverse items-center justify-center lg:flex-row lg:items-start lg:justify-center p-4'>
        <div className="article flex flex-col items-center justify-start w-full lg:w-2/3 p-5">
          <div className="content w-full flex flex-col items-start justify-start">
            {lang === 'ar' ? sectionsAr.map((section, ind) => (
              <div className="section my-2 w-full flex flex-col items-start justify-start" key={ind}>
                <h1 className='lg:text-3xl text-2xl font-bold text-whiteColor'>{section.subTitleAr}</h1>
                <div className='text-xl text-black font-semibold'>{section.textAr ? HTMLReactParser(section.textAr): ''}</div>
              </div>
            )) : sections.map((section, ind) => (
              <div className="section my-2 w-full flex flex-col items-start justify-start" key={ind}>
                <h1 className='lg:text-3xl text-2xl font-bold text-whiteColor'>{section.subTitle}</h1>
                <div className='text-xl text-black font-semibold'>{section.text ? HTMLReactParser(section.text) : ''}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="imageAndInformations relative flex flex-col items-start justify-start lg:h-[140vh] w-full lg:w-[600px] lg:min-w-[600px] p-5">
          <div className="Content sticky top-32 left-0 w-full flex flex-col items-start justify-start">
            <div className="image w-full h-[200px] lg:h-[280px] relative flex items-center justify-center">
              <Image className='w-full h-full rounded-tr-xl rounded-bl-xl' src={image} width={1000} height={1000} alt={lang === 'ar' ? titleAr : title} />
            </div>
            <div className="titlesandSomeinfo flex flex-col items-start justify-start w-full">
              <h1 className='lg:text-xl mt-2 text-2xl font-bold text-whiteColor'>{lang === 'ar' ? titleAr : title}</h1>
              <p className='text-sm text-whiteColor font-semibold'>{lang === 'ar' ? descriptionAr : description}</p>
              <span className='text-whiteColor text-lg'>{lang === 'ar' ? `الكاتب: ${writer}` : `Writer: ${writer}`}</span>
              <span className='text-whiteColor text-lg'>{lang === 'ar' ? `اخر تحديث: ${new Date(blog.updatedAt).toLocaleDateString()}` : `Last Upadate: ${new Date(blog.updatedAt).toLocaleDateString()}`}</span>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
