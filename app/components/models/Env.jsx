
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Env(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/plane.gltf')
    const { actions } = useAnimations(animations, group)

    useEffect(() => {

        const actionName = Object.keys(actions)[0]
        const action = actions[actionName]

        if (action) {
            action.play()
        }

        return () => {
            if (action) {
                action.stop()
            }
        }
    }, [actions])


    return (
        <group ref={group} {...props} dispose={null} position={[0, 0 ,-0.8]}>
            <ambientLight intensity={1.5} color={"#ffffff"} />

            {/* Directional light with shadows */}
            <directionalLight
                intensity={0.7}
                castShadow={true}
                position={[200, 300, 300]}
                shadow-mapSize-width={2048}  // Increase shadow map size for better quality
                shadow-mapSize-height={2048}
                shadow-camera-far={1000}     // Adjust camera distance for better coverage
                shadow-camera-near={0.5}
                shadow-camera-left={-100}
                shadow-camera-right={100}
                shadow-camera-top={100}
                shadow-camera-bottom={-100}
                shadow-bias={-0.00005}       // Adjust bias to minimize shadow acne and lines
                shadow-radius={3}            // Soft shadows by increasing the shadow radius
            />

            <directionalLight
                intensity={5.5}
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

            <group name="Scene">
                <mesh
                    name="Plane005"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane005.geometry}
                    material={materials['Material.020']}
                    position={[-3.91, -0.01, -1.266]}
                    scale={10.486}
                />
                <mesh
                    name="Circle009"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle009.geometry}
                    material={materials['Material.014']}
                    position={[1.138, 0.133, 0.526]}
                    scale={[2.165, 2.891, 2.165]}
                />
                <mesh
                    name="Circle033"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle033.geometry}
                    material={materials['Material.014']}
                    position={[1.138, 0.142, 0.526]}
                    scale={[2.165, 3.73, 2.165]}
                />
                <group name="Circle034" position={[2.047, 0.448, 1.181]} scale={[2.039, 2.784, 2.039]}>
                    <mesh
                        name="Circle065"
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle065.geometry}
                        material={materials['Material.014']}
                    />
                    <mesh
                        name="Circle065_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle065_1.geometry}
                        material={materials['Material.003']}
                    />
                    <mesh
                        name="Circle065_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle065_2.geometry}
                        material={materials['Material.015']}
                    />
                </group>
                <group name="Icosphere" position={[1.412, 0.18, -0.928]} scale={2.165}>
                    <mesh
                        name="Icosphere_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Icosphere_1.geometry}
                        material={materials['Material.002']}
                    />
                    <mesh
                        name="Icosphere_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Icosphere_2.geometry}
                        material={materials['Material.001']}
                    />
                </group>
                <group name="Circle040" position={[0.848, 0.171, 1.883]} scale={2.165}>
                    <mesh
                        name="Circle071"
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle071.geometry}
                        material={materials['Material.022']}
                    />
                    <mesh
                        name="Circle071_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle071_1.geometry}
                        material={materials['Material.026']}
                    />
                </group>
                <group name="Cube066" position={[0.29, 0.498, -1.212]} scale={[2.165, 2.018, 2.165]}>
                    <mesh
                        name="Cube066_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube066_1.geometry}
                        material={materials['Material.005']}
                    />
                    <mesh
                        name="Cube066_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube066_2.geometry}
                        material={materials['Material.016']}
                    />
                </group>
                <mesh
                    name="Plane037"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane037.geometry}
                    material={materials['Material.011']}
                    position={[-0.081, 0.01, 1.962]}
                    scale={2.165}
                />
                <mesh
                    name="NurbsPath"
                    castShadow
                    receiveShadow
                    geometry={nodes.NurbsPath.geometry}
                    material={materials['Material.029']}
                    position={[1.138, -0.004, 0.526]}
                    scale={2.165}
                />
                <mesh
                    name="NurbsPath001"
                    castShadow
                    receiveShadow
                    geometry={nodes.NurbsPath001.geometry}
                    material={materials['Material.021']}
                    position={[1.138, -0.004, 0.526]}
                    scale={2.165}
                />
                <mesh
                    name="Icosphere001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere001.geometry}
                    material={materials['Material.003']}
                    position={[1.138, -0.004, 0.526]}
                    scale={2.165}
                />
                <mesh
                    name="Plane038"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane038.geometry}
                    material={materials['Material.019']}
                    position={[1.138, -0.004, 0.526]}
                    scale={2.165}
                />
                <mesh
                    name="Plane041"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane041.geometry}
                    material={materials['Material.019']}
                    position={[1.414, 0.075, -0.913]}
                    scale={2.165}
                />
                <group name="Sphere009" position={[1.138, -0.004, 0.526]} scale={2.165}>
                    <mesh
                        name="Sphere009_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere009_1.geometry}
                        material={materials['Material.025']}
                    />
                    <mesh
                        name="Sphere009_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere009_2.geometry}
                        material={materials['Material.024']}
                    />
                </group>
                <mesh
                    name="Cube074"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube074.geometry}
                    material={nodes.Cube074.material}
                    position={[1.138, -0.004, 0.526]}
                    scale={2.165}
                />
                <mesh
                    name="Cube075"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube075.geometry}
                    material={nodes.Cube075.material}
                    position={[1.548, 0.154, -1.979]}
                    scale={2.165}
                />
                <mesh
                    name="Cube076"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube076.geometry}
                    material={nodes.Cube076.material}
                    position={[1.853, 0.154, -1.91]}
                    scale={2.165}
                />
                <mesh
                    name="Cube077"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube077.geometry}
                    material={nodes.Cube077.material}
                    position={[-2.136, 0.249, 2.227]}
                    rotation={[0, 0.3, 0]}
                    scale={2.165}
                />
                <mesh
                    name="Cube078"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube078.geometry}
                    material={nodes.Cube078.material}
                    position={[-2.305, 0.116, 2.273]}
                    rotation={[0, 0.3, 0]}
                    scale={2.165}
                />
                <mesh
                    name="Cube079"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube079.geometry}
                    material={nodes.Cube079.material}
                    position={[-2.111, 0.116, 2.028]}
                    rotation={[0, 0.3, 0]}
                    scale={2.165}
                />
                <mesh
                    name="Plane043"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane043.geometry}
                    material={materials['Material.037']}
                    position={[1.138, -0.004, 0.526]}
                    scale={2.165}
                />
                <mesh
                    name="Plane044"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane044.geometry}
                    material={materials['Material.010']}
                    position={[-0.084, -0.005, 1.955]}
                    scale={2.165}
                />
                <mesh
                    name="Circle049"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle049.geometry}
                    material={nodes.Circle049.material}
                    position={[1.138, -0.004, 0.526]}
                    scale={2.165}
                />
                <mesh
                    name="Circle050"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle050.geometry}
                    material={materials.Material}
                    position={[-1.254, 0.013, 1.389]}
                    rotation={[0, -0.95, 0]}
                    scale={2.165}
                />
                <mesh
                    name="Circle051"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle051.geometry}
                    material={materials['Material.003']}
                    position={[-1.254, 0.263, 1.389]}
                    scale={2.165}
                />
                <group name="Sphere010" position={[1.138, -0.004, 0.526]} scale={2.165}>
                    <mesh
                        name="Sphere013_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere013_1.geometry}
                        material={materials['Material.025']}
                    />
                    <mesh
                        name="Sphere013_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere013_2.geometry}
                        material={materials['Material.024']}
                    />
                </group>
                <group name="Sphere011" position={[1.138, -0.004, 0.526]} scale={2.165}>
                    <mesh
                        name="Sphere014_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere014_1.geometry}
                        material={materials['Material.025']}
                    />
                    <mesh
                        name="Sphere014_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere014_2.geometry}
                        material={materials['Material.024']}
                    />
                </group>
                <group name="Sphere012" position={[1.138, -0.004, 0.526]} scale={2.165}>
                    <mesh
                        name="Sphere015_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere015_1.geometry}
                        material={materials['Material.025']}
                    />
                    <mesh
                        name="Sphere015_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere015_2.geometry}
                        material={materials['Material.024']}
                    />
                </group>
                <group name="Sphere008" position={[-0.141, 0.112, 1.626]} scale={2.165}>
                    <mesh
                        name="Sphere016_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere016_1.geometry}
                        material={materials['Material.025']}
                    />
                    <mesh
                        name="Sphere016_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere016_2.geometry}
                        material={materials['Material.024']}
                    />
                </group>
                <group name="Sphere001" position={[-0.307, 0.112, 1.589]} scale={2.165}>
                    <mesh
                        name="Sphere017_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere017_1.geometry}
                        material={materials['Material.025']}
                    />
                    <mesh
                        name="Sphere017_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere017_2.geometry}
                        material={materials['Material.024']}
                    />
                </group>
                <group name="Sphere004" position={[1.138, -0.004, 0.526]} scale={2.165}>
                    <mesh
                        name="Sphere018_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere018_1.geometry}
                        material={materials['Material.025']}
                    />
                    <mesh
                        name="Sphere018_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere018_2.geometry}
                        material={materials['Material.024']}
                    />
                </group>
                <group name="Sphere006" position={[1.138, -0.004, 0.526]} scale={2.165}>
                    <mesh
                        name="Sphere019"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere019.geometry}
                        material={materials['Material.025']}
                    />
                    <mesh
                        name="Sphere019_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere019_1.geometry}
                        material={materials['Material.024']}
                    />
                </group>
                <group name="Sphere005" position={[1.138, -0.004, 0.526]} scale={2.165}>
                    <mesh
                        name="Sphere020"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere020.geometry}
                        material={materials['Material.025']}
                    />
                    <mesh
                        name="Sphere020_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere020_1.geometry}
                        material={materials['Material.024']}
                    />
                </group>
                <group name="Circle044" position={[0.848, 0.171, 1.808]} scale={2.165}>
                    <mesh
                        name="Circle043"
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle043.geometry}
                        material={materials['Material.022']}
                    />
                    <mesh
                        name="Circle043_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle043_1.geometry}
                        material={materials['Material.026']}
                    />
                </group>
                <group name="Circle045" position={[1.075, -0.004, 0.526]} scale={2.165}>
                    <mesh
                        name="Circle045_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle045_1.geometry}
                        material={materials['Material.022']}
                    />
                    <mesh
                        name="Circle045_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle045_2.geometry}
                        material={materials['Material.026']}
                    />
                </group>
                <group name="Circle047" position={[1.138, -0.004, 0.526]} scale={2.165}>
                    <mesh
                        name="Circle046"
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle046.geometry}
                        material={materials['Material.022']}
                    />
                    <mesh
                        name="Circle046_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle046_1.geometry}
                        material={materials['Material.026']}
                    />
                </group>
                <group name="Circle052" position={[1.075, -0.004, 0.526]} scale={2.165}>
                    <mesh
                        name="Circle047_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle047_1.geometry}
                        material={materials['Material.022']}
                    />
                    <mesh
                        name="Circle047_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle047_2.geometry}
                        material={materials['Material.026']}
                    />
                </group>
                <group
                    name="Circle"
                    position={[-1.946, 0.281, 0.915]}
                    rotation={[Math.PI / 2, 0, -0.011]}
                    scale={[0.269, 0.573, 0.269]}>
                    <mesh
                        name="Mesh_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_2.geometry}
                        material={materials['Material.008']}
                    />
                    <mesh
                        name="Mesh_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_3.geometry}
                        material={materials['Material.009']}
                    />
                    <mesh
                        name="Mesh_4"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_4.geometry}
                        material={materials['Material.006']}
                    />
                    <mesh
                        name="Mesh_5"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_5.geometry}
                        material={materials['Material.012']}
                    />
                </group>
                <group name="Sphere002" position={[-0.948, -0.004, 1.709]} scale={2.165}>
                    <mesh
                        name="Sphere001_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere001_1.geometry}
                        material={materials['Material.025']}
                    />
                    <mesh
                        name="Sphere001_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere001_2.geometry}
                        material={materials['Material.024']}
                    />
                </group>
                <group name="Sphere003" position={[-3.306, -0.004, 1.568]} scale={2.165}>
                    <mesh
                        name="Sphere002_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere002_1.geometry}
                        material={materials['Material.025']}
                    />
                    <mesh
                        name="Sphere002_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere002_2.geometry}
                        material={materials['Material.024']}
                    />
                </group>
                <group
                    name="Sphere007"
                    position={[-1.993, 0.112, 0.193]}
                    rotation={[-Math.PI, 0.546, -Math.PI]}
                    scale={2.165}>
                    <mesh
                        name="Sphere003_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere003_1.geometry}
                        material={materials['Material.025']}
                    />
                    <mesh
                        name="Sphere003_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere003_2.geometry}
                        material={materials['Material.024']}
                    />
                </group>
                <group
                    name="Circle001"
                    position={[-1.946, 0.281, 0.915]}
                    rotation={[Math.PI / 2, 0, -0.011]}
                    scale={[0.269, 0.573, 0.269]}>
                    <mesh
                        name="Mesh_6"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_6.geometry}
                        material={materials['Material.006']}
                    />
                    <mesh
                        name="Mesh_7"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_7.geometry}
                        material={materials['Material.004']}
                    />
                    <mesh
                        name="Mesh_8"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_8.geometry}
                        material={materials['Material.007']}
                    />
                </group>
                <mesh
                    name="Plane001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane001.geometry}
                    material={materials['Material.018']}
                    position={[1.411, 0.046, -0.907]}
                    scale={2.509}
                />
                <mesh
                    name="Circle002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle002.geometry}
                    material={materials['Material.028']}
                    position={[2.048, 0.063, 1.183]}
                    scale={[1.684, 1.979, 1.684]}
                />
                <mesh
                    name="Circle003"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle003.geometry}
                    material={materials['Material.014']}
                    position={[2.048, 0.352, 1.183]}
                    scale={[2.241, 3.862, 2.241]}
                />
                <mesh
                    name="Circle004"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle004.geometry}
                    material={materials['Material.014']}
                    position={[2.048, 0.323, 1.183]}
                    scale={[2.306, 3.973, 2.306]}
                />
                <mesh
                    name="Circle005"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle005.geometry}
                    material={materials['Material.014']}
                    position={[2.048, 0.295, 1.183]}
                    scale={[2.383, 4.106, 2.383]}
                />
                <mesh
                    name="Circle006"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle006.geometry}
                    material={materials['Material.014']}
                    position={[2.048, 0.277, 1.183]}
                    scale={[2.383, 4.106, 2.383]}
                />
                <mesh
                    name="Circle007"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle007.geometry}
                    material={materials['Material.014']}
                    position={[2.048, 0.255, 1.183]}
                    scale={[2.383, 4.106, 2.383]}
                />
                <group
                    name="Cube001"
                    position={[-2.001, 0.443, -0.327]}
                    rotation={[0, 0.171, 0]}
                    scale={[2.067, 1.926, 2.067]}>
                    <mesh
                        name="Cube025_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube025_1.geometry}
                        material={materials['Material.005']}
                    />
                    <mesh
                        name="Cube025_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube025_2.geometry}
                        material={materials['Material.016']}
                    />
                </group>
                <mesh
                    name="Curve001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Curve001.geometry}
                    material={materials['Material.013']}
                    position={[-1.082, -0.035, 2.219]}
                    scale={4.831}
                />
                <group
                    name="Sketchfab_model"
                    position={[0.026, 0.068, 2.3]}
                    rotation={[-1.574, 0, 0]}
                    scale={0}>
                    <group name="41988359a78d4916a5719b50015c7b57abccleanermaterialmergergle">
                        <group name="Object_2" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="Object_3">
                                <group name="Object_4">
                                    <group name="MorphMainGroup" />
                                    <group name="MorphMainGroup001" />
                                </group>
                                <group name="Object_9">
                                    <group name="MorphMainGroup002" />
                                    <group name="MorphMainGroup003" />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
                <mesh
                    name="Cylinder"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder.geometry}
                    material={materials['Material.027']}
                    position={[1.138, 0.094, 0.526]}
                    scale={[-0.011, -0.173, -0.011]}
                />
                <mesh
                    name="Sphere"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere.geometry}
                    material={materials['Material.023']}
                    position={[1.138, 0.3, 0.526]}
                    scale={0.056}
                />
                <mesh
                    name="Cylinder001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001.geometry}
                    material={materials['Material.027']}
                    position={[2.573, 0.094, 0.399]}
                    scale={[-0.011, -0.173, -0.011]}
                />
                <mesh
                    name="Sphere013"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere013.geometry}
                    material={materials['Material.023']}
                    position={[2.573, 0.3, 0.399]}
                    scale={0.056}
                />
                <mesh
                    name="Cylinder002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002.geometry}
                    material={materials['Material.027']}
                    position={[2.941, 0.094, 1.854]}
                    scale={[-0.011, -0.173, -0.011]}
                />
                <mesh
                    name="Sphere014"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere014.geometry}
                    material={materials['Material.023']}
                    position={[2.941, 0.3, 1.854]}
                    scale={0.056}
                />
                <mesh
                    name="Cylinder003"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder003.geometry}
                    material={materials['Material.027']}
                    position={[1.496, 0.094, 2.145]}
                    scale={[-0.011, -0.173, -0.011]}
                />
                <mesh
                    name="Sphere015"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere015.geometry}
                    material={materials['Material.023']}
                    position={[1.496, 0.3, 2.145]}
                    scale={0.056}
                />
                <mesh
                    name="Cylinder004"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder004.geometry}
                    material={materials['Material.027']}
                    position={[-0.388, 0.094, -0.834]}
                    scale={[-0.011, -0.173, -0.011]}
                />
                <mesh
                    name="Sphere016"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere016.geometry}
                    material={materials['Material.023']}
                    position={[-0.388, 0.3, -0.834]}
                    scale={0.056}
                />
                <mesh
                    name="Cylinder005"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder005.geometry}
                    material={materials['Material.027']}
                    position={[-1.307, 0.094, -0.229]}
                    scale={[-0.011, -0.173, -0.011]}
                />
                <mesh
                    name="Sphere017"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere017.geometry}
                    material={materials['Material.023']}
                    position={[-1.307, 0.3, -0.229]}
                    scale={0.056}
                />
                <mesh
                    name="Cylinder006"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder006.geometry}
                    material={materials['Material.027']}
                    position={[-2.173, 0.094, 1.81]}
                    scale={[-0.011, -0.173, -0.011]}
                />
                <mesh
                    name="Sphere018"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere018.geometry}
                    material={materials['Material.023']}
                    position={[-2.173, 0.3, 1.81]}
                    scale={0.056}
                />
                <mesh
                    name="Cube002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002.geometry}
                    material={materials['Material.033']}
                    position={[1.145, 0.077, 0.818]}
                    rotation={[0, 1.283, 0]}
                    scale={0.04}>
                    <mesh
                        name="Cube"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube.geometry}
                        material={materials['Material.030']}
                        position={[0.012, 1.555, 0]}
                        scale={[0.9, 0.999, 0.999]}
                    />
                    <mesh
                        name="Cube003"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube003.geometry}
                        material={materials['Material.030']}
                        position={[1.15, -0.381, 0]}
                        rotation={[0, 0, 0.501]}
                        scale={[0.088, 0.209, 0.209]}
                    />
                    <mesh
                        name="Cube004"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube004.geometry}
                        material={materials['Material.030']}
                        position={[-1.201, -0.381, 0]}
                        rotation={[Math.PI, 0, 0.501]}
                        scale={[-0.088, -0.209, -0.209]}
                    />
                    <mesh
                        name="Cube005"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube005.geometry}
                        material={materials['Material.030']}
                        position={[0.02, 1.555, 0.829]}
                        scale={0.128}
                    />
                    <mesh
                        name="Cube006"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube006.geometry}
                        material={materials['Material.017']}
                        position={[0.414, 1.768, 0.697]}
                        scale={0.155}
                    />
                    <mesh
                        name="Cube007"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube007.geometry}
                        material={materials['Material.017']}
                        position={[-0.33, 1.797, 0.697]}
                        scale={0.155}
                    />
                    <mesh
                        name="Cube008"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube008.geometry}
                        material={materials['Material.032']}
                        position={[0.012, -0.613, 0]}
                        scale={[1.007, 0.999, 0.999]}
                    />
                    <mesh
                        name="Mball027"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mball027.geometry}
                        material={materials['Material.031']}
                        position={[0.007, 2.372, 0]}
                        scale={0.347}
                    />
                </mesh>
                <mesh
                    name="Cube010"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube010.geometry}
                    material={materials['Material.035']}
                    position={[1.332, 0.077, -0.386]}
                    rotation={[-Math.PI, 0.141, -Math.PI]}
                    scale={0.04}>
                    <mesh
                        name="Cube009"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube009.geometry}
                        material={materials['Material.030']}
                        position={[0.012, 1.555, 0]}
                        scale={[0.9, 0.999, 0.999]}
                    />
                    <mesh
                        name="Cube011"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube011.geometry}
                        material={materials['Material.030']}
                        position={[1.15, -0.381, 0]}
                        rotation={[0, 0, 0.501]}
                        scale={[0.088, 0.209, 0.209]}
                    />
                    <mesh
                        name="Cube012"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube012.geometry}
                        material={materials['Material.030']}
                        position={[-1.201, -0.381, 0]}
                        rotation={[Math.PI, 0, 0.501]}
                        scale={[-0.088, -0.209, -0.209]}
                    />
                    <mesh
                        name="Cube013"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube013.geometry}
                        material={materials['Material.030']}
                        position={[0.02, 1.555, 0.829]}
                        scale={0.128}
                    />
                    <mesh
                        name="Cube014"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube014.geometry}
                        material={materials['Material.017']}
                        position={[0.414, 1.768, 0.697]}
                        scale={0.155}
                    />
                    <mesh
                        name="Cube015"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube015.geometry}
                        material={materials['Material.017']}
                        position={[-0.33, 1.797, 0.697]}
                        scale={0.155}
                    />
                    <mesh
                        name="Cube016"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube016.geometry}
                        material={materials['Material.032']}
                        position={[0.012, -0.613, 0]}
                        scale={[1.007, 0.999, 0.999]}
                    />
                    <mesh
                        name="Mball001"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mball001.geometry}
                        material={materials['Material.031']}
                        position={[0.005, 2.112, -0.101]}
                        rotation={[Math.PI, -1.425, Math.PI]}
                        scale={0.347}
                    />
                </mesh>
                <mesh
                    name="Cube018"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube018.geometry}
                    material={materials['Material.034']}
                    position={[-1.566, 0.077, 0.167]}
                    rotation={[0, 0.663, 0]}
                    scale={0.04}>
                    <mesh
                        name="Cube017"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube017.geometry}
                        material={materials['Material.030']}
                        position={[0.012, 1.555, 0]}
                        scale={[0.9, 0.999, 0.999]}
                    />
                    <mesh
                        name="Cube019"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube019.geometry}
                        material={materials['Material.030']}
                        position={[1.15, -0.381, 0]}
                        rotation={[0, 0, 0.501]}
                        scale={[0.088, 0.209, 0.209]}
                    />
                    <mesh
                        name="Cube020"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube020.geometry}
                        material={materials['Material.030']}
                        position={[-1.201, -0.381, 0]}
                        rotation={[Math.PI, 0, 0.501]}
                        scale={[-0.088, -0.209, -0.209]}
                    />
                    <mesh
                        name="Cube021"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube021.geometry}
                        material={materials['Material.030']}
                        position={[0.02, 1.555, 0.829]}
                        scale={0.128}
                    />
                    <mesh
                        name="Cube022"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube022.geometry}
                        material={materials['Material.017']}
                        position={[0.414, 1.768, 0.697]}
                        scale={0.155}
                    />
                    <mesh
                        name="Cube023"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube023.geometry}
                        material={materials['Material.017']}
                        position={[-0.33, 1.797, 0.697]}
                        scale={0.155}
                    />
                    <mesh
                        name="Cube024"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube024.geometry}
                        material={materials['Material.032']}
                        position={[0.012, -0.613, 0]}
                        scale={[1.007, 0.999, 0.999]}
                    />
                    <mesh
                        name="Mball002"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mball002.geometry}
                        material={materials['Material.031']}
                        position={[-0.002, 2.105, -0.075]}
                        rotation={[0, 0.621, 0]}
                        scale={0.347}
                    />
                </mesh>
                <mesh
                    name="Plane"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane.geometry}
                    material={materials['Material.037']}
                    position={[-1.079, -0.008, 1.877]}
                    scale={[1.532, 1, 1]}
                />
                <mesh
                    name="Cube026"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube026.geometry}
                    material={nodes.Cube026.material}
                    position={[1.138, 0.05, 1.844]}
                    scale={[0.048, 0.044, 0.084]}
                />
                <mesh
                    name="Cube027"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube027.geometry}
                    material={nodes.Cube027.material}
                    position={[0.546, 0.025, 1.846]}
                    scale={[0.044, 0.044, 0.084]}
                />
                <mesh
                    name="Cube028"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube028.geometry}
                    material={nodes.Cube028.material}
                    position={[1.105, 0.05, 1.076]}
                    scale={[0.048, 0.044, 0.084]}
                />
                <mesh
                    name="Cube029"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube029.geometry}
                    material={nodes.Cube029.material}
                    position={[0.507, 0.027, 1.078]}
                    scale={[0.044, 0.044, 0.084]}
                />
                <mesh
                    name="Cube030"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube030.geometry}
                    material={materials['Material.038']}
                    position={[0.876, -0.004, 3]}
                    rotation={[0, 0.046, 0]}
                    scale={[0.019, 0.002, 0.046]}
                />
                <mesh
                    name="Cube036"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube036.geometry}
                    material={nodes.Cube036.material}
                    position={[0.731, -0.004, 0.408]}
                    rotation={[0, 0.083, 0]}
                    scale={[0.019, 0.002, 0.046]}
                />
                <mesh
                    name="Cube025"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube025.geometry}
                    material={materials['Material.039']}
                    position={[0.67, -0.004, 0.141]}
                    rotation={[0, 0.449, 0]}
                    scale={[0.019, 0.002, 0.046]}
                />
                <mesh
                    name="Cube031"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube031.geometry}
                    material={materials['Material.041']}
                    position={[0.299, -0.004, -0.156]}
                    rotation={[0, 1.413, 0]}
                    scale={[0.019, 0.002, 0.046]}
                />
                <mesh
                    name="Cube032"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube032.geometry}
                    material={materials['Material.040']}
                    position={[0.511, -0.004, -0.058]}
                    rotation={[0, 0.946, 0]}
                    scale={[0.019, 0.002, 0.046]}
                />
                <mesh
                    name="Cube033"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube033.geometry}
                    material={nodes.Cube033.material}
                    position={[-0.446, -0.004, -0.259]}
                    rotation={[0, 1.456, 0]}
                    scale={[0.019, 0.002, 0.046]}
                />
                <mesh
                    name="Cube034"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube034.geometry}
                    material={materials['Material.042']}
                    position={[-0.678, -0.004, -0.306]}
                    rotation={[0, 1.238, 0]}
                    scale={[0.019, 0.002, 0.046]}
                />
                <mesh
                    name="Cube035"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube035.geometry}
                    material={nodes.Cube035.material}
                    position={[-0.926, -0.004, -0.448]}
                    rotation={[0, 0.674, 0]}
                    scale={[0.019, 0.002, 0.046]}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/plane.gltf')
