const { getAllDepartments, getThisDepartment, postThisDepartment, putThisDepartment } = require('../controllers/DepartmentsController');

const { Router } = require('express');
const router = Router();

router.get("/departments", getAllDepartments)
router.get('/departments/:id', getThisDepartment);
router.post('/departments', postThisDepartment);
router.put('/departments/:id', putThisDepartment);

module.exports = router