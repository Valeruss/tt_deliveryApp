import React from 'react';
import { useDispatch } from 'react-redux';
import { changeCountAction, removeProductAction } from '../../store/cartReducer';
import './CartItem.scss';

const CartItem = ({ product, updateTotalPrice }) => {
    const imageURL = `assets/${product.image}`;
    const dispatch = useDispatch();

    const changeProductCount = (count) => {
        product.count = count;
        dispatch(changeCountAction(product));
    }
    
    const removeProductFromCart = (_product) => {
        dispatch(removeProductAction(_product));
        updateTotalPrice();
    }

    return (
        <div className='cart-item'>
            <div className='cart-item-image'>
                <img src={imageURL} alt={product.productName} />
            </div>
            <div className='cart-item-info'>
                <div>{product.productName}</div>
                <div>{product.price}</div>
                <div className='cart-item-count'>
                    <input
                        type='number'
                        defaultValue={1}
                        min={1}
                        max={10}
                        onChange={event => { changeProductCount(event.target.value); updateTotalPrice() }}
                    />
                </div>
            </div>
            <div 
                className='cart-item-delete'
                onClick={() => removeProductFromCart(product)}
            >
                Delete
            </div>
        </div>
    );
};

export default CartItem;
