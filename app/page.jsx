'use client'
import { Environment, OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Env } from "./components/models/Env";
import { Suspense, useEffect, useRef, useState } from "react";
import Loading from "./components/main/Loading";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <Loading />
  } else {


    return (
      <>
        <div className="image cursor-grab w-full h-[100vh] flex flex-col items-center justify-center">
          <Canvas shadows>
            <PerspectiveCamera makeDefault position={[0, 5, 5]} />
            <OrbitControls maxDistance={10} minDistance={1} maxPolarAngle={1.2} />
            <fog attach='fog' color="#FFF7FC" near={2} far={20} />
            <Env />

          </Canvas>
        </div>
      </>
    );
  }
}
