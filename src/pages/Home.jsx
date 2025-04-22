import PlayLottie from "../components/common/PlayLottie"
import live from "../assets/live.json"
import Button from "../components/common/Button"
import Card from "../components/Card"

import course1 from "../assets/course1.json"
import course2 from "../assets/course2.json"
import course3 from "../assets/course3.json"


import compose from "../assets/compose.json"
import production from "../assets/production.json"
import mixing from "../assets/mixing.json"
import practice from "../assets/practice.json"
import ParallaxText from "../components/ParallaxText"
import BioCard from "../components/BioCard"
import BookCard from "../components/BookCard"

import { motion } from 'framer-motion'
import { useState } from "react"
import Footer from "../components/Footer"



const Modules = [
    {
        id: 1,
        title: 'Music \nComposition',
        info: '12 lessons • 35h 20min',
        parts: ['Intro to Music Composition', 'Rhythm & Beats', 'Harmony & Melody', 'Structure & Arrangement'],
        animationData: compose
    },
    {
        id: 2,
        title: 'Music \nProduction',
        info: '12 lessons • 35h 40min',
        parts: ['Intro to Ableton Live', 'Drums', 'Synthesis & Sampling', 'Music Business'],
        style: 'top-20',
        animationData: production
    },
    {
        id: 3,
        title: 'Mixing',
        info: '12 lessons • 35h 50min',
        parts: ['Intro to Mixing', 'EQ & Dynamics', 'Space & Depth', 'Creative FX & Automation'],
        animationData: mixing
    },
]

const textData = [
    { text: "Music Production   Recording & Comping   Audio Editing & Warping   Chord Progressions", coloredIndex: 0, reverse: false },
    { text: "Creative Audio   Rhythm & Beats   Scales & Chords   Principles of Sound Design & Synthesis", coloredIndex: 3, reverse: true },
    { text: "Melodies & Hooks   Sampling & Resampling   Mixing Environment & Critical Listening", coloredIndex: 0, reverse: false },
    { text: "EQ & Compression   Space & Depth   Time Based & Modulation Effects", coloredIndex: 0, reverse: true },
    { text: "Returns and Inserts   Arrangement & Automation   Workflow of Industry Professionals", coloredIndex: 1, reverse: false },
    { text: "Mixing Vocals   Production Analysis & Track Breakdowns   Copyright & Intellectual Property", coloredIndex: 0, reverse: true },
    { text: "Creative FX   Record & Publishing Deals   Music Business   Identity & Branding", coloredIndex: 2, reverse: false },
    { text: "Positioning & Marketing   Guest Lectures & Interviews   Level Balance & Stereo Imaging", coloredIndex: 1, reverse: true }
]

const courses = [
    {
        id: 1,
        animationData: course1,
        date: '16 Jan',
        year: '2024',
        price: '£3.990',
        plan: '£1.490',
        available: true,
        scale: 1.2
    },
    {
        id: 2,
        animationData: course2,
        date: '7 May',
        year: '2024',
        price: '£3.990',
        plan: '£1.490',
        available: true,
        scale: 1,
        style: '-left-[27%]'

    },
    {
        id: 3,
        animationData: course3,
        date: '10 Sept',
        year: '2024',
        price: '£3.990',
        plan: '£1.490',
        available: false,
        style: '-top-[7%]',
        scale: 1.2
    },
]

