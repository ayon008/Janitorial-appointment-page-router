import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import dynamic from 'next/dynamic'
const NavItems = dynamic(() => import('./NavItems'), { ssr: false });
const NavUser = dynamic(() => import('./NavUser'), { ssr: false });
const NavMobile = dynamic(() => import('./NavMobile'), { ssr: false });
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/../public/assets/Blue_and_White_Simple_Cleaning_Services_Logo-removebg-preview-1.png'
import { poppins } from '@/components/fonts/Poppins';


export const Logo = () => {
    return (
        <Link href={'/'} className='bg-transparent w-[140px] flex items-center'>
            <Image src={logo} className='w-[50px]' alt='janitorial-appointment-logo' />
            <p className={`${poppins.className} font-light text-lg text-white`}>Janitorial <br /> Appointments</p>
        </Link>
    )
}

const Navbar = () => {
    // User Token
    const token = Cookies.get('userToken');
    const [isSeller, setSeller] = useState(false);
    const [isAdmin, setAdmin] = useState(false);

    // Nav Links
    const Services = [
        { name: 'Decision Maker', href: '/decision-maker' },
        { name: 'Single Decision Maker', href: '/single-decision-maker' },
        { name: 'Cleaning Calculator', href: '/cleaning-calculator' },
        { name: 'Web & App Support', href: '/other-services' },
    ]

    const Leads = [
        { name: 'Exclusive Leads', href: '/search/exclusive-leads' },
        { name: 'Opportunities', href: '/search/opportunities' },
        { name: 'Lay Ups', href: '/search/layUps' },
    ];

    let UserDetails = [
        { name: 'Profile', href: '/profile' },
        { name: 'Dashboard', href: '/dashboard' },
        isSeller && { href: '/sellerDashboard', name: 'Seller dashboard' },
        isAdmin && { href: '/adminDashboard', name: 'Admin dashboard' },
    ].filter(Boolean); // Remove falsy values




    // Token
    useEffect(() => {
        if (token) {
            const decoded = jwtDecode(token);
            const isSeller = decoded?.isSeller;
            const isAdmin = decoded?.isAdmin;

            if (isSeller) {
                setSeller(true);
            }
            if (isAdmin) {
                setAdmin(true);
            }
        }
    }, [token]);

    const [topPosition, setTopPosition] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                const scrollPosition = window.scrollY;
                if (scrollPosition > 90) {
                    setTopPosition(true);
                }
                else {
                    setTopPosition(false)
                }
            }
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }

    }, [])

    return (
        <div className={`w-full transition-all duration-500 ease-in-out 2xl:h-[100px] xl:h-[100px] h-[80px] ${!topPosition ? 'absolute bg-transparent' : 'fixed bg-[#212121]'} inset-0 left-0 right-0 top-0 z-[100] `}>
            <div className='text-white items-center justify-between max-w-[1150px] mx-auto relative 2xl:h-[100px] xl:h-[100px] 2xl:flex xl:flex hidden 2xl:py-10 xl:py-10'>
                <Logo />
                {/* Nav Items */}
                <div className="w-fit mx-auto">
                    <ul className={`flex navItems items-center justify-between gap-6 ${poppins.className}`}>
                        <NavItems Services={Services} Leads={Leads} />
                    </ul>
                </div>
                {/* User Items */}
                <div className=''><NavUser UserDetails={UserDetails} /></div>
            </div>
            {/* Nav Mobile */}
            <div className='2xl:hidden xl:hidden h-[80px] flex items-center justify-between'>
                <Link className='h-[80px]' href={'/'}>
                    <div className='absolute top-0 2xl:left-11 xl:left-11 md:left-11 left-2'>
                        <div className='nav-start shadow-xl mt-3'>
                            <Logo />
                        </div>
                    </div>
                </Link>
                <NavMobile UserDetails={UserDetails} Services={Services} Leads={Leads} />
            </div>
        </div>
    );
};

export default Navbar;