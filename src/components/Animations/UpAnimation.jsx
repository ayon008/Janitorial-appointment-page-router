import React from 'react';
import { motion } from "motion/react";

const UpAnimation = ({ animationKey, children, delay = 0 }) => {
    return (
        <motion.div
            key={animationKey}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            style={{ willChange: 'opacity, transform', transform: 'translateZ(0)' }}
        >
            {children}
        </motion.div>
    );
};

export default UpAnimation;
