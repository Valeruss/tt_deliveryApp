import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import './Cart.scss';

const Cart = ({ updateTotalPrice }) => {
    const cart = useSelector((state) => state.cart.products);

    return (
        <div className='cart-wrapper'>
            {cart.length === 0 ?
                <div>Cart is empty</div>
                :
                <div className='cart-list'>
                    {cart.map((product, index) =>
                        <CartItem key={index} product={product} updateTotalPrice={updateTotalPrice} />
                    )}  
                </div>
            }
        </div>
    );
};

export default Cart;
