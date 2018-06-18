const { getAllUsers, getThisUser, postThisUser, putThisUser } = require('../controllers/usersController');

const { Router } = require('express');
const router = Router();

router.get("/users", getAllUsers)
router.get('/users/:id', getThisUser);
router.post('/users', postThisUser);
router.put('/users/:id', putThisUser);

module.exports = router