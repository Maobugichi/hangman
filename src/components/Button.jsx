import { motion } from "framer-motion"


export default function Button({ src , width , padTop , padBottom , height , sWidth, sPadBottom, sPadTop, sHeight}) {
    return(
      <motion.button 
       initial={{ scale:1 }}
       whileHover={{scale: 1.1}} 
       transition={{ type:'spring', damping: 8 , stiffness: 200}}
       className={`bg-gradient-to-b from-[#FE71FE] to-[#7199FF] shadow-pink-sh hover:bg-gradient-to-b hover:from-[rgb(254,113,254,0.85)] hover:to-[rgb(113,153,255,0.70)] lg:${padTop} ${sPadTop}  lg:${padBottom} ${sPadBottom} lg:${height} ${sHeight}  rounded-full`}>
        <img className={`lg:${width} ${sWidth}`} src={src} alt="play button" />
      </motion.button>
    )
}