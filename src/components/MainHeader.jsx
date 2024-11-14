import Button from "./Button"
import menu from "../assets/hangman-menu.svg"
import life from "../assets/hangman-heart.svg"
import { useState, useEffect , useContext } from "react"
import { GameContext } from "./GameContext"
import { useLocation } from "react-router-dom"

export default function MainHeader({text, length, setModal }) {
  const game = useContext(GameContext)
  const location = useLocation()
   const {isState, setState , openModal} = game
 
   const [isLength,setLength] = useState()

    useEffect(() => {
     
       setLength(Math.floor(length))
    }, [length,isState])
    return(
        <header className="flex justify-between w-[85%] mx-auto h-[100px] items-center">
          <div onClick={() => {
             setModal( !isState.openModal)
          }} className="flex items-center lg:gap-5 gap-2">
            <Button
            src={menu}
            width="w-[30px]"
            sWidth="w-[25px]"
            height="h-[50px]"
            sHeight="h-[45px]"
            padTop="py-3"
            padBottom="px-3"
            sPadTop="py-2"
            sPadBottom="px-2"
            />
            <h3 className="text-white text-[30px] lg:text-[65px]">{ text.slice(0,1) + text.slice(1,text.length).toLowerCase()}</h3>
          </div>
          
          <div className="flex items-center gap-3">
            <progress
             max="8"
             value={length}
             className="h-3 lg:w-[100px] w-[80px] transition-all duration-500 ease-in-out mobile:w-[6rem] [&::-moz-progress-bar]:bg-white [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-bar]:p-[2px_6px] mobile:[&::-webkit-progress-bar]:p-[2px_3px] [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-[#261676]"
            />
            <img className="w-[35px]" src={life} alt="heart icon" />
          </div>
        </header>
    )
}