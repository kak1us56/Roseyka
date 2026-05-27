import Image from "next/image";

import { RoomCardType } from "../../../types/room"
import Link from "next/link";

export const RoomItem: React.FC<RoomCardType> = ({ title, subtitle_card, description_card, price, main_image, slug }) => {
    return (
        <div className="bg-[#F4F5F0] rounded-[1.125rem] w-[25.2rem] border-[#041E48] border-[.9px] shadow-[0_4px_4px_0_rgba(0,_0,_0,_0.25)] px-[1.57rem] py-[1.35rem]">
            <div className="rounded-[0.675rem] max-h-[14.85rem]">
                <Image src={main_image} alt={title} width={352.8} height={237.6} className="max-h-[14.85rem] rounded-[0.675rem]" />
            </div>
            <h4 className="text-[1.8rem] leading-cssnormal tracking-[.09rem] font-medium pt-[1.01rem] uppercase text-[#041E48]">
                {title}
            </h4>
            <h5 className="text-[1.2375rem] leading-cssnormal font-normal tracking-[0.06188rem] text-[#041E47] uppercase">
                {subtitle_card}
            </h5>
            <p className="text-[0.7875rem] leading-cssnormal font-light text-[#041E47] uppercase tracking-[0.03938rem] pt-[1.31rem]">
                {description_card}
            </p>
            <div className="text-[1.125rem] leading-cssnormal text-[#041E48] font-medium tracking-[0.05625rem] uppercase pt-[1.16rem] pb-[1.1rem]">
                {price} грн / доба
            </div>
            <Link href={`/our-rooms/${slug}/`}>
                <button className="bg-[#041E48] rounded-[.45rem] px-[2.29rem] py-[.55rem] text-[1.35rem] leading-cssnormal 
                    text-[#F4F5F0] font-medium uppercase tracking-[0.0675rem] cursor-pointer">
                    переглянути номер
                </button>            
            </Link>

        </div>
    )
}