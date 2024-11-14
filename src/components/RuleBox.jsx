

export default function RuleBox({num, title, text}) {
    return(
        <div className="bg-white lg:w-[32%] w-full h-auto min-h-[200px] lg:min-h-[400px] rounded-[9%] p-7 grid items-center">
          <div className=" h-[320px] flex flex-col items-center justify-between ">
            <h3 className="text-[65px] text-[#2463ff]">{num}</h3>
            <h2 className="text-[40px] uppercase tracking-wider text-[#261676]">{title}</h2>
            <p className="text-[20px]  w-[90%] tracking-wider text-center text-[#887dc0] leading-tight">{text}</p>
          </div>
        </div>
    )
}