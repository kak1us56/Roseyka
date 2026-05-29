import { CarouselItemType } from "../../../types/carouselItem"
import Image from "next/image";

import frame from "../../../images/ramochka.png";


export const CarouselItem: React.FC<CarouselItemType> = ({ id, image }) => {
    return (
        <div className="relative flex justify-center items-center flex-[0_0_30%]">
            <div className="w-[81.38%] h-[69.82%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image src={image} alt="Росєйка" fill className="object-cover" />
            </div>
            <Image src={frame} alt="Рамка" width={457.18} height={287.58} className="w-full block h-auto z-[2]" />
        </div>
    )
}