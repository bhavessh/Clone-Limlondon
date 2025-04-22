import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Button from './common/Button'

function BioCard() {

    const containerRef = useRef()
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
    const y = useTransform(scrollYProgress, [0, 1], [0, -500])

    return (
        <div ref={containerRef} className="flex items-start justify-center">
            <motion.div style={{ y }} className='bg-dylan-card rounded-[4.375rem] max-767:rounded-[.875rem] max-991:rounded-[5.5rem] p-16 max-479:p-4 max-767:p-10 max-991:p-12 flex max-w-[80rem] max-991:max-w-[90vw] relative'>
                <div className="w-full flex flex-col items-start">
                    <h1 className='text-[5.5rem] max-479:text-[2.15rem] max-767:text-[3rem] max-767:tracking-[-1px]  max-991:text-[5.5rem] tracking-[-3.5px] leading-[.76] font-bold font-darker mb-16 max-991:mb-32 max-479:mb-24 max-767:mb-48'>
                        Hello,<br />I'm Dylan
                    </h1>
                    <p className='max-w-[30rem] max-991:max-w-none  tracking-[-1px] text-[1.25rem] max-479:text-[1.125rem]  leading-[1.2] w-full mb-16 max-991:mb-10 max-767:mb-6'>
                        Hi, I'm Dylan, the programme director at LIM.
                        <br /><br />
                        <span className='hidden max-991:block'>
                            I completed my studies in Music Business Management at the University of Westminster and later specialised in Music Production & Sound Engineering at Abbey Road Institute in London. I created LIM to share my experience and synthesised it into an intensive 3-months-course to kickstart your music career. Let's save you the struggle of navigating your career blindly.
                        </span>
                        <span className='max-991:hidden'>
                            I completed my studies in Music Business Management at the University of Westminster and later specialised in Music Production & Sound Engineering at Abbey Road Institute in London. I've also been active in the music industry for more than 10 years, be that as a producer, performer or music journalist.
                            <br /><br />
                            I created LIM to share my experience and synthesised it into an intensive 3-months-course to kickstart your music career. The target is to guide you through the essential skills of an industry professional and answer any question that a beginner might have. Let's save you the struggle of navigating your career blindly - by delivering a clear and structured way of learning.
                        </span>
                    </p>
                    <Button className='rounded-2xl'>About</Button>
                </div>
                <img className=' rounded-[3rem] object-cover object-left-top max-767:rounded-[2rem] w-1/2 max-991:w-60 max-991:h-60 max-767:w-56 max-767:h-56 max-479:w-[7.75rem] max-479:h-[7.75rem] max-991:absolute right-16 max-479:right-4 max-767:right-10' src="https://cdn.prod.website-files.com/636e0fdd5df0e013bbf00f38/636e0fdd5df0e01dcdf00f83_dylan_image.webp" alt="" />
            </motion.div>
        </div>

    )
}

export default BioCard