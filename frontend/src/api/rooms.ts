import { RoomCardType, RoomPageType } from "../types/room";

const IS_SERVER = typeof window === "undefined";
export const BASE_URL = IS_SERVER ? (process.env.BASE_URL || "http://127.0.0.1:8000") : "/api";

export const loadRooms = {
    async getAll(): Promise<RoomCardType[]> {
        const response = await fetch(BASE_URL + "/rooms/");
        if (!response.ok) {
            throw new Error("Failed to fetch rooms!");
        }
        return response.json();
    },

    async getRoom(slug: string): Promise<RoomPageType> {
        const response = await fetch(BASE_URL + `/rooms/${slug}/`);
        if (!response.ok) {
            throw new Error("Failed to fetch room!");
        }
        return response.json();
    }
}
