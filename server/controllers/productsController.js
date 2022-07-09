const Products = require('../models/products.js');

class ProductsController {
    async getAll (request, response) {
        try {
            const products = await Products.find();
            return response.json(products);
        } catch (error) {
            console.log(error);
            return response.json('error');
        }
    }

    async getByShopName (request, response) {
        try {
            const { shopName } = request.params;
            const products = await Products.find({ shopName });
            return response.json(products);
        } catch (error) {
            console.log(error);
            return response.json('error');
        }
    }

    async addProduct (request, response, next) {
        try {
            const { shopName, productName, price, image } = request.body;
            const product = await Products.create({ shopName, productName, price, image });
            return response.json(product);
        } catch (error) {
            console.log(error);
            return response.json('error');
        }
    }
}

module.exports = new ProductsController();
