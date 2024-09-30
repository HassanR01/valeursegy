import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations, Html } from '@react-three/drei'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useThree } from '@react-three/fiber'
import Image from 'next/image'

export function Env(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/plane.gltf')
    const router = useRouter()
    const { gl } = useThree()
    const { actions } = useAnimations(animations, group)

    useEffect(() => {

        const desiredSpeed = 0.3


        Object.values(actions).forEach(action => {
            action.setEffectiveTimeScale(desiredSpeed).play()
        })


        return () => {
            Object.values(actions).forEach(action => {
                if (action) {
                    action.stop()
                }
            })
        }
    }, [actions])


    return (
        <group ref={group} {...props} dispose={null}>

            <ambientLight intensity={1.5} color={"#ffffff"} />

            {/* Directional light with shadows */}
            <directionalLight
                intensity={0.7}
                castShadow={true}
                position={[200, 300, 300]}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-camera-far={1000}
                shadow-camera-near={0.5}
                shadow-camera-left={-100}
                shadow-camera-right={100}
                shadow-camera-top={100}
                shadow-camera-bottom={-100}
                shadow-bias={-0.00005}
                shadow-radius={3}
            />

            <directionalLight
                intensity={2.5}
                castShadow={true}
                color={"#ffffff"}
                position={[0, 120, 0]}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-camera-far={1000}
                shadow-camera-near={0.5}
                shadow-camera-left={-100}
                shadow-camera-right={100}
                shadow-camera-top={100}
                shadow-camera-bottom={-100}
                shadow-bias={-0.00005}
                shadow-radius={3}
            />

            <Html position={[2, 0.75, 1.2]} transform sprite scale={[0.5, 0.5, 0.5]} style={{ zIndex: -1, position: "absolute" }}>
                <Link href={'/wellness'} className="iconInModel relative flex items-center justify-center text-xs text-white">
                    <div className="image flex items-center justify-center p-0.5 hover:scale-150 hover:bg-mainColor duration-700 rounded-full bg-white bg-opacity-75 w-6 h-6 z-10">
                        <Image src={'/health.png'} width={100} height={100} alt='wellness Icon' />
                    </div>
                </Link>
            </Html>
            <Html position={[-0.9, 0.5, 0.4]} transform sprite scale={[0.5, 0.5, 0.5]} style={{ zIndex: -1, position: "absolute" }}>
                <Link href={'/wellness/So-Check'} className="iconInModel relative flex items-center justify-center text-xs text-white">
                    <div className="image flex items-center justify-center p-0.5 hover:scale-150 hover:bg-mainColor duration-700 rounded-full bg-white bg-opacity-75 w-6 h-6 z-10">
                        <Image src={'/medicine.png'} width={100} height={100} alt='wellness Icon' />
                    </div>
                </Link>
            </Html>
            <Html position={[-1.85, 0.95, 0.75]} transform sprite scale={[0.5, 0.5, 0.5]} style={{ zIndex: -1, position: "absolute" }}>
                <Link href={'/blogs'} className="iconInModel relative flex items-center justify-center text-xs text-white">
                    <div className="image flex items-center justify-center p-1 hover:scale-150 hover:bg-mainColor duration-700 rounded-full bg-white bg-opacity-75 w-6 h-6 z-10">
                        <Image src={'/blogs.png'} width={100} height={100} alt='wellness Icon' />
                    </div>
                </Link>
            </Html>
            <Html position={[1.35, 0.75, -0.8]} transform sprite scale={[0.5, 0.5, 0.5]} style={{ zIndex: -1, position: "absolute" }}>
                <Link href={'/news'} className="iconInModel relative flex items-center justify-center text-xs text-white">
                    <div className="image flex items-center justify-center p-1 hover:scale-150 hover:bg-mainColor duration-700 rounded-full bg-white bg-opacity-75 w-6 h-6 z-10">
                        <Image src={'/contact.png'} width={100} height={100} alt='wellness Icon' />
                    </div>
                </Link>
            </Html>
            <Html position={[-1.95, 1, -0.5]} transform sprite scale={[0.5, 0.5, 0.5]} style={{ zIndex: -1, position: "absolute" }}>
                <Link href={'/contactus'} className="iconInModel relative flex items-center justify-center text-xs text-white">
                    <div className="image flex items-center justify-center p-1 hover:scale-150 hover:bg-mainColor duration-700 rounded-full bg-white bg-opacity-75 w-6 h-6 z-10">
                        <Image src={'/meeting.png'} width={100} height={100} alt='wellness Icon' />
                    </div>
                </Link>
            </Html>

            <group name="Scene">
                <group name="C-Component#7" position={[0.553, -0.158, -1.585]} rotation={[Math.PI, -0.227, 0]} scale={-0.051}>
                    <group name="C-Component#12" />
                    <group name="C-Component#17" position={[-55.446, 0, 72.742]}>
                        <group name="C-Component#19" position={[0.213, 0, -0.018]} />
                    </group>
                    <group name="C-Component#20" position={[5.586, 0, 67.939]}>
                        <group name="C-Component#19001" position={[-0.018, 0, -0.213]} />
                    </group>
                    <group name="C-Component#8" position={[5.568, 0, 67.725]} />
                </group>
                <group name="C-Component#30" position={[1.881, -0.158, 4.603]} rotation={[Math.PI, -0.227, 0]} scale={-0.051}>
                    <group name="C-Component#31" position={[-12.541, -1.874, -28.953]}>
                        <mesh name="C-Component#32" geometry={nodes['C-Component#32'].geometry} material={materials['bolzo.001']} position={[0.533, 4.735, -37.743]} rotation={[-Math.PI / 6, 0, 0]} scale={0.474} />
                        <mesh name="C-Component#32001" geometry={nodes['C-Component#32001'].geometry} material={materials['bolzo.001']} position={[6.85, 3.896, -39.197]} rotation={[2.618, 0, -Math.PI]} scale={0.474} />
                    </group>
                    <mesh name="C-Component#33" geometry={nodes['C-Component#33'].geometry} material={materials['UmB.001']} position={[-12.678, 3.451, -66.641]} scale={[0.315, 0.63, 0.315]} />
                </group>
                <group name="C-Component#25001" position={[3.977, -0.158, 3.968]} rotation={[Math.PI, -0.227, 0]} scale={-0.051}>
                    <mesh name="C-Component#27001" geometry={nodes['C-Component#27001'].geometry} material={materials['UmB.001']} position={[20.279, 3.451, -55.5]} rotation={[-Math.PI, 0.703, -Math.PI]} scale={0.315} />
                    <mesh name="C-Component#28001" geometry={nodes['C-Component#28001'].geometry} material={materials['Material.038']} position={[17.372, 13.622, -56.56]} rotation={[-Math.PI, 0.703, -Math.PI]} scale={[0.026, 0.632, 0.026]} />
                </group>
                <group name="C-Component#25" position={[2.402, -0.158, 4.005]} rotation={[Math.PI, -0.227, 0]} scale={-0.051}>
                    <mesh name="C-Component#27" geometry={nodes['C-Component#27'].geometry} material={materials['UmB.001']} position={[-0.483, 3.451, -51.324]} rotation={[Math.PI, -0.082, Math.PI]} scale={0.315} />
                    <mesh name="C-Component#28" geometry={nodes['C-Component#28'].geometry} material={materials['Material.038']} position={[-3.287, 13.622, -50.018]} rotation={[Math.PI, -0.082, Math.PI]} scale={[0.026, 0.632, 0.026]} />
                </group>
                <group name="C-Component#23" position={[1.721, -0.159, 1.196]} rotation={[Math.PI, -0.227, 0]} scale={-0.051}>
                    <group name="_C-Component#23_(Loose_Mesh)" position={[-1.201, 3.456, -7.611]} rotation={[Math.PI, -0.082, Math.PI]} scale={[0.315, 1.787, 0.315]}>
                        <mesh name="C-Component#23001" geometry={nodes['C-Component#23001'].geometry} material={materials['Google Earth Snapshot.001']} />
                        <mesh name="C-Component#23001_1" geometry={nodes['C-Component#23001_1'].geometry} material={materials['557733#1.001']} />
                        <mesh name="C-Component#23001_2" geometry={nodes['C-Component#23001_2'].geometry} material={materials['Canser.001']} />
                    </group>
                    <group name="C-Component#29" position={[-5.235, 3.456, -10.019]} rotation={[Math.PI, -0.082, Math.PI]} scale={0.315}>
                        <mesh name="C-Component#29001_1" geometry={nodes['C-Component#29001_1'].geometry} material={materials['Canser#1.001']} />
                        <mesh name="C-Component#29001_2" geometry={nodes['C-Component#29001_2'].geometry} material={materials['Canser.001']} />
                    </group>
                    <group name="C-Component#29001" position={[-7.93, 3.456, -9.798]} rotation={[0, 0.082, -Math.PI]} scale={-0.315}>
                        <mesh name="C-Component#29001_1" geometry={nodes['C-Component#29001_1'].geometry} material={materials['Canser#1.001']} />
                        <mesh name="C-Component#29001_2" geometry={nodes['C-Component#29001_2'].geometry} material={materials['Canser.001']} />
                    </group>
                </group>
                <group name="_(Loose_Entity)" position={[1.318, 0.017, 0.341]} rotation={[Math.PI, -0.227, 0]} scale={-0.016} />
                <group name="Cube038" position={[-1.124, 0.008, 1.182]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-0.084, -0.06, -0.148]}>
                    <mesh name="Cube040" geometry={nodes.Cube040.geometry} material={materials['Material.020']} />
                    <mesh name="Cube040_1" geometry={nodes.Cube040_1.geometry} material={materials['Material.059']} />
                </group>
                <group name="Cube039" position={[1.054, 0.032, 0.298]} rotation={[0, 0.077, 0]} scale={[0.084, 0.053, 0.148]}>
                    <mesh name="Cube041_1" geometry={nodes.Cube041_1.geometry} material={materials['Material.020']} />
                    <mesh name="Cube041_2" geometry={nodes.Cube041_2.geometry} material={materials['Material.059']} />
                </group>
                <group name="Cube041" position={[-0.92, 0.151, 0.826]} scale={0.175}>
                    <mesh name="Mesh" geometry={nodes.Mesh.geometry} material={materials['Material.039']} />
                    <mesh name="Mesh_1" geometry={nodes.Mesh_1.geometry} material={materials['Material.062']} />
                    <mesh name="Mesh_2" geometry={nodes.Mesh_2.geometry} material={materials['Material.040']} />
                    <mesh name="Mesh_3" geometry={nodes.Mesh_3.geometry} material={materials['Material.041']} />
                    <mesh name="Mesh_4" geometry={nodes.Mesh_4.geometry} material={materials['Material.061']} />
                </group>
                <mesh name="Text" geometry={nodes.Text.geometry} material={materials['Material.063']} position={[-2.29, 0.629, -0.226]} rotation={[Math.PI / 2, 0, -0.355]} scale={0.188} />
                <group name="Cylinder010" position={[-1.982, 0.248, 0.951]} rotation={[0, 1.389, 0]} scale={[0.171, 0.236, 0.171]}>
                    <mesh name="Cylinder014" geometry={nodes.Cylinder014.geometry} material={materials['Material.065']} />
                    <mesh name="Cylinder014_1" geometry={nodes.Cylinder014_1.geometry} material={materials['Material.066']} />
                    <mesh name="Cylinder014_2" geometry={nodes.Cylinder014_2.geometry} material={materials['Untitled design (1)']} />
                    <mesh name="Circle" geometry={nodes.Circle.geometry} material={materials['Material.077']} position={[-0.563, -0.644, -0.388]} rotation={[Math.PI / 2, 0, 0]} scale={[0.096, 0.096, 0.069]} />
                    <mesh name="Circle001" geometry={nodes.Circle001.geometry} material={materials['Material.076']} position={[0.344, -0.644, -0.325]} rotation={[Math.PI / 2, 0, 1.587]} scale={[0.036, 0.044, 0.026]} />
                    <mesh name="Circle002" geometry={nodes.Circle002.geometry} material={materials['Material.008']} position={[-0.563, 0.32, -0.3]} rotation={[Math.PI / 2, 0, 0]} scale={[0.118, 0.136, 0.093]} />
                    <mesh name="Circle003" geometry={nodes.Circle003.geometry} material={materials['Material.075']} position={[-0.557, 0.36, -0.225]} rotation={[Math.PI / 2, 0, 0]} scale={[-0.034, -0.04, -0.025]} />
                    <mesh name="Circle004" geometry={nodes.Circle004.geometry} material={materials['Material.074']} position={[-0.771, -1.001, 0.327]} scale={[0.086, 0.062, 0.086]} />
                    <mesh name="Circle005" geometry={nodes.Circle005.geometry} material={materials['Material.074']} position={[-0.771, -1.001, -0.281]} scale={[0.086, 0.062, 0.086]} />
                    <mesh name="Circle006" geometry={nodes.Circle006.geometry} material={materials['Material.074']} position={[0.786, -1.001, 0.327]} scale={[0.086, 0.062, 0.086]} />
                    <mesh name="Circle007" geometry={nodes.Circle007.geometry} material={materials['Material.074']} position={[0.786, -1.001, -0.281]} scale={[0.086, 0.062, 0.086]} />
                    {/* <group name="Circle008" position={[1.009, -0.759, -0.008]} rotation={[Math.PI, 0, -Math.PI / 2]} scale={[-0.062, -0.086, -0.086]}>
                        <mesh name="Mesh_13" geometry={nodes.Mesh_13.geometry} material={materials['Material.072']} />
                        <mesh name="Mesh_14" geometry={nodes.Mesh_14.geometry} material={materials['Material.073']} />
                    </group> */}
                    <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials['Material.014']} position={[-0.973, 0.284, 0.249]} rotation={[0, 0.187, 0]} scale={[0.062, 0.067, 0.092]} />
                    <mesh name="Cube025" geometry={nodes.Cube025.geometry} material={materials['Material.003']} position={[-0.973, -0.27, 0.249]} rotation={[0, 0.187, 0]} scale={[0.062, 0.067, 0.092]} />
                    <mesh name="Cube026" geometry={nodes.Cube026.geometry} material={materials['Material.067']} position={[0.335, -0.455, -0.37]} scale={[0.28, 0.003, 0.252]} />
                    <mesh name="Cube027" geometry={nodes.Cube027.geometry} material={materials['Material.068']} position={[-0.567, 0.266, -0.334]} scale={[0.139, 0.152, 0.02]} />
                    <mesh name="Cube028" geometry={nodes.Cube028.geometry} material={materials['Material.069']} position={[-0.567, -0.015, -0.296]} scale={[0.139, 0.091, 0.12]} />
                    <mesh name="Cube029" geometry={nodes.Cube029.geometry} material={materials.Material} position={[0.026, 0.227, -0.524]} scale={[0.733, 0.33, 0.122]} />
                    <mesh name="Cube030" geometry={nodes.Cube030.geometry} material={materials['Material.012']} position={[0.462, -0.015, -0.373]} scale={[0.07, 0.072, 0.043]} />
                    <mesh name="Cube031" geometry={nodes.Cube031.geometry} material={materials['Material.009']} position={[-0.058, 0.164, -0.219]} scale={[0.101, 0.04, 0.051]} />
                    <mesh name="Cube032" geometry={nodes.Cube032.geometry} material={materials['Material.069']} position={[-0.107, -0.148, -0.218]} scale={[0.056, 0.105, 0.03]} />
                    <mesh name="Cube033" geometry={nodes.Cube033.geometry} material={materials['Material.069']} position={[0.001, -0.148, -0.218]} scale={[0.056, 0.105, 0.03]} />
                    <group name="Cube034" position={[-0.054, 0.092, -0.524]} scale={[0.221, 0.344, 0.276]}>
                        <mesh name="Cube052" geometry={nodes.Cube052.geometry} material={materials['Material.069']} />
                        <mesh name="Cube052_1" geometry={nodes.Cube052_1.geometry} material={materials['Material.070']} />
                    </group>
                    <mesh name="Cube035" geometry={nodes.Cube035.geometry} material={materials['Material.007']} position={[-0.079, -0.182, -0.524]} scale={[0.641, 0.203, 0.07]} />
                    <mesh name="Cube036" geometry={nodes.Cube036.geometry} material={materials['Material.071']} position={[0.335, -0.503, -0.37]} scale={[0.28, 0.04, 0.252]} />
                    <mesh name="Cube037" geometry={nodes.Cube037.geometry} material={materials['Material.006']} position={[0.003, -0.019, -0.603]} rotation={[0, 0, -Math.PI]} scale={[-0.689, -0.581, -0.014]} />
                    <mesh name="Cylinder007" geometry={nodes.Cylinder007.geometry} material={materials['Material.015']} position={[0, -0.37, 0]} />
                    <mesh name="Cylinder008" geometry={nodes.Cylinder008.geometry} material={materials['Material.021']} position={[0, 0.2, 0]} />
                    <group name="Cylinder009" position={[0.006, -0.034, 0.68]} rotation={[0, 0.011, 0]}>
                        <mesh name="Cylinder013" geometry={nodes.Cylinder013.geometry} material={materials['Material.029']} />
                        <mesh name="Cylinder013_1" geometry={nodes.Cylinder013_1.geometry} material={materials['Material.064']} />
                    </group>
                </group>
                <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials['Material.033']} position={[-0.215, 0.077, 0.818]} rotation={[Math.PI, -1.484, Math.PI]} scale={0.04}>
                    <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials['Material.030']} position={[0.012, 1.555, 0]} scale={[0.9, 0.999, 0.999]} />
                    <mesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials['Material.030']} position={[1.15, -0.381, 0]} rotation={[0, 0, 0.501]} scale={[0.088, 0.209, 0.209]} />
                    <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials['Material.030']} position={[-1.201, -0.381, 0]} rotation={[Math.PI, 0, 0.501]} scale={[-0.088, -0.209, -0.209]} />
                    <mesh name="Cube005" geometry={nodes.Cube005.geometry} material={materials['Material.030']} position={[0.02, 1.555, 0.829]} scale={0.128} />
                    <mesh name="Cube006" geometry={nodes.Cube006.geometry} material={materials['Material.017']} position={[0.414, 1.768, 0.697]} scale={0.155} />
                    <mesh name="Cube007" geometry={nodes.Cube007.geometry} material={materials['Material.017']} position={[-0.33, 1.797, 0.697]} scale={0.155} />
                    <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials['Material.032']} position={[0.012, -0.613, 0]} scale={[1.007, 0.999, 0.999]} />
                    <mesh name="Mball027" geometry={nodes.Mball027.geometry} material={materials['Material.031']} position={[0.007, 2.372, 0]} scale={0.347} />
                </mesh>
                <mesh name="Cube010" geometry={nodes.Cube010.geometry} material={materials['Material.035']} position={[0.923, 0.077, 2.446]} rotation={[-Math.PI, 0.141, -Math.PI]} scale={0.04}>
                    <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials['Material.030']} position={[0.012, 1.555, 0]} scale={[0.9, 0.999, 0.999]} />
                    <mesh name="Cube011" geometry={nodes.Cube011.geometry} material={materials['Material.030']} position={[1.15, -0.381, 0]} rotation={[0, 0, 0.501]} scale={[0.088, 0.209, 0.209]} />
                    <mesh name="Cube012" geometry={nodes.Cube012.geometry} material={materials['Material.030']} position={[-1.201, -0.381, 0]} rotation={[Math.PI, 0, 0.501]} scale={[-0.088, -0.209, -0.209]} />
                    <mesh name="Cube013" geometry={nodes.Cube013.geometry} material={materials['Material.030']} position={[0.02, 1.555, 0.829]} scale={0.128} />
                    <mesh name="Cube014" geometry={nodes.Cube014.geometry} material={materials['Material.017']} position={[0.414, 1.768, 0.697]} scale={0.155} />
                    <mesh name="Cube015" geometry={nodes.Cube015.geometry} material={materials['Material.017']} position={[-0.33, 1.797, 0.697]} scale={0.155} />
                    <mesh name="Cube016" geometry={nodes.Cube016.geometry} material={materials['Material.032']} position={[0.012, -0.613, 0]} scale={[1.007, 0.999, 0.999]} />
                    <mesh name="Mball001" geometry={nodes.Mball001.geometry} material={materials['Material.031']} position={[0.005, 2.112, -0.101]} rotation={[Math.PI, -1.425, Math.PI]} scale={0.347} />
                </mesh>
                <mesh name="Cube018" geometry={nodes.Cube018.geometry} material={materials['Material.034']} position={[-1.566, 0.077, 0.167]} rotation={[0, 0.663, 0]} scale={0.04}>
                    <mesh name="Cube017" geometry={nodes.Cube017.geometry} material={materials['Material.030']} position={[0.012, 1.555, 0]} scale={[0.9, 0.999, 0.999]} />
                    <mesh name="Cube019" geometry={nodes.Cube019.geometry} material={materials['Material.030']} position={[1.15, -0.381, 0]} rotation={[0, 0, 0.501]} scale={[0.088, 0.209, 0.209]} />
                    <mesh name="Cube020" geometry={nodes.Cube020.geometry} material={materials['Material.030']} position={[-1.201, -0.381, 0]} rotation={[Math.PI, 0, 0.501]} scale={[-0.088, -0.209, -0.209]} />
                    <mesh name="Cube021" geometry={nodes.Cube021.geometry} material={materials['Material.030']} position={[0.02, 1.555, 0.829]} scale={0.128} />
                    <mesh name="Cube022" geometry={nodes.Cube022.geometry} material={materials['Material.017']} position={[0.414, 1.768, 0.697]} scale={0.155} />
                    <mesh name="Cube023" geometry={nodes.Cube023.geometry} material={materials['Material.017']} position={[-0.33, 1.797, 0.697]} scale={0.155} />
                    <mesh name="Cube024" geometry={nodes.Cube024.geometry} material={materials['Material.032']} position={[0.012, -0.613, 0]} scale={[1.007, 0.999, 0.999]} />
                    <mesh name="Mball002" geometry={nodes.Mball002.geometry} material={materials['Material.031']} position={[-0.002, 2.105, -0.075]} rotation={[0, 0.621, 0]} scale={0.347} />
                </mesh>
                <mesh name="Plane_3" geometry={nodes.Plane_3.geometry} material={materials['Material.036']} position={[-3.91, -0.01, -1.266]} scale={10.486} />
                <mesh name="Plane_2" geometry={nodes.Plane_2.geometry} material={materials['Material.037']} position={[1.138, -0.014, 0.526]} scale={2.165} />
                <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={materials['Material.037']} position={[-1.079, -0.008, 1.877]} scale={[1.532, 1, 1]} />
                <mesh name="street_sign" geometry={nodes.street_sign.geometry} material={materials['Material.042']} position={[-0.926, -0.004, -0.448]} rotation={[0, 0.674, 0]} scale={[0.019, 0.002, 0.046]} />
                <group name="Sphere009" position={[1.138, -0.004, 0.526]} scale={2.165}>
                    <mesh name="Sphere009_1" geometry={nodes.Sphere009_1.geometry} material={materials['Material.025']} />
                    <mesh name="Sphere009_2" geometry={nodes.Sphere009_2.geometry} material={materials['Material.024']} />
                </group>
                <group name="Sphere010" position={[1.138, -0.004, 0.526]} scale={2.165}>
                    <mesh name="Sphere013" geometry={nodes.Sphere013.geometry} material={materials['Material.025']} />
                    <mesh name="Sphere013_1" geometry={nodes.Sphere013_1.geometry} material={materials['Material.024']} />
                </group>
                <group name="Sphere011" position={[1.138, -0.004, 0.526]} scale={2.165}>
                    <mesh name="Sphere014" geometry={nodes.Sphere014.geometry} material={materials['Material.025']} />
                    <mesh name="Sphere014_1" geometry={nodes.Sphere014_1.geometry} material={materials['Material.024']} />
                </group>
                <group name="Sphere012" position={[1.138, -0.004, 0.526]} scale={2.165}>
                    <mesh name="Sphere015" geometry={nodes.Sphere015.geometry} material={materials['Material.025']} />
                    <mesh name="Sphere015_1" geometry={nodes.Sphere015_1.geometry} material={materials['Material.024']} />
                </group>
                <group name="Sphere004" position={[1.138, -0.004, 0.526]} scale={2.165}>
                    <mesh name="Sphere018" geometry={nodes.Sphere018.geometry} material={materials['Material.025']} />
                    <mesh name="Sphere018_1" geometry={nodes.Sphere018_1.geometry} material={materials['Material.024']} />
                </group>
                <group name="Sphere006" position={[1.138, -0.004, 0.526]} scale={2.165}>
                    <mesh name="Sphere019" geometry={nodes.Sphere019.geometry} material={materials['Material.025']} />
                    <mesh name="Sphere019_1" geometry={nodes.Sphere019_1.geometry} material={materials['Material.024']} />
                </group>
                <group name="Sphere005" position={[1.138, -0.004, 0.526]} scale={2.165}>
                    <mesh name="Sphere020" geometry={nodes.Sphere020.geometry} material={materials['Material.025']} />
                    <mesh name="Sphere020_1" geometry={nodes.Sphere020_1.geometry} material={materials['Material.024']} />
                </group>
                <group name="Sphere002" position={[-0.948, -0.004, 1.709]} scale={2.165}>
                    <mesh name="Sphere001_1" geometry={nodes.Sphere001_1.geometry} material={materials['Material.025']} />
                    <mesh name="Sphere001_2" geometry={nodes.Sphere001_2.geometry} material={materials['Material.024']} />
                </group>
                <group name="Sphere003" position={[-3.306, -0.004, 1.568]} scale={2.165}>
                    <mesh name="Sphere002_1" geometry={nodes.Sphere002_1.geometry} material={materials['Material.025']} />
                    <mesh name="Sphere002_2" geometry={nodes.Sphere002_2.geometry} material={materials['Material.024']} />
                </group>
                <group name="Sphere007" position={[-1.993, 0.112, 0.193]} rotation={[-Math.PI, 0.546, -Math.PI]} scale={2.165}>
                    <mesh name="Sphere003_1" geometry={nodes.Sphere003_1.geometry} material={materials['Material.025']} />
                    <mesh name="Sphere003_2" geometry={nodes.Sphere003_2.geometry} material={materials['Material.024']} />
                </group>
                <group name="Sphere008" position={[-0.141, 0.112, 1.626]} scale={2.165}>
                    <mesh name="Sphere016" geometry={nodes.Sphere016.geometry} material={materials['Material.025']} />
                    <mesh name="Sphere016_1" geometry={nodes.Sphere016_1.geometry} material={materials['Material.024']} />
                </group>
                <group name="Sphere001" position={[-0.307, 0.112, 1.589]} scale={2.165}>
                    <mesh name="Sphere017" geometry={nodes.Sphere017.geometry} material={materials['Material.025']} />
                    <mesh name="Sphere017_1" geometry={nodes.Sphere017_1.geometry} material={materials['Material.024']} />
                </group>
                <group name="Cylinder" position={[1.138, 0.094, 0.526]} scale={[-0.011, -0.173, -0.011]}>
                    <mesh name="Cylinder_1" geometry={nodes.Cylinder_1.geometry} material={materials['Material.027']} />
                    <mesh name="Cylinder_2" geometry={nodes.Cylinder_2.geometry} material={materials['Material.023']} />
                </group>
                <group name="Cylinder001" position={[2.573, 0.094, 0.399]} scale={[-0.011, -0.173, -0.011]}>
                    <mesh name="Cylinder001_1" geometry={nodes.Cylinder001_1.geometry} material={materials['Material.027']} />
                    <mesh name="Cylinder001_2" geometry={nodes.Cylinder001_2.geometry} material={materials['Material.023']} />
                </group>
                <group name="Cylinder002" position={[2.941, 0.094, 1.854]} scale={[-0.011, -0.173, -0.011]}>
                    <mesh name="Cylinder002_1" geometry={nodes.Cylinder002_1.geometry} material={materials['Material.027']} />
                    <mesh name="Cylinder002_2" geometry={nodes.Cylinder002_2.geometry} material={materials['Material.023']} />
                </group>
                <group name="Cylinder003" position={[1.496, 0.094, 2.145]} scale={[-0.011, -0.173, -0.011]}>
                    <mesh name="Cylinder003_1" geometry={nodes.Cylinder003_1.geometry} material={materials['Material.027']} />
                    <mesh name="Cylinder003_2" geometry={nodes.Cylinder003_2.geometry} material={materials['Material.023']} />
                </group>
                <group name="Cylinder004" position={[-0.388, 0.094, -0.834]} scale={[-0.011, -0.173, -0.011]}>
                    <mesh name="Cylinder004_1" geometry={nodes.Cylinder004_1.geometry} material={materials['Material.027']} />
                    <mesh name="Cylinder004_2" geometry={nodes.Cylinder004_2.geometry} material={materials['Material.023']} />
                </group>
                <group name="Cylinder005" position={[-1.307, 0.094, -0.229]} scale={[-0.011, -0.173, -0.011]}>
                    <mesh name="Cylinder005_1" geometry={nodes.Cylinder005_1.geometry} material={materials['Material.027']} />
                    <mesh name="Cylinder005_2" geometry={nodes.Cylinder005_2.geometry} material={materials['Material.023']} />
                </group>
                <group name="Cylinder006" position={[-2.173, 0.094, 1.81]} scale={[-0.011, -0.173, -0.011]}>
                    <mesh name="Cylinder006_1" geometry={nodes.Cylinder006_1.geometry} material={materials['Material.027']} />
                    <mesh name="Cylinder006_2" geometry={nodes.Cylinder006_2.geometry} material={materials['Material.023']} />
                </group>
                <group name="flyer_2" position={[-2.111, 0.116, 2.028]} rotation={[0, 0.3, 0]} scale={[2.165, 2.588, 2.165]}>
                    <mesh name="Cube081" geometry={nodes.Cube081.geometry} material={materials['Material.004']} />
                    <mesh name="Cube081_1" geometry={nodes.Cube081_1.geometry} material={materials['Untitled Image']} />
                </group>
                <group name="building_2" position={[0.29, 0.498, -1.212]} scale={[2.165, 2.018, 2.165]}>
                    <mesh name="Cube066" geometry={nodes.Cube066.geometry} material={materials['Material.005']} />
                    <mesh name="Cube066_1" geometry={nodes.Cube066_1.geometry} material={materials['Material.016']} />
                </group>
                <group name="building_1" position={[-2.001, 0.443, -0.327]} rotation={[0, 0.171, 0]} scale={[1.842, 1.716, 1.842]}>
                    <mesh name="Cube025_1" geometry={nodes.Cube025_1.geometry} material={materials['Material.060']} />
                    <mesh name="Cube025_2" geometry={nodes.Cube025_2.geometry} material={materials['Material.016']} />
                </group>
                <group name="Icosphere" position={[1.412, 0.18, -0.928]} scale={2.165}>
                    <mesh name="Icosphere_1" geometry={nodes.Icosphere_1.geometry} material={materials['Material.002']} />
                    <mesh name="Icosphere_2" geometry={nodes.Icosphere_2.geometry} material={materials['Material.001']} />
                </group>
                <mesh name="Plane041" geometry={nodes.Plane041.geometry} material={materials['Material.019']} position={[1.414, 0.075, -0.913]} scale={2.165} />
                <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials['Material.018']} position={[1.411, 0.046, -0.907]} scale={2.509} />
                <group name="gate_1" position={[0.848, 0.22, 1.808]} scale={[2.589, 2.787, 2.165]}>
                    <mesh name="Circle043" geometry={nodes.Circle043.geometry} material={materials['Material.022']} />
                    <mesh name="Circle043_1" geometry={nodes.Circle043_1.geometry} material={materials['Material.026']} />
                </group>
                <group name="gate_3" position={[-0.85, 0.192, -0.423]} scale={2.723}>
                    <mesh name="Circle046" geometry={nodes.Circle046.geometry} material={materials['Material.022']} />
                    <mesh name="Circle046_1" geometry={nodes.Circle046_1.geometry} material={materials['Material.026']} />
                </group>
                <group name="gate_2" position={[1.075, 0.007, 0.526]} scale={[2.437, 2.59, 2.165]}>
                    <mesh name="Circle047" geometry={nodes.Circle047.geometry} material={materials['Material.022']} />
                    <mesh name="Circle047_1" geometry={nodes.Circle047_1.geometry} material={materials['Material.026']} />
                </group>
                <mesh name="Plane037" geometry={nodes.Plane037.geometry} material={materials['Material.011']} position={[-0.081, 0.01, 1.962]} scale={2.165} />
                <mesh name="Plane044" geometry={nodes.Plane044.geometry} material={materials['Material.010']} position={[-0.084, -0.005, 1.955]} scale={2.165} />
                <mesh name="valeurs_logo"
                    onPointerOver={(e) => {
                        gl.domElement.style.cursor = 'pointer';
                    }}
                    onPointerOut={(e) => {
                        gl.domElement.style.cursor = 'default';
                    }}
                    onClick={() => router.push('/our-company')}
                    geometry={nodes.valeurs_logo.geometry} material={materials['Material.013']} position={[-1.082, -0.035, 2.219]} scale={4.831} />
            </group>
        </group>
    )
}

useGLTF.preload('/plane.gltf')
