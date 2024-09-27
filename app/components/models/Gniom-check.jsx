import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Gniom(props) {
    const modelRef = useRef()

    const { nodes, materials } = useGLTF('/geniom.gltf')
    
    // Rotate the model around its Y-axis
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.01 // Adjust the rotation speed here
        }
    })

    return (
        <group {...props} ref={modelRef} dispose={null}>

            <ambientLight />
            <pointLight position={[10, 10, 10]} />

            <group position={[0, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_1.geometry}
                    material={materials['2']}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/geniom.gltf')