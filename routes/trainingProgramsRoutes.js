const { getAllTrainingPrograms, getThisTrainingProgram, deleteThisTrainingProgram, postThisTrainingProgram, putThisTrainingProgram } = require('../controllers/trainingProgramsController');

const { Router } = require('express');
const router = Router();

router.get("/trainingPrograms", getAllTrainingPrograms)
router.get('/trainingPrograms/:id', getThisTrainingProgram);
router.delete('/trainingPrograms/:id', deleteThisTrainingProgram);
router.post('/trainingPrograms', postThisTrainingProgram);
router.put('/trainingPrograms/:id', putThisTrainingProgram);

module.exports = router