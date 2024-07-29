'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      trans={{ duration: 1 }}
      className='w-full py-4 px-4 bg-transparent fixed top-0 left-0 flex items-start justify-start z-50'
    >
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className={`icon w-10 h-10 cursor-pointer z-[100] rounded-full flex items-center justify-center ${openMenu ? "bg-mainColor text-red-500 border-white border-2" : "bg-white text-black mx-2"} duration-700`}>
        {openMenu ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /> </svg>
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" /></svg>
          </>
        )}
      </div>
      <nav className={`bg-transparent fixed top-0 left-0 flex items-start pt-4 justify-start duration-700 ${openMenu? "pl-16" : "pl-4"} z-50`}>
        <ul className='flex items-center justify-center'>
          <li className={`pagesIcon w-10 h-10 cursor-pointer absolute flex items-center justify-center ${openMenu? "lg:top-4 top-[70px] left-2 lg:left-[60px]" : "top-4 left-4"} duration-700 rounded-full flex items-center justify-center bg-white text-black mx-2`}><Link href={"/"}><Image src={'/stethoscope.png'} width={25} height={25} alt='Products' /></Link></li>
          <li className={`pagesIcon w-10 h-10 cursor-pointer absolute flex items-center justify-center ${openMenu? "lg:top-4 top-[130px] left-2 lg:left-[120px]" : "top-4 left-4"} duration-700 rounded-full flex items-center justify-center bg-white text-black mx-2`}><Link href={"/"}><Image src={'/medicine.png'} width={25} height={25} alt="medicine" /></Link></li>
          <li className={`pagesIcon w-10 h-10 cursor-pointer absolute flex items-center justify-center ${openMenu? "lg:top-4 top-[190px] left-2 lg:left-[180px]" : "top-4 left-4"} duration-700 rounded-full flex items-center justify-center bg-white text-black mx-2`}><Link href={"/"}><Image src={'/meeting.png'} width={25} height={25} alt="meeting" /></Link></li>
          <li className={`pagesIcon w-10 h-10 cursor-pointer absolute flex items-center justify-center ${openMenu? "lg:top-4 top-[250px] left-2 lg:left-[240px]" : "top-4 left-4"} duration-700 rounded-full flex items-center justify-center bg-white text-black mx-2`}><Link href={"/"}><Image src={'/blogs.png'} width={25} height={25} alt="blogs" /></Link></li>
          <li className={`pagesIcon w-10 h-10 cursor-pointer absolute flex items-center justify-center ${openMenu? "lg:top-4 top-[310px] left-2 lg:left-[300px]" : "top-4 left-4"} duration-700 rounded-full flex items-center justify-center bg-white text-black mx-2`}><Link href={"/"}><Image src={'/team.png'} width={25} height={25} alt="team" /></Link></li>
          <li className={`pagesIcon w-10 h-10 cursor-pointer absolute flex items-center justify-center ${openMenu ? "lg:top-4 top-[370px] left-2 lg:left-[360px]" : "top-4 left-4"} duration-700 rounded-full flex items-center justify-center bg-white text-black mx-2`}><Link href={"/"}><Image src={'/contact.png'} width={25} height={25} alt="contact" /></Link></li>
        </ul>
      </nav>
    </motion.header>
  )
}
