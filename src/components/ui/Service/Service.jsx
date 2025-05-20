import dynamic from 'next/dynamic';
const SlideRight = dynamic(() => import('@/components/Animations/SlideRight'), { ssr: false });
import Link from 'next/link';
import Title from '@/components/Shared/Title/Title';
import ButtonPrimary from '@/components/Buttons/ButtonPrimary';
import Service1 from '@/components/icons/Service-1';
import Service2 from '@/components/icons/Service2';
import Service3 from '@/components/icons/Service3';
import Service4 from '@/components/icons/Service4';
import { poppins } from '@/components/fonts/Poppins';

export default function Service () {
    return (
        <div className="2xl:w-[1150px] xl:w-[1150px] sm:w-[90%] w-[90%] mx-auto flex 2xl:flex-row xl:flex-row flex-col gap-16 2xl:items-center xl:items-center items-start 2xl:py-16 xl:py-16 py-10">
            {/* Description of services */}
            <div>
                {/* Title */}
                <Title
                    head={<>Our Expertise</>}
                    details={<>Some Of The
                        <br />  Services We Offer</>}
                />
                <p className="text-base text-[#777] font-light my-7 leading-7">Call Center Services International’s <br />management team has over 35-years of <br /> expertise in successfully establishing U.S.</p>
                {/* Button */}
                <Link href={'/search/exclusive-leads'}>
                    <ButtonPrimary label={'Get Exclusive Leads'} />
                </Link>
            </div>
            {/* Card Section */}
            <div className="flex-1 w-full">
                <SlideRight amount={0.1}>
                    {/* Services */}
                    <div className="2xl:h-[878px] xl:h-[878px] grid 2xl:grid-cols-2 xl:grid-cols-2 2xl:grid-rows-2 xl:grid-rows-2 gap-x-8 2xl:gap-y-0 xl:gap-y-0 gap-y-8 sm:grid-cols-1 sm:grid-rows-4 grid-cols-1 grid-rows-4">
                        {/* It Support */}
                        <div className="relative 2xl:pt-10 xl:pt-10 pt-0">
                            <div className="shadow-[0_0_10px_rgba(0,0,0,0.2)] h-[384px] flex flex-col services">
                                <div className="w-fit h-fit m-auto">
                                    <Service1 />
                                    <div className="mt-7 space-y-6">
                                        <h3 className={`text-xl ${poppins.className} font-medium`}>IT Development</h3>
                                        <p className="text-base text-[#777] font-light leading-7 service-text">Professional Web Solutions and <br /> Support Services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Lead Generation */}
                        <div className="2xl:pt-3 xl:pt-3 pt-0">
                            <div className="shadow-[0_0_10px_rgba(0,0,0,0.2)] h-[384px] flex flex-col services">
                                <div className="w-fit h-fit m-auto">
                                    <Service2 />
                                    <div className="mt-7 space-y-6">
                                        <h3 className={`text-xl ${poppins.className} font-medium`}>Lead Generation</h3>
                                        <p className="text-base text-[#777] font-light leading-7 service-text">Improve direct response time,<br /> increase</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Appointment Setting Service */}
                        <div className="z-10 relative 2xl:pt-7 xl:pt-7 pt-0">
                            <div className="shadow-[0_0_10px_rgba(0,0,0,0.2)] h-[384px] flex flex-col services">
                                <div className="w-fit h-fit m-auto">
                                    <Service3 />
                                    <div className="mt-7 space-y-6">
                                        <h3 className={`text-xl ${poppins.className} font-medium`}>Appointment Setting</h3>
                                        <p className="text-base text-[#777] font-light leading-7 service-text">Exclusive Appointment Setting for <br /> Janitorial Services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Digital Marketing */}
                        <div className="relative">
                            <div className="shadow-[0_0_10px_rgba(0,0,0,0.2)] h-[384px] flex flex-col services">
                                <div className="w-fit h-fit m-auto">
                                    <Service4 />
                                    <div className="mt-7 space-y-6">
                                        <h3 className={`text-xl ${poppins.className} font-medium`}>Digital Marketing</h3>
                                        <p className="text-base text-[#777] font-light leading-7 service-text">Expert SEO and Digital Marketing <br /> Services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SlideRight>
            </div>
        </div>
    )
}