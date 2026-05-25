import Image from "next/image";

import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

import img1 from "../../../images/carousel/IMG_4370.png";
import img2 from "../../../images/carousel/IMG_6125.png";

export const Carousel = () => {
    const autoplayOptions = { delay: 3000, stopOnInteraction: false };

    const [emblaRef] = useEmblaCarousel(
        { 
            loop: true,
            dragFree: true,
        }, 
        [
            AutoScroll({ 
                speed: 1,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
            })
        ]
    );

    return (
        <div className='w-full overflow-hidden' ref={emblaRef}>
            <div className='flex'>
                <Image className="flex-[0_0_30%]" src={img1} alt="image" />
                <Image className="flex-[0_0_30%]" src={img2} alt="image" />
                <Image className="flex-[0_0_30%]" src={img1} alt="image" />
                <Image className="flex-[0_0_30%]" src={img2} alt="image" />
                <Image className="flex-[0_0_30%]" src={img1} alt="image" />
                <Image className="flex-[0_0_30%]" src={img2} alt="image" />
            </div>
        </div>
    )
}