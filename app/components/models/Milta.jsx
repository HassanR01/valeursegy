import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Milta(props) {
    const modelRef = useRef()

    const { nodes, materials } = useGLTF('/Milta.gltf')

    // Rotate the model around its Y-axis
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.01 // Adjust the rotation speed here
        }
    })

    return (
        <group {...props} ref={modelRef} dispose={null} position={[0,-2,0]}>

            <ambientLight />
            <pointLight position={[10, 10, 10]} />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube002.geometry}
                material={materials['Material.005']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube004.geometry}
                material={materials['Material.004']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube002_1.geometry}
                material={materials.Material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube002_2.geometry}
                material={materials['Material.003']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube004_1.geometry}
                material={materials['Material.006']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube004_2.geometry}
                material={materials['Material.007']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle004.geometry}
                material={materials.Stahl}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle004_1.geometry}
                material={materials.Alu}
            />
            <mesh castShadow receiveShadow geometry={nodes.Bolt001.geometry} material={materials.Stahl} />
            <mesh castShadow receiveShadow geometry={nodes.Bolt002.geometry} material={materials.Stahl} />
            <mesh castShadow receiveShadow geometry={nodes.Unibody.geometry} material={materials.Alu}>
                <mesh castShadow receiveShadow geometry={nodes.Bolt.geometry} material={materials.Stahl} />
                <mesh castShadow receiveShadow geometry={nodes.brake.geometry} material={materials.Alu} />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle007.geometry}
                    material={materials.Gumi}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle007_1.geometry}
                    material={materials.Stahl}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle007_2.geometry}
                    material={materials.Alu}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle005.geometry}
                material={materials.Stahl}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle005_1.geometry}
                material={materials.Alu}
            />
            <mesh castShadow receiveShadow geometry={nodes.Bolt003.geometry} material={materials.Stahl} />
            <mesh castShadow receiveShadow geometry={nodes.Bolt004.geometry} material={materials.Stahl} />
            <mesh castShadow receiveShadow geometry={nodes.Unibody001.geometry} material={materials.Alu}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Bolt005.geometry}
                    material={materials.Stahl}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.brake001.geometry}
                    material={materials.Alu}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle001.geometry}
                    material={materials.Gumi}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle001_1.geometry}
                    material={materials.Stahl}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle001_2.geometry}
                    material={materials.Alu}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle012.geometry}
                material={materials.Stahl}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle012_1.geometry}
                material={materials.Alu}
            />
            <mesh castShadow receiveShadow geometry={nodes.Bolt006.geometry} material={materials.Stahl} />
            <mesh castShadow receiveShadow geometry={nodes.Bolt007.geometry} material={materials.Stahl} />
            <mesh castShadow receiveShadow geometry={nodes.Unibody002.geometry} material={materials.Alu}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Bolt008.geometry}
                    material={materials.Stahl}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.brake002.geometry}
                    material={materials.Alu}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle008.geometry}
                    material={materials.Gumi}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle008_1.geometry}
                    material={materials.Stahl}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle008_2.geometry}
                    material={materials.Alu}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle016.geometry}
                material={materials.Stahl}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle016_1.geometry}
                material={materials.Alu}
            />
            <mesh castShadow receiveShadow geometry={nodes.Bolt009.geometry} material={materials.Stahl} />
            <mesh castShadow receiveShadow geometry={nodes.Bolt010.geometry} material={materials.Stahl} />
            <mesh castShadow receiveShadow geometry={nodes.Unibody003.geometry} material={materials.Alu}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Bolt011.geometry}
                    material={materials.Stahl}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.brake003.geometry}
                    material={materials.Alu}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle013.geometry}
                    material={materials.Gumi}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle013_1.geometry}
                    material={materials.Stahl}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle013_2.geometry}
                    material={materials.Alu}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('/Milta.gltf')