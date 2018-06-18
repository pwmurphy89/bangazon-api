const { getAllProducts, getThisProduct, deleteThisProduct, postThisProduct, putThisProduct } = require('../controllers/productsController');

const { Router } = require('express');
const router = Router();

router.get("/products", getAllProducts)
router.get('/products/:id', getThisProduct);
router.delete('/products/:id', deleteThisProduct);
router.post('/products', postThisProduct);
router.put('/products/:id', putThisProduct);

module.exports = router