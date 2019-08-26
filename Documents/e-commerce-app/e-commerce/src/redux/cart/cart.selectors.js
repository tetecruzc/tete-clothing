import {createSelector} from 'reselect';

const selectCart = state =>state.cart; // esto es un input selector

export const selectCartItems = createSelector(
    [selectCart],
    (cart)=>cart.cartItems

);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems)=>cartItems.reduce((accumulatedquantity,cart)=>accumulatedquantity+cart.quantity,0)

);
