import { createContext , useState } from "react";

const GameContext = createContext()

const MyProvider = ({children}) => {
    const [isState, setState] = useState({category: "", targets: "", openModal:false})

    return(
        <GameContext.Provider value={{isState,setState}}>
            {children}
        </GameContext.Provider>
    )
}

export {MyProvider , GameContext}
 