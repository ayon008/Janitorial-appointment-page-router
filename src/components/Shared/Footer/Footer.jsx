import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Logo } from "../Navbar/Navbar";
import { poppins } from "@/components/fonts/Poppins";
const DownAnimation = dynamic(() => import('@/components/Animations/DownAnimation'), {
    ssr: false, // Disable Server-Side Rendering (required for components using 'use client')
    loading: () => <></>, // Optional: fallback UI
});


const Footer = () => {
    const message = encodeURIComponent('Hello! I would like to inquire about your commercial cleaning leads.');
    return (
        <div className='2xl:h-[412px] xl:h-[412px] h-auto bg-[#1D1D1D] flex flex-col'>
            <footer className="footer sm:footer-horizontal text-base-content max-w-[1150px] m-auto h-fit 2xl:pt-0 xl:pt-0 2xl:pb-0 xl:pb-0 2xl:px-0 xl:px-0 px-6 pt-14 pb-20">
                <aside>
                    <DownAnimation>
                        <Logo />
                    </DownAnimation>
                </aside>
                <DownAnimation delay={0.3}>
                    <nav>
                        <Link href={'/book-an-appointment'}>
                            <h2 className={`${poppins.className} text-base font-light text-[#777] hover:text-red-500 transition-all duration-100 ease-linear`}>Appointment</h2>
                        </Link>
                        <div className='my-2'>
                            <Link href={'search/exclusive-leads'}>
                                <h2 className={`${poppins.className} text-base font-light text-[#777] hover:text-red-500 transition-all duration-100 ease-linear`}>Leads</h2>
                            </Link>
                        </div>
                        <Link href={'/blogs'}>
                            <h2 className={`${poppins.className} text-base font-light text-[#777] hover:text-red-500 transition-all duration-100 ease-linear`}>Blogs</h2>
                        </Link>
                        <div className="my-2">
                            <Link href={'/term&condition'}>
                                <h2 className={`${poppins.className} text-base font-light text-[#777] hover:text-red-500 transition-all duration-100 ease-linear`}>Terms & Condition</h2>
                            </Link>
                        </div>
                        <Link href={'/privacy'}>
                            <h2 className={`${poppins.className} text-base font-light text-[#777] hover:text-red-500 transition-all duration-100 ease-linear`}>Privacy Policy</h2>
                        </Link>
                    </nav>
                </DownAnimation>
                <DownAnimation delay={0.5}>
                    <nav>
                        <div>
                            <h2 className={`text-white ${poppins.className} text-base font-medium`}>Give Us a Call</h2>
                            <p className={`${poppins.className} text-base font-light text-[#777] hover:text-red-500 transition-all duration-100 ease-linear mt-3`}>880-15688-68704</p>
                        </div>
                        <div className='mt-3'>
                            <h2 className={`text-white ${poppins.className} text-base font-medium`}>Email Us</h2>
                            <p className={`${poppins.className} text-base font-light text-[#777] hover:text-red-500 transition-all duration-100 ease-linear mt-3`}><a href="mailto:contact@janitorialappointment.com">contact@janitorialappointment.com</a></p>
                        </div>
                    </nav>
                </DownAnimation>
                <DownAnimation delay={0.4}>
                    <nav>
                        <h2 className={`text-white ${poppins.className} text-base font-medium`}>Join Us</h2>
                        <div className="flex items-center gap-4 mt-3">
                            <Link className="hover:text-red-500" href={'https://www.facebook.com/commercialcleaningleads/'} aria-label="Visit our Facebook page" target='_blank'>
                                <FaFacebook color="#777" size={'1.5rem'} />
                            </Link>
                            <Link href={`https://wa.me/${+8801568868704}?text=${message}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Chat with us on WhatsApp"
                                className="hover:text-red-500"
                            >
                                <FaWhatsapp color="#777" size={'1.5rem'} />
                            </Link>
                            <Link href={'https://x.com/cleaningleads12'} className="hover:text-red-500" aria-label="Follow us on Twitter" target='_blank'>
                                <FaTwitter color="#777" size={'1.5rem'} />
                            </Link>
                        </div>
                    </nav>
                </DownAnimation>
            </footer>
            <aside>
                <p className="text-white text-center py-5 border-t-[1px] border-white hover:text-red-500 duration-100 transition-all">Copyright © {new Date().getFullYear()} - All right reserved by Shariar Ayon <a href="mailto:shariar.ayon128@gmail.com">(shariar.ayon128@gmail.com)</a></p>
            </aside>
        </div>
    );
};

export default Footer;