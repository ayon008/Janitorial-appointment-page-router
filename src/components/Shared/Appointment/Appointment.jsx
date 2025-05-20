import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Image from 'next/image';
import appointment from '@/../public/assets/appointment-bg-1-1_result_result.webp'
import { gilroy } from '@/components/fonts/Gilroy';


const Appointment = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const router = useRouter();
    const onSubmit = async (data) => {
        // Show loading alert
        const Swal = (await import('sweetalert2')).default;

        Swal.fire({
            title: 'Processing...',
            text: 'Please wait while we set up your appointment.',
            allowOutsideClick: false,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });


        try {
            // Simulate an API request with a delay
            if (typeof window !== 'undefined') {
                const email = localStorage.setItem('email', data.email);
                const name = localStorage.setItem('name', data.name);
                const it = localStorage.setItem('it', data.service);
                setTimeout(() => {
                    Swal.close();
                    router.push('/book-an-appointment');
                }, 1000)
            }

        } catch (error) {
            console.log(error);
            // Show error alert in case of failure
            Swal.fire({
                icon: 'error',
                title: 'Something Went Wrong!',
                text: 'Please try again later.',
                confirmButtonColor: '#FF6F61',
            });
        }
    };

    return (
        <div className='relative z-40'>
            <Image src={appointment} width={1150} height={350} sizes="(max-width: 768px) 60vw, 100vw" priority alt='book-an-appointment' className='absolute h-full w-full right-0 left-0 inset-0 z-20' />
            <div className="relative z-30 p-10">
                <h1
                    className={`${gilroy.className} text-white font-semibold 2xl:text-4xl xl:text-4xl text-2xl`}
                >
                    Book Appointment
                </h1>
                <p
                    className={`${gilroy.className} text-white font-normal 2xl:text-lg xl:text-lg text-base mt-1 text-opacity-70`}
                >
                    Set an appointment with us
                </p>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex items-center justify-between 2xl:flex-row xl:flex-row flex-col gap-4 my-8">
                        {/* Name Field */}
                        <div className="w-full">
                            <input
                                type="text"
                                placeholder="Your Name"
                                {...register('name', { required: 'Name is required' })}
                                className="input input-bordered rounded-none w-full bg-[#645CFF] !py-3 !p-3 book-appointment text-white"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div className="w-full">
                            <input
                                type="email"
                                placeholder="Your Email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value:
                                            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: 'Enter a valid email address',
                                    },
                                })}
                                className="input input-bordered rounded-none w-full bg-[#645CFF] !py-3 !p-3 book-appointment text-white"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Service Selection */}
                        <div className="w-full">
                            <label for="service" className="sr-only">Choose a Service</label>
                            <select
                                aria-label="Choose a Service"
                                {...register('service', { required: 'Please select a service' })}
                                className="select select-bordered rounded-none w-full bg-[#645CFF] py-3 book-appointment text-white"
                            >
                                <option value="" disabled defaultValue={'Choose Type'} selected>
                                    Choose Type
                                </option>
                                <option value='Janitorial Appointment'>Janitorial Leads</option>
                                <option value='It'>IT Support</option>
                            </select>
                            {errors.service && (
                                <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex 2xl:items-center xl:items-center items-start 2xl:flex-row xl:flex-row flex-col 2xl:justify-between xl:justify-between justify-start gap-4">
                        <p
                            className={`${gilroy.className} text-white font-normal 2xl:text-lg xl:text-lg text-base mt-1 text-opacity-70`}
                        >
                            Our team will reach you at your desired time
                        </p>
                        <button type='submit' className="bg-[#E0E0E0] btn border-none hover:text-white text-black border border-black hover:bg-[#20DFE3]">
                            Get Appointment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Appointment;
