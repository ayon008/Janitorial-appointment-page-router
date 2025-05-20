;
import React from 'react';
import { motion } from "motion/react"
import { usePathname } from 'next/navigation';

const DownAnimation = ({ animationKey, children, delay = 0 }) => {
    const pathName = usePathname();

    return (
        <motion.div
            key={animationKey ?? pathName}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                delay,
                type: 'spring',
                stiffness: 60,   // less = smoother
                damping: 15,     // higher = less bounce
                mass: 0.5        // tweakable for feel
            }}
            style={{ willChange: 'opacity, transform' }}
        >
            {children}
        </motion.div>
    );
};

export default DownAnimation;
