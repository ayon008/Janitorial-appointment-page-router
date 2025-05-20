
import DropDown from '@/components/icons/DropDown';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

// Option
export const Option = ({ children, arr, show, href }) => {
    return (
        <div className="py-3 pointer-events-auto w-full">
            <span className='flex items-center group'>
                <span className='group-hover:w-[18px] w-[0px] group-hover:mr-2 transition-all duration-300 h-[4px] bg-orange'></span>
                <Link href={`${href ? href : ''}`}>
                    <span className="text-black group-hover:text-orange font-light">
                        {children}
                    </span>
                </Link>
            </span>
        </div>

    )
}

const NavItems = ({ Services, Leads }) => {
    const pathname = useRouter();
    const [mouse, setMouse] = useState(false);
    const [mouse1, setMouse1] = useState(false);

    return (
        <>
            <li className={`2xl:text-base xl:text-base text-sm font-light hover:text-orange transition-all duration-100 ${pathname === '/' ? 'text-orange' : ''}`}>
                <Link href={'/'}>Home</Link>
            </li>
            <li className={`2xl:text-base xl:text-base text-sm font-light hover:text-orange transition-all duration-100 ${pathname === '/about' ? 'text-orange' : ''}`}>
                <Link href="/about">About</Link>
            </li>
            <li className={`2xl:text-base xl:text-base text-sm font-light hover:text-orange transition-all duration-100 ${pathname === '/blogs' ? 'text-orange' : ''}`}>
                <Link href="/blogs">Blogs</Link>
            </li>
            <li className="relative" onMouseEnter={() => setMouse(true)} onMouseLeave={() => setMouse(false)}>
                <div
                    className={`2xl:text-xl xl:text-base 2xl:h-[60px] xl:h-[60px] text-sm font-light h-full hover-color group flex gap-[2px] ${pathname === '/services' ? 'text-orange' : ''}`}>
                    <span className="my-auto 2xl:text-base xl:text-base text-sm group-hover:text-orange transition-all duration-100">Services</span>
                    <div className="h-fit my-auto">
                        <DropDown />
                    </div>
                </div>

                {/* Dropdown menu */}
                <ul
                    className={`w-[350px] pt-10 px-10 pb-6 absolute top-[60px] bg-white left-0 shadow-2xl transition-all duration-500 ease-in-out 
  ${mouse ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-auto'} `}
                    style={{
                        visibility: mouse ? 'visible' : 'hidden', // Ensure visibility control
                    }}
                >
                    {Services?.map((s, i) => (
                        <li
                            key={i}
                            className={`border-b-[0.60px] border-opacity-30 border-b-gray relative`}
                        >
                            <Option href={`${s?.href}`}>{s.name}</Option>
                        </li>
                    ))}
                </ul>


            </li>

            <li className='relative' onMouseEnter={() => setMouse1(true)} onMouseLeave={() => setMouse1(false)}>
                <div
                    className={`2xl:text-xl xl:text-base 2xl:h-[60px] xl:h-[60px] text-sm font-light h-full hover-color group flex gap-[2px] ${pathname === '/services' ? 'text-orange' : ''}`}>
                    <span className='my-auto 2xl:text-base xl:text-base text-sm group-hover:text-orange transition-all duration-100 '>Leads</span>
                    <div className='h-fit my-auto'>
                        <DropDown />
                    </div>
                </div>
                <ul
                    className={`w-[350px] pt-10 px-10 pb-6 absolute top-[60px] bg-white left-0 shadow-xl 
                ${mouse1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 '}
                transition-all duration-500 ease-in-out`}
                    style={{
                        visibility: mouse1 ? 'visible' : 'hidden', // Ensure visibility control
                    }}
                >
                    {
                        Leads?.map((s, i) => (
                            <li key={i} className='border-b-[0.60px] parent-option border-opacity-30 border-b-gray'>
                                <Option href={`${s?.href}`}>{s.name}</Option>
                            </li>
                        ))
                    }
                </ul>
            </li>
            <li className={`2xl:text-base xl:text-base text-sm font-light hover:text-orange transition-all duration-100 ${pathname === '/contact' ? 'text-orange' : ''}`}>
                <Link href="/contact">Contact</Link>
            </li>
            <li className={`2xl:text-base xl:text-base text-sm font-light hover:text-orange transition-all duration-100 ${pathname === '/contact' ? 'text-orange' : ''}`}>
                <Link href="/book-an-appointment">Appointment</Link>
            </li>
        </>
    );
};

export default NavItems;