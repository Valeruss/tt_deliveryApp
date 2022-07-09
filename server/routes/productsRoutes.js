const Router = require('express');
const productsController = require('../controllers/productsController');

const router = new Router();

router.get('/', productsController.getAll);
router.get('/:shopName', productsController.getByShopName);
router.post('/', productsController.addProduct)

module.exports = router;