function Home() {
    const [isHovered, setIsHovered] = useState(false)
    return <>
        <section className="px-global pt-48 pb-48 max-991:pt-[8.5rem] max-479:pt-[6.5rem] max-991:pb-24 max-767:pb-16 flex justify-center flex-row">
            <div className="max-w-[90rem] flex items-center justify-center">
                <div className="w-[80%] max-991:w-full max-991:py-32  max-479:py-0  mt-[.21rem]">
                    <PlayLottie height='100%' autoplay loop animationData={live} />
                </div>
            </div>
        </section>
        <section className="px-global pb-[22rem] max-479:pb-[12rem]">
            <div className="flex flex-col items-center justify-center text-center font-darker leading-[.76] tracking-[-3px] max-991:tracking-[-1px] font-semibold text-[5.5rem] max-991:text-[3rem] ">
                <div className="max-767:hidden items-center text-center wrap mb-16">
                    <div className="flex justify-center">
                        <span>You just need a midi </span>
                        <img className="w-24 max-767:w-10 max-991:w-16 object-contain object-bottom mx-4" src="https://cdn.prod.website-files.com/636e0fdd5df0e013bbf00f38/636e0fdd5df0e04095f00f82_midi-keyboard.webp" alt="" />
                        <span>keyboard*,</span>
                    </div>
                    <div className="pl-32">
                        <div>
                            <span className="text-brand-color">Ableton Live 11</span>
                            <span> and a </span>
                            <span className="text-brand-color">passion </span>
                            <span>for</span>
                        </div>
                        <span>music and learning.</span>
                    </div>
                </div>

                <div className=" hidden max-767:block items-center text-center wrap font-darker leading-[1.7rem] tracking-[0] max-479:tracking-[-2px] font-semibold max-767:text-[2rem] max-479:text-[3rem] max-479:leading-[1]  mb-16">
                    <span>You just need a</span>
                    <div className="flex justify-center">
                        <span> midi</span>
                        <img className="w-24 max-767:w-10 max-991:w-16 object-contain object-bottom mx-2" src="https://cdn.prod.website-files.com/636e0fdd5df0e013bbf00f38/636e0fdd5df0e04095f00f82_midi-keyboard.webp" alt="" />
                        <span>keyboard*</span>
                    </div>
                    <div>
                        <span className="text-brand-color"> Ableton Live 11 </span>
                        <span> and a </span>
                    </div>
                    <span className="text-brand-color">passion </span>
                    <span>for music and learning.</span>
                </div>
                <Button className={'tracking-normal'} dark >About us</Button>
            </div>
        </section>
        <section className="flex bg-black-main-2 px-global py-48 max-991:py-24 max-767:py-16 items-center justify-center flux flex-col text-white-main font-darker leading-[.76]">
            <h2 className="items-center text-center justify-center tracking-[-3.5px]  max-991:tracking-[-2px] text-[5.5rem] max-767:text-[4rem] font-semibold  mb-16">
                A  <span className="text-brand-color">three-module</span><br />course
            </h2>
            <p className="items-center text-center justify-center max-w-md mb-16 mx-auto text-[1.75rem] font-semibold tracking-[-1px] ">
                This course is ideal for someone who is a beginner or is approaching music production for the first time.
            </p>

            <Button className='rounded-2xl'>Book your call</Button>

            <div className="max-w-[70rem] mx-auto mt-32">
                {Modules.map((data, i) => {
                    return <Card key={i} data={data} />
                })}
            </div>

            <Button className='rounded-2xl'>Download full program</Button>


        </section>
        <section className="bg-brand-color">
            <div className="px-global max-w-[90rem] mx-auto">
                <h1 className="pt-48 max-767:py-[4.5rem] pb-24 text-white-main text-[5.5rem] max-767:text-[4rem] text-center font-semibold tracking-[-3.5px] font-darker leading-[.76] flex flex-col">
                    <div >We cover <span className="text-black-main-2">all areas</span>of</div>
                    <span>music production</span>
                </h1>
            </div>
            <div className="overflow-hidden">
                {textData.map(({ reverse, text, coloredIndex }, index) => {
                    const parts = text.split('   ')
                    return (
                        <ParallaxText key={index} reverse={reverse}>
                            {parts.map((part, i) => <span key={i} className={i === coloredIndex ? "text-black-main-2" : ""}> {part}{i < parts.length - 1 && '   '}</span>)}
                        </ParallaxText>
                    )
                })}
            </div>
            <div className="px-global mx-auto w-full items-center justify-center flex ">
                <BioCard />
            </div>



        </section>
        <section className="px-global max-w-[90rem] mx-auto w-full py-40 leading-[1.2] tracking-[-1px] flex flex-col items-center justify-center">
            <h1 className="mb-32 text-center font-bold text-[1.5rem]">What you <span className="text-brand-color">won't</span> get out of this course:</h1>
            <div className="max-w-[90rem] flex items-center justify-center mb-8">
                <div className="w-[100%] max-991:w-full mt-[.21rem]">
                    <PlayLottie height='100%' autoplay loop animationData={practice} />
                </div>
            </div>
            <div className="max-w-[34rem]">
                <p className="text-center font-medium leading-[1.2] tracking-[-1px] ">You will however have the skills, practices and mindsets of industry professionals, which gives you the opportunity to become one of them and continue your journey on your own.</p>
            </div>
        </section>
        <section className="flex items-center justify-center flex-col bg-black-main-2 px-global pt-[14.3rem] pb-[13.7rem] max-991:py-24 max-767:py-16 max-479:pb-[6.25rem] max-479:pt-20">
            <h1 className="text-white-main text-center tracking-[-3.5px] font-darker text-[5.5rem] font-semibold leading-[.76] mb-48">Book your musical <br /> journey <span className="text-brand-color" >now</span></h1>
            <div className="flex max-991:flex-col items-center justify-around w-full gap-12 max-w-[90rem] mb-28">
                {courses.map((data, i) => <BookCard key={i} data={data} />)}
            </div>
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex flex-col relative">
                <h1 className="text-white-main text-[2rem] font-bold font-darker leading-[1.3]">What is included in the costs?</h1>
                <motion.div
                    animate={{ width: isHovered ? "100%" : "0%" }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute bottom-0 border-b-[1.75px]"
                ></motion.div>
            </div>
        </section>
        <Footer />

    </>
}

export default Home
