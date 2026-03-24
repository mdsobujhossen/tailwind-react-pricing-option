import { MapPinCheckInside } from 'lucide-react';
import React from 'react';

const PricingCardFeture = ({feature}) => {
    return (
        <li className='flex gap-2'> <MapPinCheckInside></MapPinCheckInside> {feature}</li>
    );
};

export default PricingCardFeture;