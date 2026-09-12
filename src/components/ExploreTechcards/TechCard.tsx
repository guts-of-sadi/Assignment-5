import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { CardTypes } from "./CardTypes";

export interface TechCardProps {
    data: CardTypes;
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
    selectedTechs: CardTypes[];
    setSelectedTech: Dispatch<SetStateAction<CardTypes[]>>;
}

const TechCard = ({ data, count, setCount, selectedTechs, setSelectedTech }: TechCardProps) => {
    const [add, setAdded] = useState(false)
  

useEffect(() => {
    const isSelected = selectedTechs.filter(
        tech => tech.id === data.id
    ).length > 0;

    setAdded(isSelected);
}, [selectedTechs, data.id]);

    const handleAddButton = () => {
        setAdded(true)
        const totalProducts = count + 1
        setCount(totalProducts)
          
        // selected Tech part
        setSelectedTech([...selectedTechs,data])
    }
    return (
        <div className="border border-white hover:border-blue-300  p-5  duration-300 hover:-translate-y-1   ">

            <div className="flex justify-between mb-1.5 ">
                <img className="w-12 h-12 " key={data.id} src={data.icon} alt="" />
                <div className="text-accent-content rounded-full text-xs font-semibold px-3 py-1">{data.badge}</div>
            </div>
            <h1 className="font-bold text-[18px] py-4">{data.name}</h1>
            <p className="mb-1.5 py-3 text-[#64748B]">{data.description}</p>

            <ul className="flex justify-between mb-4 text-[#475569]">
                <li>{data.category}</li>
                <li>{data.difficulty}</li>
                <li className="text-black">⭐{data.rating}</li>
            </ul>
            <button
                onClick={() => handleAddButton()}
                className={`btn bg-[#0A0F1D] text-[#f1f5f9] flex mx-auto border-2 rounded-xl py-2.5 px-20 hover:bg-blue-600 `}
                disabled={add}>
                {add === true ? "selected tech" : "Add To Stack"} </button>

        </div>
    )
}

export default TechCard;