import { RoomPageType } from "../../types/room"
import { BoockingBlock } from "../layout/MainRoom/BoockingBlock"
import { InfoBlock } from "../layout/MainRoom/InfoBlock"
import { LineSVGver } from "../layout/MainRoom/LineSVG"
import { RoomImages } from "../layout/MainRoom/RoomImages"

export function MainRoom({ room }: { room: RoomPageType | null })  {
    return (
        <main className="bg-[#E1E1E3]">
            <div className="max-w-[80.12rem] mx-auto px-4">
                <RoomImages mainImage={room.main_image} images={room.images} />
                <div className="pt-[3.01rem] pb-[7.88rem] flex justify-between">
                    <InfoBlock 
                        title={room.title} 
                        subtitle_page={room.subtitle_page} 
                        description_page={room.description_page} 
                        conditioner={room.conditioner} tv={room.tv} 
                        fridge={room.fridge} 
                        furniture={room.furniture} 
                        shower={room.shower} />
                    <LineSVGver />
                    <BoockingBlock price={room.price} />
                </div>
            </div>
        </main>
    )
}