import { greatVibes } from "../../../styles/fonts";
import { LineSVG } from "./LineSVG";
import Image from "next/image";

import conditionerImg from "../../../icons/conditioner.png";
import tvImg from "../../../icons/tv.png";
import showerImg from "../../../icons/shower.png";
import furnitureImg from "../../../icons/furniture.png";
import fridgeImg from "../../../icons/fridge.png";

interface RoomInfoProps {
    title: string;
    subtitle_page: string;
    description_page: string;
    conditioner: boolean;
    tv: boolean;
    furniture: boolean;
    shower: boolean;
    fridge: boolean;
}


export const InfoBlock: React.FC<RoomInfoProps> = ({ title, subtitle_page, description_page, conditioner, tv, fridge, furniture, shower }) => {
    return (
        <div className="max-w-[60%] bg-[#F4F5F0] shadow-[0_4px_4px_0_rgba(0,_0,_0,_0.25)] flex flex-col items-center px-6">
            <h1 className="text-[#041E48] text-[2.06rem] leading-cssnormal font-medium uppercase tracking-[0.10306rem] pt-[2.06rem]">
                {title}
            </h1>
            <h3 className="text-[#041E48] font-light text-[1.29rem] leading-cssnormal capitalize tracking-[0.06438rem] pt-[0.81rem] pb-[1.75rem]">
                {subtitle_page}
            </h3>
            <LineSVG />
            <h4 className={`${greatVibes.className} text-[#041E48] text-[1.75rem] font-normal capitalize leading-cssnormal tracking-[0.0875rem] pt-[3.3rem]`}>
                ОПИС
            </h4>
            <section className="text-center pt-[1.19rem] pb-[5.37rem] text-[1.125rem] leading-cssnormal text-[#041E48] uppercase font-light tracking-[0.05625rem]">
                {description_page}
            </section>
            <LineSVG />
            <h4 className={`${greatVibes.className} text-[#041E48] text-[1.75rem] font-normal capitalize leading-cssnormal tracking-[0.0875rem] pt-[2.69rem] pb-[3.75rem]`}>
                ЗРУЧНОСТІ
            </h4>
            <div className="flex flex-wrap gap-x-[6.25rem] gap-y-[2.37rem] justify-center pb-[5.12rem]">
                {conditioner && 
                    <div className="flex flex-col items-center gap-[1.5rem]">
                        <div>
                            <Image src={conditionerImg} alt="Кондиціонер" />
                        </div>
                        <div className="text-[1.25rem] leading-cssnormal font-light text-[#041E47] tracking-[0.0625rem] uppercase w-[10rem] text-center">
                            Кондиціонер
                        </div>
                    </div>
                }
                {tv && 
                    <div className="flex flex-col items-center gap-[1.5rem]">
                        <div>
                            <Image src={tvImg} alt="Телевізор" />
                        </div>
                        <div className="text-[1.25rem] leading-cssnormal font-light text-[#041E47] tracking-[0.0625rem] uppercase w-[10rem] text-center">
                            Телевізор
                        </div>
                    </div>
                }
                {furniture && 
                    <div className="flex flex-col items-center gap-[1.5rem]">
                        <div>
                            <Image src={furnitureImg} alt="Нова Мебель" />
                        </div>
                        <div className="text-[1.25rem] leading-cssnormal font-light text-[#041E47] tracking-[0.0625rem] uppercase w-[10rem] text-center">
                            Нова Мебель
                        </div>
                    </div>
                }
                {shower && 
                    <div className="flex flex-col items-center gap-[1.5rem]">
                        <div>
                            <Image src={showerImg} alt="Ванна кімната" />
                        </div>
                        <div className="text-[1.25rem] leading-cssnormal font-light text-[#041E47] tracking-[0.0625rem] uppercase w-[10rem] text-center">
                            Ванна кімната
                        </div>
                    </div>
                }
                {fridge && 
                    <div className="flex flex-col items-center gap-[1.5rem]">
                        <div>
                            <Image src={fridgeImg} alt="Власний міні-Холодильник" />
                        </div>
                        <div className="text-[1.25rem] leading-cssnormal font-light text-[#041E47] tracking-[0.0625rem] uppercase w-[10rem] text-center">
                            Власний міні-Холодильник
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}