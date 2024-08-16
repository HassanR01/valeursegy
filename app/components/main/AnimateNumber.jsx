'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const AnimatedNumber = ({ number }) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const roundedValue = useTransform(motionValue, latest => Math.round(latest));

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
                duration: 3,
                ease: "easeOut",
            });
            return controls.stop;
        }
    }, [isInView, number, motionValue]);

    return (
        <motion.span ref={ref} className='font-semibold text-7xl'>
            {roundedValue}
        </motion.span>
    );
};

export default AnimatedNumber;