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
      <div className="image w-full h-[100vh] flex flex-col items-center justify-center">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[-2, 3, 3]} />
          <OrbitControls maxDistance={3.5} minDistance={0.8} maxPolarAngle={1.2} />
          <directionalLight args={["#ffffff", 2]} position={[0, 5, 0]} shadow={5} />
          <ambientLight />
          
          <Suspense fallback={<Loading />} >
            <Env />
          </Suspense>

        </Canvas>
      </div>
    </>
  );
}
