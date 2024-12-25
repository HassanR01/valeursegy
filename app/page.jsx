'use client'
import { Environment, OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Env } from "./components/models/Env";
import { Suspense, useEffect, useRef, useState } from "react";
import Loading from "./components/main/Loading";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bgHome from '../public/bgHome.jpg'
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedNumber from "./components/main/AnimateNumber";
import Header from "./components/main/Header";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const sections = ['#home', '#plane']

  useEffect(() => {
    setIsLoading(false)
  }, [])
 
  if (isLoading) {
    return <Loading />
  } else {


    return (
      <>
        <Header translate={'/ar'} />
        <motion.div id="plane" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}  className="image cursor-grab w-full h-[100vh] z-0 flex flex-col items-center justify-center">
          <Canvas shadows style={{zIndex: 0, position: "relative"}}>
            <PerspectiveCamera makeDefault position={[2, 2, 7]} />
            <OrbitControls maxDistance={15} minDistance={5} maxPolarAngle={1.2} />
            <fog attach='fog' color="#ffffff" near={2} far={20} />
            <Env lang={'en'} />
          </Canvas>
        </motion.div>
      </>
    );
  }
}
