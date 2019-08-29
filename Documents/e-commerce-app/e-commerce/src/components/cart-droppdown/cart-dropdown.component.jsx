import React from 'react';

import './cart-dropdown.styles.scss';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems,history,dispatch}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            { cartItems.length ?
              (  cartItems.map(cart => <CartItem key={cart.id} item={cart}/>))
              : <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden()) // si no le pasamos otro parametro a connect tenemos acceso a varias propidades, entre ellas el dispatch, por lo que no hay que hacer el mapdispatchtoprops
            }}>
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

/*const mapStateToProps = ({cart: {cartItems}})=>({
    cartItems
}) ; */

const mapStateToProps = (state)=>({
    cartItems: selectCartItems(state)
}) ;
// podemos cambiarlo y usar createstructuredselector

export default withRouter(connect(mapStateToProps)(CartDropdown));