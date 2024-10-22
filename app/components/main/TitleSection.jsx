'use client'
import { motion } from 'framer-motion'
import OurCompany from '../../../public/bgOurCompany.jpg'
import React from 'react'

export default function TitleSection({title, description , lang}) {

  return (
      <>
          <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} id='ouroverview' className="section w-[95%] rounded-tr-2xl rounded-bl-2xl h-[50vh] my-[100px] relative px-4 flex flex-col items-center justify-center overflow-hidden" style={{
              backgroundImage: `url(${OurCompany.src})`,
              backgroundPosition: "start",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
          }}>

              <div className="text z-10 flex items-center justify-center flex-col p-4 max-w-4xl">
                  <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className='text-5xl font-bold text-mainColor w-full text-center'>{title}</motion.h1>
                  <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className='mt-6 text-xl font-medium text-center text-mainColor' >{description}</motion.p>
              </div>


              <div className="absolute inset-0 bg-whiteColor bg-opacity-90 filter"></div>
          </motion.section>
      </>
  )
}
