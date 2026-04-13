import { StaticImageData } from "next/image"
import Image from "next/image";
import { ReactNode } from "react";

interface cardProps {
    icon: StaticImageData;
    header: string;
    children: ReactNode
}

export const Card: React.FC<cardProps> = ({ icon, header, children }) => {
    return (
        <div className="flex flex-col items-start">
            <div className="self-center">
                <Image src={icon} alt={header} />
            </div>
            <h4 className="self-center pt-[3.07rem] pb-[1.94rem] text-[#041E48] text-[2rem] leading-cssnormal uppercase tracking-[0.1rem] font-medium">{header}</h4>
            <div className="text-[#041E48] uppercase text-[1.25rem] leading-cssnormal tracking-[0.0625rem] font-light text-justify max-w-[23.375rem]">
                {children}
            </div>
        </div>
    )
}