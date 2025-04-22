import menu from '../../assets/menu.json'
import { useRef } from 'react'
import { useState } from 'react'
import Link from './Link'
import { motion, AnimatePresence } from 'framer-motion'
import PlayLottie from '../common/PlayLottie'

const SidebarMenu = () => {
    const lottieRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div onClick={() => setIsOpen(!isOpen)} className='p-3 z-50 relative'>
                <PlayLottie animationData={menu} speed={3} width='2rem' height='2rem' direction={isOpen ? 1 : -1} ref={lottieRef} />
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className='fixed top-0 left-0 w-full h-full bg-black-main-2 py-2 z-40'
                    >
                        <div className='flex flex-col items-center justify-center h-full'>
                            <Link>Home</Link>
                            <Link className='text-brand-color'>Course</Link>
                            <Link>About</Link>
                            <Link>Blog</Link>
                            <Link>Blog</Link>
                            <Link>Contact</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default SidebarMenu