import { greatVibes } from "../../../styles/fonts";
import { LineSVG } from "./LineSVG";


interface RoomInfoProps {
    title: string;
    subtitle_page: string;
    description_page: string;
    conditioner: boolean;
    tv: boolean;
}


export const InfoBlock: React.FC<RoomInfoProps> = ({ title, subtitle_page, description_page, conditioner, tv }) => {
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
            <div>

            </div>
        </div>
    )
}