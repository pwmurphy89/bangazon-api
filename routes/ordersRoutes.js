const { getAllOrders, getThisOrder, deleteThisOrder, postThisOrder, putThisOrder } = require('../controllers/ordersController');

const { Router } = require('express');
const router = Router();

router.get("/orders", getAllOrders)
router.get('/orders/:id', getThisOrder);
router.delete('/orders/:id', deleteThisOrder);
router.post('/orders', postThisOrder);
router.put('/orders/:id', putThisOrder);

module.exports = router