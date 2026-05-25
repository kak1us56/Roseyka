import { greatVibes } from "../../styles/fonts";
import Image from "next/image";
import flag from "../../icons/flag-ukraine.png";
import { Carousel } from "../features/Carousel/Carousel";

export function AboutMain() {
    return (
        <>
            <div className="min-h-[25.35rem] bg-[#E1E1E3]">
                <h3 className="text-[2rem] leading-cssnormal text-center pt-[1.5rem] pb-[3.38rem] font-medium tracking-[.1rem]">
                    ПРО <span className={`${greatVibes.className}`}>НАС</span>
                </h3>
                <Carousel />
            </div>
            <div className="min-h-[63.65rem] bg-[url('/images/bg-about-main.png')] bg-top bg-no-repeat bg-[#E1E1E3]">
                <div className="max-w-[80.12rem] mx-auto px-4">
                    <section className="uppercase text-[1.5rem]/[2rem] font-light tracking-[0.075rem] text-black flex flex-col">
                        <p className="pt-[5.81rem]">
                            Ми — база відпочинку <strong>"Бессарабський степ"</strong>, і ми<br/> знаємо, як складно знайти час для справжньої,<br/> неквапливої тиші. 
                            <br/><br/>
                            <strong>Наша місія</strong> проста: створити ідеальні умови для Вашого<br/> повного перезавантаження та якісного сімейного<br/> відпочинку.
                        </p>
                        <p className="text-right pt-[2.5rem] self-end pr-[3.9rem]">
                            Ми гостинно відкрили наші двері у <strong>2021 році</strong>,
                            але особливо<br/> символічним для нас став початок роботи після<br/> <strong>повномасштабного вторгнення</strong> росії. 
                        </p>
                        <p className="text-center relative mt-[4.5rem] max-w-[52rem]">
                            Ми займаємо <strong>чітку проукраїнську позицію</strong>, адже віримо в<br/> нашу перемогу і стійкість.
                            <Image src={flag} alt="Прапор України" className="absolute right-[-1.89rem] top-[-1.1rem]" />
                        </p>
                        <p className="text-right self-end pt-[4.5rem]">
                            Наша робота — це не лише Ваш відпочинок, а й внесок у<br/> спільну справу:
                            ми <strong>регулярно перераховуємо частину нашого<br/> заробітку на підтримку Збройних Сил України.</strong>  
                            <br/><br/>
                            З того часу ми щодня працюємо над тим, щоб Ваш вікенд чи<br/> відпустка стали <strong>острівцем затишку</strong>,
                            який допомагає<br/> підтримувати віру у мирне майбутнє.
                        </p>
                    </section>
                </div>
            </div>
        </>
    )
}