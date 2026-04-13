import { Card } from "./Card"
import comfort from "../../../images/comfort.png";
import convenience from "../../../images/convenience.png";
import position from "../../../images/position.png";

export const CardsBlock = () => {
    return (
        <div className="flex gap-[1.5rem]">
            <Card icon={comfort} header="Комфорт та Вигода">
                <ul className="flex flex-col gap-8 list-outside list-disc pl-5">
                    <li>Вигідні ціни</li>
                    <li>Одні з найкращих умов та стан номерів</li>
                    <li>Бронювання з мінімальною передоплатою</li>
                    <li>Велика кількість паркомісць</li>
                </ul>
            </Card>
            <Card icon={convenience} header="Свобода та Зручність">
                <ul className="flex flex-col gap-4 list-outside list-disc pl-5">
                    <li>Заїзд та виїзд у зручний для клієнтів час</li>
                    <li>Приймаємо з тваринами</li>
                    <li>Наявність дитячого майданчика</li>
                </ul>
            </Card>
            <Card icon={position} header="Позиція та зв’язок">
                <ul className="flex flex-col gap-4 list-outside list-disc pl-5">
                    <li>20% знижка для військовослужбовців ЗСУ</li>
                    <li>Завжди на зв'язку з клієнтам</li>
                    <li>Є соціальні мережі</li>
                </ul>
            </Card>
        </div>
    )
}