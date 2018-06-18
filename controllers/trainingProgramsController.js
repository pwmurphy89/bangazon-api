const { getTrainingPrograms, getOneTrainingProgram, deleteOneTrainingProgram, postTrainingProgram, putTrainingProgram } = require('../models/trainingProgramsModel');

module.exports.getAllTrainingPrograms = (req, res, next) => {
    getTrainingPrograms()
    .then( (trainingPrograms) => {
    res.status(200).json(trainingPrograms);
    })
    .catch( (err) => {
    next(err);
    });
};
module.exports.getThisTrainingProgram = (req, res, next) => {
    getOneTrainingProgram(req.params.id)
    .then( (trainingProgram) => {
      res.status(200).json(trainingProgram);
    })
    .catch( (err) => {
      next(err);
    });
};
module.exports.deleteThisTrainingProgram = (req, res, next) => {
    deleteOneTrainingProgram(req.params.id)
    .then( (message) => {
      res.status(200).json(message);
    })
    .catch( (err) => {
      next(err);
    });
};
module.exports.postThisTrainingProgram = (req, res, next) => {
    postTrainingProgram(req.body)
    .then( (message) => {
      res.status(200).json(message);
    })
    .catch( (err) => {
      next(err);
    });
};
module.exports.putThisTrainingProgram = (req, res, next) => {
    putTrainingProgram(req.body, req.params.id)
    .then( (updatedTrainingProgram) => {
      res.status(200).json(updatedTrainingProgram);
    })
    .catch( (err) => {
      next(err);
    });
};