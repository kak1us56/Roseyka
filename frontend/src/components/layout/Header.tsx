import Link from "next/link";

export function Header() {
    return (
        <header className="h-[4.125rem] bg-[#E1E1E3] px-4 mx-auto flex items-center justify-center">
            <nav>
                <ul className="flex gap-[5.0625rem] uppercase font-light text-[1.5rem]">
                    <li>Курорт “Росєйка”</li>
                    <li><Link href={`/our-rooms/`}>Номери</Link></li>
                    <li>Про нас</li>
                    <li>Правила</li>
                    <li>Контакти</li>
                </ul>                
            </nav>
        </header>
    )
}