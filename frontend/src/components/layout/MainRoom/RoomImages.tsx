import Image from "next/image";
import { StaticImageData } from "next/image"
import { ImageObject } from "../../../types/room";


interface ImagesProps {
    mainImage: StaticImageData;
    images: ImageObject[];
}

export const RoomImages: React.FC<ImagesProps> = ({ mainImage, images }) => {
    return (
        <div className="pt-[3.89rem] flex justify-between min-h-[612.63px]">
            <div>
                {
                    mainImage && (
                        <Image src={mainImage} alt="Кімната" className="object-cover" width={612.63} height={612.63} /> 
                    )
                }
            </div>
            <div className="w-[49%] grid grid-cols-2 gap-6">
                {images[0]?.image && <Image src={images[0]?.image} alt="Кімната" className="object-cover" width={295} height={295} />}
                {images[1]?.image && <Image src={images[1]?.image} alt="Кімната" className="object-cover" width={295} height={295} />}
                {images[2]?.image && <Image src={images[2]?.image} alt="Кімната" className="object-cover" width={295} height={295} />}
                {images[3]?.image && <Image src={images[3]?.image} alt="Кімната" className="object-cover" width={295} height={295} />}
            </div>
        </div>
    )
}