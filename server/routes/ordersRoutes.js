const Router = require('express');
const ordersController = require('../controllers/ordersController');

const router = new Router();

router.get('/', ordersController.getAll);
router.post('/get', ordersController.getByEmailAndPhone);
router.post('/create', ordersController.addOrder);

module.exports = router;
