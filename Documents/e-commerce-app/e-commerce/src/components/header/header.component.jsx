import React from 'react';
import './header.styles.scss';

import {ReactComponent as Logo} from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-droppdown/cart-dropdown.component'; 
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
// el currentUser lo recibe del reducer 
const Header = ({currentUser,hidden}) =>(
    <div className='header'>
        <Link  className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'> SHOP</Link>
            <Link className='option' to=''> CONTACT</Link>
        
        {
            currentUser ?
           ( <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>)
            :
           ( <Link className='option' to='/signin'>SIGN IN</Link>)
        }
        <CartIcon/>
        </div>
       { hidden ? null :
        <CartDropdown/>
       }
    </div>
);

/*const mapStateToProps = state =>({
    currentUser: state.user.currentUser
})*/
// mejor manera de hacerlo es la siguiente ( de user quiero current user, y de cart quiero hidden)

/*const mapStateToProps = ({user:{currentUser},cart:{hidden}}) =>({
    currentUser,
    hidden
})
 cambiaría a :
 const mapStateToProps = (state) =>({
    currentUser:selectCurrentUser(state),
    hidden:selectCartHidden(state)
})
pero existe el structure selector  ---->
*/
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);