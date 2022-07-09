const Router = require('express');
const shopsController = require('../controllers/shopsController');

const router = new Router();

router.get('/', shopsController.getAll);
router.post('/', shopsController.addShop);

module.exports = router;
