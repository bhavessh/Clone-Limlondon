import React from "react"
import Lottie from "react-lottie"

export default React.forwardRef(({ animationData, loop = false, autoplay = false, ...opts }, ref) => <Lottie options={{ loop, animationData, autoplay }} {...opts} ref={ref} />)
