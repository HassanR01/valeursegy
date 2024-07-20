'use client'
import { motion } from 'framer-motion'
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
      onClick={() =>  setOpenMenu(!openMenu)}
        className={`icon w-10 h-10 cursor-pointer rounded-full flex items-center justify-center ${openMenu ? "bg-mainColor text-red-500 border-white border-2" : "bg-white text-black"}`}>
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
    </motion.header>
  )
}
