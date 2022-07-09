const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shopsSchema = new Schema({
    shopName: {
        type: String,
        required: true
    }
});

const Shops = mongoose.model('shops', shopsSchema, "shops");

module.exports = Shops;
