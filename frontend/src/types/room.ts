import { StaticImageData } from "next/image";

export interface RoomStruct {
    header: string;
    subheader: string;
    description: string;
    price: number;
    photo: StaticImageData;
}