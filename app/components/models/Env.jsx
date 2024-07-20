import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Env(props) {
    const { nodes, materials } = useGLTF('/plane.gltf')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane005.geometry}
                material={materials['Material.020']}
                position={[-1.013, -0.01, -0.598]}
                scale={3.034}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle009.geometry}
                material={materials['Material.014']}
                position={[1.138, 0.092, 0.526]}
                scale={2.165}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle033.geometry}
                material={materials['Material.014']}
                position={[1.138, 0.092, 0.526]}
                scale={2.165}
            />
            <group position={[1.138, 0.052, 0.526]} scale={[2.165, 2.602, 2.165]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle065.geometry}
                    material={materials['Material.014']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle065_1.geometry}
                    material={materials['Material.003']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle065_2.geometry}
                    material={materials['Material.015']}
                />
            </group>
            <group position={[1.135, 0.003, 0.52]} scale={2.165}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere_1.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere_2.geometry}
                    material={materials['Material.001']}
                />
            </group>
            <group position={[0.835, 0.171, 1.883]} scale={2.165}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle071.geometry}
                    material={materials['Material.022']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle071_1.geometry}
                    material={materials['Material.026']}
                />
            </group>
            <group position={[1.138, 0.116, 0.526]} scale={[2.165, 1.538, 2.165]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube066_1.geometry}
                    material={materials['Material.005']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube066_2.geometry}
                    material={materials['Material.016']}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane037.geometry}
                material={materials['Material.011']}
                position={[1.033, -0.004, 0.526]}
                scale={2.165}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.NurbsPath.geometry}
                material={materials['Material.021']}
                position={[1.138, -0.004, 0.526]}
                scale={2.165}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.NurbsPath001.geometry}
                material={materials['Material.021']}
                position={[1.138, -0.004, 0.526]}
                scale={2.165}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube063.geometry}
                material={materials['Material.005']}
                position={[1.033, -0.004, 0.526]}
                scale={2.165}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube069.geometry}
                material={materials['Material.005']}
                position={[1.033, -0.004, 0.526]}
                scale={2.165}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube070.geometry}
                material={materials['Material.005']}
                position={[1.033, -0.004, 0.526]}
                scale={2.165}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube071.geometry}
                material={materials['Material.005']}
                position={[1.033, -0.004, 0.526]}
                scale={2.165}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere001.geometry}
                material={materials['Material.003']}
                position={[1.138, -0.004, 0.526]}
                scale={2.165}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane038.geometry}
                material={materials['Material.019']}
                position={[1.138, -0.004, 0.526]}
                scale={2.165}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube072.geometry}
                material={materials['Material.005']}
                position={[1.138, 0.126, 0.526]}
                scale={[2.165, 1.907, 2.165]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube073.geometry}
                material={materials['Material.005']}
                position={[1.138, 0.073, 0.526]}
                scale={[2.165, 1.982, 2.165]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane041.geometry}
                material={materials['Material.019']}
                position={[1.138, -0.004, 0.526]}
                scale={2.165}
            />
            <group position={[1.138, -0.004, 0.526]} scale={2.165}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere009_1.geometry}
                    material={materials['Material.025']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere009_2.geometry}
                    material={materials['Material.024']}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube074.geometry}
                material={nodes.Cube074.material}
                position={[1.138, -0.004, 0.526]}
                scale={2.165}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube075.geometry}
                material={nodes.Cube075.material}
                position={[1.138, -0.004, 0.526]}
                scale={2.165}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube076.geometry}
                material={nodes.Cube076.material}
                position={[1.138, -0.004, 0.526]}
                scale={2.165}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube077.geometry}
                material={nodes.Cube077.material}
                position={[1.138, -0.004, 0.526]}
                scale={2.165}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube078.geometry}
                material={nodes.Cube078.material}
                position={[1.138, -0.004, 0.526]}
                scale={2.165}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube079.geometry}
                material={nodes.Cube079.material}
                position={[1.138, -0.004, 0.526]}
                scale={2.165}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane043.geometry}
                material={materials['Material.020']}
                position={[1.138, -0.004, 0.526]}
                scale={2.165}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube080.geometry}
                material={materials['Material.005']}
                position={[1.138, -0.004, 0.526]}
                scale={2.165}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane044.geometry}
                material={materials['Material.010']}
                position={[1.033, -0.004, 0.526]}
                scale={2.165}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle049.geometry}
                material={nodes.Circle049.material}
                position={[1.138, -0.004, 0.526]}
                scale={2.165}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle050.geometry}
                material={materials.Material}
                position={[1.138, -0.004, 0.526]}
                scale={2.165}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle051.geometry}
                material={materials['Material.003']}
                position={[1.138, -0.004, 0.526]}
                scale={2.165}
            />
            <group position={[1.138, -0.004, 0.526]} scale={2.165}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere013.geometry}
                    material={materials['Material.025']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere013_1.geometry}
                    material={materials['Material.024']}
                />
            </group>
            <group position={[1.138, -0.004, 0.526]} scale={2.165}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere014.geometry}
                    material={materials['Material.025']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere014_1.geometry}
                    material={materials['Material.024']}
                />
            </group>
            <group position={[1.138, -0.004, 0.526]} scale={2.165}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere015.geometry}
                    material={materials['Material.025']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere015_1.geometry}
                    material={materials['Material.024']}
                />
            </group>
            <group position={[1.033, -0.004, 0.526]} scale={2.165}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere016.geometry}
                    material={materials['Material.025']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere016_1.geometry}
                    material={materials['Material.024']}
                />
            </group>
            <group position={[1.033, -0.004, 0.526]} scale={2.165}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere017.geometry}
                    material={materials['Material.025']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere017_1.geometry}
                    material={materials['Material.024']}
                />
            </group>
            <group position={[1.138, -0.004, 0.526]} scale={2.165}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere018.geometry}
                    material={materials['Material.025']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere018_1.geometry}
                    material={materials['Material.024']}
                />
            </group>
            <group position={[1.138, -0.004, 0.526]} scale={2.165}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere019.geometry}
                    material={materials['Material.025']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere019_1.geometry}
                    material={materials['Material.024']}
                />
            </group>
            <group position={[1.138, -0.004, 0.526]} scale={2.165}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere020.geometry}
                    material={materials['Material.025']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere020_1.geometry}
                    material={materials['Material.024']}
                />
            </group>
            <group position={[0.835, 0.171, 1.808]} scale={2.165}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle043.geometry}
                    material={materials['Material.022']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle043_1.geometry}
                    material={materials['Material.026']}
                />
            </group>
            <group position={[1.075, -0.004, 0.526]} scale={2.165}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle045_1.geometry}
                    material={materials['Material.022']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle045_2.geometry}
                    material={materials['Material.026']}
                />
            </group>
            <group position={[1.138, -0.004, 0.526]} scale={2.165}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle046.geometry}
                    material={materials['Material.022']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle046_1.geometry}
                    material={materials['Material.026']}
                />
            </group>
            <group position={[1.075, -0.004, 0.526]} scale={2.165}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle047_1.geometry}
                    material={materials['Material.022']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle047_2.geometry}
                    material={materials['Material.026']}
                />
            </group>
            <group
                position={[0.036, 0.255, 2.645]}
                rotation={[Math.PI / 2, 0, -3.133]}
                scale={[0.22, 0.468, 0.22]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_3.geometry}
                    material={materials['Material.008']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_4.geometry}
                    material={materials['Material.009']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_5.geometry}
                    material={materials['Material.006']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_6.geometry}
                    material={materials['Material.004']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_7.geometry}
                    material={materials['Material.007']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_8.geometry}
                    material={materials['Material.012']}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle001.geometry}
                material={materials['Material.010']}
                position={[0.048, 0.024, 2.628]}
                scale={2.303}
            />
        </group>
    )
}

useGLTF.preload('/plane.gltf')