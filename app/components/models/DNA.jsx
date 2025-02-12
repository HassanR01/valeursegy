
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function DNA(props) {
    const modelRef = useRef()
    const { nodes, materials } = useGLTF('/mediacal.gltf')

    // Rotate the model around its Y-axis
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.01 // Adjust the rotation speed here
        }
    })

    return (
        <group {...props} ref={modelRef} dispose={null}>
            
            <ambientLight intensity={1.5} />
            <pointLight intensity={4} position={[1, 1, 1]} />

            <group scale={[20, 20, 20]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object001_1.geometry}
                    material={materials['Material #41']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object001_2.geometry}
                    material={materials['Material #25']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object001_3.geometry}
                    material={materials['Material #26']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object001_4.geometry}
                    material={materials['Material #27']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object001_5.geometry}
                    material={materials['Material #39']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object001_6.geometry}
                    material={materials['Material #40']}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/mediacal.gltf')
