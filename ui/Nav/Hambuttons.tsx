"use client"


const Hambuttons = ({btn,setbtn} : {btn:number,setbtn:Function}) => {
    
    return (
        <div className={"w-full h-full bg-white flex text-sm"}>
            <button className={`flex items-center justify-center w-full transition-all ease-linear ${btn=== 1? "text-black border-b border-[#ee156f] " : ""} `}onClick={()=>{
                setbtn(1)
            }}>فهرست</button>
            <button className={`flex items-center justify-center w-full transition-all ease-linear ${btn=== 2? "text-black border-b border-[#ee156f] " : ""} `}onClick={()=>{
                setbtn(2)
            }}>دسته بندی ها</button>
        </div>
    )
}
export default Hambuttons
