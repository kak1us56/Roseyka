import { inter } from "../../styles/fonts";
import { greatVibes } from "../../styles/fonts";
import { CardsBlock } from "../features/WhyUs/CardsBlock";

export function WhyUs() {
    return (
        <div className="min-h-[65.19rem] bg-[#E1E1E3]">
            <div className="max-w-[80.12rem] mx-auto px-4 flex flex-col items-center">
                <h3 className={`text-center text-[2rem] uppercase leading-cssnormal text-[#041E48] pb-[6rem] font-normal ${inter.className}`}>
                    Чому саме <span className={`${greatVibes.className}`}>ми</span>?
                </h3>
                <div className="pb-[7.87rem]">
                    <CardsBlock />
                </div>
                <button className={`bg-[#E7E8DA] px-[3.38rem] py-[1.5rem] rounded-[0.5rem] border-[2px] border-[#041E48]
                        text-[#041E48] text-[2.5rem] leading-cssnormal tracking-[0.125rem] ${greatVibes.className} font-normal`}>
                    Оберіть свій ідеальний номер
                </button>
            </div>
        </div>
    )
}