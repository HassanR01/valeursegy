'use client'
import { delay, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import TransitionLink from './TransitionLink'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className='w-full fixed top-0 left-0 flex flex-col items-start bg-mainColor justify-start z-50'
    >
      <div onClick={() => setOpenMenu(!openMenu)} className="openmenuIcon absolute flex top-[50px] lg:hidden right-5 cursor-pointer rounded-full text-white items-center justify-center w-8 h-8 bg-whiteColor">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" /> </svg>
      </div>
      <div className="mainLinks w-full flex items-center justify-between p-2 bg-black">
        <div className="lang mx-2 text-mainColor flex items-center justify-center"><button className='flex items-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">   <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /> </svg></button></div>
        <div className="links flex items-center justify-center">
          <TransitionLink className='text-lg text-mainColor mx-2' href={'/partnerships'}>Partnerships</TransitionLink>
          <TransitionLink className='text-lg text-mainColor mx-2' href={'/careers'}>Careers</TransitionLink>
          <TransitionLink className='text-lg text-mainColor mx-2' href={'/contactus'}>Contact Us</TransitionLink>
        </div>
      </div>
      <nav className='flex lg:flex-row flex-col justify-start lg:justify-between items-start w-full px-4'>
        <div className="logo">
          <TransitionLink href={'/'} >
          <Image src={'/logo.png'} width={120} height={70} alt='Logo Valeurs' />
          </TransitionLink>
        </div>
        <ul className={`flex flex-col lg:flex-row items-start lg:items-center justify-center ${openMenu ? "h-screen" : "h-0 lg:h-auto"} overflow-hidden duration-700`}>
          <motion.li initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.5 }} onClick={() => setOpenMenu(false)}><TransitionLink className={`p-1 text-2xl ml-3 text-start lg:text-lg font-medium m-1 text-whiteColor flex items-center justify-center`} href={'/our-company'}>Our Company</TransitionLink></motion.li>
          <motion.li initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.8 }} onClick={() => setOpenMenu(false)}><TransitionLink className={`p-1 text-2xl ml-3 text-start lg:text-lg font-medium m-1 text-whiteColor flex items-center justify-center`} href={'/wellness'}>Our Wellness Solutions</TransitionLink></motion.li>
          <motion.li initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 1.1 }} onClick={() => setOpenMenu(false)}><TransitionLink className={`p-1 text-2xl ml-3 text-start lg:text-lg font-medium m-1 text-whiteColor flex items-center justify-center`} href={'/bioPrint'}>Social Impact</TransitionLink></motion.li>
          <motion.li initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 1.4 }} onClick={() => setOpenMenu(false)}><TransitionLink className={`p-1 text-2xl ml-3 text-start lg:text-lg font-medium m-1 text-whiteColor flex items-center justify-center`} href={'/meeting-room'}>Our News</TransitionLink></motion.li>
          <motion.li initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 1.7 }} onClick={() => setOpenMenu(false)}><TransitionLink className={`p-1 text-2xl ml-3 text-start lg:text-lg font-medium m-1 text-whiteColor flex items-center justify-center`} href={'/blogs'}>Blogs</TransitionLink></motion.li>
        </ul>
      </nav>

    </motion.header>
  )
}
