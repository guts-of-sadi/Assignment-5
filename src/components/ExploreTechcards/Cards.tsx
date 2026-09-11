import { use } from "react";
import type { CardTypes } from "./CardTypes";
import Technologies from "./Technologies";


export interface CardsProps {
    dataPromise: Promise<CardTypes[]>;
}

const Cards = ({ dataPromise }: CardsProps) => {

    const dataused = use(dataPromise)
    // console.log(data);

    return (

        <div className="container mx-auto">

            <Technologies dataused={dataused} />

        </div>



    )
}


export default Cards;