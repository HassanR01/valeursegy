'use client'
import React, { useState } from 'react'
import { Pill } from '../models/Fusion-Products'
import { Socheck } from '../models/Socheck'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import HTMLReactParser from 'html-react-parser'
import { motion } from 'framer-motion'


export default function ProductPage({ product }) {
    const [endNum, setEndNum] = useState(3)
    const { name, description, model, sections } = product

    return (
        <>
        <h2 className='text-whiteColor font-bold mt-32 text-2xl w-full text-center'>{name}</h2>
            <div className="section relative flex flex-wrap my-5 items-start justify-center">
                <div className="dadSection p-4 text-center relative">
                    <div className="articale max-w-3xl w-full py-20 flex items-center lg:items-start justify-start flex-col">
                        {sections.map((section, ind) => (
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                className="section max-w-5xl text-center lg:text-start flex flex-col items-center lg:items-start justify-start my-4 w-full" key={ind}>
                                <h2 className='text-2xl font-semibold mb-4'>{section.subTitle}</h2>
                                <div className="SecArtical text-xl">{HTMLReactParser(section.text)}</div>
                            </motion.div>
                        )).slice(0, endNum)}
                        {endNum < sections.length && (
                            <>
                                <button onClick={() => setEndNum(endNum + 3)} className='btnForm'>Show More</button>
                            </>
                        )}
                    </div>
                </div>
                <div className="showModel w-[500px] flex sticky top-0 items-center justify-center h-[60vh]">
                    <Canvas>
                        <Environment preset='city' />
                        <PerspectiveCamera makeDefault position={[0, 3, 3]} />
                        <OrbitControls maxDistance={10} enableZoom={false} minDistance={1} maxPolarAngle={1.2} />
                        {model === 'So-Check' ? <Socheck /> : <Pill />}
                    </Canvas>
                </div>
            </div>
        </>
    )
}
