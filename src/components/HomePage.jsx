import { motion } from "framer-motion"
import logo from "../assets/hangman-logo.svg"
import Button from "./Button"
import { Link } from "react-router-dom"
import button from "../assets/hangman-play.svg"
import { useState } from "react"

export default function HomePage() {
    return(
        <section className="overflow-hidden font-memoirs bg-no-repeat bg-cover bg-bottom lg:bg-desktop-bg bg-mobile-bg   h-auto min-h-[100vh] lg:w-full flex justify-center items-center w-full">
          <div className="w-[40%] mt-[9%] to-[rgba(0, 20, 121, 0.83)]  flex flex-col items-center justify-center  rounded-[3.5rem] bg-gradient-to-b from-[#344aba] shadow-menu-sh lg:h-[390px] h-[400px] relative lg:w-[410px] w-[95%]">
            <img className="absolute lg:top-[-25%] top-[-31%] lg:w-[300px] w-[350px]" src={logo} alt="hangman logo" />
             <div className=" lg:w-[90%] w-full rounded-lg h-[80%] flex flex-col items-center justify-center gap-[15%] ">
              <Link to="/hangman/category/1">
               <Button
                 src={button}
                 width="w-[55px]"
                 padTop="py-8"
                 padBottom="px-8"
                 sPadTop="py-10"
                 sPadBottom="px-10"
                />
              </Link>
                
                <motion.button
                 initial={{ scale:1 }}
                 whileHover={{scale: 1.1}} 
                 transition={{ type:'spring', damping: 8 , stiffness: 200}}
                 className="w-[55%] h-[17%] tracking-wider text-2xl text-white  uppercase rounded-full  bg-[#2463FF] from-[rgba(255,255,255,0.25)] to-[rgba(255,255,255,0.25)] shadow-purple-sh hover:bg-gradient-to-r"
                 >
                    <Link to={"/hangman/manual/1"}
                      className="rounded-full block w-full"
                    >
                      How To Play
                    </Link>
                </motion.button>
             </div>
             
          </div>   
        </section>
    )
}