import React from 'react';
import './OrderItemProduct.scss';

const OrderItemProduct = ({ product }) => {
    const imageURL = `assets/${product.image}`;

    return (
        <div className='order-item-product-wrapper'>
            <div className='order-item-product-image'>
                <img src={imageURL} alt={product.productName}/>
            </div>
            <div className='order-item-info'>
                <div>{product.productName}</div>
                <div>Price: {product.price} X {product.count}</div>
            </div>
        </div>
    );
};

export default OrderItemProduct;
