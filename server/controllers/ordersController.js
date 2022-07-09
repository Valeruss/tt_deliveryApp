const Orders = require('../models/orders.js');

class OrdersController {
    async getAll (request, response) {
        try {
            const orders = await Orders.find();
            return response.json(orders);
        } catch (error) {
            console.log(error);
            return response.json('error');
        }
    }

    async getByEmailAndPhone (request, response) {
        try {
            const { email, phone } = request.body;
            const orders = await Orders.find({ email, phone });
            return response.json(orders);
        } catch (error) {
            console.log(error);
            return response.json('error');
        }
    }

    async addOrder (request, response, next) {
        try {
            const { name, email, phone, address, order, totalPrice } = request.body;
            const newOrder = await Orders.create({ name, email, phone, address, order, totalPrice });
            return response.json(newOrder);
        } catch (error) {
            console.log(error);
            return response.json('error');
        }
    }
}

module.exports = new OrdersController();
