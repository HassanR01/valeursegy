import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Socheck(props) {
    const { nodes, materials } = useGLTF('/socheck.gltf')
    return (
        <group {...props} dispose={null}>
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