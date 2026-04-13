import { inter } from "../../styles/fonts";
import { greatVibes } from "../../styles/fonts";
import Image from "next/image";
import history from "../../images/history-img.png";

export function HistoryMain() {
    return (
        <div className="bg-[#E1E1E3] min-h-[47.4775rem]">
            <div className="py-[1.5rem] bg-[#041E48] w-[calc((100vw_-_80.12rem)_/_2_+_27rem)]">
                <h3 className={`text-[2rem] leading-cssnormal uppercase text-[#EAE8D9] text-right pr-[1.69rem] font-normal ${inter.className}`}>
                    НАША <span className={`${greatVibes.className}`}>ІСТОРІЯ</span>
                </h3>
            </div>
            <div className="max-w-[80.12rem] mx-auto px-4 pt-[1.5rem] flex justify-between">
                <div className="max-w-[42.0625rem] pt-[3rem]">
                    <section className="text-[1.25rem]/[2rem] text-justify text-[#041E48] font-light tracking-[0.0625rem] uppercase">
                        <p>
                            <strong>"Бессарабський степ"</strong> розташований у невеликому, але чарівному курорті Російка, що на мальовничій Одещині.
                        </p>
                        <br />
                        <p>
                            власники <strong>Оксана та Дем’ян</strong> — родом із сусідніх Татарбунар, що всього за 30 км від Російки.
                            Саме тут минуло їхнє дитинство, тут вони виросли та ввібрали в себе красу степу і морського узбережжя.
                        </p>
                        <br />
                        <p>
                            Спочатку це місце замислювалося як приватний сімейний маєток,
                            де власники та їхні діти зможуть відпочивати від міського шуму
                            та втікати від гаджетів. Згодом приватна мрія перетворилася на місію — 
                            <strong> створити острівець релаксу, доступний кожному,
                            хто потребує перезавантаження</strong>. Сюди було вкладено багато особистих зусиль, часу та любові,
                            задля створення максимально зручних умов проживання та місця, яке пробуджує бажання повернутися ще неодноразово. 
                        </p>
                    </section>
                </div>
                <div className="relative w-[23.375rem]">
                    <Image src={history} alt="Сімейне фото" className="absolute z-[1] top-[3.5rem] right-[3.06rem]" />
                    <div className="w-[23.375rem] h-[28.9375rem] bg-[#041E48]"></div>
                </div>
            </div>
        </div>
    )
}