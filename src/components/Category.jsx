import Header from "./Header"
import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"
import { useState  , useContext, useEffect} from "react"
import mainData from "../../data.json"
import { GameContext } from "./GameContext"

export default function Category() {
    const game = useContext(GameContext)
    const {isState, setState , openModal} = game
    const categories = ["movies", "tv shows", "countries", "capital cities", "animals", "sports"]
    const categoryBlock = categories.map(category => {
        return(
              <Block
              text={category}/> 
          )
     })

    return(
        <section className="font-memoirs overflow-hidden  bg-opacity-75 bg-gradient-to-b from-[#1a043a] to-[#151278] h-auto lg:min-h-[115vh] min-h-[100vh] flex flex-col gap-10 w-full">
         <Header
          text="Pick a Category"
         />
         <div className="lg:w-[85%]  w-full mx-auto h-auto min-h-[320px]  flex lg:flex-row flex-col flex-wrap justify-between gap-5">
             {categoryBlock}
         </div>
        </section>
    )
}


function Block({text}) {
 const game = useContext(GameContext)
 const {isState, setState , openModal} = game
 const [isTarget, setIsTarget] = useState()
 const navigate = useNavigate()

    useEffect(() => {
      localStorage.setItem("state", JSON.stringify(isState))
     },[isState])

    function handleClick(e) {
     const targetItems = []
      Object.keys(mainData.categories).forEach(category => {
         targetItems.push(mainData.categories)
        })
        setState({category: e.target.innerText, targets: targetItems})
        setTimeout(() => {
            const stored = JSON.parse(localStorage.getItem('state'))
            console.log(stored)
            navigate("/hangman/mainpage/1", { state: stored  })
          }, 0) 
    }

    
    return(
        <motion.button 
         initial={{y:0}}
         whileHover={{y:-12}}
         onClick={handleClick}
         transition={{type:"spring", damping: 8 , stiffness: 200}}
         className="bg-[#2463FF] from-[rgba(255,255,255,0.25)] to-[rgba(255,255,255,0.25)] shadow-purple-sh hover:bg-gradient-to-r lg:w-[32%] w-[95%] rounded-full mx-auto h-[80px] lg:h-[130px] lg:rounded-[30px] grid place-items-center text-white text-3xl lg:text-[37px] tracking-wider uppercase">
            
             {text}
        </motion.button>
    )
}