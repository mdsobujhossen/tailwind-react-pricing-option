import React from 'react';
import PricingCardFeture from './PricingCardFeture';

const PricingCard = ({ PricingInfo }) => {
    const { name, price, description, features } = PricingInfo
    //     {
    //     "id": 1,
    //     "name": "Basic Plan",
    //     "price": 1500,
    //     "duration": "month",
    //     "description": "Good for beginners starting their fitness journey",
    //     "features": [
    //         "Access to gym equipment",
    //         "Locker facility",
    //         "1 hour daily access",
    //         "No trainer support",
    //         "Free warm-up area",
    //         "Basic fitness assessment (1 time)"
    //     ]
    // }
    return (
        <div className='flex flex-col border bg-amber-600 rounded-md p-4 space-y-3'>
            {/* cards header */}
            <div className='space-y-3'>
                <h3 className='text-4xl '>{name}</h3>
                <h5 className='text-xl font-bold text-slate-200'>{price}</h5>
            </div>
            {/* card body */}
            <div className='flex-1 p-4 border border-amber-500 bg-amber-500/50 rounded-md space-y-3'>
                <p className='text-2xl font-semibold'>{description}</p>
                <ul className='text-slate-300 space-y-3'>
                    {
                        features.map((feature, i) => <PricingCardFeture key={i} feature={feature}></PricingCardFeture>)
                    }
                </ul>
            </div>
            <button className="btn btn-wide w-full max-w-full bg-fuchsia-600">Subscribe</button>

        </div>
    );
};

export default PricingCard;