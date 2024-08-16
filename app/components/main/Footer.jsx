'use client'
import React from 'react'
import bgFooter from '../../../public/FooterBg.jpg'
import Image from 'next/image'
import TransitionLink from './TransitionLink'

export default function Footer() {
    return (
        <footer className='w-full p-8 flex flex-col lg:flex-row items-start justify-between relative min-h-[50vh]' style={{
            backgroundImage: `url(${bgFooter.src})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="companySlogan flex flex-col items-start justify-center z-10">
                <div className="image">
                    <Image src={'/logoWhite.png'} width={150} height={100} alt='Logo Valeurs' />
                </div>
                <div className="text">
                    <h1 className="my-2 text-4xl lg:text-2xl max-w-xs font-black text-start text-mainColor">Smart Solutions for <span className="text-priColor">Lifelong</span> Wellness.</h1>
                    <p className='max-w-sm text-xl text-mainColor'>Our products and services are designed to support a healthier future, ensuring that every individual experiences the best in medical care and wellness</p>
                </div>
            </div>
            <div className="quickLinks flex flex-col items-start justify-center z-10">
                <h2 className='text-2xl font-bold text-mainColor mb-4'>Quick Links</h2>
                <ul className='flex flex-col items-start justify-start'>
                    <li><TransitionLink className={`text-2xl ml-3 text-start lg:text-lg font-medium m-1 text-mainColor flex items-center justify-center`} href={'/our-company'}>Our Company</TransitionLink></li>
                    <li><TransitionLink className={`text-2xl ml-3 text-start lg:text-lg font-medium m-1 text-mainColor flex items-center justify-center`} href={'/wellness'}>Our Wellness Solutions</TransitionLink></li>
                    <li><TransitionLink className={`text-2xl ml-3 text-start lg:text-lg font-medium m-1 text-mainColor flex items-center justify-center`} href={'/bioPrint'}>Social Impact</TransitionLink></li>
                    <li><TransitionLink className={`text-2xl ml-3 text-start lg:text-lg font-medium m-1 text-mainColor flex items-center justify-center`} href={'/meeting-room'}>Our News</TransitionLink></li>
                    <li><TransitionLink className={`text-2xl ml-3 text-start lg:text-lg font-medium m-1 text-mainColor flex items-center justify-center`} href={'/blogs'}>Blogs</TransitionLink></li>
                </ul>
            </div>
            <div className="links flex flex-col items-start justify-center z-10">
                <h2 className='text-2xl font-bold text-mainColor mb-4'>Be a one of the family to be updated</h2>
                <div className="input lg:min-w-[450px]">
                    <input type="email" name="email" id="email" placeholder='Enter Your Email' />
                </div>
                <div className="followUs my-2 flex flex-row items-start justify-center">
                    <h4 className='text-mainColor text-xl font-medium'>Follow Us</h4>
                </div>
            </div>





            {/* Handle Lights */}
            <div className="absolute inset-0 bg-whiteColor bg-opacity-95"></div>
        </footer>
    )
}
