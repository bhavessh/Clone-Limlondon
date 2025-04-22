import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxText({ children, reverse, speed = 300 }) {
    const containerRef = useRef()
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'], })
    speed = speed * (reverse ? -1 : 1)
    const translateX = useTransform(scrollYProgress, [0, 1], [-speed, speed])

    return (
        <div ref={containerRef} className="flex items-start whitespace-nowrap justify-center">
            <motion.div style={{ x: translateX }} className={`font-darker text-white-main w-[1050vw] font-semibold tracking-[-2px] leading-[.8] relative text-[10rem] max-767:text-[3.25rem] whitespace-pre`}            >
                {children}
            </motion.div>
        </div>
    )
}