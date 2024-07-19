'use client'
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Env } from "./components/models/Env";
import { Suspense, useRef } from "react";
import * as THREE from "three"

export default function Home() {

  return (
    <>
      <div className="image w-full h-[100vh] flex flex-col items-center justify-center">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[0, 2.5, 2.5]} />
          <OrbitControls maxDistance={3.5} minDistance={0.8} maxPolarAngle={0.8} />

          <directionalLight args={["#ffffff", 2]} position={[0, 2.5,2.5]} shadow={1} />
          
          <Environment preset="apartment" />
          <Env />

        </Canvas>
      </div>
    </>
  );
}
