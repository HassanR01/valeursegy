import React from 'react'
import TransitionLink from './TransitionLink'
import Link from 'next/link'
import { useDataContext } from '../Context/DataContext'

export default function MenuBar({ lang }) {

    const { products } = useDataContext()

    if (products) {


        return (
            <>
                {lang === 'ar' ? (
                    <>

                        <nav className='lg:flex items-center justify-center hidden'>
                            <ul className='flex items-center justify-center'>
                                <li className='relative group text-whiteColor mx-4 cursor-pointer text-lg'>
                                    <TransitionLink className={`py-1 px-4 flex items-center font-bold justify-center`} href={'/ar'}>الرئيسية</TransitionLink>
                                </li>
                                <li className='relative group text-whiteColor mx-4 cursor-pointer text-lg'>
                                    <TransitionLink className={`py-1 px-4 flex items-center font-bold justify-center`} href={'/ar/our-company'}>شركتنا</TransitionLink>
                                    {/* Dropdown Menu */}
                                    <div className="absolute w-[150px] overflow-hidden h-0 flex items-center justify-center px-1 group-hover:h-[150px] bg-white text-black  rounded-xl mt-1 shadow-lg duration-500">
                                        <ul className='w-full h-full flex flex-col items-center justify-around'>
                                            <li className='w-full'>
                                                <TransitionLink href="/ar/our-company#ouroverview" className="block rounded-xl duration-500 text-whiteColor font-semibold w-full text-center py-2">
                                                    نظرة عامة
                                                </TransitionLink>
                                            </li>
                                            <li className='w-full'>
                                                <TransitionLink href="/ar/our-company#vision" className="block rounded-xl duration-500 text-whiteColor font-semibold w-full text-center px-4 py-2">
                                                    رويتنا
                                                </TransitionLink>
                                            </li>
                                            <li className='w-full'>
                                                <TransitionLink href="/ar/our-company#meetourteam" className="block rounded-xl duration-500 text-whiteColor font-semibold w-full text-center px-4 py-2">
                                                    فريقنا
                                                </TransitionLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='relative group text-whiteColor mx-4 cursor-pointer text-lg'>
                                    <TransitionLink className={`py-1 px-4 flex items-center font-bold justify-center`} href={'/ar/wellness'}>حلولنا للصحة العامة</TransitionLink>
                                    {/* Dropdown Menu */}
                                    <div className="absolute w-full overflow-hidden h-0 flex items-center justify-center px-1 group-hover:h-[270px] bg-white text-black  rounded-xl mt-1 shadow-lg duration-500">
                                        <ul className='w-full h-full flex flex-col items-center justify-around'>
                                            <li className='w-full'>
                                                <TransitionLink href={`/ar/wellness/${products[0].name}`} className="block rounded-xl duration-500 text-whiteColor font-semibold w-full text-center py-2">
                                                    جهاز سو تشيك
                                                </TransitionLink>
                                            </li>
                                            <li className='w-full'>
                                                <TransitionLink href={`/ar/wellness/${products[4].name}`} className="block rounded-xl duration-500 text-whiteColor font-semibold w-full text-center px-4 py-2">
                                                    فحص الجينوم
                                                </TransitionLink>
                                            </li>
                                            <li className='w-full'>
                                                <TransitionLink href={`/ar/wellness/${products[1].name}`} className="block rounded-xl duration-500 text-whiteColor font-semibold w-full text-center px-4 py-2">
                                                    تكنولوجيا ملتا
                                                </TransitionLink>
                                            </li>
                                            <li className='w-full'>
                                                <TransitionLink href={`/ar/wellness/${products[3].name}`} className="block rounded-xl duration-500 text-whiteColor font-semibold w-full text-center px-4 py-2">
                                                    منتجات فيوجن
                                                </TransitionLink>
                                            </li>
                                            <li className='w-full'>
                                                <TransitionLink href={`/ar/wellness/${products[2].name}`} className="block rounded-xl duration-500 text-whiteColor font-semibold w-full text-center px-4 py-2">
                                                    الطباعة الحيوية
                                                </TransitionLink>
                                            </li>
                                            <li className='w-full'>
                                                <TransitionLink href={`/ar/wellness/${products[5].name}`} className="block rounded-xl duration-500 text-whiteColor font-semibold w-full text-center px-4 py-2">
                                                    دي ان ايه لايف
                                                </TransitionLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='relative group text-whiteColor mx-4 cursor-pointer text-lg'>
                                    <TransitionLink className={`py-1 px-4 flex items-center font-bold justify-center`} href={'/ar/blogs'}>مقالات</TransitionLink>
                                </li>
                                <li className='relative group text-whiteColor mx-4 cursor-pointer text-lg'>
                                    <TransitionLink className={`py-1 px-4 flex items-center font-bold justify-center`} href={'/ar/news'}>أخبارنا</TransitionLink>
                                </li>
                            </ul>
                        </nav>

                    </>
                ) : (
                    <>
                        <nav className='lg:flex items-center justify-center hidden'>
                            <ul className='flex items-center justify-center'>
                                <li className='relative group text-whiteColor mx-4 cursor-pointer text-lg'>
                                    <TransitionLink className={`py-1 px-4 flex items-center font-bold justify-center`} href={'/'}>Home</TransitionLink>
                                </li>
                                <li className='relative group text-whiteColor mx-4 cursor-pointer text-lg'>
                                    <TransitionLink className={`py-1 px-4 flex items-center font-bold justify-center`} href={'/our-company'}>Our Company</TransitionLink>
                                    <div className="absolute w-[150px] overflow-hidden h-0 flex items-center justify-center px-1 group-hover:h-[150px] bg-white text-black  rounded-xl mt-1 shadow-lg duration-500">
                                        <ul className='w-full h-full flex flex-col items-center justify-around'>
                                            <li className='w-full'>
                                                <TransitionLink href="/our-company#ouroverview" className="block rounded-xl duration-500 text-whiteColor font-semibold w-full text-center py-2">
                                                    Overview
                                                </TransitionLink>
                                            </li>
                                            <li className='w-full'>
                                                <TransitionLink href="/our-company#vision" className="block rounded-xl duration-500 text-whiteColor font-semibold w-full text-center px-4 py-2">
                                                    Our Vision
                                                </TransitionLink>
                                            </li>
                                            <li className='w-full'>
                                                <TransitionLink href="/our-company#meetourteam" className="block rounded-xl duration-500 text-whiteColor font-semibold w-full text-center px-4 py-2">
                                                    Our Team
                                                </TransitionLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='relative group text-whiteColor mx-4 cursor-pointer text-lg'>
                                    <TransitionLink className={`py-1 px-4 flex items-center font-bold justify-center`} href={'/wellness'}>Our Wellness Solutions</TransitionLink>
                                    {/* Dropdown Menu */}
                                    <div className="absolute w-full overflow-hidden h-0 flex items-center justify-center px-1 group-hover:h-[270px] bg-white text-black  rounded-xl mt-1 shadow-lg duration-500">
                                        <ul className='w-full h-full flex flex-col items-center justify-around'>
                                            <li className='w-full'>
                                                <TransitionLink href={`/wellness/${products[0].name}`} className="block rounded-xl duration-500 text-whiteColor font-semibold w-full text-center py-2">
                                                    So-Check / Oligo-Check
                                                </TransitionLink>
                                            </li>
                                            <li className='w-full'>
                                                <TransitionLink href={`/wellness/${products[4].name}`} className="block rounded-xl duration-500 text-whiteColor font-semibold w-full text-center px-4 py-2">
                                                    Gniom Check
                                                </TransitionLink>
                                            </li>
                                            <li className='w-full'>
                                                <TransitionLink href={`/wellness/${products[1].name}`} className="block rounded-xl duration-500 text-whiteColor font-semibold w-full text-center px-4 py-2">
                                                    Milta Technology
                                                </TransitionLink>
                                            </li>
                                            <li className='w-full'>
                                                <TransitionLink href={`/wellness/${products[3].name}`} className="block rounded-xl duration-500 text-whiteColor font-semibold w-full text-center px-4 py-2">
                                                    Fusion Apothecary
                                                </TransitionLink>
                                            </li>
                                            <li className='w-full'>
                                                <TransitionLink href={`/wellness/${products[2].name}`} className="block rounded-xl duration-500 text-whiteColor font-semibold w-full text-center px-4 py-2">
                                                    BioPrint
                                                </TransitionLink>
                                            </li>
                                            <li className='w-full'>
                                                <TransitionLink href={`/wellness/${products[5].name}`} className="block rounded-xl duration-500 text-whiteColor font-semibold w-full text-center px-4 py-2">
                                                    DNA Life
                                                </TransitionLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='relative group text-whiteColor mx-4 cursor-pointer text-lg'>
                                    <TransitionLink className={`py-1 px-4 flex items-center font-bold justify-center`} href={'/blogs'}>Blogs</TransitionLink>
                                </li>
                                <li className='relative group text-whiteColor mx-4 cursor-pointer text-lg'>
                                    <TransitionLink className={`py-1 px-4 flex items-center font-bold justify-center`} href={'/news'}>News</TransitionLink>
                                </li>
                            </ul>
                        </nav>

                    </>
                )}
            </>
        )
    }
}
