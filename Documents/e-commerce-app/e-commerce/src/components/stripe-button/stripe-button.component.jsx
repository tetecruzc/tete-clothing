import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 200;
    const publishableKey = 'pk_test_XYJK2fsPSkGrg8kUXWFTFBIq00FF21wXwN';

    const ontoken = token =>{
        console.log(token);
        alert('Payment Succesful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Tete Clothing'
            billingAddress
            shippingAddress 
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={ontoken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;