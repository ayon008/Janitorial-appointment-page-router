import Image from 'next/image';
import cs1 from '@/../public/assets/testimonials_01.jpg'
import cs2 from '@/../public/assets/testimonial_03.jpg'
import cs3 from '@/../public/assets/testimonial_04.jpg'
import cs4 from '@/../public/assets/testimonial_05.jpg'
import cs5 from '@/../public/assets/testimonials_02.jpg'
import { FaQuoteLeft } from '@react-icons/all-files/fa/FaQuoteLeft';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import dynamic from 'next/dynamic';
const ParticlesComponent = dynamic(() => import('@/components/Animations/Particles'), {
    ssr: false,        // Must be false for client-only libs
    loading: () => null // Optional: can use a spinner or div here
});


const ReviewSwiper = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
    const handleSlideChange = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideToLoop(index);
        }
    };

    const BigSlide = ({ review, name, title, image }) => {
        return (
            <div className='p-10 bg-white w-full h-[420px] 2xl:block xl:block hidden'>
                <div className='w-[490px] flex items-start justify-between gap-10'>
                    <Image src={image} alt='Customer One' loading='lazy' height={340} className='w-[240px] h-[340px]' width={240} />
                    <div className='h-[300px] flex flex-col justify-between'>
                        <div className='w-fit ml-auto'>
                            <FaQuoteLeft color='red' size={'2.5rem'} />
                        </div>
                        <p className="text-base text-[#777] font-light leading-7 service-text">{review}</p>
                        <div className='space-y-2'>
                            <h3 className='text-2xl font-semibold text-black'>{name}</h3>
                            <p className="text-base text-[#777] font-light leading-7 service-text">{title}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    const SmallSlide = ({ review, name, title, image }) => {
        return (
            <div className='p-10 bg-white w-full h-[420px] 2xl:block xl:block hidden'>
                <div className='w-[190px]'>
                    <div className='h-[300px] flex flex-col justify-between w-full'>
                        <div className='w-fit ml-auto'>
                            <FaQuoteLeft color='red' size={'2.5rem'} />
                        </div>
                        <p className="text-sm text-[#777] font-light leading-7 service-text">{review}</p>
                        <div className='flex gap-2 items-center'>
                            <Image src={image} width={50} height={50} alt='customer 2' className='w-[50px] h-[50px] rounded-full' />
                            <div className='space-y-2'>
                                <h3 className='text-xl font-semibold text-black'>{name}</h3>
                                <p className="text-sm text-[#777] font-light leading-7 service-text">{title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    const MobileSlide = ({ name, title, image, review }) => {
        return (
            <div className='bg-white w-[370px] space-y-6 p-10 mx-auto 2xl:hidden xl:hidden block h-full'>
                <div className='w-fit ml-auto'>
                    <FaQuoteLeft color='red' size={'3.5rem'} />
                </div>
                <p className="text-sm text-[#777] font-light leading-7 service-text">{review}</p>
                <div className='flex gap-2 items-center'>
                    <Image src={image} width={50} height={50} alt="customer 3" className='w-[50px] h-[50px] rounded-full' />
                    <div className='space-y-2'>
                        <h3 className='text-xl font-semibold text-black'>{name}</h3>
                        <p className="text-sm text-[#777] font-light leading-7 service-text">{title}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='max-w-[1150px] mx-auto relative'>
            <Swiper
                ref={swiperRef}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                }}
                initialSlide={2}
                autoplay={{ delay: 3000 }}
                spaceBetween={20}
                slidesPerView={'auto'}
                breakpoints={{
                    0: {
                        slidesPerView: 1, // 👈 1 slide on all screen sizes below 640px
                    },
                    640: {
                        slidesPerView: 'auto', // 👈 auto on medium screens and up
                    }
                }}
                modules={[Pagination]}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="mySwiper review-items">

                <SwiperSlide className="2xl:!w-[570px] xl:!w-[570px] !w-full !h-[290px]">
                    <BigSlide image={cs1} name={<>Jane Smith</>} title={<>Manager</>} review={<>I just want to share a good quick note and let you know that you guys do a really good job</>} />
                    <MobileSlide image={cs1} name={<>Jane Smith</>} title={<>Manager</>} review={<>I just want to share a good quick note and let you know that you guys do a really good job</>} />
                </SwiperSlide>
                <SwiperSlide className="2xl:!w-[270px] xl:!w-[270px] !w-full !h-[290px]">
                    <SmallSlide image={cs4} name={<>Albert M. Doyle</>} title={<>CEO</>} review={<>You made it so simple.My new site is so much faster and easier work to with than my old.</>} />
                    <MobileSlide image={cs2} name={<>Albert M. Doyle</>} title={<>CEO</>} review={<>You made it so simple.My new site is so much faster and easier work to with than my old.</>} />
                </SwiperSlide>
                <SwiperSlide className="2xl:!w-[270px] xl:!w-[270px] !w-full !h-[290px]">
                    <SmallSlide image={cs2} name={<>Jacob B. Ginley</>} title={<>Manager</>} review={<>High-quality janitorial leads that actually convert—saved us tons of time.</>} />
                    <MobileSlide image={cs3} name={<>Jacob B. Ginley</>} title={<>Manager</>} review={<>High-quality janitorial leads that actually convert—saved us tons of time.</>} />
                </SwiperSlide>
                <SwiperSlide className="2xl:!w-[570px] xl:!w-[570px] !w-full !h-[290px]">
                    <BigSlide image={cs3} name={<>Devon Carter</>} title={<>Cleaning Business Owner</>} review={<>Great service! We closed three deals in the first week.</>} />
                    <MobileSlide image={cs4} name={<>Devon Carter</>} title={<>Cleaning Business Owner</>} review={<>Great service! We closed three deals in the first week.</>} />
                </SwiperSlide>
                <SwiperSlide className="2xl:!w-[270px] xl:!w-[270px] !w-full !h-[290px]">
                    <SmallSlide image={cs5} name={<>Angela Ramirez</>} title={<>Sales Director</>} review={<>Reliable appointments every week—no fluff, just results.</>} />
                    <MobileSlide image={cs5} name={<>Angela Ramirez</>} title={<>Sales Director</>} review={<>Reliable appointments every week—no fluff, just results.</>} />
                </SwiperSlide>
            </Swiper>
            <div className='absolute z-50 left-1/2 -translate-x-1/2'>
                <div className='2xl:flex xl:flex hidden flex-row 2xl:gap-4 xl:gap-4 gap-3'>
                    {[0, 1, 2].map((index) => (
                        <div
                            key={index}
                            className={`w-4 h-4 rounded-full bg-transparent pointer-events-auto ${activeIndex === index ? 'border-red-600 border' : 'border-none'
                                } relative`}
                        >
                            <button
                                onClick={() => handleSlideChange(index)}
                                aria-label={index}
                                className={`w-2 h-2 rounded-full transition-all cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${activeIndex === index ? 'bg-red-700' : 'bg-white'
                                    }`}
                            />
                        </div>
                    ))}
                </div>
                <div className='2xl:hidden xl:hidden flex flex-row 2xl:gap-4 xl:gap-4 gap-3'>
                    {[0, 1, 2, 3, 4].map((index) => (
                        <div
                            key={index}
                            className={`w-4 h-4 rounded-full bg-transparent pointer-events-auto ${activeIndex === index ? 'border-red-600 border' : 'border-none'
                                } relative`}
                        >
                            <button
                                onClick={() => handleSlideChange(index)}
                                aria-label={index}
                                className={`w-2 h-2 rounded-full transition-all cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${activeIndex === index ? 'bg-red-700' : 'bg-white'
                                    }`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const UserReview = () => {
    return (
        <div className="relative">
            {/* Background */}
            <ParticlesComponent id="particles" />
            {/* Swiper Reviews */}
            <div className="w-fit h-fit absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                <div className="space-y-5 mb-10">
                    <p className="text-white text-lg font-medium text-center">Testimonial</p>
                    <h3 className="text-white text-2xl font-bold text-center">What People Say About <br />Our Service</h3>
                </div>
                {/* Swiper */}
                <ReviewSwiper />
            </div>
        </div>
    )
}

export default UserReview;