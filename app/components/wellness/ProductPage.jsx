'use client'
import React, { useEffect, useState } from 'react'
import { Pill } from '../models/Fusion-Products'
import { Socheck } from '../models/Socheck'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import HTMLReactParser from 'html-react-parser'
import { motion } from 'framer-motion'
import Loading from '../main/Loading'
import { BioPrint } from '../models/bioPrint'
import { Milta } from '../models/Milta'
import { Gniom } from '../models/Gniom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';


export default function ProductPage({ product, lang }) {
    const [isLoading, setIsLoading] = useState(true)
    const [endNum, setEndNum] = useState(3)
    const { name, description, model, sections, nameAr, descriptionAr, sectionsAr } = product
    const [threedshow, setThreedShow] = useState(false)
    

    useEffect(() => {
        setIsLoading(false)
    }, [])

    if (isLoading) {
        <Loading />
    } else {

        return (
            <>
                <div className={`section relative flex flex-col pb-20 lg:flex-row my-5 items-center w-full justify-start lg:justify-around`} dir={lang === "ar" ? 'rtl' : 'ltr'} >
                    <div className="articale max-w-2xl w-full flex items-center lg:items-start justify-center flex-col">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoHeight={true}
                            autoplay={{
                                delay: 10000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper p-4 text-center relative w-full"
                        >

                            {lang === 'ar' ? (
                                <>
                                    {sectionsAr.map((section, ind) => (
                                        <SwiperSlide key={ind} className="section max-w-2xl lg:max-w-5xl text-center pb-20 lg:text-start flex flex-col items-center lg:items-start justify-start my-4 p-2">
                                            <h2 className='text-2xl font-semibold mb-4'>{section.subTitleAr}</h2>
                                            <div className="SecArtical text-xl">{HTMLReactParser(section.textAr)}</div>
                                        </SwiperSlide>
                                    ))}
                                </>
                            ): (
                                    <>
                                        {sections.map((section, ind) => (
                                            <SwiperSlide key={ind} className="section max-w-2xl lg:max-w-5xl text-center pb-20 lg:text-start flex flex-col items-center lg:items-start justify-start my-4 p-2">
                                                <h2 className='text-2xl font-semibold mb-4'>{section.subTitle}</h2>
                                                <div className="SecArtical text-xl">{HTMLReactParser(section.text)}</div>
                                            </SwiperSlide>
                                        ))}
                                    </>    
                           )}
                        </Swiper>
                    </div>

                    <div className={`showModel ${threedshow ? 'flex fixed lg:sticky z-40 w-full h-screen top-0 left-0 bg-white': 'lg:flex hidden'} lg:w-[500px] cursor-move fixed lg:sticky top-0 items-center justify-center h-[50vh]`}>
                        {model === 'So-Check' && (
                            <>
                                <Canvas>
                                    <Environment preset='city' />
                                    <PerspectiveCamera makeDefault position={[0, 2, 8]} />
                                    <OrbitControls maxDistance={10}  minDistance={4}  />
                                    <Socheck />
                                </Canvas>
                            </>
                        )}
                        {model === 'Gniom-Check' && (
                            <>
                                <Canvas>
                                    <Environment preset='city' />
                                    <PerspectiveCamera makeDefault position={[0, 3, 6]} />
                                    <OrbitControls maxDistance={10} enableZoom={false} minDistance={1} />
                                    <Gniom />
                                </Canvas>
                            </>
                        )}
                        {model === 'Fusion-Products' && (
                            <>
                                <Canvas>
                                    <Environment preset='city' />
                                    <PerspectiveCamera makeDefault position={[0, 5, 7]} />
                                    <OrbitControls maxDistance={10} enableZoom={false} minDistance={1} />
                                    <Pill />
                                </Canvas>
                            </>
                        )}
                        {model === 'Bio-print' && (
                            <>
                                <Canvas>
                                    <Environment preset='city' />
                                    <PerspectiveCamera makeDefault position={[0, 3, 8]} />
                                    <OrbitControls maxDistance={10} enableZoom={false} minDistance={1} />
                                    <BioPrint />
                                </Canvas>
                            </>
                        )}
                        {model === 'Milta-Technology' && (
                            <>
                                <Canvas>
                                    <Environment preset='city' />
                                    <PerspectiveCamera makeDefault position={[0, 3, 6]} />
                                    <OrbitControls maxDistance={10} enableZoom={false} minDistance={1} />
                                    <Milta />
                                </Canvas>
                            </>
                        )}
                    </div>
                </div>
                <div onClick={() => setThreedShow(!threedshow)} className={`3dShow lg:hidden z-50 fixed bottom-5 right-5 p-3 cursor-pointer bg-whiteColor rounded-xl ${threedshow ? "text-green-500" : "text-mainColor"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">   <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /> </svg>
                </div>
            </>
        )
    }
}
