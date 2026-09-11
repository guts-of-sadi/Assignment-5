import type { CardTypes } from "./CardTypes";
// import Image from "./assets/Star.png"

export interface TechnologiesProps {
    dataused: CardTypes[];
}

const Technologies = ({ dataused }: TechnologiesProps) => {

    return (
        <div>
            <h2>Explore the Technologies</h2>
            <p>Pick one technology per category to build your ideal stack.</p>

            <div className="grid grid-cols-3 gap-4">
                {
                    dataused.map((data: CardTypes) => {
                        return (
                            <div className="border-2 border-b-blue-300 rounded-2xl p-5 h-[285px] -w-[20px]">
                                <div className="flex justify-between mb-[6px] ">
                                    <img className="w-12 h-12 " key={data.id} src={data.icon} alt="" />
                                    <div className="text-accent-content rounded-full text-xs font-semibold px-3 py-1">{data.badge}</div>
                                </div>
                                <p className="mb-[6px]">{data.description}</p>

                                <ul className="flex justify-around mb-4">
                                    <li>{data.category}</li>
                                    <li>{data.difficulty}</li>
                                    <li>⭐{data.rating}</li>
                                </ul>
                                <button className="btn flex mx-auto border-2 py-2.5 px-10">Add To Stack</button>

                            </div>

                        )
                    })
                }

            </div>
        </div>

    )
}

export default Technologies;