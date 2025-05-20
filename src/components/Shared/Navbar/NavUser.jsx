
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import useAuth from '@/hooks/useAuth';
const ButtonPrimary = dynamic(() => import('@/components/Buttons/ButtonPrimary'), { ssr: false });
const Option = dynamic(() => import('./NavItems').then((mod) => mod.Option), { ssr: false });


const NavUser = ({ UserDetails }) => {
    const [mouse2, setMouse2] = useState(false);
    // const { user, logOut } = useAuth();
    const authInfo = useAuth();
    const user = authInfo?.user;
    const logOut = authInfo?.logOut
    const userName = user?.displayName;
    const firstLetter = userName && userName[0]?.toUpperCase();
    const pathname = usePathname();
    const handleLogOut = () => {
        logOut();
    }


    return (
        <div className='2xl:flex xl:flex items-center gap-6'>
            {
                user ? <div className="flex items-center gap-2">
                    <div className="md:w-[32px] relative md:h-[32px] w-[20px] h-[20px] rounded-full bg-primary text-white">
                        <span className="absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2 md:text-base text-xs font-normal">{firstLetter}</span>
                    </div>
                    <div className='relative' onMouseEnter={() => setMouse2(true)} onMouseLeave={() => setMouse2(false)}>
                        <div
                            className={`2xl:text-xl xl:text-base 2xl:h-[60px] xl:h-[60px] text-sm font-semibold h-full hover-color group flex gap-[2px] ${pathname === '/services' ? 'text-orange' : ''}`}>
                            <span className='my-auto 2xl:text-base xl:text-sm text-sm group-hover:text-orange transition-all duration-100 '>{userName?.length < 20 ? userName : userName?.slice(0, 16)}...</span>
                        </div>
                        <ul
                            className={`w-[350px] pt-10 px-10 pb-6 absolute top-[60px] bg-white right-0 shadow-xl 
                ${mouse2 ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
                transition-all duration-500 ease-in-out`}
                            style={{
                                visibility: mouse2 ? 'visible' : 'hidden', // Ensure visibility control
                            }}
                        >
                            {
                                UserDetails?.map((s, i) => <li key={i} className='border-b-[0.60px] parent-option border-opacity-30 border-b-gray '>
                                    <Option href={s.href}>{s.name}</Option>
                                </li>)
                            }
                            <li onClick={() => handleLogOut()} className='border-b-[0.60px] parent-option border-opacity-30 border-b-gray cursor-pointer text-black'>
                                <Option>Log Out</Option>
                            </li>
                        </ul>
                    </div>
                </div>
                    :
                    <>
                        <Link href={'/login'}><button className="font-semibold text-xs md:text-base">Sign In</button></Link>
                        <Link href={'/register'}>
                            <ButtonPrimary label={'Get Started Free'} />
                        </Link>
                    </>
            }
        </div>
    );
};

export default NavUser;