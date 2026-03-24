import React from 'react';
import DaisyPricingCardFeature from './DaisyPricingCardFeature';

const DaisyPricindCard = ({pricing}) => {
    const {name,price,description,features} = pricing
    return (
        <div className="card w-96 bg-amber-600 shadow-sm">
            <div className="card-body flex flex-col">
                <span className="badge badge-xs badge-warning">Most Popular</span>
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{name}</h2>
                    <span className="text-xl">${price}/mo</span>
                </div>
                <h3 > {description}</h3>
                <ul className="flex-1 mt-6 flex flex-col gap-2 text-xs">
                    {
                        features.map((feature,i) => <DaisyPricingCardFeature key={i} feature={feature}></DaisyPricingCardFeature>)
                    }
                </ul>
                <div className="mt-6">
                    <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default DaisyPricindCard;