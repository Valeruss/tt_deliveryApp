const Shops = require('../models/shops.js')

class ShopsController {
    async getAll (request, response) {
        try {
            const shops = await Shops.find();
            return response.json(shops);
        } catch (error) {
            console.log(error)
            return response.json('error')
        }
    }

    async addShop (request, response, next) {
        try {
            const { shopName } = request.body;
            const shop = await Shops.create({ shopName });
            return response.json(shop);
        } catch (error) {
            console.log(error);
            return response.json('error');
        }
    }
}

module.exports = new ShopsController();
