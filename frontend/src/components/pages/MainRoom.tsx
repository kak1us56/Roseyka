import { RoomPageType } from "../../types/room"
import { InfoBlock } from "../layout/MainRoom/InfoBlock"
import { RoomImages } from "../layout/MainRoom/RoomImages"

export function MainRoom({ room }: { room: RoomPageType | null })  {
    return (
        <main className="bg-[#E1E1E3]">
            <div className="max-w-[80.12rem] mx-auto px-4">
                <RoomImages mainImage={room.main_image} images={room.images} />
                <div className="pt-[3.01rem]">
                    <InfoBlock title={room.title} subtitle_page={room.subtitle_page} description_page={room.description_page} conditioner={room.conditioner} tv={room.tv} />
                </div>
            </div>
        </main>
    )
}