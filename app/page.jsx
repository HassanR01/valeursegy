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

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const sections = ['#home', '#plane'];
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        // Scroll down
        if (currentSectionIndex < sections.length - 1) {
          setCurrentSectionIndex(currentSectionIndex + 1);
        }
      }

      document.querySelector(sections[currentSectionIndex]).scrollIntoView({
        behavior: 'smooth',
      });
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentSectionIndex]);

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <Loading />
  } else {


    return (
      <>
        {/* <section id="home" className="home min-h-screen w-full flex items-center justify-center flex-col" style={{
          backgroundImage: `url(${bgHome.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="logo mt-16 flex items-center justify-center p-2 z-[5]">
            <Image src={'/logo.png'} width={500} height={300} alt="Valeurs Logo" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="my-10 text-center px-4 text-4xl lg:text-6xl font-black z-[5] text-whiteColor">Smart Solutions for <span className="text-priColor">Lifelong</span> Wellness.</motion.h1>

          <div className="my-10 flex flex-wrap items-center justify-around w-full p-4 z-[5]">
            <motion.div initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.7, delay: 0.5}} className="part flex flex-col items-center justify-center m-4">
              <h2 className="text-5xl text-black font-black">+<AnimatedNumber number={15} /></h2>
              <h3 className="text-2xl font-black">Partnerships</h3>
            </motion.div>
            <motion.div initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.7, delay: 0.7}} className="part flex flex-col items-center justify-center m-4">
              <h2 className="text-5xl text-black font-black">+<AnimatedNumber number={20000} /></h2>
              <h3 className="text-2xl font-black">Patients</h3>
            </motion.div>
            <motion.div initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.7, delay: 0.9}} className="part flex flex-col items-center justify-center m-4">
              <h2 className="text-5xl text-black font-black">+<AnimatedNumber number={60} /></h2>
              <h3 className="text-2xl font-black">Social Activity</h3>
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-white bg-opacity-70 filter blur-sm"></div>
          <div className="ground-trans absolute -bottom-1 left-0 w-full h-[150px]"></div>
        </section> */}
        {/* Plane */}
        <motion.div id="plane" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}  className="image cursor-grab w-full h-[100vh] z-0 flex flex-col items-center justify-center">
          <Canvas shadows style={{zIndex: 0, position: "relative"}}>
            <PerspectiveCamera makeDefault position={[2, 2, 7]} />
            <OrbitControls maxDistance={15} minDistance={5} maxPolarAngle={1.2} />
            <fog attach='fog' color="#FFF7FC" near={2} far={25} />
            <Env />
          </Canvas>
        </motion.div>
      </>
    );
  }
}
