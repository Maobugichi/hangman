import MainHeader from "./MainHeader"
import { useLocation } from "react-router-dom"
import { useLayoutEffect , useState , useRef, useCallback, useEffect , useContext} from "react"
import {motion} from "framer-motion"
import { GameContext } from "./GameContext"
import Modal from "./Dialog"

export default function MainPage() {
    const divRef = useRef(null)
    const location = useLocation()
    const [track, setTrack] = useState()
    const [length,setLength] = useState(8)
    const [width,setWidth] = useState(false)
    const [isList, setIsList] = useState(divRef.current)
    const [activeIndex, setActiveIndex] = useState(null)
    const [content,setContent] = useState({paused:"", cont:""})
    const [openModal, setModal] = useState(false)
    const [chk,setChk] = useState(null)
    //const [category, setCategory] = useState()
    const [redirect,setRedirect] = useState(null)
    const [run,setRun] = useState(true)
    const motionRef = useRef(null)
    const [hang,setHang] = useState()
    const {state} = location
    const game = useContext(GameContext)
     
    useEffect(() => {
     if (run) {
        const uj =  state.targets.flatMap(item => {   
        const obj = Object.keys(item).filter(key => {       
         return  key == state.category.slice(0,1) + state.category.slice(1,state.category.length).toLowerCase()
        })
         return item[obj]
        }) 
       const randomNumber = Math.round(Math.random() * uj.length)
       const strArr =  uj[randomNumber].name.split("")
       const mainTexts = strArr.filter(arr => arr.trim() !== '')
       const hangTexts = mainTexts.map((item,index) => {
                return(
                    (
                        <Slate
                         text={item}
                         id={index}
                        />
                    )
                )
        })
       setHang(hangTexts)
      }     
    }, [state,width])


    useEffect(() => {
     setTrack(hang)
     setTimeout(() => {
      if (content.paused == "You Win" || content.paused == "You Lose") {
        setRun(true)
         divRef.current.querySelectorAll("span").forEach(item => {
         item.classList.add("hidden")
         })
         setLength(8)
         motionRef.current.querySelectorAll("button").forEach(item => {
          item.removeAttribute("disabled")
         })
        }
      },1000)
    }, [content,hang])

    useLayoutEffect(() => {
        if (divRef.current) {
           setIsList(divRef.current)
        }   
        let list = []
        divRef.current.querySelectorAll("span").forEach(item => {
            if (item.classList.contains("hidden")) {
                list.push(item)
            }
          })
         !width || list.length !== 0 ? setContent({paused: "Paused", cont:"Continue"}) : setContent({paused:"You Win", cont:"Play again"})
         if (length == 1 && width) {
            divRef.current.querySelectorAll("span").forEach(item => {
                item.classList.remove("hidden")
                item.classList.add("grid")
              })
             setTimeout(() => {
                setModal(true)
                setContent({paused:"You Lose", cont:"Play again"})
             }, 1000)
         } else if (width && list.length == 0 && length > 1 ) {
            setTimeout(() => {
                setModal(true)
                setContent({paused:"You Win", cont:"Play again"})
            },1000)
           
         }
     }, [activeIndex,width])

    
    const  alphabeth = Array.from({length:26}, (_,i) => String.fromCharCode(65 + i))
    const checkValue = useCallback((e) => {
        e.target.setAttribute("disabled",true)
         setWidth(true)
         setRun(false)
         setActiveIndex(e.target)
        if (!e.target) return
         const spanList = isList.querySelectorAll("span")
         if (isList)  {          
            let matchFound = false    
            for (let i = 0; i < spanList.length; i++) {                   
                if( e.currentTarget.innerText.toLowerCase() == spanList[i].innerText.toLowerCase()) { 
                    spanList[i].classList.remove("hidden")
                    spanList[i].classList.add("grid")
                    setActiveIndex(i)
                    matchFound = true
                } 
            }    
            if (!matchFound) {
               length >= 1 ?  setLength(length - 1) : setLength(length)
              }
           
            }  
         },[isList,divRef,activeIndex,length])
      const alpha = alphabeth.map(item => {
        return(
            <motion.button
             whileHover={ { scale: 1.1 , backgroundColor:"#2463FF", color:"rgb(255,255,255)"}} 
             transition={{ type:'spring', damping: 15 , stiffness: 190}}
             className="bg-white lg:w-[95px] w-[40px] lg:h-[65px] h-[70px] lg:text-4xl text-3xl lg:rounded-xl rounded-full disabled:opacity-20 disabled:cursor-not-allowed"
             onClick={checkValue}
            >
               {item}
            </motion.button>
        )
     })
    return(
        <section className="overflow-hidden font-memoirs bg-opacity-75 bg-gradient-to-b from-[#1a043a] to-[#151278] h-auto  min-h-[100vh] lg:min-h-[100vh] flex flex-col gap-10">
         <Modal
         openModal={openModal}
         setModal={setModal}
         content={content}
         setWidth={setWidth}
         setRedirect={setRedirect}
         setChk={setChk}
         />
          <MainHeader
           text={ state.category}
           length={length}
           setModal={setModal}
           setTrack={setTrack}
          />
          <div  ref={divRef} className="w-[83%] mx-auto flex flex-col items-center h-auto min-h-[430px]  gap-[80px]">
            <ul className="flex flex-wrap items-center lg:gap-3  gap-2 text-center">
                {track}
            </ul>

            <div  ref={motionRef} className="flex flex-wrap w-full  h-auto min-h-[240px] lg:gap-[20px] gap-[12px]">
             {alpha}
            </div>
            
          </div> 
        </section>
    )
}

export function  Slate({text, id}) {
    return(
        <motion.li 
          id={id} 
          className="grid text-center h-[88px] lg:rounded-[25px] rounded-full lg:w-[62px] w-[45px] bg-[#2463FF] from-[rgba(255,255,255,0.25)] to-[rgba(255,255,255,0.25)] shadow-purple-sh hover:bg-gradient-to-r  place-items-center text-2xl text-white">
          <motion.span
            whileInView={{scale: 1.1, backgroundColor:"#2463FF", color:"rgb(255,255,255)"}} 
            transition={{ type:'spring', damping: 15 , stiffness: 190}}
            className="hidden uppercase text-transparent text-[50px] h-[83px] rounded-3xl lg:w-[58px] w-[50px] bg-[#2463FF] from-[rgba(255,255,255,0.25)] to-[rgba(255,255,255,0.25)] shadow-purple-sh hover:bg-gradient-to-r  place-items-center ">{text}</motion.span>
        </motion.li>
    )
}