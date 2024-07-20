import React from 'react'
import { Html, Loader } from '@react-three/drei'

export default function Loading() {
    return (
        <Html>
            <div className="w-full h-[100vh] fixed z-[100] bg-black flex items-center justify-center">
                <Loader />
                <h2>Loading From Rockai Dev Server..</h2>
            </div>
        </Html>
    )
}
