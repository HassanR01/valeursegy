import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Env(props) {
    const { nodes, materials } = useGLTF('/plane.gltf')

    
    return (
        <group {...props} dispose={null}>
            <group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane005.geometry}
                    material={materials['Material.020']}
                    position={[0, -0.01, 0]}
                    userData={{ name: 'Plane.005' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle009.geometry}
                    material={materials['Material.014']}
                    userData={{ name: 'Circle.009' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle033.geometry}
                    material={materials['Material.014']}
                    userData={{ name: 'Circle.033' }}
                />
                <group userData={{ name: 'Circle.034' }}>
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
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere.geometry}
                    material={materials['Material.002']}
                    userData={{ name: 'Icosphere' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle036.geometry}
                    material={nodes.Circle036.material}
                    userData={{ name: 'Circle.036' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle037.geometry}
                    material={materials.Material}
                    userData={{ name: 'Circle.037' }}
                />
                <group userData={{ name: 'Circle.040' }}>
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
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle042.geometry}
                    material={materials['Material.003']}
                    userData={{ name: 'Circle.042' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube066.geometry}
                    material={materials['Material.005']}
                    position={[0, 0.06, 0]}
                    scale={[1, 0.71, 1]}
                    userData={{ name: 'Cube.066' }}
                />
                <group userData={{ name: 'Plane.037' }}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane006.geometry}
                        material={materials['Material.011']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane006_1.geometry}
                        material={materials['Material.013']}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.NurbsPath.geometry}
                    material={nodes.NurbsPath.material}
                    userData={{ name: 'NurbsPath' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.NurbsPath001.geometry}
                    material={materials['Material.021']}
                    userData={{ name: 'NurbsPath.001' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube063.geometry}
                    material={materials['Material.005']}
                    userData={{ name: 'Cube.063' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube069.geometry}
                    material={materials['Material.005']}
                    userData={{ name: 'Cube.069' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube070.geometry}
                    material={materials['Material.005']}
                    userData={{ name: 'Cube.070' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube071.geometry}
                    material={materials['Material.005']}
                    userData={{ name: 'Cube.071' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere001.geometry}
                    material={materials['Material.003']}
                    userData={{ name: 'Icosphere.001' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane038.geometry}
                    material={materials['Material.019']}
                    userData={{ name: 'Plane.038' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube072.geometry}
                    material={materials['Material.005']}
                    position={[0, 0.06, 0]}
                    scale={[1, 0.88, 1]}
                    userData={{ name: 'Cube.072' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube073.geometry}
                    material={materials['Material.005']}
                    position={[0, 0.04, 0]}
                    scale={[1, 0.92, 1]}
                    userData={{ name: 'Cube.073' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane041.geometry}
                    material={materials['Material.019']}
                    userData={{ name: 'Plane.041' }}
                />
                <group userData={{ name: 'Circle.046' }}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle037_1.geometry}
                        material={materials['Material.026']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle037_2.geometry}
                        material={materials['Material.027']}
                    />
                </group>
                <group userData={{ name: 'Sphere.009' }}>
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
                    userData={{ name: 'Cube.074' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube075.geometry}
                    material={nodes.Cube075.material}
                    userData={{ name: 'Cube.075' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube076.geometry}
                    material={nodes.Cube076.material}
                    userData={{ name: 'Cube.076' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube077.geometry}
                    material={nodes.Cube077.material}
                    userData={{ name: 'Cube.077' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube078.geometry}
                    material={nodes.Cube078.material}
                    userData={{ name: 'Cube.078' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube079.geometry}
                    material={nodes.Cube079.material}
                    userData={{ name: 'Cube.079' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane043.geometry}
                    material={materials['Material.020']}
                    userData={{ name: 'Plane.043' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane039.geometry}
                    material={materials['Material.030']}
                    userData={{ name: 'Plane.039' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane040.geometry}
                    material={materials['Material.030']}
                    userData={{ name: 'Plane.040' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube080.geometry}
                    material={materials['Material.005']}
                    userData={{ name: 'Cube.080' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane044.geometry}
                    material={materials['Material.010']}
                    userData={{ name: 'Plane.044' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle048.geometry}
                    material={materials['Material.019']}
                    userData={{ name: 'Circle.048' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle049.geometry}
                    material={nodes.Circle049.material}
                    userData={{ name: 'Circle.049' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle050.geometry}
                    material={materials.Material}
                    userData={{ name: 'Circle.050' }}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle051.geometry}
                    material={materials['Material.003']}
                    userData={{ name: 'Circle.051' }}
                />
                <group userData={{ name: 'Sphere.010' }}>
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
                <group userData={{ name: 'Sphere.011' }}>
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
                <group userData={{ name: 'Sphere.012' }}>
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
                <group userData={{ name: 'Sphere.008' }}>
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
                <group userData={{ name: 'Sphere.001' }}>
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
                <group userData={{ name: 'Sphere.004' }}>
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
                <group userData={{ name: 'Sphere.006' }}>
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
                <group userData={{ name: 'Sphere.005' }}>
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
                <group userData={{ name: 'Circle.044' }}>
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
                <group userData={{ name: 'Circle.045' }}>
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
                <group userData={{ name: 'Circle.047' }}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle046_1.geometry}
                        material={materials['Material.022']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle046_2.geometry}
                        material={materials['Material.026']}
                    />
                </group>
                <group userData={{ name: 'Circle.052' }}>
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
            </group>
        </group>
    )
}

useGLTF.preload('/plane.gltf')
