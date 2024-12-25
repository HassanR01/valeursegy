'use client'
import React, { useEffect, useState } from 'react'
import Loading from '../main/Loading'
import Image from 'next/image'
import TransitionLink from '../main/TransitionLink'
import { useDataContext } from '../Context/DataContext'

export default function ImpactsList({ lang }) {
    const [isloading, setIsloading] = useState(true)

    const { impacts } = useDataContext()

    if (impacts) {
        return (
            <>
                <div className="impactsList w-full flex flex-wrap items-center justify-around">
                    {impacts.map((now, ind) => (
                        <TransitionLink href={`/impacts/${now.title}`} className="now cursor-pointer hover:shadow-xl duration-500 relative w-full lg:w-[45%] min-w-[300px] h-[320px] rounded-tr-xl rounded-bl-xl overflow-hidden m-4" key={ind}>
                            <Image className='w-full h-full' src={now.images[0]} width={2000} height={2000} alt={lang === 'ar' ? now.titleAr : now.title} />
                            <div className="details absolute w-full h-full top-0 left-0 bg-whiteColor bg-opacity-70 flex items-center justify-center flex-col p-4">
                                <h1 className='lg:text-4xl text-3xl font-bold text-mainColor'>{lang === 'ar' ? now.titleAr : now.title}</h1>
                                <span className='text-mainColor text-lg'>{lang === 'ar' ? `تاريخ الحدث: ${new Date(now.date).toLocaleDateString()}` : `Social Impact Date: ${new Date(now.date).toLocaleDateString()}`}</span>
                                <p className='text-xl text-mainColor font-semibold'>{lang === 'ar' ? now.descriptionAr : now.description}</p>
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
