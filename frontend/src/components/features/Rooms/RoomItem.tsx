import Image from "next/image";

import { RoomStruct } from "../../../types/room"

export const RoomItem: React.FC<RoomStruct> = ({ header, subheader, description, price, photo }) => {
    return (
        <div className="bg-[#F4F5F0] rounded-[1.125rem] w-[25.2rem] border-[#041E48] border-[.9px] shadow-[0_4px_4px_0_rgba(0,_0,_0,_0.25)] px-[1.57rem] py-[1.35rem]">
            <div className="rounded-[0.675rem]">
                <Image src={photo} alt={header} />
            </div>
            <h4 className="text-[1.8rem] leading-cssnormal tracking-[.09rem] font-medium pt-[1.01rem] uppercase text-[#041E48]">
                {header}
            </h4>
            <h5 className="text-[1.2375rem] leading-cssnormal font-normal tracking-[0.06188rem] text-[#041E47] uppercase">
                {subheader}
            </h5>
            <p className="text-[0.7875rem] leading-cssnormal font-light text-[#041E47] uppercase tracking-[0.03938rem] pt-[1.31rem]">
                {description}
            </p>
            <div className="text-[1.125rem] leading-cssnormal text-[#041E48] font-medium tracking-[0.05625rem] uppercase pt-[1.16rem] pb-[1.1rem]">
                {price} грн / доба
            </div>
            <button className="bg-[#041E48] rounded-[.45rem] px-[2.29rem] py-[.55rem] text-[1.35rem] leading-cssnormal 
                text-[#F4F5F0] font-medium uppercase tracking-[0.0675rem] cursor-pointer">
                переглянути номер
            </button>
        </div>
    )
}