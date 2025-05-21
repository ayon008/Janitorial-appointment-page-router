import { gilroy } from "@/components/fonts/Gilroy";

const SectionTitles = ({ heading, subHeading }) => {
    return (
        <section className='text-center'>
            <h1 className={`2xl:text-6xl xl:text-5xl text-3xl font-normal ${gilroy.className} mb-6`}>{heading}</h1>
            <p className='2xl:w-[80%] 2xl:mx-auto xl:w-[80%] xl:mx-auto w-full  font-normal 2xl:text-lg xl:text-base text-xs'>{subHeading}</p>
        </section>
    );
};

export default SectionTitles;