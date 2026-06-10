import Link from "next/link";
import { Arrow } from "./LineSVG";

interface BoockingBlockProps {
    price: number;
}

export const BoockingBlock: React.FC<BoockingBlockProps> = ({ price }) => {
    return (
        <div className="bg-[#F4F5F0] px-[1.25rem] pt-[2rem] pb-[2.62rem] h-[18.75rem] max-w-[26.125rem]">
            <div className="text-[#041E47] text-[1rem] leading-cssnormal lowercase tracking-[-0.05rem] font-light pb-[1.37rem]">
                <span className="text-[1.75rem] font-bold tracking-[0.0875rem] uppercase">₴ {price}</span> доба
            </div>
            <div className="text-[#747373] text-[0.9375rem] leading-cssnormal font-light tracking-[0.04688rem] uppercase pb-[2.38rem]">
                Оберіть зручний спосіб бронювання номера
            </div>
            <div className="flex gap-8 flex-wrap">
                <Link href={'#'}>
                    <button className="border-[#041E47] border-[3px] bg-white w-[10.8125rem] flex justify-center items-center gap-[0.25rem] py-[0.3rem]">
                        <div className="text-[#041E47] text-[1.125rem] leading-cssnormal font-medium uppercase tracking-[0.05625rem]">
                            Telegram
                        </div>
                        <Arrow />
                    </button>
                </Link>
                <Link href={'#'}>
                    <button className="border-[#041E47] border-[3px] bg-white w-[10.8125rem] flex justify-center items-center gap-[0.25rem] py-[0.3rem]">
                        <div className="text-[#041E47] text-[1.125rem] leading-cssnormal font-medium uppercase tracking-[0.05625rem]">
                            Viber
                        </div>
                        <Arrow />
                    </button>
                </Link>
                <Link href={'#'}>
                    <button className="border-[#041E47] border-[3px] bg-white w-[10.8125rem] flex justify-center items-center gap-[0.25rem] py-[0.3rem]">
                        <div className="text-[#041E47] text-[1.125rem] leading-cssnormal font-medium uppercase tracking-[0.05625rem]">
                            Whatsapp
                        </div>
                        <Arrow />
                    </button>
                </Link>
                <Link href={'#'}>
                    <button className="border-[#041E47] border-[3px] bg-white w-[10.8125rem] flex justify-center items-center gap-[0.25rem] py-[0.3rem]">
                        <div className="text-[#041E47] text-[1.125rem] leading-cssnormal font-medium uppercase tracking-[0.05625rem]">
                            Подзвонити
                        </div>
                        <Arrow />
                    </button>
                </Link>
            </div>
        </div>
    )
}