import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function BioPrint(props) {
    const modelRef = useRef()
    const { nodes, materials } = useGLTF('/bioprinting.gltf')

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

            <group position={[0, -0.886, 0]} scale={[1.247, 1.722, 1.247]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_1.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_2.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_3.geometry}
                    material={materials['Untitled design (1)']}
                />
            </group>
            <group
                position={[0.008, -0.945, 0.849]}
                rotation={[0, 0.011, 0]}
                scale={[1.247, 1.722, 1.247]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001_1.geometry}
                    material={materials['Material.003']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001_2.geometry}
                    material={materials['Material.004']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube012.geometry}
                    material={nodes.Cube012.material}
                    position={[-0.975, -0.236, -0.442]}
                    rotation={[0, 0.176, 0]}
                    scale={[0.062, 0.067, 0.092]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube013.geometry}
                    material={nodes.Cube013.material}
                    position={[-0.975, 0.318, -0.442]}
                    rotation={[0, 0.176, 0]}
                    scale={[0.062, 0.067, 0.092]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder002.geometry}
                material={materials['Material.008']}
                position={[0, -0.542, 0]}
                scale={[1.247, 1.722, 1.247]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={nodes.Cube.material}
                position={[0.003, -0.918, -0.753]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.859, -1, -0.018]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle.geometry}
                material={materials['Material.007']}
                position={[-0.702, -1.995, -0.483]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.119}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle001.geometry}
                material={materials['Material.009']}
                position={[0.429, -1.995, -0.405]}
                rotation={[Math.PI / 2, 0, 1.587]}
                scale={[0.045, 0.055, 0.045]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001.geometry}
                material={materials['Material.005']}
                position={[0.418, -1.753, -0.461]}
                scale={[0.35, 0.069, 0.315]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube002.geometry}
                material={nodes.Cube002.material}
                position={[-0.098, -1.199, -0.653]}
                scale={[0.799, 0.349, 0.088]}
            />
            <group position={[-0.067, -0.727, -0.653]} scale={[0.276, 0.592, 0.344]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube004_1.geometry}
                    material={materials['Material.010']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube004_2.geometry}
                    material={materials['Material.011']}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder003.geometry}
                material={nodes.Cylinder003.material}
                position={[0, -1.522, 0]}
                scale={[1.247, 1.722, 1.247]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube004.geometry}
                material={materials['Material.010']}
                position={[0.002, -1.141, -0.272]}
                scale={[0.07, 0.181, 0.038]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube005.geometry}
                material={materials['Material.010']}
                position={[-0.134, -1.141, -0.272]}
                scale={[0.07, 0.181, 0.038]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube006.geometry}
                material={nodes.Cube006.material}
                position={[-0.072, -0.604, -0.273]}
                scale={[0.126, 0.069, 0.063]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube007.geometry}
                material={nodes.Cube007.material}
                position={[0.576, -0.912, -0.465]}
                scale={[0.087, 0.125, 0.054]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube008.geometry}
                material={nodes.Cube008.material}
                position={[0.033, -0.495, -0.653]}
                scale={[0.914, 0.568, 0.152]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube009.geometry}
                material={materials['Material.010']}
                position={[-0.707, -0.912, -0.369]}
                scale={[0.173, 0.156, 0.15]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube010.geometry}
                material={materials['Material.015']}
                position={[-0.707, -0.427, -0.416]}
                scale={[0.173, 0.261, 0.025]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle002.geometry}
                material={nodes.Circle002.material}
                position={[-0.702, -0.335, -0.374]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.148, 0.17, 0.159]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle003.geometry}
                material={materials['Material.012']}
                position={[-0.695, -0.266, -0.28]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[-0.043, -0.05, -0.043]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube011.geometry}
                material={materials['Material.006']}
                position={[0.418, -1.669, -0.461]}
                scale={[0.35, 0.005, 0.315]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle004.geometry}
                material={materials['Material.016']}
                position={[-0.961, -2.609, 0.408]}
                scale={0.107}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle005.geometry}
                material={materials['Material.016']}
                position={[-0.961, -2.609, -0.351]}
                scale={0.107}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle006.geometry}
                material={materials['Material.016']}
                position={[0.981, -2.609, 0.408]}
                scale={0.107}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle007.geometry}
                material={materials['Material.016']}
                position={[0.981, -2.609, -0.351]}
                scale={0.107}
            />
            <group
                position={[1.258, -2.192, -0.01]}
                rotation={[-Math.PI, 0, -Math.PI / 2]}
                scale={-0.107}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle009.geometry}
                    material={materials['Material.013']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle009_1.geometry}
                    material={materials['Material.014']}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/bioprinting.gltf')