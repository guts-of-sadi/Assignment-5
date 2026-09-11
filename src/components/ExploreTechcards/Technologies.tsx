import { useState } from "react";
import type { CardTypes } from "./CardTypes";
export interface TechnologiesProps {
    dataused: CardTypes[];
}




const Technologies = ({ dataused }: TechnologiesProps) => {
const [add,setAdded]= useState(false)




    return (
        <div>
            <h2 className="font-bold text-[36px]">Explore the <span className="bg-linear-to-br from-[#EC4899] via-[#B753CC] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h2>
            <p className="text-[#64748B] mb-10">Pick one technology per category to build your ideal stack.</p>
            <div className="grid grid-cols-4">

                <div className="col-span-3 ">
                    <div className="grid grid-cols-3 gap-5">
                        {
                            dataused.map((data: CardTypes) => {
                                return (
                                    <div className=" border border-white hover:border-blue-300  p-5  duration-300 hover:-translate-y-1   ">

                                        <div className="flex justify-between mb-[6px] ">
                                            <img className="w-12 h-12 " key={data.id} src={data.icon} alt="" />
                                            <div className="text-accent-content rounded-full text-xs font-semibold px-3 py-1">{data.badge}</div>
                                        </div>
                                        <h1 className="font-bold text-[18px] py-4">{data.name}</h1>
                                        <p className="mb-[6px] py-3 text-[#64748B]">{data.description}</p>

                                        <ul className="flex justify-between mb-4 text-[#475569]">
                                            <li>{data.category}</li>
                                            <li>{data.difficulty}</li>
                                            <li className="text-black">⭐{data.rating}</li>
                                        </ul>
                                        <button
                                        onClick={()=>setAdded(false)}
                                        className="btn bg-[#0A0F1D] text-[#f1f5f9] flex mx-auto border-2 rounded-xl py-2.5 px-20 hover:bg-blue-600 ">
                                            {add===true?"Add To Stack":"Remove tech"} </button>

                                    </div>
                                )
                            })
                        }
                      
                    </div>
                </div>
                 {/* your selected part */}
                 <div className="p-5 border border-amber-50 ml-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 h-[300px]">
                    <div className="mb-[40px]">
                    <h2 className="font-bold ">Your Stack</h2>
                    <p className="text-[#94A3B8]">No technologies selected yet.</p>
                    </div>
                    <p className="flex justify-center items-center text-[#94A3B8]">Your stack is empty.</p>
                 </div>
                   

            </div>

        </div>




    )
}

export default Technologies;