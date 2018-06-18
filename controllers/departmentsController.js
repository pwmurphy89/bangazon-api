const { getDepartments, getOneDepartment, postDepartment, putDepartment } = require('../models/departmentsModel');

module.exports.getAllDepartments = (req, res, next) => {
    getDepartments()
    .then( (departments) => {
    res.status(200).json(departments);
    })
    .catch( (err) => {
    next(err);
    });
};
module.exports.getThisDepartment = (req, res, next) => {
    getOneDepartment(req.params.id)
    .then( (department) => {
      res.status(200).json(department);
    })
    .catch( (err) => {
      next(err);
    });
};
module.exports.postThisDepartment = (req, res, next) => {
    postDepartment(req.body)
    .then( (message) => {
      res.status(200).json(message);
    })
    .catch( (err) => {
      next(err);
    });
};
module.exports.putThisDepartment = (req, res, next) => {
    putDepartment(req.body, req.params.id)
    .then( (updatedDepartment) => {
      res.status(200).json(updatedDepartment);
    })
    .catch( (err) => {
      next(err);
    });
};