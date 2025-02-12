
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Vials(props) {
    const modelRef = useRef()
    const { nodes, materials } = useGLTF('/fusion.gltf')

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

            <group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object005.geometry}
                    material={materials['Material #63']}
                    position={[0, -3.267, 0]}
                    rotation={[1.57, -0.001, 2.806]}
                    scale={[0.961, 1.01, 1.019]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002.geometry}
                    material={materials['11 - Default']}
                    position={[0.105, 9.829, 0.022]}
                    scale={[0.466, 0.212, 0.462]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Line002.geometry}
                    material={materials['21 - Default']}
                    position={[5.868, -3.098, -2.214]}
                    rotation={[Math.PI / 2, 0, -0.349]}
                    scale={[0.947, 1, 1.039]}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/fusion.gltf')
