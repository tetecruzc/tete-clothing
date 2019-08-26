import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden,itemcount}) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemcount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});


/*const mapStateToProps = ({ cart: {cartItems} }) =>({
   itemcount: cartItems.reduce((accumulatedquantity,cart)=>accumulatedquantity+cart.quantity,0)
}); // esto se llama , se renderiza, cada vez que un estado es llamado por lo que no es muy eficiente. Es decir se llama a esta funcion aunque este estado no cambie. Por lo que usaremos memoized selector (../../redux/cart/cart.selectors.js)
*/

const mapStateToProps = (state) =>({
    itemcount: selectCartItemsCount(state)
}); 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);