
import { useState } from "react";
import type { CardTypes } from "./CardTypes";
import TechCard from "./TechCard";
import Selectedtech from "./Selectedtech";
export interface TechnologiesProps {
    dataused: CardTypes[];
}




const Technologies = ({ dataused }: TechnologiesProps) => {

    const [count, setCount] = useState(0)

    const [selectedTechs, setSelectedTech] = useState<CardTypes[]>([])

    return (
        <div className="mt-10 lg:mt-15">
            <h2 className="font-bold text-center lg:text-left text-[24px] lg:text-[36px]">Explore the <span className="bg-linear-to-br from-[#EC4899] via-[#B753CC] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h2>
            <p className="text-center lg:text-left text-[#64748B] mb-5 lg:mb-10">Pick one technology per category to build your ideal stack.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                <div className="col-span-3 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            dataused.map((data: CardTypes) => {
                                return (
                                    <TechCard key={data.id} data={data} count={count} setCount={setCount} selectedTechs={selectedTechs} setSelectedTech={setSelectedTech}/>
                                )
                            })
                        }

                    </div>
                </div>


                <Selectedtech
                    count={count}
                    setCount={setCount}
                    selectedTechs={selectedTechs}
                    setSelectedTech={setSelectedTech}
                />

            </div>

        </div>

    )
}

export default Technologies;