import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAction } from '../../store/cartReducer';
import './ProductItem.scss';

const ProductItem = ({ product }) => {
    const imageURL = `assets/${product.image}`;
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.products);

    const addProductToCart = (_product) => {
        if (cart.findIndex((product) => product._id === _product._id) !== -1) {
            return alert('Product is already in cart');
        } 
        _product.count = 1;
        dispatch(addProductAction(_product));
    }

    return (
        <div className='product-item'>
            <div className='product-image'>
                <img src={imageURL} alt={product.productName}/>
            </div>
            <div className='product-name'>{product.productName}</div>
            <div className='submit-btn'
                onClick={() => addProductToCart(product)}
            >
                Add to Cart
            </div>
        </div>
    );
};

export default ProductItem;
