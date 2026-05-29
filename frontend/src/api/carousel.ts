import { CarouselItemType } from "../types/carouselItem";
import { BASE_URL } from "./rooms";


export const getCarouselItems = async (): Promise<CarouselItemType[]> => {
    const response = await fetch(BASE_URL + '/carousel/');

    if (!response.ok) {
        throw new Error("Failed to fetch carousel data!");
    }

    return response.json();
}
