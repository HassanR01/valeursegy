import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Pill(props) {
    const modelRef = useRef()
    const { nodes, materials } = useGLTF('/pill.gltf')

    // Rotate the model around its Y-axis
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.01 // Adjust the rotation speed here
        }
    })

    return (
        <group {...props} ref={modelRef} dispose={null}>
            <group name="Scene">

                <ambientLight />
                <pointLight position={[10, 10, 10]} />

                <mesh
                    name="Sphere"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere.geometry}
                    material={materials['Material.009']}
                />
                <mesh
                    name="Sphere001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere001.geometry}
                    material={materials['Material.005']}
                    position={[2, 0.5, 0]}
                    rotation={[180 , 90 , 0]}
                />
                <mesh
                    name="Sphere002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere002.geometry}
                    material={materials.Material}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/pill.gltf')
