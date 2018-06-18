const { getAllPaymentTypes, getThisPaymentType, deleteThisPaymentType, postThisPaymentType, putThisPaymentType } = require('../controllers/paymentTypesController');

const { Router } = require('express');
const router = Router();

router.get("/paymentTypes", getAllPaymentTypes)
router.get('/paymentTypes/:id', getThisPaymentType);
router.delete('/paymentTypes/:id', deleteThisPaymentType);
router.post('/paymentTypes', postThisPaymentType);
router.put('/paymentTypes/:id', putThisPaymentType);

module.exports = router