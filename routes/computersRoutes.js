const { getAllComputers, getThisComputer, deleteThisComputer, postThisComputer, putThisComputer } = require('../controllers/computersController');

const { Router } = require('express');
const router = Router();

router.get("/computers", getAllComputers)
router.get('/computers/:id', getThisComputer);
router.delete('/computers/:id', deleteThisComputer);
router.post('/computers', postThisComputer);
router.put('/computers/:id', putThisComputer);

module.exports = router