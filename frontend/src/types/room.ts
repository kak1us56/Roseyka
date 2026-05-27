import { StaticImageData } from "next/image";

export interface ImageObject {
    id: number;
    image: StaticImageData;
}

interface BaseRoom {
    id: number;
    title: string;
    main_image: StaticImageData;
    price: number;
}

export interface RoomCardType extends BaseRoom {
    subtitle_card: string;
    description_card: string;
    slug: string;
}

export interface RoomPageType extends BaseRoom {
    images: ImageObject[];
    subtitle_page: string;
    description_page: string;
    conditioner: boolean;
    tv: boolean;
}