'use client'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import { Socheck } from '../models/Socheck'
import { Environment, Html, OrbitControls, PerspectiveCamera, useProgress } from '@react-three/drei'
import TransitionLink from '../main/TransitionLink'
import { Pill } from '../models/Fusion-Products'
import Loading from '../main/Loading'
import { BioPrint } from '../models/bioPrint'
import { Milta } from '../models/Milta'
import { Gniom } from '../models/Gniom'

export default function ProductsList({ lang }) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])

    if (isLoading) {
        return <Loading />
    } else {

        function Loader() {
            const { progress } = useProgress()
            return (
                <>
                        <Html
                            style={{
                                backgroundColor: 'black',
                                color: 'white',
                                fontSize: '1.5rem',
                                padding: '1rem',
                                borderRadius: '10px',
                                width: '300px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center'
                            }} center>
                            {Math.trunc(progress)}% loaded
                        </Html>
                        <Html
                            style={{
                                backgroundColor: 'black',
                                color: 'white',
                                fontSize: '1.5rem',
                                borderRadius: '10px',
                                width: `${(progress / 100) * 300}px`,
                                height: '5px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                marginTop: '60px',
                                transitionDuration: '0.5s'
                            }}
                            center
                        >

                        </Html>
                </>
            )
        }

        return (
            <>
                <div className="list flex flex-wrap items-center justify-center mb-20 w-full">
                    <TransitionLink href={`${lang}/wellness/So-Check`} className="product hover:shadow-xl m-2 duration-700 rounded-tr-xl rounded-bl-xl min-w-[300px] w-[45%] h-[300px] border border-whiteColor flex flex-col items-center justify-start">
                        <Canvas>
                            <Suspense fallback={<Loader />}>
                                <PerspectiveCamera makeDefault position={[0, 3, 3]} />
                                <OrbitControls enableZoom={false} />
                                <Environment preset='city' />
                                <Socheck />
                            </Suspense>
                        </Canvas>
                        <div className="title p-2">
                            <h2 className='text-2xl text-whiteColor font-bold'>So Check</h2>
                        </div>
                    </TransitionLink>
                    <TransitionLink href={`${lang}/wellness/Milta-Technology`} className="product hover:shadow-xl m-2 duration-700 rounded-tr-xl rounded-bl-xl min-w-[300px] w-[45%] h-[300px] border border-whiteColor flex flex-col items-center justify-start">
                        <Canvas>
                            <Suspense fallback={<Loader />}>
                                <PerspectiveCamera makeDefault position={[4, 0, 4]} />
                                <OrbitControls enableZoom={false} />
                                <Environment preset='city' />
                                <Milta />
                            </Suspense>
                        </Canvas>
                        <div className="title p-2">
                            <h2 className='text-2xl text-whiteColor font-bold'>Milta Technology</h2>
                        </div>
                    </TransitionLink>
                    <TransitionLink href={`${lang}/wellness/Fusion-Products`} className="product hover:shadow-xl m-2 duration-700 rounded-tr-xl rounded-bl-xl min-w-[300px] w-[45%] h-[300px] border border-whiteColor flex flex-col items-center justify-start">
                        <Canvas>
                            <Suspense fallback={<Loader />}>
                                <PerspectiveCamera makeDefault position={[0, 7, 10]} />
                                <OrbitControls enableZoom={false} />
                                <Environment preset='city' />
                                <Pill />
                            </Suspense>
                        </Canvas>
                        <div className="title p-2">
                            <h2 className='text-2xl text-whiteColor font-bold'>Fusion Products</h2>
                        </div>
                    </TransitionLink>
                    <TransitionLink href={`${lang}/wellness/Bio-print`} className="product hover:shadow-xl m-2 duration-700 rounded-tr-xl rounded-bl-xl min-w-[300px] w-[45%] h-[300px] border border-whiteColor flex flex-col items-center justify-start">
                        <Canvas>
                            <Suspense fallback={<Loader />}>
                                <PerspectiveCamera makeDefault position={[0, 2, 8]} />
                                <OrbitControls enableZoom={false} />
                                <Environment preset='city' />
                                <BioPrint />
                            </Suspense>
                        </Canvas>
                        <div className="title p-2">
                            <h2 className='text-2xl text-whiteColor font-bold'>Bio Print</h2>
                        </div>
                    </TransitionLink>
                    <TransitionLink href={`${lang}/wellness/Gniom-Check`} className="product hover:shadow-xl m-2 duration-700 rounded-tr-xl rounded-bl-xl min-w-[300px] w-[45%] h-[300px] border border-whiteColor flex flex-col items-center justify-start">
                        <Canvas>
                            <Suspense fallback={<Loader />}>
                                <PerspectiveCamera makeDefault position={[4, 2, 4]} />
                                <OrbitControls enableZoom={false} />
                                <Environment preset='city' />
                                <Gniom />
                            </Suspense>
                        </Canvas>
                        <div className="title p-2">
                            <h2 className='text-2xl text-whiteColor font-bold'>Gniom Check</h2>
                        </div>
                    </TransitionLink>
                </div>
            </>
        )
    }
}
