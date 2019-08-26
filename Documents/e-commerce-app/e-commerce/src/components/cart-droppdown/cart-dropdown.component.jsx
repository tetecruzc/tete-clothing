import React from 'react';

import './cart-dropdown.styles.scss';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors'
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cart => <CartItem key={cart.id} item={cart}/>)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

/*const mapStateToProps = ({cart: {cartItems}})=>({
    cartItems
}) ; */

const mapStateToProps = (state)=>({
    cartItems: selectCartItems(state)
}) ;
export default connect(mapStateToProps)(CartDropdown);