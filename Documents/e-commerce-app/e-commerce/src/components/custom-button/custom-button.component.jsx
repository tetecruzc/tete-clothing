import React from 'react';

import '/Users/Tete/Documents/e-commerce-app/e-commerce/src/components/custom-button/custom-buttom.styles.scss';

const CustomButton = ({children,...otherProps}) =>(
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
);

export default CustomButton;