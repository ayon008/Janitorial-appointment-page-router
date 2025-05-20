import React from 'react';
import Facebook from '@/icons/Facebook';
import FaLinkedIn from '@/icons/FaLinkedIn';
import FaTwitter from '@/icons/FaTwitter';
import FaWhatsapp from '@/icons/FaWhatsapp';
import FaEmail from '@/icons/FaEmail';
// Nav Top Part
const NavComponent = () => {
    return (
        <div className='w-full 2xl:h-[60px] xl:h-[60px] h-0 hidden 2xl:flex xl:flex items-center justify-between bg-sky-200'>
            <div className='flex gap-4 items-center px-11 py-[12px]'>
                <h3 className='text-base'>Connect with us</h3>
                <div className='nav-start flex gap-1'>
                    <Facebook />
                    <FaLinkedIn />
                    <FaTwitter />
                    <FaWhatsapp />
                </div>
            </div>
            <div className='nav-end flex items-center gap-12 pe-6'>
                <div className='flex items-center gap-2'>
                    <FaEmail />
                    <p className='font-normal text-sm hover:text-deep-blue transition-colors duration-500 cursor-pointer'>
                        <a href="mailto:contact@janitorialappointment.com">contact@janitorialappointment.com</a>
                    </p>
                </div>
                {/* <div className='bg-deep-blue flex items-center gap-1 px-12 py-[18px]'>
                    <FaPhone />
                    <div className="phone-number">
                        <a href="tel:+8801568868704">
                            <span className="letter text-base font-semibold text-white animate__backOutDown">+8801568868704</span>
                        </a>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default NavComponent;