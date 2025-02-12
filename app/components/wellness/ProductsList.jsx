'use client'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import { Socheck } from '../models/Socheck'
import { Environment, Html, OrbitControls, PerspectiveCamera, useProgress } from '@react-three/drei'
import TransitionLink from '../main/TransitionLink'
import { Pill } from '../models/Fusion-Products'
import { Vials } from '../models/Vials'
import Loading from '../main/Loading'
import { BioPrint } from '../models/bioPrint'
import { Milta } from '../models/Milta'
import { Gniom } from '../models/Gniom'
import { useDataContext } from '../Context/DataContext'
import Image from 'next/image'
import { DNA } from '../models/DNA'

export default function ProductsList({ lang }) {
    const [isLoading, setIsLoading] = useState(true)

    const { products } = useDataContext()

    useEffect(() => {
        setIsLoading(false)
    }, [])


    if (!products) {
        return <Loading />
    } else {

        console.log(products)

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
                    <TransitionLink href={`${lang}/wellness/${products[0].name}`} className="product hover:shadow-xl m-2 duration-700 rounded-tr-xl rounded-bl-xl min-w-[300px] w-[45%] h-[300px] border border-whiteColor flex flex-col items-center justify-start">
                        <Canvas>
                            <Suspense fallback={<Loader />}>
                                <PerspectiveCamera makeDefault position={[0, 3, 3]} />
                                <OrbitControls enableZoom={false} />
                                <Environment preset='city' />
                                <Socheck />
                            </Suspense>
                        </Canvas>
                        <div className="title p-2">
                            <h2 className='text-2xl text-whiteColor font-bold'>{lang === '/ar' ? products[0].nameAr : products[0].name}</h2>
                        </div>
                    </TransitionLink>
                    <TransitionLink href={`${lang}/wellness/${products[1].name}`} className="product hover:shadow-xl m-2 duration-700 rounded-tr-xl rounded-bl-xl min-w-[300px] w-[45%] h-[300px] border border-whiteColor flex flex-col items-center justify-start">
                        <Canvas>
                            <Suspense fallback={<Loader />}>
                                <PerspectiveCamera makeDefault position={[4, 0, 4]} />
                                <OrbitControls enableZoom={false} />
                                <Environment preset='city' />
                                <Milta />
                            </Suspense>
                        </Canvas>
                        <div className="title p-2">
                            <h2 className='text-2xl text-whiteColor font-bold'>{lang === '/ar' ? products[1].nameAr : products[1].name}</h2>
                        </div>
                    </TransitionLink>
                    <TransitionLink href={`${lang}/wellness/${products[3].name}`} className="product hover:shadow-xl m-2 duration-700 rounded-tr-xl rounded-bl-xl min-w-[300px] w-[45%] h-[300px] border border-whiteColor flex flex-col items-center justify-start">
                        <Canvas>
                            <Suspense fallback={<Loader />}>
                                <PerspectiveCamera makeDefault position={[40, 10, 20]} />
                                <OrbitControls enableZoom={false} />
                                <Environment preset='city' />
                                <Vials />
                            </Suspense>
                        </Canvas>
                        <div className="title p-2">
                            <h2 className='text-2xl text-whiteColor font-bold'>{lang === '/ar' ? products[3].nameAr : products[3].name}</h2>
                        </div>
                    </TransitionLink>
                    <TransitionLink href={`${lang}/wellness/${products[2].name}`} className="product hover:shadow-xl m-2 duration-700 rounded-tr-xl rounded-bl-xl min-w-[300px] w-[45%] h-[300px] border border-whiteColor flex flex-col items-center justify-start">
                        <Canvas>
                            <Suspense fallback={<Loader />}>
                                <PerspectiveCamera makeDefault position={[0, 2, 8]} />
                                <OrbitControls enableZoom={false} />
                                <Environment preset='city' />
                                <BioPrint />
                            </Suspense>
                        </Canvas>
                        <div className="title p-2">
                            <h2 className='text-2xl text-whiteColor font-bold'>{lang === '/ar' ? products[2].nameAr : products[2].name}</h2>
                        </div>
                    </TransitionLink>
                    <TransitionLink href={`${lang}/wellness/${products[4].name}`} className="product hover:shadow-xl m-2 duration-700 rounded-tr-xl rounded-bl-xl min-w-[300px] w-[45%] h-[300px] border border-whiteColor flex flex-col items-center justify-start">
                        <Canvas>
                            <Suspense fallback={<Loader />}>
                                <PerspectiveCamera makeDefault position={[4, 2, 4]} />
                                <OrbitControls enableZoom={false} />
                                <Environment preset='city' />
                                <Gniom />
                            </Suspense>
                        </Canvas>
                        <div className="title p-2">
                            <h2 className='text-2xl text-whiteColor font-bold'>{lang === '/ar' ? products[4].nameAr : products[4].name}</h2>
                        </div>
                    </TransitionLink>
                    <TransitionLink href={`${lang}/wellness/${products[5].name}`} className="product hover:shadow-xl m-2 duration-700 rounded-tr-xl rounded-bl-xl min-w-[300px] w-[45%] h-[300px] border border-whiteColor flex flex-col items-center justify-start">
                        <Canvas>
                            <Suspense fallback={<Loader />}>
                                <PerspectiveCamera makeDefault position={[1, 2, 0]} />
                                <OrbitControls enableZoom={false} />
                                <DNA />
                            </Suspense>
                        </Canvas>
                        <div className="title p-2">
                            <h2 className='text-2xl text-whiteColor font-bold'>{lang === '/ar' ? products[5].nameAr : products[5].name}</h2>
                        </div>
                    </TransitionLink>
                    {products.map((product, index) => (
                        <TransitionLink href={`${lang}/wellness/${product.name}`} key={index} className="product overflow-hidden hover:shadow-xl m-2 duration-700 rounded-tr-xl rounded-bl-xl min-w-[300px] w-[45%] h-[300px] border border-whiteColor flex flex-col items-center justify-start">
                            <div className='w-full h-[250px]'>
                                <Image src={product.image} width={1000} height={400} className='w-full h-full' />
                            </div>
                            <div className="title p-2">
                                <h2 className='text-2xl text-whiteColor font-bold'>{product.name}</h2>
                            </div>
                        </TransitionLink>
                    )).slice(6, products.length)}
                </div>
            </>
        )
    }
}
