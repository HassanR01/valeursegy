import Image from 'next/image'
import React from 'react'

export default function Loading() {
    return (
        <div className="w-full h-[100vh] fixed left-0 top-0 z-[100] bg-black flex items-center justify-center">
            <Image src={'/loading.gif'} width={300} height={300} alt='loading' />
        </div>
    )
}
