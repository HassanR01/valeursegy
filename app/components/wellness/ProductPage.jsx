'use client'
import React from 'react'
import { Pill } from '../models/Fusion-Products'
import { Socheck } from '../models/Socheck'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import HTMLReactParser from 'html-react-parser'


export default function ProductPage({ product }) {
    const { name, description, model, sections } = product
    return (
        <>
            <div className="showModel w-full flex items-center justify-center h-[40vh]">
                <Canvas>
                    <Environment preset='city' />
                    <PerspectiveCamera makeDefault position={[0, 3, 7]} />
                    <OrbitControls maxDistance={10} enableZoom={false} minDistance={1} maxPolarAngle={1.2} />
                    {model === 'So-Check' ? <Socheck /> : <Pill />}
                </Canvas>
            </div>
            <h2 className='text-whiteColor font-bold text-2xl w-full text-center'>{name}</h2>
            <div className="articale w-full h-[60vh] py-20 relative overflow-auto">
                <div className="ground-trans absolute -top-1 left-0 w-full h-[150px] rotate-180"></div>
                {sections.map((section, ind) => (
                    <div className="section flex flex-col items-center justify-center my-8 w-full" key={ind}>
                        <h2>{section.subTitle}</h2>
                        <div className="SecArtical">{HTMLReactParser(section.text)}</div>
                    </div>
                ))}
            </div>
        </>
    )
}
