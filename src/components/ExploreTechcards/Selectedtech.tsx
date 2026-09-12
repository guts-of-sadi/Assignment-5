import type { Dispatch, SetStateAction } from "react";
import type { CardTypes } from "./CardTypes";
import { RxCross1 } from "react-icons/rx";

export interface SelectedtechProps {
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
    selectedTechs: CardTypes[];
    setSelectedTech: Dispatch<SetStateAction<CardTypes[]>>;

}

const Selectedtech = ({ count, setCount, selectedTechs, setSelectedTech }: SelectedtechProps) => {

    const handleRemovetech = (tech: CardTypes) => {
        const restTech = selectedTechs.filter(selectedTech => selectedTech.name !== tech.name)
        console.log(restTech);
        setSelectedTech(restTech)
         const restCount = count - 1;
        setCount(restCount)
    }

    const handleRemoveAll = () => {
    setSelectedTech([]);
    setCount(0);
};

    return (



        <div className="p-5 border border-amber-50 ml-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300">
            <div className="mb-10">
                <h2 className="font-bold ">Your Stack</h2>
                <p className="text-[#94A3B8]">
                    {count === 0 ? "No technologies selected yet." : `${count} Technology selected.`}
                </p>
            </div>

            <div className="grid grid-cols-1 gap-5">
                {
                    selectedTechs.map(tech => {
                        return (

                            <div key={tech.id} className="flex items-center justify-between gap-2 border-2 border-blue-300 rounded-xl py-3 px-2">
                                <div className="flex items-center gap-2">
                                    <img src={tech.icon} alt="" />
                                    <div>
                                        <h2>{tech.name}</h2>
                                        <p>{tech.category}</p>
                                    </div>
                                </div>
                                <span
                                    onClick={() => handleRemovetech(tech)}
                                    className="flex cursor-pointer  text-red-400 font-bold">
                                    <RxCross1 />
                                </span>

                            </div>
                        )

                    })
                }
            </div>

            <button
             onClick={()=>handleRemoveAll()}
             disabled={count===0}
            className="btn mt-3 flex items-center justify-center mx-auto text-[#D82C20] rounded-xl border-[#D82C20] px-[80px]">{count === 0 ?"":"Remove All"}</button>
            <p className="flex justify-center items-center text-[#94A3B8]">
                {count === 0 ? "Your stack is empty" : ""}</p>
        </div>
    )
}

export default Selectedtech;