'use client'
import { Html, OrbitControls, PerspectiveCamera, useProgress } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Env } from "./components/models/Env";
import { Suspense, useEffect, useRef, useState } from "react";
import Loading from "./components/main/Loading";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from "framer-motion";
import Header from "./components/main/Header";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <Loading />
  } else {

    function Loader() {
      const { progress } = useProgress()
      return (
        <>
          <Html
            style={{
              backgroundColor: 'black',
              color: 'white',
              fontSize: '1.5rem',
              padding: '1rem',
              borderRadius: '10px',
              width: '300px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'
            }} center>
            {Math.trunc(progress)}% loaded
          </Html>
          <Html
            style={{
              backgroundColor: 'black',
              color: 'white',
              fontSize: '1.5rem',
              borderRadius: '10px',
              width: `${(progress / 100) * 300}px`,
              height: '5px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              marginTop: '60px',
              transitionDuration: '0.5s'
            }}
            center
          >

          </Html>
        </>
      )
    }

    return (
      <>
        <Header translate={'/ar'} />
        <motion.div id="plane" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="image cursor-grab w-full h-[100vh] z-0 flex flex-col items-center justify-center">
          <Canvas shadows style={{ zIndex: 0, position: "relative", width: '100%', height: '100vh' }}>
            <Suspense fallback={<Loader />}>
              <PerspectiveCamera makeDefault position={[2, 2, 7]} />
              <OrbitControls maxDistance={15} minDistance={5} maxPolarAngle={1.2} />
              <fog attach='fog' color="#ffffff" near={2} far={20} />
              <Env lang={'en'} />
            </Suspense>
          </Canvas>
        </motion.div>
      </>
    );
  }
}
