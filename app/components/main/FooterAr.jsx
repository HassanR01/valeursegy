'use client'
import React from 'react'
import bgFooter from '../../../public/FooterBg.jpg'
import Image from 'next/image'
import TransitionLink from './TransitionLink'
import Link from 'next/link'

export default function FooterAr() {
    let date = new Date()
    let year = date.getFullYear()

    return (
        <footer dir='rtl' className='w-full p-8 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between relative min-h-[50vh]' style={{
            backgroundImage: `url(${bgFooter.src})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="companySlogan my-8 flex flex-col items-center lg:items-start justify-center z-10">
                <div className="image">
                    <Image src={'/logoWhite.png'} width={150} height={100} alt='Logo Valeurs' />
                </div>
                <div className="text flex lg:items-start flex-col text-center lg:text-start items-center justify-center">
                    <h1 className="my-2 text-4xl lg:text-2xl max-w-xs font-black text-center lg:text-start text-mainColor">حلول ذكية <span className="text-priColor">للصحة العامة</span> مدى الحياة.</h1>
                    <p className='max-w-sm text-xl text-mainColor'>كسفراء للصحة العامة، نحن ملتزمون بتحسين جودة الحياة من خلال تقديم حلول متقدمة مدعومة بأحدث تقنيات الذكاء الاصطناعي.</p>
                </div>
            </div>
            <div className="quickLinks my-8 flex flex-col items-center lg:items-start justify-center z-10">
                <h2 className='text-2xl font-bold text-mainColor mb-4'>روابط مختصرة</h2>
                <ul className='flex flex-col items-center justify-center lg:items-start lg:justify-start'>
                    <li><TransitionLink className={`text-2xl ml-3 text-start lg:text-lg font-medium m-1 text-stone-300 duration-700 hover:text-mainColor flex items-center justify-center`} href={'/ar/our-company'}>عن شركتنا</TransitionLink></li>
                    <li><TransitionLink className={`text-2xl ml-3 text-start lg:text-lg font-medium m-1 text-stone-300 duration-700 hover:text-mainColor flex items-center justify-center`} href={'/ar/news'}>اخبارنا</TransitionLink></li>
                    <li><TransitionLink className={`text-2xl ml-3 text-start lg:text-lg font-medium m-1 text-stone-300 duration-700 hover:text-mainColor flex items-center justify-center`} href={'/ar/blogs'}>مقالاتنا</TransitionLink></li>
                </ul>
            </div>
            <div className="links flex my-8 flex-col items-center text-center lg:text-start lg:items-start justify-center z-10">
                <h2 className='text-xl font-bold text-mainColor mb-4'>شاركنا النجاح و الاخبار الجديدة</h2>
                <div className="input lg:min-w-[450px]">
                    <input type="email" name="email" id="email" placeholder='Enter Your Email' />
                </div>
                <div className="followUs w-full my-8 flex flex-row items-center justify-start">
                    <h4 className='text-mainColor text-xl font-medium'>تابعنا علي</h4>
                    <div className="links mr-4 flex justify-around items-center flex-row">
                        <Link className='mx-3' href={"https://www.facebook.com/valeurs.eg"} target='_blank'><Image src={'/facebookIcon.png'} width={30} height={30} alt='Facebook Icon' /></Link>
                        <Link className='mx-3' href={"https://www.youtube.com/@ValeursEgypt"} target='_blank'><Image src={'/youtube.png'} width={30} height={30} alt='Tiktok Icon' /></Link>
                        <Link className='mx-3' href={"https://www.instagram.com/valeurs.egypt"} target='_blank'><Image src={'/instagram.png'} width={30} height={30} alt='instagram Icon' /></Link>
                        <Link className='mx-3' href={"http://linkedin.com/company/valeursegypt"} target='_blank'><Image src={'/linkedin.png'} width={30} height={30} alt='linkedin Icon' /></Link>
                    </div>
                </div>
            </div>

            <div className="w-full absolute bottom-0 left-0 flex mt-4 text-center flex-wrap items-center justify-around bg-white z-10 p-2">
                <p>Copyright<sup>&copy;</sup>{year} <Link className='text-blue-600 font-semibold' href={'https://www.rockaidev.com'}>Rockai Dev</Link> | All Rights Reserved.</p>
                <p><Link className='font-bold mx-2' href="/">Terms {`&`} conditions</Link> <Link className='font-bold mx-2' href="/">Privacy Policy</Link></p>
            </div>



            {/* Handle Lights */}
            <div className="absolute inset-0 bg-whiteColor bg-opacity-95"></div>
        </footer>
    )
}
