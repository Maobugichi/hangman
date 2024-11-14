import { Link , useLocation} from "react-router-dom"
import { motion } from "framer-motion"
import Button from "./Button"
import { useState, useEffect , useContext , useRef } from "react"
import { GameContext } from "./GameContext"
import { Slate } from "./MainPage"

export default function Modal({ openModal,content , setModal , setWidth}) {
 const game = useContext(GameContext)
 const modalRef = useRef(null)
 const {isState, setState } = game
 const location = useLocation()
 const {state} = location
 useEffect(() => {
  if ( modalRef.current) {
    openModal ? modalRef.current.showModal() : modalRef.current.close();
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
       setModal(false)
      }
    };
  } 
 }, [openModal,modalRef])
   
   return(
    <dialog className="overflow-hidden fixed  w-screen h-[100vh]  place-items-center  " ref={modalRef}  style={{ backgroundColor: 'rgba(26, 4, 58, 0.7)' }}>
    <motion.div 
     initial={{scale: 1}}
     whileInView={{scale: 1.1}}
     transition={{ type:'spring', damping: 15 , stiffness: 190}} 
     className="lg:w-[30%] w-[80%]  to-[rgba(0, 20, 121, 0.83)] relative  top-[20%]  flex flex-col items-center justify-center  rounded-[3.5rem] bg-gradient-to-b from-[#344aba] shadow-menu-sh h-[420px]  w-[410px]">
             <h1 className="absolute top-[-24%] text-[110px] stroke-[#243041] stroke-[8] leading-[120%] tracking-[-0.068rem] bg-gradient-to-b from-[#67b6ff] to-white bg-clip-text  text-transparent ">{content.paused}</h1>
             <div className="  w-[90%] rounded-lg h-[80%] flex flex-col items-center justify-center gap-[15%] ">
                <motion.button
                 initial={{ scale:1 }}
                 whileHover={{scale: 1.1}} 
                 onClick={() => {
                    setModal(false)
                    setWidth(false)
                    navigate("/mainpage/1")
                 }}
                 transition={{ type:'spring', damping: 8 , stiffness: 200}}
                 className="w-[50%] h-[15%] font-extrabold lg:text-xl text-2xl text-white  uppercase rounded-full  bg-[#2463FF] from-[rgba(255,255,255,0.25)] to-[rgba(255,255,255,0.25)] shadow-purple-sh hover:bg-gradient-to-r"
                >
                   {content.cont}
                </motion.button>
                <motion.button
                 initial={{ scale:1 }}
                 whileHover={{scale: 1.1}} 
                 transition={{ type:'spring', damping: 8 , stiffness: 200}}
                 className="w-[60%] h-[15%] lg:text-xl text-2xl font-extrabold  text-white  uppercase rounded-full  bg-[#2463FF] from-[rgba(255,255,255,0.25)] to-[rgba(255,255,255,0.25)] shadow-purple-sh hover:bg-gradient-to-r"
                >
                    <Link
                     to={"/hangman/category/1"}
                     className="uppercase rounded-full block w-full"
                    >
                      New category
                    </Link>
                </motion.button>

                <motion.button
                 initial={{ scale:1 }}
                 whileHover={{scale: 1.1}} 
                 
                 transition={{ type:'spring', damping: 8 , stiffness: 200}}
                 className="w-[55%] h-[15%] font-extrabold lg:text-xl text-2xl text-white  uppercase rounded-full  bg-gradient-to-b from-[#FE71FE] to-[#7199FF] shadow-pink-sh hover:bg-gradient-to-b hover:from-[rgb(254,113,254,0.85)] hover:to-[rgb(113,153,255,0.70)]"
                >
                    <Link 
                     className="rounded-full block w-full"
                     to={"/hangman"}>
                      Quit game
                    </Link>
                </motion.button>
             </div>
             
          </motion.div>   
 </dialog>
   ) 
}