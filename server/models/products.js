const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema({
    shopName: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    }
});

const Products = mongoose.model('products', productsSchema, 'products');

module.exports = Products;
