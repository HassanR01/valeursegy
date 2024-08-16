import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function LogosSlider() {
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

    return (

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="Cont absolute w-full top-0 left-0"
        >
            <div className="partners w-full overflow-hidden relative select-none">
                <Slider {...settings} >
                    {brands.map((brand, ind) => (
                        <div key={ind} className="flex justify-center items-center p-4">
                            <Image src={brand.logo} width={100} height={100} alt={brand.name} className="max-w-24 max-h-24 object-contain opacity-25 hover:opacity-100 duration-300" />
                        </div>
                    ))}
                </Slider>
            </div>
        </motion.div>
    )
}
