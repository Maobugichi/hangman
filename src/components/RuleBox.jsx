

export default function RuleBox({num, title, text}) {
    return(
        <div className="bg-white lg:w-[32%] w-full h-auto min-h-[200px] lg:min-h-[400px] lg:rounded-[9%] rounded-[4%]  p-7 grid items-center gap-4">
          <div className=" lg:h-[320px] h-[150px]  w-[95%]  flex flex-col  lg:items-center lg:justify-between gap-4">
            <div className="flex lg:flex-col flex-row items-center gap-9">
            <h3 className="lg:text-[65px] text-[30px] text-[#2463ff]">{num}</h3>
            <h2 className="lg:text-[40px] text-[25px] uppercase tracking-wider text-[#261676]">{title}</h2>
            </div>
            <p className="lg:text-[20px] w-[90%] tracking-wider lg:text-center text-[#887dc0]  leading-tight">{text}</p>
          </div>
        </div>
    )
}