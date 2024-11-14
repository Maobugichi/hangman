import { Link } from "react-router-dom"
import Button from "./Button";
import prev from "../assets/hangman-back.svg"

export default function Header({text}) {
    return(
        <header className="flex items-center lg:gap-[27%] gap-10 lg:h-[180px] h-[120px]  w-[85%]  mx-auto">
          <Link to="/hangman">
            <Button
            src={prev}
            width="w-[35px]"
            sWidth="w-[30px]"
            padTop="py-2"
            padBottom="px-2"
            sPadTop="py-2"
            sPadBottom="px-2"
            />
          </Link>
          <h1 className="lg:text-[110px] text-[40px] font-memoirs stroke-[#243041] stroke-[8] leading-[120%] lg:tracking-[-0.068rem] tracking-wide bg-gradient-to-b from-[#67b6ff] to-white bg-clip-text  text-transparent ">{text}</h1>     
        </header>
    )
}

