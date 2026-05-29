import Image from "next/image";

import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

import img1 from "../../../images/carousel/IMG_4370.png";
import img2 from "../../../images/carousel/IMG_6125.png";
import { useEffect, useState } from "react";
import { CarouselItemType } from "../../../types/carouselItem";
import { getCarouselItems } from "../../../api/carousel";
import { CarouselItem } from "./CarouselItem";

export const Carousel = () => {
    const [items, setItems] = useState<CarouselItemType[]>([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await getCarouselItems();
                setItems(data);
            } catch (e) {
                console.log(e);
            }
        }

        fetch();
    }, []);

    const [emblaRef] = useEmblaCarousel(
        { 
            loop: true,
            watchDrag: false,
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
        <div className='w-full overflow-hidden min-h-[17.9738rem]' ref={emblaRef}>
            <div className='flex'>
                {items.map((item) => (
                    <CarouselItem key={item.id} image={item.image} id={item.id} />
                ))}

                {/* <Image className="flex-[0_0_30%]" src={img1} alt="image" />
                <Image className="flex-[0_0_30%]" src={img2} alt="image" />
                <Image className="flex-[0_0_30%]" src={img1} alt="image" />
                <Image className="flex-[0_0_30%]" src={img2} alt="image" />
                <Image className="flex-[0_0_30%]" src={img1} alt="image" />
                <Image className="flex-[0_0_30%]" src={img2} alt="image" /> */}
            </div>
        </div>
    )
}