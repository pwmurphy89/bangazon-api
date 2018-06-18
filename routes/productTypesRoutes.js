const { getAllProductTypes, getThisProductType, deleteThisProductType, postThisProductType, putThisProductType } = require('../controllers/productTypesController');

const { Router } = require('express');
const router = Router();

router.get("/productTypes", getAllProductTypes)
router.get('/productTypes/:id', getThisProductType);
router.delete('/productTypes/:id', deleteThisProductType);
router.post('/productTypes', postThisProductType);
router.put('/productTypes/:id', putThisProductType);

module.exports = router