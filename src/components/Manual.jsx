import rules from "../../features.json"
import RuleBox from "./RuleBox";
import { useState , useEffect } from "react";
import Header from "./Header";

export default function Manual() {
   const [isRules, setIsRules] = useState(rules)
   const ruleMap = isRules.rules.map(rule => {
        return(
            <RuleBox
             num={rule.num}
             title={rule.title}
             text={rule.text}
            />
        )
    })
    return(
     <section className="font-memoirs bg-opacity-75 bg-gradient-to-b from-[#1a043a] to-[#151278] lg:h-auto lg:min-h-[110vh] flex flex-col gap-3">
         <Header
          text="How to Play"
         />
         <div className="w-[85%] mx-auto h-auto min-h-[430px] flex  justify-between">
           {ruleMap}
         </div>
        
     </section>
    
    ) 
}