import React from 'react';
import OrderItemProduct from '../OrderItemProduct/OrderItemProduct';
import './OrderItem.scss';

const OrderItem = ({ order }) => {
    return (
        <div className='order-item-wrapper'>
            <div className='order-products-list'>
                {order.order.map((product, index) =>
                    <OrderItemProduct key={index} product={product}/>                    
                )}
            </div>
            <div className='order-total-price'>
                <div className='order-total-price-inside'>
                    <div>Total price: {order.totalPrice}</div>
                </div>
            </div>
        </div>
    );
};

export default OrderItem;
