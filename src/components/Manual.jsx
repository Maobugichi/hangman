import rules from "../../features.json"
import RuleBox from "./RuleBox";
import { useState , useEffect } from "react";
import Header from "./Header";

export default function Manual() {
   const [isRules, setIsRules] = useState(rules)
   const ruleMap = isRules.rules.map(rule => {
        return(
            <RuleBox
             key={rule.num}
             num={rule.num}
             title={rule.title}
             text={rule.text}
            />
        )
    })
    return(
     <section className="overflow-hidden font-memoirs bg-opacity-75 bg-gradient-to-b from-[#1a043a] to-[#151278] h-auto min-h-[100vh] pb-5 lg:min-h-[110vh] flex flex-col gap-3">
         <Header
          text="How to Play"
         />
         <div className="lg:w-[85%] w-[90%] mx-auto h-auto min-h-fit flex lg:flex-row flex-col justify-between gap-3">
           {ruleMap}
         </div>
        
     </section>
    
    ) 
}