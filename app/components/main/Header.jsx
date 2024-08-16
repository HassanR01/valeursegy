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
      transition={{ duration: 1 , delay:1}}
      className='w-full bg-transparent fixed top-0 left-0 flex items-start justify-start z-50'
    >
      <div onClick={() => setOpenMenu(!openMenu)} className="openmenuIcon absolute flex top-5 lg:hidden left-5 cursor-pointer rounded-full text-white items-center justify-center w-10 h-10 bg-whiteColor">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" /> </svg>
      </div>
      <nav className='w-full flex items-center justify-center'>
        <ul className={`w-full p-4 duration-700 ${openMenu ? " h-screen opacity-100 lg:h-auto": "opacity-0 lg:opacity-100 h-0 lg:h-auto overflow-hidden p-0 lg:p-4"} bg-white lg:bg-transparent bg-opacity-50 lg:flex-row flex-col items-center justify-center flex`}>
          <motion.li initial={{opacity: 0, x: 20}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.7, delay: 0.5}}><TransitionLink className={`p-1 w-[150px] rounded-full text-lg font-medium m-1 text-mainColor flex items-center justify-center text-center bg-whiteColor`} href={'/wellness'}>Wellness</TransitionLink></motion.li>
          <motion.li initial={{opacity: 0, x: 20}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.7, delay: 0.8}}><TransitionLink className={`p-1 w-[150px] rounded-full text-lg font-medium m-1 text-mainColor flex items-center justify-center text-center bg-whiteColor`} href={'/bioPrint'}>Bio Print</TransitionLink></motion.li>
          <motion.li initial={{opacity: 0, x: 20}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.7, delay: 1.1}}><TransitionLink className={`p-1 w-[150px] rounded-full text-lg font-medium m-1 text-mainColor flex items-center justify-center text-center bg-whiteColor`} href={'/meeting-room'}>Meeting</TransitionLink></motion.li>
          <motion.li initial={{opacity: 0, x: 20}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.7, delay: 1.4}}><TransitionLink className={`p-1 w-[150px] rounded-full text-lg font-medium m-1 text-mainColor flex items-center justify-center text-center bg-whiteColor`} href={'/blogs'}>Blogs</TransitionLink></motion.li>
          <motion.li initial={{opacity: 0, x: 20}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.7, delay: 1.7}}><TransitionLink className={`p-1 w-[150px] rounded-full text-lg font-medium m-1 text-mainColor flex items-center justify-center text-center bg-whiteColor`} href={'/aboutus'}>About Us</TransitionLink></motion.li>
          <motion.li initial={{opacity: 0, x: 20}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.7, delay: 2}}><TransitionLink className={`p-1 w-[150px] rounded-full text-lg font-medium m-1 text-mainColor flex items-center justify-center text-center bg-whiteColor`} href={'/contactus'}>Contact Us</TransitionLink></motion.li>
          <motion.li initial={{opacity: 0, x: 20}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.7, delay: 2.3}}><TransitionLink className={`p-1 w-[150px] rounded-full text-lg font-medium m-1 text-mainColor flex items-center justify-center text-center bg-whiteColor`} href={'/dashboard'}>Dashboard</TransitionLink></motion.li>
        </ul>
     </nav>
    </motion.header>
  )
}
