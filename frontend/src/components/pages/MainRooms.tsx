import { greatVibes } from "../../styles/fonts"
import { RoomItem } from "../features/Rooms/RoomItem";
import Link from "next/link";

import room1 from "../../images/rooms/room1.png";
import { useEffect, useState } from "react";
import { RoomCardType } from "../../types/room";
import { loadRooms } from "../../api/rooms";

export const MainRooms = () => {
    const [items, setItems] = useState<RoomCardType[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await loadRooms.getAll();
                setItems(data);                
            } catch (e) {
                console.log(e);
            }

        };

        fetchData();
    }, [])

    return (
        <main className="bg-[#E1E1E3]">
            <h3 className="text-center text-[2rem] leading-cssnormal tracking-[.1rem] font-medium pt-[4.31rem] pb-[6.37rem] uppercase text-[#041E47]">
                Наші <span className={`${greatVibes.className} font-normal`}>НОМЕРИ</span>
            </h3>
            <div className="max-w-[80.12rem] mx-auto px-4">
                <div className="flex gap-x-[11.37rem] gap-y-[7.63rem] flex-wrap pb-[7.89rem] justify-center min-h-[calc(100vh_-_18.51rem)]">
                    {
                        items.map((item) => (
                            <RoomItem 
                                key={item.id}
                                title={item.title}
                                subtitle_card={item.subtitle_card}
                                description_card={item.description_card}
                                main_image={item.main_image}
                                price={item.price}
                                slug={item.slug}
                                id={item.id}
                            />
                        )) || "Наразі немає вільних номерів в наявності"
                    }
                </div>
            </div>

        </main>
    )
}