'use client'
import React from 'react'
import bgFooter from '../../../public/FooterBg.jpg'
import Image from 'next/image'
import TransitionLink from './TransitionLink'
import Link from 'next/link'

export default function Footer() {
    let date = new Date()
    let year = date.getFullYear()

    return (
        <footer className='w-full p-8 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between relative min-h-[50vh]' style={{
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
                    <h1 className="my-2 text-4xl lg:text-2xl max-w-xs font-black text-center lg:text-start text-mainColor">Smart Solutions for <span className="text-priColor">Lifelong</span> Wellness.</h1>
                    <p className='max-w-sm text-xl text-mainColor'>Our products and services are designed to support a healthier future, ensuring that every individual experiences the best in medical care and wellness</p>
                </div>
            </div>
            <div className="quickLinks my-8 flex flex-col items-center lg:items-start justify-center z-10">
                <h2 className='text-2xl font-bold text-mainColor mb-4'>Quick Links</h2>
                <ul className='flex flex-col items-center justify-center lg:items-start lg:justify-start'>
                    <li><TransitionLink className={`text-2xl ml-3 text-start lg:text-lg font-medium m-1 text-mainColor flex items-center justify-center`} href={'/our-company'}>Our Company</TransitionLink></li>
                    <li><TransitionLink className={`text-2xl ml-3 text-start lg:text-lg font-medium m-1 text-mainColor flex items-center justify-center`} href={'/wellness'}>Our Wellness Solutions</TransitionLink></li>
                    <li><TransitionLink className={`text-2xl ml-3 text-start lg:text-lg font-medium m-1 text-mainColor flex items-center justify-center`} href={'/bioPrint'}>Social Impact</TransitionLink></li>
                    <li><TransitionLink className={`text-2xl ml-3 text-start lg:text-lg font-medium m-1 text-mainColor flex items-center justify-center`} href={'/meeting-room'}>Our News</TransitionLink></li>
                    <li><TransitionLink className={`text-2xl ml-3 text-start lg:text-lg font-medium m-1 text-mainColor flex items-center justify-center`} href={'/blogs'}>Blogs</TransitionLink></li>
                </ul>
            </div>
            <div className="links flex my-8 flex-col items-center text-center lg:text-start lg:items-start justify-center z-10">
                <h2 className='text-2xl font-bold text-mainColor mb-4'>Be one of the family to keep you updated</h2>
                <div className="input lg:min-w-[450px]">
                    <input type="email" name="email" id="email" placeholder='Enter Your Email' />
                </div>
                <div className="followUs my-2 flex flex-row items-start justify-center">
                    <h4 className='text-mainColor text-xl font-medium'>Follow Us</h4>
                </div>
            </div>

            <div className="w-full absolute bottom-0 left-0 flex mt-4 text-center flex-wrap items-center justify-around bg-white z-10 p-2">
                <p>Copyright<sup>&copy;</sup>{year} <Link className='text-blue-600 font-semibold' href={'https://www.rockaidev.com'}>Rockai Dev</Link> | All Rights Reserved.</p>
                <p><Link className='font-bold mx-2' href="/">Teams {`&`} conditions</Link> <Link className='font-bold mx-2' href="/">Privacy Policy</Link></p>
            </div>



            {/* Handle Lights */}
            <div className="absolute inset-0 bg-whiteColor bg-opacity-95"></div>
        </footer>
    )
}
