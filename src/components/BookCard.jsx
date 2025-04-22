import { useRef, useState } from "react"
import PlayLottie from "./common/PlayLottie"
import { motion } from 'framer-motion'
import Button from "./common/Button"


const BookCard = ({ data }) => {
    const { id, animationData, available, scale, style, date, year, price, plan } = data

    const lottieRef = useRef(null)
    const [isHovered, setIsHovered] = useState(false)


    function handleMouseEnter() {
        setIsHovered(true)
    }

    function handleMouseLeave() {
        setIsHovered(false)
    }

    return (
        <motion.div
            whileHover={{
                scale: .95,
            }}
            animate={{
                scale: 1,
            }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className="bg-brand-color rounded-[4.375rem] flex flex-col justify-between items-start h-[32rem] relative overflow-hidden min-w-[34.18px] p-12 w-full">
            <div className="z-10 text-white-main flex flex-col justify-between h-full w-full">
                <div className={`${!available ? 'block' : 'invisible'} bg-white-main  flex items-center justify-center py-[.3rem]  px-4 rounded-xl w-fit `}>
                    <span className="bg-brand-color rounded-full size-4 mr-5"></span>
                    <span className="text-black-main-2 font-medium text-[1.25rem] mr-4">Soon Available</span>
                </div>
                <div className="">
                    <div className="">From</div>
                    <div className="text-[4rem] font-semibold leading-[.71] font-darker">{date} <br /> {year}</div>
                </div>
                <div className="text-[1.15rem]">
                    Single payment <span className="font-bold">{price} </span ><br />Payment Plan (X3) <span className="font-bold">{plan}</span>
                </div>
                <div className={`text-center ${!available ? 'invisible' : 'block'}`}>
                    <Button className={'tracking-normal'}>Enrol Now</Button>
                </div>
            </div>
            <motion.div
                whileHover={{ scale, }}
                animate={{ scale: 1, }}
                transition={{ duration: 0.5, ease: "easeInOut", }}
                className={"absolute top-0 -left-[25%] w-[150%] h-full z-0 " + style}>
                <PlayLottie height='100%' animationData={animationData} direction={isHovered ? 1 : -1} ref={lottieRef} />
            </motion.div>
        </motion.div>
    )
}

export default BookCard