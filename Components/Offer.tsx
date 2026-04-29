
import Image from "next/image";
import Link from "next/link";

const Offer = async () => {
    let offerProducts = [];

    try {
        const res = await fetch("http://localhost:3000/api/Products?offer=true", {
            cache: "no-store"
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        offerProducts = data.products || [];

    } catch (error) {
        console.error("Failed to fetch products:", error);

    }

    return (
        <div className={"w-full h-fit  lg:p-0 p-5"}>
            <div className={"w-full h-fit lg:p-5 p-3  bg-[#fc1374] rounded-lg flex flex-col lg:flex-row items-center justify-center"}>
                <div className={"w-fit h-fit text-4xl lg:text-5xl gap-5 text-white flex flex-col items-center justify-center "}>
                    <div className={"lg:m-10 lg:mb-0 mx-10 "}>
                        پیشنهاد
                        <br/>
                        شگفت
                        <br/>
                        انگیز
                    </div>
                    <div className={"flex gap-4 w-fit h-fit justify-center items-center flex-row-reverse m-3"}>
                        <div className={"bg-white rounded-3xl flex-col flex  justify-center items-center  h-20 w-15 text-gray-500 text-base"}>
                            <div className={"w-fit h-fit text-black text-3xl"}>12</div>
                            <div className={"w-fit h-fit text-sm"}>روز</div>
                        </div>
                        <div className={"bg-white rounded-3xl flex-col flex  justify-center items-center  h-20 w-15  text-gray-500 text-base"}>
                            <div className={"w-fit h-fit text-black text-3xl"}>12</div>
                            <div className={"w-fit h-fit text-sm"}>ساعت</div>
                        </div>
                        <div className={"bg-white rounded-3xl flex-col flex  justify-center items-center   h-20 w-15 text-gray-500 text-base"}>
                            <div className={"w-fit h-fit text-black text-3xl"}>12</div>
                            <div className={"w-fit h-fit text-sm"}>دقیقه</div>
                        </div>
                        
                    </div>
                </div>
                <div className={"w-full h-70 lg:h-90 px-1 lg:px-3 py-2 lg:py-8 gap-7 hide-scrollbar flex overflow-x-scroll"}>
                    {offerProducts.map((e:any,index:number)=>{
                        return(
                            <Link href={`/shop/${e._id}`} key={index} className={"w-53 lg:h-full h-fit shrink-0 flex-col transition-all ease-linear  flex rounded-lg items-center bg-white py-3 cursor-pointer hover:opacity-80 hover:scale-[1.1]"} >
                                <div>
                                    <Image src={e.image||`/placeholder.png`} alt={``} width={400} height={400} className={"object-fill w-45 lg:h-40 h-35 rounded-lg"} loading={"lazy"}/>
                                </div>
                                <div className={"text-start w-full h-fit lg:h-full mt-2 text-gray-600 text-base px-3"}>
                                    {e.name}
                                </div>
                                <div className={"flex justify-center gap-1 w-full lg:h-full h-fit  lg:mt-2 text-[#fc1374] text-base px-3"}>
                                    <div>{e.price}</div>
                                    <div>تومان</div>
                                </div>
                            </Link>
                        )
                        })
                   }
                </div>
                
              
            </div>
        </div>
    )
}
export default Offer
