const { getAllEmployees, getThisEmployee, postThisEmployee, putThisEmployee } = require('../controllers/employeesController');

const { Router } = require('express');
const router = Router();

router.get("/employees", getAllEmployees)
router.get('/employees/:id', getThisEmployee);
router.post('/employees', postThisEmployee);
router.put('/employees/:id', putThisEmployee);

module.exports = router