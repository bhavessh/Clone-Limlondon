import { useRef } from "react"
import { motion } from 'framer-motion'

import footer from "../assets/footer.json"
import PlayLottie from "./common/PlayLottie"

const Footer = () => {
    const lottieRef = useRef(null)

    function handleScroll() {
        lottieRef.current.stop()
        lottieRef.current.play()
    }

    return <footer className=" bg-brand-color">
        <div className="w-full max-w-[90rem] mx-auto pt-[13.75rem] pb-20 max-991:pb-12 max-479:pt-[3.1rem] max-479:pb-16 text-black-main overflow-hidden">
            <motion.div onViewportEnter={handleScroll} className="w-[130%]">
                <PlayLottie height='100%' animationData={footer} ref={lottieRef} />
            </motion.div>
            <div className="flex flex-col gap-12 mt-16 tracking-[-1px] font-medium text-[1.2rem]">
                <div className="">
                    Got a questions?
                    <a href="" className="ms-4 text-white-main underline">Contact Us</a>
                </div>

                <div className="flex max-991:flex-col max-991:items-start items-center justify-between gap-14">
                    <div className="flex max-991:flex-col tracking-normal order-2">
                        <h1 className="hidden max-991:block">Company</h1>
                        <div className="flex max-991:flex-col decoration underline font-normal gap-2 text-[1rem] mt-4 leading-[1.2] font-dm">
                            <a href="">Terms & Conditions</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Legal</a>
                        </div>
                    </div>
                    <div className="-order-1">
                        <h1 className="hidden max-991:block" >Social</h1>
                        <div className="flex gap-6 mt-4 items-center">
                            <a href="">
                                <img src="https://cdn.prod.website-files.com/636e0fdd5df0e013bbf00f38/636e0fdd5df0e07097f00fb5_instagram.svg" alt="" />
                            </a>
                            <a href="">
                                <img src="https://cdn.prod.website-files.com/636e0fdd5df0e013bbf00f38/636e0fdd5df0e0b690f00fb8_tiktok.svg" alt="" />
                            </a>
                            <a href="">
                                <img src="https://cdn.prod.website-files.com/636e0fdd5df0e013bbf00f38/636e0fdd5df0e06e4df00fb4_youtube.svg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="flex order-2 max-991:gap-20 gap-6 text-[1rem] font-medium items-center">
                        <a className="flex gap-2">Design<img className="w-[5.5rem]" src="https://cdn.prod.website-files.com/636e0fdd5df0e013bbf00f38/636e0fdd5df0e0d424f00f6f_sentempo.svg" alt="" /></a>
                        <a className="flex gap-2">Dev<img className="w-[6.5rem]" src="https://cdn.prod.website-files.com/636e0fdd5df0e013bbf00f38/636e0fdd5df0e03937f00f71_saisei_media.svg" alt="" /></a>
                    </div>
                    <div className="">© 2023 Lim</div>
                </div>
            </div>
        </div>
    </footer>

}

export default Footer