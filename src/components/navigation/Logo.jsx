import logo from '../../assets/logo.json'
import { useRef } from 'react'

import PlayLottie from '../common/PlayLottie'

const Logo = () => {
  const lottieRef = useRef(null)
  const onHover = () => {
    lottieRef.current.stop()
    lottieRef.current.play()
  }
  return (
    <div onMouseEnter={onHover} className='w-[3.5rem]'>
      <PlayLottie autoplay animationData={logo} ref={lottieRef} />
    </div>
  )

}

export default Logo
