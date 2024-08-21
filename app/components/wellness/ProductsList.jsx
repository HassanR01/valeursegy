'use client'
import { Canvas } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'
import { Socheck } from '../models/Socheck'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import TransitionLink from '../main/TransitionLink'
import { Pill } from '../models/Fusion-Products'
import Loading from '../main/Loading'
import { BioPrint } from '../models/bioPrint'

export default function ProductsList() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])

    if (isLoading) {
        return <Loading />
    } else {

        return (
            <>
                <div className="list flex flex-wrap items-center justify-center my-20 w-full">
                    <TransitionLink href={`/wellness/So-Check`} className="product hover:shadow-xl m-2 duration-700 rounded-xl min-w-[300px] w-[45%] h-[300px] border flex flex-col items-center justify-start">
                        <Canvas>
                            <PerspectiveCamera makeDefault position={[0, 3, 3]} />
                            <OrbitControls enableZoom={false} />
                            <Environment preset='city' />
                            <Socheck />
                        </Canvas>
                        <div className="title p-2">
                            <h2 className='text-2xl text-whiteColor font-bold'>So Check</h2>
                        </div>
                    </TransitionLink>
                    {/* <TransitionLink href={`/wellness/Gniom-Check`} className="product hover:shadow-xl m-2 duration-700 rounded-xl min-w-[300px] w-[45%] h-[300px] border flex flex-col items-center justify-start">
                        <Canvas>
                            <PerspectiveCamera makeDefault position={[0, 3, 3]} />
                            <OrbitControls enableZoom={false} />
                            <Environment preset='city' />
                            <Socheck />
                        </Canvas>
                        <div className="title p-2">
                            <h2 className='text-2xl text-whiteColor font-bold'>Gniom Check</h2>
                        </div>
                    </TransitionLink> */}
                    <TransitionLink href={`/wellness/Milta-Technology`} className="product hover:shadow-xl m-2 duration-700 rounded-xl min-w-[300px] w-[45%] h-[300px] border flex flex-col items-center justify-start">
                        <Canvas>
                            <PerspectiveCamera makeDefault position={[0, 3, 3]} />
                            <OrbitControls enableZoom={false} />
                            <Environment preset='city' />
                            <Socheck />
                        </Canvas>
                        <div className="title p-2">
                            <h2 className='text-2xl text-whiteColor font-bold'>Milta Technology</h2>
                        </div>
                    </TransitionLink>
                    <TransitionLink href={`/wellness/Fusion-Products`} className="product hover:shadow-xl m-2 duration-700 rounded-xl min-w-[300px] w-[45%] h-[300px] border flex flex-col items-center justify-start">
                        <Canvas>
                            <PerspectiveCamera makeDefault position={[0, 7, 10]} />
                            <OrbitControls enableZoom={false} />
                            <Environment preset='city' />
                            <Pill />
                        </Canvas>
                        <div className="title p-2">
                            <h2 className='text-2xl text-whiteColor font-bold'>Fusion Products</h2>
                        </div>
                    </TransitionLink>
                    <TransitionLink href={`/wellness/Bio-print`} className="product hover:shadow-xl m-2 duration-700 rounded-xl min-w-[300px] w-[45%] h-[300px] border flex flex-col items-center justify-start">
                        <Canvas>
                            <PerspectiveCamera makeDefault position={[0, 2, 8]} />
                            <OrbitControls enableZoom={false} />
                            <Environment preset='city' />
                            <BioPrint />
                        </Canvas>
                        <div className="title p-2">
                            <h2 className='text-2xl text-whiteColor font-bold'>Bio Print</h2>
                        </div>
                    </TransitionLink>
                </div>
            </>
        )
    }
}
