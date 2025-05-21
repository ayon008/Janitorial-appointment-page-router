import ButtonTertiary from "@/components/Buttons/ButtonTertiary";
import { poppins } from "@/components/fonts/Poppins";
import Appointment from "@/components/Shared/Appointment/Appointment";
const UserReview = dynamic(() => import('@/components/Shared/Review/UserReview'), {
  ssr: false, // optional: disables server-side rendering if needed
  loading: () => <p>Loading...</p>, // optional: fallback UI while loading
});
import Title from "@/components/Shared/Title/Title";
import Banner from "@/components/ui/Home/Banner";
import Stepper from "@/components/ui/Home/Steper";
import Pricing from "@/components/ui/Pricing/Pricing";
import dynamic from 'next/dynamic';

const Service = dynamic(() => import('@/components/ui/Service/Service'), {
  loading: () => <p>Loading Service...</p>,
  ssr: false, // Optional: disable SSR if the component relies on the browser
});

const ServiceImage = dynamic(() => import('@/components/ui/Service/ServiceImage'), {
  loading: () => <p>Loading Image...</p>,
  ssr: false, // Optional
});

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative">
        {/* Banner */}
        <Banner />

        {/* Book an appointment */}
        <div className="absolute 2xl:-bottom-[150px] xl:-bottom-[150px] -bottom-[450px] w-full right-0 left-0">
          <div className="2xl:w-[1150px] xl:w-[1150px] w-[90%] mx-auto">
            {/* Appointment form */}
            <Appointment />
          </div>
        </div>
      </div>
      {/* Rest of the section */}
      <div className="mt-[470px] 2xl:mt-60 xl:mt-60">
        {/* About Us section for call center */}
        <div className="2xl:py-20 xl:py-20 py-10 2xl:w-[1150px] xl:w-[1150px] w-[90%] mx-auto grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 items-center 2xl:gap-0 xl:gap-0 gap-8">
          {/* Text side */}
          <div>
            {/* Section Title*/}
            <Title
              head={<>About Us</>}
              details={<>World Class <br />Janitorial Lead <br /> Generator</>}
            />
            <p className="text-base text-[#777] font-light mt-7">Our agents are fully bilingual, bi-cultural, well educated <br /> and have expertise in a wide array of business functions <br /> such as Debt Collection, Customer Service.</p>
            <div className="mt-6 2xl:w-[75%] xl:w-[75%] w-full">
              {/* Progress Type (Customer Service) */}
              <div className="flex items-center justify-between mb-4">
                <p className={`text-base font-light ${poppins.className}`}>Customer Service</p>
                <p className={`text-base font-light ${poppins.className}`}>85%</p>
              </div>
              {/* Progress Bar Customer Service */}
              <progress className="progress progress-secondary w-full" value="85" max="100"></progress>

              {/* Progress Type (Lead Generation) */}
              <div className="mt-6 flex items-center justify-between mb-4">
                <p className={`text-base font-light ${poppins.className}`}>Sales / Lead Generation</p>
                <p className={`text-base font-light ${poppins.className}`}>90%</p>
              </div>

              {/* Progress Bar Lead Generation */}
              <progress className="progress w-full progress-primary" value="90" max="100"></progress>
            </div>
            <div className="mt-12">
              <Link href={'/about'}>
                <ButtonTertiary label={'Learn More'} />
              </Link>
            </div>
          </div>
          {/* Images */}
          <ServiceImage />
        </div>

        {/* How to get Started */}

        <div className="bg-[#F8F8F8] 2xl:my-20 xl:my-20 my-10 2xl:py-32 xl:py-32 py-16">
          <div className="2xl:w-[1150px] xl:w-[1150px] w-[90%] mx-auto">
            <Title
              head={<>Four easy steps</>}
              details={<>How To Get <br /> Started</>}
            />
            {/* Step Part */}
            <Stepper />
          </div>
        </div>

        {/* Our Services */}
        <Service />

        {/* Reviews */}
        <div className="my-16">
          <UserReview />
        </div>
        {/* Pricing */}
        <div id="pricing" className="max-w-[1150px] mx-auto mb-20 mt-28">
          <Pricing />
        </div>

      </div>
    </>
  );
}
