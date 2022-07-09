const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ordersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    order: {
        type: Object,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
});

const Orders = mongoose.model('orders', ordersSchema, 'orders');

module.exports = Orders;
