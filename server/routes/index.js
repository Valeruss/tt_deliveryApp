const Router = require('express');
const shopsRouter = require('./shopsRouter');
const productsRouter = require('./productsRoutes');
const ordersRouter = require('./ordersRoutes');

const router = new Router();

router.use('/shops', shopsRouter);
router.use('/products', productsRouter);
router.use('/orders', ordersRouter)

module.exports = router;
