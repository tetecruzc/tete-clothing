import React from 'react';
import './header.styles.scss';

import {ReactComponent as Logo} from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-droppdown/cart-dropdown.component'; 

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
const mapStateToProps = ({user:{currentUser},cart:{hidden}}) =>({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);