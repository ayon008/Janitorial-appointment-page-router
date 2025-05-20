

import dynamic from 'next/dynamic';
const ButtonPrimary = dynamic(() => import('@/components/Buttons/ButtonPrimary'), { ssr: false });
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '@/../public/assets/Blue_and_White_Simple_Cleaning_Services_Logo-removebg-preview-1.png'
import { usePathname } from 'next/navigation';
import { FaChevronDown } from "@react-icons/all-files/fa/FaChevronDown";
import { poppins } from '@/components/fonts/Poppins';
import useAuth from '@/hooks/useAuth';
const NavMobile = ({ UserDetails, Services, Leads }) => {
    const authInfo = useAuth();
    const user = authInfo?.user;
    const logOut = authInfo?.logOut
    const [nav, setNav] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [clicked1, setClicked1] = useState(false);
    const [clicked2, setClicked2] = useState(false);
    const pathname = usePathname();
    const userName = user?.displayName;
    // const firstLetter = user && userName[0];
    const firstLetter = 'A'
    const handleLogOut = () => {
        logOut();
        setNav(false);
    }

    const Logo = () => {
        return (
            <Link href={'/'} className='bg-transparent 2xl:w-[140px] xl:w-[140px] md:w-[140px] w-[100px] flex items-center'>
                <Image src={logo} className='w-[50px]' alt='janitorial-appointment-logo' />
                <p className={`${poppins.className} font-light text-lg text-black`}>Janitorial <br /> Appointments</p>
            </Link>
        )
    }


    return (
        <div>
            <div className="2xl:ml-0 xl:ml-0 ml-auto 2xl:hidden xl:hidden md:block block">
                <div className='flex items-center gap-3'>
                    {
                        !user &&
                        <Link href={'/login'}>
                            <ButtonPrimary label={'Sign In'} />
                        </Link>
                    }
                    <div className="btn btn-ghost btn-circle" onClick={() => setNav(true)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </div>
                    <div
                        className={`h-screen w-full bg-white overflow-y-auto overflow-x-hidden z-[1000] transition-all duration-500 ease-in-out fixed top-0 right-0 ${nav ? 'translate-x-0' : '-translate-x-[1000px]'
                            }`}
                    >
                        <span
                            onClick={() => setNav(false)}
                            className="absolute top-2 right-4 text-3xl cursor-pointer"
                        >
                            X
                        </span>
                        <div className="pt-10 px-10 pb-20 w-full">
                            {/*  */}
                            <div className='mt-6'>
                                <Logo />
                            </div>
                            <div className='mt-6'>
                                <ul className='pb-10'>
                                    {
                                        user &&
                                        <li className={`2xl:text-base xl:text-sm text-sm font-semibold hover:text-orange transition-all duration-100 cursor-pointer`} onClick={() => {
                                            setClicked(!clicked)
                                            setClicked1(false)
                                            setClicked2(false)
                                        }}>
                                            <div className='flex items-center justify-between border-b-[0.60px] border-b-black border-opacity-20 py-3'>
                                                <div className='flex items-center gap-2'>
                                                    <div className="md:w-[32px] relative md:h-[32px] w-[30px] h-[30px] rounded-full bg-primary text-white">
                                                        <span className="absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2 md:text-base text-xs font-normal">{firstLetter}</span>
                                                    </div>
                                                    <span className='my-auto'>{userName}...</span>
                                                </div>
                                                <div className='bg-slate-300 p-1 rounded bg-opacity-45'>
                                                    <div
                                                        className={`h-fit transition-transform duration-300 ease-in-out ${clicked ? 'rotate-180' : 'rotate-0'
                                                            }`}
                                                    >
                                                        <FaChevronDown size={14} />
                                                    </div>

                                                </div>
                                            </div>
                                            <>
                                                <div
                                                    className={`w-full overflow-hidden pl-4 transition-all duration-500 ease-in-out ${clicked ? 'h-[184px] pointer-events-auto' : 'h-0 pointer-events-none'
                                                        }`}
                                                >
                                                    {UserDetails?.map((a, i) => (
                                                        <p
                                                            key={i}
                                                            className="py-2 text-black hover:text-orange transition-all duration-300 ease-linear border-b-[0.60px] border-b-black border-opacity-20"
                                                            onClick={() => setNav(false)}
                                                        >
                                                            <Link href={`${a.href ? a.href : ''}`}>{a.name}</Link>
                                                        </p>
                                                    ))}
                                                    <p
                                                        onClick={() => handleLogOut()}
                                                        className="py-2 text-black hover:text-orange transition-all duration-300 ease-linear border-b-[0.60px] border-b-black border-opacity-20"
                                                    >
                                                        Log Out
                                                    </p>
                                                </div>

                                            </>
                                        </li>
                                    }
                                    <li className={`2xl:text-base xl:text-sm text-sm hover:text-orange transition-all duration-100 font-bold py-3 border-b-[0.60px] border-b-black border-opacity-20 ${pathname === '/' ? 'text-orange' : ''}`} onClick={() => setNav(false)}>
                                        <Link href={'/'}>Home</Link>
                                    </li>
                                    <li className={`2xl:text-base xl:text-sm text-sm font-semibold hover:text-orange py-3 border-b-[0.60px] border-b-black border-opacity-20 transition-all duration-100 ${pathname === '/about' ? 'text-orange' : ''}`} onClick={() => setNav(false)}>
                                        <Link href="/about">About</Link>
                                    </li>
                                    <li className={`2xl:text-base xl:text-sm text-sm font-semibold hover:text-orange py-3 border-b-[0.60px] border-b-black border-opacity-20 transition-all duration-100 ${pathname === '/about' ? 'text-orange' : ''}`} onClick={() => setNav(false)}>
                                        <Link href="/blogs">Blogs</Link>
                                    </li>
                                    <li onClick={() => {
                                        setClicked1(!clicked1)
                                        setClicked2(false)
                                        setClicked(false)
                                    }} className={`2xl:text-base xl:text-sm text-sm font-semibold hover:text-orange transition-all duration-100`}>
                                        <div className='flex items-center justify-between border-b-[0.60px] border-b-black border-opacity-20 py-3'>
                                            <div>
                                                Services
                                            </div>
                                            <div className='bg-slate-300 p-1 rounded bg-opacity-45'>
                                                <div
                                                    className={`h-fit transition-transform duration-300 ease-in-out ${clicked1 ? 'rotate-180' : 'rotate-0'
                                                        }`}
                                                >
                                                    <FaChevronDown size={14} />
                                                </div>

                                            </div>
                                        </div>
                                        <>
                                            <div
                                                className={`w-full overflow-hidden pl-4 transition-all duration-500 ease-in-out ${clicked1 ? 'h-[184px] pointer-events-auto' : 'h-0 pointer-events-none'
                                                    }`}
                                            >
                                                {Services?.map((a, i) => (
                                                    <p
                                                        key={i}
                                                        className="py-2 text-black hover:text-orange transition-all duration-300 ease-linear border-b-[0.60px] border-b-black border-opacity-20"
                                                        onClick={() => setNav(false)}
                                                    >
                                                        <Link href={`${a.href ? a.href : ''}`}>{a.name}</Link>
                                                    </p>
                                                ))}
                                            </div>

                                        </>
                                    </li>
                                    <li onClick={() => {
                                        setClicked2(!clicked2)
                                        setClicked1(false)
                                        setClicked(false)
                                    }} className={`2xl:text-base xl:text-sm text-sm font-semibold hover:text-orange transition-all duration-100`}>
                                        <div className='flex items-center justify-between border-b-[0.60px] border-b-black border-opacity-20 py-3'>
                                            <div>
                                                Leads
                                            </div>
                                            <div className='bg-slate-300 p-1 rounded bg-opacity-45'>
                                                <div
                                                    className={`h-fit transition-transform duration-300 ease-in-out ${clicked2 ? 'rotate-180' : 'rotate-0'
                                                        }`}
                                                >
                                                    <FaChevronDown size={14} />
                                                </div>

                                            </div>
                                        </div>
                                        <>
                                            <div
                                                className={`w-full overflow-hidden pl-4 transition-all duration-500 ease-in-out ${clicked2 ? 'h-[110px] pointer-events-auto' : 'h-0 pointer-events-none'
                                                    }`}
                                            >
                                                {Leads?.map((s, i) => (
                                                    <p
                                                        key={i}
                                                        className="py-2 text-black hover:text-orange border-b-[0.60px] border-b-black border-opacity-20 transition-all duration-300 ease-linear"
                                                        onClick={() => setNav(false)}
                                                    >
                                                        <Link href={`${s.href ? s.href : ''}`}>{s.name}</Link>
                                                    </p>
                                                ))}
                                            </div>
                                        </>
                                    </li>

                                    <li className={`2xl:text-base xl:text-sm text-sm hover:text-orange transition-all border-b-[0.60px] border-b-black border-opacity-20 text-black duration-100 font-bold py-3 ${pathname === '/contact' ? 'text-orange' : ''}`} onClick={() => setNav(false)}>
                                        <Link href="/contact">Contact</Link>
                                    </li>
                                    <li className={`2xl:text-base xl:text-sm text-sm hover:text-orange transition-all text-black duration-100 font-bold py-3 ${pathname === '/contact' ? 'text-orange' : ''}`} onClick={() => setNav(false)}>
                                        <Link href="/book-an-appointment">Appointment</Link>
                                    </li>
                                </ul>
                            </div >
                        </div >
                    </div >
                </div >
            </div >
        </div >
    );
};

export default NavMobile;