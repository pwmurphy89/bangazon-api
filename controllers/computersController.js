const { getComputers, getOneComputer, deleteOneComputer, postComputer, putComputer } = require('../models/computersModel');

module.exports.getAllComputers = (req, res, next) => {
    getComputers()
    .then( (computers) => {
    res.status(200).json(computers);
    })
    .catch( (err) => {
    next(err);
    });
};
module.exports.getThisComputer = (req, res, next) => {
    getOneComputer(req.params.id)
    .then( (computer) => {
      res.status(200).json(computer);
    })
    .catch( (err) => {
      next(err);
    });
};
module.exports.deleteThisComputer = (req, res, next) => {
    deleteOneComputer(req.params.id)
    .then( (message) => {
      res.status(200).json(message);
    })
    .catch( (err) => {
      next(err);
    });
};
module.exports.postThisComputer = (req, res, next) => {
    postComputer(req.body)
    .then( (message) => {
      res.status(200).json(message);
    })
    .catch( (err) => {
      next(err);
    });
};
module.exports.putThisComputer = (req, res, next) => {
    putComputer(req.body, req.params.id)
    .then( (updatedComputer) => {
      res.status(200).json(updatedComputer);
    })
    .catch( (err) => {
      next(err);
    });
};