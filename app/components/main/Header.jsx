'use client'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import TransitionLink from './TransitionLink'
import { useRouter } from 'next/navigation'
import MenuBar from './menuBar'

export default function Header({ translate }) {
  const [openMenu, setOpenMenu] = useState(false)
  const router = useRouter()

  const translatePage = () => {
    router.push(translate)
  }

  // Scroll Header Change Color
  const [scrollY, setScrollY] = useState(0)
  const controls = useAnimation()

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (scrollY > 30) {
      controls.start({ backgroundColor: "#ffffff" })

    } else {
      controls.start({ backgroundColor: "transparent" })
    }
  }, [scrollY, controls])

  return (
    <motion.header
      animate={controls}
      initial={{ backgroundColor: 'transparent' }}
      transition={{ duration: 0.5 }}
      className='fixed w-full h-[100px] top-0 left-0 flex flex-col items-center text-white justify-start z-[100] duration-500'
    >

      <div className="preMenu hidden lg:flex bg-black w-full p-1">
        <nav className='w-full'>
          <ul className='w-full flex items-center justify-end'>
            <li><TransitionLink className={`mx-4`} href={'/contactus'}>Contact Us</TransitionLink></li>
            <li><TransitionLink className={`mx-4`} href={'/partnerships'}>Partnerships</TransitionLink></li>
            <li><TransitionLink className={`mx-4`} href={'/careers'}>Careers</TransitionLink></li>
          </ul>
        </nav>
      </div>

      <div className="mainMenu w-full flex items-center justify-center relative h-full">
        <div className="title absolute top-0 left-0 w-full flex items-center justify-between p-3">
          <div onClick={() => setOpenMenu(!openMenu)} className={`menuIcon p-2 rounded-full cursor-pointer flex items-center justify-center z-50 ${openMenu ? "bg-mainColor text-red-600" : "text-mainColor bg-whiteColor"}`}>
            {openMenu ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /> </svg>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" /></svg>
              </>
            )}
          </div>
          <TransitionLink href={translate} className={`menuIcon p-2 rounded-full cursor-pointer flex items-center justify-center text-mainColor bg-whiteColor z-50`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">   <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /> </svg>
          </TransitionLink>
        </div>
        <div className="menuBar flex items-center justify-center h-full z-20">
          <MenuBar lang={'en'} />
        </div>
        <div className={`menu duration-700 absolute flex flex-col items-center justify-center top-0 p-4 h-screen bg-whiteColor z-40 ${openMenu ? "left-0 w-full rounded-none" : "rounded-xl -left-[270px] w-[270px]"}`}>
          <nav>
            <ul className='h-full'>
              <motion.li initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }} onClick={() => setOpenMenu(false)}><TransitionLink className={`p-1 mx-4 my-4 text-mainColor flex items-center justify-center font-bold text-center text-2xl hover:scale-125 duration-700 lg:text-3xl`} href={'/'}><Image src={'/logoWhite.png'} width={300} height={300} alt='Valeurs Logo' /></TransitionLink></motion.li>
              <motion.li initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.5 }} onClick={() => setOpenMenu(false)}><TransitionLink className={`p-1 mx-4 my-4 text-mainColor flex items-center justify-center font-bold text-center text-2xl hover:scale-125 duration-700 lg:text-3xl`} href={'/our-company'}>Our Company</TransitionLink></motion.li>
              <motion.li initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.8 }} onClick={() => setOpenMenu(false)}><TransitionLink className={`p-1 mx-4 my-4 text-mainColor flex items-center justify-center font-bold text-center text-2xl hover:scale-125 duration-700 lg:text-3xl`} href={'/wellness'}>Our Wellness Solutions</TransitionLink></motion.li>
              <motion.li initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 1.1 }} onClick={() => setOpenMenu(false)}><TransitionLink className={`p-1 mx-4 my-4 text-mainColor flex items-center justify-center font-bold text-center text-2xl hover:scale-125 duration-700 lg:text-3xl`} href={'/social-impact'}>Social Impact</TransitionLink></motion.li>
              <motion.li initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 1.4 }} onClick={() => setOpenMenu(false)}><TransitionLink className={`p-1 mx-4 my-4 text-mainColor flex items-center justify-center font-bold text-center text-2xl hover:scale-125 duration-700 lg:text-3xl`} href={'/contactus'}>Contact Us</TransitionLink></motion.li>
              <motion.li initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 1.7 }} onClick={() => setOpenMenu(false)}><TransitionLink className={`p-1 mx-4 my-4 text-mainColor flex items-center justify-center font-bold text-center text-2xl hover:scale-125 duration-700 lg:text-3xl`} href={'/news'}>Our News</TransitionLink></motion.li>
              <motion.li initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 1.9 }} onClick={() => setOpenMenu(false)}><TransitionLink className={`p-1 mx-4 my-4 text-mainColor flex items-center justify-center font-bold text-center text-2xl hover:scale-125 duration-700 lg:text-3xl`} href={'/blogs'}>Blogs</TransitionLink></motion.li>
              <motion.li initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 2.1 }} onClick={() => setOpenMenu(false)}><TransitionLink className={`p-1 mx-4 my-1 text-mainColor flex items-center justify-center font-medium text-center text-lg hover:scale-125 duration-700 lg:text-xl`} href={'/partnerships'}>Partnerships</TransitionLink></motion.li>
              <motion.li initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 2.3 }} onClick={() => setOpenMenu(false)}><TransitionLink className={`p-1 mx-4 my-1 text-mainColor flex items-center justify-center font-medium text-center text-lg hover:scale-125 duration-700 lg:text-xl`} href={'/careers'}>Careers</TransitionLink></motion.li>
            </ul>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}
