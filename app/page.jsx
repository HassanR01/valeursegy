'use client'
import { Environment, OrbitControls, PerspectiveCamera, ScrollControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Env } from "./components/models/Env";
import { Suspense, useRef } from "react";
import * as THREE from "three"
import Loading from "./components/main/Loading";

export default function Home() {

  return (
    <>
      <div className="image cursor-grab w-full h-[100vh] flex flex-col items-center justify-center">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[0, 2, 6]} />
          <OrbitControls maxDistance={6.5} minDistance={1} maxPolarAngle={1.2} />
          <directionalLight args={["#ffffff", 2]} position={[0, 5, 0]} shadow={5} />
          <ambientLight intensity={1} />
          
          <Suspense fallback={<Loading />} >
            <Env />
          </Suspense>

        </Canvas>
      </div>
    </>
  );
}
