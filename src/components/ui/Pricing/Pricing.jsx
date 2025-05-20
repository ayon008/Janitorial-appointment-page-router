import Link from 'next/link';
import TickCircle from './TickCircle';
// import PaymentLink from './PaymentLink';
import ButtonPrimary from '../Shared/Buttons/ButtonPrimary';

const pricingPlans = [
    {
        title: "Free",
        description: "Free To Start",
        price: "$0",
        priceUnit: "/year",
        features: [
            "View 1 cleaning opportunity per 30 days.",
            "Find contact information for decision makers.",
            "Find contact information for local businesses.",
            "Cleaning opportunities sent to your inbox.",
        ],
        buttonLabel: "Start Now",
        buttonclassName: "btn-outline hover:bg-green-700 hover:text-white",
        containerclassName: "bg-white",
        priceclassName: "text-6xl font-bold",
        priceUnitclassName: "text-gray-500 font-semibold text-base",
        descriptionclassName: " text-xs font-normal",
        register: '/register'
    },
    {
        title: "Professional Plan",
        description: "Advanced Features for Power Users",
        price: "$70",
        priceUnit: "/year",
        discount: "Saved 20%! Annual Billing",
        features: [
            "View unlimited cleaning opportunities.",
            "Contact information for decision makers and local businesses.",
            "10% off all leads!",
            "Instant Notifications when anyof leads are uploaded"
        ],
        buttonLabel: "Start Now",
        buttonclassName: "text-black bg-white hover:bg-green-700 hover:text-white",
        containerclassName: "bg-[#1D1D1D]",
        priceclassName: "text-6xl font-bold text-white",
        priceUnitclassName: "font-semibold text-base text-white",
        descriptionclassName: " text-xs font-normal text-white",
        paymentLink: process.env.NEXT_PUBLIC_STRIPE_YEARLY_LINK
    },
    {
        title: "Essential Plan",
        description: "Affordable and Reliable",
        price: "$50",
        priceUnit: "/bi-annually",
        discount: "Billed every 6 months",
        features: [
            "View unlimited cleaning opportunities.",
            "Contact information for decision makers and local businesses.",
            "10% off all Exclusive Leads!",
            "Instant Notifications when an Exclusive Lead or LayUp is posted."
        ],
        buttonLabel: "Start Now",
        buttonclassName: "btn-outline hover:bg-green-700 hover:text-white",
        containerclassName: "bg-white",
        priceclassName: "text-6xl font-bold",
        priceUnitclassName: "text-gray-500 font-semibold text-base",
        descriptionclassName: " text-xs font-normal",
        paymentLink: process.env.NEXT_PUBLIC_STRIPE_BI_ANNUALLY_LINK
    }
];

const Pricing = () => {
    return (
        <div className='md:px-10 px-6 grid md:grid-cols-3 grid-cols-1 gap-6 2xl:mt-20 xl:mt-20 mt-10'>
            {pricingPlans.map((plan, index) => (
                <div key={index} className={`rounded-[30px] py-12 px-10 ${plan.containerclassName} flex flex-col`}>
                    <h2 className={`text-2xl font-medium  ${plan.containerclassName === 'bg-white' ? '' : 'text-white'}`}>{plan.title}</h2>
                    <small className={` text-xs font-normal ${plan.containerclassName === 'bg-white' ? '' : 'text-white'}`}>{plan.description}</small>
                    <div className='mt-10'>
                        <small className={` text-xs font-normal ${plan.containerclassName === 'bg-white' ? '' : 'text-white'}`}>Starting from</small>
                        <div>
                            <span className={` ${plan.priceclassName} inter`}>{plan.price}</span>
                            <span className={` ${plan.priceUnitclassName}`}>{plan.priceUnit}</span>
                        </div>
                        {plan.discount && <p className={`text-sm  ${plan.containerclassName === 'bg-white' ? '' : 'text-white'}`}>{plan.discount}</p>}
                    </div>
                    <div className='my-7 space-y-6'>
                        {plan.features.map((feature, index) => (
                            <div key={index} className='flex items-center gap-2'>
                                <TickCircle />
                                <p className={`text-base  font-normal ${plan.containerclassName === 'bg-white' ? '' : 'text-white'}`}>{feature}</p>
                            </div>
                        ))}
                    </div>
                    {/* <div className='mt-auto mx-auto'>
                        {index !== 0 ? <PaymentLink plan={plan} link={`${plan.paymentLink}`} register={index} /> : <Link href={`/login`}> <ButtonPrimary label={'Start Now'} /></Link>}
                    </div> */}
                </div>
            ))}
        </div>
    );
};

export default Pricing;
