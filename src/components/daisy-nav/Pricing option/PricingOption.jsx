import React, { use } from 'react';
import PricingCard from '../../Pricing card/PricingCard';
import DaisyPricindCard from '../../DaisyPricingCard/DaisyPricindCard';

const PricingOption = ({ PricingPromise }) => {

    const PricingData = use(PricingPromise)
    console.log(PricingData);

    return (
        <div className="border border-gray-400 p-7 rounded-md" >
            <h3 className='text-5xl'>Get our premeum membership</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {/* {
                    PricingData.map(PricingInfo => <PricingCard key={PricingInfo.id} PricingInfo={PricingInfo}></PricingCard>)
                } */}
                {
                    PricingData.map(pricing => <DaisyPricindCard
                        key={pricing.id}
                        pricing={pricing}>
                    </DaisyPricindCard>)
                }
            </div>
        </div>
    );
};

export default PricingOption;