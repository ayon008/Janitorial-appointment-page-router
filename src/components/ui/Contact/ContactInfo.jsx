
import Image from 'next/image';
import Link from 'next/link';
import whatsapp from '@/../public/assets/New Project.jpg';
import image from '@/../public/assets/contact-us-janitorial-appointments.jpg';
import fb from '@/../public/assets/Frame (8).svg';
import linked from '@/../public/assets/Frame (11).svg';
import twitt from '@/../public/assets/Frame (12).svg';
import FaEmail from '@/components/icons/FaEmail';
import { gilroy } from '@/components/fonts/Gilroy';

const ContactInfo = () => {
    const message = encodeURIComponent('Hello! I would like to inquire about your commercial cleaning leads.');

    return (
        <div className="px-10 grid 2xl:grid-cols-2 xl:grid-cols-2 items-center 2xl:justify-between xl:justify-between justify-center">
            <div className="w-full h-auto">
                <Image src={image} alt='Contact Us - Janitorial Appointment' className='w-full h-auto' height={400} width={600} />
            </div>

            <div className="space-y-8">
                <div className='flex items-center justify-center flex-row-reverse gap-10'>
                    <FaEmail size={'4rem'} color='#006600' />
                    <h1 className='text-[#006600] 2xl:text-5xl xl:text-3xl text-2xl font-semibold'>Contact Us</h1>
                </div>
                <p className='w-fit mx-auto'>
                    <a
                        href="mailto:contact@janitorialappointment.com"
                        aria-label="Send an email to contact@janitorialappointment.com"
                        className={`font-normal text-center text-xl ${gilroy.className}`}
                    >
                        contact@janitorialappointment.com
                    </a>
                </p>
                <div>
                    <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 grid-cols-2 2xl:gap-8 xl:gap-8 gap-6 justify-center items-center">
                        <div>
                            <Link href="https://www.facebook.com/commercialcleaningleads/" target="_blank"
                                aria-label="Follow us in Facebook"
                            >
                                <Image className="cursor-pointer w-full" src={fb} alt="Facebook" />
                            </Link>
                        </div>
                        <div>
                            <Link href="https://www.linkedin.com/company/janitorial-appointments-commercial-cleaning-leads/about/?viewAsMember=true" target="_blank"
                                aria-label="LinkedIn"
                            >
                                <Image className="cursor-pointer w-full" src={linked} alt="LinkedIn" />
                            </Link>
                        </div>
                        <div className=''>
                            <Link href="https://x.com/cleaningleads12" target="_blank"
                                aria-label="Follow us in twitter"
                                className='w-full h-full'
                            >
                                <Image className="cursor-pointer w-full" src={twitt} alt="Twitter" />
                            </Link>
                        </div>
                        <div className='h-full'>
                            <Link
                                href={`https://wa.me/${+8801568868704}?text=${message}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Chat with us on WhatsApp"
                                className="border border-[#DDDDDD] rounded-lg flex flex-col h-full"
                            >
                                <Image className="cursor-pointer w-full bg-white" src={whatsapp} alt="Whatsapp" />
                            </Link>
                        </div>
                    </div>
                </div>
                <p className="text-lg text-center">
                    With your specific requirements, we can accurately determine the category of janitorial jobs you are prepared to handle!
                </p>
            </div>
        </div>
    );
};

export default ContactInfo;
