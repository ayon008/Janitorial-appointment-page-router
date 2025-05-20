import React from 'react';
import { motion } from "motion/react"

const FadeIn = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }} // slight vertical motion makes it feel more natural
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94], // easeOutCubic
            }}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
