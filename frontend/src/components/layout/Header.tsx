import Link from "next/link";

interface HeaderProps {
    stroke: boolean;
}

export const Header: React.FC<HeaderProps> = ({ stroke }) => {
    return (
        <>
            <header className="h-[4.125rem] bg-[#E1E1E3] px-4 mx-auto flex items-center justify-center">
                <nav>
                    <ul className="flex gap-[5.0625rem] uppercase font-light text-[1.5rem]">
                        <li>Курорт “Росєйка”</li>
                        <li><Link href={`/our-rooms/`}>Номери</Link></li>
                        <li><Link href={`/#about`}>Про нас</Link></li>
                        <li>Правила</li>
                        <li>Контакти</li>
                    </ul>                
                </nav>
            </header>
            <div className={`${stroke ? "block" : "hidden"} h-[0.375rem] bg-[#1D1D1F] w-full`}></div>
        </>

    )
}