import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
const SlideRight = dynamic(() => import('@/components/Animations/SlideRight'), { ssr: false });
import image2 from '@/../public/assets/img_03.jpg';
import image3 from '@/../public/assets/img_04.jpg';

const ServiceImage = () => {
    return (
        <SlideRight>
            <div className="relative 2xl:h-[580px] xl:h-[580px] h-[480px] 2xl:w-full xl:w-full sm:w-[387px] w-auto  overflow-hidden">
                <Image
                    src={image2}
                    loading="lazy"
                    placeholder="blur"
                    height={450}
                    width={370}
                    sizes="(max-width: 768px) 70vw, 370px"
                    className="z-30 absolute bottom-0 left-0 max-w-[370px] max-h-[450px] w-[90%] h-full object-cover"
                    alt="Janitorial agent generating leads - left image"
                />
                <Image
                    src={image3}
                    loading="lazy"
                    placeholder="blur"
                    height={450}
                    width={370}
                    sizes="(max-width: 768px) 70vw, 370px"
                    className="z-20 absolute top-0 right-0 2xl:hover:translate-x-6 xl:hover:translate-x-6 transition-all duration-300 max-w-[370px] max-h-[450px] w-[90%] h-full object-cover"
                    alt="Janitorial agent generating leads - right image"
                />
            </div>
        </SlideRight>
    );
};

export default ServiceImage;
