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


  // Slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  const brands = [
    { name: 'Rockai Dev', logo: "/1.png" },
    { name: 'Brand 2', logo: '/1.png' },
    { name: 'Brand 3', logo: '/1.png' },
    { name: 'Brand 3', logo: '/1.png' },
    { name: 'Brand 3', logo: '/1.png' },
    { name: 'Brand 3', logo: '/1.png' },
    { name: 'Brand 3', logo: '/1.png' },
    { name: 'Brand 3', logo: '/1.png' },
  ];

  if (isLoading) {
    return <Loading />
  } else {


    return (
      <>
        <div className="image cursor-grab w-full h-[100vh] flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{duration: 1 , delay: 2}}
            className="Cont absolute w-full top-0 left-0"
          >
            <div className="partners w-full overflow-hidden relative my-8 select-none">
              <Slider {...settings} >
                {brands.map((brand, ind) => (
                  <div key={ind} className="flex justify-center items-center p-4">
                    <Image src={brand.logo} width={100} height={100} alt={brand.name} className="max-w-24 max-h-24 object-contain opacity-50 hover:opacity-100 duration-300" />
                  </div>
                ))}
              </Slider>
            </div>
          </motion.div>

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
}
