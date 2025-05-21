import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import image1 from '@/../public/assets/slide01.jpg';
import image2 from '@/../public/assets/slide02.jpg';
import image3 from '@/../public/assets/slide03.jpg';
import { useRef, useState } from 'react';
import Link from 'next/link';
import UpAnimation from '@/components/Animations/UpAnimation';
import ButtonTertiary from '@/components/Buttons/ButtonTertiary';

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const HeroBannerContent = ({
        heading,
        paragraph,
        buttonLabel,
        positionClasses = 'absolute 2xl:left-0 xl:left-0 2xl:-translate-x-0 xl:-translate-x-0 -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 w-full 2xl:p-0 xl:p-0 2xl:p-10 xl:p-10 p-4 z-[60]',
        headingClasses = 'text-white 2xl:text-5xl xl:text-5xl text-3xl font-semibold 2xl:text-left xl:text-left text-center',
        paragraphClasses = 'text-white 2xl:text-lg xl:text-lg text-base 2xl:text-left xl:text-left text-center',
    }) => {
        return (
            <div className={positionClasses}>
                <div className='2xl:space-y-8 xl:space-y-8 space-y-6 max-w-[1150px] mx-auto'>
                    <UpAnimation delay={0.8} key={activeIndex}>
                        <h1 className={headingClasses}>
                            {heading}
                        </h1>
                    </UpAnimation>
                    <UpAnimation delay={1} key={activeIndex}>
                        <p className={paragraphClasses}>
                            {paragraph}
                        </p>
                    </UpAnimation>
                    <div className='w-fit 2xl:mx-0 xl:mx-0 mx-auto'>
                        <UpAnimation delay={1.2} key={activeIndex}>
                            <Link href={'#pricing'}>
                                <ButtonTertiary label={buttonLabel} />
                            </Link>
                        </UpAnimation>
                    </div>
                </div>
            </div>
        );
    };
    const swiperRef = useRef(null);
    const handleSlideChange = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideToLoop(index);
        }
    };

    return (
        <>
            <div className='relative'>
                <Swiper
                    ref={swiperRef}
                    autoplay={{ delay: 10000 }}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination',
                    }}
                    initialSlide={0}
                    loop={true}
                    speed={1000}
                    effect={`fade`}
                    fadeEffect={{ crossFade: true }}// Enable fade effect
                    slidesPerView={1}
                    modules={[Navigation, Autoplay, Pagination, EffectFade]}
                    className="mySwiper pointer-events-none"

                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    <SwiperSlide>
                        <div className='w-full 2xl:h-[890px] xl:h-[890px] h-[480px] slider'>
                            <Image src={image1} sizes="(max-width: 768px) 80vw, 100vw"
                                fill
                                alt='janitorial-leads-generation' priority className='object-cover w-full h-full' />
                            <HeroBannerContent

                                heading={<>Schedule an <br /> Appointment with Us</>}
                                paragraph={<>Book now to get leads tailored to your business and unlock <br /> new opportunities.
                                </>}
                                buttonLabel={'Request Pricing'}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full 2xl:h-[890px] xl:h-[890px] h-[480px] lcp'>
                            <Image src={image2} sizes="(max-width: 768px) 80vw, 100vw"
                                fill
                                alt='Telemarketing agent doing a call' priority={false} loading='lazy' className='object-cover w-full h-full' />
                            <HeroBannerContent

                                heading={<>Find Qualified ,<br /> Exclusive Janitorial <br /> Leads in your area</>}
                                paragraph={<>A reliable and stress-free appointment setting <br />
                                    service for janitorial business owner</>}
                                buttonLabel={'Request Pricing'}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full 2xl:h-[890px] xl:h-[890px] h-[480px] lcp'>
                            <Image src={image3} sizes="(max-width: 768px) 80vw, 100vw"
                                fill
                                priority={false} loading='lazy' alt='Commercial cleaning lead pricing' className='object-cover w-full h-full' />
                            <HeroBannerContent
                                heading={<>Convert Leads With <br /> Integrated Call Center</>}
                                paragraph={<>Connect with key-decision makers and receive valuable <br /> opportunities delivered straight to your inbox-automatically</>}
                                buttonLabel={'Request Pricing'}
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
                {/* Pagination Dots */}
                <div className='absolute 2xl:top-1/2 xl:top-1/2 top-[385px] 2xl:-translate-y-1/2 xl:-translate-y-1/2 z-50 pointer-events-auto left-1/2 2xl:-translate-x-0 xl:-translate-x-0 -translate-x-1/2 xl:left-3 2xl:left-14'>
                    <div className='flex 2xl:flex-col xl:flex-col flex-row 2xl:gap-4 xl:gap-4 gap-3'>
                        {[0, 1, 2].map((index) => (
                            <div
                                key={index}
                                className={`w-6 h-6 rounded-full bg-transparent pointer-events-auto ${activeIndex === index ? 'border-red-600 border' : 'border-none'
                                    } relative`}
                            >
                                <button
                                    onClick={() => handleSlideChange(index)}
                                    aria-label={index}
                                    className={`2xl:w-4 2xl:h-4 xl:w-4 xl:h-4 w-2 h-2 rounded-full transition-all cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${activeIndex === index ? 'bg-red-700' : 'bg-white'
                                        }`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
};

export default Banner;