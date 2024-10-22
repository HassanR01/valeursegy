'use client'
import React, { useEffect, useState } from 'react'
import Loading from '../main/Loading'
import TransitionLink from '../main/TransitionLink'
import Link from 'next/link'

export default function CareersList({ lang }) {
    const [isLoading, setIsLoading] = useState(true)
    const [careers, setCareers] = useState(null)

    useEffect(() => {
        const GetCareers = async () => {
            try {
                const res = await fetch('/api/careers', {
                    cache: 'no-store'
                })

                const careers = await res.json()
                setCareers(careers.jobs)

            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false)
            }
        }

        GetCareers()
    }, [])

    if (!isLoading) {
        return (
            <>
                <div className="careersList lg:p-8 h-full w-full flex flex-wrap items-center lg:items-start justify-center lg:justify-start">
                    {careers.map((career, ind) => (
                        <TransitionLink href={lang === 'ar' ? `/ar/careers/${career.title}` : `/careers/${career.title}`} className="career w-[30%] min-w-[350px] p-5 pt-8 m-4 border rounded-xl flex flex-col items-start justify-center cursor-pointer duration-500 hover:shadow-xl" key={ind}>
                            <h2 className='font-bold text-2xl mb-2'>{lang === 'ar' ? career.titleAr : career.title}</h2>
                            <p className='font-semibold text-xl'>{lang === 'ar' ? "المسمى الوظيفي: " : "Job Title: "}<span className='font-light'>{lang === 'ar' ? career.jobTitleAr : career.jobTitle}</span></p>
                            <p className='font-semibold text-xl'>{lang === 'ar' ? "الدوام: " : "Job Type: "}<span className='font-light'>{lang === 'ar' ? career.jobTypeAr : career.jobType}</span></p>
                            <p className='font-semibold text-xl'>{lang === 'ar' ? "الخبرة: " : "Experience: "}<span className='font-light'>{career.experience}</span></p>
                            <Link href={career.applying} className='btnForm w-full'>{lang === 'ar' ? 'تقديم سريع' : "Quick Apply"}</Link>
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
