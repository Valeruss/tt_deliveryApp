import React from 'react';
import OrderItem from '../OrderItem/OrderItem.js';
import './Orders.scss';

const Orders = ({ orders }) => {
    return (
        <div className='orders-wrapper'>
            {orders.map((order) =>
                <OrderItem order={order} key={order._id} />
            )}
        </div>
    );
};

export default Orders;
