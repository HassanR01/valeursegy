import React from 'react'
import TransitionLink from './TransitionLink'

export default function MenuBar({ lang }) {
    return (
        <>
            {lang === 'ar' ? (
                <>

                    <nav className='lg:flex items-center justify-center hidden'>
                        <ul className='flex items-center justify-center'>
                            <li className='text-whiteColor mx-4 cursor-pointer font-bold text-lg'><TransitionLink className={`py-1 px-4 flex items-center justify-center`} href={'/ar'}>الرئيسية</TransitionLink></li>
                            <li className='text-whiteColor mx-4 cursor-pointer font-bold text-lg'><TransitionLink className={`py-1 px-4 flex items-center justify-center`} href={'/ar/our-company'}>شركتنا</TransitionLink></li>
                            <li className='text-whiteColor mx-4 cursor-pointer font-bold text-lg'><TransitionLink className={`py-1 px-4 flex items-center justify-center`} href={'/ar/wellness'}>حلولنا للصحة العامة</TransitionLink></li>
                            <li className='text-whiteColor mx-4 cursor-pointer font-bold text-lg'><TransitionLink className={`py-1 px-4 flex items-center justify-center`} href={'/ar/blogs'}>مقالات</TransitionLink></li>
                            <li className='text-whiteColor mx-4 cursor-pointer font-bold text-lg'><TransitionLink className={`py-1 px-4 flex items-center justify-center`} href={'/ar/news'}>اخبارنا</TransitionLink></li>
                        </ul>
                    </nav>

                </>
            ) : (
                    <>
                    <nav className='lg:flex items-center justify-center hidden'>
                        <ul className='flex items-center justify-center'>
                            <li className='text-whiteColor mx-4 cursor-pointer font-bold text-lg'><TransitionLink className={`py-1 px-4 flex items-center justify-center`} href={'/'}>Home</TransitionLink></li>
                            <li className='text-whiteColor mx-4 cursor-pointer font-bold text-lg'><TransitionLink className={`py-1 px-4 flex items-center justify-center`} href={'/our-company'}>Our Company</TransitionLink></li>
                            <li className='text-whiteColor mx-4 cursor-pointer font-bold text-lg'><TransitionLink className={`py-1 px-4 flex items-center justify-center`} href={'/wellness'}>Our Wellness Soloutions</TransitionLink></li>
                            <li className='text-whiteColor mx-4 cursor-pointer font-bold text-lg'><TransitionLink className={`py-1 px-4 flex items-center justify-center`} href={'/blogs'}>Blogs</TransitionLink></li>
                            <li className='text-whiteColor mx-4 cursor-pointer font-bold text-lg'><TransitionLink className={`py-1 px-4 flex items-center justify-center`} href={'/news'}>News</TransitionLink></li>
                        </ul>
                    </nav>
                        
                </>
            )}
        </>
    )
}
