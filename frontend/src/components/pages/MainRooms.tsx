import { greatVibes } from "../../styles/fonts"
import { RoomItem } from "../features/Rooms/RoomItem";

import room1 from "../../images/rooms/room1.png";

export const MainRooms = () => {
    return (
        <main className="bg-[#E1E1E3]">
            <h3 className="text-center text-[2rem] leading-cssnormal tracking-[.1rem] font-medium pt-[4.31rem] pb-[6.37rem] uppercase text-[#041E47]">
                Наші <span className={`${greatVibes.className} font-normal`}>НОМЕРИ</span>
            </h3>
            <div className="max-w-[80.12rem] mx-auto px-4">
                <div className="flex gap-x-[11.37rem] gap-y-[7.63rem] flex-wrap pb-[7.89rem] justify-center">
                    <RoomItem header="Економ-комфорт блок" subheader="3-місний номер" description="Двомісне ліжко + розкладне крісло. Ідеально підходить для сім’ї з однією дитиною" photo={room1} price={1000} />
                    <RoomItem header="Економ-комфорт блок" subheader="3-місний номер" description="Двомісне ліжко + розкладне крісло. Ідеально підходить для сім’ї з однією дитиною" photo={room1} price={1000} />
                    <RoomItem header="Економ-комфорт блок" subheader="3-місний номер" description="Двомісне ліжко + розкладне крісло. Ідеально підходить для сім’ї з однією дитиною" photo={room1} price={1000} />
                    <RoomItem header="Економ-комфорт блок" subheader="3-місний номер" description="Двомісне ліжко + розкладне крісло. Ідеально підходить для сім’ї з однією дитиною" photo={room1} price={1000} />
                </div>
            </div>

        </main>
    )
}