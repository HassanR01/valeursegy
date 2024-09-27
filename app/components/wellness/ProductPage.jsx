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


export default function ProductPage({ product }) {
    const [isLoading, setIsLoading] = useState(true)
    const [endNum, setEndNum] = useState(3)
    const { name, description, model, sections } = product

    useEffect(() => {
        setIsLoading(false)
    }, [])

    if (isLoading) {
        <Loading />
    } else {

        return (
            <>
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
                    <div className="showModel w-[500px] cursor-move flex sticky top-0 items-center justify-center h-[60vh]">
                        {model === 'So-Check' && (
                            <>
                                <Canvas>
                                    <Environment preset='city' />
                                    <PerspectiveCamera makeDefault position={[0, 1, 5]} />
                                    <OrbitControls maxDistance={10} enableZoom={false} minDistance={1} />
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
                                    <PerspectiveCamera makeDefault position={[0, 2, 8]} />
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
            </>
        )
    }
}
