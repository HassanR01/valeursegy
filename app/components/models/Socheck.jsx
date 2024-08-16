import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Socheck(props) {
    const modelRef = useRef()

const { nodes, materials } = useGLTF('/socheck.gltf')

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
                    geometry={nodes.Mesh.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_1.geometry}
                    material={materials['Material.006']}
                />
            </group>
            <group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube008.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube008_1.geometry}
                    material={materials.Material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube008_2.geometry}
                    material={materials['Material.005']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube008_3.geometry}
                    material={materials['Material.004']}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/socheck.gltf')
