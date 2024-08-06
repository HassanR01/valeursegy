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
          <PerspectiveCamera makeDefault position={[0, 5, 5]} />
          <OrbitControls maxDistance={10} minDistance={1} maxPolarAngle={1.2} />
          <fog attach='fog' color="#1d1a73" near={2} far={20} />
          <Env />

        </Canvas>
      </div>
    </>
  );
}
