'use client'
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "./components/models/Env";

export default function Home() {
  return (
    <>
      <div className="image w-full h-[100vh] flex flex-col items-center justify-center">
        <Canvas>
          <Environment preset="city" />
          <OrbitControls />
          <Model />
        </Canvas>
      </div>
    </>
  );
}
