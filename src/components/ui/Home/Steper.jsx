import { poppins } from "@/components/fonts/Poppins";


const steps = [
    {
        number: '01',
        title: <>Setup Your <br /> Campaign</>,
        description: <>Name your Campaign and <br /> choose your country</>,
    },
    {
        number: '02',
        title: <>Get a Tracking <br /> Number</>,
        description: <>Get a unique Tracking Number <br /> where you can send calls</>,
    },
    {
        number: '03',
        title: <>Add a Target <br /> Line</>,
        description: <>Forward your calls to buyers or <br /> anywhere you’d like them to go</>,
    },
    {
        number: '04',
        title: <>Launch Your <br /> Campaign</>,
        description: <>Name your Campaign and <br /> choose your country</>,
    },
];

export default function Stepper() {
    return (
        <div className="relative w-full mt-5">
            {/* Desktop Part */}
            <div className="2xl:flex xl:flex hidden justify-between 2xl:items-center xl:items-center items-start relative">
                {/* Mapping all the details */}
                {steps.map((step, index) => (
                    <div key={index} className="relative z-10 space-y-6 flex-1">
                        {/* Step titles */}
                        <h3 className="font-semibold mt-4">{step.title}</h3>
                        <div className="w-full relative">
                            {/* Step Number */}
                            <div>
                                <div className={`w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center z-20 hover:scale-110 duration-300 transition-all ${poppins.className}`}>
                                    {step.number}
                                </div>
                            </div>
                            {/* Horizontal Line */}
                            <div className="absolute h-[2px] w-full bg-primary top-1/2 -translate-y-1/2 -z-10"></div>
                        </div>
                        {/* Description */}
                        <p className={`text-[#777] text-base ${poppins.className}`}>{step.description}</p>
                    </div>
                ))}
            </div>
            {/* Mobile Part */}
            <div className="2xl:hidden xl:hidden grid grid-rows-4 mt-10">
                {/* Mapping all the details */}
                {
                    steps.map((step, i) => {
                        return (
                            <div key={i} className="flex items-start gap-6 h-full">
                                <div className="relative h-full flex flex-col items-center">
                                    {/* Step Number in circle */}
                                    <div className={`w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center z-20 hover:scale-110 duration-300 transition-all ${poppins.className}`}>
                                        {step.number}
                                    </div>
                                    {/* Line */}
                                    <div className="w-[2px] absolute left-1/2 -translate-x-1/2 bottom-0 top-0 h-full bg-primary z-10">
                                    </div>
                                </div>
                                {/* Description */}
                                <div className={`space-y-4 ${i === 3 ? 'pb-0' : 'pb-8'}`}>
                                    <h3 className="font-semibold">{step.title}</h3>
                                    <p className={`text-[#777] text-base ${poppins.className}`}>{step.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
