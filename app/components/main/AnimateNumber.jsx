'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const AnimatedNumber = ({ number }) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);
    const motionValue = useMotionValue(0);

    // Format the number with dots
    const formattedValue = useTransform(motionValue, (latest) =>
        new Intl.NumberFormat('en-US').format(Math.round(latest))
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                } else {
                    setIsInView(false);
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    useEffect(() => {
        if (isInView) {
            const controls = animate(motionValue, number, {
                duration: 2,
                ease: "easeOut",
            });
            return controls.stop;
        }
    }, [isInView, number, motionValue]);

    return (
        <motion.div ref={ref} className='font-semibold mx-1 text-mainColor text-6xl'>
            {formattedValue}
        </motion.div>
    );
};

export default AnimatedNumber;