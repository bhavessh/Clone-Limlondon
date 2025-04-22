import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Link = ({ children, hrif, className }) => {
    const linkRef = useRef(null);
    const x = useMotionValue(0), y = useMotionValue(0);

    const handleMouseMove = ({ clientX, clientY }) => {
        const { left, top, width, height } = linkRef.current.getBoundingClientRect();
        x.set((clientX - left - width / 2) / 10);
        y.set((clientY - top - height / 2) / 10);
    };

    return (
        <motion.a
            href={hrif}
            ref={linkRef}
            className="cursor-pointer text-white-main text-center font-darker font-semibold text-[1.5rem] max-991:text-[5rem] leading-[1.1] mx-6 px-12 py-4"
            style={{ x: useTransform(x, v => v), y: useTransform(y, v => v) }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
        >
            <span className={className}>{children}</span>
        </motion.a>
    );
};

export default Link;
