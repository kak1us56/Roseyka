import Image from "next/image";
import postcard from "../../images/postcard-main.png";
import clip from "../../icons/clip.png";

export function PostCardSection() {
    return (
        <div className="min-h-[45.5rem] bg-[url('/images/bg-see-main.png')] bg-no-repeat bg-cover bg-center">
            <div className="max-w-[80.125rem] mx-auto px-4 pt-16">
                <div className="relative w-[43.5rem] mx-auto">
                    <div>
                        <Image src={postcard} alt="Листівка" />
                    </div>
                    <Image src={clip} alt="Скріпка" className="absolute right-[-11px] top-[-33px]" />
                </div>
            </div>

        </div>
    )
}
