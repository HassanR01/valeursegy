'use client'
import { Environment, OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Env } from "./components/models/Env";
import { Suspense, useEffect, useRef, useState } from "react";
import Loading from "./components/main/Loading";
import { PointLight, PointLightHelper, SpotLightHelper } from "three";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {

  }, [])


  return (
    <>
      <div className="image cursor-grab w-full h-[100vh] flex flex-col items-center justify-center">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[0, 2, 6]} />
          <OrbitControls maxDistance={6.5} minDistance={1} maxPolarAngle={1.2} />
          
          <Environment preset="sunset"/>


          <hemisphereLight
            skyColor={"#99ccff"}
            groundColor={"#6699ff"}
            intensity={1}
            position={[0, 50, 0]}
          />

          <Env />

        </Canvas>
      </div>
    </>
  );
}
